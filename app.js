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

        if (!spinBtn) return;

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

            // Prepare slot reel items (random dummy items + winner at end)
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
                        <span class="loc-badge">${item.location_large}</span>
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

            if (isKakaoAll) {
                // Search Kakao Map Places API live
                if (typeof kakao === 'undefined' || !kakao.maps || !kakao.maps.services) {
                    alert('카카오 지도 API를 불러오는 중입니다. 잠시 후 다시 시도해 주세요.');
                    return;
                }

                const spinTextEl = spinBtn.querySelector('.spin-text');
                if (spinTextEl) spinTextEl.textContent = '🔍 카카오 지도 탐색 중...';
                spinBtn.disabled = true;

                const locText = selectedLoc !== 'all' ? selectedLoc : '서울';
                const catText = selectedCat !== 'all' ? selectedCat : '맛집';
                const searchKeyword = `${locText} ${catText}`.trim();

                const ps = new kakao.maps.services.Places();
                ps.keywordSearch(searchKeyword, (data, status) => {
                    spinBtn.disabled = false;
                    if (spinTextEl) spinTextEl.textContent = '오늘 뭐 먹지? 뽑기!';

                    if (status === kakao.maps.services.Status.OK && data && data.length > 0) {
                        const candidates = data.map(place => ({
                            name: place.place_name,
                            category: place.category_name ? place.category_name.split('>').pop().trim() : (selectedCat !== 'all' ? selectedCat : '음식점'),
                            location_large: place.address_name ? place.address_name.split(' ').slice(0, 2).join(' ') : (selectedLoc !== 'all' ? selectedLoc : '지역 정보'),
                            location_small: place.road_address_name || place.address_name || '',
                            rate: '',
                            map_url: place.place_url || `https://map.kakao.com/link/map/${place.id}`,
                            visit_count: 0,
                            isExternal: true,
                            menu: [place.phone ? `📞 ${place.phone}` : '카카오 지도 추천 식당']
                        }));
                        runSpinAnimation(candidates);
                    } else {
                        alert(`'${searchKeyword}' 카카오 지도 검색 결과가 없습니다. 지역이나 카테고리를 변경해 보세요!`);
                    }
                });
                return;
            }

            // Normal search from visited places (restaurantData)
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

            runSpinAnimation(candidates);
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

    function fetchPlaceFoodPhotos(placeName, categoryName, containerEl) {
        if (!containerEl) return;
        containerEl.innerHTML = `<div class="photo-loading-skeleton">📷 대표 음식 사진 찾는 중...</div>`;

        const cleanName = placeName.replace(/본점|지점|점$/g, '').trim();
        const query = `${cleanName} 음식`.trim();
        const url = `https://dapi.kakao.com/v2/search/image?query=${encodeURIComponent(query)}&size=5`;

        fetch(url, {
            headers: {
                'Authorization': 'KakaoAK 36e745d970cf6ee083e08a59ebf3c951'
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data && data.documents && data.documents.length > 0) {
                const docs = data.documents;
                const mainImgUrl = docs[0].image_url || docs[0].thumbnail_url;

                let thumbsHtml = '';
                if (docs.length > 1) {
                    thumbsHtml = `
                        <div class="photo-thumb-list">
                            ${docs.map((doc, idx) => `
                                <img class="thumb-img ${idx === 0 ? 'active' : ''}" 
                                     src="${doc.thumbnail_url}" 
                                     alt="음식 사진 ${idx + 1}"
                                     onclick="
                                         const hero = this.closest('.detail-photo-gallery').querySelector('.main-photo-hero img');
                                         if(hero) hero.src = '${doc.image_url || doc.thumbnail_url}';
                                         this.parentElement.querySelectorAll('.thumb-img').forEach(t=>t.classList.remove('active'));
                                         this.classList.add('active');
                                     ">
                            `).join('')}
                        </div>
                    `;
                }

                containerEl.innerHTML = `
                    <div class="main-photo-hero">
                        <img id="gallery-main-img" src="${mainImgUrl}" alt="${placeName} 대표 사진" onerror="this.src='${docs[0].thumbnail_url}'">
                    </div>
                    ${thumbsHtml}
                `;
            } else {
                containerEl.style.display = 'none';
            }
        })
        .catch(err => {
            console.error('Error fetching food photo:', err);
            containerEl.style.display = 'none';
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
        
        // If it's a saved item, show Spoon scores. If not, explain that rating is on Kakao Map.
        const ratingHtml = isSaved 
            ? `<div class="info-label">맛집 등급 (나의 평점 & 또간집 횟수)</div>
               <div class="info-val rating-val" style="display:flex; align-items:center; gap:8px; margin-top:4px;">
                   ${getSpoonBadgeHtml(item)}
               </div>`
            : `<div class="info-label">별점 (카카오맵 데이터)</div><div class="info-val rating-notice">별점/리뷰는 아래 상세 버튼을 눌러 확인해 주세요.</div>`;

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
                        <div class="info-label">주소</div>
                        <div class="info-val">${preciseAddress || displayAddress}</div>
                    </div>
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
