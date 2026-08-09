$key = '36e745d970cf6ee083e08a59ebf3c951'
$headers = @{ Authorization = "KakaoAK $key" }
$url = "https://dapi.kakao.com/v2/search/blog?query=%EC%9D%84%EB%B0%80%EB%8C%80%20%EB%83%89%EB%A9%B4%20%EB%A7%9B%EC%A7%91&size=5"

try {
    $res = Invoke-RestMethod -Uri $url -Headers $headers -Method Get
    foreach ($doc in $res.documents) {
        $hdUrl = $doc.thumbnail -replace '130x130', '800x800'
        Write-Host "Title:" $doc.title
        Write-Host "HD Kakao CDN URL:" $hdUrl
        Write-Host "---"
    }
} catch {
    Write-Host "Error:" $_.Exception.Message
}
