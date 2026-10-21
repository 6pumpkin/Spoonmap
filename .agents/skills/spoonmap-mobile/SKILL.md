---
name: spoonmap-mobile
description: >-
  Spoonmap 모바일 버전 전용 수정 스킬. 사용자가 '/spoonmap-mobile', '모바일만', '모바일버전만',
  '폰에서만'이라고 요청할 때 사용한다. PC 버전의 UI·레이아웃·동작은 절대 건드리지 않고(회귀 방지),
  모바일 화면(<= 768px)의 UI/UX·바텀시트·팝오버·터치 이벤트 및 PWA 캐시만 안전하게 수정한다.
---

# Spoonmap [모바일 전용] 수정 스킬 (`/spoonmap-mobile`)

사용자의 요청 사항을 **PC 버전에는 일절 영향을 주지 않고 오직 모바일 버전(`<= 768px`)에만** 정확히 적용합니다.

## 1. 작업 원칙 (Mobile-Only Isolation)
- **PC 버전 비간섭 보장 (Zero PC Regression)**:
  - PC 전용 레이아웃 및 마우스 호버 동작, PC 상단 탭(`.tab-btn`), PC 지도 빠른 필터 바(`.map-quick-filters`, `#map-friends-bar`), PC 좌측 사이드바 레이아웃이 바뀌지 않도록 보존한다.
  - **CSS 수정 시**: 반드시 `@media (max-width: 768px)` (또는 `@media (max-width: 480px)`) 미디어쿼리 내부에서만 스타일을 추가·수정한다. 데스크톱 기본 CSS 규칙을 직접 덮어쓰지 않는다.
  - **JS 수정 시**: 모바일 전용 핸들러(`initMobileMapChipsAndPopovers`, `renderMobileFriendsListInPopover`, `updateMobileStarChipHighlight`, `attachMapSheetSwipe`, `attachDetailSheetSwipe`, `#mobile-bottom-nav`)에서 처리하거나, 공통 함수 내에서는 `window.innerWidth <= 768` 조건으로 분기해 PC 동작에 영향이 없게 한다.

## 2. 모바일 전용 필수 점검 포인트
- **팝오버 & 배경 막 정리**: 모바일 지도에서 친구 지도 ON, 카테고리 선택, 외부 탭(`PROFILE` 등)에서 지도로 이동 시 반드시 `window.closeAllMobileMapPopovers()`를 호출해 `#popover-star-menu`, `#popover-cat-menu`, `#map-popover-backdrop`이 지도나 바텀시트를 가리지 않게 한다.
- **바텀시트(`#map-results-list`, `#map-place-detail`) 상태**:
  - 목록을 보여줄 때 `display: 'block'`, `transform: 'translateY(0)'`, `classList.remove('collapsed-peek')`를 확실히 적용한다.
  - 지도 탭 전환 시 `document.body.classList.add('is-map-tab')` 및 `activeMap.relayout()`을 보장한다.
- **모바일 브라우저 & 홈 화면 앱(PWA) 캐시 강제 갱신 (필수)**:
  - 모바일 사파리/크롬 및 PWA는 이전 JS/CSS를 강하게 캐싱하므로, 수정 후 반드시 `index.html`의 `?v=...` 버전과 `sw.js`의 `CACHE_NAME` 및 `app.js`(`initPwaManager`)의 `./sw.js?v=...`를 함께 올린다.

## 3. 실행 및 검증 절차
1. **영향 범위 확인**: 수정할 코드가 PC(`> 768px`) 화면에 영향을 주지 않는지 확인한다.
2. **모바일 격리 수정**: `@media (max-width: 768px)` 또는 모바일 전용 컨트롤러/분기만 수정한다.
3. **PWA/모바일 캐시 갱신 및 배포**:
   - `index.html`, `sw.js`, `app.js` 캐시 버전을 갱신하고 구문 체크 후 `git commit` & `git push origin main`을 수행한다.
   - 응답 시 **[모바일 적용 내역]**과 **[PC 비간섭 확인]** 결과를 간결하게 보고한다.
