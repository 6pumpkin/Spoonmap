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

$auditCache = @{}
$cacheFile = "C:\Users\user\.gemini\antigravity\brain\4d51a55a-3e68-4735-98e4-e0af52ec8a70\scratch\place_audit_cache.json"
if (Test-Path $cacheFile) {
    try {
        $cacheJson = [System.IO.File]::ReadAllText($cacheFile, [System.Text.Encoding]::UTF8)
        $cacheObj = $cacheJson | ConvertFrom-Json
        foreach ($prop in $cacheObj.PSObject.Properties) {
            $auditCache[$prop.Name] = $prop.Value
        }
    } catch { }
}

# Pass 1: Count total occurrences & find latest date for each map_url/name in CSV
$visitCounts = @{}
$latestDates = @{}

for ($i = 1; $i -lt $lines.Count; $i++) {
    $c = Parse $lines[$i]
    if ($null -eq $c -or $c.Count -lt 3) { continue }
    $url = $c[2].Trim('"').Trim()
    $name = $c[0].Trim('"').Trim()
    $date = $c[1].Trim('"').Trim()
    $key = if ($url) { $url } else { $name }
    if (-not $key) { continue }

    if (-not $visitCounts.ContainsKey($key)) { $visitCounts[$key] = 0 }
    $visitCounts[$key]++

    if ($date) {
        if (-not $latestDates.ContainsKey($key) -or $date -gt $latestDates[$key]) {
            $latestDates[$key] = $date
        }
    }
}

# Pass 2: Iterate from bottom of CSV to top, deduplicating by map_url
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
    $latestDate = if ($latestDates.ContainsKey($url)) { $latestDates[$url] } elseif ($latestDates.ContainsKey($name)) { $latestDates[$name] } else { "" }

    $isClosed = $false
    if ($c.Count -gt 5 -and $c[5] -match '폐점') { $isClosed = $true }
    if (-not $isClosed -and $auditCache.ContainsKey($url)) {
        $isClosed = [bool]$auditCache[$url].isClosed
    }

    $res.Add([PSCustomObject]@{
        category = $c[6].Trim('"')
        name = $name
        date = $latestDate
        location_small = $c[9].Trim('"')
        rate = $c[3].Trim('"')
        map_url = $url
        location_large = $c[8].Trim('"')
        menu = $m
        visit_count = $count
        closed = $isClosed
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

    $dClosed = $false
    if ($c.Count -gt 5 -and $c[5] -match '폐점') { $dClosed = $true }
    if (-not $dClosed -and $auditCache.ContainsKey($url)) {
        $dClosed = [bool]$auditCache[$url].isClosed
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
        closed = $dClosed
    })
}

$json = $res | ConvertTo-Json -Depth 5
$diaryJson = $diary | ConvertTo-Json -Depth 5
$output = "const restaurantData = $json;`nconst diaryData = $diaryJson;"
[System.IO.File]::WriteAllText($o, $output, (New-Object System.Text.UTF8Encoding($false)))
Write-Host "Success: $($res.Count) items synced with visit_count and latest date, $($diary.Count) diary entries."
