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
        const tab = VALID_TABS.includes(mainPart) ? mainPart : 'diary';
        
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
        if (!VALID_TABS.includes(targetTab)) targetTab = 'list';

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
            mobileFilterBtn.style.display = targetTab === 'list' ? 'block' : 'none';
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

        if (currentActiveTab !== targetTab) {
            currentActiveTab = targetTab;
            if (targetTab === 'map') {
                initMap();
            } else if (targetTab === 'insights') {
                computeAndRenderFoodInsights();
            } else if (targetTab === 'sommelier') {
                initSommelierTab();
            } else if (targetTab === 'diary') {
                initDiaryTab();
            }
        }
    }

    function handleRoute() {
        const route = parseRoute();

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

        // Populate Category select options
        const categories = new Set();
        restaurantData.forEach(item => {
            if (item.category) {
                item.category.split(',').forEach(c => categories.add(c.trim()));
            }
        });
        Array.from(categories).sort().forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat;
            opt.textContent = cat;
            catSelect.appendChild(opt);
        });

        // Populate Location select options
        const locations = new Set();
        restaurantData.forEach(item => {
            if (item.location_large) locations.add(item.location_large);
        });
        Array.from(locations).sort().forEach(loc => {
            const opt = document.createElement('option');
            opt.value = loc;
            opt.textContent = loc;
            locSelect.appendChild(opt);
        });

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

                // Visited dataset candidates
                let candidates = restaurantData.filter(item => {
                    if (!item.map_url) return false;
                    if (selectedCat !== 'all' && (!item.category || !item.category.includes(selectedCat))) return false;
                    if (selectedLoc !== 'all' && item.location_large !== selectedLoc) return false;
                    
                    const spoonCount = (item.rate ? (item.rate.match(/🥄/g) || []).length : 1) || 1;
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

        // View on map action
        if (viewOnMapBtn) {
            viewOnMapBtn.addEventListener('click', () => {
                if (!currentWinnerItem) return;
                const mapTabBtn = document.querySelector('.tab-btn[data-tab="map"], .mobile-tab-btn[data-tab="map"]');
                if (mapTabBtn) mapTabBtn.click();

                setTimeout(() => {
                    const searchInput = document.getElementById('map-search-input');
                    if (searchInput) {
                        searchInput.value = currentWinnerItem.name;
                        searchSavedPlacesOnMap(currentWinnerItem.name);
                    }
                }, 300);
            });
        }
    }

    let map = null;
    let markers = [];
    let geocoder = null;

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
                    searchPlacesByCategory(false);
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
                    
                    // Manage active state for sub-menu items
                    document.querySelectorAll('.sub-menu li').forEach(li => li.classList.remove('active'));
                    sub.classList.add('active');

                    newItem.classList.add('on');
                    newItem.classList.remove('sub-open');
                    
                    searchPlacesByCategory(false);
                });
            });
        });

        function searchPlacesByCategory(shouldUpdateBounds = true, isNextPage = false) {
            if (!window.currCategory) return;
            const ps = new kakao.maps.services.Places();
            const keyword = window.currSubKeyword ? `${window.currSubKeyword}` : '';
            
            // Base options
            const options = {
                sort: kakao.maps.services.SortBy.ACCURACY
            };

            // Only restrict to current view if global search is OFF
            if (!window.isGlobalSearchActive) {
                options.bounds = map.getBounds();
            }

            const catSearchBounds = new kakao.maps.LatLngBounds();

            const callback = (data, status, pagination) => {
                // Remove old 'more' button
                const oldMoreBtn = document.getElementById('map-load-more');
                if (oldMoreBtn) oldMoreBtn.remove();
                
                const isFirstPage = !isNextPage && (!pagination || pagination.current === 1);

                // On first page, clear existing results and markers
                if (isFirstPage) {
                    resultsList.innerHTML = '';
                    markers.forEach(m => m.setMap(null));
                    markers = [];
                }
                isNextPage = false; // reset after first use

                if (status === kakao.maps.services.Status.OK) {
                    data.forEach(place => {
                        // Check if this Kakao result matches a saved place → mark as visited
                        const savedMatch = restaurantData.find(r => {
                            const rn = r.name.replace(/\s/g, '').toLowerCase();
                            const pn = place.place_name.replace(/\s/g, '').toLowerCase();
                            return pn.includes(rn) || rn.includes(pn);
                        });
                        const item = savedMatch || {
                            name: place.place_name,
                            category: place.category_name.split(' > ').pop(),
                            location_large: place.address_name,
                            rate: '카카오맵 데이터'
                        };
                        // Pass global toggle state to extend bounds if active
                        renderSearchResult(item, place, !!savedMatch, catSearchBounds, window.isGlobalSearchActive);
                    });

                    // Move map if global search is active
                    if (window.isGlobalSearchActive) {
                        finalizeSearch(data.length, data.length, catSearchBounds, true);
                    }

                    if (pagination && pagination.hasNextPage) {
                        const moreBtn = document.createElement('button');
                        moreBtn.id = 'map-load-more';
                        moreBtn.className = 'map-more-btn';
                        moreBtn.innerHTML = `검색 결과 더보기 (${pagination.current}/${pagination.last})`;
                        moreBtn.onclick = () => {
                            moreBtn.disabled = true;
                            moreBtn.innerHTML = '불러오는 중...';
                            isNextPage = true;
                            pagination.nextPage();
                        };
                        resultsList.appendChild(moreBtn);
                    }
                } else if (status === kakao.maps.services.Status.ZERO_RESULT && isFirstPage) {
                    resultsList.innerHTML = `<div class="map-empty-state"><p>검색 결과가 없습니다.</p></div>`;
                } else if (status === kakao.maps.services.Status.ERROR && isFirstPage) {
                    resultsList.innerHTML = `<div class="map-empty-state"><p>⚠️ 오류가 발생했습니다.<br>로컬 주소(폴더)에서는 카카오 검색 API가 차단됩니다.<br>깃허브 주소를 이용하시거나 웹 서버를 실행해주세요.</p></div>`;
                }
            };

            if (window.currSubKeyword) {
                ps.keywordSearch(keyword, callback, options);
            } else {
                ps.categorySearch(window.currCategory, callback, options);
            }
        }

        // Logic for official keyword/category sample integration
        if (window.currCategory) {
            searchPlacesByCategory();
            return;
        }

        // --- Mode: Keyword Search (Kakao results only, visited places marked) ---
        if (mapSearchValue) {
            const searchOptions = {
                sort: kakao.maps.services.SortBy.ACCURACY
            };

            if (!window.isGlobalSearchActive) {
                searchOptions.bounds = map.getBounds();
            }

            const keywordSearchBounds = new kakao.maps.LatLngBounds();

            ps.keywordSearch(mapSearchValue, (data, status, pagination) => {
                // Safely determine current page (if pagination doesn't exist, assume first page/error)
                const isFirstPage = !pagination || pagination.current === 1;

                // On first page or error - clear previous
                if (isFirstPage) {
                    resultsList.innerHTML = '';
                    markers.forEach(m => m.setMap(null));
                    markers = [];
                }
                // Remove old 'More' button
                const oldMoreBtn = document.getElementById('map-load-more');
                if (oldMoreBtn) oldMoreBtn.remove();

                if (status === kakao.maps.services.Status.OK) {
                    data.forEach(place => {
                        // Check if this Kakao result matches a saved place → mark as visited
                        // Use stricter matching: exact name or name + location overlap
                        const savedMatch = restaurantData.find(r => {
                            const rn = r.name.replace(/\s/g, '').toLowerCase();
                            const pn = place.place_name.replace(/\s/g, '').toLowerCase();
                            
                            // Exact name match is good
                            if (rn === pn) return true;
                            
                            // If names are similar, check address/location to avoid false positives (e.g. McDonald's)
                            const nameMatch = pn.includes(rn) || rn.includes(pn);
                            if (nameMatch) {
                                const ra = (r.location_large + ' ' + r.location_small).replace(/\s/g, '').toLowerCase();
                                const pa = (place.road_address_name || place.address_name || '').replace(/\s/g, '').toLowerCase();
                                // Check if address contains our broad location or vice versa
                                return pa.includes(ra) || ra.includes(pa) || pa.includes(r.location_small.replace(/\s/g, '').toLowerCase());
                            }
                            return false;
                        });
                        const item = savedMatch || {
                            name: place.place_name,
                            category: place.category_name.split(' > ').pop(),
                            location_large: place.address_name,
                            rate: '카카오맵 데이터'
                        };
                        // Use the correctly scoped keywordSearchBounds
                        renderSearchResult(item, place, !!savedMatch, keywordSearchBounds, window.isGlobalSearchActive);
                    });

                    // Update map view if global search is on
                    finalizeSearch(data.length, data.length, keywordSearchBounds, window.isGlobalSearchActive);

                    if (pagination && pagination.hasNextPage) {
                        const moreBtn = document.createElement('button');
                        moreBtn.id = 'map-load-more';
                        moreBtn.className = 'map-more-btn';
                        moreBtn.innerHTML = `검색 결과 더보기 (${pagination.current}/${pagination.last})`;
                        moreBtn.onclick = () => {
                            moreBtn.disabled = true;
                            moreBtn.innerHTML = '불러오는 중...';
                            pagination.nextPage();
                        };
                        resultsList.appendChild(moreBtn);
                    }
                } else if (status === kakao.maps.services.Status.ZERO_RESULT && isFirstPage) {
                    resultsList.innerHTML = `<div class="map-empty-state"><p>검색 결과가 없습니다.</p></div>`;
                } else if (status === kakao.maps.services.Status.ERROR && isFirstPage) {
                    resultsList.innerHTML = `<div class="map-empty-state"><p>⚠️ 오류가 발생했습니다.<br>로컬 주소(폴더)에서는 카카오 검색 API가 차단됩니다.<br>깃허브 주소를 이용하시거나 서버를 실행해주세요.</p></div>`;
                }
            }, searchOptions);
        }
        // --- Mode: Initial State (Empty search) ---
        else {
            const currentData = getFilteredData().slice(0, 15);
            // No search, no category: show empty state (just the map, no auto-loaded places)
            resultsList.innerHTML = `<div class="map-empty-state"><p>🔍 위에서 검색하거나 카테고리를 선택해보세요.</p></div>`;
        }
    }

    function renderSearchResult(item, place, isSaved, bounds, shouldExtendBounds = false) {
        const resultsList = document.getElementById('map-results-list');
        const coords = new kakao.maps.LatLng(place.y, place.x);
        
        // Create Sidebar Item
        const resultItem = document.createElement('div');
        resultItem.className = `result-item ${isSaved ? 'is-saved' : ''}`;
        resultItem.innerHTML = `
            <h4>${place.place_name || item.name}</h4>
            <p>${place.category_name?.split(' > ').pop() || item.category} • ${place.address_name || item.location_large}</p>
        `;
        resultsList.appendChild(resultItem);

        // Create Marker
        const marker = new kakao.maps.Marker({
            map: map,
            position: coords,
            opacity: isSaved ? 1 : 0.6
        });
        markers.push(marker);
        
        // Only extend bounds if we want to move the map (Global Search active)
        if (shouldExtendBounds) {
            bounds.extend(coords);
        }

        const focusOnPlace = () => {
            map.panTo(coords);
            if (window.currentMapOverlay) window.currentMapOverlay.setMap(null);
            window.currentMapOverlay = new kakao.maps.CustomOverlay({
                position: coords,
                content: `<div class="marker-label ${isSaved ? 'is-saved' : ''}">${place.place_name || item.name}</div>`,
                yAnchor: 2.5
            });
            window.currentMapOverlay.setMap(map);
            // Use place_url from Kakao if available, otherwise fallback to item's map_url
            const detailsUrl = place.place_url || item.map_url;
            showPlaceDetail(item, place.road_address_name || place.address_name, isSaved, detailsUrl, place);
        };

        resultItem.addEventListener('click', focusOnPlace);
        kakao.maps.event.addListener(marker, 'click', focusOnPlace);
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

    function showPlaceDetail(item, preciseAddress, isSaved, placeUrl, placeData) {
        const detailPanel = document.getElementById('map-place-detail');
        const resultsList = document.getElementById('map-results-list');
        
        // Hide list, show detail
        resultsList.style.display = 'none';
        detailPanel.style.display = 'flex';

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
    }
    window.refreshSidebarFilters = refreshSidebarFilters;

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

    // 3. Re-render List, Diary Calendar & Map
    if (window.renderApp) window.renderApp();
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
        resetAllBtn.addEventListener('click', resetAllFilters);
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
    if (typeof restaurantData === 'undefined' || !restaurantData.length) return;

    const totalCount = restaurantData.length;
    let totalVisitsSum = 0;
    let reVisitedCount = 0;
    const regionCounts = {};
    const categoryCounts = {};
    const rateCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    const topVisitedItems = [...restaurantData].sort((a, b) => (b.visit_count || 1) - (a.visit_count || 1));

    restaurantData.forEach(item => {
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
        const spoonCount = (item.rate ? (item.rate.match(/🥄/g) || []).length : 1) || 1;
        rateCounts[spoonCount] = (rateCounts[spoonCount] || 0) + 1;
    });

    // 1. Counter Cards (Full value, no truncation)
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

    // 2. Region List (Top 5 vs All)
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
                <div class="bar-item">
                    <div class="bar-label-row">
                        <span>📍 ${reg}</span>
                        <span class="bar-count">${count}곳 (${pct}%)</span>
                    </div>
                    <div class="bar-track">
                        <div class="bar-fill" style="width: ${pct}%;"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // 3. Category List (Top 5 vs All)
    const btnCat = document.getElementById('btn-toggle-categories');
    if (btnCat) {
        btnCat.textContent = showAllCategories ? '접기 ▲' : '전체 ▼';
    }
    const displayCategories = showAllCategories ? sortedCats : sortedCats.slice(0, 5);
    const categoryContainer = document.getElementById('insights-category-list');
    if (categoryContainer) {
        categoryContainer.innerHTML = displayCategories.map(([cat, count]) => {
            const pct = Math.round((count / totalCount) * 100);
            return `
                <div class="bar-item">
                    <div class="bar-label-row">
                        <span>🍚 ${cat}</span>
                        <span class="bar-count">${count}곳 (${pct}%)</span>
                    </div>
                    <div class="bar-track">
                        <div class="bar-fill" style="width: ${pct}%;"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // 4. Rate Distribution
    const rateContainer = document.getElementById('insights-rate-list');
    if (rateContainer) {
        const rateKeys = [5, 4, 3, 2, 1];
        rateContainer.innerHTML = rateKeys.map(r => {
            const count = rateCounts[r] || 0;
            const pct = Math.round((count / totalCount) * 100);
            return `
                <div class="bar-item">
                    <div class="bar-label-row">
                        <span>🥄 ${r}개 평점</span>
                        <span class="bar-count">${count}곳 (${pct}%)</span>
                    </div>
                    <div class="bar-track">
                        <div class="bar-fill" style="width: ${pct}%;"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // 5. Hall of Fame (Top 5 vs All Visited Places)
    const visitedOnlyPlaces = topVisitedItems.filter(item => (item.visit_count || 1) >= 2);
    const btnTop = document.getElementById('btn-toggle-top-places');
    if (btnTop) {
        btnTop.textContent = showAllTopPlaces ? '접기 ▲' : '전체 ▼';
    }
    const displayPlaces = showAllTopPlaces ? visitedOnlyPlaces : visitedOnlyPlaces.slice(0, 5);
    const topPlacesContainer = document.getElementById('insights-top-places-list');
    if (topPlacesContainer) {
        topPlacesContainer.innerHTML = displayPlaces.map((item, idx) => {
            const spoonCount = (item.rate ? (item.rate.match(/🥄/g) || []).length : 1) || 1;
            const visits = item.visit_count || 1;
            return `
                <div class="rank-item">
                    <div class="rank-left">
                        <span class="rank-num">#${idx + 1}</span>
                        <div>
                            <div class="rank-name">${item.name}</div>
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

function initSommelierTab() {
    if (sommelierInitialized) return;
    sommelierInitialized = true;

    const thread = document.getElementById('sommelier-chat-thread');
    const input = document.getElementById('sommelier-user-input');
    const sendBtn = document.getElementById('btn-send-sommelier');
    const keyInput = document.getElementById('gemini-api-key-input');
    const saveKeyBtn = document.getElementById('btn-save-gemini-key');
    const keyStatus = document.getElementById('gemini-key-status');

    if (!thread || !input || !sendBtn) return;

    // Load saved Gemini Key
    const savedKey = localStorage.getItem('spoonmap_gemini_key') || '';
    if (keyInput) keyInput.value = savedKey;
    if (keyStatus) {
        keyStatus.innerHTML = savedKey 
            ? `<b style="color:#10B981;">✅ Google Gemini AI 연동 완료</b>`
            : `💡 API Key 미입력 시에도 스마트 의도 파서가 개수/출처/코스를 동적 분석합니다.`;
    }

    if (saveKeyBtn) {
        saveKeyBtn.addEventListener('click', () => {
            const val = keyInput ? keyInput.value.trim() : '';
            if (val) {
                localStorage.setItem('spoonmap_gemini_key', val);
                alert('🔑 Gemini API Key가 저장되었습니다! 이제 자유 대화형 LLM으로 동작합니다.');
                if (keyStatus) keyStatus.innerHTML = `<b style="color:#10B981;">✅ Google Gemini AI 연동 완료</b>`;
            } else {
                localStorage.removeItem('spoonmap_gemini_key');
                alert('API Key가 제거되었습니다. 기본 스마트 파서 모드로 전환됩니다.');
                if (keyStatus) keyStatus.innerHTML = `💡 API Key 미입력 시에도 스마트 의도 파서가 개수/출처/코스를 동적 분석합니다.`;
            }
        });
    }

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
                안녕하세요! 1,100개 미식 데이터 및 카카오 지도 API와 연동된 <b>AI 미식 소믈리에</b>입니다 🍷✨<br><br>
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
        <div class="chat-bubble">🍷 요청 조건(개수·출처·코스) 정밀 분석 중...</div>
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
    const q = query.toLowerCase();
    let targetLoc = null;
    let targetLocDisplay = null;

    // Location: search longer/more-specific entries first (already ordered)
    for (const loc of KOREA_LOCATIONS) {
        if (q.includes(loc.key.toLowerCase())) {
            targetLoc = loc.key;
            targetLocDisplay = loc.display;
            break;
        }
    }

    let mainCat = null;
    let mainCatDisplay = null;
    let catDescFn = null;

    // Category: more-specific first
    for (const cat of FOOD_CATEGORIES) {
        if (q.includes(cat.key.toLowerCase())) {
            mainCat = cat.key;
            mainCatDisplay = cat.display;
            catDescFn = cat.desc;
            break;
        }
    }

    return { targetLoc, targetLocDisplay, mainCat, mainCatDisplay, catDescFn };
}

function processSommelierQuery(query, callback) {
    const q = query.toLowerCase();
    const geminiKey = localStorage.getItem('spoonmap_gemini_key');

    // ─── Number & Step Detection ───
    const has1cha = query.includes('1차');
    const has2cha = query.includes('2차');
    const isMultiCourse = has1cha && has2cha;

    // ─── 1차/2차 각각의 숫자 추출 ───
    // "1차 고기집 1곳" "1차 3곳" "1차 두곳" 등 모두 처리
    // 1차 이후 ~ 2차(또는 문장 끝) 사이에서 숫자 단어 찾기
    function extractStepCount(text, stepTag) {
        const afterStep = text.split(stepTag)[1] || '';
        // 다음 차(ex: 2차)가 나오면 거기서 자름
        const nextStep = afterStep.split(/[12]차/)[0];
        const numMatch = nextStep.match(/([두세네다섯여섯일이삼사오육칠팔구십1-9]+)\s*(곳|개)/i);
        if (numMatch) return parseKoreanNumber(numMatch[1]) || null;
        return null;
    }

    const step1Req = has1cha ? (extractStepCount(query, '1차') || 2) : null;
    const step2Req = has2cha ? (extractStepCount(query, '2차') || 2) : null;

    // 전체 개수: 1차+2차면 합산, 아니면 첫 번째 "X곳/개" 매칭
    let totalReq;
    if (isMultiCourse) {
        totalReq = (step1Req || 2) + (step2Req || 2);
    } else {
        const mTotal = query.match(/([두세네다섯여섯일이삼사오육칠팔구십1-9]+)\s*(곳|개|선)/i);
        totalReq = mTotal ? (parseKoreanNumber(mTotal[1]) || 2) : 2;
    }

    // ─── Location & Category Extraction ───
    let { targetLoc, targetLocDisplay, mainCat, mainCatDisplay, catDescFn } = extractLocationAndCategory(query);

    // 사전에 없는 지역도 커버: "[도시명]역/시/군/구/동" 패턴으로 raw 추출
    if (!targetLocDisplay) {
        const rawMatch = query.match(/([가-힣]{1,5})(역|시|군)\b/);
        if (rawMatch) {
            targetLocDisplay = rawMatch[1]; // e.g. "청주역" → "청주"
        }
    }

    // 기본값 '서울' 제거 → 지역 불명확하면 카테고리만으로 검색
    const locSearch = targetLocDisplay || '';
    const locDisplay = targetLocDisplay || '요청하신 지역';

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
    const hasLocalKeywords = q.includes('내 맛집') || q.includes('내가 간') || q.includes('단골') || q.includes('저장된') || q.includes('내 데이터');
    let sourcePref = 'both';
    if (hasKakaoKeywords && !hasLocalKeywords) sourcePref = 'kakao_only';
    else if (hasLocalKeywords && !hasKakaoKeywords) sourcePref = 'local_only';

    // ─── Gemini LLM Logic ───
    if (geminiKey) {
        // 1차/2차 각각 카카오 검색 키워드
        const kw1 = `${locSearch} ${cat1Display || (isMultiCourse ? '맛집' : (mainCatDisplay || '맛집'))}`;
        const kw2 = `${locSearch} ${cat2Display || '술집'}`;
        const kwSingle = `${locSearch} ${mainCatDisplay || '맛집'}`;

        // 지역이 특정된 경우만 로컬 후보 포함. 지역 불명확하면 빈 배열 → Gemini가 서울 기준으로 오답 내는 것 방지
        const localCandidates = targetLocDisplay
            ? restaurantData.filter(item => {
                const addr = (item.location_large || '') + (item.address || '');
                return addr.includes(targetLocDisplay) || (locSearch && addr.includes(locSearch));
              }).slice(0, 8)
            : [];


        function queryGemini(kakaoPlaces1 = [], kakaoPlaces2 = []) {
            // 1차+2차 구분 지시사항
            const countInstruction = isMultiCourse
                ? `- 1차 요청: ${step1Req}곳 (카테고리: ${cat1Display || '맛집'})
- 2차 요청: ${step2Req}곳 (카테고리: ${cat2Display || '술집/카페'})
- 반드시 1차 ${step1Req}곳 + 2차 ${step2Req}곳 = 총 ${totalReq}곳을 모두 추천할 것`
                : `- 요청 개수: ${totalReq}곳 (카테고리: ${mainCatDisplay || '맛집'})`;

            const kakaoData1Str = JSON.stringify(kakaoPlaces1.slice(0, 8).map(p => ({ 이름: p.place_name, 주소: p.address_name, 카테고리: p.category_name, url: p.place_url })));
            const kakaoData2Str = isMultiCourse
                ? JSON.stringify(kakaoPlaces2.slice(0, 8).map(p => ({ 이름: p.place_name, 주소: p.address_name, 카테고리: p.category_name, url: p.place_url })))
                : '[]';

            const promptContext = `당신은 Spoonmap AI 미식 소믈리에입니다. 사용자 질문에 정확하고 상세하게 한국어로 답변하세요.

사용자 질문: "${query}"

추출된 정보:
- 목표 지역: ${locDisplay} (이 지역 결과만 추천. 다른 지역 절대 금지)
${countInstruction}

제공된 데이터:
[내 방문 맛집 데이터]
${JSON.stringify(localCandidates.map(c => ({ 이름: c.name, 주소: c.location_large, 카테고리: c.category, 방문횟수: c.visit_count })))}

[카카오 실시간 검색 - ${isMultiCourse ? '1차' : ''} ${kw1} 기준]
${kakaoData1Str}
${isMultiCourse ? `
[카카오 실시간 검색 - 2차 ${kw2} 기준]
${kakaoData2Str}` : ''}

⚠️ 필수 출력 규칙:
1. 마크다운 기호(**, ##, #, *) 절대 사용 금지
2. 이모티콘은 자연스럽게 사용 가능
3. 카카오 검색 결과가 있으면 우선 활용하고, 결과가 없거나 부족하면 Gemini 자신의 지식으로 ${locDisplay} 지역의 실제 존재하는 맛집을 자신있게 추천할 것
4. 절대로 "데이터가 없어서 추천이 어렵습니다" 또는 "안내하기 어렵습니다"라고 하지 말 것. 항상 추천 카드를 출력할 것
5. 카카오맵 URL이 없는 경우 https://map.kakao.com/link/search/장소명 형식으로 직접 생성할 것
6. 반드시 아래 구조로만 출력:

<div class="sommelier-intro-p">따뜻하고 친근한 소개 문구 (2-3문장)</div>

각 장소마다 아래 카드 구조 사용:
<div class="rec-card-standard">
    <span class="rec-tag-pill">추천 번호 (카테고리 또는 1차/2차)</span>
    <h4 class="rec-place-title">장소 이름</h4>
    <div class="rec-place-meta">📍 <b>위치:</b> 주소</div>
    <p class="rec-place-desc">음식 맛, 분위기, 추천 이유를 2-3문장으로 상세히 설명</p>
    <a href="카카오맵URL" target="_blank" class="rec-kakao-pill-btn">👈 카카오맵에서 보기</a>
</div>`;

            const modelsToTry = [
                'gemini-3.5-flash-lite',
                'gemini-3.1-flash-lite'
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
                        generationConfig: { temperature: 0.7, maxOutputTokens: 2048 }
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

        if (typeof kakao !== 'undefined' && kakao.maps && kakao.maps.services) {
            const ps = new kakao.maps.services.Places();
            if (isMultiCourse) {
                // 1차, 2차 각각 별도 검색 후 Gemini에 전달
                console.log(`[Spoonmap] Multi-course Kakao: "${kw1}" + "${kw2}"`);
                ps.keywordSearch(kw1, (d1, s1) => {
                    const p1 = s1 === kakao.maps.services.Status.OK ? d1 : [];
                    ps.keywordSearch(kw2, (d2, s2) => {
                        const p2 = s2 === kakao.maps.services.Status.OK ? d2 : [];
                        console.log(`[Spoonmap] 1차 results: ${p1.length}, 2차 results: ${p2.length}`);
                        queryGemini(p1, p2);
                    });
                });
            } else {
                console.log(`[Spoonmap] Kakao search: "${kwSingle}"`);
                ps.keywordSearch(kwSingle, (data, status) => {
                    const places = status === kakao.maps.services.Status.OK ? data : [];
                    console.log(`[Spoonmap] Kakao returned ${places.length} results`);
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

        // Refresh Sidebar Filter Buttons
        if (window.refreshSidebarFilters) {
            window.refreshSidebarFilters();
        }

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
