$key = '36e745d970cf6ee083e08a59ebf3c951'
$headers = @{ Authorization = "KakaoAK $key" }
$url = "https://dapi.kakao.com/v2/search/image?query=%EC%9D%84%EB%B0%80%EB%8C%80%20%EB%A7%9B%EC%A7%91&size=10"

try {
    $res = Invoke-RestMethod -Uri $url -Headers $headers -Method Get
    Write-Host "Count:" $res.documents.Count
    foreach ($doc in $res.documents) {
        Write-Host "Site: $($doc.display_sitename) | Thumb: $($doc.thumbnail_url)"
    }
} catch {
    Write-Host "Error: $($_.Exception.Message)"
}
