# Spoonmap 실제 지도 활성화 가이드

앱에 실제 지도를 띄우고 식당 위치를 표시하기 위한 모든 준비를 마쳤습니다. 지도를 활성화하려면 아래 3가지만 진행해 주시면 됩니다.

---

## 1단계: 카카오 API 키 발급받기
1.  [카카오 개발자 센터](https://developers.kakao.com/)에 접속하여 로그인합니다.
2.  **'내 애플리케이션'** > **'애플리케이션 추가하기'**를 클릭하여 앱을 생성합니다.
3.  생성된 앱의 **'요약 정보'**에서 **'JavaScript 키'**를 복사합니다.

## 2단계: 도메인 등록하기 (중요)
1.  앱 설정 메뉴에서 **'플랫폼'** > **'Web'** 플랫폼 등록을 클릭합니다.
2.  **사이트 도메인**에 현재 앱이 실행되는 주소를 입력합니다. (예: `http://localhost:5500` 또는 `http://127.0.0.1:5500`)

## 3단계: 코드에 키 적용하기
1.  [index.html](file:///c:/Users/이시훈/Desktop/박준호/Spoonmap/index.html) 파일 최하단의 91번 라인 근처를 확인합니다.
2.  `YOUR_APP_KEY_HERE` 부분을 아까 복사한 **JavaScript 키**로 교체합니다.

```html
<!-- 변경 전 -->
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY_HERE&libraries=services"></script>

<!-- 변경 후 (예시) -->
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=abc123def456...&libraries=services"></script>
```

---

## ✨ 활성화 후 달라지는 기능
*   **실시간 마커**: 현재 필터링된 결과 중 상위 50개 식당이 지도 위에 자동으로 표시됩니다. (주소 기반 지오코딩 로직이 이미 반영되어 있습니다.)
*   **상세 정보 확인**: 지도 위 마커를 클릭하면 식당 이름과 카테고리를 확인할 수 있는 말풍선(InfoWindow)이 나타납니다.
*   **자동 동기화**: 필터를 바꾸거나 검색을 하면 지도 위의 마커도 즉시 새로고침됩니다.

지도를 띄우는 과정에서 어려움이 있으시면 언제든 말씀해 주세요!
