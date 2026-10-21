---
name: spoonmap-both
description: >-
  Spoonmap PC 및 모바일 버전 동시 수정 스킬. 사용자가 '/spoonmap-both', '둘다', 'PC 모바일 둘 다',
  '데스크톱이랑 모바일 같이'라고 요청하거나 플랫폼을 특정하지 않고 기능/UI 수정을 요청할 때 사용한다.
  PC와 모바일 양쪽 DOM, 이벤트, CSS 미디어쿼리(@media max-width: 768px), 모바일 PWA 캐시까지
  빠짐없이 한 번에 동기화하여 수정하고 검증한다.
---

# Spoonmap [PC + 모바일] 동시 수정 스킬 (`/spoonmap-both`)

사용자의 요청 사항을 **PC 버전과 모바일 버전 양쪽 모두에서 완벽하고 동일하게 동작하도록** 한 번에 수정합니다.

## 1. 작업 원칙 (Dual-Platform Sync)
- **절대 한쪽만 고치고 끝내지 않는다**: 기능을 수정할 때 PC 전용 요소와 모바일 전용 요소가 분리되어 있는지 반드시 먼저 확인하고 **두 경로 모두** 수정한다.
- **공통 함수 우선 수정**: `app.js`의 공통 렌더링/상태 함수에서 처리할 수 있는 로직은 공통 함수에서 한 번에 고치되, PC/모바일별 후처리(사이드바 vs 바텀시트, 팝오버 닫기 등)를 모두 포함한다.

## 2. 스푼맵 PC ↔ 모바일 핵심 대응표 (필수 점검 체크리스트)

| 영역 | PC 버전 요소 / 로직 | 모바일 버전 요소 / 로직 (`@media (max-width: 768px)`) |
| :--- | :--- | :--- |
| **탭 네비게이션** | 상단 `.tab-btn[data-tab]` | 하단 `#mobile-bottom-nav .mobile-bnav-btn[data-tab]` + `document.body.classList.toggle('is-map-tab', tab === 'map')` |
| **지도 빠른 필터 / 친구 지도** | `.map-quick-filters` (`#btn-show-my-map`, `#btn-show-wishlist`, `#btn-toggle-friends-panel`), `#map-friends-bar` (`renderFriendChips`) | `#btn-cat-chip` (`#popover-cat-menu`), `#btn-star-chip` (`#popover-star-menu`, `renderMobileFriendsListInPopover`, `updateMobileStarChipHighlight`), `#map-popover-backdrop` (`closeAllMobileMapPopovers()`) |
| **지도 식당 목록 (`#map-results-list`)** | 좌측 고정 사이드바 (`display: 'block'`) | 하단 드래그 바텀시트 (`#map-sheet-handle`, `transform: translateY(0)`, `classList.remove('collapsed-peek')`) |
| **식당 상세 패널 (`#map-place-detail`)** | 좌측 사이드바 상세 패널 (`mouseenter`/`click` 마커 연동) | 하단 드래그 상세 바텀시트 (`#map-detail-sheet-handle`, `attachDetailSheetSwipe`) |
| **모바일 팝오버 가림 방지** | 해당 없음 | 모바일에서 지도 마커/바텀시트를 띄울 때 반드시 `closeAllMobileMapPopovers()`를 호출해 `#popover-star-menu`·`#popover-cat-menu`·`#map-popover-backdrop`이 화면을 가리지 않게 처리 |
| **CSS 스타일 (`style.css`)** | 기본 데스크톱 스타일 규칙 | `@media (max-width: 768px)` 및 `@media (max-width: 480px)` 내부 오버라이드 규칙 동시 확인 |

## 3. 실행 및 검증 절차
1. **양쪽 진입점 탐색**: 수정 대상 기능의 PC 이벤트 핸들러/DOM과 모바일 이벤트 핸들러/DOM을 모두 찾는다.
2. **코드 수정**: PC와 모바일 양쪽 로직 및 CSS(데스크톱 기본 + `@media (max-width: 768px)`)를 함께 수정한다.
3. **모바일/PC 캐시 버전 갱신**:
   - `index.html`의 `app.js?v=...` (및 필요 시 `style.css?v=...`) 버전을 올린다.
   - `sw.js`의 `CACHE_NAME` 및 `app.js`의 `initPwaManager()` 내 `./sw.js?v=...`를 갱신해 모바일 기기에서도 즉시 반영되게 한다.
4. **교차 검증 및 배포**:
   - 구문 검사 및 PC/모바일 양쪽 경로 어설션 체크 실행 후 `git commit` & `git push origin main`을 수행한다.
   - 응답 시 **[PC 적용 내역]**과 **[모바일 적용 내역]**을 구분하여 명확히 보고한다.
