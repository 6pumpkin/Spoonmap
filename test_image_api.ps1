$key = '36e745d970cf6ee083e08a59ebf3c951'
$headers = @{ Authorization = "KakaoAK $key" }
$url = "https://dapi.kakao.com/v2/search/blog?query=%EB%8B%B5%ED%94%BC%EC%9E%90%20%EC%9A%A9%EC%82%B0%EA%B5%AC%20%EB%A7%9B%EC%A7%91&size=2"

try {
    $res = Invoke-RestMethod -Uri $url -Headers $headers -Method Get
    foreach ($doc in $res.documents) {
        $cleanTitle = $doc.title -replace '<[^>]+>', ''
        $cleanContents = $doc.contents -replace '<[^>]+>', ''
        Write-Host "Title:" $cleanTitle
        Write-Host "Contents Snippet:" $cleanContents
        Write-Host "---"
    }
} catch {
    Write-Host "Error:" $_.Exception.Message
}
