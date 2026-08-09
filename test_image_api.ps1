$key = '36e745d970cf6ee083e08a59ebf3c951'
$headers = @{ Authorization = "KakaoAK $key" }
$url = "https://dapi.kakao.com/v2/search/image?query=%ED%86%A0%EC%86%8D%EC%B5%9C%EC%82%BC%EA%B3%84%ED%83%95&size=5"

try {
    $res = Invoke-RestMethod -Uri $url -Headers $headers -Method Get
    Write-Host ($res | ConvertTo-Json -Depth 3)
} catch {
    Write-Host "Error:" $_.Exception.Message
}
