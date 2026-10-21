---
name: spoonmap-pc
description: >-
  Spoonmap PC 버전 전용 수정 스킬. 사용자가 '/spoonmap-pc', 'PC만', 'PC버전만', '데스크톱만'이라고
  요청할 때 사용한다. 모바일 버전의 UI·레이아웃·터치 동작은 절대 건드리지 않고(회귀 방지),
  PC 화면(> 768px)의 UI/UX 및 PC 전용 컴포넌트만 안전하게 수정한다.
---

# Spoonmap [PC 전용] 수정 스킬 (`/spoonmap-pc`)

사용자의 요청 사항을 **모바일 버전에는 일절 영향을 주지 않고 오직 PC 버전(데스크톱 화면)에만** 정확히 적용합니다.

## 1. 작업 원칙 (PC-Only Isolation)
- **모바일 버전 비간섭 보장 (Zero Mobile Regression)**:
  - 모바일 전용 DOM(`#mobile-bottom-nav`, `#btn-cat-chip`, `#btn-star-chip`, `#popover-cat-menu`, `#popover-star-menu`, `#map-sheet-handle`, `collapsed-peek` 바텀시트 제스처 등)은 수정하지 않는다.
  - **CSS 수정 시**: 모바일 스타일(`@media (max-width: 768px)`)에 영향을 주지 않도록 필요하면 `@media (min-width: 769px)` 블록 안에 작성하거나, 기존 `@media (max-width: 768px)` 모바일 오버라이드가 깨지지 않는지 반드시 확인한다.
  - **JS 수정 시**: 공통 함수를 수정해야 하는 경우 `window.innerWidth > 768` 조건 분기를 사용하거나 PC 전용 요소(`.map-quick-filters`, `#map-friends-bar`, `.tab-btn`, 마우스 `mouseenter`/`mouseleave` 호버 등)에만 동작하도록 격리한다.

## 2. PC 전용 주요 타겟 요소
- **상단 헤더 & 탭**: `.header-nav`, `.tab-btn[data-tab]`
- **지도 PC 컨트롤**: `.map-quick-filters` (`#btn-show-my-map`, `#btn-show-wishlist`, `#btn-toggle-friends-panel`), `#map-friends-bar` (`#friend-chips-list`), 좌측 고정 사이드바 `#map-results-list` 및 `#map-place-detail`
- **마우스 인터랙션**: 마커 `mouseover` / `mouseout` 프리뷰 오버레이(`currentHoverOverlay`), PC 그리드/테이블 뷰

## 3. 실행 및 검증 절차
1. **영향 범위 확인**: 수정하려는 CSS 선택자나 JS 함수가 모바일(`<= 768px`)에서도 호출/적용되는지 먼저 확인한다.
2. **PC 격리 수정**: 모바일 레이아웃과 터치 흐름을 보존한 채 PC 전용 코드/스타일만 수정한다.
3. **캐시 버전 갱신 및 배포**:
   - `index.html`의 스크립트/스타일 버전 파라미터를 갱신하고 구문 체크 후 `git commit` & `git push origin main`을 수행한다.
   - 응답 시 **[PC 적용 내역]**과 **[모바일 비간섭 확인]** 결과를 간결하게 보고한다.
