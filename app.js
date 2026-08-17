// ─── Kakao OAuth 2.0 & Owner Auth Guard Module ───
const KAKAO_JAVASCRIPT_KEY = '7d1898e936717ce9a0b768bc21807a99';

function getCurrentUser() {
    try {
        const saved = localStorage.getItem('spoonmap_current_user');
        return saved ? JSON.parse(saved) : null;
    } catch (e) {
        return null;
    }
}

function isUserLoggedIn() {
    const u = getCurrentUser();
    return !!(u && u.id);
}

function isOwnerUser() {
    const u = getCurrentUser();
    if (!u || !u.id) return false;
    
    // Auto-bind the first logged-in user as the master Owner if not set
    let ownerId = localStorage.getItem('spoonmap_owner_kakao_id');
    if (!ownerId) {
        ownerId = String(u.id);
        localStorage.setItem('spoonmap_owner_kakao_id', ownerId);
        console.log('[Spoonmap] Auto-assigned Master Owner Kakao ID:', ownerId);
    }
    return String(u.id) === String(ownerId);
}

function getActiveRestaurantData() {
    if (isOwnerUser()) {
        return (typeof restaurantData !== 'undefined') ? restaurantData : [];
    }
    return [];
}

function renderAuthLockedScreen(tabName) {
    return `
        <div class="auth-locked-container">
            <div class="auth-locked-card">
                <div class="auth-locked-icon">🔒🥄</div>
                <h3>나만의 미식 대사전 & 식사 일기</h3>
                <p>1,100여 개의 엄선된 맛집 데이터와 나만의 식사 기록(DIARY), 미식 통계(INSIGHT)는 <b>카카오 로그인</b> 후 이용하실 수 있습니다.</p>
                <button class="kakao-login-btn auth-locked-login-btn" onclick="handleKakaoLogin()">
                    <svg viewBox="0 0 24 24"><path d="M12 3C6.48 3 2 6.48 2 10.77c0 2.76 1.83 5.17 4.59 6.55l-1.16 4.29c-.1.38.33.68.66.47l5.06-3.34c.28.03.56.05.85.05 5.52 0 10-3.48 10-7.77S17.52 3 12 3z"/></svg>
                    <span>카카오톡으로 로그인하기</span>
                </button>
            </div>
        </div>
    `;
}

function updateAuthProtectedViews() {
    const isOwner = isOwnerUser();

    const protectedSections = [
        { protectedId: 'list-protected-content', lockedId: 'list-locked-view' },
        { protectedId: 'insights-protected-content', lockedId: 'insights-locked-view' },
        { protectedId: 'diary-protected-content', lockedId: 'diary-locked-view' }
    ];

    protectedSections.forEach(({ protectedId, lockedId }) => {
        const pEl = document.getElementById(protectedId);
        const lEl = document.getElementById(lockedId);

        if (pEl) {
            pEl.style.display = isOwner ? '' : 'none';
        }
        if (lEl) {
            lEl.style.display = isOwner ? 'none' : 'flex';
            if (!isOwner) {
                lEl.innerHTML = renderAuthLockedScreen(protectedId);
            }
        }
    });

    // Update Tab Button Labels (e.g. DIARY vs DIARY 🔒)
    const tabLabels = [
        { tab: 'diary', name: 'DIARY', locked: !isOwner },
        { tab: 'list', name: 'LIST', locked: !isOwner },
        { tab: 'map', name: 'MAP', locked: false },
        { tab: 'sommelier', name: 'AI', locked: false },
        { tab: 'recommend', name: 'ROULETTE', locked: false },
        { tab: 'insights', name: 'INSIGHT', locked: !isOwner }
    ];

    tabLabels.forEach(({ tab, name, locked }) => {
        const btns = document.querySelectorAll(`.tab-btn[data-tab="${tab}"], .mobile-tab-btn[data-tab="${tab}"]`);
        btns.forEach(b => {
            b.innerHTML = locked ? `${name} <span class="tab-lock-icon" style="font-size:0.75em;opacity:0.8;">🔒</span>` : name;
        });
    });
}

function initKakaoAuth() {
    try {
        if (typeof Kakao !== 'undefined') {
            if (!Kakao.isInitialized()) {
                Kakao.init(KAKAO_JAVASCRIPT_KEY);
            }
            console.log('[Spoonmap] Kakao SDK Initialized. Status:', Kakao.isInitialized());
        }
    } catch (err) {
        console.warn('[Spoonmap] Kakao SDK Init Warning:', err);
    }
    updateUserAuthUI();
}

window.handleKakaoLogin = function() {
    console.log('[Spoonmap] handleKakaoLogin clicked');
    if (typeof Kakao === 'undefined') {
        alert('카카오 SDK를 불러오는 중입니다. 잠시 후 다시 시도해 주세요.');
        return;
    }
    try {
        if (!Kakao.isInitialized()) {
            Kakao.init(KAKAO_JAVASCRIPT_KEY);
        }
    } catch (e) {
        console.error('[Spoonmap] Kakao.init error:', e);
    }

    if (Kakao.Auth && typeof Kakao.Auth.login === 'function') {
        try {
            Kakao.Auth.login({
                scope: 'profile_nickname,profile_image',
                success: function(authObj) {
                    console.log('[Spoonmap] Kakao Auth Success:', authObj);
                    Kakao.API.request({
                        url: '/v2/user/me',
                        success: function(res) {
                            console.log('[Spoonmap] Kakao User Profile:', res);
                            const kakaoAccount = res.kakao_account || {};
                            const profile = kakaoAccount.profile || {};
                            const user = {
                                id: String(res.id),
                                nickname: profile.nickname || '카카오 미식가',
                                profileImage: profile.profile_image_url || profile.thumbnail_image_url || '',
                                connectedAt: res.connected_at || new Date().toISOString()
                            };
                            localStorage.setItem('spoonmap_current_user', JSON.stringify(user));
                            
                            // Auto assign owner ID if not set
                            let ownerId = localStorage.getItem('spoonmap_owner_kakao_id');
                            if (!ownerId) {
                                localStorage.setItem('spoonmap_owner_kakao_id', user.id);
                            }

                            updateUserAuthUI();
                            alert(`환영합니다, ${user.nickname}님! 나만의 Spoonmap에 로그인되었습니다 🥄✨`);
                            
                            // Switch to DIARY
                            window.location.hash = '#diary';
                            if (typeof window.handleRouteGlobal === 'function') {
                                window.handleRouteGlobal();
                            } else {
                                window.location.reload();
                            }
                        },
                        fail: function(error) {
                            console.error('[Spoonmap] Kakao /v2/user/me failed:', error);
                            alert('카카오 사용자 정보 조회 실패: ' + (error.msg || JSON.stringify(error)));
                        }
                    });
                },
                fail: function(err) {
                    console.error('[Spoonmap] Kakao Login failed:', err);
                    if (err && (err.error === 'access_denied' || err.error === 'window_closed')) {
                        return;
                    }
                    const msg = (err && (err.error_description || err.msg || err.error)) ? (err.error_description || err.msg || err.error) : JSON.stringify(err);
                    alert('카카오 로그인 안내: ' + msg);
                }
            });
        } catch (callErr) {
            console.error('[Spoonmap] Kakao.Auth.login call error:', callErr);
            alert('로그인 호출 중 오류: ' + callErr.message);
        }
    } else {
        alert('카카오 인증 모듈을 지원하지 않는 브라우저입니다.');
    }
};

window.handleKakaoLogout = function() {
    if (confirm('로그아웃 하시겠습니까?')) {
        try {
            if (typeof Kakao !== 'undefined' && Kakao.Auth && Kakao.Auth.getAccessToken()) {
                Kakao.Auth.logout(function() {
                    console.log('[Spoonmap] Kakao Logged Out');
                });
            }
        } catch (e) {
            console.warn('[Spoonmap] Kakao Logout warning:', e);
        }
        localStorage.removeItem('spoonmap_current_user');
        updateUserAuthUI();
        window.location.hash = '#map';
        if (typeof window.handleRouteGlobal === 'function') {
            window.handleRouteGlobal();
        } else {
            window.location.reload();
        }
    }
};

function updateUserAuthUI() {
    const authContainer = document.getElementById('header-user-auth');
    if (!authContainer) return;

    let currentUser = getCurrentUser();

    if (currentUser && currentUser.nickname) {
        const avatarHtml = currentUser.profileImage
            ? `<img src="${currentUser.profileImage}" alt="${currentUser.nickname}" class="user-avatar" onerror="this.outerHTML='<div class=\\'user-avatar-placeholder\\'>🥄</div>'">`
            : `<div class="user-avatar-placeholder">🥄</div>`;

        authContainer.innerHTML = `
            <div class="user-profile-badge">
                ${avatarHtml}
                <div class="user-info-text">
                    <span class="user-name" title="${currentUser.nickname}">${currentUser.nickname}</span>
                </div>
                <button class="user-logout-btn" onclick="handleKakaoLogout()" title="로그아웃">로그아웃</button>
            </div>
        `;
    } else {
        authContainer.innerHTML = `
            <button class="kakao-login-btn" onclick="handleKakaoLogin()" title="카카오톡 계정으로 간편 로그인">
                <svg viewBox="0 0 24 24">
                    <path d="M12 3C6.48 3 2 6.48 2 10.77c0 2.76 1.83 5.17 4.59 6.55l-1.16 4.29c-.1.38.33.68.66.47l5.06-3.34c.28.03.56.05.85.05 5.52 0 10-3.48 10-7.77S17.52 3 12 3z"/>
                </svg>
                <span>로그인</span>
            </button>
        `;
    }

    updateAuthProtectedViews();
}

function getSpoonBadgeHtml(item) {
    if (!item || item.isExternal || item.visit_count === 0 || !item.rate) {
        return '';
    }
    const spoonCount = (item.rate.match(/🥄/g) || []).length || 1;
    const isPeriodFilter = typeof item.period_visit_count !== 'undefined';
    const visits = isPeriodFilter ? item.period_visit_count : (item.visit_count || 1);
    
    let tierClass = '';
    let visitTagHtml = '';

    if (isPeriodFilter) {
        tierClass = 'visit-tier-period';
        visitTagHtml = `<span class="visit-count-tag period-tag">📅 기간내 ${visits}회</span>`;
    } else if (visits >= 10) {
        tierClass = 'visit-tier-3';
        visitTagHtml = `<span class="visit-count-tag">👑 ${visits}회</span>`;
    } else if (visits >= 5) {
        tierClass = 'visit-tier-2';
        visitTagHtml = `<span class="visit-count-tag">🔥 ${visits}회</span>`;
    } else if (visits >= 2) {
        tierClass = 'visit-tier-1';
        visitTagHtml = `<span class="visit-count-tag">🔥 ${visits}회</span>`;
    }

    return `
        <span class="spoon-badge rate-${spoonCount} ${tierClass}" title="수저 평점 ${spoonCount}개${visits >= 1 ? ` · ${isPeriodFilter ? `선택 기간 내 ${visits}회 방문` : `또간집 ${visits}회 방문`}` : ''}">
            <span class="spoon-icons">🥄 ${spoonCount}개</span>
            ${visitTagHtml}
        </span>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    initKakaoAuth();
    let currentFilters = {
        category: [],
        location_large: [],
        location_small: [],
        rate: [],
        searchQuery: ''
    };
    let currentSorts = [];
    let locationLargePageSize = 10;
    let locationLargeVisibleCount = 10;
    let sortedLocationsLarge = [];
    let listDisplayCount = 50; // Initial 50 items for ultra-fast rendering

    const grid = document.getElementById('restaurant-grid');
    const categoryFilterGroup = document.getElementById('category-filters');
    const locationLargeFilterGroup = document.getElementById('location-large-filters');
    const locationSmallFilterGroup = document.getElementById('location-small-filters');
    const smallLocSection = document.getElementById('small-location-section');
    const searchInput = document.getElementById('restaurant-search');
    const btnMoreLocation = document.getElementById('btn-more-location');
    const btnCollapseLocation = document.getElementById('btn-collapse-location');
    const moreLocContainer = document.getElementById('location-more-container');

    // Load More Button Event Listener
    const btnLoadMore = document.getElementById('btn-load-more');
    if (btnLoadMore) {
        btnLoadMore.addEventListener('click', () => {
            listDisplayCount += 50;
            render();
        });
    }

    // Initialization
    function init() {
        if (typeof restaurantData === 'undefined') {
            grid.innerHTML = '<div class="error">데이터를 불러올 수 없습니다.</div>';
            return;
        }
        setupFilters();
        setupSearch();
        setupTabs();
        initRecommendTab();
        initFoodInsightsTab();
        if (typeof initAllNotionSelectors === 'function') initAllNotionSelectors();
        render();
    }

    const VALID_TABS = ['list', 'map', 'recommend', 'insights', 'sommelier', 'diary'];

    function parseRoute() {
        const rawHash = (window.location.hash || '').replace(/^#\/?/, '');
        const parts = rawHash.split('/');
        const mainPart = parts[0].split('?')[0];
        const defaultTab = isOwnerUser() ? 'diary' : 'map';
        const tab = VALID_TABS.includes(mainPart) ? mainPart : defaultTab;
        
        const subPath = parts[1] ? parts[1].split('?')[0] : '';
        const queryString = rawHash.includes('?') ? rawHash.split('?')[1] : '';
        const queryParams = {};
        if (queryString) {
            const searchParams = new URLSearchParams(queryString);
            for (const [key, value] of searchParams.entries()) {
                queryParams[key] = value;
            }
        }

        return { tab, rawHash, subPath, queryParams };
    }
    window.parseRoute = parseRoute;

    let currentActiveTab = null;

    function switchTabUI(targetTab) {
        if (!VALID_TABS.includes(targetTab)) targetTab = isOwnerUser() ? 'diary' : 'map';

        const tabBtns = document.querySelectorAll('.tab-btn, .mobile-tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        const mobileTabsMenu = document.getElementById('mobile-tabs-menu');
        const mobileFilterBtn = document.getElementById('mobile-filter-toggle-btn');

        tabBtns.forEach(b => {
            if (b.dataset.tab === targetTab) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });

        if (mobileFilterBtn) {
            mobileFilterBtn.style.display = (targetTab === 'list' && isOwnerUser()) ? 'block' : 'none';
        }
        
        if (mobileTabsMenu) {
            mobileTabsMenu.classList.remove('open');
        }

        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === `${targetTab}-view`) {
                content.classList.add('active');
            }
        });

        updateAuthProtectedViews();

        if (currentActiveTab !== targetTab) {
            currentActiveTab = targetTab;
            if (targetTab === 'map') {
                initMap();
            } else if (targetTab === 'insights' && isOwnerUser()) {
                computeAndRenderFoodInsights();
            } else if (targetTab === 'sommelier') {
                initSommelierTab();
            } else if (targetTab === 'diary' && isOwnerUser()) {
                initDiaryTab();
            }
        }
    }

    function handleRoute() {
        const route = parseRoute();
        window.handleRouteGlobal = handleRoute;

        // 1. Switch UI tab
        switchTabUI(route.tab);

        // 2. Handle mobile card overlay
        const overlay = document.getElementById('mobile-card-overlay');
        if (route.subPath === 'detail' && route.queryParams.name) {
            const targetName = decodeURIComponent(route.queryParams.name);
            if (typeof restaurantData !== 'undefined') {
                const found = restaurantData.find(r => r.name === targetName);
                if (found) {
                    openMobileOverlay(found, false);
                }
            }
        } else {
            if (overlay && overlay.classList.contains('open')) {
                overlay.classList.remove('open');
                document.body.style.overflow = '';
            }
        }

        // 3. Handle map place detail
        const mapPlaceDetail = document.getElementById('map-place-detail');
        const mapResultsList = document.getElementById('map-results-list');
        if (route.tab === 'map') {
            if (route.subPath !== 'place') {
                if (mapPlaceDetail && mapResultsList) {
                    mapResultsList.style.display = 'block';
                    mapPlaceDetail.style.display = 'none';
                    if (window.currentMapOverlay) {
                        window.currentMapOverlay.setMap(null);
                        window.currentMapOverlay = null;
                    }
                }
            } else if (route.queryParams.name && mapPlaceDetail && mapPlaceDetail.style.display !== 'flex') {
                const targetName = decodeURIComponent(route.queryParams.name);
                if (typeof restaurantData !== 'undefined') {
                    const found = restaurantData.find(r => r.name === targetName);
                    if (found) {
                        showPlaceDetail(found, found.location_large || '', true, found.map_url);
                    }
                }
            }
        }
    }

    function setupTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn, .mobile-tab-btn');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.dataset.tab;
                if (!targetTab) return;

                const overlay = document.getElementById('mobile-card-overlay');
                if (overlay && overlay.classList.contains('open')) {
                    overlay.classList.remove('open');
                    document.body.style.overflow = '';
                }

                const targetHash = `#${targetTab}`;
                if (window.location.hash !== targetHash) {
                    window.location.hash = targetHash;
                } else {
                    handleRoute();
                }
            });
        });

        window.addEventListener('popstate', handleRoute);
        window.addEventListener('hashchange', handleRoute);

        // Initial route handling
        const initialRoute = parseRoute();
        if (!window.location.hash || !VALID_TABS.includes(initialRoute.tab)) {
            history.replaceState(null, '', `#${initialRoute.tab}`);
        }
        handleRoute();
    }

    let currentWinnerItem = null;

    // Dynamic Populate Category & Location Select Options for Roulette
    function populateRecommendCategories() {
        const catSelect = document.getElementById('rec-category-select');
        const locSelect = document.getElementById('rec-location-select');
        if (!catSelect || !locSelect) return;

        const currentCatVal = catSelect.value;
        const currentLocVal = locSelect.value;

        const masterData = getUnifiedRestaurantData();
        const categories = new Set();
        const locations = new Set();

        masterData.forEach(item => {
            if (item.category) {
                item.category.split(',').forEach(c => {
                    const t = c.trim();
                    if (t) categories.add(t);
                });
            }
            if (item.location_large) locations.add(item.location_large.trim());
        });

        // Collect custom options from spoonmap_custom_options
        const customStore = JSON.parse(localStorage.getItem(DIARY_CUSTOM_OPTIONS_KEY) || '{}');
        if (customStore.category && Array.isArray(customStore.category)) {
            customStore.category.forEach(c => {
                if (c && c.trim()) categories.add(c.trim());
            });
        }

        // Refresh Category Options
        catSelect.innerHTML = '<option value="all">전체 (All)</option>';
        Array.from(categories).sort().forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat;
            opt.textContent = typeof getFormattedTagDisplay === 'function' ? getFormattedTagDisplay(cat) : cat;
            catSelect.appendChild(opt);
        });
        if (Array.from(categories).includes(currentCatVal)) {
            catSelect.value = currentCatVal;
        }

        // Refresh Location Options
        locSelect.innerHTML = '<option value="all">전체 (All)</option>';
        Array.from(locations).sort().forEach(loc => {
            const opt = document.createElement('option');
            opt.value = loc;
            opt.textContent = loc;
            locSelect.appendChild(opt);
        });
        if (Array.from(locations).includes(currentLocVal)) {
            locSelect.value = currentLocVal;
        }
    }
    window.populateRecommendCategories = populateRecommendCategories;

    function initRecommendTab() {
        const catSelect = document.getElementById('rec-category-select');
        const locSelect = document.getElementById('rec-location-select');
        const rateSelect = document.getElementById('rec-rate-select');
        const visitedCheck = document.getElementById('rec-visited-only');
        const kakaoAllCheck = document.getElementById('rec-kakao-all');
        const spinBtn = document.getElementById('btn-spin-roulette');
        const reSpinBtn = document.getElementById('btn-re-spin');
        const viewOnMapBtn = document.getElementById('btn-view-on-map');
        const windowEl = document.getElementById('roulette-window');
        const reel = document.getElementById('roulette-reel');
        const winnerContainer = document.getElementById('winner-result-container');
        const winnerBody = document.getElementById('winner-card-body');

        const centerInput = document.getElementById('rec-center-input');
        const radiusSelect = document.getElementById('rec-radius-select');
        const myLocBtn = document.getElementById('btn-rec-my-location');
        const centerInfo = document.getElementById('rec-center-info');

        if (!spinBtn) return;

        // Haversine Distance Calculator (meters)
        function getDistanceMeters(lat1, lon1, lat2, lon2) {
            const R = 6371000;
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLon = (lon2 - lon1) * Math.PI / 180;
            const a = 
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c;
        }

        // GPS Current Location Listener
        if (myLocBtn) {
            myLocBtn.addEventListener('click', () => {
                if (!navigator.geolocation) {
                    alert('이 브라우저에서는 GPS 위치 서비스가 지원되지 않습니다.');
                    return;
                }
                myLocBtn.textContent = '⌛ 위치 받는 중...';
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        myLocBtn.textContent = '📍 내 위치';
                        const lat = pos.coords.latitude;
                        const lng = pos.coords.longitude;
                        if (centerInput) {
                            centerInput.value = '현재 GPS 위치';
                            centerInput.dataset.lat = lat;
                            centerInput.dataset.lng = lng;
                        }
                        if (centerInfo) {
                            centerInfo.innerHTML = `🎯 <b>현재 GPS 위치</b>를 기준 지점으로 설정했습니다.`;
                        }
                    },
                    (err) => {
                        myLocBtn.textContent = '📍 내 위치';
                        alert('GPS 위치를 불러올 수 없습니다. 건물명이나 역 이름을 직접 입력해보세요!');
                    }
                );
            });
        }

        // Mutual Exclusivity for Checkboxes
        if (visitedCheck && kakaoAllCheck) {
            visitedCheck.addEventListener('change', () => {
                if (visitedCheck.checked) {
                    kakaoAllCheck.checked = false;
                    rateSelect.disabled = false;
                    rateSelect.style.opacity = '1';
                }
            });

            kakaoAllCheck.addEventListener('change', () => {
                if (kakaoAllCheck.checked) {
                    visitedCheck.checked = false;
                    rateSelect.disabled = true;
                    rateSelect.style.opacity = '0.5';
                } else {
                    rateSelect.disabled = false;
                    rateSelect.style.opacity = '1';
                }
            });
        }

        // Populate Category & Location Selects Initially
        populateRecommendCategories();

        // Execute Spin Reel Animation
        function runSpinAnimation(candidates) {
            const winner = candidates[Math.floor(Math.random() * candidates.length)];
            currentWinnerItem = winner;

            // Prepare slot reel items
            const reelItems = [];
            const itemCount = Math.min(22, Math.max(15, candidates.length * 2));
            for (let i = 0; i < itemCount - 1; i++) {
                const randomDummy = candidates[Math.floor(Math.random() * candidates.length)];
                reelItems.push(randomDummy);
            }
            reelItems.push(winner);

            // Render reel
            reel.style.transition = 'none';
            reel.style.transform = 'translateY(0)';
            reel.innerHTML = '';
            
            reelItems.forEach(item => {
                const div = document.createElement('div');
                div.className = 'reel-item';
                div.innerHTML = `
                    <h3 class="reel-name">${item.name}</h3>
                    <div class="reel-meta">
                        <span class="category-badge">${item.category || '기타'}</span>
                        <span class="loc-badge">${item.displayDistance ? '📍 ' + item.displayDistance : item.location_large}</span>
                        ${getSpoonBadgeHtml(item)}
                    </div>
                `;
                reel.appendChild(div);
            });

            // Force reflow
            void reel.offsetHeight;

            // UI state
            winnerContainer.style.display = 'none';
            windowEl.style.display = 'flex';
            spinBtn.disabled = true;
            const spinTextEl = spinBtn.querySelector('.spin-text');
            if (spinTextEl) spinTextEl.textContent = '🎲 맛집 추첨 중...';

            // Start animation
            const targetY = (reelItems.length - 1) * 180;
            reel.style.transition = 'transform 2.6s cubic-bezier(0.12, 0.8, 0.25, 1)';
            reel.style.transform = `translateY(-${targetY}px)`;

            setTimeout(() => {
                spinBtn.disabled = false;
                if (spinTextEl) spinTextEl.textContent = '오늘 뭐 먹지? 뽑기!';
                
                // Show winner card
                windowEl.style.display = 'none';
                winnerContainer.style.display = 'block';
                winnerBody.innerHTML = '';
                winnerBody.appendChild(createCard(winner));
            }, 2700);
        }

        // Spin Function Entry Point
        function startSpin() {
            const selectedCat = catSelect.value;
            const selectedLoc = locSelect.value;
            const minRate = parseInt(rateSelect.value, 10) || 0;
            const onlyVisited = visitedCheck ? visitedCheck.checked : false;
            const isKakaoAll = kakaoAllCheck ? kakaoAllCheck.checked : false;

            const centerText = centerInput ? centerInput.value.trim() : '';
            const radiusVal = radiusSelect ? radiusSelect.value : 'all';
            const radiusMeters = radiusVal !== 'all' ? parseInt(radiusVal, 10) : null;

            if (!isOwnerUser() && !isKakaoAll) {
                alert('🔒 저장된 내 맛집 데이터 기반 추천은 카카오 로그인 후 이용하실 수 있습니다.\n카카오 전체 식당 검색 모드로 추천을 진행합니다! 🎲');
                isKakaoAll = true;
                if (kakaoAllCheck) kakaoAllCheck.checked = true;
                if (visitedCheck) visitedCheck.checked = false;
            }

            function proceedSpin(centerCoords) {
                if (isKakaoAll) {
                    if (typeof kakao === 'undefined' || !kakao.maps || !kakao.maps.services) {
                        alert('카카오 지도 API를 불러오는 중입니다. 잠시 후 다시 시도해 주세요.');
                        return;
                    }

                    const spinTextEl = spinBtn.querySelector('.spin-text');
                    if (spinTextEl) spinTextEl.textContent = '🔍 카카오 지도 탐색 중...';
                    spinBtn.disabled = true;

                    const catText = selectedCat !== 'all' ? selectedCat : '맛집';
                    const searchKeyword = catText;
                    const ps = new kakao.maps.services.Places();

                    const searchOptions = {};
                    if (centerCoords && radiusMeters) {
                        searchOptions.location = new kakao.maps.LatLng(centerCoords.lat, centerCoords.lng);
                        searchOptions.radius = radiusMeters;
                    }

                    ps.keywordSearch(searchKeyword, (data, status) => {
                        spinBtn.disabled = false;
                        if (spinTextEl) spinTextEl.textContent = '오늘 뭐 먹지? 뽑기!';

                        if (status === kakao.maps.services.Status.OK && data && data.length > 0) {
                            const candidates = data.map(place => {
                                let distText = '';
                                if (centerCoords) {
                                    const pLat = parseFloat(place.y);
                                    const pLng = parseFloat(place.x);
                                    const d = getDistanceMeters(centerCoords.lat, centerCoords.lng, pLat, pLng);
                                    distText = d >= 1000 ? `${(d/1000).toFixed(1)}km` : `${Math.round(d)}m`;
                                }
                                return {
                                    name: place.place_name,
                                    category: place.category_name ? place.category_name.split('>').pop().trim() : (selectedCat !== 'all' ? selectedCat : '음식점'),
                                    location_large: place.address_name ? place.address_name.split(' ').slice(0, 2).join(' ') : '지역 정보',
                                    location_small: distText ? `📍 기준지에서 ${distText}` : (place.road_address_name || place.address_name || ''),
                                    displayDistance: distText ? `${distText} 거리` : '',
                                    rate: '',
                                    map_url: place.place_url || `https://map.kakao.com/link/map/${place.id}`,
                                    visit_count: 0,
                                    isExternal: true,
                                    menu: [place.phone ? `📞 ${place.phone}` : '카카오 지도 추천 식당']
                                };
                            });
                            runSpinAnimation(candidates);
                        } else {
                            alert(`선택하신 반경 범위 안에서 '${searchKeyword}' 카카오 지도 검색 결과가 없습니다. 반경을 넓히거나 장소를 변경해 보세요!`);
                        }
                    }, searchOptions);
                    return;
                }

                // Visited dataset candidates using unified master data (includes user-added new/custom restaurants!)
                const masterData = getUnifiedRestaurantData();
                let candidates = masterData.filter(item => {
                    if (!item.map_url) return false;
                    if (selectedCat !== 'all') {
                        if (!item.category) return false;
                        const catArray = item.category.split(',').map(c => c.trim());
                        if (!catArray.includes(selectedCat)) return false;
                    }
                    if (selectedLoc !== 'all' && item.location_large !== selectedLoc) return false;
                    
                    const spoonCount = (item.rate ? (item.rate.match(/CLR|🥄/g) || item.rate.match(/🥄/g) || []).length : 1) || 1;
                    if (spoonCount < minRate) return false;
                    if (onlyVisited && (item.visit_count || 1) < 2) return false;
                    
                    return true;
                });

                if (candidates.length === 0) {
                    alert('앗! 조건에 맞는 맛집이 없습니다. 카테고리, 지역 또는 평점의 필터 범위를 넓혀보세요!');
                    return;
                }

                if (centerCoords && radiusMeters) {
                    const spinTextEl = spinBtn.querySelector('.spin-text');
                    if (spinTextEl) spinTextEl.textContent = '📏 거리 반경 계산 중...';
                    spinBtn.disabled = true;

                    const geocoder = new kakao.maps.services.Geocoder();
                    let processed = 0;
                    const radiusCandidates = [];

                    candidates.forEach(item => {
                        const addrToSearch = item.location_small || item.location_large || item.name;
                        geocoder.addressSearch(addrToSearch, (res, status) => {
                            processed++;
                            if (status === kakao.maps.services.Status.OK && res.length > 0) {
                                const iLat = parseFloat(res[0].y);
                                const iLng = parseFloat(res[0].x);
                                const dist = getDistanceMeters(centerCoords.lat, centerCoords.lng, iLat, iLng);
                                if (dist <= radiusMeters) {
                                    const distText = dist >= 1000 ? `${(dist/1000).toFixed(1)}km` : `${Math.round(dist)}m`;
                                    radiusCandidates.push({
                                        ...item,
                                        displayDistance: `${distText} 거리`
                                    });
                                }
                            }

                            if (processed === candidates.length) {
                                spinBtn.disabled = false;
                                if (spinTextEl) spinTextEl.textContent = '오늘 뭐 먹지? 뽑기!';
                                if (radiusCandidates.length === 0) {
                                    alert(`지정하신 기준 장소에서 반경 ${radiusVal >= 1000 ? (radiusVal/1000)+'km' : radiusVal+'m'} 이내에 맛집이 없습니다. 반경 범위를 넓혀보세요!`);
                                    return;
                                }
                                runSpinAnimation(radiusCandidates);
                            }
                        });
                    });
                    return;
                }

                runSpinAnimation(candidates);
            }

            // Resolve center location
            if (centerText) {
                if (centerText === '현재 GPS 위치' && centerInput.dataset.lat && centerInput.dataset.lng) {
                    const lat = parseFloat(centerInput.dataset.lat);
                    const lng = parseFloat(centerInput.dataset.lng);
                    proceedSpin({ lat, lng });
                    return;
                }

                const ps = new kakao.maps.services.Places();
                const spinTextEl = spinBtn.querySelector('.spin-text');
                if (spinTextEl) spinTextEl.textContent = '🎯 기준 장소 위치 확인 중...';
                spinBtn.disabled = true;

                ps.keywordSearch(centerText, (data, status) => {
                    spinBtn.disabled = false;
                    if (spinTextEl) spinTextEl.textContent = '오늘 뭐 먹지? 뽑기!';

                    if (status === kakao.maps.services.Status.OK && data && data.length > 0) {
                        const lat = parseFloat(data[0].y);
                        const lng = parseFloat(data[0].x);
                        const placeName = data[0].place_name;
                        if (centerInfo) {
                            centerInfo.innerHTML = `🎯 <b>${placeName}</b> 기준 반경 검색이 활성화되었습니다.`;
                        }
                        proceedSpin({ lat, lng });
                    } else {
                        alert(`'${centerText}' 위치를 찾을 수 없습니다. 장소명을 다시 확인해 주세요.`);
                    }
                });
            } else {
                proceedSpin(null);
            }
        }

        spinBtn.addEventListener('click', startSpin);
        if (reSpinBtn) reSpinBtn.addEventListener('click', startSpin);

        // View on map action with automatic map pan & pin highlight
        if (viewOnMapBtn) {
            viewOnMapBtn.addEventListener('click', () => {
                if (!currentWinnerItem) return;
                navigateToMapWithRestaurant(currentWinnerItem);
            });
        }
    }

    let map = null;
    let markers = [];
    let geocoder = null;

    // ─── Navigate to MAP Tab & Highlight Pin/Marker ───
    function navigateToMapWithRestaurant(item) {
        if (!item || !item.name) return;

        // 1. Switch to MAP tab UI
        switchTabUI('map');
        window.location.hash = '#map';

        // 2. Ensure map is initialized
        initMap();

        // 3. Pan to location & show pulsing highlight marker overlay
        setTimeout(() => {
            const searchInput = document.getElementById('map-search-input');
            if (searchInput) searchInput.value = item.name;

            if (typeof kakao !== 'undefined' && kakao.maps && map) {
                const ps = new kakao.maps.services.Places();
                const geocoderObj = new kakao.maps.services.Geocoder();
                const searchKeyword = item.location_small ? `${item.location_small.split('/').pop().trim()} ${item.name}` : item.name;

                const handleCoordsFound = (lat, lng, name, address, placeUrl) => {
                    const moveLatLng = new kakao.maps.LatLng(lat, lng);
                    map.setCenter(moveLatLng);
                    map.setLevel(3); // Zoom in close for maximum clarity

                    // Remove any previous highlight overlay
                    if (window.rouletteMapHighlightOverlay) {
                        window.rouletteMapHighlightOverlay.setMap(null);
                    }

                    const spoonCount = (item.rate ? (item.rate.match(/CLR|🥄/g) || item.rate.match(/🥄/g) || []).length : 0) || 1;
                    const catDisplay = item.category ? item.category.split(',')[0].trim() : '기타';

                    const content = document.createElement('div');
                    content.className = 'custom-overlay map-winner-pulse-marker';
                    content.style.cssText = 'position:relative; bottom:60px; z-index:1000; animation: popoverFadeIn 0.3s ease-out;';
                    content.innerHTML = `
                        <div class="overlay-card" style="background:#FFFFFF; border:2.5px solid #EF4444; border-radius:16px; padding:0.95rem 1.2rem; box-shadow:0 14px 30px rgba(239,68,68,0.4); text-align:center; min-width:210px;">
                            <div style="font-size:0.78rem; font-weight:800; color:#EF4444; margin-bottom:3px;">🎯 룰렛 추천 맛집!</div>
                            <h4 style="margin:0; font-size:1.1rem; font-weight:900; color:#111827;">${name}</h4>
                            <div style="font-size:0.82rem; margin:5px 0; color:#4B5563; font-weight:700;">
                                <span>🏷️ ${catDisplay}</span> · <span>${'🥄'.repeat(spoonCount)}</span>
                            </div>
                            <div style="font-size:0.75rem; color:#9CA3AF; margin-bottom:10px;">${address || ''}</div>
                            <div style="display:flex; gap:6px; justify-content:center;">
                                <a href="${placeUrl || item.map_url || '#'}" target="_blank" rel="noopener noreferrer" style="background:#FEE2E2; color:#DC2626; text-decoration:none; padding:5px 12px; border-radius:12px; font-size:0.78rem; font-weight:800;">카카오맵 📍</a>
                                <button type="button" onclick="this.closest('.map-winner-pulse-marker').remove()" style="background:#F3F4F6; color:#4B5563; border:none; padding:5px 12px; border-radius:12px; font-size:0.78rem; font-weight:700; cursor:pointer;">닫기</button>
                            </div>
                        </div>
                    `;

                    const customOverlay = new kakao.maps.CustomOverlay({
                        position: moveLatLng,
                        content: content,
                        yAnchor: 1
                    });
                    customOverlay.setMap(map);
                    window.rouletteMapHighlightOverlay = customOverlay;
                };

                ps.keywordSearch(searchKeyword, (data, status) => {
                    if (status === kakao.maps.services.Status.OK && data.length > 0) {
                        const target = data[0];
                        handleCoordsFound(parseFloat(target.y), parseFloat(target.x), target.place_name, target.address_name, target.place_url);
                    } else {
                        const addrToSearch = item.location_small || item.location_large || item.name;
                        geocoderObj.addressSearch(addrToSearch, (res, geoStatus) => {
                            if (geoStatus === kakao.maps.services.Status.OK && res.length > 0) {
                                handleCoordsFound(parseFloat(res[0].y), parseFloat(res[0].x), item.name, res[0].address_name, item.map_url);
                            } else {
                                if (typeof searchSavedPlacesOnMap === 'function') searchSavedPlacesOnMap(item.name);
                            }
                        });
                    }
                });
            } else {
                if (typeof searchSavedPlacesOnMap === 'function') searchSavedPlacesOnMap(item.name);
            }
        }, 350);
    }
    window.navigateToMapWithRestaurant = navigateToMapWithRestaurant;

    function initMap() {
        if (map) {
            updateMapMarkers();
            return;
        }

        const container = document.getElementById('kakao-map');
        checkAndInit();

        function checkAndInit() {
            let attempts = 0;
            const timer = setInterval(() => {
                if (typeof kakao !== 'undefined' && kakao.maps && kakao.maps.services) {
                    clearInterval(timer);
                    kakao.maps.load(() => {
                        initializeActualMap();
                    });
                } else if (attempts > 50) {
                    clearInterval(timer);
                    console.error("Kakao object still not found after library load.");
                    alert("카카오 지도API를 불러오지 못했습니다. 도메인 등록 상태나 인터넷 연결을 확인해주세요.");
                }
                attempts++;
            }, 100);
        }

        function initializeActualMap() {
            const options = {
                center: new kakao.maps.LatLng(37.5665, 126.9780),
                level: 7
            };

            try {
                map = new kakao.maps.Map(container, options);
                geocoder = new kakao.maps.services.Geocoder();
                
                const overlay = document.querySelector('.map-overlay');
                if (overlay) overlay.style.display = 'none';
                
                // Add Controls (desktop only)
                if (window.innerWidth > 768) {
                    const mapTypeControl = new kakao.maps.MapTypeControl();
                    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

                    const zoomControl = new kakao.maps.ZoomControl();
                    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
                }

                updateMapMarkers();

                // Setup research button
                const researchBtn = document.getElementById('btn-research');
                researchBtn.addEventListener('click', () => {
                    researchBtn.style.display = 'none';
                    updateMapMarkers();
                });

                // Global Search Toggle logic
                window.isGlobalSearchActive = false;
                const globalToggleBtn = document.getElementById('btn-global-toggle');
                globalToggleBtn.addEventListener('click', () => {
                    window.isGlobalSearchActive = !window.isGlobalSearchActive;
                    globalToggleBtn.classList.toggle('active', window.isGlobalSearchActive);
                    
                    if (window.isGlobalSearchActive) {
                        researchBtn.style.display = 'none';
                    }
                });

                // Map drag: show "현 위치에서 재검색" button instead of auto re-searching
                kakao.maps.event.addListener(map, 'dragend', () => {
                    // Only show the button if the user has an active search or category
                    const hasKeyword = document.getElementById('map-search-input')?.value.trim();
                    if (!window.isGlobalSearchActive && (window.currCategory || hasKeyword)) {
                        researchBtn.style.display = 'flex';
                    } else if (!window.currCategory && !hasKeyword) {
                        researchBtn.style.display = 'flex';
                    }
                });
                // NOTE: zoom_changed intentionally not wired - causes setBounds loop.

                console.log("Map visualization ready.");
            } catch (e) {
                console.error("Critical error creating map:", e);
            }
        }
    }

    const categoryEmojis = {
        '음식점': '🍴',
        '카페': '☕',
        '한식': '🍚',
        '중식': '🥢',
        '일식': '🍣',
        '양식': '🍝',
        '분식': '🍢',
        '패스트푸드': '🍔',
        '치킨': '🍗',
        '피자': '🍕',
        '술집': '🍺',
        '뷔페': '🍽️',
        '아시아음식': '🍜',
        '패밀리레스토랑': '🍴',
        '간식': '🍪'
    };

    const getEmoji = (categoryText) => {
        if (!categoryText) return '🍴';
        const subPriorities = ['한식', '중식', '일식', '양식', '분식', '패스트푸드', '치킨', '피자', '술집', '뷔페', '아시아음식', '패밀리레스토랑', '간식'];
        for (const sub of subPriorities) {
            if (categoryText.includes(sub)) return categoryEmojis[sub];
        }
        if (categoryText.includes('카페') || categoryText.includes('찻집')) return '☕';
        return '🍴';
    };

    function updateMapMarkers() {
        if (!map) return;

        const resultsList = document.getElementById('map-results-list');
        const detailPanel = document.getElementById('map-place-detail');
        const mapSearchValue = document.getElementById('map-search-input').value.trim();

        // Clear existing markers and overlays
        markers.forEach(m => m.setMap(null));
        markers = [];
        if (window.currentMapOverlay) window.currentMapOverlay.setMap(null);
        window.currentMapOverlay = null;

        resultsList.innerHTML = '';
        detailPanel.style.display = 'none';
        resultsList.style.display = 'block';

        const ps = new kakao.maps.services.Places();
        const bounds = new kakao.maps.LatLngBounds();

        // Initialize library feature variables
        if (!window.currCategory) window.currCategory = '';
        
        // Add Category Selection Logic
        const categoryItems = document.querySelectorAll('#category-menu > li');
        categoryItems.forEach(item => {
            const newItem = item.cloneNode(true);
            item.parentNode.replaceChild(newItem, item);
            
            newItem.addEventListener('click', function(e) {
                if (e.target.closest('.sub-menu') || e.target.classList.contains('sub-menu-toggle')) {
                    if (e.target.classList.contains('sub-menu-toggle')) {
                        this.classList.toggle('sub-open');
                    }
                    return; 
                }

                const id = this.id;
                
                // Clear any sub-category active state when clicking main category
                document.querySelectorAll('.sub-menu li').forEach(li => li.classList.remove('active'));

                if (this.classList.contains('on')) {
                    window.currCategory = '';
                    window.currSubKeyword = ''; 
                    this.classList.remove('on');
                    updateMapMarkers();
                } else {
                    window.currCategory = id;
                    window.currSubKeyword = ''; 
                    categoryItems.forEach(li => li.classList.remove('active-on')); // Clear others
                    document.querySelectorAll('#category-menu > li').forEach(li => li.classList.remove('on'));
                    this.classList.add('on');
                    searchPlacesByCategory();
                }
            });

            const subItems = newItem.querySelectorAll('.sub-menu li');
            subItems.forEach(sub => {
                sub.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const keyword = sub.dataset.keyword;
                    window.currCategory = 'FD6';
                    window.currSubKeyword = keyword === '음식점' ? '' : keyword;
                    
                    document.querySelectorAll('#category-menu > li').forEach(li => li.classList.remove('on'));
                    document.querySelectorAll('.sub-menu li').forEach(li => li.classList.remove('active'));
                    sub.classList.add('active');

                    newItem.classList.add('on');
                    newItem.classList.remove('sub-open');
                    
                    searchPlacesByCategory();
                });
            });
        });

        // Subdivision helper to break viewport bounds into 4 quadrants + center to overcome Kakao 45-limit
        function getSubdivisionBounds(bounds) {
            if (!bounds) return [];
            const sw = bounds.getSouthWest();
            const ne = bounds.getNorthEast();
            
            const latMid = (sw.getLat() + ne.getLat()) / 2;
            const lngMid = (sw.getLng() + ne.getLng()) / 2;

            return [
                bounds, // 1. Full view
                new kakao.maps.LatLngBounds(sw, new kakao.maps.LatLng(latMid, lngMid)), // 2. South-West
                new kakao.maps.LatLngBounds(new kakao.maps.LatLng(sw.getLat(), lngMid), new kakao.maps.LatLng(latMid, ne.getLng())), // 3. South-East
                new kakao.maps.LatLngBounds(new kakao.maps.LatLng(latMid, sw.getLng()), new kakao.maps.LatLng(ne.getLat(), lngMid)), // 4. North-West
                new kakao.maps.LatLngBounds(new kakao.maps.LatLng(latMid, lngMid), ne) // 5. North-East
            ];
        }

        // Global National Multi-Region Bounds (Nationwide Coverage for Global Search mode)
        function getGlobalSubdivisionBounds() {
            return [
                null, // 1. Global National Default Accuracy Search
                new kakao.maps.LatLngBounds(new kakao.maps.LatLng(37.15, 126.60), new kakao.maps.LatLng(37.75, 127.35)), // 2. 수도권 (서울/인천/경기)
                new kakao.maps.LatLngBounds(new kakao.maps.LatLng(35.05, 128.20), new kakao.maps.LatLng(36.15, 129.45)), // 3. 영남권 (부산/대구/울산/경남/경북)
                new kakao.maps.LatLngBounds(new kakao.maps.LatLng(36.10, 126.80), new kakao.maps.LatLng(36.85, 127.65)), // 4. 충청/세종/대전권
                new kakao.maps.LatLngBounds(new kakao.maps.LatLng(34.80, 126.60), new kakao.maps.LatLng(35.90, 127.30)), // 5. 호남/광주/전주권
                new kakao.maps.LatLngBounds(new kakao.maps.LatLng(37.40, 127.70), new kakao.maps.LatLng(38.20, 128.90)), // 6. 강원권
                new kakao.maps.LatLngBounds(new kakao.maps.LatLng(33.20, 126.20), new kakao.maps.LatLng(33.60, 126.90))  // 7. 제주권
            ];
        }

        function fetchPlacesForBounds(ps, searchType, query, singleBounds) {
            return new Promise(resolve => {
                let collected = [];
                const options = {
                    sort: kakao.maps.services.SortBy.ACCURACY
                };
                if (singleBounds) {
                    options.bounds = singleBounds;
                }

                const callback = (data, status, pagination) => {
                    if (status === kakao.maps.services.Status.OK && data && data.length > 0) {
                        collected = collected.concat(data);
                        if (pagination && pagination.hasNextPage && collected.length < 45) {
                            try {
                                pagination.nextPage();
                                return;
                            } catch (e) {
                                // continue to resolve
                            }
                        }
                    }
                    resolve(collected);
                };

                if (searchType === 'category') {
                    if (window.currSubKeyword) {
                        ps.keywordSearch(query, callback, options);
                    } else {
                        ps.categorySearch(query, callback, options);
                    }
                } else {
                    ps.keywordSearch(query, callback, options);
                }
            });
        }

        async function executeUnifiedSearch(searchType, query, searchOptions) {
            const resultsList = document.getElementById('map-results-list');
            if (resultsList) {
                resultsList.innerHTML = `<div class="map-empty-state"><p>🔍 지도 화면 전체에서 대량의 맛집(10페이지 분량)을 수집 중...</p></div>`;
            }
            markers.forEach(m => m.setMap(null));
            markers = [];
            if (window.currentMapOverlay) window.currentMapOverlay.setMap(null);

            const ps = new kakao.maps.services.Places();
            const currentBounds = map.getBounds();
            const targetBoundsList = window.isGlobalSearchActive 
                ? getGlobalSubdivisionBounds() 
                : getSubdivisionBounds(currentBounds);

            // Execute parallel multi-quadrant search across viewport or nationwide!
            let resultsArray = [];
            try {
                resultsArray = await Promise.all(
                    targetBoundsList.map(b => fetchPlacesForBounds(ps, searchType, query, b))
                );
            } catch (err) {
                console.error('Multi-bound search error:', err);
            }

            // Deduplicate all collected places
            const allRawPlaces = resultsArray.flat();
            const uniquePlacesMap = new Map();
            allRawPlaces.forEach(p => {
                const key = p.id || `${p.place_name}_${p.x}_${p.y}`;
                if (!uniquePlacesMap.has(key)) {
                    uniquePlacesMap.set(key, p);
                }
            });

            const uniquePlaces = Array.from(uniquePlacesMap.values());

            if (uniquePlaces.length === 0) {
                if (resultsList) resultsList.innerHTML = `<div class="map-empty-state"><p>검색 결과가 없습니다.</p></div>`;
                return;
            }

            // Match with Unified Master Data (My Saved Restaurants / Diary)
            const masterData = getUnifiedRestaurantData();
            const processedResults = [];
            const searchBounds = new kakao.maps.LatLngBounds();

            uniquePlaces.forEach(place => {
                const savedMatch = masterData.find(r => {
                    const rn = (r.name || '').replace(/\s/g, '').toLowerCase();
                    const pn = (place.place_name || '').replace(/\s/g, '').toLowerCase();
                    if (rn === pn) return true;
                    const nameMatch = pn.includes(rn) || rn.includes(pn);
                    if (nameMatch) {
                        const ra = ((r.location_large || '') + ' ' + (r.location_small || '')).replace(/\s/g, '').toLowerCase();
                        const pa = (place.road_address_name || place.address_name || '').replace(/\s/g, '').toLowerCase();
                        return pa.includes(ra) || ra.includes(pa) || (r.location_small && pa.includes(r.location_small.replace(/\s/g, '').toLowerCase()));
                    }
                    return false;
                });

                const item = savedMatch || {
                    name: place.place_name,
                    category: place.category_name.split(' > ').pop(),
                    location_large: place.address_name,
                    rate: '카카오맵 데이터'
                };

                processedResults.push({ item, place, isSaved: !!savedMatch });
            });

            // 1. Render ALL collected markers (100~150+ markers on map!)
            processedResults.forEach(res => {
                renderSingleMarker(res.item, res.place, res.isSaved, searchBounds, window.isGlobalSearchActive);
            });

            // 2. Adjust map view if global search is active
            if (window.isGlobalSearchActive) {
                finalizeSearch(processedResults.length, processedResults.length, searchBounds, true);
            }

            // 3. Render 10-page Paginated Left List!
            renderPaginatedList(processedResults, 1);
        }

        function searchPlacesByCategory() {
            if (!window.currCategory) return;
            const query = window.currSubKeyword ? `${window.currSubKeyword}` : window.currCategory;
            const options = { sort: kakao.maps.services.SortBy.ACCURACY };
            if (!window.isGlobalSearchActive) options.bounds = map.getBounds();

            executeUnifiedSearch('category', query, options);
        }

        // Logic for official keyword/category sample integration
        if (window.currCategory) {
            searchPlacesByCategory();
            return;
        }

        // --- Mode: Keyword Search (Kakao results only, visited places marked) ---
        if (mapSearchValue) {
            const searchOptions = { sort: kakao.maps.services.SortBy.ACCURACY };
            if (!window.isGlobalSearchActive) searchOptions.bounds = map.getBounds();

            executeUnifiedSearch('keyword', mapSearchValue, searchOptions);
        }
        // --- Mode: Initial State (Empty search) ---
        else {
            resultsList.innerHTML = `<div class="map-empty-state"><p>🔍 위에서 검색하거나 카테고리를 선택해보세요.</p></div>`;
        }
    }

    // Numbered Pagination & Clean Replacement Controller
    function renderPaginatedList(allResults, currentPage) {
        const resultsList = document.getElementById('map-results-list');
        if (!resultsList) return;

        const pageSize = 15;
        const totalPages = Math.ceil(allResults.length / pageSize) || 1;
        const safePage = Math.max(1, Math.min(currentPage, totalPages));

        const startIndex = (safePage - 1) * pageSize;
        const pageItems = allResults.slice(startIndex, startIndex + pageSize);

        // 1. Clear previous page items & Reset Scroll to Top!
        resultsList.innerHTML = '';
        resultsList.scrollTop = 0;

        // 2. Build current page items
        pageItems.forEach(res => {
            const { item, place } = res;
            const isSaved = isOwnerUser() ? res.isSaved : false;
            const coords = new kakao.maps.LatLng(place.y, place.x);
            const visits = isSaved ? (item.visit_count || 1) : 0;
            const tagBadge = isSaved 
                ? (visits >= 2 ? `<span class="saved-place-chip gold">🔥 또간집 (${visits}회)</span>` : `<span class="saved-place-chip red">📍 내 저장 맛집</span>`)
                : '';

            const resultItem = document.createElement('div');
            resultItem.className = `result-item ${isSaved ? 'is-saved' : ''}`;
            resultItem.innerHTML = `
                <div class="result-item-top">
                    <h4>${place.place_name || item.name}</h4>
                    ${tagBadge}
                </div>
                <p>${place.category_name?.split(' > ').pop() || item.category} • ${place.address_name || item.location_large}</p>
            `;

            resultItem.addEventListener('click', () => {
                map.panTo(coords);
                if (window.currentMapOverlay) window.currentMapOverlay.setMap(null);
                window.currentMapOverlay = new kakao.maps.CustomOverlay({
                    position: coords,
                    content: `<div class="marker-label ${isSaved ? 'is-saved' : ''}">${place.place_name || item.name}</div>`,
                    yAnchor: 2.1,
                    zIndex: 99999
                });
                window.currentMapOverlay.setMap(map);
                const detailsUrl = place.place_url || item.map_url;
                showPlaceDetail(item, place.road_address_name || place.address_name, isSaved, detailsUrl, place);
            });

            resultsList.appendChild(resultItem);
        });

        // 3. Render Numbered Page Buttons (1 2 3 ... 10+ in a single scrollable row)
        if (totalPages > 1) {
            const pagContainer = document.createElement('div');
            pagContainer.className = 'map-pagination-container';

            let activeBtn = null;
            for (let i = 1; i <= totalPages; i++) {
                const btn = document.createElement('button');
                btn.className = `map-pag-btn ${i === safePage ? 'active' : ''}`;
                btn.innerText = i;
                btn.type = 'button';
                btn.onclick = (e) => {
                    e.stopPropagation();
                    renderPaginatedList(allResults, i);
                };
                pagContainer.appendChild(btn);
                if (i === safePage) activeBtn = btn;
            }

            // Enable mouse wheel horizontal scrolling
            pagContainer.addEventListener('wheel', (e) => {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    pagContainer.scrollLeft += e.deltaY;
                }
            }, { passive: false });

            resultsList.appendChild(pagContainer);

            // Auto-center active page button in scroll view
            if (activeBtn) {
                setTimeout(() => {
                    activeBtn.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
                }, 50);
            }
        }
    }

    // Custom Marker SVG Pin Icons (Identical design & size: 29x42, only colors differ)
    const BLUE_MARKER_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="29" height="42" viewBox="0 0 29 42"><path fill="%233B82F6" stroke="%231D4ED8" stroke-width="1.6" opacity="0.9" d="M14.5 0C6.492 0 0 6.492 0 14.5c0 11.5 14.5 27.5 14.5 27.5s14.5-16 14.5-27.5C29 6.492 22.508 0 14.5 0z"/><circle cx="14.5" cy="14.5" r="5.5" fill="%23FFFFFF"/><circle cx="14.5" cy="14.5" r="3" fill="%233B82F6"/></svg>`;

    const RED_MARKER_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="29" height="42" viewBox="0 0 29 42"><path fill="%23EF4444" stroke="%23B91C1C" stroke-width="1.6" d="M14.5 0C6.492 0 0 6.492 0 14.5c0 11.5 14.5 27.5 14.5 27.5s14.5-16 14.5-27.5C29 6.492 22.508 0 14.5 0z"/><circle cx="14.5" cy="14.5" r="5.5" fill="%23FFFFFF"/><circle cx="14.5" cy="14.5" r="3" fill="%23EF4444"/></svg>`;

    function renderSingleMarker(item, place, isSavedParam, bounds, shouldExtendBounds = false) {
        const isSaved = isOwnerUser() ? isSavedParam : false;
        const coords = new kakao.maps.LatLng(place.y, place.x);

        let markerImg = null;
        if (typeof kakao !== 'undefined' && kakao.maps && kakao.maps.MarkerImage) {
            if (isSaved) {
                markerImg = new kakao.maps.MarkerImage(RED_MARKER_SVG, new kakao.maps.Size(29, 42), { offset: new kakao.maps.Point(14.5, 42) });
            } else {
                markerImg = new kakao.maps.MarkerImage(BLUE_MARKER_SVG, new kakao.maps.Size(29, 42), { offset: new kakao.maps.Point(14.5, 42) });
            }
        }

        const markerOptions = {
            map: map,
            position: coords,
            zIndex: isSaved ? 100 : 1
        };
        if (markerImg) {
            markerOptions.image = markerImg;
        } else {
            markerOptions.opacity = isSaved ? 1 : 0.6;
        }

        const marker = new kakao.maps.Marker(markerOptions);
        markers.push(marker);
        
        if (shouldExtendBounds) {
            bounds.extend(coords);
        }

        kakao.maps.event.addListener(marker, 'click', () => {
            map.panTo(coords);
            if (window.currentMapOverlay) window.currentMapOverlay.setMap(null);
            window.currentMapOverlay = new kakao.maps.CustomOverlay({
                position: coords,
                content: `<div class="marker-label ${isSaved ? 'is-saved' : ''}">${place.place_name || item.name}</div>`,
                yAnchor: 2.1,
                zIndex: 99999
            });
            window.currentMapOverlay.setMap(map);
            const detailsUrl = place.place_url || item.map_url;
            showPlaceDetail(item, place.road_address_name || place.address_name, isSaved, detailsUrl, place);
        });
    }

    function finalizeSearch(current, total, bounds, shouldSetBounds) {
        // Don't reset map bounds when search was triggered by user dragging
        if (window.mapDragTriggered) {
            window.mapDragTriggered = false;
            return;
        }
        if (current >= total && markers.length > 0 && shouldSetBounds) {
            map.setBounds(bounds);
            if (markers.length === 1) map.setLevel(3);
        }
    }

    window.currentGalleryPhotos = [];
    window.switchGalleryPhoto = function(index) {
        const photo = window.currentGalleryPhotos[index];
        if (!photo) return;
        
        const heroImg = document.getElementById('gallery-main-img');
        if (!heroImg) return;
        
        document.querySelectorAll('.photo-thumb-list .thumb-img').forEach((t, i) => {
            if (i === index) t.classList.add('active');
            else t.classList.remove('active');
        });

        heroImg.onerror = function() {
            this.onerror = null;
            this.src = photo.thumbnail_url;
        };

        heroImg.src = photo.image_url || photo.thumbnail_url;
    };

    function fetchPlaceFoodPhotos(placeName, categoryName, containerEl) {
        if (!containerEl) return;
        containerEl.style.display = 'block';
        containerEl.innerHTML = `<div class="photo-loading-skeleton">📷 선명한 대표 음식 사진 찾는 중...</div>`;

        const cleanName = placeName.replace(/본점|지점|점$/g, '').trim();
        let catTag = (categoryName || '').split('>').pop().trim().replace(/음식점|기타|맛집/g, '');
        
        // Strict food dish query (e.g. "을밀대 냉면" or "토속촌 삼계탕") -> eliminates storefront/parking/exterior blog post photos!
        const query = catTag ? `${cleanName} ${catTag}`.trim() : `${cleanName} 음식`;
        const headers = { 'Authorization': 'KakaoAK 36e745d970cf6ee083e08a59ebf3c951' };
        const imgUrl = `https://dapi.kakao.com/v2/search/image?query=${encodeURIComponent(query)}&size=15`;

        fetch(imgUrl, { headers })
            .then(res => res.json())
            .then(data => {
                let photos = [];
                if (data && data.documents && data.documents.length > 0) {
                    // Filter out non-food images (building exterior, entrance, menu board, receipt, map, interior)
                    const filtered = data.documents.filter(doc => {
                        const str = (doc.doc_url + ' ' + doc.image_url + ' ' + doc.display_sitename).toLowerCase();
                        if (str.includes('menu') || str.includes('영수증') || str.includes('receipt') || 
                            str.includes('map') || str.includes('signboard') || str.includes('간판') || 
                            str.includes('외관') || str.includes('입구') || str.includes('가격표')) {
                            return false;
                        }
                        return true;
                    });

                    const docsToUse = filtered.length > 0 ? filtered : data.documents;

                    docsToUse.forEach(doc => {
                        const hdCdnUrl = doc.thumbnail_url ? doc.thumbnail_url.replace(/130x130_\d+_c/, '800x800_85_c') : '';
                        photos.push({
                            image_url: doc.image_url || hdCdnUrl,
                            fallback_url: hdCdnUrl || doc.thumbnail_url,
                            thumbnail_url: doc.thumbnail_url
                        });
                    });
                }

                // Deduplicate and take top 5 photos
                const uniquePhotos = [];
                const seen = new Set();
                for (const p of photos) {
                    if (!seen.has(p.image_url)) {
                        seen.add(p.image_url);
                        uniquePhotos.push(p);
                    }
                    if (uniquePhotos.length >= 5) break;
                }

                if (uniquePhotos.length > 0) {
                    window.currentGalleryPhotos = uniquePhotos;
                    const firstImg = uniquePhotos[0];

                    let thumbsHtml = '';
                    if (uniquePhotos.length > 1) {
                        thumbsHtml = `
                            <div class="photo-thumb-list">
                                ${uniquePhotos.map((doc, idx) => `
                                    <img class="thumb-img ${idx === 0 ? 'active' : ''}" 
                                         src="${doc.thumbnail_url}" 
                                         alt="음식 사진 ${idx + 1}"
                                         onclick="window.switchGalleryPhoto(${idx})">
                                `).join('')}
                            </div>
                        `;
                    }

                    containerEl.innerHTML = `
                        <div class="main-photo-hero">
                            <img id="gallery-main-img" src="${firstImg.image_url}" alt="${placeName} 고화질 음식 사진" onerror="this.onerror=null; this.src='${firstImg.fallback_url}';">
                        </div>
                        ${thumbsHtml}
                    `;
                } else {
                    containerEl.style.display = 'none';
                }
            })
            .catch(err => {
                console.error('Error fetching food photos:', err);
                containerEl.style.display = 'none';
            });
    }

    function fetchUnvisitedBlogReview(placeName, locationName, containerEl) {
        if (!containerEl) return;
        containerEl.innerHTML = `<span class="review-loading" style="font-size:0.82rem; color:var(--text-muted);">💬 방문자 후기 읽는 중...</span>`;

        const cleanName = placeName.replace(/본점|지점|점$/g, '').trim();
        const locTag = (locationName || '').split(' ').slice(0, 2).join(' ');
        const query = `${cleanName} ${locTag} 맛집`.replace(/\s+/g, ' ').trim();
        const headers = { 'Authorization': 'KakaoAK 36e745d970cf6ee083e08a59ebf3c951' };
        const blogUrl = `https://dapi.kakao.com/v2/search/blog?query=${encodeURIComponent(query)}&size=3`;

        fetch(blogUrl, { headers })
            .then(res => res.json())
            .then(data => {
                if (data && data.documents && data.documents.length > 0) {
                    const doc = data.documents[0];
                    const cleanTitle = doc.title.replace(/<[^>]+>/g, '').trim();
                    const cleanContents = doc.contents.replace(/<[^>]+>/g, '').trim().slice(0, 100) + '...';
                    
                    containerEl.innerHTML = `
                        <div class="blog-review-box">
                            <div class="blog-review-title">" ${cleanTitle} "</div>
                            <div class="blog-review-body">${cleanContents}</div>
                            <div class="blog-review-meta">
                                출처: <a href="${doc.url}" target="_blank" class="blog-link" rel="noopener noreferrer">${doc.blogname || 'Daum 블로그 리뷰'} ↗</a>
                            </div>
                        </div>
                    `;
                } else {
                    containerEl.innerHTML = `<div class="rating-notice">아래 카카오맵 상세 버튼에서 전체 별점 및 리뷰를 확인하실 수 있습니다.</div>`;
                }
            })
            .catch(() => {
                containerEl.innerHTML = `<div class="rating-notice">아래 카카오맵 상세 버튼에서 전체 별점 및 리뷰를 확인하실 수 있습니다.</div>`;
            });
    }

    function showPlaceDetail(item, preciseAddress, isSavedParam, placeUrl, placeData) {
        const isSaved = isOwnerUser() ? isSavedParam : false;
        const detailPanel = document.getElementById('map-place-detail');
        const resultsList = document.getElementById('map-results-list');
        
        // Hide list, show detail
        resultsList.style.display = 'none';
        detailPanel.style.display = 'flex';
        detailPanel.scrollTop = 0;

        const mapDetailHash = `#map/place?name=${encodeURIComponent(item.name)}`;
        if (window.location.hash !== mapDetailHash) {
            window.location.hash = mapDetailHash;
        }

        // Prefer specifically passed placeUrl, then item.map_url, then fallback to search
        const finalUrl = placeUrl || item.map_url || `https://map.kakao.com/link/search/${encodeURIComponent(item.name)}`;
        
        // If it's a saved item, show Spoon scores. If unvisited, fetch real Daum Blog review snippet!
        const ratingHtml = isSaved 
            ? `<div class="info-label">맛집 등급 (나의 평점 & 또간집 횟수)</div>
               <div class="info-val rating-val" style="display:flex; align-items:center; gap:8px; margin-top:4px;">
                   ${getSpoonBadgeHtml(item)}
               </div>`
            : `<div class="info-label">💬 실제 방문자 후기 한줄평</div><div id="unvisited-blog-review-box" class="info-val"></div>`;

        // Detailed category
        const displayCategory = placeData?.category_name || item.category || '기타';
        const displayAddress = placeData?.address_name || item.location_large || preciseAddress;

        detailPanel.innerHTML = `
            <div class="detail-body">
                <button class="back-to-list-btn" onclick="if (window.location.hash.includes('/place')) { window.location.hash = '#map'; } else { document.getElementById('map-results-list').style.display='block'; document.getElementById('map-place-detail').style.display='none'; }">
                    ← 목록으로 돌아가기
                </button>
                <div id="detail-photo-gallery" class="detail-photo-gallery"></div>
                <h3 class="detail-title">${item.name}</h3>
                <div class="detail-tags">
                    <span class="detail-tag tag-category">${displayCategory}</span>
                    ${item.location_small ? `<span class="detail-tag tag-location">${item.location_small}</span>` : `<span class="detail-tag tag-location">${displayAddress}</span>`}
                </div>
                
                <div class="detail-info-list">
                    <div class="info-item">
                        ${ratingHtml}
                    </div>
                </div>

                <div class="map-link-container">
                    <a href="https://map.naver.com/p/search/${encodeURIComponent(item.location_small ? item.location_small.split('/').pop().trim() + ' ' + item.name : item.name)}" target="_blank" class="detail-naver-btn">
                        네이버 지도
                    </a>
                    <a href="${finalUrl}" target="_blank" class="detail-kakao-btn">
                        카카오맵
                    </a>
                </div>
            </div>
        `;

        // Trigger Daum Image Search API to fetch representative food photos!
        const photoGalleryEl = document.getElementById('detail-photo-gallery');
        fetchPlaceFoodPhotos(item.name, displayCategory, photoGalleryEl);

        // If unvisited, fetch real blog review summary snippet via Daum Blog API!
        if (!isSaved) {
            const reviewBoxEl = document.getElementById('unvisited-blog-review-box');
            fetchUnvisitedBlogReview(item.name, displayAddress, reviewBoxEl);
        }
    }

    // Add map search input event listener - search on Enter key
    document.getElementById('map-search-input').addEventListener('keydown', (e) => {
        if (e.key !== 'Enter') return;
        
        const query = e.target.value.trim();
        // REMOVED sync with top search input as requested
        currentFilters.searchQuery = query.toLowerCase();

        document.getElementById('map-results-list').style.display = 'block';
        document.getElementById('map-place-detail').style.display = 'none';
        
        updateMapMarkers();
    });

    // Add map search reset button listener
    document.getElementById('map-reset-btn').addEventListener('click', () => {
        const input = document.getElementById('map-search-input');
        input.value = '';
        window.currCategory = '';
        window.currSubKeyword = '';
        document.querySelectorAll('#category-menu > li').forEach(li => li.classList.remove('on'));
        document.getElementById('map-results-list').style.display = 'block';
        document.getElementById('map-place-detail').style.display = 'none';
        updateMapMarkers();
    });

    // Helper to get filtered data for map
    function getFilteredData() {
        const useName = document.getElementById('search-name').checked;
        const useCat = document.getElementById('search-category').checked;
        const useSub = document.getElementById('search-subloc').checked;

        return restaurantData.filter(item => {
            const catMatch = currentFilters.category.length === 0 || 
                           currentFilters.category.some(c => item.category && item.category.includes(c));
            const largeMatch = currentFilters.location_large.length === 0 || 
                             currentFilters.location_large.includes(item.location_large);
            const smallMatch = currentFilters.location_small.length === 0 || 
                             currentFilters.location_small.includes(item.location_small);
            
            let searchMatch = true;
            if (currentFilters.searchQuery) {
                searchMatch = false;
                if (useName && item.name.toLowerCase().includes(currentFilters.searchQuery)) searchMatch = true;
                if (useCat && item.category && item.category.toLowerCase().includes(currentFilters.searchQuery)) searchMatch = true;
                if (useSub && item.location_small && item.location_small.toLowerCase().includes(currentFilters.searchQuery)) searchMatch = true;
            }

            return catMatch && largeMatch && smallMatch && searchMatch;
        });
    }

    let dateRangeFilter = {
        startDate: '',
        endDate: ''
    };

    function setupFilters() {
        refreshSidebarFilters();

        // More Button Event
        btnMoreLocation.addEventListener('click', () => {
            locationLargeVisibleCount += locationLargePageSize;
            renderLocationButtons();
        });

        // Collapse Button Event
        btnCollapseLocation.addEventListener('click', () => {
            locationLargeVisibleCount = 10;
            renderLocationButtons();
        });

        // Rate Filter Event Handlers
        document.querySelectorAll('#rate-filters .filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const isAll = btn.dataset.value === 'all';
                handleFilterClick('rate', isAll ? 'all' : btn.dataset.value, btn);
            });
        });

        // Static 'All' filter listeners for Category & Location
        document.querySelectorAll('.filter-group .filter-btn[data-value="all"]').forEach(btn => {
            const type = btn.dataset.filter;
            if (type !== 'rate') { // Skip rate as handled above
                btn.addEventListener('click', () => handleFilterClick(type, 'all', btn));
            }
        });

        // Event listeners for sorting (multi-selection supported!)
        document.querySelectorAll('.sort-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const sortVal = btn.dataset.sort;
                if (sortVal === 'default') {
                    currentSorts = [];
                    document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                } else {
                    const idx = currentSorts.indexOf(sortVal);
                    if (idx > -1) {
                        currentSorts.splice(idx, 1);
                        btn.classList.remove('active');
                    } else {
                        currentSorts.push(sortVal);
                        btn.classList.add('active');
                    }

                    const defaultBtn = document.querySelector('.sort-btn[data-sort="default"]');
                    if (currentSorts.length === 0) {
                        document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
                        if (defaultBtn) defaultBtn.classList.add('active');
                    } else {
                        if (defaultBtn) defaultBtn.classList.remove('active');
                    }
                }
                render();
            });
        });

        // ── Sidebar Toggle ON/OFF ──
        const toggleSidebarBtn = document.getElementById('btn-toggle-sidebar');
        const mainSidebar = document.getElementById('main-sidebar');
        const listMainContent = document.getElementById('list-main-content');

        if (toggleSidebarBtn && mainSidebar) {
            toggleSidebarBtn.addEventListener('click', () => {
                const isCollapsed = mainSidebar.classList.toggle('collapsed');
                if (listMainContent) listMainContent.classList.toggle('expanded', isCollapsed);
                toggleSidebarBtn.classList.toggle('collapsed-state', isCollapsed);
            });
        }

        // ── Date Range Filter Actions ──
        const applyDateBtn = document.getElementById('btn-apply-date-filter');
        const resetDateBtn = document.getElementById('btn-reset-date-filter');
        const startInput = document.getElementById('filter-start-date');
        const endInput = document.getElementById('filter-end-date');
        const badgeInfo = document.getElementById('date-range-badge-info');

        if (applyDateBtn) {
            applyDateBtn.addEventListener('click', () => {
                const s = startInput ? startInput.value : '';
                const e = endInput ? endInput.value : '';

                if (!s && !e) {
                    alert('시작일 또는 종료일을 하나 이상 선택해주세요.');
                    return;
                }

                dateRangeFilter.startDate = s;
                dateRangeFilter.endDate = e;

                if (badgeInfo) {
                    let text = '📅 ';
                    if (s && e) text += `${s} ~ ${e}`;
                    else if (s) text += `${s} 이후`;
                    else text += `${e} 이전`;
                    badgeInfo.textContent = `${text} 기간 조회 중`;
                    badgeInfo.style.display = 'block';
                }

                render();
            });
        }

        if (resetDateBtn) {
            resetDateBtn.addEventListener('click', () => {
                dateRangeFilter.startDate = '';
                dateRangeFilter.endDate = '';
                if (startInput) startInput.value = '';
                if (endInput) endInput.value = '';
                if (badgeInfo) {
                    badgeInfo.textContent = '';
                    badgeInfo.style.display = 'none';
                }
                render();
            });
        }

        // Expose global full filter reset
        window.resetMainAppFilters = function() {
            currentFilters.category = [];
            currentFilters.rate = [];
            currentFilters.location_large = [];
            currentFilters.location_small = [];
            currentFilters.searchQuery = '';
            currentSorts = [];

            dateRangeFilter.startDate = '';
            dateRangeFilter.endDate = '';

            const startIn = document.getElementById('filter-start-date');
            const endIn = document.getElementById('filter-end-date');
            const badge = document.getElementById('date-range-badge-info');
            if (startIn) startIn.value = '';
            if (endIn) endIn.value = '';
            if (badge) { badge.textContent = ''; badge.style.display = 'none'; }

            if (categoryFilterGroup) {
                categoryFilterGroup.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                const allBtn = categoryFilterGroup.querySelector('.filter-btn[data-value="all"]');
                if (allBtn) allBtn.classList.add('active');
            }
            if (rateFilterGroup) {
                rateFilterGroup.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                const allBtn = rateFilterGroup.querySelector('.filter-btn[data-value="all"]');
                if (allBtn) allBtn.classList.add('active');
            }
            if (locationLargeFilterGroup) {
                locationLargeFilterGroup.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                const allBtn = locationLargeFilterGroup.querySelector('.filter-btn[data-value="all"]');
                if (allBtn) allBtn.classList.add('active');
            }
            if (locationSmallFilterGroup) {
                locationSmallFilterGroup.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                if (smallLocSection) smallLocSection.style.display = 'none';
            }
            if (sortFilterGroup) {
                sortFilterGroup.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
                const defaultSortBtn = sortFilterGroup.querySelector('.sort-btn[data-sort="default"]');
                if (defaultSortBtn) defaultSortBtn.classList.add('active');
            }

            const searchIn = document.getElementById('restaurant-search');
            if (searchIn) searchIn.value = '';

            listDisplayCount = 50;
            render();
        };
    }

    function refreshSidebarFilters() {
        const unifiedData = getUnifiedRestaurantData();
        const categories = new Set();
        const locationCounts = {};

        unifiedData.forEach(item => {
            if (item.category) {
                item.category.split(',').forEach(cat => {
                    const t = cat.trim();
                    if (t) categories.add(t);
                });
            }
            if (item.location_large) {
                locationCounts[item.location_large] = (locationCounts[item.location_large] || 0) + 1;
            }
        });

        // Also collect custom categories added by user in spoonmap_custom_options
        const customStore = JSON.parse(localStorage.getItem(DIARY_CUSTOM_OPTIONS_KEY) || '{}');
        if (customStore.category && Array.isArray(customStore.category)) {
            customStore.category.forEach(c => {
                if (c && c.trim()) categories.add(c.trim());
            });
        }

        // Refresh Category Buttons (Keep 'all' button)
        if (categoryFilterGroup) {
            const existingCatBtns = categoryFilterGroup.querySelectorAll('.filter-btn:not([data-value="all"])');
            existingCatBtns.forEach(b => b.remove());

            Array.from(categories).sort().forEach(cat => {
                const btn = createFilterBtn('category', cat);
                if (currentFilters.category.includes(cat)) btn.classList.add('active');
                categoryFilterGroup.appendChild(btn);
            });
        }

        // Sorted Locations by Count
        sortedLocationsLarge = Object.entries(locationCounts)
            .sort((a, b) => b[1] - a[1])
            .map(entry => entry[0]);

        renderLocationButtons();
        updateFilterButtonsUI();
    }
    window.refreshSidebarFilters = refreshSidebarFilters;

    function updateFilterButtonsUI() {
        ['category', 'rate', 'location_large', 'location_small'].forEach(type => {
            let groupEl = null;
            if (type === 'category') groupEl = document.getElementById('category-filters');
            else if (type === 'rate') groupEl = document.getElementById('rate-filters');
            else if (type === 'location_large') groupEl = document.getElementById('location-large-filters');
            else if (type === 'location_small') groupEl = document.getElementById('location-small-filters');

            if (!groupEl) return;

            const filterValues = currentFilters[type] || [];
            const allBtn = groupEl.querySelector('.filter-btn[data-value="all"]');

            if (filterValues.length === 0) {
                groupEl.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                if (allBtn) allBtn.classList.add('active');
            } else {
                if (allBtn) allBtn.classList.remove('active');
                groupEl.querySelectorAll('.filter-btn').forEach(b => {
                    const val = b.dataset.value;
                    if (val !== 'all') {
                        b.classList.toggle('active', filterValues.includes(val));
                    }
                });
            }
        });
    }
    window.updateFilterButtonsUI = updateFilterButtonsUI;

    function renderLocationButtons() {
        // Clear previous buttons EXCEPT 'all'
        const existing = locationLargeFilterGroup.querySelectorAll('.filter-btn:not([data-value="all"])');
        existing.forEach(e => e.remove());

        const toShow = sortedLocationsLarge.slice(0, locationLargeVisibleCount);
        toShow.forEach(loc => {
            const btn = createFilterBtn('location_large', loc);
            if (currentFilters.location_large.includes(loc)) btn.classList.add('active');
            locationLargeFilterGroup.appendChild(btn);
        });

        // Logic for More/Collapse buttons visibility
        btnMoreLocation.style.display = locationLargeVisibleCount >= sortedLocationsLarge.length ? 'none' : 'flex';
        btnCollapseLocation.style.display = locationLargeVisibleCount > 10 ? 'flex' : 'none';
        
        // Hide container if both buttons are hidden
        if (btnMoreLocation.style.display === 'none' && btnCollapseLocation.style.display === 'none') {
            moreLocContainer.style.display = 'none';
        } else {
            moreLocContainer.style.display = 'flex';
        }
    }

    function setupSearch() {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key !== 'Enter') return;
            const query = e.target.value.trim();
            currentFilters.searchQuery = query.toLowerCase();

            // If map view is active, search saved places on the map
            const mapView = document.getElementById('map-view');
            if (mapView && mapView.classList.contains('active') && map) {
                // REMOVED sync with sidebar search input
                searchSavedPlacesOnMap(query);
                return;
            }
            listDisplayCount = 50;
            render();
        });
    }

    function searchSavedPlacesOnMap(query) {
        const resultsList = document.getElementById('map-results-list');
        const useName = document.getElementById('search-name').checked;
        const useCat = document.getElementById('search-category').checked;
        const useSub = document.getElementById('search-subloc').checked;
        const useMenu = document.getElementById('search-menu').checked;

        // Clear existing markers and results
        markers.forEach(m => m.setMap(null));
        markers = [];
        resultsList.innerHTML = '';
        document.getElementById('map-place-detail').style.display = 'none';
        resultsList.style.display = 'block';

        if (!query) {
            resultsList.innerHTML = `<div class="map-empty-state"><p>🔍 위에서 검색하거나 카테고리를 선택해보세요.</p></div>`;
            return;
        }

        // Filter saved places
        let matched = restaurantData.filter(item => {
            if (useName && item.name.toLowerCase().includes(query)) return true;
            if (useCat && item.category && item.category.toLowerCase().includes(query)) return true;
            if (useSub && item.location_small && item.location_small.toLowerCase().includes(query)) return true;
            if (useMenu && item.menu && item.menu.some(m => m.toLowerCase().includes(query))) return true;
            
            // If none checked, search all fields
            if (!useName && !useCat && !useSub && !useMenu) {
                return item.name.toLowerCase().includes(query) ||
                       (item.category && item.category.toLowerCase().includes(query)) ||
                       (item.location_small && item.location_small.toLowerCase().includes(query)) ||
                       (item.menu && item.menu.some(m => m.toLowerCase().includes(query)));
            }
            return false;
        });

        // Deduplicate: If same restaurant (name + large location), keep only the first one
        const seen = new Set();
        matched = matched.filter(item => {
            const key = `${item.name}|${item.location_large}`;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });

        if (matched.length === 0) {
            resultsList.innerHTML = `<div class="map-empty-state"><p>내가 갔던 곳 중 일치하는 결과가 없습니다.</p></div>`;
            return;
        }

        const ps = new kakao.maps.services.Places();
        const bounds = new kakao.maps.LatLngBounds();
        let processed = 0;

        matched.forEach(item => {
            const query = `${item.name} ${item.location_large}`.trim();
            ps.keywordSearch(query, (data, status) => {
                processed++;
                if (status === kakao.maps.services.Status.OK) {
                    // Global search for visited: no currentMapBounds restriction
                    renderSearchResult(item, data[0], true, bounds, true);
                }
                // Center map to show ALL matched visited places across the country
                if (processed === matched.length && markers.length > 0) {
                    if (!bounds.isEmpty()) {
                        map.setBounds(bounds);
                    }
                }
            });
        });
    }

    function createFilterBtn(type, value) {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.dataset.filter = type;
        btn.dataset.value = value;
        btn.textContent = value;
        btn.addEventListener('click', () => handleFilterClick(type, value, btn));
        return btn;
    }

    function handleFilterClick(type, value, btn) {
        const group = btn.parentElement;
        
        if (value === 'all') {
            currentFilters[type] = [];
            group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        } else {
            const index = currentFilters[type].indexOf(value);
            if (index > -1) {
                currentFilters[type].splice(index, 1);
                btn.classList.remove('active');
            } else {
                currentFilters[type].push(value);
                btn.classList.add('active');
            }
            
            if (currentFilters[type].length === 0) {
                group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                const allBtn = group.querySelector('.filter-btn[data-value="all"]');
                if (allBtn) allBtn.classList.add('active');
            } else {
                const allBtn = group.querySelector('.filter-btn[data-value="all"]');
                if (allBtn) allBtn.classList.remove('active');
            }
        }

        if (type === 'location_large') {
            currentFilters.location_small = [];
            updateSmallLocationFilters(currentFilters.location_large);
        }

        listDisplayCount = 50;
        render();
    }

    function updateSmallLocationFilters(largeValuesArray) {
        locationSmallFilterGroup.innerHTML = '';
        
        // Re-create the "All" button properly to keep event listener
        const allBtn = document.createElement('button');
        allBtn.className = 'filter-btn active';
        allBtn.dataset.filter = 'location_small';
        allBtn.dataset.value = 'all';
        allBtn.textContent = '전체';
        allBtn.addEventListener('click', () => handleFilterClick('location_small', 'all', allBtn));
        locationSmallFilterGroup.appendChild(allBtn);
        
        if (!Array.isArray(largeValuesArray) || largeValuesArray.length === 0) {
            smallLocSection.style.display = 'none';
            return;
        }

        const smallLocs = new Set();
        const unifiedData = getUnifiedRestaurantData();
        unifiedData.forEach(item => {
            if (largeValuesArray.includes(item.location_large) && item.location_small) {
                smallLocs.add(item.location_small);
            }
        });

        if (smallLocs.size > 0) {
            smallLocSection.style.display = 'block';
            Array.from(smallLocs).sort().forEach(loc => {
                const btn = createFilterBtn('location_small', loc);
                if (currentFilters.location_small.includes(loc)) btn.classList.add('active');
                locationSmallFilterGroup.appendChild(btn);
            });
        } else {
            smallLocSection.style.display = 'none';
        }
    }

    function getUnifiedRestaurantData() {
        if (typeof restaurantData === 'undefined') return [];

        const mapByName = new Map();
        const visitsByName = new Map();
        const datesByName = new Map();

        // Pass 1: Add base restaurantData
        restaurantData.forEach(r => {
            const key = r.name.trim().toLowerCase();
            mapByName.set(key, { ...r, menu: [...(r.menu || [])] });
            if (r.date) {
                datesByName.set(key, r.date);
            }
        });

        // Pass 2: Process diaryData (CSV visits)
        if (typeof diaryData !== 'undefined' && Array.isArray(diaryData)) {
            diaryData.forEach(item => {
                if (!item.name) return;
                const key = item.name.trim().toLowerCase();
                visitsByName.set(key, (visitsByName.get(key) || 0) + 1);
                if (item.date) {
                    const prevDate = datesByName.get(key) || '';
                    if (!prevDate || item.date > prevDate) {
                        datesByName.set(key, item.date);
                    }
                }
            });
        }

        // Pass 3: Process localStorage user-added/edited diary entries
        const localEntries = JSON.parse(localStorage.getItem(DIARY_STORAGE_KEY) || '[]');
        localEntries.forEach(item => {
            if (!item.name) return;
            const key = item.name.trim().toLowerCase();
            visitsByName.set(key, (visitsByName.get(key) || 0) + 1);
            if (item.date) {
                const prevDate = datesByName.get(key) || '';
                if (!prevDate || item.date > prevDate) {
                    datesByName.set(key, item.date);
                }
            }

            // Override / Add to map
            const existing = mapByName.get(key);
            const menuArray = Array.isArray(item.menu) 
                ? item.menu 
                : (typeof item.menu === 'string' ? item.menu.split(',').map(m => m.trim()).filter(Boolean) : []);

            if (existing) {
                if (item.category) existing.category = item.category;
                if (item.rate) existing.rate = item.rate;
                if (menuArray.length > 0) existing.menu = menuArray;
                if (item.location_large) existing.location_large = item.location_large;
                if (item.location_small) existing.location_small = item.location_small;
                if (item.map_url) existing.map_url = item.map_url;
            } else {
                mapByName.set(key, {
                    name: item.name,
                    category: item.category || '기타',
                    rate: item.rate || '🥄',
                    menu: menuArray,
                    location_large: item.location_large || '기타',
                    location_small: item.location_small || '',
                    map_url: item.map_url || `https://map.kakao.com/link/search/${encodeURIComponent(item.name)}`,
                    visit_count: 1
                });
            }
        });

        // Pass 3.5: Apply spoonmap_restaurant_overrides (Master restaurant metadata updates)
        const restaurantOverrides = JSON.parse(localStorage.getItem('spoonmap_restaurant_overrides') || '{}');
        Object.keys(restaurantOverrides).forEach(rawKey => {
            const key = rawKey.trim().toLowerCase();
            const ov = restaurantOverrides[rawKey];
            if (!ov) return;
            const existing = mapByName.get(key);
            const menuArray = Array.isArray(ov.menu) 
                ? ov.menu 
                : (typeof ov.menu === 'string' ? ov.menu.split(',').map(m => m.trim()).filter(Boolean) : []);
            if (existing) {
                if (ov.category) existing.category = ov.category;
                if (ov.rate) existing.rate = ov.rate;
                if (menuArray.length > 0) existing.menu = menuArray;
                if (ov.location_large) existing.location_large = ov.location_large;
                if (ov.location_small) existing.location_small = ov.location_small;
                if (ov.map_url) existing.map_url = ov.map_url;
            }
        });

        // Pass 4: Finalize merged list with accurate visit_count and latest date
        const unified = [];
        mapByName.forEach((item, key) => {
            const count = visitsByName.get(key) || item.visit_count || 1;
            const latestDate = datesByName.get(key) || item.date || '';
            unified.push({
                ...item,
                visit_count: count,
                date: latestDate
            });
        });

        return unified;
    }
    window.getUnifiedRestaurantData = getUnifiedRestaurantData;

    function render() {
        const unifiedData = getUnifiedRestaurantData();

        // Filter search targets
        const useName = document.getElementById('search-name').checked;
        const useCat = document.getElementById('search-category').checked;
        const useSub = document.getElementById('search-subloc').checked;
        const useMenu = document.getElementById('search-menu').checked;

        let filtered = unifiedData.filter(item => {
            // Exclude items without kakao map links
            if (!item.map_url) return false;

            const catMatch = currentFilters.category.length === 0 || 
                           currentFilters.category.some(c => item.category && item.category.includes(c));
            const largeMatch = currentFilters.location_large.length === 0 || 
                              currentFilters.location_large.includes(item.location_large);
            const smallMatch = currentFilters.location_small.length === 0 || 
                              currentFilters.location_small.includes(item.location_small);
            const rateMatch = currentFilters.rate.length === 0 ||
                            currentFilters.rate.includes(item.rate);
            
            let searchMatch = true;
            if (currentFilters.searchQuery) {
                searchMatch = false;
                const q = currentFilters.searchQuery.toLowerCase();
                if (useName && item.name.toLowerCase().includes(q)) searchMatch = true;
                if (useCat && item.category && item.category.toLowerCase().includes(q)) searchMatch = true;
                if (useSub && item.location_small && item.location_small.toLowerCase().includes(q)) searchMatch = true;
                if (useMenu && item.menu && item.menu.some(m => m.toLowerCase().includes(q))) searchMatch = true;
                
                // If none checked, search all fields
                if (!useName && !useCat && !useSub && !useMenu) {
                    if (item.name.toLowerCase().includes(q)) searchMatch = true;
                    if (item.category && item.category.toLowerCase().includes(q)) searchMatch = true;
                    if (item.location_small && item.location_small.toLowerCase().includes(q)) searchMatch = true;
                    if (item.menu && item.menu.some(m => m.toLowerCase().includes(q))) searchMatch = true;
                }
            }

            // Date Range Filter Logic
            let dateMatch = true;
            if (dateRangeFilter.startDate || dateRangeFilter.endDate) {
                const visits = getAllVisitsForRestaurant(item.name);
                const periodVisits = visits.filter(v => {
                    if (!v.date) return false;
                    if (dateRangeFilter.startDate && v.date < dateRangeFilter.startDate) return false;
                    if (dateRangeFilter.endDate && v.date > dateRangeFilter.endDate) return false;
                    return true;
                });

                if (periodVisits.length === 0) {
                    dateMatch = false;
                } else {
                    item.period_visit_count = periodVisits.length;
                    const latestPeriodVisit = [...periodVisits].sort((a, b) => b.date.localeCompare(a.date))[0];
                    if (latestPeriodVisit) {
                        item.period_latest_date = latestPeriodVisit.date;
                    }
                }
            } else {
                delete item.period_visit_count;
                delete item.period_latest_date;
            }

            return catMatch && largeMatch && smallMatch && rateMatch && searchMatch && dateMatch;
        });

        // Multi-level Sort Execution
        filtered.sort((a, b) => {
            if (currentSorts.length > 0) {
                for (const sortType of currentSorts) {
                    let res = 0;
                    if (sortType === 'visit-desc') {
                        res = (b.visit_count || 1) - (a.visit_count || 1);
                    } else if (sortType === 'rate-desc') {
                        const aRate = (a.rate ? (a.rate.match(/🥄/g) || []).length : 0);
                        const bRate = (b.rate ? (b.rate.match(/🥄/g) || []).length : 0);
                        res = bRate - aRate;
                    } else if (sortType === 'name-asc') {
                        res = a.name.localeCompare(b.name, 'ko');
                    }
                    if (res !== 0) return res;
                }
            }
            const dateA = a.date || '0000-00-00';
            const dateB = b.date || '0000-00-00';
            return dateB.localeCompare(dateA);
        });

        // Determine compact mode from both class and saved preference (handles page load timing)
        const savedViewMode = localStorage.getItem('spoonmap_view_mode') || 'grid';
        const isCompact = grid.classList.contains('compact-view') || savedViewMode === 'compact';
        // Sync class to match saved preference if not already in sync
        if (isCompact && !grid.classList.contains('compact-view')) {
            grid.classList.add('compact-view');
        }

        // Auto-adjust page size based on view mode
        const pageSize = isCompact ? 100 : 50;
        const visibleItems = filtered.slice(0, Math.max(listDisplayCount, pageSize));

        // Total count display
        const totalCountEl = document.getElementById('total-count-num');
        if (totalCountEl) totalCountEl.textContent = filtered.length;

        // Grid / Table Render
        grid.innerHTML = '';
        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="empty-list-state">
                    <div class="empty-icon">🍽️</div>
                    <h4>조건에 맞는 식당이 없습니다</h4>
                    <p>선택하신 카테고리, 지역, 수저평점 또는 검색어 결과가 없습니다.</p>
                    <button class="empty-reset-btn" onclick="resetAllFilters()">전체 필터 초기화 ↺</button>
                </div>
            `;
        } else {
            if (isCompact) {
                // Notion Table Header
                const tableHeader = document.createElement('div');
                tableHeader.className = 'compact-table-header';
                tableHeader.innerHTML = `
                    <span>식당명</span>
                    <span>분류</span>
                    <span>주요 메뉴</span>
                    <span>지역 (대)</span>
                    <span>지역 (소)</span>
                    <span>Rate</span>
                    <span>Map</span>
                `;
                grid.appendChild(tableHeader);
            }

            visibleItems.forEach(item => {
                grid.appendChild(createCard(item, isCompact));
            });
        }

        // Load More Button UI State
        const loadMoreContainer = document.getElementById('load-more-container');
        const loadMoreText = document.getElementById('load-more-text');

        if (loadMoreContainer) {
            if (filtered.length > visibleItems.length) {
                loadMoreContainer.style.display = 'flex';
                if (loadMoreText) {
                    const stepText = isCompact ? '100' : '50';
                    loadMoreText.textContent = `식당 ${stepText}개 더보기 (현재 ${visibleItems.length}개 / 총 ${filtered.length}개)`;
                }
            } else {
                loadMoreContainer.style.display = 'none';
            }
        }

        // Sync map markers only if map tab is currently active
        const mapView = document.getElementById('map-view');
        if (map && mapView && mapView.classList.contains('active')) updateMapMarkers();
    }
    window.renderApp = render;

    // ─── Filter by Insight Graph Click (Direct Closure Binding) ───
    function filterByInsight(filterType, filterValue) {
        if (!filterType || !filterValue) return;

        // 1. Switch route & UI to LIST tab
        const listTabBtn = document.querySelector('.tab-btn[data-tab="list"], .mobile-tab-btn[data-tab="list"]');
        if (listTabBtn) {
            listTabBtn.click();
        } else {
            switchTabUI('list');
            window.location.hash = '#list';
        }

        // 2. Clear all previous filters
        currentFilters.category = [];
        currentFilters.rate = [];
        currentFilters.location_large = [];
        currentFilters.location_small = [];
        currentFilters.searchQuery = '';
        if (typeof dateRangeFilter !== 'undefined') {
            dateRangeFilter.startDate = null;
            dateRangeFilter.endDate = null;
        }

        // 3. Set target filter value
        if (filterType === 'category') {
            currentFilters.category = [filterValue];
        } else if (filterType === 'location_large') {
            currentFilters.location_large = [filterValue];
        } else if (filterType === 'rate') {
            const num = parseInt(filterValue, 10);
            if (num >= 1 && num <= 5) {
                currentFilters.rate = ['🥄'.repeat(num)];
            } else {
                currentFilters.rate = [filterValue];
            }
        }

        // 4. Update Sidebar Filter Buttons & Render List
        refreshSidebarFilters();
        updateFilterButtonsUI();
        listDisplayCount = 50;
        render();

        // 5. Scroll smoothly to top of window
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const label = filterType === 'category' ? '🏷️' : (filterType === 'location_large' ? '📍' : '🥄');
        if (typeof showDiaryToast === 'function') {
            showDiaryToast(`${label} "${filterValue}" 필터가 적용되었습니다!`);
        }
    }
    window.filterByInsight = filterByInsight;

    // ─── Reset All Filters & Search Inputs ───
    function resetAllFilters() {
        // 1. Reset filter objects
        currentFilters.category = [];
        currentFilters.rate = [];
        currentFilters.location_large = [];
        currentFilters.location_small = [];
        currentFilters.searchQuery = '';
        if (typeof dateRangeFilter !== 'undefined') {
            dateRangeFilter.startDate = null;
            dateRangeFilter.endDate = null;
        }

        // 2. Reset text search & date inputs
        const searchInputEl = document.getElementById('restaurant-search');
        if (searchInputEl) searchInputEl.value = '';
        const startDateInput = document.getElementById('filter-start-date');
        const endDateInput = document.getElementById('filter-end-date');
        if (startDateInput) startDateInput.value = '';
        if (endDateInput) endDateInput.value = '';

        // 3. Reset sort buttons to default
        document.querySelectorAll('.sort-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.sort === 'default');
        });
        currentSorts = [];

        // 4. Update UI & re-render
        refreshSidebarFilters();
        updateFilterButtonsUI();
        listDisplayCount = 50;
        render();

        // 5. User feedback toast
        if (typeof showDiaryToast === 'function') {
            showDiaryToast('🔄 모든 필터가 초기화되었습니다.');
        }
    }
    window.resetAllFilters = resetAllFilters;

    function getFilteredData() {
        return restaurantData.filter(item => {
            if (!item.map_url) return false;

            const catMatch = currentFilters.category === 'all' || 
                           (item.category && item.category.includes(currentFilters.category));
            const largeMatch = currentFilters.location_large === 'all' || 
                              item.location_large === currentFilters.location_large;
            const smallMatch = currentFilters.location_small === 'all' || 
                              item.location_small === currentFilters.location_small;
            const rateMatch = currentFilters.rate === 'all' ||
                            item.rate === currentFilters.rate;

            return catMatch && largeMatch && smallMatch && rateMatch;
        });
    }

    function createCard(item, isCompact = false) {
        const card = document.createElement('div');
        
        // Count spoons or format rate
        const spoonCount = (item.rate ? (item.rate.match(/CLR|🥄/g) || item.rate.match(/🥄/g) || []).length : 0) || 1;
        const naverQuery = encodeURIComponent(item.location_small ? item.location_small.split('/').pop().trim() + ' ' + item.name : item.name);
        const kakaoUrl = item.map_url || `https://map.kakao.com/link/search/${encodeURIComponent(item.name)}`;

        if (isCompact) {
            card.className = 'compact-card-row';
            
            const catTag = item.category ? item.category.split(',')[0].trim() : '기타';
            const catColor = getNotionTagColor(catTag);
            
            const menuArray = Array.isArray(item.menu) ? item.menu : (typeof item.menu === 'string' ? item.menu.split(',') : []);
            const firstMenu = menuArray.length > 0 ? menuArray[0].trim() : '-';
            const menuColor = firstMenu !== '-' ? getNotionTagColor(firstMenu) : { bg: '#F1F1EF', color: '#37352F' };
            
            const locLargeColor = item.location_large ? getNotionTagColor(item.location_large) : { bg: '#F1F1EF', color: '#37352F' };
            const locSmallColor = item.location_small ? getNotionTagColor(item.location_small) : { bg: '#F1F1EF', color: '#37352F' };

            card.innerHTML = `
                <div class="compact-col-name" title="${item.name}">${item.name}</div>
                <div class="compact-col-cell">
                    <span class="diary-mini-tag" style="background:${catColor.bg}; color:${catColor.color}">${catTag}</span>
                </div>
                <div class="compact-col-cell">
                    <span class="diary-mini-tag" style="background:${menuColor.bg}; color:${menuColor.color}">${firstMenu}</span>
                </div>
                <div class="compact-col-cell">
                    <span class="diary-mini-tag" style="background:${locLargeColor.bg}; color:${locLargeColor.color}">${item.location_large || '-'}</span>
                </div>
                <div class="compact-col-cell">
                    <span class="diary-mini-tag" style="background:${locSmallColor.bg}; color:${locSmallColor.color}">${item.location_small || '-'}</span>
                </div>
                <div class="compact-col-rate">
                    ${'🥄'.repeat(spoonCount)}
                </div>
                <div class="compact-col-cell compact-map-cell">
                    <a href="https://map.naver.com/p/search/${naverQuery}" target="_blank" class="compact-map-btn naver-map-btn" onclick="event.stopPropagation()">Naver 🗺️</a>
                    <a href="${kakaoUrl}" target="_blank" class="compact-map-btn kakao-map-btn" onclick="event.stopPropagation()">Kakao 📍</a>
                </div>
            `;
        } else {
            card.className = 'restaurant-card';
            const menuTagsHtml = item.menu && item.menu.length > 0 
                ? item.menu.slice(0, 3).map(m => `<span class="menu-chip">🏷️ ${m}</span>`).join('') 
                : '';

            card.innerHTML = `
                <div class="card-header">
                    <span class="category-badge">${item.category || '기타'}</span>
                    ${getSpoonBadgeHtml(item)}
                </div>
                <div class="card-body">
                    <h2 class="card-title">${item.name}</h2>
                    <div class="location-info">
                        <span class="loc-badge loc-large">${item.location_large}</span>
                        ${item.location_small ? `<span class="loc-badge loc-small">${item.location_small}</span>` : ''}
                    </div>
                    ${menuTagsHtml ? `<div class="card-menu-list">${menuTagsHtml}</div>` : ''}
                </div>
                <div class="card-footer">
                    <a href="https://map.naver.com/p/search/${naverQuery}" target="_blank" class="map-link-btn naver-link" onclick="event.stopPropagation()">
                        <span>Naver</span> 🗺️
                    </a>
                    <a href="${kakaoUrl}" target="_blank" class="map-link-btn kakao-link" onclick="event.stopPropagation()">
                        <span>Kakao</span> 📍
                    </a>
                </div>
            `;
        }

        // Card click opens Detail Modal
        card.addEventListener('click', (e) => {
            if (e.target.closest('.map-link-btn') || e.target.closest('.compact-map-btn')) return;
            openRestaurantDetailModal(item);
        });

        return card;
    }

    // Add listener for search checkboxes
    ['search-name', 'search-category', 'search-subloc', 'search-menu'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', render);
    });

    init();
});

// ─── List View Restaurant Detail Modal (View & Inline Edit) ───
let currentDetailModalItem = null;

function openRestaurantDetailModal(item) {
    if (!item) return;
    currentDetailModalItem = item;

    const overlay = document.getElementById('list-detail-modal-overlay');
    const nameEl = document.getElementById('list-detail-name');
    const badgeEl = document.getElementById('list-detail-visit-badge');
    const rateEl = document.getElementById('list-detail-rate-box');
    const catBox = document.getElementById('list-detail-categories');
    const locBox = document.getElementById('list-detail-locations');
    const menuBox = document.getElementById('list-detail-menus');
    const naverBtn = document.getElementById('list-detail-naver-btn');
    const kakaoBtn = document.getElementById('list-detail-kakao-btn');
    const historyCountEl = document.getElementById('list-detail-history-count');
    const historyListEl = document.getElementById('list-detail-history-list');

    if (!overlay) return;

    // Always start in View Mode
    switchDetailModalMode('view');

    // 1. Title & Visit Badge
    if (nameEl) nameEl.textContent = item.name;
    
    const visits = getAllVisitsForRestaurant(item.name);
    const totalCount = visits.length || item.visit_count || 1;

    if (badgeEl) {
        if (totalCount >= 2) {
            let icon = '🔥';
            if (totalCount >= 10) icon = '👑';
            badgeEl.innerHTML = `${icon} ${totalCount}회 방문 (또간집)`;
            badgeEl.style.display = 'inline-flex';
        } else {
            badgeEl.style.display = 'none';
        }
    }

    // 2. Spoon Rate
    const spoonCount = (item.rate ? (item.rate.match(/CLR|🥄/g) || item.rate.match(/🥄/g) || []).length : 0) || 1;
    if (rateEl) {
        rateEl.innerHTML = `${'🥄'.repeat(spoonCount)} <span style="font-size:0.85rem; color:var(--text-secondary); font-weight:600;">(수저 평점 ${spoonCount}개)</span>`;
    }

    // 3. Notion-style Tags: Category
    if (catBox) {
        catBox.innerHTML = '';
        const catArray = item.category ? item.category.split(',').map(c => c.trim()).filter(Boolean) : ['기타'];
        catArray.forEach(c => {
            const color = getNotionTagColor(c);
            const span = document.createElement('span');
            span.className = 'diary-mini-tag';
            span.style.cssText = `background:${color.bg}; color:${color.color}; font-size:0.85rem; padding:3px 10px; border-radius:12px; font-weight:700;`;
            span.textContent = c;
            catBox.appendChild(span);
        });
    }

    // 4. Locations
    if (locBox) {
        locBox.innerHTML = '';
        const locs = [item.location_large, item.location_small].filter(Boolean);
        locs.forEach(loc => {
            const color = getNotionTagColor(loc);
            const span = document.createElement('span');
            span.className = 'diary-mini-tag';
            span.style.cssText = `background:${color.bg}; color:${color.color}; font-size:0.85rem; padding:3px 10px; border-radius:12px; font-weight:700;`;
            span.textContent = loc;
            locBox.appendChild(span);
        });
    }

    // 5. Menus
    if (menuBox) {
        menuBox.innerHTML = '';
        const menuArray = Array.isArray(item.menu) 
            ? item.menu 
            : (typeof item.menu === 'string' ? item.menu.split(',').map(m => m.trim()).filter(Boolean) : []);

        if (menuArray.length > 0) {
            menuArray.forEach(m => {
                const color = getNotionTagColor(m);
                const span = document.createElement('span');
                span.className = 'diary-mini-tag';
                span.style.cssText = `background:${color.bg}; color:${color.color}; font-size:0.85rem; padding:3px 10px; border-radius:12px; font-weight:700;`;
                span.textContent = `🏷️ ${m}`;
                menuBox.appendChild(span);
            });
        } else {
            menuBox.innerHTML = '<span style="font-size:0.8rem; color:var(--text-muted);">등록된 메뉴 정보 없음</span>';
        }
    }

    // 6. Map Action Buttons
    const naverQuery = encodeURIComponent(item.location_small ? item.location_small.split('/').pop().trim() + ' ' + item.name : item.name);
    if (naverBtn) naverBtn.href = `https://map.naver.com/p/search/${naverQuery}`;
    if (kakaoBtn) kakaoBtn.href = item.map_url || `https://map.kakao.com/link/search/${encodeURIComponent(item.name)}`;

    // 7. Visit History Timeline with rich memo & clickable date
    if (historyCountEl) historyCountEl.textContent = `총 ${totalCount}회 방문`;
    if (historyListEl) {
        historyListEl.innerHTML = '';
        if (visits.length > 0) {
            const sortedVisits = [...visits].sort((a, b) => new Date(b.date) - new Date(a.date));
            sortedVisits.forEach((v, idx) => {
                const orderNum = sortedVisits.length - idx;
                const memoText = (v.data && (v.data.memo || v.data.review)) || v.memo || '';
                const div = document.createElement('div');
                div.className = 'history-item-card';
                div.title = `클릭하면 ${v.date} 다이어리로 이동합니다`;
                div.innerHTML = `
                    <div class="history-item-top">
                        <span class="history-date-link">
                            📅 ${v.date}
                            <span class="jump-hint">다이어리 보기 ➔</span>
                        </span>
                        <span class="history-order-chip">${orderNum >= 2 ? '🔥' : '📍'} ${orderNum}회차 방문</span>
                    </div>
                    ${memoText ? `
                        <div class="history-item-memo">
                            <span class="memo-icon">📝</span>
                            <span class="memo-text">${memoText}</span>
                        </div>
                    ` : ''}
                `;
                div.onclick = (e) => {
                    e.stopPropagation();
                    navigateToDiaryDate(v.date);
                };
                historyListEl.appendChild(div);
            });
        } else {
            historyListEl.innerHTML = `
                <div class="history-item-card" style="text-align:center; color:var(--text-muted); padding:1rem;">
                    📅 최근 방문 날짜: ${item.date || '기록 없음'}
                </div>
            `;
        }
    }

    // 8. Action Buttons Binding
    const addDiaryBtn = document.getElementById('btn-add-diary-for-this-restaurant');
    if (addDiaryBtn) {
        addDiaryBtn.onclick = () => addDiaryForRestaurant(item);
    }
    const editRestaurantBtn = document.getElementById('btn-edit-restaurant-info');
    if (editRestaurantBtn) {
        editRestaurantBtn.onclick = () => switchDetailModalMode('edit');
    }

    // Open Modal
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeRestaurantDetailModal() {
    const overlay = document.getElementById('list-detail-modal-overlay');
    if (overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }
    // Close open popovers
    document.querySelectorAll('.notion-dropdown-popover.open').forEach(p => p.classList.remove('open'));
}

// Switch between 'view' and 'edit' mode in the center modal
function switchDetailModalMode(mode = 'view') {
    const viewContainer = document.getElementById('list-detail-view-container');
    const editContainer = document.getElementById('list-detail-edit-container');

    // Close any open popovers
    document.querySelectorAll('.notion-dropdown-popover.open').forEach(p => p.classList.remove('open'));

    if (mode === 'edit') {
        if (viewContainer) viewContainer.style.display = 'none';
        if (editContainer) editContainer.style.display = 'block';
        populateModalEditForm(currentDetailModalItem);
    } else {
        if (editContainer) editContainer.style.display = 'none';
        if (viewContainer) viewContainer.style.display = 'block';
    }
}

function populateModalEditForm(item) {
    if (!item) return;

    // Ensure notion selectors are initialized
    if (!notionSelectors.modal_category) {
        initAllNotionSelectors();
    }

    const nameInput = document.getElementById('modal-edit-input-name');
    const rateInput = document.getElementById('modal-edit-input-rate');
    const rateLabel = document.getElementById('modal-edit-rate-label');
    const mapInput = document.getElementById('modal-edit-input-map');
    const memoInput = document.getElementById('modal-edit-input-memo');

    if (nameInput) nameInput.value = item.name || '';
    if (mapInput) mapInput.value = item.map_url || '';
    if (memoInput) memoInput.value = item.memo || '';

    // Set Notion tag selectors
    if (notionSelectors.modal_category) {
        if (item.category) notionSelectors.modal_category.setValues(item.category);
        else notionSelectors.modal_category.clear();
    }
    if (notionSelectors.modal_menu) {
        if (item.menu) notionSelectors.modal_menu.setValues(item.menu);
        else notionSelectors.modal_menu.clear();
    }
    if (notionSelectors.modal_location_large) {
        if (item.location_large) notionSelectors.modal_location_large.setValues(item.location_large);
        else notionSelectors.modal_location_large.clear();
    }
    if (notionSelectors.modal_location_small) {
        if (item.location_small) notionSelectors.modal_location_small.setValues(item.location_small);
        else notionSelectors.modal_location_small.clear();
    }

    // Set Rate
    const spoonCount = (item.rate ? (item.rate.match(/CLR|🥄/g) || item.rate.match(/🥄/g) || []).length : 0) || 4;
    if (rateInput) rateInput.value = '🥄'.repeat(spoonCount);
    if (rateLabel) rateLabel.textContent = RATE_LABELS[spoonCount] || `${spoonCount}개`;
    document.querySelectorAll('.modal-rate-spoon').forEach((b, i) => {
        b.classList.toggle('active', i < spoonCount);
    });
}

function saveRestaurantMasterFromModal() {
    if (!currentDetailModalItem || !currentDetailModalItem.name) return;
    const name = currentDetailModalItem.name;
    const key = name.trim().toLowerCase();

    const category = notionSelectors.modal_category ? notionSelectors.modal_category.getValueString() : '';
    if (!category) {
        alert('식당 분류를 하나 이상 선택해주세요.');
        return;
    }

    const menu = notionSelectors.modal_menu ? notionSelectors.modal_menu.getValues() : [];
    const location_large = notionSelectors.modal_location_large ? notionSelectors.modal_location_large.getValueString() : '';
    const location_small = notionSelectors.modal_location_small ? notionSelectors.modal_location_small.getValueString() : '';
    const rate = document.getElementById('modal-edit-input-rate')?.value.trim() || '🥄🥄🥄🥄';
    const map_url = document.getElementById('modal-edit-input-map')?.value.trim() || '';
    const memo = document.getElementById('modal-edit-input-memo')?.value.trim() || '';

    // 1. Save to spoonmap_restaurant_overrides
    const overrides = JSON.parse(localStorage.getItem('spoonmap_restaurant_overrides') || '{}');
    overrides[key] = {
        name,
        category,
        location_large,
        location_small,
        menu,
        rate,
        map_url,
        memo,
        updated_at: new Date().toISOString()
    };
    localStorage.setItem('spoonmap_restaurant_overrides', JSON.stringify(overrides));

    // 2. Batch sync all entries in spoonmap_diary for this restaurant
    const existing = JSON.parse(localStorage.getItem(DIARY_STORAGE_KEY) || '[]');
    let diaryUpdated = false;
    existing.forEach(entry => {
        if (entry.name && entry.name.trim().toLowerCase() === key) {
            entry.category = category;
            if (location_large) entry.location_large = location_large;
            if (location_small) entry.location_small = location_small;
            if (menu.length > 0) entry.menu = menu;
            if (rate) entry.rate = rate;
            if (map_url) entry.map_url = map_url;
            diaryUpdated = true;
        }
    });
    if (diaryUpdated) {
        localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(existing));
    }

    // 3. Re-render List, Diary Calendar, Map, Insights & Roulette Categories
    if (window.renderApp) window.renderApp();
    if (window.populateRecommendCategories) window.populateRecommendCategories();
    if (typeof computeAndRenderFoodInsights === 'function') computeAndRenderFoodInsights();
    renderDiaryCalendar();

    // 4. Update currentDetailModalItem & refresh View Mode
    const allUnified = getUnifiedRestaurantData();
    const updatedItem = allUnified.find(r => r.name.trim().toLowerCase() === key) || {
        ...currentDetailModalItem,
        category,
        location_large,
        location_small,
        menu,
        rate,
        map_url,
        memo
    };
    currentDetailModalItem = updatedItem;

    openRestaurantDetailModal(updatedItem);
    switchDetailModalMode('view');

    showDiaryToast(`✅ "${name}" 정보가 저장되었습니다!`);
}

// ─── Navigate to DIARY Tab at Specific Date ────
function navigateToDiaryDate(dateStr) {
    if (!dateStr) return;
    const parts = dateStr.split('-');
    if (parts.length < 3) return;

    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // 0-indexed month

    // 1. Close Modals & Drawers cleanly
    closeRestaurantDetailModal();
    closeMobileOverlay();
    if (typeof closeDiaryDrawer === 'function') closeDiaryDrawer();

    // 2. Switch to DIARY tab
    const diaryTabBtn = document.querySelector('.tab-btn[data-tab="diary"]') || document.querySelector('.mobile-tab-btn[data-tab="diary"]');
    if (diaryTabBtn) {
        diaryTabBtn.click();
    }

    // 3. Update Calendar Year & Month
    currentDiaryYear = year;
    currentDiaryMonth = month;
    renderDiaryCalendar();

    // 4. Scroll to & highlight the day cell
    setTimeout(() => {
        const cell = document.querySelector(`.diary-day-cell[data-date="${dateStr}"]`);
        if (cell) {
            cell.scrollIntoView({ behavior: 'smooth', block: 'center' });
            cell.classList.add('highlight-pulse');
            setTimeout(() => cell.classList.remove('highlight-pulse'), 2500);
        }
        showDiaryToast(`📅 ${dateStr} 다이어리로 이동했습니다!`);
    }, 120);
}

// ─── Open Restaurant Master Edit Drawer (Using Diary Drawer UI) ────
function openRestaurantMasterEditDrawer(item) {
    if (!item || !item.name) return;

    // 1. Close Detail Modal
    closeRestaurantDetailModal();
    closeMobileOverlay();

    const overlay = document.getElementById('diary-drawer-overlay');
    const dateField = document.getElementById('diary-drawer-field-date');
    const dateInput = document.getElementById('diary-input-date');
    const nameInput = document.getElementById('diary-input-name');
    const rateInput = document.getElementById('diary-input-rate');
    const rateLabel = document.getElementById('diary-rate-label');
    const mapInput = document.getElementById('diary-input-map');
    const memoInput = document.getElementById('diary-input-memo');
    const editIdInput = document.getElementById('diary-editing-id');
    const deleteBtn = document.getElementById('drawer-delete-btn');
    const titleIcon = document.getElementById('drawer-title-icon');
    const titleText = document.getElementById('drawer-title-text');
    const badgeEl = document.getElementById('drawer-visit-badge');
    const submitBtn = document.getElementById('drawer-submit-btn');

    // 2. Hide Date Field (since this is editing restaurant master info)
    if (dateField) dateField.style.display = 'none';
    if (dateInput) dateInput.value = item.date || '2026-08-15';

    // 3. Configure Header & Action Buttons
    if (titleIcon) titleIcon.textContent = '✏️';
    if (titleText) titleText.textContent = `가게 정보 수정`;
    if (badgeEl) {
        badgeEl.style.display = 'inline-flex';
        badgeEl.innerHTML = `🏷️ 식당 마스터 정보 일괄 수정`;
    }
    if (deleteBtn) deleteBtn.style.display = 'none';
    if (submitBtn) submitBtn.innerHTML = '가게 정보 일괄 수정 저장 ✓';

    // 4. Mark special Master Edit ID
    if (editIdInput) editIdInput.value = `__MASTER_EDIT__:${item.name}`;

    // 5. Pre-fill Values
    if (nameInput) nameInput.value = item.name || '';
    if (mapInput) mapInput.value = item.map_url || '';
    if (memoInput) memoInput.value = item.memo || '';

    // 6. Pre-fill Notion Tag Selectors
    if (item.category && notionSelectors.category) notionSelectors.category.setValues(item.category);
    else if (notionSelectors.category) notionSelectors.category.clear();

    if (item.menu && notionSelectors.menu) notionSelectors.menu.setValues(item.menu);
    else if (notionSelectors.menu) notionSelectors.menu.clear();

    if (item.location_large && notionSelectors.location_large) notionSelectors.location_large.setValues(item.location_large);
    else if (notionSelectors.location_large) notionSelectors.location_large.clear();

    if (item.location_small && notionSelectors.location_small) notionSelectors.location_small.setValues(item.location_small);
    else if (notionSelectors.location_small) notionSelectors.location_small.clear();

    // 7. Pre-fill Spoon Rate
    const spoonCount = (item.rate ? (item.rate.match(/CLR|🥄/g) || item.rate.match(/🥄/g) || []).length : 0) || 4;
    if (rateInput) rateInput.value = '🥄'.repeat(spoonCount);
    if (rateLabel) rateLabel.textContent = RATE_LABELS[spoonCount] || '';
    document.querySelectorAll('.rate-spoon').forEach((b, i) => {
        b.classList.toggle('active', i < spoonCount);
    });

    // 8. Open Drawer
    if (overlay) {
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

// ─── Add Diary For Specific Restaurant (Direct Connect from Modal) ────
function addDiaryForRestaurant(itemOrName) {
    const item = typeof itemOrName === 'object' ? itemOrName : null;
    const name = item ? item.name : (typeof itemOrName === 'string' ? itemOrName : '');
    if (!name) return;

    // 1. Close Modals
    closeRestaurantDetailModal();
    closeMobileOverlay();

    // 2. Switch to DIARY tab
    const diaryTabBtn = document.querySelector('.tab-btn[data-tab="diary"]') || document.querySelector('.mobile-tab-btn[data-tab="diary"]');
    if (diaryTabBtn) {
        diaryTabBtn.click();
    }

    // 3. Open '새 방문 기록 추가' Drawer with Today's Date & Pre-fill Info
    setTimeout(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const todayStr = `${year}-${month}-${day}`;

        if (typeof openDiaryDrawer === 'function') {
            openDiaryDrawer(todayStr); // Open in 'Add New' mode with today's date
        }

        const nameInput = document.getElementById('diary-input-name');
        if (nameInput) {
            nameInput.value = name;
            nameInput.dispatchEvent(new Event('input', { bubbles: true }));
        }

        if (item) {
            if (item.category && notionSelectors.category) {
                const cats = item.category.split(',').map(c => c.trim()).filter(Boolean);
                cats.forEach(c => notionSelectors.category.addValue(c));
            }
            if (item.location_large && notionSelectors.location_large) {
                notionSelectors.location_large.addValue(item.location_large);
            }
            if (item.location_small && notionSelectors.location_small) {
                notionSelectors.location_small.addValue(item.location_small);
            }
            if (item.menu && notionSelectors.menu) {
                const menus = Array.isArray(item.menu) ? item.menu : (typeof item.menu === 'string' ? item.menu.split(',').map(m => m.trim()).filter(Boolean) : []);
                if (menus.length > 0) notionSelectors.menu.addValue(menus[0]);
            }
            if (item.rate) {
                const rateInput = document.getElementById('diary-input-rate');
                const rateLabel = document.getElementById('diary-rate-label');
                const spoonCount = (item.rate.match(/CLR|🥄/g) || item.rate.match(/🥄/g) || []).length || 1;
                if (rateInput) rateInput.value = '🥄'.repeat(spoonCount);
                if (rateLabel && typeof RATE_LABELS !== 'undefined') rateLabel.textContent = RATE_LABELS[spoonCount] || '';
                document.querySelectorAll('.rate-spoon').forEach((b, i) => {
                    b.classList.toggle('active', i < spoonCount);
                });
            }
            if (item.map_url) {
                const mapInput = document.getElementById('diary-input-map');
                if (mapInput) mapInput.value = item.map_url;
            }
        }
    }, 100);
}

// ─── View Mode Switcher Controls (Grid vs Compact) ────
document.addEventListener('DOMContentLoaded', () => {
    const gridBtn = document.getElementById('view-mode-grid');
    const compactBtn = document.getElementById('view-mode-compact');
    const gridEl = document.getElementById('restaurant-grid');
    const resetAllBtn = document.getElementById('btn-reset-all-filters');

    if (resetAllBtn) {
        resetAllBtn.addEventListener('click', () => {
            if (typeof window.resetAllFilters === 'function') {
                window.resetAllFilters();
            }
        });
    }

    // Restore View Mode preference
    const savedMode = localStorage.getItem('spoonmap_view_mode') || 'grid';
    if (savedMode === 'compact' && gridEl) {
        gridEl.classList.add('compact-view');
        if (compactBtn) compactBtn.classList.add('active');
        if (gridBtn) gridBtn.classList.remove('active');
        // Re-render after class is set so cards are built in compact layout
        // Use small delay to ensure data has loaded first
        const tryRender = (attempts = 0) => {
            if (window.renderApp) {
                window.renderApp();
            } else if (attempts < 20) {
                setTimeout(() => tryRender(attempts + 1), 200);
            }
        };
        setTimeout(() => tryRender(), 300);
    }

    if (gridBtn && compactBtn && gridEl) {
        gridBtn.addEventListener('click', () => {
            gridEl.classList.remove('compact-view');
            gridBtn.classList.add('active');
            compactBtn.classList.remove('active');
            localStorage.setItem('spoonmap_view_mode', 'grid');
            if (window._listDisplayCount !== undefined) window._listDisplayCount = 50;
            if (window.renderApp) window.renderApp();
        });

        compactBtn.addEventListener('click', () => {
            gridEl.classList.add('compact-view');
            compactBtn.classList.add('active');
            gridBtn.classList.remove('active');
            localStorage.setItem('spoonmap_view_mode', 'compact');
            if (window._listDisplayCount !== undefined) window._listDisplayCount = 100;
            if (window.renderApp) window.renderApp();
        });
    }
});

// Bind Close Modal & Keyboard Events
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('list-detail-close-btn');
    const overlay = document.getElementById('list-detail-modal-overlay');

    if (closeBtn) closeBtn.addEventListener('click', closeRestaurantDetailModal);
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeRestaurantDetailModal();
        });
    }
});

// Global ESC key listener to close active modals & drawers
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
        // 1. Notion Popover dropdowns
        const openPopovers = document.querySelectorAll('.notion-dropdown-popover.open');
        if (openPopovers.length > 0) {
            openPopovers.forEach(p => p.classList.remove('open'));
        }

        // 2. Diary Drawer (add / edit)
        const diaryOverlay = document.getElementById('diary-drawer-overlay');
        if (diaryOverlay && diaryOverlay.classList.contains('open')) {
            closeDiaryDrawer();
        }

        // 3. Restaurant Detail View Modal (LIST tab & others)
        const listDetailOverlay = document.getElementById('list-detail-modal-overlay');
        if (listDetailOverlay && listDetailOverlay.classList.contains('open')) {
            closeRestaurantDetailModal();
        }

        // 4. Mobile Card Overlay
        const mobileOverlay = document.getElementById('mobile-card-overlay');
        if (mobileOverlay && mobileOverlay.classList.contains('open')) {
            closeMobileOverlay();
        }
    }
});

// ─── Mobile Card Overlay Functions (global scope) ────
function openMobileOverlay(item, updateHash = true) {
    const overlay = document.getElementById('mobile-card-overlay');
    const content = document.getElementById('mobile-card-detail-content');
    if (!overlay || !content) return;

    const naverQuery = encodeURIComponent(item.location_small ? item.location_small.split('/').pop().trim() + ' ' + item.name : item.name);
    const kakaoUrl = item.map_url || `https://map.kakao.com/link/search/${encodeURIComponent(item.name)}`;
    const menuTagsHtml = item.menu && item.menu.length > 0 
        ? item.menu.map(m => `<span class="menu-chip">🏷️ ${m}</span>`).join('') 
        : '';

    content.innerHTML = `
        <p class="overlay-name">${item.name}</p>
        <div class="overlay-meta">
            <span class="category-badge">${item.category || '기타'}</span>
            ${getSpoonBadgeHtml(item)}
        </div>
        <p class="overlay-location">
            📍 ${item.location_large}${item.location_small ? ' · ' + item.location_small : ''}
        </p>
        ${menuTagsHtml ? `<div class="overlay-menu-list">${menuTagsHtml}</div>` : ''}
        <div class="overlay-links">
            <a href="https://map.naver.com/p/search/${naverQuery}" target="_blank" class="overlay-naver">네이버 지도에서 보기</a>
            <a href="${kakaoUrl}" target="_blank" class="overlay-kakao">카카오맵에서 보기</a>
        </div>
    `;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    if (updateHash) {
        const route = (typeof parseRoute === 'function') ? parseRoute() : { tab: 'list' };
        const detailHash = `#${route.tab}/detail?name=${encodeURIComponent(item.name)}`;
        if (window.location.hash !== detailHash) {
            window.location.hash = detailHash;
        }
    }
}

function closeMobileOverlay() {
    const overlay = document.getElementById('mobile-card-overlay');
    if (overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (window.location.hash.includes('/detail')) {
        const route = (typeof parseRoute === 'function') ? parseRoute() : { tab: 'list' };
        window.location.hash = `#${route.tab}`;
    }
}

// ─── Food Insights Dashboard Functions ────
let showAllRegions = false;
let showAllCategories = false;
let showAllTopPlaces = false;

function initFoodInsightsTab() {
    const btnReg = document.getElementById('btn-toggle-regions');
    const btnCat = document.getElementById('btn-toggle-categories');
    const btnTop = document.getElementById('btn-toggle-top-places');

    if (btnReg) {
        btnReg.addEventListener('click', () => {
            showAllRegions = !showAllRegions;
            computeAndRenderFoodInsights();
        });
    }
    if (btnCat) {
        btnCat.addEventListener('click', () => {
            showAllCategories = !showAllCategories;
            computeAndRenderFoodInsights();
        });
    }
    if (btnTop) {
        btnTop.addEventListener('click', () => {
            showAllTopPlaces = !showAllTopPlaces;
            computeAndRenderFoodInsights();
        });
    }
}



function computeAndRenderFoodInsights() {
    const masterData = getUnifiedRestaurantData();
    if (!masterData || !masterData.length) return;

    const totalCount = masterData.length;
    let totalVisitsSum = 0;
    let reVisitedCount = 0;
    const regionCounts = {};
    const categoryCounts = {};
    const rateCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    const topVisitedItems = [...masterData].sort((a, b) => (b.visit_count || 1) - (a.visit_count || 1));

    masterData.forEach(item => {
        const visits = item.visit_count || 1;
        totalVisitsSum += visits;
        if (visits >= 2) reVisitedCount++;

        // Region
        const reg = item.location_large || '기타';
        regionCounts[reg] = (regionCounts[reg] || 0) + 1;

        // Category
        if (item.category) {
            item.category.split(',').forEach(c => {
                const cleanC = c.trim();
                if (cleanC) categoryCounts[cleanC] = (categoryCounts[cleanC] || 0) + 1;
            });
        }

        // Spoon Rate
        const spoonCount = (item.rate ? (item.rate.match(/CLR|🥄/g) || item.rate.match(/🥄/g) || []).length : 1) || 1;
        rateCounts[spoonCount] = (rateCounts[spoonCount] || 0) + 1;
    });

    // 1. Counter Cards (Realtime 100% updated values)
    const summaryEl = document.getElementById('insights-total-summary');
    if (summaryEl) {
        summaryEl.textContent = `총 ${totalCount.toLocaleString()}개의 맛집과 ${totalVisitsSum.toLocaleString()}회의 미식 탐방 기록 분석 완료`;
    }
    
    const countEl = document.getElementById('stat-total-count');
    if (countEl) countEl.textContent = `${totalCount.toLocaleString()}곳`;
    
    const visitedPct = Math.round((reVisitedCount / totalCount) * 100);
    const visEl = document.getElementById('stat-visited-count');
    if (visEl) visEl.textContent = `${reVisitedCount}곳 (${visitedPct}%)`;

    const topPlace = topVisitedItems[0];
    const topPlaceEl = document.getElementById('stat-top-place');
    if (topPlaceEl) topPlaceEl.textContent = topPlace ? `${topPlace.name} (${topPlace.visit_count || 1}회)` : '-';

    // Top Category
    const sortedCats = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]);
    const topCat = sortedCats[0];
    const topCatEl = document.getElementById('stat-top-category');
    if (topCatEl) topCatEl.textContent = topCat ? `${topCat[0]} (${topCat[1]}곳)` : '-';

    // 2. Region List (Clickable bar filters LIST tab!)
    const sortedRegions = Object.entries(regionCounts).sort((a, b) => b[1] - a[1]);
    const btnReg = document.getElementById('btn-toggle-regions');
    if (btnReg) {
        btnReg.textContent = showAllRegions ? '접기 ▲' : '전체 ▼';
    }
    const displayRegions = showAllRegions ? sortedRegions : sortedRegions.slice(0, 5);
    const regionContainer = document.getElementById('insights-region-list');
    if (regionContainer) {
        regionContainer.innerHTML = displayRegions.map(([reg, count]) => {
            const pct = Math.round((count / totalCount) * 100);
            return `
                <div class="bar-item clickable-insight-bar" onclick="filterByInsight('location_large', '${reg}')" title="클릭하면 LIST 탭에서 '${reg}' 맛집만 필터링합니다">
                    <div class="bar-label-row">
                        <span>📍 ${reg} <span class="insight-jump-hint">LIST로 이동 ➔</span></span>
                        <span class="bar-count">${count}곳 (${pct}%)</span>
                    </div>
                    <div class="bar-track">
                        <div class="bar-fill" style="width: ${pct}%;"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // 3. Category List (Clickable bar filters LIST tab with Notion pastel badges)
    const btnCat = document.getElementById('btn-toggle-categories');
    if (btnCat) {
        btnCat.textContent = showAllCategories ? '접기 ▲' : '전체 ▼';
    }
    const displayCategories = showAllCategories ? sortedCats : sortedCats.slice(0, 5);
    const categoryContainer = document.getElementById('insights-category-list');
    if (categoryContainer) {
        categoryContainer.innerHTML = displayCategories.map(([cat, count]) => {
            const pct = Math.round((count / totalCount) * 100);
            const displayLabel = typeof getFormattedTagDisplay === 'function' ? getFormattedTagDisplay(cat) : cat;
            const color = typeof getNotionTagColor === 'function' ? getNotionTagColor(cat) : { bg: '#FEF3C7', color: '#92400E' };
            return `
                <div class="bar-item clickable-insight-bar" onclick="filterByInsight('category', '${cat}')" title="클릭하면 LIST 탭에서 '${cat}' 맛집만 필터링합니다">
                    <div class="bar-label-row">
                        <span style="display:inline-flex; align-items:center; gap:6px;">
                            <span class="notion-selected-chip" style="background:${color.bg}; color:${color.color}; font-weight:800; font-size:0.84rem; padding:3px 10px; border-radius:10px; display:inline-block;">
                                ${displayLabel}
                            </span>
                            <span class="insight-jump-hint">LIST로 이동 ➔</span>
                        </span>
                        <span class="bar-count">${count}곳 (${pct}%)</span>
                    </div>
                    <div class="bar-track">
                        <div class="bar-fill" style="width: ${pct}%; background:${color.color};"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // 4. Rate Distribution (Clickable bar filters LIST tab!)
    const rateContainer = document.getElementById('insights-rate-list');
    if (rateContainer) {
        const rateKeys = [5, 4, 3, 2, 1];
        rateContainer.innerHTML = rateKeys.map(r => {
            const count = rateCounts[r] || 0;
            const pct = Math.round((count / totalCount) * 100);
            return `
                <div class="bar-item clickable-insight-bar" onclick="filterByInsight('rate', '${r}')" title="클릭하면 LIST 탭에서 평점 ${r}개 맛집만 필터링합니다">
                    <div class="bar-label-row">
                        <span>🥄 ${r}개 평점 <span class="insight-jump-hint">LIST로 이동 ➔</span></span>
                        <span class="bar-count">${count}곳 (${pct}%)</span>
                    </div>
                    <div class="bar-track">
                        <div class="bar-fill" style="width: ${pct}%;"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // 5. Hall of Fame (Clickable card opens Detail Modal)
    const visitedOnlyPlaces = topVisitedItems.filter(item => (item.visit_count || 1) >= 2);
    const btnTop = document.getElementById('btn-toggle-top-places');
    if (btnTop) {
        btnTop.textContent = showAllTopPlaces ? '접기 ▲' : '전체 ▼';
    }
    const displayPlaces = showAllTopPlaces ? visitedOnlyPlaces : visitedOnlyPlaces.slice(0, 5);
    const topPlacesContainer = document.getElementById('insights-top-places-list');
    if (topPlacesContainer) {
        topPlacesContainer.innerHTML = displayPlaces.map((item, idx) => {
            const spoonCount = (item.rate ? (item.rate.match(/CLR|🥄/g) || item.rate.match(/🥄/g) || []).length : 0) || 1;
            const visits = item.visit_count || 1;
            const jsonStr = JSON.stringify(item).replace(/"/g, '&quot;');
            return `
                <div class="rank-item clickable-rank-item" onclick='openRestaurantDetailModal(${jsonStr})' title="클릭하면 식당 상세 및 방문 이력을 확인합니다">
                    <div class="rank-left">
                        <span class="rank-num">#${idx + 1}</span>
                        <div>
                            <div class="rank-name">${item.name} <span class="insight-jump-hint">상세보기 ➔</span></div>
                            <div class="rank-meta">${item.location_large} • ${item.category || '기타'}</div>
                        </div>
                    </div>
                    <div>
                        <span class="spoon-badge visit-tier-${visits >= 10 ? 3 : visits >= 5 ? 2 : 1}">
                            <span class="spoon-icons">🥄 ${spoonCount}개</span>
                            <span class="visit-count-tag">🔥 ${visits}회</span>
                        </span>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// ─── AI Sommelier Chatbot Engine (global scope) ────
let sommelierInitialized = false;

window.sendSommelierQuickPrompt = function(promptText) {
    const input = document.getElementById('sommelier-user-input');
    if (input) {
        input.value = promptText;
        handleSommelierSend();
    }
};

window.toggleChipsExpand = function() {
    const extraChips = document.querySelectorAll('.chip-extra');
    const toggleText = document.getElementById('chips-toggle-text');
    const toggleIcon = document.getElementById('chips-toggle-icon');
    if (!extraChips.length) return;

    const isHidden = extraChips[0].style.display === 'none';
    extraChips.forEach(chip => {
        chip.style.display = isHidden ? 'inline-block' : 'none';
    });

    if (toggleText && toggleIcon) {
        toggleText.innerText = isHidden ? '접기' : '+ 질문 더보기';
        toggleIcon.innerText = isHidden ? '▴' : '▾';
    }
};

function initSommelierTab() {
    if (sommelierInitialized) return;
    sommelierInitialized = true;

    const thread = document.getElementById('sommelier-chat-thread');
    const input = document.getElementById('sommelier-user-input');
    const sendBtn = document.getElementById('btn-send-sommelier');
    if (!thread || !input || !sendBtn) return;

    // Initial AI Welcome Message with Time Context
    const now = new Date();
    const hour = now.getHours();
    let timeGreeting = '오늘의 미식 탐방';
    if (hour >= 6 && hour < 11) timeGreeting = '🥪 기분 좋은 아침/브런치 시간대';
    else if (hour >= 11 && hour < 14) timeGreeting = '🍚 든든한 점심 식사 시간대';
    else if (hour >= 14 && hour < 17) timeGreeting = '☕ 여유로운 오후 카페 시간대';
    else if (hour >= 17 && hour < 21) timeGreeting = '🥩 시원한 반주와 맛있는 저녁 시간대';
    else timeGreeting = '🍺 출출한 야식 & 술 한잔 시간대';

    thread.innerHTML = `
        <div class="chat-msg ai-msg">
            <div class="chat-avatar">🤖</div>
            <div class="chat-bubble">
                안녕하세요! <b>AI 미식 소믈리에</b>입니다 🍷✨<br><br>
                지금은 <b>${timeGreeting}</b>이네요!<br>
                원하시는 <b>개수(예: 1차 3곳, 2차 3곳), 추천 출처(내 맛집만 vs 카카오 지도 실시간), 코스 및 카테고리</b>를 무엇이든 자유롭게 요구해 보세요!<br><br>
                💡 상단의 추천 샘플 질문을 누르시거나 하단 창에 원하는 질문을 입력하세요!
            </div>
        </div>
    `;

    sendBtn.addEventListener('click', handleSommelierSend);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleSommelierSend();
    });
}

function handleSommelierSend() {
    const thread = document.getElementById('sommelier-chat-thread');
    const input = document.getElementById('sommelier-user-input');
    if (!input || !thread) return;

    const text = input.value.trim();
    if (!text) return;

    // Render User Message
    const userMsgDiv = document.createElement('div');
    userMsgDiv.className = 'chat-msg user-msg';
    userMsgDiv.innerHTML = `
        <div class="chat-avatar">👤</div>
        <div class="chat-bubble">${escapeHtml(text)}</div>
    `;
    thread.appendChild(userMsgDiv);
    input.value = '';
    thread.scrollTop = thread.scrollHeight;

    // AI Typing Indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-msg ai-msg';
    typingDiv.id = 'ai-typing-indicator';
    typingDiv.innerHTML = `
        <div class="chat-avatar">🤖</div>
        <div class="chat-bubble">🍷 카카오 + 네이버 듀얼 실시간 데이터 수집 및 교차 분석 중...</div>
    `;
    thread.appendChild(typingDiv);
    thread.scrollTop = thread.scrollHeight;

    processSommelierQuery(text, (replyObj) => {
        const indicator = document.getElementById('ai-typing-indicator');
        if (indicator) indicator.remove();

        const aiMsgDiv = document.createElement('div');
        aiMsgDiv.className = 'chat-msg ai-msg';
        aiMsgDiv.innerHTML = `
            <div class="chat-avatar">🤖</div>
            <div class="chat-bubble">
                ${replyObj.html}
            </div>
        `;
        thread.appendChild(aiMsgDiv);
        thread.scrollTop = thread.scrollHeight;
    });
}

function cleanMarkdownText(str) {
    if (!str) return '';
    return str
        .replace(/```html/gi, '')
        .replace(/```/g, '')
        .replace(/\*\*/g, '')          // remove **
        .replace(/\*/g, '')           // remove *
        .replace(/###/g, '')          // remove ###
        .replace(/##/g, '')           // remove ##
        .replace(/#/g, '')            // remove #
        .replace(/---/g, '')          // remove ---
        .trim();
}

// Gemini 응답 HTML에 네이버지도 버튼을 자동으로 주입하는 함수
// rec-card-standard 내의 제목/주소를 파싱해 Naver URL을 만들고
// 기존 rec-kakao-pill-btn 옆에 rec-naver-pill-btn을 삽입합니다.
function injectNaverButtons(html) {
    // 이미 주입되어 있는 경우 중복 삽입 방지
    if (html.includes('rec-naver-pill-btn')) return html;

    return html.replace(
        /(<h4 class="rec-place-title">([\s\S]*?)<\/h4>)([\s\S]*?)(<a[^>]+class="rec-kakao-pill-btn"[^>]*>[\s\S]*?<\/a>)/g,
        function(match, titleTag, titleText, middle, kakaoBtn) {
            const addrMatch = middle.match(/\uD83D\uDCCD[\s\S]*?<\/b>\s*([\s\S]*?)<\/div>/);
            const addr = addrMatch ? addrMatch[1].replace(/<[^>]+>/g, '').trim() : '';
            const name = titleText.replace(/<[^>]+>/g, '').trim();
            const query = encodeURIComponent(addr ? addr + ' ' + name : name);
            const naverUrl = 'https://map.naver.com/p/search/' + query;
            const naverBtn = '<a href="' + naverUrl + '" target="_blank" class="rec-naver-pill-btn">\uD83D\uDDFA\uFE0F \ub124\uc774\ubc84\uc9c0\ub3c4\uc5d0\uc11c \ubcf4\uae30</a>';
            return titleTag + middle + '<div class="rec-map-btns">' + kakaoBtn + naverBtn + '</div>';
        }
    );
}

function renderCardStandard(tagText, placeName, addr, desc, mapUrl) {
    const cleanTag = cleanMarkdownText(tagText);
    const cleanTitle = cleanMarkdownText(placeName);
    const cleanAddr = cleanMarkdownText(addr);
    const cleanDesc = cleanMarkdownText(desc);
    const kakaoUrl = mapUrl || `https://map.kakao.com/link/search/${encodeURIComponent(cleanTitle)}`;
    const naverUrl = `https://map.naver.com/p/search/${encodeURIComponent(cleanAddr ? cleanAddr + ' ' + cleanTitle : cleanTitle)}`;

    return `
        <div class="rec-card-standard">
            <span class="rec-tag-pill">${cleanTag}</span>
            <h4 class="rec-place-title">${cleanTitle}</h4>
            <div class="rec-place-meta">📍 <b>위치:</b> ${cleanAddr}</div>
            <p class="rec-place-desc">${cleanDesc}</p>
            <div class="rec-map-btns">
                <a href="${kakaoUrl}" target="_blank" class="rec-kakao-pill-btn">👈 카카오맵에서 보기</a>
                <a href="${naverUrl}" target="_blank" class="rec-naver-pill-btn">🗺️ 네이버지도에서 보기</a>
            </div>
        </div>
    `;
}

function handleSommelierSend() {
    const thread = document.getElementById('sommelier-chat-thread');
    const input = document.getElementById('sommelier-user-input');
    const sendBtn = document.getElementById('btn-send-sommelier');
    if (!input || !thread) return;

    const text = input.value.trim();
    if (!text) return;

    // Render User Message
    const userMsgDiv = document.createElement('div');
    userMsgDiv.className = 'chat-msg user-msg';
    userMsgDiv.innerHTML = `
        <div class="chat-avatar">👤</div>
        <div class="chat-bubble">${escapeHtml(text)}</div>
    `;
    thread.appendChild(userMsgDiv);
    input.value = '';
    thread.scrollTop = thread.scrollHeight;

    // AI Typing Indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-msg ai-msg';
    typingDiv.id = 'ai-typing-indicator';
    typingDiv.innerHTML = `
        <div class="chat-avatar">🤖</div>
        <div class="chat-bubble">🍷 요청 조건(개수·출처·코스) 정밀 분석 중...</div>
    `;
    thread.appendChild(typingDiv);
    thread.scrollTop = thread.scrollHeight;

    if (sendBtn) sendBtn.disabled = true;

    let responded = false;
    const safeCallback = (replyObj) => {
        if (responded) return;
        responded = true;

        if (sendBtn) sendBtn.disabled = false;
        const indicator = document.getElementById('ai-typing-indicator');
        if (indicator) indicator.remove();

        const aiMsgDiv = document.createElement('div');
        aiMsgDiv.className = 'chat-msg ai-msg';
        aiMsgDiv.innerHTML = `
            <div class="chat-avatar">🤖</div>
            <div class="chat-bubble">
                ${replyObj.html}
            </div>
        `;
        thread.appendChild(aiMsgDiv);
        thread.scrollTop = thread.scrollHeight;
    };

    // 8-second safety fallback timeout so questions NEVER get stuck
    setTimeout(() => {
        if (!responded) {
            console.warn('Sommelier query timeout, triggering fallback engine...');
            processSommelierFallbackOnly(text, safeCallback);
        }
    }, 8000);

    try {
        processSommelierQuery(text, safeCallback);
    } catch (e) {
        console.error('Error in processSommelierQuery:', e);
        processSommelierFallbackOnly(text, safeCallback);
    }
}

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function parseKoreanNumber(text) {
    if (!text) return null;
    const numMatch = text.match(/([0-9]+)/);
    if (numMatch) return parseInt(numMatch[1], 10);

    if (text.includes('한') || text.includes('하나')) return 1;
    if (text.includes('두') || text.includes('둘')) return 2;
    if (text.includes('세') || text.includes('셋')) return 3;
    if (text.includes('네') || text.includes('넷')) return 4;
    if (text.includes('다섯')) return 5;
    return null;
}

// ─────────────────────────────────────────────────────────────────
// LOCATION DICTIONARY: Covers all major Korean cities, districts,
// and subway stations. Longer/more-specific entries come first
// so they match before shorter overlapping names.
// Format: { key: string to search in query, display: clean display name for kakao search }
// ─────────────────────────────────────────────────────────────────
const KOREA_LOCATIONS = [
    // ─── 전국 광역시 / 도시 ───
    { key: '춘천', display: '춘천' },
    { key: '강릉', display: '강릉' },
    { key: '속초', display: '속초' },
    { key: '원주', display: '원주' },
    { key: '수원', display: '수원' },
    { key: '성남', display: '성남' },
    { key: '용인', display: '용인' },
    { key: '안양', display: '안양' },
    { key: '안산', display: '안산' },
    { key: '고양', display: '고양' },
    { key: '부천', display: '부천' },
    { key: '의정부', display: '의정부' },
    { key: '평택', display: '평택' },
    { key: '화성', display: '화성' },
    { key: '이천', display: '이천' },
    { key: '파주', display: '파주' },
    { key: '부산', display: '부산' },
    { key: '해운대', display: '해운대' },
    { key: '서면', display: '부산 서면' },
    { key: '남포동', display: '부산 남포동' },
    { key: '광안리', display: '광안리' },
    { key: '대구', display: '대구' },
    { key: '동성로', display: '동성로' },
    { key: '대전', display: '대전' },
    { key: '둔산동', display: '둔산동' },
    { key: '광주', display: '광주' },
    { key: '상무지구', display: '상무지구' },
    { key: '울산', display: '울산' },
    { key: '인천', display: '인천' },
    { key: '송도', display: '송도' },
    { key: '제주', display: '제주' },
    { key: '전주', display: '전주' },
    { key: '군산', display: '군산' },
    { key: '목포', display: '목포' },
    { key: '여수', display: '여수' },
    { key: '창원', display: '창원' },
    { key: '진주', display: '진주' },
    { key: '천안', display: '천안' },
    { key: '청주', display: '청주' },
    { key: '세종', display: '세종' },
    { key: '포항', display: '포항' },
    { key: '경주', display: '경주' },
    { key: '안동', display: '안동' },
    // ─── 서울 구 / 주요 동네 ───
    { key: '영등포구', display: '영등포' },
    { key: '영등포역', display: '영등포' },
    { key: '영등포', display: '영등포' },
    { key: '마포구', display: '마포' },
    { key: '용산구', display: '용산' },
    { key: '강서구', display: '강서' },
    { key: '서대문구', display: '서대문' },
    { key: '강남구', display: '강남' },
    { key: '서초구', display: '서초' },
    { key: '송파구', display: '송파' },
    { key: '강동구', display: '강동' },
    { key: '관악구', display: '관악' },
    { key: '동작구', display: '동작' },
    { key: '노원구', display: '노원' },
    { key: '성북구', display: '성북' },
    { key: '은평구', display: '은평' },
    { key: '광진구', display: '광진' },
    { key: '중랑구', display: '중랑' },
    { key: '도봉구', display: '도봉' },
    { key: '강북구', display: '강북' },
    { key: '구로구', display: '구로' },
    { key: '금천구', display: '금천' },
    { key: '동대문구', display: '동대문' },
    { key: '종로구', display: '종로' },
    { key: '중구', display: '중구' },
    // ─── 서울 주요 역 & 지역 ───
    { key: '홍대입구역', display: '홍대' },
    { key: '홍대입구', display: '홍대' },
    { key: '홍대', display: '홍대' },
    { key: '강남역', display: '강남역' },
    { key: '강남', display: '강남' },
    { key: '신촌역', display: '신촌' },
    { key: '신촌', display: '신촌' },
    { key: '이태원역', display: '이태원' },
    { key: '이태원', display: '이태원' },
    { key: '합정역', display: '합정' },
    { key: '합정', display: '합정' },
    { key: '연남동', display: '연남동' },
    { key: '연남', display: '연남' },
    { key: '여의도역', display: '여의도' },
    { key: '여의도', display: '여의도' },
    { key: '종로', display: '종로' },
    { key: '을지로', display: '을지로' },
    { key: '종각역', display: '종각' },
    { key: '명동역', display: '명동' },
    { key: '명동', display: '명동' },
    { key: '동대문역', display: '동대문' },
    { key: '건대입구역', display: '건대입구' },
    { key: '건대', display: '건대' },
    { key: '성수역', display: '성수' },
    { key: '성수', display: '성수' },
    { key: '왕십리역', display: '왕십리' },
    { key: '왕십리', display: '왕십리' },
    { key: '신림역', display: '신림' },
    { key: '신림', display: '신림' },
    { key: '사당역', display: '사당' },
    { key: '사당', display: '사당' },
    { key: '역삼역', display: '역삼' },
    { key: '역삼', display: '역삼' },
    { key: '선릉역', display: '선릉' },
    { key: '선릉', display: '선릉' },
    { key: '삼성역', display: '삼성' },
    { key: '잠실역', display: '잠실' },
    { key: '잠실', display: '잠실' },
    { key: '마곡역', display: '마곡' },
    { key: '마곡', display: '마곡' },
    { key: '노량진역', display: '노량진' },
    { key: '노량진', display: '노량진' },
    { key: '서울대입구역', display: '서울대입구' },
    { key: '봉천', display: '봉천' },
    { key: '상수역', display: '상수' },
    { key: '공덕역', display: '공덕' },
    { key: '공덕', display: '공덕' },
    { key: '애오개', display: '애오개' },
    { key: '서울역', display: '서울역' },
    { key: '남대문', display: '남대문' },
    { key: '한남동', display: '한남동' },
    { key: '한남', display: '한남' },
    { key: '압구정', display: '압구정' },
    { key: '청담', display: '청담' },
    { key: '방배', display: '방배' },
    { key: '서래마을', display: '서래마을' },
    { key: '반포', display: '반포' },
    { key: '공항동', display: '공항동' }
];

// ─────────────────────────────────────────────────────────────────
// CATEGORY DICTIONARY: More-specific categories come FIRST.
// Each entry: { key, display, desc } where desc is a template for
// generating a fallback card description.
// ─────────────────────────────────────────────────────────────────
const FOOD_CATEGORIES = [
    { key: '닭갈비', display: '닭갈비', desc: (loc) => `${loc}에서 진한 양념과 함께 불판에 지글지글 볶아내는 닭갈비집으로, 쫄깃한 닭고기와 떡·채소가 어우러진 깊은 맛이 일품입니다.` },
    { key: '막국수', display: '막국수', desc: (loc) => `${loc}에서 새콤달콤 양념과 고소한 참기름이 어우러진 강원도식 막국수를 즐길 수 있는 곳입니다.` },
    { key: '닭볶음탕', display: '닭볶음탕', desc: (loc) => `${loc}에서 매콤달콤한 양념으로 끓여내는 닭볶음탕 전문점으로, 국물에 밥을 비벼 먹는 맛이 특히 훌륭합니다.` },
    { key: '삼겹살', display: '삼겹살', desc: (loc) => `${loc}에서 두툼하고 신선한 삼겹살을 직화로 구워 먹을 수 있는 고기집입니다. 쌈과 함께 즐기면 더욱 풍성한 식사가 됩니다.` },
    { key: '소고기', display: '소고기', desc: (loc) => `${loc}에서 질 좋은 소고기를 즐길 수 있는 곳입니다. 마블링이 살아있는 부드러운 고기 맛이 인상적입니다.` },
    { key: '한우', display: '한우', desc: (loc) => `${loc}에서 품질 좋은 한우를 합리적인 가격에 즐길 수 있는 한우 전문점입니다.` },
    { key: '갈비', display: '갈비', desc: (loc) => `${loc}에서 진하게 양념된 갈비를 즐길 수 있는 곳입니다. 뼈에서 발라낸 부드러운 고기 맛이 특유의 풍미를 자랑합니다.` },
    { key: '냉면', display: '냉면', desc: (loc) => `${loc}에서 시원하고 탄력 있는 면발과 맑은 육수가 조화로운 냉면을 맛볼 수 있습니다.` },
    { key: '설렁탕', display: '설렁탕', desc: (loc) => `${loc}에서 진한 사골 국물로 끓여낸 설렁탕 전문점입니다. 구수하고 깊은 맛에 소면이나 밥을 넣어 즐길 수 있습니다.` },
    { key: '곰탕', display: '곰탕', desc: (loc) => `${loc}에서 뽀얀 사골 국물의 진한 곰탕을 즐길 수 있는 곳입니다.` },
    { key: '해장국', display: '해장국', desc: (loc) => `${loc}에서 뼈해장국이나 선지해장국 등 속을 확실히 달래주는 해장국 전문점입니다.` },
    { key: '순대국', display: '순대국', desc: (loc) => `${loc}에서 푸짐한 순대와 국물이 일품인 순대국밥 전문점입니다.` },
    { key: '육개장', display: '육개장', desc: (loc) => `${loc}에서 얼큰하고 진한 육개장을 맛볼 수 있는 곳입니다.` },
    { key: '돼지국밥', display: '돼지국밥', desc: (loc) => `${loc} 스타일의 구수하고 진한 돼지국밥 전문점입니다. 수육과 국밥을 함께 즐기는 것을 추천합니다.` },
    { key: '떡볶이', display: '떡볶이', desc: (loc) => `${loc}에서 즐길 수 있는 떡볶이 전문점입니다. 쫄깃한 떡과 매콤달콤한 양념이 조화롭습니다.` },
    { key: '칼국수', display: '칼국수', desc: (loc) => `${loc}에서 면과 국물이 진한 칼국수 전문점입니다. 구수한 육수와 탱글한 면발이 특징입니다.` },
    { key: '국수', display: '국수', desc: (loc) => `${loc}에서 시원하거나 뜨거운 국수를 즐길 수 있는 곳입니다.` },
    { key: '초밥', display: '초밥', desc: (loc) => `${loc}에서 신선한 회와 함께 섬세하게 빚은 초밥을 즐길 수 있는 일식집입니다.` },
    { key: '스시', display: '스시', desc: (loc) => `${loc}에서 정통 스시를 즐길 수 있는 일식 레스토랑입니다.` },
    { key: '라멘', display: '라멘', desc: (loc) => `${loc}에서 풍부한 육수의 깊은 맛을 자랑하는 라멘 전문점입니다.` },
    { key: '우동', display: '우동', desc: (loc) => `${loc}에서 쫄깃한 면발과 진한 국물의 우동을 즐길 수 있습니다.` },
    { key: '돈까스', display: '돈까스', desc: (loc) => `${loc}에서 바삭하고 두툼한 돈까스를 즐길 수 있는 곳입니다.` },
    { key: '파스타', display: '파스타', desc: (loc) => `${loc}에서 다양한 종류의 파스타를 즐길 수 있는 이탈리안 레스토랑입니다.` },
    { key: '피자', display: '피자', desc: (loc) => `${loc}에서 화덕이나 오븐에 구운 맛있는 피자를 즐길 수 있는 곳입니다.` },
    { key: '스테이크', display: '스테이크', desc: (loc) => `${loc}에서 선택한 굽기로 즐기는 두툼하고 풍미 있는 스테이크 레스토랑입니다.` },
    { key: '버거', display: '버거', desc: (loc) => `${loc}에서 수제 패티와 신선한 재료로 만든 프리미엄 버거를 맛볼 수 있습니다.` },
    { key: '치킨', display: '치킨', desc: (loc) => `${loc}에서 바삭하게 튀겨낸 치킨을 맥주와 함께 즐길 수 있는 곳입니다.` },
    { key: '중국집', display: '중국집', desc: (loc) => `${loc}에서 자장면, 짬뽕 등 정통 중국 요리를 즐길 수 있는 중국집입니다.` },
    { key: '짬뽕', display: '짬뽕', desc: (loc) => `${loc}에서 얼큰하고 진한 짬뽕 국물로 유명한 중국집입니다.` },
    { key: '마라탕', display: '마라탕', desc: (loc) => `${loc}에서 얼얼하고 매콤한 마라 소스의 마라탕을 즐길 수 있습니다.` },
    { key: '이자카야', display: '이자카야', desc: (loc) => `${loc}에서 다양한 일본식 안주와 주류를 즐길 수 있는 이자카야입니다.` },
    { key: '포장마차', display: '포장마차', desc: (loc) => `${loc}에서 시원한 바람과 함께 포장마차 감성으로 안주를 즐길 수 있는 곳입니다.` },
    { key: '카페', display: '카페', desc: (loc) => `${loc}에서 향긋한 커피와 함께 여유로운 시간을 보낼 수 있는 분위기 좋은 카페입니다.` },
    { key: '디저트', display: '디저트', desc: (loc) => `${loc}에서 달콤한 디저트와 음료를 즐길 수 있는 감각적인 카페 및 디저트샵입니다.` },
    { key: '술집', display: '술집', desc: (loc) => `${loc}에서 다양한 주류와 안주를 즐길 수 있는 분위기 좋은 술집입니다.` },
    { key: '맥주', display: '맥주', desc: (loc) => `${loc}에서 다양한 종류의 생맥주와 수제맥주를 즐길 수 있는 비어 펍입니다.` },
    { key: '와인', display: '와인', desc: (loc) => `${loc}에서 엄선된 와인 셀렉션과 함께 우아한 저녁을 보낼 수 있는 와인바입니다.` },
    { key: '소주', display: '소주', desc: (loc) => `${loc}에서 소주와 함께 즐기는 한국식 안주 전문 술집입니다.` },
    { key: '막걸리', display: '막걸리', desc: (loc) => `${loc}에서 부드러운 막걸리와 전 등 전통 안주를 즐길 수 있는 정겨운 술집입니다.` },
    { key: '고기집', display: '고기집', desc: (loc) => `${loc}에서 신선한 고기를 직화 구이로 즐길 수 있는 고기 전문점입니다.` },
    { key: '고기', display: '고기집', desc: (loc) => `${loc}에서 신선한 고기를 직화 구이로 즐길 수 있는 고기 전문점입니다.` },
    { key: '한식', display: '한식', desc: (loc) => `${loc}에서 정갈하게 차려낸 한식 한 끼를 즐길 수 있는 정통 한식당입니다.` },
    { key: '일식', display: '일식', desc: (loc) => `${loc}에서 신선한 재료로 만든 다양한 일식 요리를 즐길 수 있습니다.` },
    { key: '양식', display: '양식', desc: (loc) => `${loc}에서 세련된 분위기의 양식 레스토랑으로 다양한 서양 요리를 즐길 수 있습니다.` },
    { key: '중식', display: '중식', desc: (loc) => `${loc}에서 정통 중국 요리를 즐길 수 있는 중식 레스토랑입니다.` },
    { key: '안주', display: '안주', desc: (loc) => `${loc}에서 술자리에 딱 맞는 다양하고 맛있는 안주를 즐길 수 있는 곳입니다.` },
    { key: '국물', display: '국물요리', desc: (loc) => `${loc}에서 시원하거나 뜨끈한 국물 요리로 속을 든든하게 채울 수 있는 곳입니다.` }
];

function extractLocationAndCategory(query) {
    // 조사 및 불필요한 서술어 제거 전처리
    let qClean = query
        .replace(/(에서|근처|주변|인근|앞|뒤|옆|쪽|방면|일대)\b/g, ' ')
        .replace(/([가-힣]+)(에서|근처|주변|인근|앞에|으로|로가)/g, '$1 ')
        .trim();

    const qLower = qClean.toLowerCase();
    let targetLoc = null;
    let targetLocDisplay = null;

    // 1. Predefined Location list
    for (const loc of KOREA_LOCATIONS) {
        if (qLower.includes(loc.key.toLowerCase())) {
            targetLoc = loc.key;
            targetLocDisplay = loc.display;
            break;
        }
    }

    // 2. Comprehensive POI & Landmark Pattern Matching
    // [역/교통, 대학/학교, 병원, 문화/쇼핑, 체육/공원/온천, 관광/시장, 행정구역]
    if (!targetLocDisplay) {
        const poiRegex = /([가-힣a-zA-Z0-9]{2,15})(역|터미널|공항|환승센터|선착장|대학교|대학|캠퍼스|초등학교|중학교|고등학교|초|중|고|병원|의료원|스타필드|백화점|아울렛|몰|코엑스|벡스코|킨텍스|예술의전당|미술관|박물관|아트센터|문화회관|영화관|롯데월드|에버랜드|타워|경기장|운동장|체육관|스타디움|공원|유원지|리조트|호텔|골프장|캠핑장|워터파크|스파|온천|해수욕장|해변|포구|항|계곡|폭포|호수|산|봉|섬|도|단지|지구|거리|골목|시장|특별시|광역시|시|군|구|동|읍|면|리|가|로|길)/;
        const match = qClean.match(poiRegex);
        if (match) {
            targetLoc = match[0];
            targetLocDisplay = match[0];
        }
    }

    // 3. Dynamic Residual Noun Extractor (Stopwords removal)
    // E.g. "온양온천 1차 고기 2차 카페 각각 두곳씩 알려줘" -> "온양온천"
    if (!targetLocDisplay) {
        let cleaned = qClean
            .replace(/[0-9두세네다섯여섯일이삼사오육칠팔구십]+(곳|개|선|군데)/g, '')
            .replace(/[1-9]차/g, '')
            .replace(/각각|모두|전부|근처|주변|인근|실시간|카카오|내 맛집|5수저/g, '')
            .replace(/추천해줘|추천|알려줘|찾아줘|골라줘|코스|짜줘|부탁해|해줘|어때|가볼만한곳|맛집/g, '');
        
        for (const cat of FOOD_CATEGORIES) {
            cleaned = cleaned.replace(new RegExp(cat.key, 'gi'), '');
        }
        cleaned = cleaned.replace(/맛집|식당|밥집|술집|카페|디저트|요리|음식/g, '').trim();

        const words = cleaned.split(/\s+/).filter(w => w.length >= 2);
        if (words.length > 0) {
            targetLoc = words[0];
            targetLocDisplay = words[0];
        }
    }

    let mainCat = null;
    let mainCatDisplay = null;
    let catDescFn = null;

    // Category: more-specific first
    for (const cat of FOOD_CATEGORIES) {
        if (qLower.includes(cat.key.toLowerCase())) {
            mainCat = cat.key;
            mainCatDisplay = cat.display;
            catDescFn = cat.desc;
            break;
        }
    }

    return { targetLoc, targetLocDisplay, mainCat, mainCatDisplay, catDescFn };
}

// ─── Multi-turn Conversation Memory Context ───
window.sommelierContext = {
    lastLocation: '',
    lastPlaces: [],          // Place names previously recommended
    lastQuery: '',
    history: []
};

function processSommelierQuery(query, callback) {
    const q = query.toLowerCase();
    const DEFAULT_GEMINI_KEY = atob('QVEuQWI4Uk42S3lSZElqVjBoaHRBUVhkTThYUVBvSlMyZHpBblExUjdwRjFsejZ4amsyUlE=');
    const geminiKey = localStorage.getItem('spoonmap_gemini_key') || DEFAULT_GEMINI_KEY;

    // ─── Multi-turn Intent Detection ───
    const isExcludeReRec = /여기 말고|다른 곳|다른곳|다른 데|다른데|다시 추천|바꿔|더 없어|더 보여|제외|말고|새로운/i.test(query);
    const isStep2Only = /2차만|술집만|카페만|디저트만/i.test(query);
    const isStep1Only = /1차만|밥집만|식당만|고기집만|양식만/i.test(query);
    const isMenuTips = /메뉴|뭐 시켜|대표메뉴|시그니처|꿀팁|조합|주문/i.test(query);
    const isWalkingRoute = /도보|걸어서|동선|거리|근처|역에서|가까운/i.test(query);
    const isFeatures = /주차|발렛|룸|개별룸|방|예약|캐치테이블|웨이팅|대기/i.test(query);
    const isBudget = /예산|가성비|인당|만원|가격|고급|오마카세|파인다이닝/i.test(query);

    // ─── Number & Step Detection ───
    const has1cha = query.includes('1차');
    const has2cha = query.includes('2차');
    const isMultiCourse = has1cha && has2cha;

    // ─── 1차/2차 각각의 숫자 추출 ───
    function extractStepCount(text, stepTag) {
        const afterStep = text.split(stepTag)[1] || '';
        const nextStep = afterStep.split(/[12]차/)[0];
        const numMatch = nextStep.match(/([두세네다섯여섯일이삼사오육칠팔구십1-9]+)\s*(곳|개)/i);
        if (numMatch) return parseKoreanNumber(numMatch[1]) || null;
        return null;
    }

    const step1Req = has1cha ? (extractStepCount(query, '1차') || 2) : null;
    const step2Req = has2cha ? (extractStepCount(query, '2차') || 2) : null;

    let totalReq;
    if (isMultiCourse) {
        totalReq = (step1Req || 2) + (step2Req || 2);
    } else {
        const mTotal = query.match(/([두세네다섯여섯일이삼사오육칠팔구십1-9]+)\s*(곳|개|선)/i);
        totalReq = mTotal ? (parseKoreanNumber(mTotal[1]) || 2) : 2;
    }

    // ─── Location & Category Extraction (With Dynamic Extractor & Memory) ───
    let { targetLoc, targetLocDisplay, mainCat, mainCatDisplay, catDescFn } = extractLocationAndCategory(query);

    // Inherit previous location if user is asking a follow-up
    if (!targetLocDisplay && window.sommelierContext.lastLocation) {
        targetLocDisplay = window.sommelierContext.lastLocation;
        console.log(`[Spoonmap Multi-turn] Inheriting previous location: ${targetLocDisplay}`);
    }

    const locSearch = targetLocDisplay || '';
    const locDisplay = targetLocDisplay || '요청하신 지역';

    // Update Context Location
    if (targetLocDisplay) {
        window.sommelierContext.lastLocation = targetLocDisplay;
    }

    // ─── 1차/2차별 카테고리 추출 ───
    let cat1Display = null, cat2Display = null;
    if (has1cha) {
        const part1 = (query.split('1차')[1] || '').split(/[12]차/)[0];
        for (const cat of FOOD_CATEGORIES) {
            if (part1.toLowerCase().includes(cat.key.toLowerCase())) { cat1Display = cat.display; break; }
        }
    }
    if (has2cha) {
        const part2 = (query.split('2차')[1] || '').split(/[12]차/)[0];
        for (const cat of FOOD_CATEGORIES) {
            if (part2.toLowerCase().includes(cat.key.toLowerCase())) { cat2Display = cat.display; break; }
        }
    }

    // ─── Source Preference ───
    const hasKakaoKeywords = q.includes('카카오') || q.includes('실시간') || q.includes('안가본') || q.includes('새로운');
    const hasLocalKeywords = q.includes('내 맛집') || q.includes('내가 간') || q.includes('단골') || q.includes('저장된') || q.includes('내 데이터') || q.includes('또간집') || q.includes('5수저');
    
    // Auth Check for Private Data Queries
    if (!isOwnerUser() && hasLocalKeywords) {
        callback({
            html: `<div class="sommelier-intro-p">
                🔒 <b>나만의 또간집 및 저장 맛집 연동 추천</b>은 카카오 로그인 후 이용하실 수 있습니다.<br><br>
                상단 헤더의 <b>[💬 로그인]</b> 버튼을 누르시면 회원님의 1,100여 개 미식 데이터와 연동된 맞춤 추천을 바로 받아보실 수 있습니다! 🍷✨
            </div>`
        });
        return;
    }

    let sourcePref = 'both';
    if (!isOwnerUser()) {
        sourcePref = 'kakao_only';
    } else if (hasKakaoKeywords && !hasLocalKeywords) {
        sourcePref = 'kakao_only';
    } else if (hasLocalKeywords && !hasKakaoKeywords) {
        sourcePref = 'local_only';
    }

    // ─── Gemini LLM Logic ───
    if (geminiKey) {
        // Robust search keywords with mandatory location prefix
        const baseLoc = locSearch || '전국';
        const kw1_primary = `${baseLoc} ${cat1Display || (isMultiCourse ? '맛집' : (mainCatDisplay || '맛집'))}`.trim();
        const kw1_fallback = `${baseLoc} ${mainCatDisplay || '맛집'}`.trim();
        
        const kw2_primary = `${baseLoc} ${cat2Display || '카페'}`.trim();
        const kw2_fallback = `${baseLoc} 디저트 카페`.trim();
        
        const kwSingle_primary = `${baseLoc} ${mainCatDisplay || '맛집'}`.trim();
        const kwSingle_fallback = `${baseLoc} 맛집`.trim();

        const localCandidates = (isOwnerUser() && targetLocDisplay && typeof restaurantData !== 'undefined')
            ? restaurantData.filter(item => {
                const addr = (item.location_large || '') + (item.address || '');
                return addr.includes(targetLocDisplay) || (locSearch && addr.includes(locSearch));
              }).slice(0, 8)
            : [];

        function queryGemini(kakaoPlaces1 = [], kakaoPlaces2 = []) {
            const allCollectedPlaces = [...kakaoPlaces1, ...kakaoPlaces2];

            // If absolutely 0 places found on Kakao (e.g. invalid query/typo), don't hallucinate fake restaurants!
            if (allCollectedPlaces.length === 0 && localCandidates.length === 0) {
                callback({
                    html: `<div class="sommelier-intro-p">
                        죄송합니다. <b>${locDisplay}</b> 지역에서 실시간으로 등록된 실제 매장 데이터를 찾지 못했습니다. 😢<br><br>
                        💡 <b>검색 팁:</b> <i>"${locDisplay} 삼겹살 3곳"</i> 또는 <i>"${locDisplay} 유성구 맛집 2곳"</i>처럼 구체적인 지역과 메뉴로 다시 질문해 보세요!
                    </div>`
                });
                return;
            }

            const countInstruction = isMultiCourse
                ? `- 1차 요청: ${step1Req}곳 (카테고리: ${cat1Display || '맛집'})
- 2차 요청: ${step2Req}곳 (카테고리: ${cat2Display || '술집/카페'})
- 반드시 1차 ${step1Req}곳 + 2차 ${step2Req}곳 = 총 ${totalReq}곳을 모두 추천할 것`
                : `- 요청 개수: ${totalReq}곳 (카테고리: ${mainCatDisplay || '맛집'})`;

            const kakaoData1Str = JSON.stringify(kakaoPlaces1.slice(0, 8).map(p => ({ 이름: p.place_name, 주소: p.road_address_name || p.address_name, 카테고리: p.category_name, url: p.place_url })));
            const kakaoData2Str = isMultiCourse
                ? JSON.stringify(kakaoPlaces2.slice(0, 8).map(p => ({ 이름: p.place_name, 주소: p.road_address_name || p.address_name, 카테고리: p.category_name, url: p.place_url })))
                : '[]';

            // Build Multi-turn Instructions
            const previousPlacesList = window.sommelierContext.lastPlaces || [];
            let followUpPrompt = '';

            if (isExcludeReRec && previousPlacesList.length > 0) {
                followUpPrompt += `\n⚠️ [연속 대화 - 재추천 요구] 사용자가 직전 추천 장소가 마음에 들지 않아 다른 후보를 요청했습니다. 직전 추천 목록 [${previousPlacesList.join(', ')}]은 이미 보았으므로 완전히 제외하고 새로운 장소들로 추천하세요.`;
            }
            if (isStep2Only) {
                followUpPrompt += `\n⚠️ [연속 대화 - 2차 부분 교체] 사용자가 2차(술집/카페) 장소만 변경을 요청했습니다. 2차 추천 장소들을 새로운 곳으로 집중 재선별하세요.`;
            }
            if (isStep1Only) {
                followUpPrompt += `\n⚠️ [연속 대화 - 1차 부분 교체] 사용자가 1차 식당만 변경을 요청했습니다. 1차 추천 장소를 새로운 곳으로 집중 재선별하세요.`;
            }
            if (isMenuTips) {
                followUpPrompt += `\n⚠️ [연속 대화 - 대표 메뉴 & 주문 꿀팁] 사용자가 메뉴 조합이나 시그니처 메뉴 꿀팁을 질문했습니다. 각 식당의 시그니처 대표 메뉴와 2인 주문 꿀팁을 설명란에 상세히 작성하세요.`;
            }
            if (isWalkingRoute) {
                followUpPrompt += `\n⚠️ [연속 대화 - 도보 동선/거리 연계] 식당 간의 도보 이동 시간(예: 도보 5분), 지하철역 접근성을 설명에 구체적으로 명시하세요.`;
            }
            if (isFeatures) {
                followUpPrompt += `\n⚠️ [연속 대화 - 세부 조건] 주차 가능 여부, 개별 룸, 예약 가능성(네이버/캐치테이블), 웨이팅 상황을 고려하여 설명하세요.`;
            }
            if (isBudget) {
                followUpPrompt += `\n⚠️ [연속 대화 - 예산/가격대] 사용자가 요청한 가성비/가격대 수준을 엄격히 맞춰 선별하세요.`;
            }

            const promptContext = `당신은 대한민국 전국 100% 실존 맛집을 안내하는 Spoonmap AI 최고급 미식 소믈리에입니다.

사용자 질문: "${query}"

추출된 정보:
- 목표 지역: ${locDisplay} (이 지역 결과만 추천)
${countInstruction}
${followUpPrompt}

[직전 대화에서 추천했던 장소 목록]
${previousPlacesList.length > 0 ? previousPlacesList.join(', ') : '없음 (첫 대화)'}

제공된 실제 실시간 데이터 (100% 신뢰 데이터):
[카카오 지도 실시간 실제 매장 데이터 - ${isMultiCourse ? '1차' : ''} ${kw1_primary} 기준]
${kakaoData1Str}
${isMultiCourse ? `
[카카오 지도 실시간 실제 매장 데이터 - 2차 ${kw2_primary} 기준]
${kakaoData2Str}` : ''}

[내 방문 맛집 데이터 (검증된 단골 기록)]
${JSON.stringify(localCandidates.map(c => ({ 이름: c.name, 주소: c.location_large, 카테고리: c.category, 방문횟수: c.visit_count })))}

⚠️ [신뢰도 100% 엄격 출력 규칙 - 위반 절대 금지]:
1. ❌ 가상의 상호명(예: "대전 봉명동 고깃집", "OO일대")이나 모호한 가짜 주소를 절대 지어내지 마세요 (Hallucination 엄격 금지).
2. ✅ 반드시 위 [카카오 지도 실시간 실제 매장 데이터] 및 [내 방문 맛집 데이터]에 존재하는 '실제 상호명', '실제 도로명 주소', '실제 카카오맵 URL'을 100% 그대로 카드에 복사하여 출력하세요.
3. 마크다운 기호(**, ##, #, *) 절대 사용 금지 (이모티콘 사용 가능)
4. 각 식당 설명: 실제 상호명의 대표 시그니처 메뉴, 실제 방문자 리뷰 핵심 호평 포인트, 분위기, 모임/회식 적합성을 사실에 근거하여 2-3문장으로 전문성 있게 작성할 것.
5. 반드시 아래 HTML 구조로만 출력:

<div class="sommelier-intro-p">따뜻하고 친근한 소개 문구 (2-3문장, 사용자의 요청 조건 완벽 반영 언급)</div>

각 장소마다 아래 카드 구조 사용:
<div class="rec-card-standard">
    <span class="rec-tag-pill">추천 번호 (카테고리 또는 1차/2차)</span>
    <h4 class="rec-place-title">실제 매장 이름</h4>
    <div class="rec-place-meta">📍 <b>위치:</b> 실제 도로명 주소</div>
    <p class="rec-place-desc">대표 메뉴 맛, 실제 방문자 리뷰 핵심 포인트, 분위기, 추천 이유를 2-3문장으로 상세히 설명</p>
    <a href="실제카카오맵URL" target="_blank" class="rec-kakao-pill-btn">👈 카카오맵에서 보기</a>
</div>`;

            const modelsToTry = [
                'gemini-3.5-flash-lite',
                'gemini-3.1-flash-lite',
                'gemini-flash-lite-latest',
                'gemini-flash-latest'
            ];

            function attemptModel(idx) {
                if (idx >= modelsToTry.length) {
                    console.warn('[Spoonmap] All Gemini models failed. Falling back to local parser.');
                    processSommelierFallbackOnly(query, callback);
                    return;
                }
                const model = modelsToTry[idx];
                console.log(`[Spoonmap] Trying Gemini model: ${model}`);
                fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: promptContext }] }],
                        generationConfig: { temperature: 0.5, maxOutputTokens: 2048 }
                    })
                })
                .then(res => {
                    if (!res.ok) {
                        return res.json().then(errData => {
                            console.warn(`[Spoonmap] Model ${model} HTTP ${res.status}:`, errData);
                            attemptModel(idx + 1);
                        }).catch(() => {
                            console.warn(`[Spoonmap] Model ${model} HTTP ${res.status}: no JSON error body`);
                            attemptModel(idx + 1);
                        });
                    }
                    return res.json();
                })
                .then(data => {
                    if (!data) return;
                    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                        let textRes = data.candidates[0].content.parts[0].text;
                        textRes = cleanMarkdownText(textRes);
                        textRes = injectNaverButtons(textRes);
                        console.log(`[Spoonmap] Success with model: ${model}`);

                        // Update Context Memory: Extract recommended place names
                        const titleMatches = textRes.match(/<h4 class="rec-place-title">([\s\S]*?)<\/h4>/g);
                        if (titleMatches) {
                            const newPlaces = titleMatches.map(m => m.replace(/<[^>]+>/g, '').trim());
                            if (isExcludeReRec) {
                                window.sommelierContext.lastPlaces = newPlaces;
                            } else {
                                window.sommelierContext.lastPlaces = Array.from(new Set([...window.sommelierContext.lastPlaces, ...newPlaces]));
                            }
                        }

                        callback({ html: textRes });
                    } else {
                        console.warn(`[Spoonmap] Model ${model} returned no candidates:`, data);
                        attemptModel(idx + 1);
                    }
                })
                .catch(err => {
                    console.warn(`[Spoonmap] Model ${model} fetch error:`, err);
                    attemptModel(idx + 1);
                });
            }

            attemptModel(0);
        }

        // Multi-Query Kakao Search Engine: Tries primary keyword first, falls back if 0 results
        if (typeof kakao !== 'undefined' && kakao.maps && kakao.maps.services) {
            const ps = new kakao.maps.services.Places();

            function searchKakaoSmart(keywordPrimary, keywordFallback) {
                return new Promise(resolve => {
                    ps.keywordSearch(keywordPrimary, (data, status) => {
                        if (status === kakao.maps.services.Status.OK && data && data.length > 0) {
                            resolve(data);
                        } else if (keywordFallback && keywordFallback !== keywordPrimary) {
                            ps.keywordSearch(keywordFallback, (fbData, fbStatus) => {
                                if (fbStatus === kakao.maps.services.Status.OK && fbData && fbData.length > 0) {
                                    resolve(fbData);
                                } else {
                                    resolve([]);
                                }
                            });
                        } else {
                            resolve([]);
                        }
                    });
                });
            }

            if (isMultiCourse) {
                Promise.all([
                    searchKakaoSmart(kw1_primary, kw1_fallback),
                    searchKakaoSmart(kw2_primary, kw2_fallback)
                ]).then(([p1, p2]) => {
                    console.log(`[Spoonmap] Smart Kakao Multi-Course: 1차 ${p1.length}곳, 2차 ${p2.length}곳 수집 완료`);
                    queryGemini(p1, p2);
                });
            } else {
                searchKakaoSmart(kwSingle_primary, kwSingle_fallback).then(places => {
                    console.log(`[Spoonmap] Smart Kakao Single: ${places.length}곳 수집 완료`);
                    queryGemini(places, []);
                });
            }
        } else {
            queryGemini([], []);
        }
        return;
    }

    // No Gemini key → use local fallback directly
    processSommelierFallbackOnly(query, callback);
}

function processSommelierFallbackOnly(query, callback) {
    const q = query.toLowerCase();

    const has1cha = query.includes('1차');
    const has2cha = query.includes('2차');
    const isMultiCourse = has1cha && has2cha;

    const m1 = query.match(/1차\s*([가-힣a-zA-Z0-9]+)?\s*(곳|개)?/i);
    const m2 = query.match(/2차\s*([가-힣a-zA-Z0-9]+)?\s*(곳|개)?/i);
    const mTotal = query.match(/([두세네다섯여섯일이삼사오육칠팔구십0-9]+)\s*(곳|개|선)/i);

    const step1Req = (has1cha && m1) ? (parseKoreanNumber(m1[1]) || 1) : (has1cha ? 1 : null);
    const step2Req = (has2cha && m2) ? (parseKoreanNumber(m2[1]) || 1) : (has2cha ? 1 : null);
    const totalReq = mTotal ? (parseKoreanNumber(mTotal[1]) || 2) : 2;

    // ─── Mood Detection ───
    let moodText = '';
    if (q.includes('비 오는 날') || q.includes('비오는날') || q.includes('비오는')) moodText = '비 오는 날 감성에 어울리는 ';
    else if (q.includes('데이트')) moodText = '로맨틱한 데이트 코스로 완벽한 ';
    else if (q.includes('회식') || q.includes('모임')) moodText = '즐거운 모임과 회식에 적합한 ';

    // ─── Use shared extraction function ───
    let { targetLocDisplay, mainCat, mainCatDisplay, catDescFn } = extractLocationAndCategory(query);

    // 사전에 없는 지역도 커버: raw 패턴 추출
    if (!targetLocDisplay) {
        const rawMatch = query.match(/([가-힣]{1,5})(역|시|군)\b/);
        if (rawMatch) targetLocDisplay = rawMatch[1];
    }

    const locDisplay = targetLocDisplay || '주변';

    // ─── Category detection for 1차/2차 parts ───
    let cat1Display = null;
    let cat1DescFn = null;
    let cat2Display = null;
    let cat2DescFn = null;

    if (has1cha) {
        const part1 = query.split('1차')[1] || '';
        for (const cat of FOOD_CATEGORIES) {
            if (part1.toLowerCase().includes(cat.key.toLowerCase())) {
                cat1Display = cat.display;
                cat1DescFn = cat.desc;
                break;
            }
        }
    }
    if (has2cha) {
        const part2 = query.split('2차')[1] || '';
        for (const cat of FOOD_CATEGORIES) {
            if (part2.toLowerCase().includes(cat.key.toLowerCase())) {
                cat2Display = cat.display;
                cat2DescFn = cat.desc;
                break;
            }
        }
    }

    const primaryCatDisplay = cat1Display || cat2Display || mainCatDisplay;
    const primaryDescFn = cat1DescFn || cat2DescFn || catDescFn || ((loc) => `${loc}에서 편안한 분위기와 함께 만족스러운 시간을 보내기 최적인 추천 장소입니다.`);

    if (typeof kakao !== 'undefined' && kakao.maps && kakao.maps.services) {
        const ps = new kakao.maps.services.Places();

        if (isMultiCourse) {
            const kw1 = `${locDisplay} ${cat1Display || '맛집'}`;
            const kw2 = `${locDisplay} ${cat2Display || '카페'}`;
            console.log(`[Spoonmap Fallback] Multi-course search: "${kw1}" + "${kw2}"`);
            ps.keywordSearch(kw1, (d1, s1) => {
                ps.keywordSearch(kw2, (d2, s2) => {
                    const p1 = s1 === kakao.maps.services.Status.OK ? d1 : [];
                    const p2 = s2 === kakao.maps.services.Status.OK ? d2 : [];
                    renderCourseFallback(p1, p2);
                });
            });
            return;
        }

        const kw = `${locDisplay} ${primaryCatDisplay || (has2cha ? '카페' : '맛집')}`;
        console.log(`[Spoonmap Fallback] Single search: "${kw}"`);
        ps.keywordSearch(kw, (data, status) => {
            renderSingleFallback(status === kakao.maps.services.Status.OK ? data : []);
        });
    } else {
        renderSingleFallback([]);
    }

    function renderCourseFallback(places1, places2) {
        const count1 = step1Req || 1;
        const count2 = step2Req || 1;

        let list1 = places1.slice(0, count1);
        let list2 = places2.slice(0, count2);

        if (list1.length === 0) {
            list1 = [{ place_name: `${locDisplay} 추천 ${cat1Display || '맛집'}`, address_name: `${locDisplay} 인근`, category_name: cat1Display || '한식', place_url: `https://map.kakao.com/link/search/${encodeURIComponent(locDisplay + ' ' + (cat1Display || '맛집'))}` }];
        }
        if (list2.length === 0) {
            list2 = [{ place_name: `${locDisplay} 감성 ${cat2Display || '카페'}`, address_name: `${locDisplay} 인근`, category_name: cat2Display || '카페', place_url: `https://map.kakao.com/link/search/${encodeURIComponent(locDisplay + ' ' + (cat2Display || '카페'))}` }];
        }

        const cards1Html = list1.map((p) => {
            const cName = p.category_name ? p.category_name.split('>').pop().trim() : (cat1Display || '식사');
            const desc = cat1DescFn ? cat1DescFn(locDisplay) : `${locDisplay}에서 맛있는 1차 식사를 즐길 수 있는 추천 맛집입니다.`;
            return renderCardStandard(`1차: ${cName}`, p.place_name, p.road_address_name || p.address_name, desc, p.place_url);
        }).join('');

        const cards2Html = list2.map((p) => {
            const cName = p.category_name ? p.category_name.split('>').pop().trim() : (cat2Display || '카페');
            const desc = cat2DescFn ? cat2DescFn(locDisplay) : `1차 후 이동하여 ${moodText}음료와 대화를 나누기 좋은 2차 장소입니다.`;
            return renderCardStandard(`2차: ${cName}`, p.place_name, p.road_address_name || p.address_name, desc, p.place_url);
        }).join('');

        const introText = `안녕하세요! Spoonmap AI 미식 소믈리에입니다. ${moodText}${locDisplay} 인근으로 1차 ${cat1Display || '식사'} ${list1.length}곳과 2차 ${cat2Display || '카페/술집'} ${list2.length}곳을 준비했습니다.`;
        callback({ html: `<div class="sommelier-intro-p">${introText}</div><div class="sommelier-rec-grid">${cards1Html}${cards2Html}</div>` });
    }

    function renderSingleFallback(kakaoPlaces = []) {
        const targetCatDisplay = primaryCatDisplay || (has2cha ? '카페' : '맛집');
        const count = totalReq || 2;
        let chosenPlaces = kakaoPlaces.slice(0, count);

        if (chosenPlaces.length === 0) {
            const fallbackUrl = `https://map.kakao.com/link/search/${encodeURIComponent(locDisplay + ' ' + targetCatDisplay)}`;
            chosenPlaces = Array.from({ length: count }, (_, i) => ({
                place_name: `${locDisplay} ${i === 0 ? '대표' : '인기'} ${targetCatDisplay}`,
                address_name: `${locDisplay} 인근`,
                category_name: targetCatDisplay,
                place_url: fallbackUrl
            }));
        }

        const introText = `안녕하세요! Spoonmap AI 미식 소믈리에입니다. 요청하신 ${moodText}${locDisplay} ${targetCatDisplay} ${chosenPlaces.length}곳을 엄선해 드립니다.`;

        const cardsHtml = chosenPlaces.map((p, i) => {
            const cName = p.category_name ? p.category_name.split('>').pop().trim() : targetCatDisplay;
            const desc = primaryDescFn(locDisplay);
            return renderCardStandard(`추천 ${i + 1} (${cName})`, p.place_name, p.road_address_name || p.address_name, desc, p.place_url);
        }).join('');

        callback({ html: `<div class="sommelier-intro-p">${introText}</div><div class="sommelier-rec-grid">${cardsHtml}</div>` });
    }
}

// ════════════════════════════════════════════════════════════════════════════
// ─── 📅 식사 일기 캘린더 (노션 스타일 태그 & 다중 선택 옵션) ───────────────
// ════════════════════════════════════════════════════════════════════════════

let diaryInitialized = false;
let currentDiaryYear = new Date().getFullYear();
let currentDiaryMonth = new Date().getMonth(); // 0-indexed
const DIARY_STORAGE_KEY = 'spoonmap_diary';
const DIARY_CUSTOM_OPTIONS_KEY = 'spoonmap_custom_options';

const RATE_LABELS = ['', '별로야 😕', '나쁘지 않아 😐', '맛있어! 😊', '또 가고 싶어 😍', '인생 맛집 🤩'];

// Notion style pastel color palette for tags
const NOTION_COLORS = [
    { bg: '#FDE8E8', color: '#9B1C1C' }, // Red
    { bg: '#FEF3C7', color: '#92400E' }, // Yellow
    { bg: '#DEF7EC', color: '#03543F' }, // Green
    { bg: '#E1EFFE', color: '#1E429F' }, // Blue
    { bg: '#F3E8FF', color: '#6B21A8' }, // Purple
    { bg: '#FCE8F3', color: '#99154B' }, // Pink
    { bg: '#EDF2F7', color: '#2D3748' }, // Gray
    { bg: '#FFEDD5', color: '#9A3412' }  // Orange
];

const ORIGINAL_CATEGORY_EMOJIS = {
    '한식': '🍚', '중식': '🥟', '일식': '🍣', '양식': '🍝', '카페': '☕', '디저트': '🍰',
    '패스트푸드': '🍔', '멕시칸': '🌮', '피자': '🍕', '치킨': '🍗', '고기': '🥩', '술집': '🍺',
    '일반식당': '🍽️', '아시안': '🍜'
};

function getFormattedTagDisplay(text) {
    if (!text) return '';
    const trimmed = text.trim();

    // Check if text already starts with an emoji (if user typed emoji directly)
    const hasEmojiPrefix = /^[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u.test(trimmed);
    if (hasEmojiPrefix) return trimmed;

    // Check original dataset category matches
    for (const [key, emoji] of Object.entries(ORIGINAL_CATEGORY_EMOJIS)) {
        if (trimmed === key) {
            return `${emoji} ${trimmed}`;
        }
    }

    // Return user-entered text directly without adding random emojis
    return trimmed;
}

function getNotionTagColor(text) {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % NOTION_COLORS.length;
    return NOTION_COLORS[index];
}

// Notion Tag Selector Manager Class
class NotionTagSelector {
    constructor(fieldType, isMultiSelect = true) {
        this.fieldType = fieldType;
        this.baseKey = fieldType.replace('modal_', ''); // e.g. 'modal_category' -> 'category'
        this.isMultiSelect = isMultiSelect;
        this.selectedValues = [];
        this.availableOptions = new Set();
        
        this.fieldEl = document.getElementById(`notion-field-${fieldType}`);
        this.tagsContainerEl = document.getElementById(`notion-tags-${fieldType}`);
        this.popoverEl = document.getElementById(`notion-popover-${fieldType}`);
        this.searchEl = this.popoverEl?.querySelector('.notion-popover-search');
        this.optionsEl = document.getElementById(`notion-options-${fieldType}`);
        this.createBtnEl = document.getElementById(`notion-create-${fieldType}`);

        this.initOptions();
        this.bindEvents();
    }

    initOptions() {
        // Collect & split tags from dataset using baseKey
        const collect = (dataset, key) => {
            if (!dataset || !Array.isArray(dataset)) return;
            dataset.forEach(item => {
                const val = item[key];
                if (!val) return;
                if (Array.isArray(val)) {
                    val.forEach(v => {
                        if (typeof v === 'string') {
                            v.split(',').forEach(sub => {
                                const t = sub.trim();
                                if (t) this.availableOptions.add(t);
                            });
                        }
                    });
                } else if (typeof val === 'string') {
                    val.split(',').forEach(sub => {
                        const t = sub.trim();
                        if (t) this.availableOptions.add(t);
                    });
                }
            });
        };

        if (typeof restaurantData !== 'undefined') collect(restaurantData, this.baseKey);
        if (typeof diaryData !== 'undefined') collect(diaryData, this.baseKey);

        // Load from spoonmap_diary
        const localDiary = JSON.parse(localStorage.getItem(DIARY_STORAGE_KEY) || '[]');
        collect(localDiary, this.baseKey);

        // Load custom options created by user from localStorage
        const customStore = JSON.parse(localStorage.getItem(DIARY_CUSTOM_OPTIONS_KEY) || '{}');
        if (customStore[this.baseKey] && Array.isArray(customStore[this.baseKey])) {
            customStore[this.baseKey].forEach(opt => this.availableOptions.add(opt));
        }
    }

    bindEvents() {
        if (!this.fieldEl) return;

        // Toggle popover on bar click
        const bar = this.fieldEl.querySelector('.notion-tag-input-bar');
        if (bar) {
            bar.addEventListener('click', (e) => {
                if (e.target.classList.contains('notion-tag-remove')) return;
                this.togglePopover();
            });
        }

        // Search input filtering
        if (this.searchEl) {
            this.searchEl.addEventListener('input', () => {
                this.renderOptions(this.searchEl.value.trim());
            });
            this.searchEl.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const query = this.searchEl.value.trim();
                    if (query) {
                        this.addOptionAndSelect(query);
                        this.searchEl.value = '';
                        this.renderOptions('');
                    }
                }
            });
        }

        // Create button click
        if (this.createBtnEl) {
            this.createBtnEl.addEventListener('click', () => {
                const query = this.searchEl ? this.searchEl.value.trim() : '';
                if (query) {
                    this.addOptionAndSelect(query);
                    if (this.searchEl) this.searchEl.value = '';
                    this.renderOptions('');
                }
            });
        }

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (this.fieldEl && !this.fieldEl.contains(e.target)) {
                this.closePopover();
            }
        });
    }

    togglePopover() {
        // Close other popovers
        document.querySelectorAll('.notion-dropdown-popover.open').forEach(p => {
            if (p !== this.popoverEl) p.classList.remove('open');
        });

        if (this.popoverEl) {
            const isOpen = this.popoverEl.classList.toggle('open');
            if (isOpen) {
                if (this.searchEl) {
                    this.searchEl.value = '';
                    this.searchEl.focus();
                }
                this.renderOptions('');
            }
        }
    }

    closePopover() {
        if (this.popoverEl) this.popoverEl.classList.remove('open');
    }

    addOptionAndSelect(optName) {
        if (!optName) return;
        this.availableOptions.add(optName);

        // Save custom option to localStorage using baseKey
        const customStore = JSON.parse(localStorage.getItem(DIARY_CUSTOM_OPTIONS_KEY) || '{}');
        if (!customStore[this.baseKey]) customStore[this.baseKey] = [];
        if (!customStore[this.baseKey].includes(optName)) {
            customStore[this.baseKey].push(optName);
            localStorage.setItem(DIARY_CUSTOM_OPTIONS_KEY, JSON.stringify(customStore));
        }

        // Global Sync: Also propagate to sibling selector instance
        const siblingKey = this.fieldType.startsWith('modal_') ? this.baseKey : `modal_${this.baseKey}`;
        if (typeof notionSelectors !== 'undefined' && notionSelectors[siblingKey]) {
            notionSelectors[siblingKey].availableOptions.add(optName);
        }

        // Refresh Sidebar Filter & Recommend Roulette Category Buttons
        if (window.refreshSidebarFilters) window.refreshSidebarFilters();
        if (window.populateRecommendCategories) window.populateRecommendCategories();

        this.selectTag(optName);
    }

    selectTag(val) {
        if (this.isMultiSelect) {
            if (!this.selectedValues.includes(val)) {
                this.selectedValues.push(val);
            }
        } else {
            this.selectedValues = [val];
            this.closePopover();
        }
        this.renderSelectedTags();
        this.renderOptions(this.searchEl ? this.searchEl.value.trim() : '');
    }

    deselectTag(val) {
        this.selectedValues = this.selectedValues.filter(v => v !== val);
        this.renderSelectedTags();
        this.renderOptions(this.searchEl ? this.searchEl.value.trim() : '');
    }

    setValues(valArrayOrString) {
        let vals = [];
        if (Array.isArray(valArrayOrString)) {
            vals = valArrayOrString;
        } else if (typeof valArrayOrString === 'string') {
            vals = valArrayOrString.split(',').map(v => v.trim()).filter(Boolean);
        }
        vals.forEach(v => {
            this.availableOptions.add(v);
            const siblingKey = this.fieldType.startsWith('modal_') ? this.baseKey : `modal_${this.baseKey}`;
            if (typeof notionSelectors !== 'undefined' && notionSelectors[siblingKey]) {
                notionSelectors[siblingKey].availableOptions.add(v);
            }
        });
        this.selectedValues = vals;
        this.renderSelectedTags();
    }

    getValues() {
        return this.selectedValues;
    }

    getValueString() {
        return this.selectedValues.join(', ');
    }

    clear() {
        this.selectedValues = [];
        this.renderSelectedTags();
    }

    renderSelectedTags() {
        if (!this.tagsContainerEl) return;
        this.tagsContainerEl.innerHTML = '';
        const placeholder = this.fieldEl?.querySelector('.notion-tag-placeholder');

        if (this.selectedValues.length === 0) {
            if (placeholder) placeholder.style.display = 'inline';
            return;
        }

        if (placeholder) placeholder.style.display = 'none';

        this.selectedValues.forEach(val => {
            const color = getNotionTagColor(val);
            const displayLabel = getFormattedTagDisplay(val);
            const chip = document.createElement('span');
            chip.className = 'notion-selected-chip';
            chip.style.backgroundColor = color.bg;
            chip.style.color = color.color;

            chip.innerHTML = `
                <span class="chip-text">${displayLabel}</span>
                <span class="notion-tag-remove" title="삭제">&times;</span>
            `;

            chip.querySelector('.notion-tag-remove').addEventListener('click', (e) => {
                e.stopPropagation();
                this.deselectTag(val);
            });

            this.tagsContainerEl.appendChild(chip);
        });
    }

    renderOptions(query = '') {
        if (!this.optionsEl) return;
        this.optionsEl.innerHTML = '';

        const allOpts = Array.from(this.availableOptions).sort();
        const filtered = allOpts.filter(opt => opt.toLowerCase().includes(query.toLowerCase()));

        filtered.forEach(opt => {
            const color = getNotionTagColor(opt);
            const displayLabel = getFormattedTagDisplay(opt);
            const isSelected = this.selectedValues.includes(opt);

            const optEl = document.createElement('div');
            optEl.className = `notion-option-item${isSelected ? ' selected' : ''}`;
            optEl.title = '클릭: 선택 | 우클릭: 카테고리 삭제';
            
            optEl.innerHTML = `
                <div class="option-tag-badge" style="background-color:${color.bg}; color:${color.color}">
                    ${displayLabel}
                </div>
                <span class="option-delete-hint">우클릭: 삭제</span>
                ${isSelected ? '<span class="option-check">✓</span>' : ''}
            `;

            optEl.addEventListener('click', () => {
                if (isSelected) {
                    this.deselectTag(opt);
                } else {
                    this.selectTag(opt);
                }
            });

            // Right-click contextmenu for deletion
            optEl.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                e.stopPropagation();
                showNotionTagContextMenu(e.clientX, e.clientY, opt, this.baseKey);
            });

            this.optionsEl.appendChild(optEl);
        });

        // Show/hide Create Button
        if (this.createBtnEl) {
            const exactMatch = allOpts.some(opt => opt.toLowerCase() === query.toLowerCase());
            if (query && !exactMatch) {
                this.createBtnEl.style.display = 'flex';
                this.createBtnEl.innerHTML = `<span>+ "${query}" 생성</span>`;
            } else {
                this.createBtnEl.style.display = 'none';
            }
        }
    }
}

// ─── Right-Click Context Menu & Global Option Deletion ───
function removeActiveNotionContextMenu() {
    const existing = document.getElementById('notion-tag-context-menu');
    if (existing) existing.remove();
}

function showNotionTagContextMenu(x, y, optName, baseKey) {
    removeActiveNotionContextMenu();

    const menu = document.createElement('div');
    menu.id = 'notion-tag-context-menu';
    menu.className = 'notion-tag-context-menu';
    
    let posX = x;
    let posY = y;
    if (posX + 180 > window.innerWidth) posX = window.innerWidth - 190;
    if (posY + 60 > window.innerHeight) posY = window.innerHeight - 70;

    menu.style.left = `${posX}px`;
    menu.style.top = `${posY}px`;

    menu.innerHTML = `
        <button type="button" class="notion-context-btn">
            <span>🗑️ "${optName}" 카테고리 삭제</span>
        </button>
    `;

    menu.querySelector('button').onclick = (e) => {
        e.stopPropagation();
        removeActiveNotionContextMenu();
        if (confirm(`"${optName}" 카테고리를 전체 목록과 필터에서 삭제하시겠습니까?`)) {
            deleteOptionGlobally(optName, baseKey);
        }
    };

    document.body.appendChild(menu);
}

// Close context menu on outside click
document.addEventListener('click', (e) => {
    if (!e.target.closest('#notion-tag-context-menu')) {
        removeActiveNotionContextMenu();
    }
});

function deleteOptionGlobally(optName, baseKey) {
    if (!optName || !baseKey) return;

    // 1. Remove from spoonmap_custom_options localStorage
    const customStore = JSON.parse(localStorage.getItem(DIARY_CUSTOM_OPTIONS_KEY) || '{}');
    if (customStore[baseKey] && Array.isArray(customStore[baseKey])) {
        customStore[baseKey] = customStore[baseKey].filter(item => item !== optName);
        localStorage.setItem(DIARY_CUSTOM_OPTIONS_KEY, JSON.stringify(customStore));
    }

    // 2. Remove from all active NotionTagSelector instances
    if (typeof notionSelectors !== 'undefined') {
        Object.values(notionSelectors).forEach(sel => {
            if (sel && sel.baseKey === baseKey) {
                sel.availableOptions.delete(optName);
                sel.selectedValues = sel.selectedValues.filter(v => v !== optName);
                if (typeof sel.renderSelectedTags === 'function') sel.renderSelectedTags();
                if (typeof sel.renderOptions === 'function') sel.renderOptions('');
            }
        });
    }

    // 3. Remove tag from master overrides & diary entries if present
    const overrides = JSON.parse(localStorage.getItem('spoonmap_restaurant_overrides') || '{}');
    let overrideChanged = false;
    Object.keys(overrides).forEach(key => {
        const item = overrides[key];
        if (item && item[baseKey]) {
            if (typeof item[baseKey] === 'string') {
                const tags = item[baseKey].split(',').map(s => s.trim()).filter(s => s && s !== optName);
                item[baseKey] = tags.join(', ');
                overrideChanged = true;
            } else if (Array.isArray(item[baseKey])) {
                item[baseKey] = item[baseKey].filter(s => s !== optName);
                overrideChanged = true;
            }
        }
    });
    if (overrideChanged) {
        localStorage.setItem('spoonmap_restaurant_overrides', JSON.stringify(overrides));
    }

    const diaryEntries = JSON.parse(localStorage.getItem(DIARY_STORAGE_KEY) || '[]');
    let diaryChanged = false;
    diaryEntries.forEach(entry => {
        if (entry && entry[baseKey]) {
            if (typeof entry[baseKey] === 'string') {
                const tags = entry[baseKey].split(',').map(s => s.trim()).filter(s => s && s !== optName);
                entry[baseKey] = tags.join(', ');
                diaryChanged = true;
            } else if (Array.isArray(entry[baseKey])) {
                entry[baseKey] = entry[baseKey].filter(s => s !== optName);
                diaryChanged = true;
            }
        }
    });
    if (diaryChanged) {
        localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(diaryEntries));
    }

    // 4. Re-render app, side filters & diary calendar
    if (window.renderApp) window.renderApp();
    if (window.refreshSidebarFilters) window.refreshSidebarFilters();
    renderDiaryCalendar();

    showDiaryToast(`🗑️ "${optName}" 카테고리가 삭제되었습니다.`);
}

// Map of Notion Tag Selectors
let notionSelectors = {};

function initAllNotionSelectors() {
    // Diary drawer selectors
    if (document.getElementById('notion-field-category')) {
        notionSelectors.category = new NotionTagSelector('category', true);
        notionSelectors.menu = new NotionTagSelector('menu', true);
        notionSelectors.location_large = new NotionTagSelector('location_large', false);
        notionSelectors.location_small = new NotionTagSelector('location_small', true);
    }

    // Modal inline edit selectors
    if (document.getElementById('notion-field-modal_category')) {
        notionSelectors.modal_category = new NotionTagSelector('modal_category', true);
        notionSelectors.modal_menu = new NotionTagSelector('modal_menu', true);
        notionSelectors.modal_location_large = new NotionTagSelector('modal_location_large', false);
        notionSelectors.modal_location_small = new NotionTagSelector('modal_location_small', true);
    }

    // Bind modal rate spoon buttons
    const modalRateBtns = document.querySelectorAll('.modal-rate-spoon');
    if (modalRateBtns.length > 0) {
        modalRateBtns.forEach(btn => {
            btn.onclick = () => {
                const val = parseInt(btn.dataset.val, 10);
                const rateInput = document.getElementById('modal-edit-input-rate');
                const rateLabel = document.getElementById('modal-edit-rate-label');
                if (rateInput) rateInput.value = '🥄'.repeat(val);
                if (rateLabel && typeof RATE_LABELS !== 'undefined') rateLabel.textContent = RATE_LABELS[val] || `${val}개`;
                modalRateBtns.forEach((b, i) => {
                    b.classList.toggle('active', i < val);
                });
            };
        });
    }
}

function initDiaryTab() {
    if (diaryInitialized) {
        renderDiaryCalendar(); // Always refresh on re-enter
        return;
    }
    diaryInitialized = true;

    // Month navigation
    const prevBtn = document.getElementById('btn-diary-prev');
    const nextBtn = document.getElementById('btn-diary-next');
    const todayBtn = document.getElementById('btn-diary-today');
    const exportBtn = document.getElementById('btn-diary-export');

    if (prevBtn) prevBtn.addEventListener('click', () => {
        currentDiaryMonth--;
        if (currentDiaryMonth < 0) { currentDiaryMonth = 11; currentDiaryYear--; }
        renderDiaryCalendar();
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
        currentDiaryMonth++;
        if (currentDiaryMonth > 11) { currentDiaryMonth = 0; currentDiaryYear++; }
        renderDiaryCalendar();
    });
    if (todayBtn) todayBtn.addEventListener('click', () => {
        const now = new Date();
        currentDiaryYear = now.getFullYear();
        currentDiaryMonth = now.getMonth();
        renderDiaryCalendar();
    });
    if (exportBtn) exportBtn.addEventListener('click', exportDiaryCSV);

    // Initialize Notion Tag Selectors
    initAllNotionSelectors();

    // Name autocomplete setup
    populateDiaryAutocomplete();

    // Spoon rate picker
    const ratePicker = document.getElementById('diary-rate-picker');
    if (ratePicker) {
        const spoonBtns = ratePicker.querySelectorAll('.rate-spoon');
        const rateLabel = document.getElementById('diary-rate-label');
        const rateInput = document.getElementById('diary-input-rate');
        spoonBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const val = parseInt(btn.dataset.val);
                spoonBtns.forEach((b, i) => {
                    b.classList.toggle('active', i < val);
                });
                if (rateInput) rateInput.value = '🥄'.repeat(val);
                if (rateLabel) rateLabel.textContent = RATE_LABELS[val] || '';
            });
        });
    }

    // Form submit
    const form = document.getElementById('diary-add-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            saveDiaryEntry();
        });
    }

    renderDiaryCalendar();
}

function populateDiaryAutocomplete() {
    setupDiaryNameSearch();
}

function setupDiaryNameSearch() {
    const input = document.getElementById('diary-input-name');
    const container = document.getElementById('diary-name-suggestions');
    if (!input || !container) return;

    const getNamesList = () => {
        const namesSet = new Set();
        if (typeof restaurantData !== 'undefined') {
            restaurantData.forEach(r => namesSet.add(r.name));
        }
        if (typeof diaryData !== 'undefined') {
            diaryData.forEach(r => namesSet.add(r.name));
        }
        return Array.from(namesSet).sort();
    };

    const hideSuggestions = () => {
        container.style.display = 'none';
        container.innerHTML = '';
    };

    input.addEventListener('input', () => {
        const query = input.value.trim().toLowerCase();
        if (!query) {
            hideSuggestions();
            return;
        }

        const allNames = getNamesList();
        const filtered = allNames.filter(name => name.toLowerCase().includes(query)).slice(0, 10);

        if (filtered.length === 0) {
            hideSuggestions();
            return;
        }

        container.innerHTML = filtered.map(name => `
            <div class="name-suggestion-item" data-name="${name}">
                <span>🍽️ ${name}</span>
            </div>
        `).join('');

        container.style.display = 'block';

        container.querySelectorAll('.name-suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                const selectedName = item.dataset.name;
                input.value = selectedName;
                hideSuggestions();
                autoFillRestaurantData(selectedName);
            });
        });
    });

    input.addEventListener('blur', () => {
        setTimeout(hideSuggestions, 200);
        if (input.value.trim()) {
            autoFillRestaurantData(input.value.trim());
        }
    });

    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !container.contains(e.target)) {
            hideSuggestions();
        }
    });
}

function autoFillRestaurantData(restaurantName) {
    if (!restaurantName || typeof restaurantData === 'undefined') return;

    let match = restaurantData.find(r => r.name.toLowerCase() === restaurantName.toLowerCase());
    if (!match && typeof diaryData !== 'undefined') {
        match = diaryData.find(r => r.name.toLowerCase() === restaurantName.toLowerCase());
    }

    if (match) {
        if (match.category) notionSelectors.category.setValues(match.category);
        if (match.menu) notionSelectors.menu.setValues(match.menu);
        if (match.location_large) notionSelectors.location_large.setValues(match.location_large);
        if (match.location_small) notionSelectors.location_small.setValues(match.location_small);

        const mapInput = document.getElementById('diary-input-map');
        if (mapInput && !mapInput.value && match.map_url) mapInput.value = match.map_url;

        // Auto-fill Spoon Rate (🥄 count)
        if (match.rate) {
            const spoonCount = (match.rate.match(/🥄/g) || []).length || 1;
            const rateInput = document.getElementById('diary-input-rate');
            const rateLabel = document.getElementById('diary-rate-label');
            const ratePicker = document.getElementById('diary-rate-picker');

            if (rateInput) rateInput.value = '🥄'.repeat(spoonCount);
            if (rateLabel) rateLabel.textContent = RATE_LABELS[spoonCount] || '';
            if (ratePicker) {
                ratePicker.querySelectorAll('.rate-spoon').forEach((b, i) => {
                    b.classList.toggle('active', i < spoonCount);
                });
            }
        }
    }

    // Update Visit Count Badge in Drawer
    updateDrawerVisitBadge(restaurantName);
}

// Calculate total visits and specific visit order for a restaurant
function getAllVisitsForRestaurant(restaurantName) {
    if (!restaurantName) return [];
    const all = [];

    // From CSV diaryData
    if (typeof diaryData !== 'undefined' && Array.isArray(diaryData)) {
        diaryData.forEach((item, idx) => {
            if (item.name && item.name.toLowerCase() === restaurantName.toLowerCase()) {
                all.push({
                    id: item.id || `csv-${idx}-${item.date}-${item.name}`,
                    name: item.name,
                    date: item.date,
                    source: 'csv',
                    data: item
                });
            }
        });
    }

    // From LocalStorage
    const local = JSON.parse(localStorage.getItem(DIARY_STORAGE_KEY) || '[]');
    local.forEach(item => {
        if (item.name && item.name.toLowerCase() === restaurantName.toLowerCase()) {
            all.push({
                id: item.id,
                name: item.name,
                date: item.date,
                source: 'local',
                data: item
            });
        }
    });

    // Sort chronologically by date
    all.sort((a, b) => new Date(a.date) - new Date(b.date));
    return all;
}

function updateDrawerVisitBadge(restaurantName, targetDate = null, targetId = null) {
    const badgeEl = document.getElementById('drawer-visit-badge');
    if (!badgeEl) return;

    if (!restaurantName) {
        badgeEl.style.display = 'none';
        return;
    }

    const visits = getAllVisitsForRestaurant(restaurantName);
    const total = visits.length;

    // Hide badge if 0 or 1 visit total
    if (total < 2) {
        badgeEl.style.display = 'none';
        return;
    }

    let order = total;
    if (targetId) {
        const foundIdx = visits.findIndex(v => String(v.id) === String(targetId));
        if (foundIdx !== -1) order = foundIdx + 1;
    } else if (targetDate) {
        const foundIdx = visits.findIndex(v => v.date === targetDate);
        if (foundIdx !== -1) order = foundIdx + 1;
    }

    // Hide badge if this specific visit is 1st visit
    if (order < 2) {
        badgeEl.style.display = 'none';
        return;
    }

    let icon = '🔥';
    if (total >= 10) icon = '👑';
    else if (total >= 5) icon = '🔥';

    badgeEl.innerHTML = `${icon} ${order}회차 방문 (총 ${total}회)`;
    badgeEl.style.display = 'inline-flex';
}

function updateYearMonthPickers() {
    const yearSelect = document.getElementById('diary-select-year');
    const monthSelect = document.getElementById('diary-select-month');
    if (!yearSelect || !monthSelect) return;

    // Populate years (2023 to CurrentYear + 2)
    if (yearSelect.options.length === 0) {
        const currentY = new Date().getFullYear();
        const startY = 2023;
        const endY = currentY + 2;
        for (let y = startY; y <= endY; y++) {
            const opt = document.createElement('option');
            opt.value = y;
            opt.textContent = `${y}년`;
            yearSelect.appendChild(opt);
        }

        yearSelect.addEventListener('change', () => {
            currentDiaryYear = parseInt(yearSelect.value);
            renderDiaryCalendar();
        });
    }

    // Populate months (1 to 12)
    if (monthSelect.options.length === 0) {
        for (let m = 0; m < 12; m++) {
            const opt = document.createElement('option');
            opt.value = m;
            opt.textContent = `${m + 1}월`;
            monthSelect.appendChild(opt);
        }

        monthSelect.addEventListener('change', () => {
            currentDiaryMonth = parseInt(monthSelect.value);
            renderDiaryCalendar();
        });
    }

    yearSelect.value = currentDiaryYear;
    monthSelect.value = currentDiaryMonth;
}

function getDiaryEntriesForMonth(year, month) {
    const byDate = {};

    // From diaryData (CSV-synced, all visits)
    if (typeof diaryData !== 'undefined' && Array.isArray(diaryData)) {
        diaryData.forEach((entry, idx) => {
            if (!entry.date) return;
            const d = new Date(entry.date + 'T00:00:00');
            if (d.getFullYear() === year && d.getMonth() === month) {
                if (!byDate[entry.date]) byDate[entry.date] = [];
                const entryId = entry.id || `csv-${idx}-${entry.date}`;
                byDate[entry.date].push({ ...entry, id: entryId, source: 'csv' });
            }
        });
    }

    // From localStorage (user-added or edited)
    const localEntries = JSON.parse(localStorage.getItem(DIARY_STORAGE_KEY) || '[]');
    localEntries.forEach(entry => {
        if (!entry.date) return;
        const d = new Date(entry.date + 'T00:00:00');
        if (d.getFullYear() === year && d.getMonth() === month) {
            if (!byDate[entry.date]) byDate[entry.date] = [];
            byDate[entry.date].push({ ...entry, source: 'local' });
        }
    });

    return byDate;
}

// Drag & Drop State
let draggedEntryData = null;

function renderDiaryCalendar() {
    const year = currentDiaryYear;
    const month = currentDiaryMonth;

    updateYearMonthPickers();

    const grid = document.getElementById('diary-calendar-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0=Sun
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    const byDate = getDiaryEntriesForMonth(year, month);

    // Empty leading cells
    for (let i = 0; i < firstDayOfWeek; i++) {
        const empty = document.createElement('div');
        empty.className = 'diary-day-cell diary-day-empty';
        grid.appendChild(empty);
    }

    // Day cells
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
        const dow = new Date(year, month, day).getDay(); // 0=Sun, 6=Sat
        const entries = byDate[dateStr] || [];

        const cell = document.createElement('div');
        let cellClass = 'diary-day-cell';
        if (isToday) cellClass += ' is-today';
        if (dow === 0) cellClass += ' is-sunday';
        if (dow === 6) cellClass += ' is-saturday';
        cell.className = cellClass;
        cell.dataset.date = dateStr;

        // Cell Drag & Drop Handlers
        cell.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            cell.classList.add('drag-over');
        });

        cell.addEventListener('dragleave', () => {
            cell.classList.remove('drag-over');
        });

        cell.addEventListener('drop', (e) => {
            e.preventDefault();
            cell.classList.remove('drag-over');
            if (draggedEntryData) {
                moveDiaryEntryToDate(draggedEntryData, dateStr);
                draggedEntryData = null;
            }
        });

        // Date number
        const dateNum = document.createElement('div');
        dateNum.className = 'diary-date-num';
        dateNum.textContent = day;
        cell.appendChild(dateNum);

        // Entries cards
        if (entries.length > 0) {
            const entriesWrap = document.createElement('div');
            entriesWrap.className = 'diary-entries';

            const MAX_CHIPS = 3;
            entries.slice(0, MAX_CHIPS).forEach(entry => {
                const card = document.createElement('div');
                card.className = `diary-entry-card${entry.source === 'local' ? ' is-local' : ''}`;
                card.draggable = true;

                // Calculate visit order
                const visitInfo = getAllVisitsForRestaurant(entry.name);
                const visitIdx = visitInfo.findIndex(v => String(v.id) === String(entry.id) || v.date === entry.date);
                const orderNum = visitIdx !== -1 ? visitIdx + 1 : visitInfo.length;
                const totalCount = visitInfo.length;

                // Parse individual categories (split commas)
                const catArray = entry.category ? entry.category.split(',').map(c => c.trim()).filter(Boolean) : [];
                const spoonCount = entry.rate ? (entry.rate.match(/CLR|🥄/g) || entry.rate.match(/🥄/g) || []).length : 0;

                const tagsHtml = catArray.map(c => {
                    const color = getNotionTagColor(c);
                    return `<span class="diary-mini-tag" style="background:${color.bg}; color:${color.color}">${c}</span>`;
                }).join('');

                const visitBadgeHtml = (totalCount >= 2 && orderNum >= 2) 
                    ? `<span class="card-visit-tag">${totalCount >= 10 ? '👑' : '🔥'}${orderNum}회차</span>` 
                    : '';

                card.innerHTML = `
                    <div class="card-name" title="${entry.name}">${entry.name}</div>
                    <div class="card-sub-row">
                        ${visitBadgeHtml}
                        ${tagsHtml}
                    </div>
                    ${spoonCount > 0 ? `<div class="card-spoon-row"><span class="card-spoon">${'🥄'.repeat(spoonCount)}</span></div>` : ''}
                    ${entry.memo ? `<div class="card-memo-row" title="${entry.memo}">📝 ${entry.memo}</div>` : ''}
                `;

                // Drag Start
                card.addEventListener('dragstart', (e) => {
                    draggedEntryData = entry;
                    card.classList.add('is-dragging');
                    e.dataTransfer.setData('text/plain', JSON.stringify(entry));
                });

                card.addEventListener('dragend', () => {
                    card.classList.remove('is-dragging');
                    draggedEntryData = null;
                });

                // Click -> Open Edit Drawer
                card.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openEditDiaryDrawer(entry);
                });

                entriesWrap.appendChild(card);
            });

            if (entries.length > MAX_CHIPS) {
                const more = document.createElement('div');
                more.className = 'diary-more-chip';
                more.textContent = `+${entries.length - MAX_CHIPS}개 더`;
                entriesWrap.appendChild(more);
            }

            cell.appendChild(entriesWrap);
        }

        // Add button
        const addBtn = document.createElement('button');
        addBtn.className = 'diary-add-btn';
        addBtn.textContent = '+ 추가';
        addBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openDiaryDrawer(dateStr);
        });
        cell.appendChild(addBtn);

        grid.appendChild(cell);
    }
}

// Move Entry to New Date via Drag & Drop
function moveDiaryEntryToDate(entry, newDate) {
    if (!entry || !newDate || entry.date === newDate) return;

    const localEntries = JSON.parse(localStorage.getItem(DIARY_STORAGE_KEY) || '[]');
    let foundIdx = localEntries.findIndex(e => String(e.id) === String(entry.id));

    if (foundIdx !== -1) {
        localEntries[foundIdx].date = newDate;
    } else {
        // Promote CSV entry to Local storage with new date
        const newLocal = {
            ...entry,
            id: Date.now(),
            date: newDate,
            created_at: new Date().toISOString()
        };
        localEntries.push(newLocal);
    }

    localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(localEntries));
    renderDiaryCalendar();
    if (window.renderApp) window.renderApp();
    showDiaryToast(`📍 "${entry.name}" 항목이 ${newDate} 날짜로 이동되었습니다!`);
}

function openDiaryDrawer(dateStr) {
    const overlay = document.getElementById('diary-drawer-overlay');
    const dateField = document.getElementById('diary-drawer-field-date');
    const dateInput = document.getElementById('diary-input-date');
    const nameInput = document.getElementById('diary-input-name');
    const rateInput = document.getElementById('diary-input-rate');
    const rateLabel = document.getElementById('diary-rate-label');
    const mapInput = document.getElementById('diary-input-map');
    const memoInput = document.getElementById('diary-input-memo');
    const editIdInput = document.getElementById('diary-editing-id');
    const deleteBtn = document.getElementById('drawer-delete-btn');
    const titleIcon = document.getElementById('drawer-title-icon');
    const titleText = document.getElementById('drawer-title-text');
    const badgeEl = document.getElementById('drawer-visit-badge');

    const submitBtn = document.getElementById('drawer-submit-btn');

    // Show date field
    if (dateField) dateField.style.display = '';

    // Reset drawer state (Add mode)
    if (titleIcon) titleIcon.textContent = '✏️';
    if (titleText) titleText.textContent = '새 방문 기록 추가';
    if (submitBtn) submitBtn.innerHTML = '저장하기 &#x2713;';
    if (deleteBtn) deleteBtn.style.display = 'none';
    if (badgeEl) badgeEl.style.display = 'none';
    if (editIdInput) editIdInput.value = '';

    if (nameInput) nameInput.value = '';
    if (rateInput) rateInput.value = '';
    if (rateLabel) rateLabel.textContent = '선택 안 함';
    if (mapInput) mapInput.value = '';
    if (memoInput) memoInput.value = '';

    Object.values(notionSelectors).forEach(sel => sel.clear());
    document.querySelectorAll('.rate-spoon').forEach(b => b.classList.remove('active'));

    if (dateInput) dateInput.value = dateStr || '';

    if (overlay) {
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    if (nameInput) setTimeout(() => nameInput.focus(), 100);
}

// Open Edit Drawer for an Existing Entry
function openEditDiaryDrawer(entry) {
    const overlay = document.getElementById('diary-drawer-overlay');
    const dateField = document.getElementById('diary-drawer-field-date');
    const dateInput = document.getElementById('diary-input-date');
    const nameInput = document.getElementById('diary-input-name');
    const rateInput = document.getElementById('diary-input-rate');
    const rateLabel = document.getElementById('diary-rate-label');
    const mapInput = document.getElementById('diary-input-map');
    const memoInput = document.getElementById('diary-input-memo');
    const editIdInput = document.getElementById('diary-editing-id');
    const deleteBtn = document.getElementById('drawer-delete-btn');
    const titleIcon = document.getElementById('drawer-title-icon');
    const titleText = document.getElementById('drawer-title-text');

    const submitBtn = document.getElementById('drawer-submit-btn');

    // Show date field
    if (dateField) dateField.style.display = '';

    // Set Edit Mode UI
    if (titleIcon) titleIcon.textContent = '📝';
    if (titleText) titleText.textContent = '방문 기록 수정';
    if (submitBtn) submitBtn.innerHTML = '수정 완료 &#x2713;';
    if (deleteBtn) deleteBtn.style.display = 'inline-flex';
    if (editIdInput) editIdInput.value = entry.id || '';

    if (nameInput) nameInput.value = entry.name || '';
    if (dateInput) dateInput.value = entry.date || '';
    if (mapInput) mapInput.value = entry.map_url || '';
    if (memoInput) memoInput.value = entry.memo || '';

    // Set Notion Tag Selectors
    if (entry.category) notionSelectors.category.setValues(entry.category);
    else if (notionSelectors.category) notionSelectors.category.clear();

    if (entry.menu) notionSelectors.menu.setValues(entry.menu);
    else if (notionSelectors.menu) notionSelectors.menu.clear();

    if (entry.location_large) notionSelectors.location_large.setValues(entry.location_large);
    else if (notionSelectors.location_large) notionSelectors.location_large.clear();

    if (entry.location_small) notionSelectors.location_small.setValues(entry.location_small);
    else if (notionSelectors.location_small) notionSelectors.location_small.clear();

    // Set Spoon Rate
    if (entry.rate) {
        const spoonCount = (entry.rate.match(/CLR|🥄/g) || entry.rate.match(/🥄/g) || []).length || 1;
        if (rateInput) rateInput.value = '🥄'.repeat(spoonCount);
        if (rateLabel) rateLabel.textContent = RATE_LABELS[spoonCount] || '';
        document.querySelectorAll('.rate-spoon').forEach((b, i) => {
            b.classList.toggle('active', i < spoonCount);
        });
    }

    // Update Visit Count Badge
    updateDrawerVisitBadge(entry.name, entry.date, entry.id);

    if (overlay) {
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function deleteCurrentDiaryEntry() {
    const editId = document.getElementById('diary-editing-id')?.value;
    const name = document.getElementById('diary-input-name')?.value || '해당';

    if (!editId) return;
    if (!confirm(`"${name}" 방문 기록을 정말 삭제하시겠습니까?`)) return;

    const localEntries = JSON.parse(localStorage.getItem(DIARY_STORAGE_KEY) || '[]');
    const updated = localEntries.filter(e => String(e.id) !== String(editId));
    localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(updated));

    closeDiaryDrawer();
    renderDiaryCalendar();
    if (window.renderApp) window.renderApp();
    showDiaryToast(`🗑️ "${name}" 방문 기록이 삭제되었습니다.`);
}

function closeDiaryDrawer() {
    const overlay = document.getElementById('diary-drawer-overlay');
    if (overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }
    // Restore date field
    const dateField = document.getElementById('diary-drawer-field-date');
    if (dateField) dateField.style.display = '';

    // Close open popovers
    document.querySelectorAll('.notion-dropdown-popover.open').forEach(p => p.classList.remove('open'));
}

function saveDiaryEntry() {
    const editId = document.getElementById('diary-editing-id')?.value;
    const name = document.getElementById('diary-input-name')?.value.trim();
    const date = document.getElementById('diary-input-date')?.value;
    const category = notionSelectors.category ? notionSelectors.category.getValueString() : '';
    const rate = document.getElementById('diary-input-rate')?.value.trim();

    if (!name) { alert('식당명을 입력해주세요.'); return; }
    if (!category) { alert('식당 분류를 하나 이상 선택해주세요.'); return; }
    if (!rate) { alert('수저 평점을 선택해주세요.'); return; }

    const menu = notionSelectors.menu ? notionSelectors.menu.getValues() : [];
    const location_large = notionSelectors.location_large ? notionSelectors.location_large.getValueString() : '';
    const location_small = notionSelectors.location_small ? notionSelectors.location_small.getValueString() : '';
    const map_url = document.getElementById('diary-input-map')?.value.trim() || '';
    const memo = document.getElementById('diary-input-memo')?.value.trim() || '';

    const key = name.trim().toLowerCase();

    // ─── Mode A: Restaurant Master Info Batch Edit (From LIST Tab) ───
    if (editId && editId.startsWith('__MASTER_EDIT__')) {
        // 1. Save to spoonmap_restaurant_overrides
        const overrides = JSON.parse(localStorage.getItem('spoonmap_restaurant_overrides') || '{}');
        overrides[key] = {
            name,
            category,
            location_large,
            location_small,
            menu,
            rate,
            map_url,
            memo,
            updated_at: new Date().toISOString()
        };
        localStorage.setItem('spoonmap_restaurant_overrides', JSON.stringify(overrides));

        // 2. Batch sync all entries in spoonmap_diary for this restaurant
        const existing = JSON.parse(localStorage.getItem(DIARY_STORAGE_KEY) || '[]');
        let diaryUpdated = false;
        existing.forEach(entry => {
            if (entry.name && entry.name.trim().toLowerCase() === key) {
                entry.category = category;
                if (location_large) entry.location_large = location_large;
                if (location_small) entry.location_small = location_small;
                if (menu.length > 0) entry.menu = menu;
                if (rate) entry.rate = rate;
                if (map_url) entry.map_url = map_url;
                diaryUpdated = true;
            }
        });
        if (diaryUpdated) {
            localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(existing));
        }

        closeDiaryDrawer();
        renderDiaryCalendar();
        if (window.renderApp) window.renderApp();

        // Refresh and re-open Detail Modal with updated item
        const allUnified = getUnifiedRestaurantData();
        const updatedItem = allUnified.find(r => r.name.trim().toLowerCase() === key);
        if (updatedItem) {
            openRestaurantDetailModal(updatedItem);
        }

        showDiaryToast(`✅ "${name}" 식당 정보가 전체 일괄 수정되었습니다!`);
        return;
    }

    // ─── Mode B: Normal Diary Entry Add / Edit ───
    if (!date) { alert('방문 날짜를 선택해주세요.'); return; }

    const existing = JSON.parse(localStorage.getItem(DIARY_STORAGE_KEY) || '[]');

    if (editId) {
        // Update mode
        const idx = existing.findIndex(e => String(e.id) === String(editId));
        const updatedEntry = {
            id: isNaN(Number(editId)) ? editId : Number(editId),
            name,
            date,
            category,
            rate,
            menu,
            location_large,
            location_small,
            map_url,
            memo,
            updated_at: new Date().toISOString()
        };

        if (idx !== -1) {
            existing[idx] = updatedEntry;
        } else {
            existing.push(updatedEntry);
        }
        localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(existing));
        showDiaryToast(`✏️ "${name}" 기록이 수정되었습니다!`);
    } else {
        // Create mode
        const newEntry = {
            id: Date.now(),
            name,
            date,
            category,
            rate,
            menu,
            location_large,
            location_small,
            map_url,
            memo,
            created_at: new Date().toISOString()
        };
        existing.push(newEntry);
        localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(existing));
        showDiaryToast(`✅ "${name}" 기록이 저장됐습니다!`);
    }

    // ─── Global Sync: Always sync master overrides & all visits so LIST and DIARY share identical info! ───
    const overrides = JSON.parse(localStorage.getItem('spoonmap_restaurant_overrides') || '{}');
    overrides[key] = {
        name,
        category,
        location_large,
        location_small,
        menu,
        rate,
        map_url,
        updated_at: new Date().toISOString()
    };
    localStorage.setItem('spoonmap_restaurant_overrides', JSON.stringify(overrides));

    // Batch sync other diary records of this restaurant
    existing.forEach(entry => {
        if (entry.name && entry.name.trim().toLowerCase() === key) {
            entry.category = category;
            if (location_large) entry.location_large = location_large;
            if (location_small) entry.location_small = location_small;
            if (menu.length > 0) entry.menu = menu;
        }
    });
    localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(existing));

    closeDiaryDrawer();
    renderDiaryCalendar();
    if (window.renderApp) window.renderApp();
    if (typeof computeAndRenderFoodInsights === 'function') computeAndRenderFoodInsights();
    if (window.populateRecommendCategories) window.populateRecommendCategories();
}

function showDiaryToast(msg) {
    let toast = document.getElementById('diary-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'diary-toast';
        toast.className = 'diary-toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2800);
}

function exportDiaryCSV() {
    const entries = JSON.parse(localStorage.getItem(DIARY_STORAGE_KEY) || '[]');
    if (entries.length === 0) {
        alert('내보낼 새 항목이 없습니다.\n사이트에서 직접 추가한 기록만 내보내기 됩니다.');
        return;
    }
    const header = '식당명,Date,Map,Rate,사람,수식,식당 분류,주요 메뉴,지역-대분류,지역-소분류,메모';
    const rows = entries.map(e => {
        const menuStr = (e.menu || []).join(', ');
        return [
            `"${e.name}"`, `"${e.date}"`, `"${e.map_url || ''}"`, `"${e.rate}"`,
            '""', '""', `"${e.category}"`, `"${menuStr}"`,
            `"${e.location_large}"`, `"${e.location_small}"`, `"${e.memo || ''}"`
        ].join(',');
    });
    const csv = [header, ...rows].join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `spoonmap_diary_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
}
