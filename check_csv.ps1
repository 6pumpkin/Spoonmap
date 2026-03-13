$csv = "spoonmap_list.csv"
$utf8 = [System.Text.Encoding]::UTF8
$fs = New-Object System.IO.FileStream($csv, 'Open', 'Read', 'ReadWrite')
$r = New-Object System.IO.StreamReader($fs, $utf8)
$txt = $r.ReadToEnd()
$r.Close()
$fs.Close()

$lines = $txt.Split("`n")
Write-Host "Lines: $($lines.Count)"
# First 10
for($i=0; $i -lt 10; $i++) { Write-Host $lines[$i] }

# Search
Write-Host "Searching..."
foreach($l in $lines) {
    if ($l -match "TOL") { Write-Host "FOUND TOL: $l" }
    if ($l -match "톨") { Write-Host "FOUND 톨: $l" }
    if ($l -match "맥도날드") { Write-Host "FOUND MCD: $l" }
}
