$p = "spoonmap_list.csv"
$o = "data.js"

# Read with shared stream to avoid lock issues
$fs = New-Object System.IO.FileStream($p, 'Open', 'Read', 'ReadWrite')
$reader = New-Object System.IO.StreamReader($fs, [System.Text.Encoding]::UTF8)
$txt = $reader.ReadToEnd()
$reader.Close()
$fs.Close()

$lines = $txt.Split("`n")

function Parse($l) {
    if ([string]::IsNullOrWhiteSpace($l)) { return $null }
    $cols = New-Object System.Collections.Generic.List[string]
    $curr = ""
    $q = $false
    # Strip any trailing \r
    $line = $l.TrimEnd()
    for ($i = 0; $i -lt $line.Length; $i++) {
        $char = $line[$i]
        if ($char -eq '"') { $q = -not $q }
        elseif ($char -eq ',' -and -not $q) { $cols.Add($curr.Trim()); $curr = "" }
        else { $curr += $char }
    }
    $cols.Add($curr.Trim())
    return $cols
}

# Pass 1: Count total occurrences of each map_url (or name) in CSV
$visitCounts = @{}
for ($i = 1; $i -lt $lines.Count; $i++) {
    $c = Parse $lines[$i]
    if ($null -eq $c -or $c.Count -lt 3) { continue }
    $url = $c[2].Trim('"').Trim()
    $name = $c[0].Trim('"').Trim()
    $key = if ($url) { $url } else { $name }
    if (-not $key) { continue }
    if (-not $visitCounts.ContainsKey($key)) { $visitCounts[$key] = 0 }
    $visitCounts[$key]++
}

# Pass 2: Iterate from bottom of CSV to top (newest entries first), deduplicating by map_url
$seen = New-Object System.Collections.Generic.HashSet[string]
$res = New-Object System.Collections.Generic.List[PSCustomObject]

for ($i = $lines.Count - 1; $i -ge 1; $i--) {
    $c = Parse $lines[$i]
    if ($null -eq $c -or $c.Count -lt 10) { continue }
    
    $url = $c[2].Trim('"').Trim()
    if ([string]::IsNullOrWhiteSpace($url)) { continue } # SKIP IF NO URL

    if ($seen.Contains($url)) { continue }
    [void]$seen.Add($url)

    $name = $c[0].Trim('"').Trim()
    if ($name.Length -lt 1) { continue }

    $m = New-Object System.Collections.Generic.List[string]
    if ($c[7]) { 
        $c[7].Split(',') | ForEach-Object { 
            $v = $_.Trim().Trim('"')
            if ($v) { $m.Add($v) }
        } 
    }
    
    $count = if ($visitCounts.ContainsKey($url)) { $visitCounts[$url] } else { 1 }

    $res.Add([PSCustomObject]@{
        category = $c[6].Trim('"')
        name = $name
        location_small = $c[9].Trim('"')
        rate = $c[3].Trim('"')
        map_url = $url
        location_large = $c[8].Trim('"')
        menu = $m
        visit_count = $count
    })
}

# Pass 3: Generate diaryData (ALL rows with date, NOT deduplicated - for calendar view)
$diary = New-Object System.Collections.Generic.List[PSCustomObject]
for ($i = 1; $i -lt $lines.Count; $i++) {
    $c = Parse $lines[$i]
    if ($null -eq $c -or $c.Count -lt 10) { continue }

    $name = $c[0].Trim('"').Trim()
    if ($name.Length -lt 1) { continue }

    $date = $c[1].Trim('"').Trim()
    if ([string]::IsNullOrWhiteSpace($date)) { continue } # Skip entries without date

    $url = $c[2].Trim('"').Trim()

    $m = New-Object System.Collections.Generic.List[string]
    if ($c[7]) { 
        $c[7].Split(',') | ForEach-Object { 
            $v = $_.Trim().Trim('"')
            if ($v) { $m.Add($v) }
        } 
    }

    $diary.Add([PSCustomObject]@{
        date = $date
        name = $name
        category = $c[6].Trim('"')
        location_small = $c[9].Trim('"')
        rate = $c[3].Trim('"')
        map_url = $url
        location_large = $c[8].Trim('"')
        menu = $m
    })
}

$json = $res | ConvertTo-Json -Depth 5
$diaryJson = $diary | ConvertTo-Json -Depth 5
$output = "const restaurantData = $json;`nconst diaryData = $diaryJson;"
[System.IO.File]::WriteAllText($o, $output, (New-Object System.Text.UTF8Encoding($false)))
Write-Host "Success: $($res.Count) items synced with visit_count, $($diary.Count) diary entries."
