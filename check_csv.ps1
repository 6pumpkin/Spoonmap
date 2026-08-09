$csv = "spoonmap_list.csv"
$utf8 = [System.Text.Encoding]::UTF8
$fs = New-Object System.IO.FileStream($csv, 'Open', 'Read', 'ReadWrite')
$r = New-Object System.IO.StreamReader($fs, $utf8)
$txt = $r.ReadToEnd()
$r.Close()
$fs.Close()

$lines = $txt.Split("`n")

function Parse($l) {
    if ([string]::IsNullOrWhiteSpace($l)) { return $null }
    $cols = New-Object System.Collections.Generic.List[string]
    $curr = ""
    $q = $false
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

$counts = @{}
for ($i = 1; $i -lt $lines.Count; $i++) {
    $c = Parse $lines[$i]
    if ($null -eq $c -or $c.Count -lt 3) { continue }
    $url = $c[2].Trim('"')
    if (-not $url) { continue }
    if (-not $counts.ContainsKey($url)) { $counts[$url] = 0 }
    $counts[$url]++
}

Write-Host "Total unique URLs: $($counts.Count)"
$multi = $counts.GetEnumerator() | Where-Object { $_.Value -gt 1 } | Sort-Object Value -Descending
Write-Host "Visited >= 2 times: $($multi.Count)"

Write-Host "`nTop 15 Most Visited Restaurants:"
$multi | Select-Object -First 15 | ForEach-Object {
    Write-Host "$($_.Value) times: $($_.Key)"
}
