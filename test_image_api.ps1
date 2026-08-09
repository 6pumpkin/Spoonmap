$key = '36e745d970cf6ee083e08a59ebf3c951'
$headers = @{ Authorization = "KakaoAK $key" }
$url = "https://dapi.kakao.com/v2/search/image?query=%EC%9D%84%EB%B0%80%EB%8C%80%20%EB%83%89%EB%A9%B4%20%EB%A7%9B%EC%A7%91&size=3"

try {
    $res = Invoke-RestMethod -Uri $url -Headers $headers -Method Get
    foreach ($doc in $res.documents) {
        Write-Host "Original Image URL:" $doc.image_url
        Write-Host "Width x Height:" $doc.width "x" $doc.height
        Write-Host "Thumbnail URL:" $doc.thumbnail_url
        Write-Host "---"
    }
} catch {
    Write-Host "Error:" $_.Exception.Message
}
