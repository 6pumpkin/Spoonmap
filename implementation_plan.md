# [Phase 3.1] 식당 마스터 엔티티화 (카카오 장소 검색 API 자동완성 & 중복 등록 방지)

## 개요
방문 일기 및 식당 신규 등록 시, 식당명을 입력하면 **카카오 장소 검색 API(`kakao.maps.services.Places`)**를 통해 실시간 자동완성 검색 결과를 제공합니다.
선택한 장소의 **공식 카카오 Place ID, 정밀 좌표(x, y), 도로명 주소, 표준 카테고리, 대/소분류 지역**을 100% 오타 없이 자동 입력(Auto-fill)하며, **동일 식당의 중복 등록 현상을 다중 식별 계층(Place ID ➔ 정규화 명칭 ➔ 지역/주소)으로 원천 차단**합니다.

---

## 사용자 확인 및 검토 사항 (User Review Required)

> [!IMPORTANT]
> **중복 식당 등록 시 동작 방식**:
> 1. 자동완성 목록에서 이미 내 지도/마스터에 등록된 식당을 선택하거나, 사용자가 이미 존재하는 식당명을 직접 입력할 경우:
>    - 💡 "이미 등록된 맛집 (총 N회 방문)" 배지를 표시하고, 기존의 카테고리/주요메뉴/수저평점/지역 정보를 자동으로 채워줍니다.
>    - 별도의 새로운 식당 카드가 생겨 목록이 지저분해지는 대신, **기존 식당의 N번째 새로운 방문 기록(다이어리)으로 자연스럽게 누적 연결**됩니다.
> 2. 만약 방문 날짜가 없는 상태에서 동일 식당 정보를 수정하여 저장하면, 신규 생성 대신 **기존 식당의 메타데이터(주소, 좌표 등)를 최신화**합니다.

---

## 제안하는 변경 사항

### 1. UI 템플릿 및 스타일 (`index.html`, `style.css`)
- **[MODIFY] [index.html](file:///d:/PUMPKIN/Spoonmap/index.html)**:
  - `diary-add-drawer` 내 식당명 입력 필드에 마스터 엔티티 메타데이터를 저장할 히든 인풋 추가:
    - `<input type="hidden" id="diary-input-kakao-id">` (카카오 공식 Place ID)
    - `<input type="hidden" id="diary-input-road-address">` (도로명 주소)
    - `<input type="hidden" id="diary-input-x">` (경도, Longitude)
    - `<input type="hidden" id="diary-input-y">` (위도, Latitude)
  - `diary-name-suggestions` 컨테이너 구조 확장:
    - 내 기존 맛집 섹션(⭐ 내 맛집)과 카카오 실시간 검색 결과 섹션(📍 장소 검색) 분리 및 시각적 배지 구분.

- **[MODIFY] [style.css](file:///d:/PUMPKIN/Spoonmap/style.css)**:
  - 자동완성 결과 드롭다운 스타일 고도화:
    - 식당명, 카테고리 태그 칩, 도로명 주소 서브텍스트 2줄 레이아웃.
    - `[이미 등록됨 · N회 방문]` 뱃지 스타일.
    - 키보드(Arrow Up/Down) 포커스 하이라이트 효과 및 매끄러운 스크롤.

---

### 2. 카카오 장소 검색 자동완성 & 지역/카테고리 자동 추출 (`app.js`)
- **[MODIFY] [app.js](file:///d:/PUMPKIN/Spoonmap/app.js)**:
  - **카카오 자동완성 엔진 (`setupDiaryNameSearch`) 전면 개편**:
    - `kakao.maps.services.Places.keywordSearch` 디바운스(250ms) 연동.
    - 사용자 입력 시:
      1) 로컬 마스터 데이터(`getUnifiedRestaurantData`)에서 이름 검색 ➔ '내 등록 맛집' 우선 매칭.
      2) 카카오 장소 검색 API 호출 (음식점/카페 카테고리 우선 매칭 `FD6, CE7` 및 일반 키워드).
      3) 검색 결과 중 이미 내 맛집에 등록된 장소는 `kakao_id` 또는 이름+지역 매칭으로 `[이미 등록된 맛집]` 뱃지 부착.
  - **주소 기반 행정구역 자동 추출 (`extractStandardRegionFromAddress`)**:
    - 도로명 주소(`road_address_name`) 및 지번 주소(`address_name`)에서 시/도, 시/군/구 및 읍/면/동을 파싱하여 `KOREA_REGIONS` 기준의 대분류(`location_large`)와 소분류(`location_small`)로 100% 자동 변환.
  - **카테고리 자동 매핑**:
    - 카카오의 `category_name` (예: `음식점 > 일식 > 돈까스,우동`)을 기존의 `mapKakaoCategoryToStandard` 함수를 통해 Spoonmap 표준 카테고리(예: `일식`, `돈까스`)로 자동 치환 후 Notion 태그 자동 선택.
  - **장소 선택 시 Form 자동 완성**:
    - 식당명, 카카오맵 URL, kakao_id, 좌표(x, y), 도로명 주소, 카테고리, 지역 대/소분류 일괄 입력.
    - 기존 맛집인 경우: 수저 평점(🥄), 대표 메뉴, 메모, 누적 방문 횟수 자동 채움.

---

### 3. 중복 식당 등록 원천 차단 알고리즘 (`app.js`)
- **다중 식별 계층 중복 매칭 (`findExistingRestaurant`)**:
  - `1순위`: `kakao_id` (카카오 장소 고유 번호 일치 여부)
  - `2순위`: 카카오맵 URL에서 추출된 ID (`place.map.kakao.com/{id}`) 일치 여부
  - `3순위`: 정규화된 이름 (`normalizeRestaurantName`: 공백/특수문자/본점·직영점 수식어 제거) + 지역 소분류/대분류 일치 여부
  - `4순위`: 정규화된 이름 + 좌표(x, y) 150m 이내 근접 여부
- **저장 로직 (`saveDiaryEntry`) 방어벽 구축**:
  - 사용자가 자동완성을 클릭하지 않고 직접 타이핑하여 등록하더라도, 저장 직전 `findExistingRestaurant`를 거쳐 기존 등록 여부 자동 검증.
  - 기존 식당과 매칭되는 경우:
    - 🚫 중복 식당 엔티티 신규 생성 차단.
    - 기존 식당의 정식 명칭과 키로 정렬/통합하여 방문 기록(다이어리)에 추가.
    - 기존 식당에 없던 좌표(x, y)나 도로명 주소가 들어왔다면 기존 식당 마스터 정보를 보강.
    - 사용자에게 "✅ 기존 맛집 '${existingName}'에 새로운 방문 기록이 추가되었습니다!" 토스트 안내.

---

## 검증 계획 (Verification Plan)

### 자동 검증
1. **자바스크립트 구문 무결성 검증**:
   - `powershell -ExecutionPolicy Bypass -File .\check_js_syntax.ps1` 실행하여 구문 에러, 괄호 불일치 원천 차단.

### 수동 기능 검증
1. **카카오 자동완성 팝업 동작 확인**:
   - 캘린더에서 날짜 클릭 ➔ 드로어 열림 ➔ 식당명 입력란에 "진미평양냉면" 입력.
   - 드롭다운에 카카오 장소 검색 결과와 주소가 실시간 노출되는지 확인.
2. **원클릭 자동 채움(Auto-fill) 확인**:
   - 검색 결과 클릭 시:
     - 카카오맵 URL 자동 입력 확인.
     - 식당 분류(카테고리) Notion 태그 자동 선택 확인.
     - 지역-대분류 및 지역-소분류 자동 선택 확인.
     - hidden input에 kakao_id, 좌표(x, y), 도로명 주소가 정상 저장되는지 확인.
3. **중복 등록 방지 검증**:
   - 이미 등록되어 있는 식당(예: "농민백암순대 본점")을 검색 및 선택.
   - '이미 등록된 맛집' 뱃지와 기존 정보(수저 평점, 메뉴 등)가 자동으로 채워지는지 확인.
   - 저장 시 식당 목록에 중복된 카드가 2개 생기지 않고 기존 식당에 방문 횟수만 1 증가하는지 확인.
4. **GitHub Pages 배포**:
   - `powershell -ExecutionPolicy Bypass -File .\push_github.ps1` 실행 및 정상 배포 확인.
