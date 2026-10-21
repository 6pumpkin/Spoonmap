# Spoonmap 영구 프로젝트 기억장 & 플랫폼 범위 규칙

이 파일은 어떤 새 채팅방을 열더라도 이전 대화의 핵심 맥락과 코드 위치를 즉시 기억하여 **파일 전체 재탐색 없이 빠르고 정확하게 수정**하기 위한 상시 규칙입니다.

---

## 1. 빠른 실행 규칙 (Fast & Accurate Execution)
- **불필요한 전체 파일 탐색 금지**: `app.js`(18,700줄)나 `style.css` 전체를 헤매며 검색하지 말고, 아래 **섹션 4 코드 인덱스**의 줄 번호를 보고 필요한 구간(50~150줄)만 딱 집어서 `view_file`로 읽고 바로 수정한다.
- **수정 후 자동 배포**: 코드 수정 후에는 구문 오류를 확인하고 `git add`, `git commit`, `git push origin main`까지 한 번에 완료한다.

---

## 2. 플랫폼 범위 모드 (PC / Mobile Scope Control)
1. **`/spoonmap-both` (또는 "둘다", "PC 모바일 둘 다", 범위 미지정 일반 기능 요청)**
   - `.agents/skills/spoonmap-both/SKILL.md` 절차를 따른다. PC와 모바일 양쪽 DOM·이벤트·미디어쿼리(`@media max-width: 768px`)·PWA 캐시를 동시에 수정한다.
2. **`/spoonmap-pc` (또는 "PC만", "PC버전만", "데스크톱만")**
   - `.agents/skills/spoonmap-pc/SKILL.md` 절차를 따른다. 모바일(`<= 768px`) 코드는 절대 건드리지 않고 PC(`> 768px`) 전용만 수정한다.
3. **`/spoonmap-mobile` (또는 "모바일만", "모바일버전만", "폰에서만")**
   - `.agents/skills/spoonmap-mobile/SKILL.md` 절차를 따른다. PC(`> 768px`) 코드는 절대 건드리지 않고 모바일(`<= 768px`) 및 PWA 캐시(`sw.js`, `index.html`)만 수정한다.
4. **한 질문에 여러 스킬을 섞어 쓰는 경우 (복합 질문 항목별 독립 적용)**:
   - 사용자가 한 번의 채팅에 `1. /spoonmap-pc [질문A]  2. /spoonmap-both [질문B]`처럼 여러 항목에 서로 다른 스킬을 지정하면, **각 번호/문단별로 지정된 스킬 범위를 엄격히 분리하여 적용**한다.
   - 즉, 1번 작업은 모바일에 영향이 없도록 PC에만 격리 적용하고, 2번 작업은 PC와 모바일 양쪽에 동시에 적용한 뒤, 답변도 **`[1번: PC 전용 적용]`**, **`[2번: PC + 모바일 동시 적용]`**으로 나누어 보고한다.

---

## 3. 그동안의 핵심 작업 히스토리 & 절대 깨지면 안 되는 규칙 (Core Invariants)
- **사용자 데이터 분리 원칙**:
  - 마스터(Owner)의 기본 식당 리스트(728곳, `getMasterRestaurantList()`)와 일반 로그인 유저 본인의 식당(`getCurrentUserOwnRestaurants()`)을 절대 혼동하지 않는다.
  - 친구 지도 겹쳐보기에서 '나와 겹치는 맛집(`isCommon`)' 판별 시에는 오직 현재 로그인한 유저 본인의 식당 목록(`myOwnRestaurants`)과만 비교한다.
- **추천 채널 및 팔로우 미식가 친구 지도**:
  - 기본 추천 채널: `friend_ddoganzip`(풍자 또간집), `friend_meogeultende`(성시경 먹을텐데), `friend_jungyugwang`(정육왕), `friend_seoulnamzaa`(서울사는남자), `friend_todaydessert`(투데이디저트).
  - 팔로우한 미식가(`isFollowingUser: true`)는 ID가 `5044584236`, `user_5044584236`, `following_5044584236` 등으로 들어올 수 있으므로 항상 `normFriendId()`로 정규화해 비교하고, `window.followingRestaurantsCache`에 모든 키 형태로 캐싱한다.
- **지도(`#map-view`) 식당 목록(`#map-results-list`) 유지 규칙**:
  - `updateMapMarkers()`나 `resetMapSearchToInitial()`, `syncFromCloud()`가 실행될 때 검색어가 없더라도 활성화된 친구 지도(`getActiveFriendIds().length > 0`)가 있으면 `#map-results-list`를 지우지 않고 `window.renderAllActiveFriendOverlays()`를 통해 친구 식당 목록을 유지한다.
  - `renderAllActiveFriendOverlays(zoomFriendId)`는 `zoomFriendId` 유무와 관계없이 활성 친구 식당이 있으면 항상 `#map-results-list`를 렌더링하고 펼친다(`display: 'block'`, `transform: 'translateY(0)'`, `classList.remove('collapsed-peek')`).
- **모바일 지도 팝오버 가림 방지**:
  - 모바일에서 `⭐` 버튼(`#popover-star-menu`)이나 `⚙️ 지도 설정` 모달, 또는 `PROFILE` 탭의 `[지도]` 버튼(`viewGourmetMap`)으로 친구 지도를 켤 때는 반드시 `window.closeAllMobileMapPopovers()`를 호출해 팝오버와 배경 막(`#map-popover-backdrop`)을 닫아 지도 마커와 하단 바텀시트가 즉시 보이게 한다.
- **모바일 PWA 및 브라우저 캐시 갱신**:
  - 모바일 관련 수정 시에는 `index.html`의 `app.js?v=...`, `app.js`(`initPwaManager`)의 `./sw.js?v=...`, `sw.js`의 `CACHE_NAME`을 함께 올려 모바일 사파리/크롬/홈화면 앱에서 즉시 새 코드가 로드되게 한다.

---

## 4. Spoonmap 핵심 코드 위치 인덱스 (검색 생략용)

### `app.js` (약 18,700줄)
- **클라우드 동기화 (`syncFromCloud` / `saveToCloud`)**: `L380 ~ L620`
- **카카오맵 초기화 & 마커 업데이트 (`initMap`, `updateMapMarkers`, `showMyVisitedPlacesOnMap`, `hideMyVisitedPlacesOnMap`)**: `L2550 ~ L3250`
- **지도 검색 & 페이지네이션 목록 (`renderPaginatedList`, `resetMapSearchToInitial`, `handleBackFromPlaceDetail`)**: `L4100 ~ L4550`
- **식당 상세 패널 (`showMapPlaceDetail`, `attachMarkerEvents`)**: `L4550 ~ L6150`
- **친구 지도 오버레이 핵심 (`getFriendsList`, `toggleFriendOverlay`, `renderAllActiveFriendOverlays`)**: `L6150 ~ L6750`
- **친구 관리 모달 (`openFriendManageModal`, `closeFriendManageModal`, `renderFriendModalList`)**: `L6750 ~ L7125`
- **모바일 지도 바텀시트 드래그 & `⭐`/`🍴` 팝오버 (`attachMapSheetSwipe`, `attachDetailSheetSwipe`, `initMobileMapChipsAndPopovers`, `renderMobileFriendsListInPopover`, `closeAllMobileMapPopovers`)**: `L7126 ~ L7680`
- **탭 전환 & 메인 렌더링 (`switchTabUI`, `render`)**: `L9400 ~ L9650`
- **AI 소믈리에 탭 (`sommelier`)**: `L10500 ~ L14500`
- **프로필 탭 & 팔로잉/미식가 지도 연동 (`renderProfileTab`, `viewGourmetMap`, `viewGourmetRestaurantList`)**: `L15500 ~ L17200`
- **PWA & 서비스워커 관리 (`initPwaManager`)**: `L18500 ~ L18690`

### `index.html` (약 1,632줄)
- **상단 헤더 & PC 탭 버튼 (`.tab-btn`)**: `L30 ~ L120`
- **DIARY 탭 (`#diary-view`)**: `L125 ~ L260`
- **LIST 탭 (`#list-view`)**: `L265 ~ L400`
- **MAP 탭 (`#map-view`, 모바일 칩 `#btn-cat-chip`/`#btn-star-chip`, 팝오버 `#popover-star-menu`, 바텀시트 `#map-results-list`/`#map-place-detail`)**: `L405 ~ L640`
- **AI 탭 (`#sommelier-view`) & PROFILE 탭 (`#profile-view`)**: `L645 ~ L1200`
- **모달창 (`#friend-manage-modal` 등) & 모바일 하단 네비 (`#mobile-bottom-nav`) & 스크립트 버전 태그**: `L1200 ~ L1632`

---

## 5. 구현 예정 기능 사양서: [맛집 가져오기] (네이버/카카오 지도 URL 임포트)

1. **버튼 명칭 및 배치 (PC & Mobile 둘 다 구현)**
   - **버튼 이름**: 정확히 `맛집 가져오기`
   - **위치 ①**: **PROFILE 탭 (`#profile-view`)** 상단 프로필 액션 버튼 영역
   - **위치 ②**: **LIST 탭 (`#list-view`)** 상단 컨트롤 바 및 식당 0개 빈 화면(Empty State)

2. **가져오기 방식**
   - 텍스트 검색 매칭 방식 제외.
   - **네이버 지도 및 카카오 지도 URL(공유 링크/폴더)**을 입력받아 파싱하는 방식만 전담 지원.

3. **스푼맵 표준 포맷 변환 (데이터 정규화)**
   - 외부 설명글을 그대로 넣지 않고 스푼맵 규격에 맞게 변환:
     - **식당 분류 (`category`)**: 스푼맵 16대 표준 카테고리(한식, 고기, 일식, 중식, 양식, 아시안, 분식, 치킨, 피자, 패스트푸드, 해산물, 샐러드, 카페, 술집, 뷔페, 세계요리/기타)로 자동 맵핑.
     - **위치 (`location_large` / `location_small` / `road_address`)**: 도로명 주소 기반 `regions.js` 체계(예: 서울 마포구 등)로 표준 정규화.
     - **주요 메뉴 (`menu`)**: 정돈된 대표 메뉴 형태로 가공/추출.
   - **미확인 항목 처리**:
     - **수저 평점 (`rate`)**: URL로 알 수 없으므로 **공란(미평가 상태)**으로 설정.
     - **방문 기록 및 횟수 (`visit_count`, `visits`)**: **공란(0회)**으로 설정.
     - **수정 보장**: LIST 탭의 기존 식당 정보 수정 모달에서 유저가 언제든 평점, 방문 횟수, 코멘트를 정상 수정할 수 있도록 연동.

4. **화면 즉시 반영**
   - 저장 완료 시 **MAP 탭** 마커 및 **LIST 탭** 카드/목록에 즉시 렌더링되고 클라우드(Firestore)에 동기화.
