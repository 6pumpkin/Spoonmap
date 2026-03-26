$p = "spoonmap_list.csv"
$o = "data.js"

# Read with shared stream to avoid lock issues
$fs = New-Object System.IO.FileStream($p, 'Open', 'Read', 'ReadWrite')
$reader = New-Object System.IO.StreamReader($fs, [System.Text.Encoding]::UTF8)
$txt = $reader.ReadToEnd()
$reader.Close()
$fs.Close()

$lines = $txt.Split("`n")
$res = New-Object System.Collections.Generic.List[PSCustomObject]

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

$seen = New-Object System.Collections.Generic.HashSet[string]

for ($i = 1; $i -lt $lines.Count; $i++) {
    $c = Parse $lines[$i]
    if ($null -eq $c -or $c.Count -lt 10) { continue }
    
    $url = $c[2].Trim('"')
    if ([string]::IsNullOrWhiteSpace($url)) { continue } # SKIP IF NO URL

    # SKIP DUPLICATES: same map_url = same restaurant (visited multiple times)
    if ($seen.Contains($url)) { continue }
    [void]$seen.Add($url)

    $name = $c[0].Trim('"').Trim()
    if ($name.Length -lt 1) { continue } # ALLOW 1-CHARACTER NAMES (like '톨')

    $m = New-Object System.Collections.Generic.List[string]
    if ($c[7]) { 
        $c[7].Split(',') | ForEach-Object { 
            $v = $_.Trim().Trim('"')
            if ($v) { $m.Add($v) }
        } 
    }
    
    $res.Add([PSCustomObject]@{
        category = $c[6].Trim('"')
        name = $name
        location_small = $c[9].Trim('"')
        rate = $c[3].Trim('"')
        map_url = $url
        location_large = $c[8].Trim('"')
        menu = $m
    })
}

$json = $res | ConvertTo-Json -Depth 5
[System.IO.File]::WriteAllText($o, "const restaurantData = $json;", (New-Object System.Text.UTF8Encoding($false)))
Write-Host "Success: $($res.Count)"
