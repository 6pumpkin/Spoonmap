$key = '36e745d970cf6ee083e08a59ebf3c951'
$headers = @{ Authorization = "KakaoAK $key" }

$q = "https://dapi.kakao.com/v2/search/image?query=%EC%9D%84%EB%B0%80%EB%8C%80%20%EB%83%89%EB%A9%B4&size=5"
try {
    $res = Invoke-RestMethod -Uri $q -Headers $headers -Method Get
    Write-Host "Count:" $res.documents.Count
    foreach ($doc in $res.documents) {
        Write-Host "DocURL:" $doc.doc_url
        Write-Host "ImageURL:" $doc.image_url
        Write-Host "---"
    }
} catch {
    Write-Host "Error:" $_.Exception.Message
}
