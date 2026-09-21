# JS Syntax & Bracket Matcher Validator with Regex and Template support
param(
    [string]$FilePath = "app.js"
)

if (-not (Test-Path $FilePath)) {
    Write-Error "File not found: $FilePath"
    exit 1
}

$text = [System.IO.File]::ReadAllText((Resolve-Path $FilePath), [System.Text.Encoding]::UTF8)
$len = $text.Length

$stack = New-Object System.Collections.Generic.Stack[PSObject]
$line = 1
$errors = New-Object System.Collections.Generic.List[string]

$lastNonWhitespaceChar = ''
$i = 0

while ($i -lt $len) {
    $c = $text[$i]

    if ($c -eq "`n") {
        $line++
        $i++
        continue
    }

    if ([char]::IsWhiteSpace($c)) {
        $i++
        continue
    }

    # 1. Single-line comment //
    if ($c -eq '/' -and ($i + 1 -lt $len) -and $text[$i+1] -eq '/') {
        $i += 2
        while ($i -lt $len -and $text[$i] -ne "`n") {
            $i++
        }
        continue
    }

    # 2. Multi-line comment /* */
    if ($c -eq '/' -and ($i + 1 -lt $len) -and $text[$i+1] -eq '*') {
        $i += 2
        while ($i + 1 -lt $len -and -not ($text[$i] -eq '*' -and $text[$i+1] -eq '/')) {
            if ($text[$i] -eq "`n") { $line++ }
            $i++
        }
        $i += 2
        continue
    }

    # 3. Regular Expressions /pattern/flags
    # A slash is regex if preceded by: = ( [ , : ! & | ? { ; or start of statement
    $isRegexPrefix = "=([,:!&|?{;".IndexOf($lastNonWhitespaceChar) -ge 0 -or $lastNonWhitespaceChar -eq ''
    if ($c -eq '/' -and $isRegexPrefix) {
        $i++
        $inCharClass = $false
        while ($i -lt $len) {
            $rc = $text[$i]
            if ($rc -eq "`n") { break } # regex cannot span newlines without escape
            if ($rc -eq '\') {
                $i += 2
                continue
            }
            if ($rc -eq '[') { $inCharClass = $true }
            if ($rc -eq ']') { $inCharClass = $false }
            if ($rc -eq '/' -and -not $inCharClass) {
                $i++
                # Skip flags (g, i, m, s, u, y)
                while ($i -lt $len -and [char]::IsLetter($text[$i])) {
                    $i++
                }
                break
            }
            $i++
        }
        $lastNonWhitespaceChar = '0' # treat regex literal as value/operand
        continue
    }

    # 4. Strings (' or ")
    if ($c -eq "'" -or $c -eq '"') {
        $quote = $c
        $i++
        while ($i -lt $len) {
            $sc = $text[$i]
            if ($sc -eq "`n") { $line++ }
            if ($sc -eq '\') {
                $i += 2
                continue
            }
            if ($sc -eq $quote) {
                $i++
                break
            }
            $i++
        }
        $lastNonWhitespaceChar = '0'
        continue
    }

    # 5. Template literals (`)
    if ($c -eq '`') {
        $i++
        while ($i -lt $len) {
            $tc = $text[$i]
            if ($tc -eq "`n") { $line++ }
            if ($tc -eq '\') {
                $i += 2
                continue
            }
            if ($tc -eq '$' -and ($i + 1 -lt $len) -and $text[$i+1] -eq '{') {
                $stack.Push([PSCustomObject]@{ Char = '{'; Line = $line; Type = 'template' })
                $i += 2
                $lastNonWhitespaceChar = '{'
                break
            }
            if ($tc -eq '`') {
                $i++
                break
            }
            $i++
        }
        if ($tc -eq '`') {
            $lastNonWhitespaceChar = '0'
        }
        continue
    }

    # 6. Brackets: open
    if ($c -eq '{' -or $c -eq '(' -or $c -eq '[') {
        $stack.Push([PSCustomObject]@{ Char = $c; Line = $line; Type = 'bracket' })
        $lastNonWhitespaceChar = $c
        $i++
        continue
    }

    # 7. Brackets: close
    if ($c -eq '}' -or $c -eq ')' -or $c -eq ']') {
        if ($stack.Count -eq 0) {
            $errors.Add("Extra closing '$c' at line $line")
        } else {
            $top = $stack.Pop()
            $expected = switch ($top.Char) {
                '{' { '}' }
                '(' { ')' }
                '[' { ']' }
            }
            if ($c -ne $expected) {
                $errors.Add("Mismatched bracket: opened '$($top.Char)' at line $($top.Line), but closed with '$c' at line $line")
            }
            if ($top.Type -eq 'template') {
                # Resume parsing template literal!
                while ($i + 1 -lt $len) {
                    $i++
                    $tc = $text[$i]
                    if ($tc -eq "`n") { $line++ }
                    if ($tc -eq '\') { $i++; continue }
                    if ($tc -eq '$' -and ($i + 1 -lt $len) -and $text[$i+1] -eq '{') {
                        $stack.Push([PSCustomObject]@{ Char = '{'; Line = $line; Type = 'template' })
                        $i++
                        break
                    }
                    if ($tc -eq '`') {
                        break
                    }
                }
            }
        }
        $lastNonWhitespaceChar = $c
        $i++
        continue
    }

    $lastNonWhitespaceChar = $c
    $i++
}

while ($stack.Count -gt 0) {
    $unclosed = $stack.Pop()
    $errors.Add("Unclosed '$($unclosed.Char)' opened at line $($unclosed.Line)")
}

if ($errors.Count -eq 0) {
    Write-Host "[VALIDATION SUCCESS] ${FilePath} syntax & bracket balance verified clean!" -ForegroundColor Green
    exit 0
} else {
    Write-Host "[VALIDATION ERROR] Found $($errors.Count) syntax issue(s) in ${FilePath}:" -ForegroundColor Red
    foreach ($err in $errors) {
        Write-Host "  - $err" -ForegroundColor Yellow
    }
    exit 1
}
