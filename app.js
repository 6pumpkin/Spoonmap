document.addEventListener('DOMContentLoaded', () => {
    let currentFilters = {
        category: 'all',
        location_large: 'all',
        location_small: 'all',
        rate: 'all',
        searchQuery: ''
    };
    let currentSort = 'default';
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
            ? `<label>맛집 등급 (나의 평점)</label><span>${item.rate} 수저 (종합 포인트)</span>`
            : `<label>별점 (카카오맵 데이터)</label><span style="color:var(--accent-color); font-weight:700;">별점/리뷰는 아래 상세 버튼을 눌러 확인해 주세요.</span>`;

        // Get category emoji
        const categoryEmoji = getEmoji(placeData?.category_name || item.category);
        // Use detailed category for new places if available
        const displayCategory = placeData?.category_name || item.category;

        detailPanel.innerHTML = `
            <div class="detail-body">
                <button onclick="document.getElementById('map-results-list').style.display='block'; document.getElementById('map-place-detail').style.display='none';" 
                        style="border:none; background:none; color:var(--accent-color); cursor:pointer; margin-bottom:15px; font-size:0.9rem; font-weight:600; padding:0;">
                    ← 목록으로 돌아가기
                </button>
                <h3>${item.name}</h3>
                <div class="detail-tags">
                    <span class="tag">${displayCategory}</span>
                    <span class="tag">${item.location_large}</span>
                </div>
                
                <div class="detail-info-list">
                    <div class="info-item">
                        <div class="info-text">
                            <label>주소</label>
                            <span>${preciseAddress}</span>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="info-text">
                            ${ratingHtml}
                        </div>
                    </div>
                </div>

                <div class="map-link-container">
                    <a href="https://map.naver.com/p/search/${encodeURIComponent(item.location_small ? item.location_small.split('/').pop().trim() + ' ' + item.name : item.name)}" target="_blank" class="naver-link-btn">
                        네이버 지도
                    </a>
                    <a href="${finalUrl}" target="_blank" class="kakao-link-btn">
                        카카오맵
                    </a>
                </div>
            </div>
        `;
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
            const catMatch = currentFilters.category === 'all' || 
                           (item.category && item.category.includes(currentFilters.category));
            const largeMatch = currentFilters.location_large === 'all' || 
                             item.location_large === currentFilters.location_large;
            const smallMatch = currentFilters.location_small === 'all' || 
                             item.location_small === currentFilters.location_small;
            
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
                document.querySelectorAll('#rate-filters .filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilters.rate = btn.dataset.value;
                render();
            });
        });

        // Static 'All' filter listeners for Category & Location
        document.querySelectorAll('.filter-group .filter-btn[data-value="all"]').forEach(btn => {
            const type = btn.dataset.filter;
            if (type !== 'rate') { // Skip rate as handled above
                btn.addEventListener('click', () => handleFilterClick(type, 'all', btn));
            }
        });

        // Event listeners for sorting
        document.querySelectorAll('.sort-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentSort = btn.dataset.sort;
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
            if (currentFilters.location_large === loc) btn.classList.add('active');
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
        group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // IMPORTANT FIX: If value is 'all', reset specific filter
        currentFilters[type] = value;

        if (type === 'location_large') {
            currentFilters.location_small = 'all';
            updateSmallLocationFilters(value);
        }

        render();
    }

    function updateSmallLocationFilters(largeValue) {
        locationSmallFilterGroup.innerHTML = '';
        
        // Re-create the "All" button properly to keep event listener
        const allBtn = document.createElement('button');
        allBtn.className = 'filter-btn active';
        allBtn.dataset.filter = 'location_small';
        allBtn.dataset.value = 'all';
        allBtn.textContent = '전체';
        allBtn.addEventListener('click', () => handleFilterClick('location_small', 'all', allBtn));
        locationSmallFilterGroup.appendChild(allBtn);
        
        if (largeValue === 'all') {
            smallLocSection.style.display = 'none';
            return;
        }

        const smallLocs = new Set();
        restaurantData.forEach(item => {
            if (item.location_large === largeValue && item.location_small) {
                smallLocs.add(item.location_small);
            }
        });

        if (smallLocs.size > 0) {
            smallLocSection.style.display = 'block';
            Array.from(smallLocs).sort().forEach(loc => {
                locationSmallFilterGroup.appendChild(createFilterBtn('location_small', loc));
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

            const catMatch = currentFilters.category === 'all' || 
                           (item.category && item.category.includes(currentFilters.category));
            const largeMatch = currentFilters.location_large === 'all' || 
                             item.location_large === currentFilters.location_large;
            const smallMatch = currentFilters.location_small === 'all' || 
                             item.location_small === currentFilters.location_small;
            const rateMatch = currentFilters.rate === 'all' ||
                            item.rate === currentFilters.rate;
            
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

        // Sort
        if (currentSort === 'rate-desc') {
            filtered.sort((a, b) => b.rate.length - a.rate.length);
        } else if (currentSort === 'name-asc') {
            filtered.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
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
        card.innerHTML = `
            <div class="card-header">
                <span class="category-badge">${item.category || '기타'}</span>
                <span class="spoons">${item.rate}</span>
            </div>
            <div class="card-body">
                <h2>${item.name}</h2>
                <div class="location-info">
                    <span class="loc-badge">${item.location_large}</span>
                    <span class="loc-badge">${item.location_small || ''}</span>
                </div>
            </div>
            <div class="card-footer">
                <a href="https://map.naver.com/p/search/${encodeURIComponent(item.location_small ? item.location_small.split('/').pop().trim() + ' ' + item.name : item.name)}" target="_blank" class="naver-link">Naver Map</a>
                ${item.map_url ? `<a href="${item.map_url}" target="_blank" class="map-link">Kakao Map</a>` : ''}
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
    ['search-name', 'search-category', 'search-subloc'].forEach(id => {
        document.getElementById(id).addEventListener('change', render);
    });

    init();
});

// ─── Mobile Card Overlay Functions (global scope) ────
function openMobileOverlay(item) {
    const overlay = document.getElementById('mobile-card-overlay');
    const content = document.getElementById('mobile-card-detail-content');
    const naverQuery = encodeURIComponent(item.location_small ? item.location_small.split('/').pop().trim() + ' ' + item.name : item.name);
    const kakaoUrl = item.map_url || `https://map.kakao.com/link/search/${encodeURIComponent(item.name)}`;

    content.innerHTML = `
        <p class="overlay-name">${item.name}</p>
        <div class="overlay-meta">
            <span>${item.category || '기타'}</span>
            <span>${item.rate}</span>
        </div>
        <p class="overlay-location">
            📍 ${item.location_large}${item.location_small ? ' · ' + item.location_small : ''}
        </p>
        <div class="overlay-links">
            <a href="https://map.naver.com/p/search/${naverQuery}" target="_blank" class="overlay-naver">Naver Map</a>
            <a href="${kakaoUrl}" target="_blank" class="overlay-kakao">Kakao Map</a>
        </div>
    `;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeMobileOverlay() {
    document.getElementById('mobile-card-overlay').classList.remove('open');
    document.body.style.overflow = '';
}
