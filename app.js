function getSpoonBadgeHtml(item) {
    if (!item || item.isExternal || item.visit_count === 0 || !item.rate) {
        return '';
    }
    const spoonCount = (item.rate.match(/🥄/g) || []).length || 1;
    const visits = item.visit_count || 1;
    
    let tierClass = '';
    let visitTagHtml = '';

    if (visits >= 10) {
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
        <span class="spoon-badge rate-${spoonCount} ${tierClass}" title="수저 평점 ${spoonCount}개${visits >= 2 ? ` · 또간집 ${visits}회 방문` : ''}">
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

    const grid = document.getElementById('restaurant-grid');
    const categoryFilterGroup = document.getElementById('category-filters');
    const locationLargeFilterGroup = document.getElementById('location-large-filters');
    const locationSmallFilterGroup = document.getElementById('location-small-filters');
    const smallLocSection = document.getElementById('small-location-section');
    const searchInput = document.getElementById('restaurant-search');
    const btnMoreLocation = document.getElementById('btn-more-location');
    const btnCollapseLocation = document.getElementById('btn-collapse-location');
    const moreLocContainer = document.getElementById('location-more-container');

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
        render();
    }

    function setupTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn, .mobile-tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        const mobileTabsMenu = document.getElementById('mobile-tabs-menu');
        const mobileFilterBtn = document.getElementById('mobile-filter-toggle-btn');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.dataset.tab;
                
                // Set active state for all buttons corresponding to this tab
                tabBtns.forEach(b => {
                    if (b.dataset.tab === targetTab) {
                        b.classList.add('active');
                    } else {
                        b.classList.remove('active');
                    }
                });

                // Toggle filter button visibility (only show in list view)
                if (mobileFilterBtn) {
                    mobileFilterBtn.style.display = targetTab === 'list' ? 'block' : 'none';
                }
                
                // Close dropdown on mobile
                if (mobileTabsMenu) {
                    mobileTabsMenu.classList.remove('open');
                }

                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === `${targetTab}-view`) {
                        content.classList.add('active');
                    }
                });

                if (targetTab === 'map') {
                    initMap();
                } else if (targetTab === 'insights') {
                    computeAndRenderFoodInsights();
                } else if (targetTab === 'sommelier') {
                    initSommelierTab();
                }
            });
        });
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
            map.setCenter(coords);
            map.setLevel(4);
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
                <button class="back-to-list-btn" onclick="document.getElementById('map-results-list').style.display='block'; document.getElementById('map-place-detail').style.display='none';">
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

    function setupFilters() {
        const categories = new Set();
        const locationCounts = {};

        restaurantData.forEach(item => {
            if (item.category) {
                item.category.split(',').forEach(cat => categories.add(cat.trim()));
            }
            if (item.location_large) {
                locationCounts[item.location_large] = (locationCounts[item.location_large] || 0) + 1;
            }
        });

        // Sorted Categories
        Array.from(categories).sort().forEach(cat => {
            categoryFilterGroup.appendChild(createFilterBtn('category', cat));
        });

        // Sorted Locations by Count
        sortedLocationsLarge = Object.entries(locationCounts)
            .sort((a, b) => b[1] - a[1]) // Descending count
            .map(entry => entry[0]);

        renderLocationButtons();

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
    }

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
        restaurantData.forEach(item => {
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

    function render() {
        // Filter search targets
        const useName = document.getElementById('search-name').checked;
        const useCat = document.getElementById('search-category').checked;
        const useSub = document.getElementById('search-subloc').checked;
        const useMenu = document.getElementById('search-menu').checked;

        let filtered = restaurantData.filter(item => {
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

            return catMatch && largeMatch && smallMatch && rateMatch && searchMatch;
        });

        // Multi-level Sort Execution
        if (currentSorts.length > 0) {
            filtered.sort((a, b) => {
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
                return 0;
            });
        }

        // Grid
        grid.innerHTML = '';
        filtered.forEach(item => {
            grid.appendChild(createCard(item));
        });

        // Sync map markers only if map tab is currently active
        const mapView = document.getElementById('map-view');
        if (map && mapView && mapView.classList.contains('active')) updateMapMarkers();
    }

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

    function createCard(item) {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        
        // Count spoons or format rate
        const spoonCount = (item.rate.match(/🥄/g) || []).length || 1;
        const menuTagsHtml = item.menu && item.menu.length > 0 
            ? item.menu.slice(0, 3).map(m => `<span class="menu-chip">🏷️ ${m}</span>`).join('') 
            : '';

        const naverQuery = encodeURIComponent(item.location_small ? item.location_small.split('/').pop().trim() + ' ' + item.name : item.name);
        const kakaoUrl = item.map_url || `https://map.kakao.com/link/search/${encodeURIComponent(item.name)}`;

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

        // Mobile: tap opens bottom-sheet overlay instead of navigating
        card.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                openMobileOverlay(item);
            }
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

// ─── Mobile Card Overlay Functions (global scope) ────
function openMobileOverlay(item) {
    const overlay = document.getElementById('mobile-card-overlay');
    const content = document.getElementById('mobile-card-detail-content');
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
}

function closeMobileOverlay() {
    document.getElementById('mobile-card-overlay').classList.remove('open');
    document.body.style.overflow = '';
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
        .replace(/```/gi, '')
        .replace(/---/g, '')
        .replace(/###/g, '')
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        .replace(/\*(.*?)\*/g, '$1')
        .replace(/#+/g, '')
        .trim();
}

function processSommelierQuery(query, callback) {
    const q = query.toLowerCase();
    const geminiKey = localStorage.getItem('spoonmap_gemini_key');

    // 1. Detect Requested Counts
    const m1 = query.match(/1차\s*([0-9]+)\s*곳/i) || query.match(/1차\s*([0-9]+)\s*개/i);
    const m2 = query.match(/2차\s*([0-9]+)\s*곳/i) || query.match(/2차\s*([0-9]+)\s*개/i);
    const mTotal = query.match(/([0-9]+)\s*곳/i) || query.match(/([0-9]+)\s*개/i) || query.match(/([0-9]+)\s*선/i);

    const step1Req = m1 ? parseInt(m1[1], 10) : null;
    const step2Req = m2 ? parseInt(m2[1], 10) : null;
    const totalReq = mTotal ? parseInt(mTotal[1], 10) : 3;

    // 2. Detect Source Preference
    const hasKakaoKeywords = q.includes('카카오') || q.includes('실시간') || q.includes('안가본') || q.includes('새로운');
    const hasLocalKeywords = q.includes('내 맛집') || q.includes('내가 간') || q.includes('단골') || q.includes('저장된') || q.includes('내 데이터');
    
    let sourcePref = 'both';
    if (hasKakaoKeywords && !hasLocalKeywords) sourcePref = 'kakao_only';
    else if (hasLocalKeywords && !hasKakaoKeywords) sourcePref = 'local_only';

    // 3. Detect Location & Category
    let targetLoc = null;
    const locations = ['마포구', '서대문구', '강서구', '용산구', '영등포구', '강남', '홍대', '신촌', '연남', '여의도', '종로'];
    for (const loc of locations) {
        if (q.includes(loc.toLowerCase())) {
            targetLoc = loc;
            break;
        }
    }

    let targetCat = null;
    const categories = ['한식', '일식', '양식', '중식', '고기', '갈비', '삼겹살', '냉면', '카페', '술집', '안주', '국물', '피자', '초밥', '치킨', '간식'];
    for (const cat of categories) {
        if (q.includes(cat.toLowerCase())) {
            targetCat = cat;
            break;
        }
    }

    // ─── Direct Gemini LLM API Logic (if key present) ───
    if (geminiKey) {
        const localCandidates = restaurantData.filter(i => (!targetLoc || i.location_large.includes(targetLoc))).slice(0, 5);
        const searchKeyword = `${targetLoc || '서울'} ${targetCat || '맛집'}`.trim();

        function queryGemini(kakaoPlaces = []) {
            const promptContext = `
You are Spoonmap AI Gourmet Sommelier (미식 소믈리에).
Answer the user's prompt in polite Korean.

CRITICAL UI & FORMATTING RULES:
1. DO NOT output markdown symbols like '***', '###', '---', or '#'.
2. Wrap your initial introduction in: <div class="sommelier-intro-text">...intro...</div>
3. Wrap all restaurant recommendation cards in: <div class="sommelier-rec-grid">...cards...</div>
4. For EACH recommended place, you MUST use this EXACT clean card structure (Image 2 style):

<div class="sommelier-rec-card">
    <span class="sommelier-card-badge">추천 [번호 또는 구분]</span>
    <h3 class="sommelier-card-title">[식당 이름]</h3>
    <div class="sommelier-card-info">📍 위치: [위치 정보]</div>
    <div class="sommelier-card-desc">[식당 특징 및 메뉴/분위기 추천 이유]</div>
    <div class="sommelier-card-action">
        <a href="[카카오맵 URL]" target="_blank" class="sommelier-card-link">👉 카카오맵에서 보기</a>
    </div>
</div>

User Question: "${query}"

User Constraints to strictly enforce:
- Requested Source: ${sourcePref}
- Step 1 count: ${step1Req || 'N/A'}, Step 2 count: ${step2Req || 'N/A'}, Total count: ${totalReq}

Available Local Saved Dataset:
${JSON.stringify(localCandidates.map(c => ({ name: c.name, location: c.location_large, category: c.category, visits: c.visit_count })))}

Available Live Kakao Places:
${JSON.stringify(kakaoPlaces.map(p => ({ name: p.place_name, address: p.address_name, category: p.category_name, url: p.place_url })))}
`;

            const modelsToTry = ['gemini-3.5-flash', 'gemini-3-flash', 'gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash'];
            function attemptModel(idx) {
                if (idx >= modelsToTry.length) {
                    fallbackParserEngine(kakaoPlaces);
                    return;
                }
                const model = modelsToTry[idx];
                fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ contents: [{ parts: [{ text: promptContext }] }] })
                })
                .then(res => res.json())
                .then(data => {
                    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                        let textRes = data.candidates[0].content.parts[0].text;
                        textRes = cleanMarkdownText(textRes);
                        callback({ html: textRes });
                    } else {
                        attemptModel(idx + 1);
                    }
                })
                .catch(err => {
                    attemptModel(idx + 1);
                });
            }

            attemptModel(0);
        }

        if (typeof kakao !== 'undefined' && kakao.maps && kakao.maps.services) {
            const ps = new kakao.maps.services.Places();
            ps.keywordSearch(searchKeyword, (data, status) => {
                queryGemini(status === kakao.maps.services.Status.OK ? data : []);
            });
        } else {
            queryGemini([]);
        }
        return;
    }

    // ─── Smart Intent & Constraint Parser (No Key Fallback) ───
    const searchKeyword = `${targetLoc || '서울'} ${targetCat || '맛집'}`.trim();
    if (typeof kakao !== 'undefined' && kakao.maps && kakao.maps.services) {
        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(searchKeyword, (data, status) => {
            fallbackParserEngine(status === kakao.maps.services.Status.OK ? data : []);
        });
    } else {
        fallbackParserEngine([]);
    }

    function fallbackParserEngine(kakaoPlaces = []) {
        let localPool = restaurantData.filter(item => {
            if (!item.map_url) return false;
            if (targetLoc && !item.location_large.includes(targetLoc) && (!item.location_small || !item.location_small.includes(targetLoc))) return false;
            if (targetCat) {
                const catMatches = (item.category && item.category.toLowerCase().includes(targetCat)) ||
                                   (item.menu && item.menu.some(m => m.toLowerCase().includes(targetCat))) ||
                                   (item.name.toLowerCase().includes(targetCat));
                if (!catMatches) return false;
            }
            return true;
        });

        if (localPool.length === 0 && targetLoc) localPool = restaurantData.filter(item => item.location_large.includes(targetLoc));
        if (localPool.length === 0) localPool = [...restaurantData];
        localPool.sort((a, b) => (b.visit_count || 1) - (a.visit_count || 1));

        const renderStepCards = (list, defaultTag) => list.map((item, idx) => `
            <div class="sommelier-rec-card">
                <span class="sommelier-card-badge">${defaultTag || '추천 ' + (idx + 1)}</span>
                <h3 class="sommelier-card-title">${item.name}</h3>
                <div class="sommelier-card-info">📍 위치: ${item.addr}</div>
                <div class="sommelier-card-desc">카테고리: ${item.cat} · ${item.isKakao ? '카카오 지도 실시간 인기 추천 식당입니다.' : '내가 다녀온 찐 단골 검증 맛집입니다.'}</div>
                ${item.url ? `
                    <div class="sommelier-card-action">
                        <a href="${item.url}" target="_blank" class="sommelier-card-link">👉 카카오맵에서 보기</a>
                    </div>
                ` : ''}
            </div>
        `).join('');

        if (step1Req || step2Req) {
            const count1 = step1Req || 2;
            const count2 = step2Req || 2;

            let step1List = [];
            let step2List = [];

            if (sourcePref === 'kakao_only') {
                const foodPlaces = kakaoPlaces.filter(p => !p.category_name || (!p.category_name.includes('카페') && !p.category_name.includes('술집')));
                const cafePlaces = kakaoPlaces.filter(p => p.category_name && (p.category_name.includes('카페') || p.category_name.includes('술집') || p.category_name.includes('주점')));
                
                step1List = (foodPlaces.length >= count1 ? foodPlaces : kakaoPlaces).slice(0, count1).map(p => ({
                    name: p.place_name,
                    addr: p.road_address_name || p.address_name,
                    cat: p.category_name ? p.category_name.split('>').pop().trim() : '음식점',
                    url: p.place_url || `https://map.kakao.com/link/map/${p.id}`,
                    isKakao: true
                }));

                step2List = (cafePlaces.length >= count2 ? cafePlaces : kakaoPlaces.slice(count1)).slice(0, count2).map(p => ({
                    name: p.place_name,
                    addr: p.road_address_name || p.address_name,
                    cat: p.category_name ? p.category_name.split('>').pop().trim() : '카페/술집',
                    url: p.place_url || `https://map.kakao.com/link/map/${p.id}`,
                    isKakao: true
                }));
            } else if (sourcePref === 'local_only') {
                step1List = localPool.slice(0, count1).map(item => ({
                    name: item.name,
                    addr: `${item.location_large} ${item.location_small || ''}`,
                    cat: item.category || '한식',
                    url: item.map_url,
                    isKakao: false
                }));
                step2List = localPool.slice(count1, count1 + count2).map(item => ({
                    name: item.name,
                    addr: `${item.location_large} ${item.location_small || ''}`,
                    cat: item.category || '카페/술집',
                    url: item.map_url,
                    isKakao: false
                }));
            } else {
                step1List = localPool.slice(0, count1).map(item => ({
                    name: item.name,
                    addr: `${item.location_large} ${item.location_small || ''}`,
                    cat: item.category || '식당',
                    url: item.map_url,
                    isKakao: false
                }));
                step2List = kakaoPlaces.slice(0, count2).map(p => ({
                    name: p.place_name,
                    addr: p.road_address_name || p.address_name,
                    cat: p.category_name ? p.category_name.split('>').pop().trim() : '카페/술집',
                    url: p.place_url || `https://map.kakao.com/link/map/${p.id}`,
                    isKakao: true
                }));
            }

            const html = `
                <div class="sommelier-intro-text">
                    안녕하세요! 요청하신 조건에 맞춰 <b>1차 식당 ${step1List.length}곳 + 2차 카페/술집 ${step2List.length}곳</b>으로 구성된 미식 코스를 추천해 드립니다.
                </div>
                <div class="sommelier-rec-grid">
                    ${renderStepCards(step1List, '1차 식사 코스')}
                    ${renderStepCards(step2List, '2차 디저트/술집 코스')}
                </div>
            `;
            callback({ html });
            return;
        }

        const targetCount = totalReq;
        let chosenList = [];

        if (sourcePref === 'kakao_only') {
            chosenList = kakaoPlaces.slice(0, targetCount).map(p => ({
                name: p.place_name,
                addr: p.road_address_name || p.address_name,
                cat: p.category_name ? p.category_name.split('>').pop().trim() : '음식점',
                url: p.place_url || `https://map.kakao.com/link/map/${p.id}`,
                isKakao: true
            }));
        } else if (sourcePref === 'local_only') {
            chosenList = localPool.slice(0, targetCount).map(item => ({
                name: item.name,
                addr: `${item.location_large} ${item.location_small || ''}`,
                cat: item.category || '기타',
                url: item.map_url,
                isKakao: false
            }));
        } else {
            const localPart = localPool.slice(0, Math.ceil(targetCount / 2)).map(item => ({
                name: item.name,
                addr: `${item.location_large} ${item.location_small || ''}`,
                cat: item.category || '기타',
                url: item.map_url,
                isKakao: false
            }));
            const kakaoPart = kakaoPlaces.slice(0, Math.floor(targetCount / 2)).map(p => ({
                name: p.place_name,
                addr: p.road_address_name || p.address_name,
                cat: p.category_name ? p.category_name.split('>').pop().trim() : '음식점',
                url: p.place_url || `https://map.kakao.com/link/map/${p.id}`,
                isKakao: true
            }));
            chosenList = [...localPart, ...kakaoPart];
        }

        const html = `
            <div class="sommelier-intro-text">
                안녕하세요! 요청하신 조건에 맞춰 <b>추천 맛집 ${chosenList.length}곳</b>을 엄선해드립니다.
            </div>
            <div class="sommelier-rec-grid">
                ${renderStepCards(chosenList, null)}
            </div>
        `;
        callback({ html });
    }
}
