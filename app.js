// ─── Firebase Cloud Sync Module (Firestore Realtime Multi-Device Sync) ───
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBYzyzAjtazA0R-VKU6psbnormWExi0NFM",
    authDomain: "spoonmap-3df1a.firebaseapp.com",
    projectId: "spoonmap-3df1a",
    storageBucket: "spoonmap-3df1a.firebasestorage.app",
    messagingSenderId: "995065560253",
    appId: "1:995065560253:web:ab63af4faaacca05b8cbd4",
    measurementId: "G-KRD217KNZS"
};

let db = null;
let isFirebaseReady = false;

function initFirebase() {
    try {
        if (typeof firebase !== 'undefined' && !firebase.apps.length) {
            firebase.initializeApp(FIREBASE_CONFIG);
            db = firebase.firestore();
            isFirebaseReady = true;
            console.log('[Spoonmap] Firebase Firestore Initialized Successfully! ☁️');
        } else if (typeof firebase !== 'undefined' && firebase.apps.length) {
            db = firebase.firestore();
            isFirebaseReady = true;
        }
    } catch (e) {
        console.warn('[Spoonmap] Firebase Init Warning:', e);
    }
}

// ─── Standard Canonical Taxonomy (Categories & Menus) ───
const DEFAULT_CATEGORIES = [
    '🍚한식',
    '🥩고기',
    '🍣일식',
    '🍜중식',
    '🍝양식',
    '🥡아시안',
    '🌮세계요리',
    '🍙분식',
    '🍗치킨',
    '🍔패스트푸드',
    '🍕피자',
    '🐟해산물',
    '🥗샐러드',
    '☕카페',
    '🍺술집',
    '🍽️뷔페'
];

const DEFAULT_MENUS = [
    "가츠동", "간장게장", "갈매기살", "갈비찜", "갈비탕", "갈치조림", "감자탕", "개성주악", "게국지", "고기국수",
    "고등어구이", "곱창", "곱창전골", "국밥", "국수", "김밥", "김치찌개", "김치찜", "꼬치", "꼼장어",
    "나시고랭", "낙곱새", "냉면", "뇨끼", "닭갈비", "닭강정", "닭고기", "닭곰탕", "닭구이", "닭꼬치",
    "닭똥집", "닭발", "닭볶음탕", "닭한마리", "덮밥", "도래창", "도시락", "돈까스", "돌문어삼합", "돼지갈비",
    "돼지고기", "돼지김치구이", "등갈비", "디저트", "딸기모찌", "떡", "떡볶이", "라멘", "리조또", "마라샹궈",
    "마라탕", "마제소바", "막걸리", "막국수", "막창", "만두", "만둣국", "만화카페", "맥주", "메밀소바",
    "몬자야끼", "뭉티기", "밀면", "밀크티", "바스크치즈케이크", "반미", "밥버거", "백반", "보쌈", "볶음밥",
    "부대찌개", "불고기", "뷔페", "브런치", "브리또", "비빔밥", "빈대떡", "빙수", "빵", "뼈구이",
    "삼겹살", "삼계탕", "샌드위치", "샐러드", "샤브샤브", "석갈비", "소갈비", "소고기", "솥밥", "수제비",
    "수플레", "순두부", "술집", "스테이크", "쌀국수", "쌈밥", "아구찜", "아이스크림", "야끼소바", "양꼬치",
    "어묵", "오꼬노미야끼", "오리", "오므라이스", "오징어순대", "오차즈케", "옻닭", "와플", "요거트", "우동",
    "유부초밥", "육회비빔밥", "이자카야", "장어구이", "장어탕", "전", "제육볶음", "젤라또", "조개구이", "족발",
    "주먹밥", "죽", "짜글이", "짜장면", "짬뽕", "쭈꾸미", "쭈꾸미불고기", "찌개", "찜닭", "초계국수",
    "초밥", "추어탕", "치즈밥", "치킨", "카레", "카이센동", "카페", "칼국수", "커피", "컵밥",
    "케이크", "콩국", "콩국수", "퀘사디아", "크루키", "타코", "탄탄면", "탕수육", "텐동", "튀김",
    "티라미수", "파스타", "파이", "파전", "팟타이", "평양냉면", "포케", "푸딩", "퓨전요리", "프레첼",
    "피자", "필라프", "함박스테이크", "핫도그", "해장국", "햄버거", "호두과자", "호떡", "황남빵", "회",
    "회덮밥", "회전초밥", "휘낭시에"
];

function mapKakaoCategoryToStandard(kakaoCat, placeName = '') {
    if (!kakaoCat && !placeName) return '🍚한식';
    const raw = (kakaoCat || '').toLowerCase();
    const name = (placeName || '').toLowerCase();
    const text = `${raw} ${name}`;

    // 1. 카페 / 디저트 / 베이커리 / 빵
    if (text.includes('카페') || text.includes('커피') || text.includes('디저트') || 
        text.includes('베이커리') || text.includes('제과') || text.includes('아이스크림') || 
        text.includes('빙수') || text.includes('찻집') || text.includes('도넛') || 
        text.includes('베이글') || text.includes('와플') || text.includes('케이크') || text.includes('빵')) {
        return '☕카페';
    }

    // 2. 술집 / 주점 / 펍 / 호프 / 이자카야
    if (raw.includes('술집') || raw.includes('호프') || raw.includes('주점') || 
        raw.includes('포장마차') || raw.includes('와인바') || raw.includes('펍') || 
        raw.includes('칵테일') || raw.includes('바(bar)') || text.includes('이자카야') ||
        text.includes('요리주점') || text.includes('생맥주') || text.includes('포차') || 
        text.includes('막걸리') || text.includes('주막')) {
        return '🍺술집';
    }

    // 3. 치킨 / 통닭 / 닭강정
    if (text.includes('치킨') || text.includes('닭강정') || text.includes('통닭') || text.includes('옛날통닭')) {
        return '🍗치킨';
    }

    // 4. 피자
    if (text.includes('피자') || text.includes('화덕피자')) {
        return '🍕피자';
    }

    // 5. 패스트푸드 / 햄버거 / 샌드위치 / 토스트
    if (text.includes('패스트푸드') || text.includes('햄버거') || text.includes('버거') || 
        text.includes('샌드위치') || text.includes('토스트') || text.includes('핫도그')) {
        return '🍔패스트푸드';
    }

    // 6. 일식 / 초밥 / 스시 / 사시미 / 회 / 돈까스
    if (text.includes('일식') || text.includes('초밥') || text.includes('스시') || 
        text.includes('돈까스') || text.includes('돈가스') || text.includes('카츠') || 
        text.includes('사시미') || text.includes('오마카세') || text.includes('텐동') || 
        text.includes('후토마키') || text.includes('참치회') || text.includes('라멘') || text.includes('소바')) {
        return '🍣일식';
    }

    // 7. 중식 / 중국요리 / 마라탕 / 양꼬치
    if (text.includes('중식') || text.includes('중국집') || text.includes('짜장') || 
        text.includes('짬뽕') || text.includes('마라') || text.includes('딤섬') || 
        text.includes('탕수육') || text.includes('양꼬치') || text.includes('꿔바로우') || 
        text.includes('중화')) {
        return '🥢중식';
    }

    // 8. 양식 / 이탈리안 / 파스타 / 스테이크
    if (text.includes('양식') || text.includes('이탈리안') || text.includes('파스타') || 
        text.includes('프렌치') || text.includes('스테이크') || text.includes('리조또') || 
        text.includes('비스트로') || text.includes('브런치') || text.includes('패밀리레스토랑')) {
        return '🍝양식';
    }

    // 9. 해산물 / 생선회 / 조개 / 게장 / 장어
    if (text.includes('해물') || text.includes('생선') || text.includes('회집') || 
        text.includes('횟집') || text.includes('수산') || text.includes('게장') || 
        text.includes('장어') || text.includes('조개') || text.includes('굴요리') || 
        text.includes('아구') || text.includes('해물탕') || text.includes('해물찜') || 
        text.includes('낙지') || text.includes('문어') || text.includes('쭈꾸미') || 
        text.includes('주꾸미') || text.includes('오징어') || text.includes('복어') || text.includes('물회')) {
        return '🐟해산물';
    }

    // 10. 고기 / 구이 (삼겹살, 갈비, 곱창, 숯불구이, 족발, 보쌈, 감자탕 등)
    if (text.includes('고기') || text.includes('육류') || text.includes('삼겹살') || 
        text.includes('갈비') || text.includes('곱창') || text.includes('막창') || 
        text.includes('대창') || text.includes('숯불') || text.includes('불고기') || 
        text.includes('차돌') || text.includes('족발') || text.includes('보쌈') || 
        text.includes('수육') || text.includes('감자탕') || text.includes('뼈숯불') || 
        text.includes('뼈구이') || text.includes('뼈해장국') || text.includes('구이') || 
        text.includes('정육') || text.includes('한우') || text.includes('소고기') || 
        text.includes('돼지') || text.includes('오리') || text.includes('닭갈비') || 
        text.includes('바비큐') || text.includes('바베큐') || text.includes('삼계탕') || 
        text.includes('백숙') || text.includes('특수부위') || text.includes('갈매기살')) {
        return '🥩고기';
    }

    // 11. 국수 / 냉면 / 면요리
    if (text.includes('국수') || text.includes('냉면') || text.includes('칼국수') || 
        text.includes('막국수') || text.includes('밀면') || text.includes('수제비') || 
        text.includes('우동') || text.includes('면옥')) {
        return '🍜면요리';
    }

    // 12. 국 / 탕 / 찌개 / 국밥
    if (text.includes('국밥') || text.includes('찌개') || text.includes('전골') || 
        text.includes('설렁탕') || text.includes('곰탕') || text.includes('순대국') || 
        text.includes('해장국') || text.includes('추어탕') || text.includes('부대찌개') || 
        text.includes('동태탕') || text.includes('매운탕') || text.includes('샤브샤브')) {
        return '🍲국/찌개';
    }

    // 13. 분식 / 떡볶이 / 김밥 / 만두
    if (text.includes('분식') || text.includes('떡볶이') || text.includes('김밥') || 
        text.includes('순대') || text.includes('튀김') || text.includes('만두')) {
        return '🍢분식';
    }

    // 14. 샐러드 / 다이어트 / 포케
    if (text.includes('샐러드') || text.includes('포케')) {
        return '🥗샐러드';
    }

    // 15. 뷔페
    if (text.includes('뷔페')) {
        return '🍽️뷔페';
    }

    // 16. 세계요리 / 아시아 / 멕시코 / 베트남 / 태국 / 인도
    if (text.includes('아시아') || text.includes('베트남') || text.includes('태국') || 
        text.includes('쌀국수') || text.includes('인도') || text.includes('커리') || 
        text.includes('카레') || text.includes('타코') || text.includes('멕시코') || 
        text.includes('터키') || text.includes('중동')) {
        return '🌮세계요리';
    }

    // 17. 한식 (밥, 정식, 백반 등)
    if (text.includes('한식') || text.includes('백반') || text.includes('가정식') || 
        text.includes('쌈밥') || text.includes('솥밥') || text.includes('비빔밥') || 
        text.includes('정식') || text.includes('식당')) {
        return '🍚한식';
    }

    return '🍴음식점';
}

function parseStandardLocation(addressName = '', roadAddressName = '') {
    const raw = (addressName || roadAddressName || '').trim();
    if (!raw) return { large: '', small: '' };

    const parts = raw.split(/\s+/);
    if (parts.length < 2) return { large: parts[0] || '', small: '' };

    const p0 = parts[0];
    const p1 = parts[1];

    let regionPrefix = p0;
    if (p0.startsWith('서울')) regionPrefix = '서울';
    else if (p0.startsWith('부산')) regionPrefix = '부산';
    else if (p0.startsWith('대구')) regionPrefix = '대구';
    else if (p0.startsWith('인천')) regionPrefix = '인천';
    else if (p0.startsWith('광주')) regionPrefix = '광주';
    else if (p0.startsWith('대전')) regionPrefix = '대전';
    else if (p0.startsWith('울산')) regionPrefix = '울산';
    else if (p0.startsWith('세종')) regionPrefix = '세종';
    else if (p0.startsWith('경기')) regionPrefix = '경기';
    else if (p0.startsWith('강원')) regionPrefix = '강원';
    else if (p0.startsWith('충북') || p0.startsWith('충청북')) regionPrefix = '충북';
    else if (p0.startsWith('충남') || p0.startsWith('충청남')) regionPrefix = '충남';
    else if (p0.startsWith('전북') || p0.startsWith('전라북')) regionPrefix = '전북';
    else if (p0.startsWith('전남') || p0.startsWith('전라남')) regionPrefix = '전남';
    else if (p0.startsWith('경북') || p0.startsWith('경상북')) regionPrefix = '경북';
    else if (p0.startsWith('경남') || p0.startsWith('경상남')) regionPrefix = '경남';
    else if (p0.startsWith('제주')) regionPrefix = '제주';

    let large = '';
    if (['서울', '부산', '대구', '인천', '광주', '대전', '울산'].includes(regionPrefix)) {
        large = `${regionPrefix} ${p1}`;
    } else if (regionPrefix === '세종') {
        large = '세종 세종';
    } else if (regionPrefix === '제주') {
        const c = p1.replace(/시$/, '');
        large = `제주 ${c}`;
    } else {
        const c = p1.replace(/(시|군)$/, '');
        large = `${regionPrefix} ${c}`;
    }

    let small = '';
    for (let i = 2; i < parts.length; i++) {
        const part = parts[i];
        if (part.endsWith('동') || part.endsWith('읍') || part.endsWith('면') || part.endsWith('리') || part.endsWith('가')) {
            small = part;
            break;
        }
    }
    if (!small) {
        const parenMatch = raw.match(/\(([^)]+?)(?:동|읍|면|가)\)/);
        if (parenMatch && parenMatch[0]) {
            small = parenMatch[0].replace(/[()]/g, '').trim();
        }
    }
    if (!small && parts.length >= 3) {
        small = parts[2].replace(/[0-9]+.*$/, '');
    }

    if (typeof standardizeLocation === 'function') {
        const std = standardizeLocation(large, small, '');
        large = std.large || large;
        small = std.small || small;
    }

    return { large, small };
}

// Global Cloud Shared Menus Module
async function syncSharedMenuToCloud(menuName) {
    if (!menuName || !isFirebaseReady || !db) return;
    try {
        const docRef = db.collection('spoonmap_shared').doc('menus');
        await docRef.set({
            list: firebase.firestore.FieldValue.arrayUnion(menuName)
        }, { merge: true });
        console.log('[Spoonmap] New menu shared to global cloud:', menuName);
    } catch (e) {
        console.warn('[Spoonmap] syncSharedMenuToCloud warning:', e);
    }
}

async function loadSharedMenusFromCloud() {
    if (!isFirebaseReady || !db) return;
    try {
        const docRef = db.collection('spoonmap_shared').doc('menus');
        const docSnap = await docRef.get();
        if (docSnap.exists) {
            const data = docSnap.data();
            if (data && Array.isArray(data.list)) {
                window._spoonmapSharedMenus = data.list;
                if (typeof notionSelectors !== 'undefined') {
                    ['menu', 'modal_menu'].forEach(k => {
                        if (notionSelectors[k]) {
                            data.list.forEach(m => notionSelectors[k].availableOptions.add(m));
                            if (typeof notionSelectors[k].renderOptions === 'function') {
                                notionSelectors[k].renderOptions('');
                            }
                        }
                    });
                }
            }
        }
    } catch (e) {
        console.warn('[Spoonmap] loadSharedMenusFromCloud warning:', e);
    }
}

function migrateLocalStorageData() {
    try {
        const migratedKey = 'spoonmap_standard_dong_v4_migrated';
        if (localStorage.getItem(migratedKey)) return;

        const migrateItem = (item) => {
            if (!item) return false;
            let changed = false;
            if (item.category) {
                const norm = item.category.split(',').map(c => {
                    let s = c.trim();
                    if (s === '고기구이' || s === '🥩고기구이') return '🥩고기';
                    if (s === '샐러드포케' || s === '🥗샐러드포케') return '🥗샐러드';
                    if (s === '술집주점' || s === '🍺술집주점') return '🍺술집';
                    if (s === '카페디저트' || s === '☕카페디저트') return '☕카페';
                    if (s === '해산물·회' || s === '🐟해산물·회' || s === '해산물') return '🐟해산물';
                    if (s === '🧆베트남음식' || s === '베트남음식' || s === '🥡태국음식' || s === '태국음식') return '🥡아시안';
                    if (s === '🌮멕시칸' || s === '멕시칸') return '🌮세계요리';
                    return s;
                }).filter(Boolean);
                const newCat = Array.from(new Set(norm)).join(', ');
                if (newCat !== item.category) { item.category = newCat; changed = true; }
            }
            if (typeof standardizeLocation === 'function') {
                const std = standardizeLocation(item.location_large, item.location_small, item.name || '');
                if (std.large && std.large !== item.location_large) { item.location_large = std.large; changed = true; }
                if (std.small && std.small !== item.location_small) { item.location_small = std.small; changed = true; }
            }
            return changed;
        };

        ['spoonmap_restaurant_overrides', 'master_spoonmap_restaurant_overrides'].forEach(k => {
            const data = JSON.parse(localStorage.getItem(k) || '{}');
            let anyChg = false;
            Object.values(data).forEach(obj => { if (migrateItem(obj)) anyChg = true; });
            if (anyChg) {
                localStorage.setItem(k, JSON.stringify(data));
                if (typeof saveToCloud === 'function') saveToCloud('overrides', data);
            }
        });

        ['spoonmap_diary', 'spoonmap_user_diary'].forEach(k => {
            const arr = JSON.parse(localStorage.getItem(k) || '[]');
            let anyChg = false;
            arr.forEach(obj => { if (migrateItem(obj)) anyChg = true; });
            if (anyChg) {
                localStorage.setItem(k, JSON.stringify(arr));
                if (typeof saveToCloud === 'function') saveToCloud('diary', arr);
            }
        });

        localStorage.setItem(migratedKey, 'true');
    } catch (e) {
        console.warn('[Spoonmap] migrateLocalStorageData warning:', e);
    }
}

// Get Firestore document reference path for current user
function getFirestoreUserDocPath() {
    const u = getCurrentUser();
    if (!u || !u.id) return null;
    if (isOwnerUser()) {
        return 'master_data'; // Unified cloud collection for Master
    }
    return `user_${u.id}`; // Cloud collection for each General User
}

// Sync all data from Firestore Cloud to LocalStorage (Download)
async function syncFromCloud() {
    if (!isFirebaseReady || !db) return;
    const docPath = getFirestoreUserDocPath();
    if (!docPath) return;

    try {
        const docRef = db.collection('spoonmap_users').doc(docPath);
        const docSnap = await docRef.get();

        const diaryKey = getDiaryStorageKey();
        const wishlistKey = getUserWishlistKey();
        const overridesKey = getUserOverridesStorageKey();
        const customOptKey = getUserCustomOptionsKey();

        const localDiary = JSON.parse(localStorage.getItem(diaryKey) || '[]');
        const localWishlist = JSON.parse(localStorage.getItem(wishlistKey) || '[]');
        const localOverrides = JSON.parse(localStorage.getItem(overridesKey) || '{}');
        const localCustomOpt = JSON.parse(localStorage.getItem(customOptKey) || '{}');

        if (docSnap.exists) {
            const cloudData = docSnap.data() || {};
            console.log('[Spoonmap] Cloud data loaded from Firestore:', cloudData);

            let hasChanges = false;

            // Merge / Sync Diary (Combine local & cloud without loss)
            // Merge / Sync Diary (Combine local & cloud without loss)
            if (cloudData.diary && Array.isArray(cloudData.diary)) {
                const cloudDiaryMap = new Map();
                cloudData.diary.forEach(e => cloudDiaryMap.set(String(e.id || e.name + '_' + e.date), e));
                let localHasNewDiary = false;
                localDiary.forEach(e => {
                    const k = String(e.id || e.name + '_' + e.date);
                    if (!cloudDiaryMap.has(k)) {
                        cloudDiaryMap.set(k, e);
                        localHasNewDiary = true;
                    }
                });
                const mergedDiary = Array.from(cloudDiaryMap.values());
                if (typeof standardizeLocation === 'function') {
                    mergedDiary.forEach(e => {
                        const std = standardizeLocation(e.location_large, e.location_small, e.name || '');
                        if (std.large) e.location_large = std.large;
                        if (std.small) e.location_small = std.small;
                    });
                }
                localStorage.setItem(diaryKey, JSON.stringify(mergedDiary));
                hasChanges = true;
                if (localHasNewDiary || mergedDiary.length > cloudData.diary.length) {
                    await saveToCloud('diary', mergedDiary);
                }
            } else if (localDiary.length > 0) {
                await saveToCloud('diary', localDiary);
            }

            // Sync Wishlist
            if (cloudData.wishlist && Array.isArray(cloudData.wishlist)) {
                const cloudWishMap = new Map();
                cloudData.wishlist.forEach(w => cloudWishMap.set(w.name, w));
                let localHasNewWish = false;
                localWishlist.forEach(w => {
                    if (!cloudWishMap.has(w.name)) {
                        cloudWishMap.set(w.name, w);
                        localHasNewWish = true;
                    }
                });
                const mergedWishlist = Array.from(cloudWishMap.values());
                localStorage.setItem(wishlistKey, JSON.stringify(mergedWishlist));
                hasChanges = true;
                if (localHasNewWish || mergedWishlist.length > cloudData.wishlist.length) {
                    await saveToCloud('wishlist', mergedWishlist);
                }
            } else if (localWishlist.length > 0) {
                await saveToCloud('wishlist', localWishlist);
            }

            // Sync Overrides
            if (cloudData.overrides && typeof cloudData.overrides === 'object') {
                const mergedOverrides = { ...cloudData.overrides, ...localOverrides };
                if (typeof standardizeLocation === 'function') {
                    Object.entries(mergedOverrides).forEach(([k, ov]) => {
                        if (ov) {
                            const std = standardizeLocation(ov.location_large, ov.location_small, ov.name || k);
                            if (std.large) ov.location_large = std.large;
                            if (std.small) ov.location_small = std.small;
                        }
                    });
                }
                localStorage.setItem(overridesKey, JSON.stringify(mergedOverrides));
                hasChanges = true;
                if (Object.keys(localOverrides).length > Object.keys(cloudData.overrides).length) {
                    await saveToCloud('overrides', mergedOverrides);
                }
            } else if (Object.keys(localOverrides).length > 0) {
                await saveToCloud('overrides', localOverrides);
            }

            // Sync Custom Options
            if (cloudData.custom_options && typeof cloudData.custom_options === 'object') {
                const mergedCustomOpt = { ...cloudData.custom_options, ...localCustomOpt };
                localStorage.setItem(customOptKey, JSON.stringify(mergedCustomOpt));
                hasChanges = true;
            } else if (Object.keys(localCustomOpt).length > 0) {
                await saveToCloud('custom_options', localCustomOpt);
            }

            // Sync Profile
            const profileKey = typeof getUserProfileKey === 'function' ? getUserProfileKey() : null;
            const localProfile = profileKey ? JSON.parse(localStorage.getItem(profileKey) || 'null') : null;
            if (profileKey && cloudData.profile && typeof cloudData.profile === 'object') {
                const mergedProfile = { ...cloudData.profile, ...(localProfile || {}) };
                if (localProfile && localProfile.profileImage) {
                    mergedProfile.profileImage = localProfile.profileImage;
                } else if (cloudData.profile.profileImage) {
                    mergedProfile.profileImage = cloudData.profile.profileImage;
                }
                localStorage.setItem(profileKey, JSON.stringify(mergedProfile));
                hasChanges = true;
                const u = getCurrentUser();
                if (u && mergedProfile.profileImage && u.profileImage !== mergedProfile.profileImage) {
                    u.profileImage = mergedProfile.profileImage;
                    localStorage.setItem('spoonmap_current_user', JSON.stringify(u));
                }
                if (localProfile && JSON.stringify(mergedProfile) !== JSON.stringify(cloudData.profile)) {
                    await saveToCloud('profile', mergedProfile);
                }
            } else if (profileKey && localProfile) {
                await saveToCloud('profile', localProfile);
            }

            // Sync Following
            const followingKey = typeof getUserFollowingKey === 'function' ? getUserFollowingKey() : null;
            if (followingKey && Array.isArray(cloudData.following)) {
                localStorage.setItem(followingKey, JSON.stringify(cloudData.following));
                hasChanges = true;
            } else if (followingKey && localStorage.getItem(followingKey)) {
                await saveToCloud('following', JSON.parse(localStorage.getItem(followingKey)));
            }

            // Sync Custom Friends (친구 지도)
            if (Array.isArray(cloudData.custom_friends)) {
                localStorage.setItem('spoonmap_custom_friends', JSON.stringify(cloudData.custom_friends));
                hasChanges = true;
            } else if (localStorage.getItem('spoonmap_custom_friends')) {
                await saveToCloud('custom_friends', JSON.parse(localStorage.getItem('spoonmap_custom_friends') || '[]'));
            }

            // Map tab active friend overlays always start reset on new session
            localStorage.setItem('spoonmap_active_friend_ids', '[]');
        } else {
            // First time cloud initialization: Upload all existing local data! (Auto-Migration)
            console.log('[Spoonmap] First-time cloud sync: Uploading local data to Firestore...');
            await docRef.set({
                diary: localDiary,
                wishlist: localWishlist,
                overrides: localOverrides,
                custom_options: localCustomOpt,
                profile: (typeof getUserProfile === 'function') ? getUserProfile() : null,
                following: (typeof getUserFollowingList === 'function') ? getUserFollowingList() : null,
                custom_friends: (typeof getCustomFriends === 'function') ? getCustomFriends() : [],
                active_friend_ids: [],
                updated_at: new Date().toISOString(),
                user_info: getCurrentUser()
            }, { merge: true });
            console.log('[Spoonmap] Auto-Migration to Cloud Complete! ☁️✨');
        }

        // Sync Photos from Cloud
        if (typeof syncPhotosFromCloud === 'function') {
            await syncPhotosFromCloud();
        }

        // Load Global Shared Menus
        if (typeof loadSharedMenusFromCloud === 'function') {
            await loadSharedMenusFromCloud();
        }

        // Re-render Views with latest synced data
        if (typeof updateUserAuthUI === 'function') updateUserAuthUI();
        if (typeof publishPublicProfile === 'function' && typeof getUserProfile === 'function') publishPublicProfile(getUserProfile());
        if (typeof window.renderApp === 'function') window.renderApp();
        if (typeof renderDiaryCalendar === 'function') renderDiaryCalendar();
        if (typeof computeAndRenderFoodInsights === 'function') computeAndRenderFoodInsights();
        if (typeof window.populateRecommendCategories === 'function') window.populateRecommendCategories();
        if (typeof renderProfileView === 'function') renderProfileView();
        if (typeof renderFriendChips === 'function') renderFriendChips();
        if (typeof renderAllActiveFriendOverlays === 'function') renderAllActiveFriendOverlays();
        if (typeof window.renderMobileFriendsListInPopover === 'function') window.renderMobileFriendsListInPopover();
        if (typeof window.updateMobileStarChipHighlight === 'function') window.updateMobileStarChipHighlight();
        if (typeof renderFriendModalList === 'function') renderFriendModalList();
    } catch (err) {
        console.error('[Spoonmap] Firestore Sync Error:', err);
    }
}

// Save specific data segment to Cloud Firestore (Upload)
async function saveToCloud(segment, data) {
    if (!isFirebaseReady || !db) return;
    const docPath = getFirestoreUserDocPath();
    if (!docPath) return;

    try {
        const docRef = db.collection('spoonmap_users').doc(docPath);
        const updateObj = {
            [segment]: data,
            updated_at: new Date().toISOString()
        };
        await docRef.set(updateObj, { merge: true });
        console.log(`[Spoonmap] Cloud Sync: "${segment}" successfully saved to Firestore ☁️`);
    } catch (err) {
        console.error(`[Spoonmap] Cloud Save Error (${segment}):`, err);
    }
}

// ─── Kakao OAuth 2.0 & Master Owner Auth Guard Module ───
const KAKAO_JAVASCRIPT_KEY = '7d1898e936717ce9a0b768bc21807a99';

// Explicit Master Account Identification Config
const MASTER_CONFIG = {
    kakaoIds: ['5044584236'],
    emails: ['jhp_99@naver.com', 'jhp_99', 'jhp99@naver.com', 'jhp99'],
    phones: ['01098819418', '010-9881-9418', '+82 10-9881-9418', '+821098819418', '98819418'],
    nicknames: ['박준호', '뿌리공주', '뿌리공주ෆ', 'Pumpkin', '6pumpkin', 'jhp_99', 'jhp99'],
    excludedNicknames: ['윤서희', '서희', '윤서휘', '박종태']
};

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

    const uid = String(u.id).replace(/^user_/, '').trim();
    if (MASTER_CONFIG.kakaoIds.includes(uid)) return true;

    const nick = (u.nickname || '').trim();
    if (nick && MASTER_CONFIG.excludedNicknames.some(ex => nick === ex || nick.includes(ex))) {
        return false;
    }

    if (u.email && MASTER_CONFIG.emails.some(e => u.email.toLowerCase().includes(e.toLowerCase()))) {
        return true;
    }

    if (u.phone) {
        const cleanPhone = u.phone.replace(/[^0-9]/g, '');
        if (cleanPhone && MASTER_CONFIG.phones.some(p => cleanPhone.includes(p.replace(/[^0-9]/g, '')))) return true;
    }

    if (nick && MASTER_CONFIG.nicknames.some(n => nick === n)) {
        return true;
    }

    return false;
}

function getUserDiaryStorageKey() {
    const u = getCurrentUser();
    if (!u || !u.id) return 'spoonmap_guest_diary';
    if (isOwnerUser()) return 'spoonmap_diary';
    return `spoonmap_user_${u.id}_diary`;
}

function getDiaryStorageKey() {
    return getUserDiaryStorageKey();
}

function getUserOverridesStorageKey() {
    const u = getCurrentUser();
    if (!u || !u.id) return 'spoonmap_guest_restaurant_overrides';
    if (isOwnerUser()) return 'spoonmap_restaurant_overrides';
    return `spoonmap_user_${u.id}_restaurant_overrides`;
}

function getUserCustomOptionsKey() {
    const u = getCurrentUser();
    if (!u || !u.id) return 'spoonmap_guest_custom_options';
    if (isOwnerUser()) return 'spoonmap_custom_options';
    return `spoonmap_user_${u.id}_custom_options`;
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
                <p>Dairy, List, Insight 탭은 <b>카카오 로그인</b> 후 이용하실 수 있습니다.</p>
                <button class="kakao-login-btn auth-locked-login-btn" onclick="handleKakaoLogin()">
                    <svg viewBox="0 0 24 24"><path d="M12 3C6.48 3 2 6.48 2 10.77c0 2.76 1.83 5.17 4.59 6.55l-1.16 4.29c-.1.38.33.68.66.47l5.06-3.34c.28.03.56.05.85.05 5.52 0 10-3.48 10-7.77S17.52 3 12 3z"/></svg>
                    <span>카카오톡으로 로그인하기</span>
                </button>
            </div>
        </div>
    `;
}

function updateAuthProtectedViews() {
    const loggedIn = isUserLoggedIn();

    const protectedSections = [
        { protectedId: 'list-protected-content', lockedId: 'list-locked-view' },
        { protectedId: 'insights-protected-content', lockedId: 'insights-locked-view' },
        { protectedId: 'diary-protected-content', lockedId: 'diary-locked-view' },
        { protectedId: 'profile-protected-content', lockedId: 'profile-locked-view' }
    ];

    protectedSections.forEach(({ protectedId, lockedId }) => {
        const pEl = document.getElementById(protectedId);
        const lEl = document.getElementById(lockedId);
        const isAccessible = (protectedId === 'list-protected-content' && window.isSharedMapMode) ? true : loggedIn;

        if (pEl) {
            pEl.style.display = isAccessible ? '' : 'none';
        }
        if (lEl) {
            lEl.style.display = isAccessible ? 'none' : 'flex';
            if (!isAccessible) {
                lEl.innerHTML = renderAuthLockedScreen(protectedId);
            }
        }
    });

    // Update Tab Button Labels (e.g. DIARY vs DIARY 🔒)
    const tabLabels = [
        { tab: 'diary', name: 'DIARY', locked: !loggedIn },
        { tab: 'list', name: 'LIST', locked: !loggedIn && !window.isSharedMapMode },
        { tab: 'map', name: 'MAP', locked: false },
        { tab: 'sommelier', name: 'AI', locked: false },
        { tab: 'recommend', name: 'ROULETTE', locked: false },
        { tab: 'insights', name: 'INSIGHT', locked: !loggedIn },
        { tab: 'profile', name: 'PROFILE', locked: !loggedIn }
    ];

    tabLabels.forEach(({ tab, name, locked }) => {
        const btns = document.querySelectorAll(`.tab-btn[data-tab="${tab}"], .mobile-tab-btn[data-tab="${tab}"]`);
        btns.forEach(b => {
            b.innerHTML = locked ? `${name} <span class="tab-lock-icon" style="font-size:0.75em;opacity:0.8;">🔒</span>` : name;
        });
    });
}

function initKakaoAuth() {
    initFirebase();
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

    // Auto-update Master status for current logged-in session if matched
    const u = getCurrentUser();
    if (u) {
        const realOwner = isOwnerUser();
        if (u.isMaster !== realOwner) {
            u.isMaster = realOwner;
            localStorage.setItem('spoonmap_current_user', JSON.stringify(u));
        }
        if (realOwner) {
            localStorage.setItem('spoonmap_master_kakao_id', String(u.id));
        }
    }

    updateUserAuthUI();
    if (isUserLoggedIn()) {
        if (typeof publishPublicProfile === 'function' && typeof getUserProfile === 'function') {
            publishPublicProfile(getUserProfile());
        }
        syncFromCloud();
    }
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

    const loginMethod = (Kakao.Auth && typeof Kakao.Auth.loginForm === 'function')
        ? Kakao.Auth.loginForm
        : (Kakao.Auth && typeof Kakao.Auth.login === 'function' ? Kakao.Auth.login : null);

    if (loginMethod) {
        try {
            // ONLY request safe basic scopes to prevent KOE205 error
            loginMethod.call(Kakao.Auth, {
                scope: 'profile_nickname,profile_image',
                success: function(authObj) {
                    console.log('[Spoonmap] Kakao Auth Success:', authObj);
                    Kakao.API.request({
                        url: '/v2/user/me',
                        success: async function(res) {
                            console.log('[Spoonmap] Kakao User Profile:', res);
                            const kakaoAccount = res.kakao_account || {};
                            const profile = kakaoAccount.profile || {};
                            const email = (kakaoAccount.email || '').toLowerCase().trim();
                            const phone = (kakaoAccount.phone_number || '').trim();
                            const nickname = (profile.nickname || '').trim();
                            const kakaoId = String(res.id);

                            const isExcluded = nickname && MASTER_CONFIG.excludedNicknames.some(ex => nickname === ex || nickname.includes(ex));
                            const isMasterMatch = !isExcluded && (
                                MASTER_CONFIG.kakaoIds.includes(kakaoId) ||
                                (email && MASTER_CONFIG.emails.some(e => email.includes(e.toLowerCase()))) ||
                                (phone && MASTER_CONFIG.phones.some(p => phone.replace(/[^0-9]/g, '').includes(p.replace(/[^0-9]/g, '')))) ||
                                (nickname && MASTER_CONFIG.nicknames.some(n => nickname === n))
                            );

                            if (isMasterMatch) {
                                localStorage.setItem('spoonmap_master_kakao_id', kakaoId);
                            }

                            // Retain custom avatar if user already customized it
                            let existingCustomAvatar = '';
                            const profileKey = isMasterMatch ? 'spoonmap_master_profile' : `spoonmap_user_${kakaoId}_profile`;
                            try {
                                const savedProf = JSON.parse(localStorage.getItem(profileKey) || '{}');
                                if (savedProf && savedProf.profileImage) {
                                    existingCustomAvatar = savedProf.profileImage;
                                }
                            } catch (_) {}

                            const user = {
                                id: kakaoId,
                                nickname: nickname || '카카오 미식가',
                                email: email,
                                phone: phone,
                                profileImage: existingCustomAvatar || profile.profile_image_url || profile.thumbnail_image_url || '',
                                isMaster: isMasterMatch,
                                connectedAt: res.connected_at || new Date().toISOString()
                            };
                            localStorage.setItem('spoonmap_current_user', JSON.stringify(user));

                            updateUserAuthUI();
                            
                            // Initialize & Sync from Cloud Firestore
                            initFirebase();
                            await syncFromCloud();
                            if (typeof publishPublicProfile === 'function' && typeof getUserProfile === 'function') {
                                publishPublicProfile(getUserProfile());
                            }

                            const welcomeName = user.isMaster ? '👑 마스터님' : `${user.nickname}님`;
                            alert(`환영합니다, ${welcomeName}! Spoonmap에 로그인되었습니다 🥄✨`);
                            
                            // Keep current tab / route and refresh view
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
        const isOwner = isOwnerUser();
        const userProfile = (typeof getUserProfile === 'function') ? getUserProfile() : null;

        // Prioritize custom avatar in userProfile > currentUser.profileImage > Dicebear default
        let avatarSrc = '';
        if (userProfile && userProfile.profileImage) {
            avatarSrc = userProfile.profileImage;
        } else if (currentUser.profileImage) {
            avatarSrc = currentUser.profileImage;
        } else {
            avatarSrc = isOwner ? 'https://api.dicebear.com/7.x/bottts/svg?seed=junho' : '';
        }

        // Keep currentUser.profileImage synced
        if (avatarSrc && currentUser.profileImage !== avatarSrc) {
            currentUser.profileImage = avatarSrc;
            try {
                localStorage.setItem('spoonmap_current_user', JSON.stringify(currentUser));
            } catch (_) {}
        }

        const avatarHtml = avatarSrc
            ? `<img src="${avatarSrc}" alt="${currentUser.nickname}" class="user-avatar" onerror="this.outerHTML='<div class=\\'user-avatar-placeholder\\'>🥄</div>'">`
            : `<div class="user-avatar-placeholder">🥄</div>`;

        const masterBadge = isOwner 
            ? `<span class="user-role-badge master" style="font-size:0.75rem;background:#FEF3C7;color:#92400E;padding:2px 6px;border-radius:6px;font-weight:700;margin-left:4px;" title="마스터 소유자">👑 마스터</span>` 
            : '';

        authContainer.innerHTML = `
            <div class="user-profile-badge" onclick="navigateToProfileTab()" title="내 프로필 보기" style="cursor:pointer;">
                ${avatarHtml}
                <div class="user-info-text">
                    <span class="user-name" title="${currentUser.nickname}">${currentUser.nickname}${masterBadge}</span>
                </div>
                <button class="user-logout-btn" onclick="event.stopPropagation(); handleKakaoLogout();" title="로그아웃">로그아웃</button>
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

// ─── User Wishlist (찜 목록) & Add To Diary Module ───
function getUserWishlistKey() {
    const u = getCurrentUser();
    return u && u.id ? `spoonmap_user_${u.id}_wishlist` : 'spoonmap_guest_wishlist';
}

function getUserWishlist() {
    if (window.isSharedMapMode && window.sharedMapData && Array.isArray(window.sharedMapData.wishlist)) {
        return window.sharedMapData.wishlist;
    }
    try {
        const saved = localStorage.getItem(getUserWishlistKey());
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        return [];
    }
}

function saveUserWishlist(list) {
    localStorage.setItem(getUserWishlistKey(), JSON.stringify(list));
    if (typeof saveToCloud === 'function') {
        saveToCloud('wishlist', list);
    }
    if (typeof publishPublicProfile === 'function') {
        publishPublicProfile();
    }
}

// ─── Kakao Place ID & Restaurant Precise Matching Utilities ───
function extractKakaoPlaceId(url) {
    if (!url || typeof url !== 'string') return null;
    const str = url.trim();

    // 1. place.map.kakao.com/(m/)?12345678
    const m1 = str.match(/place\.map\.kakao\.com\/(?:m\/)?(\d+)/i);
    if (m1) return m1[1];

    // 2. map.kakao.com/link/(?:map|to)/[name,]12345678
    const m2 = str.match(/\/link\/(?:map|to)\/(?:.*,)?(\d+)/i);
    if (m2) return m2[1];

    // 3. Query param itemId / confirmid / id
    const m3 = str.match(/[?&](?:itemId|id|confirmid)=(\d+)/i);
    if (m3) return m3[1];

    // 4. kakaomap://place?id=12345678 app scheme
    const m4 = str.match(/kakaomap:\/\/place\?.*id=(\d+)/i);
    if (m4) return m4[1];

    // 5. Standalone 6-12 digit place ID or path segment
    const m5 = str.match(/(?:^|\/)(\d{6,12})(?:[/?#]|$)/);
    if (m5) return m5[1];

    return null;
}
window.extractKakaoPlaceId = extractKakaoPlaceId;

// ─── Kakao Directions (길찾기) URL Helper ───
function getKakaoDirectionsUrl(item, placeData) {
    if (!item && !placeData) return 'https://map.kakao.com';
    const name = item?.name || placeData?.place_name || '';
    const mapUrl = item?.map_url || placeData?.place_url || '';
    const placeId = (placeData && placeData.id) ? String(placeData.id).trim() : (typeof extractKakaoPlaceId === 'function' ? extractKakaoPlaceId(mapUrl) : null);

    if (placeId) {
        return `https://map.kakao.com/link/to/${placeId}`;
    }

    const lat = placeData?.y || item?.y || item?.lat;
    const lng = placeData?.x || item?.x || item?.lng;
    if (lat && lng) {
        return `https://map.kakao.com/link/to/${encodeURIComponent(name)},${lat},${lng}`;
    }

    return `https://map.kakao.com/?target=car&rt2=${encodeURIComponent(name)}`;
}
window.getKakaoDirectionsUrl = getKakaoDirectionsUrl;

// ─── Kakao & Naver Map URLs Helper ───
// Guarantees Kakao Map button NEVER points to Naver, and Naver Map button uses direct short URL if available
function getPlaceMapUrls(item, placeData = null) {
    const placeName = placeData?.place_name || item?.name || '';
    let kakaoUrl = '';
    let naverUrl = '';

    // 1. Kakao Map URL resolution:
    // Extract Kakao Place ID if present anywhere (placeData.id, place_url, kakao_url, map_url)
    const kakaoPlaceId = (placeData && placeData.id) 
        ? String(placeData.id).trim() 
        : (extractKakaoPlaceId(placeData?.place_url) || 
           extractKakaoPlaceId(item?.kakao_url) || 
           (item?.map_url && !item.map_url.includes('naver.') ? extractKakaoPlaceId(item.map_url) : ''));

    if (kakaoPlaceId) {
        kakaoUrl = `https://place.map.kakao.com/${kakaoPlaceId}`;
    } else if (placeData?.place_url && (placeData.place_url.includes('kakao.com') || placeData.place_url.includes('daum.net'))) {
        kakaoUrl = placeData.place_url;
    } else if (item?.kakao_url && (item.kakao_url.includes('kakao.com') || item.kakao_url.includes('daum.net'))) {
        kakaoUrl = item.kakao_url;
    } else if (item?.map_url && (item.map_url.includes('kakao.com') || item.map_url.includes('daum.net'))) {
        kakaoUrl = item.map_url;
    } else {
        kakaoUrl = `https://map.kakao.com/link/search/${encodeURIComponent(placeName)}`;
    }

    // 2. Naver Map URL resolution:
    if (item?.naver_url && (item.naver_url.includes('naver.me') || item.naver_url.includes('naver.com'))) {
        naverUrl = item.naver_url;
    } else if (item?.map_url && (item.map_url.includes('naver.me') || item.map_url.includes('naver.com'))) {
        naverUrl = item.map_url;
    } else if (item?.friendInfo?.naver_url) {
        naverUrl = item.friendInfo.naver_url;
    } else {
        const loc = item?.location_small ? item.location_small.split('/').pop().trim() : (item?.location_large || '');
        const naverQuery = encodeURIComponent(loc ? `${loc} ${placeName}`.trim() : placeName);
        naverUrl = `https://map.naver.com/p/search/${naverQuery}`;
    }

    return { kakaoUrl, naverUrl };
}
window.getPlaceMapUrls = getPlaceMapUrls;

function extractBranchToken(name) {
    if (!name || typeof name !== 'string') return '';
    const clean = name.trim();
    const mParen = clean.match(/[\(\[](.*?)[\)\]]/);
    if (mParen) return mParen[1].replace(/\s+/g, '');
    const mBranch = clean.match(/([가-힣0-9a-zA-Z]+(?:점|호점|본점|직영점))$/);
    if (mBranch) return mBranch[1].replace(/\s+/g, '');
    const mSpecial = clean.match(/(더현대[가-힣]*|스타필드[가-힣]*|롯데[가-힣]*|신세계[가-힣]*)/);
    if (mSpecial) return mSpecial[1].replace(/\s+/g, '');
    return '';
}
window.extractBranchToken = extractBranchToken;

function isSameRestaurant(a, b) {
    if (!a || !b) return false;

    // ── Tier 1: Kakao Place ID Verification (Absolute ground truth) ──
    const idA = (a.id && String(a.id).trim()) || 
                (typeof extractKakaoPlaceId === 'function' ? extractKakaoPlaceId(a.map_url || a.kakao_url || a.place_url) : null);
    const idB = (b.id && String(b.id).trim()) || 
                (typeof extractKakaoPlaceId === 'function' ? extractKakaoPlaceId(b.map_url || b.kakao_url || b.place_url) : null);

    if (idA && idB) {
        return idA === idB;
    }

    // ── Tier 2: Base Name Verification ──
    const rawA = (a.place_name || a.name || '').trim();
    const rawB = (b.place_name || b.name || '').trim();
    if (!rawA || !rawB) return false;

    const normA = (typeof normalizePlaceName === 'function') ? normalizePlaceName(rawA) : rawA.replace(/\s+/g, '').toLowerCase();
    const normB = (typeof normalizePlaceName === 'function') ? normalizePlaceName(rawB) : rawB.replace(/\s+/g, '').toLowerCase();

    const isExactName = (normA === normB);
    const isSubName = (normA.length >= 2 && normB.length >= 2 && (normA.includes(normB) || normB.includes(normA)));

    if (!isExactName && !isSubName) {
        return false;
    }

    // Explicit branch tokens check (e.g. "문래본점" vs "연남점", "더현대서울" vs "스타필드")
    const branchA = extractBranchToken(rawA);
    const branchB = extractBranchToken(rawB);
    if (branchA && branchB && branchA !== branchB) {
        return false;
    }

    // ── Tier 3: Coordinate Distance Check (GPS Proximity) ──
    const xA = parseFloat(a.x || 0);
    const yA = parseFloat(a.y || 0);
    const xB = parseFloat(b.x || 0);
    const yB = parseFloat(b.y || 0);

    if (xA > 0 && yA > 0 && xB > 0 && yB > 0) {
        const dx = (xA - xB) * 88000;
        const dy = (yA - yB) * 111000;
        const distMeters = Math.sqrt(dx * dx + dy * dy);

        // Different branches are typically kilometers apart.
        if (distMeters > 600) {
            return false;
        }

        // Close proximity with name match = definite match
        if (distMeters <= 300) {
            return true;
        }
    }

    // ── Tier 4: Location & Address Verification ──
    const addrA = `${a.road_address_name || a.road_address || ''} ${a.address_name || a.address || ''} ${a.location_large || ''} ${a.location_small || ''}`.trim().toLowerCase();
    const addrB = `${b.road_address_name || b.road_address || ''} ${b.address_name || b.address || ''} ${b.location_large || ''} ${b.location_small || ''}`.trim().toLowerCase();

    if (addrA && addrB) {
        // 4a. Province mismatch
        const sidoA = addrA.match(/^(서울|경기|인천|부산|대구|대전|광주|울산|세종|강원|충북|충남|전북|전남|경북|경남|제주)/);
        const sidoB = addrB.match(/^(서울|경기|인천|부산|대구|대전|광주|울산|세종|강원|충북|충남|전북|전남|경북|경남|제주)/);
        if (sidoA && sidoB && sidoA[1] !== sidoB[1]) {
            return false;
        }

        // 4b. District mismatch (구/군)
        const distsA = (addrA.match(/([가-힣]+(?:구|군))/g) || []);
        const distsB = (addrB.match(/([가-힣]+(?:구|군))/g) || []);
        const guA = distsA[0] || null;
        const guB = distsB[0] || null;

        if (guA && guB && guA !== guB && !guA.includes(guB) && !guB.includes(guA)) {
            return false;
        }

        // 4c. Dong / Eup / Myeon mismatch
        const dongsA = (addrA.match(/([가-힣0-9]+(?:동|읍|면|가))\b/g) || []);
        const dongsB = (addrB.match(/([가-힣0-9]+(?:동|읍|면|가))\b/g) || []);
        const dongA = dongsA[0] || null;
        const dongB = dongsB[0] || null;
        if (dongA && dongB && dongA !== dongB && !dongA.includes(dongB) && !dongB.includes(dongA)) {
            return false;
        }

        // 4d. Branch token validation against target address
        if (branchA && !branchB) {
            const coreA = branchA.replace(/(?:점|호점|본점|직영점)$/, '');
            if (coreA.length >= 2 && !addrB.includes(coreA)) {
                return false;
            }
        }
        if (branchB && !branchA) {
            const coreB = branchB.replace(/(?:점|호점|본점|직영점)$/, '');
            if (coreB.length >= 2 && !addrA.includes(coreB)) {
                return false;
            }
        }

        if (guA && guB && (guA === guB || guA.includes(guB) || guB.includes(guA))) {
            return true;
        }

        const cleanA = addrA.replace(/\s+/g, '');
        const cleanB = addrB.replace(/\s+/g, '');
        if (cleanA.includes(cleanB) || cleanB.includes(cleanA)) {
            return true;
        }
    }

    // ── Tier 5: Fallback ──
    if (branchA || branchB) {
        return false;
    }

    return isExactName;
}
window.isSameRestaurant = isSameRestaurant;

function isSavedRestaurantMatch(r, place) {
    return isSameRestaurant(r, place);
}
window.isSavedRestaurantMatch = isSavedRestaurantMatch;

// ─── Food-Related Place Filtering Utility ───
// Strictly keeps dining, cafes, bars, wedding halls, convenience stores, and food retailers.
// Completely filters out non-food establishments (hair salons, dental clinics, crossroads, subway exits, apartments, etc.)
function isFoodRelatedPlace(place, masterData = []) {
    if (!place) return false;

    // 1. Saved Restaurant Priority: Any restaurant saved by user is always kept!
    if (Array.isArray(masterData) && masterData.length > 0 && typeof isSavedRestaurantMatch === 'function') {
        const isSaved = masterData.some(r => isSavedRestaurantMatch(r, place));
        if (isSaved) return true;
    }

    const groupCode = (place.category_group_code || '').trim().toUpperCase();
    const catName = (place.category_name || '').trim().toLowerCase();
    const placeName = (place.place_name || '').trim().toLowerCase();

    // 2. Strict Exclusions by Category Group Code
    // Non-food groups: Hospitals(HP8), Pharmacies(PM9), Subway/Stations(SW8), Banks(BK9), 
    // Gas stations(OL7), Public offices(PO3), Schools(SC4), Academies(AC5), Parking(PK6), Real estate(AG2)
    const nonFoodGroupCodes = ['HP8', 'PM9', 'SW8', 'BK9', 'OL7', 'PO3', 'SC4', 'AC5', 'PK6', 'AG2', 'AT4', 'AD5'];
    if (nonFoodGroupCodes.includes(groupCode)) {
        // Exception: Check if it's explicitly a wedding hall/banquet inside hotel or food store
        const isWeddingOrFood = catName.includes('웨딩') || catName.includes('예식장') || catName.includes('음식점') || catName.includes('식품');
        if (!isWeddingOrFood) {
            return false;
        }
    }

    // 3. Strict Exclusions by Place Name Keywords (Common infrastructure & non-food services)
    const negativeNameKeywords = [
        '교차로', '사거리', '삼거리', '오거리', '번출구', '지하철출구', '역출구',
        '치과의원', '치과', '성형외과', '피부과의원', '한의원', '동물병원', '약국',
        '헤어', '미용실', '네일', '바버샵', '피부관리', '에스테틱', '왁싱', '마사지',
        'kt플라자', 't월드', 't world', 'u+스퀘어', 'lg유플러스', '알뜰폰',
        '공인중개사', '부동산', '세무사', '법무사', '행정사', '변호사', '회계사',
        '아파트', '빌라', '오피스텔', '주상복합', '타운하우스', '연립주택',
        '주유소', '충전소', '세차장', '정비소', '타이어',
        '빨래방', '세탁소', '크린토피아',
        '독서실', '스터디룸', '고시원', '고시텔',
        '피트니스', '필라테스', '헬스장', '스크린골프', '골프연습장', '볼링장', '당구장'
    ];
    for (let i = 0; i < negativeNameKeywords.length; i++) {
        if (placeName.includes(negativeNameKeywords[i])) {
            if (!catName.startsWith('음식점') && !catName.startsWith('카페')) {
                return false;
            }
        }
    }

    // 4. Strict Exclusions by Category Name Keywords
    const negativeCatKeywords = [
        '미용', '헤어', '네일', '피부', '마사지', '스파', '왁싱', '이발', '이용원', '메이크업',
        '병원', '의원', '치과', '한의원', '약국', '보건소', '산후조리원', '동물병원', '안과', '피부과', '성형외과', '정형외과', '내과', '이비인후과',
        '교통', '지하철', '지하철출구', '버스', '정류장', '교차로', '도로시설', '주차장', '주유소', '세차장', '정비소', '터미널', '철도',
        '통신', '통신사대리점', '대리점', '휴대폰',
        '부동산', '공인중개사', '아파트', '주거시설', '빌라', '오피스텔', '주택', '건물', '빌딩',
        '학원', '학교', '독서실', '스터디룸', '고시원',
        '은행', '금융', '보험', '증권', 'atm', '새마을금고', '신협',
        '세탁', '수리', '인테리어', '철물', '열쇠', '도장',
        '의류', '패션', '잡화', '신발', '안경', '화장품',
        '스포츠', '헬스', '피트니스', '필라테스', '요가', '골프', '당구', '볼링', '수영',
        '종교', '교회', '성당', '사찰', '절',
        '사회,공공', '공공기관', '주민센터', '경찰서', '소방서', '우체국'
    ];
    for (let i = 0; i < negativeCatKeywords.length; i++) {
        if (catName.includes(negativeCatKeywords[i])) {
            const isException = catName.includes('웨딩') || catName.includes('예식장') || catName.includes('편의점') || catName.includes('음식점') || catName.includes('카페');
            if (!isException) {
                return false;
            }
        }
    }

    // 5. Positive Group Codes
    // FD6 = 음식점, CE7 = 카페, CS2 = 편의점
    if (groupCode === 'FD6' || groupCode === 'CE7' || groupCode === 'CS2') {
        return true;
    }

    // 6. Positive Category Name Keywords
    const positiveCatKeywords = [
        '음식점', '카페', '커피', '디저트',
        '술집', '주점', '호프', '바(bar)', '와인바', '이자카야', '포차', '맥주', '선술집', '간이주점', '포장마차', '유흥주점',
        '한식', '중식', '일식', '양식', '분식', '패스트푸드', '치킨', '피자', '도시락', '야식', '뷔페', '패밀리레스토랑', '퓨전요리', '아시아음식',
        '베이커리', '제과', '제빵', '떡집', '방앗간', '도넛', '와플', '베이글', '아이스크림', '빙수', '찻집', '티하우스',
        '웨딩홀', '예식장', '웨딩',
        '편의점',
        '푸드코트', '식품관', '식료품', '식자재', '식품판매', '식품',
        '정육점', '수산물', '청과', '과일', '반찬', '축산물',
        '슈퍼,마트'
    ];
    for (let i = 0; i < positiveCatKeywords.length; i++) {
        if (catName.includes(positiveCatKeywords[i])) {
            return true;
        }
    }

    // 7. Positive Place Name Keywords Fallback
    const positiveNameKeywords = [
        '식당', '키친', '베이커리', '카페', '커피', '호프', '포차', '치킨', '피자', '버거',
        '갈비', '삼겹살', '곱창', '막창', '초밥', '스시', '라멘', '우동', '돈까스', '돈가스',
        '짜장', '짬뽕', '마라탕', '떡볶이', '김밥', '국밥', '설렁탕', '순대', '보쌈', '족발',
        '횟집', '회집', '수산', '정육', '반찬', '웨딩홀', '예식장', '편의점',
        'gs25', 'cu', '세븐일레븐', '이마트24', '푸드'
    ];
    for (let i = 0; i < positiveNameKeywords.length; i++) {
        if (placeName.includes(positiveNameKeywords[i])) {
            return true;
        }
    }

    return false;
}
window.isFoodRelatedPlace = isFoodRelatedPlace;

function isPlaceInWishlist(name, place = null) {
    if (!name) return false;
    const list = getUserWishlist();
    if (!list || list.length === 0) return false;

    if (!place) {
        return list.some(item => item.name === name);
    }

    const pPlaceId = place.id ? String(place.id).trim() : extractKakaoPlaceId(place.place_url || place.map_url);
    const placeAddr = ((place.address_name || '') + ' ' + (place.road_address_name || '')).replace(/\s/g, '').toLowerCase();

    return list.some(wItem => {
        const wPlaceId = extractKakaoPlaceId(wItem.map_url);
        if (wPlaceId && pPlaceId) {
            return wPlaceId === pPlaceId;
        }

        const wn = (wItem.name || '').replace(/\s/g, '').toLowerCase();
        const pn = (name || '').replace(/\s/g, '').toLowerCase();
        if (wn !== pn && !pn.includes(wn) && !wn.includes(pn)) {
            return false;
        }

        if (wItem.location && placeAddr) {
            const wLoc = wItem.location.replace(/\s/g, '').toLowerCase();
            return placeAddr.includes(wLoc) || wLoc.includes(placeAddr);
        }

        return wn === pn;
    });
}

window.handleToggleWishlist = function(name, category, location, mapUrl, x = '', y = '') {
    if (!isUserLoggedIn()) {
        alert('카카오 로그인 후 이용하실 수 있습니다.');
        return;
    }

    let list = getUserWishlist();
    const existingIndex = list.findIndex(item => item.name === name);
    let isNowWishlisted = false;

    if (existingIndex > -1) {
        list.splice(existingIndex, 1);
        isNowWishlisted = false;
        alert(`'${name}' 식당을 찜 목록에서 삭제했습니다.`);
    } else {
        list.push({
            name,
            category: category || '음식점',
            location: location || '',
            map_url: mapUrl || '',
            x: x ? String(x) : '',
            y: y ? String(y) : '',
            savedAt: new Date().toISOString()
        });
        isNowWishlisted = true;
        alert(`'${name}' 식당을 찜 목록에 저장했습니다!`);
    }

    saveUserWishlist(list);

    // Update the button text & active class in place detail view (desktop + mobile)
    const btn = document.getElementById('btn-wishlist-toggle');
    if (btn) {
        btn.textContent = isNowWishlisted ? '찜 취소' : '찜하기';
        btn.classList.toggle('active', isNowWishlisted);
    }
    const mobileWishBtn = document.querySelector('.mobile-only-wish-btn');
    if (mobileWishBtn) {
        mobileWishBtn.classList.toggle('active', isNowWishlisted);
        mobileWishBtn.title = isNowWishlisted ? '찜 취소' : '찜하기';
    }
};

window.handleAddPlaceToDiary = function(name, category, location, mapUrl, locLarge = '', locSmall = '') {
    if (!isUserLoggedIn()) {
        alert('카카오 로그인 후 이용하실 수 있습니다.');
        return;
    }

    // 1. Close Detail Modals
    if (typeof closeRestaurantDetailModal === 'function') closeRestaurantDetailModal();
    if (typeof closeMobileOverlay === 'function') closeMobileOverlay();

    // 2. Switch to DIARY tab (simulating click on tab button)
    const diaryTabBtn = document.querySelector('.tab-btn[data-tab="diary"]') || document.querySelector('.mobile-tab-btn[data-tab="diary"]');
    if (diaryTabBtn) {
        diaryTabBtn.click();
    } else {
        if (typeof switchTabUI === 'function') switchTabUI('diary');
        window.location.hash = '#diary';
    }

    // 3. Resolve standard category & location
    let finalCat = category || '';
    if (finalCat && typeof mapKakaoCategoryToStandard === 'function' && typeof DEFAULT_CATEGORIES !== 'undefined' && !DEFAULT_CATEGORIES.includes(finalCat)) {
        finalCat = mapKakaoCategoryToStandard(finalCat, name);
    }

    let finalLarge = locLarge || '';
    let finalSmall = locSmall || '';
    if (!finalLarge && !finalSmall && location) {
        const parsed = (typeof parseStandardLocation === 'function') ? parseStandardLocation(location, '') : { large: '', small: '' };
        finalLarge = parsed.large || '';
        finalSmall = parsed.small || '';
    }

    if (typeof standardizeLocation === 'function' && (finalLarge || finalSmall)) {
        const std = standardizeLocation(finalLarge, finalSmall, name);
        finalLarge = std.large || finalLarge;
        finalSmall = std.small || finalSmall;
    }

    // 4. Open '새 방문 기록 추가' Drawer with Today's Date & Pre-fill Restaurant Info
    setTimeout(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const todayStr = `${year}-${month}-${day}`;

        const prefill = {
            name: name || '',
            category: finalCat || '',
            location_large: finalLarge || '',
            location_small: finalSmall || '',
            mapUrl: mapUrl || ''
        };

        if (typeof openDiaryDrawer === 'function') {
            openDiaryDrawer(todayStr, prefill);
        }

        const nameInput = document.getElementById('diary-input-name');
        if (nameInput) {
            nameInput.value = name || '';
            nameInput.dispatchEvent(new Event('input', { bubbles: true }));
        }

        const mapInput = document.getElementById('diary-input-map');
        if (mapInput && mapUrl) {
            mapInput.value = mapUrl;
        }

        if (typeof notionSelectors !== 'undefined') {
            if (finalCat && notionSelectors.category) {
                notionSelectors.category.setSelected([finalCat]);
            }
            if (finalLarge && finalSmall && notionSelectors.location_small && typeof notionSelectors.location_small.selectSmallWithLarge === 'function') {
                notionSelectors.location_small.selectSmallWithLarge(finalLarge, finalSmall);
            } else {
                if (finalLarge && notionSelectors.location_large) notionSelectors.location_large.setSelected([finalLarge]);
                if (finalSmall && notionSelectors.location_small) notionSelectors.location_small.setSelected([finalSmall]);
            }
        }

        // Focus on name or rate
        if (nameInput) {
            nameInput.focus();
        }
    }, 250);
};

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
    migrateLocalStorageData();
    initKakaoAuth();
    initSharedMapRoute();
    let currentFilters = {
        gourmet: ['me'],
        category: [],
        location_large: [],
        location_small: [],
        rate: [],
        searchQuery: ''
    };
    window.currentFilters = currentFilters;
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

    function setupBottomSheetSwipeGestures() {
        const sheets = [
            {
                handleSel: '#list-detail-modal-overlay .bottom-sheet-handle',
                cardSel: '#list-detail-modal-overlay .list-detail-modal-card',
                overlaySel: '#list-detail-modal-overlay',
                closeFn: () => (typeof closeRestaurantDetailModal === 'function' && closeRestaurantDetailModal(true))
            },
            {
                handleSel: '#diary-add-drawer .bottom-sheet-handle',
                cardSel: '#diary-add-drawer',
                overlaySel: '#diary-drawer-overlay',
                closeFn: () => (typeof closeDiaryDrawer === 'function' && closeDiaryDrawer())
            },
            {
                handleSel: '#mobile-card-overlay .bottom-sheet-handle',
                cardSel: '#mobile-card-detail',
                overlaySel: '#mobile-card-overlay',
                closeFn: () => (typeof closeMobileOverlay === 'function' && closeMobileOverlay())
            },
            {
                handleSel: '#main-sidebar .bottom-sheet-handle',
                cardSel: '#main-sidebar',
                overlaySel: '#sidebar-backdrop',
                closeFn: () => (typeof window.toggleMobileSidebar === 'function' && window.toggleMobileSidebar())
            },
            {
                handleSel: '#friend-manage-modal .bottom-sheet-handle',
                cardSel: '#friend-manage-modal .friend-modal-card',
                overlaySel: '#friend-manage-modal',
                closeFn: () => (typeof window.closeFriendManageModal === 'function' && window.closeFriendManageModal())
            },
            {
                handleSel: '#profile-edit-modal .bottom-sheet-handle',
                cardSel: '#profile-edit-modal .profile-modal-card',
                overlaySel: '#profile-edit-modal',
                closeFn: () => (typeof window.closeProfileEditModal === 'function' ? window.closeProfileEditModal() : null)
            },
            {
                handleSel: '#share-link-modal .bottom-sheet-handle',
                cardSel: '#share-link-modal .share-modal-card',
                overlaySel: '#share-link-modal',
                closeFn: () => (typeof window.closeShareLinkModal === 'function' ? window.closeShareLinkModal() : null)
            },
            {
                handleSel: '#avatar-picker-modal .bottom-sheet-handle',
                cardSel: '#avatar-picker-modal .avatar-picker-card',
                overlaySel: '#avatar-picker-modal',
                closeFn: () => (typeof window.closeAvatarPickerModal === 'function' ? window.closeAvatarPickerModal() : null)
            },
            {
                handleSel: '#insight-modal .bottom-sheet-handle',
                cardSel: '#insight-modal .insight-modal-card',
                overlaySel: '#insight-modal',
                closeFn: () => (typeof window.closeInsightModal === 'function' ? window.closeInsightModal() : null)
            }
        ];

        sheets.forEach(({ handleSel, cardSel, overlaySel, closeFn }) => {
            const handle = document.querySelector(handleSel);
            const card = cardSel ? document.querySelector(cardSel) : null;
            const overlay = overlaySel ? document.querySelector(overlaySel) : null;
            if (!handle || !card) return;

            let startY = 0;
            let currentY = 0;
            let startTime = 0;
            let isDragging = false;
            let hasMoved = false;

            handle.addEventListener('touchstart', (e) => {
                if (!e.touches || !e.touches[0]) return;
                startY = e.touches[0].clientY;
                currentY = startY;
                startTime = Date.now();
                isDragging = true;
                hasMoved = false;
                card.style.transition = 'none';
                if (overlay) overlay.style.transition = 'none';
            }, { passive: true });

            handle.addEventListener('touchmove', (e) => {
                if (!isDragging || !e.touches || !e.touches[0]) return;
                currentY = e.touches[0].clientY;
                const deltaY = currentY - startY;

                if (deltaY > 6) {
                    hasMoved = true;
                }

                if (deltaY > 0) {
                    if (e.cancelable) e.preventDefault();
                    card.style.transform = `translateY(${deltaY}px)`;
                    if (overlay) {
                        const opacityVal = Math.max(0.2, 1 - (deltaY / 400));
                        overlay.style.opacity = opacityVal;
                    }
                } else {
                    const damped = deltaY * 0.15;
                    card.style.transform = `translateY(${damped}px)`;
                }
            }, { passive: false });

            const finishDrag = (e) => {
                if (!isDragging) return;
                isDragging = false;

                const endY = (e && e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientY : currentY;
                const deltaY = endY - startY;
                const elapsed = Math.max(1, Date.now() - startTime);
                const velocity = deltaY / elapsed;

                const shouldClose = deltaY > 55 || (velocity > 0.35 && deltaY > 20);

                if (shouldClose) {
                    card.style.transition = 'transform 0.26s cubic-bezier(0.16, 1, 0.3, 1)';
                    card.style.transform = 'translateY(100%)';
                    if (overlay) {
                        overlay.style.transition = 'opacity 0.26s ease';
                        overlay.style.opacity = '0';
                    }
                    setTimeout(() => {
                        card.style.transform = '';
                        card.style.transition = '';
                        if (overlay) {
                            overlay.style.opacity = '';
                            overlay.style.transition = '';
                        }
                        closeFn();
                    }, 260);
                } else {
                    card.style.transition = 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)';
                    card.style.transform = 'translateY(0)';
                    if (overlay) {
                        overlay.style.transition = 'opacity 0.22s ease';
                        overlay.style.opacity = '';
                    }
                    setTimeout(() => {
                        card.style.transform = '';
                        card.style.transition = '';
                        if (overlay) {
                            overlay.style.transition = '';
                        }
                    }, 230);
                }

                startY = 0;
                currentY = 0;
            };

            handle.addEventListener('touchend', finishDrag, { passive: true });
            handle.addEventListener('touchcancel', finishDrag, { passive: true });

            // Laptop/Desktop Mouse Drag Support for Bottom Sheets
            handle.addEventListener('mousedown', (e) => {
                startY = e.clientY;
                currentY = startY;
                startTime = Date.now();
                isDragging = true;
                hasMoved = false;
                card.style.transition = 'none';
                if (overlay) overlay.style.transition = 'none';

                const onMouseMove = (ev) => {
                    if (!isDragging) return;
                    currentY = ev.clientY;
                    const deltaY = currentY - startY;
                    if (deltaY > 6) hasMoved = true;
                    if (deltaY > 0) {
                        card.style.transform = `translateY(${deltaY}px)`;
                        if (overlay) {
                            const opacityVal = Math.max(0.2, 1 - (deltaY / 400));
                            overlay.style.opacity = opacityVal;
                        }
                    } else {
                        card.style.transform = `translateY(${deltaY * 0.15}px)`;
                    }
                };

                const onMouseUp = (ev) => {
                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseup', onMouseUp);
                    finishDrag(ev);
                };

                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
            });

            handle.addEventListener('click', () => {
                if (hasMoved) return;
                if (window.innerWidth <= 768) {
                    card.style.transition = 'transform 0.26s cubic-bezier(0.16, 1, 0.3, 1)';
                    card.style.transform = 'translateY(100%)';
                    if (overlay) {
                        overlay.style.transition = 'opacity 0.26s ease';
                        overlay.style.opacity = '0';
                    }
                    setTimeout(() => {
                        card.style.transform = '';
                        card.style.transition = '';
                        if (overlay) {
                            overlay.style.opacity = '';
                            overlay.style.transition = '';
                        }
                        closeFn();
                    }, 260);
                }
            });
        });
    }

    // Initialization
    function init() {
        if (typeof restaurantData === 'undefined') {
            grid.innerHTML = '<div class="error">데이터를 불러올 수 없습니다.</div>';
            return;
        }
        setupFilters();
        setupDynamicLocationFilter();
        setupSearch();
        setupTabs();
        initRecommendTab();
        initFoodInsightsTab();
        setupBottomSheetSwipeGestures();
        try {
            const cKey = typeof getUserCustomOptionsKey === 'function' ? getUserCustomOptionsKey() : 'spoonmap_custom_options';
            const cStore = JSON.parse(localStorage.getItem(cKey) || '{}');
            if (cStore.location_small) {
                delete cStore.location_small;
                localStorage.setItem(cKey, JSON.stringify(cStore));
            }
        } catch (e) { }
        if (typeof initPhotoStorage === 'function') initPhotoStorage();
        if (typeof initAllNotionSelectors === 'function') initAllNotionSelectors();
        render();
    }

    const VALID_TABS = ['list', 'map', 'recommend', 'sommelier', 'diary', 'profile'];

    function parseRoute() {
        const rawHash = (window.location.hash || '').replace(/^#\/?/, '');
        const parts = rawHash.split('/');
        const mainPart = parts[0].split('?')[0];

        // Legacy compatibility: #insights -> redirect to #profile and open insight modal
        if (mainPart === 'insights') {
            setTimeout(() => {
                if (typeof openInsightModal === 'function') openInsightModal();
            }, 200);
            return { tab: 'profile', rawHash, subPath: '', queryParams: {} };
        }

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
        if (!VALID_TABS.includes(targetTab)) targetTab = isUserLoggedIn() ? 'diary' : 'map';
        if (currentActiveTab === targetTab) return;

        const tabBtns = document.querySelectorAll('.tab-btn, .mobile-tab-btn, .mobile-bnav-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        const mobileTabsMenu = document.getElementById('mobile-tabs-menu');
        const mobileFilterBtn = document.getElementById('mobile-filter-toggle-btn');

        tabBtns.forEach(b => {
            if (b.dataset.tab === targetTab) {
                b.classList.add('active');
            } else if (b.classList.contains('mobile-bnav-btn') && b.dataset.tab === 'sommelier' && targetTab === 'recommend') {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });

        // Update AI Sub-Segment buttons in mobile subbar
        document.querySelectorAll('.ai-segment-btn').forEach(btn => {
            if (btn.dataset.subtab === targetTab) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        if (mobileFilterBtn) {
            mobileFilterBtn.style.display = (targetTab === 'list' && (isUserLoggedIn() || window.isSharedMapMode)) ? 'block' : 'none';
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

        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        document.body.classList.toggle('is-map-tab', targetTab === 'map');
        document.body.classList.toggle('is-sommelier-tab', targetTab === 'sommelier');

        updateAuthProtectedViews();

        currentActiveTab = targetTab;
        if (targetTab === 'map') {
            initMap();
            setTimeout(() => { if (map && typeof map.relayout === 'function') map.relayout(); }, 60);
            setTimeout(() => { if (map && typeof map.relayout === 'function') map.relayout(); }, 200);
        } else if (targetTab === 'sommelier') {
            initSommelierTab();
        } else if (targetTab === 'recommend') {
            if (typeof initRecommendTab === 'function') initRecommendTab();
            if (typeof populateRecommendCategories === 'function') populateRecommendCategories();
        } else if (targetTab === 'diary' && isUserLoggedIn()) {
            initDiaryTab();
        } else if (targetTab === 'list' && (isUserLoggedIn() || window.isSharedMapMode || window.currentViewingGourmet)) {
            if (typeof render === 'function') render();
        } else if (targetTab === 'profile' && isUserLoggedIn()) {
            if (typeof renderProfileView === 'function') renderProfileView();
        }
    }
    window.switchTabUI = switchTabUI;

    function switchAiSubTab(targetSubTab) {
        if (targetSubTab !== 'sommelier' && targetSubTab !== 'recommend') targetSubTab = 'sommelier';
        const targetHash = `#${targetSubTab}`;
        if (window.location.hash !== targetHash) {
            window.location.hash = targetHash;
        } else {
            switchTabUI(targetSubTab);
        }
    }
    window.switchAiSubTab = switchAiSubTab;

    function navigateToProfileTab() {
        window.location.hash = '#profile';
        const profileTabBtn = document.querySelector('.tab-btn[data-tab="profile"]') || document.querySelector('.mobile-tab-btn[data-tab="profile"]');
        if (profileTabBtn) {
            profileTabBtn.click();
        } else {
            switchTabUI('profile');
        }
    }
    window.navigateToProfileTab = navigateToProfileTab;

    function handleRoute() {
        const route = parseRoute();
        window.handleRouteGlobal = handleRoute;

        // 1. Switch UI tab
        switchTabUI(route.tab);

        // 2. Handle mobile card overlay
        const overlay = document.getElementById('mobile-card-overlay');
        if (route.subPath === 'detail' && route.queryParams.name) {
            const targetName = decodeURIComponent(route.queryParams.name);
            const unifiedData = getUnifiedRestaurantData();
            const found = unifiedData.find(r => r.name === targetName);
            if (found) {
                openMobileOverlay(found, false);
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
                    mapPlaceDetail.style.display = 'none';
                    const hasItems = mapResultsList.querySelector('.result-item, .map-result-item');
                    if (hasItems) {
                        mapResultsList.style.display = 'block';
                    } else {
                        mapResultsList.style.display = 'none';
                    }
                    if (window.currentMapOverlay) {
                        window.currentMapOverlay.setMap(null);
                        window.currentMapOverlay = null;
                    }
                }
            } else if (route.queryParams.name && mapPlaceDetail && mapPlaceDetail.style.display !== 'flex') {
                const targetName = decodeURIComponent(route.queryParams.name);
                const unifiedData = getUnifiedRestaurantData();
                const found = unifiedData.find(r => r.name === targetName);
                if (found) {
                    showPlaceDetail(found, found.location_large || '', true, found.map_url);
                }
            }
        }
    }

    function setupTabs() {
        const tabBtns = document.querySelectorAll('.tab-btn, .mobile-tab-btn, .mobile-bnav-btn');

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

        DEFAULT_CATEGORIES.forEach(cat => categories.add(cat));

        masterData.forEach(item => {
            if (item.category) {
                item.category.split(',').forEach(c => {
                    const t = c.trim();
                    if (t) {
                        const std = (typeof mapKakaoCategoryToStandard === 'function') ? mapKakaoCategoryToStandard(t, '') : t;
                        categories.add(std || t);
                    }
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

        // Refresh Category Options (Canonical Sort)
        catSelect.innerHTML = '<option value="all">전체</option>';
        const sortedCats = Array.from(categories).sort((a, b) => {
            const idxA = DEFAULT_CATEGORIES.indexOf(a);
            const idxB = DEFAULT_CATEGORIES.indexOf(b);
            if (idxA !== -1 && idxB !== -1) return idxA - idxB;
            if (idxA !== -1) return -1;
            if (idxB !== -1) return 1;
            return a.localeCompare(b, 'ko');
        });
        sortedCats.forEach(cat => {
            const opt = document.createElement('option');
            opt.value = cat;
            opt.textContent = typeof getFormattedTagDisplay === 'function' ? getFormattedTagDisplay(cat) : cat;
            catSelect.appendChild(opt);
        });
        if (Array.from(categories).includes(currentCatVal)) {
            catSelect.value = currentCatVal;
        }

        // Refresh Location Options
        locSelect.innerHTML = '<option value="all">전체</option>';
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
            const itemHeight = (reel.firstElementChild && reel.firstElementChild.offsetHeight) || 180;
            const targetY = (reelItems.length - 1) * itemHeight;
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

                // Smooth scroll to winner container so bottom actions are never cut off
                setTimeout(() => {
                    winnerContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
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
                                const parsedLoc = parseStandardLocation(place.address_name, place.road_address_name);
                                return {
                                    name: place.place_name,
                                    category: place.category_name ? mapKakaoCategoryToStandard(place.category_name, place.place_name) : (selectedCat !== 'all' ? selectedCat : '🍚한식'),
                                    location_large: parsedLoc.large || (place.address_name ? place.address_name.split(' ').slice(0, 2).join(' ') : '지역 정보'),
                                    location_small: distText ? `📍 기준지에서 ${distText}` : (parsedLoc.small || place.road_address_name || place.address_name || ''),
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
                                <a href="${(typeof getPlaceMapUrls === 'function' ? getPlaceMapUrls(item, { place_url: placeUrl }).kakaoUrl : (placeUrl || item.map_url || '#'))}" target="_blank" rel="noopener noreferrer" style="background:#FEE2E2; color:#DC2626; text-decoration:none; padding:5px 12px; border-radius:12px; font-size:0.78rem; font-weight:800;">카카오맵 📍</a>
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
                        const target = data.find(d => isSavedRestaurantMatch(item, d)) || data[0];
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

    // ─── Jump from LIST Detail Modal ('Map' button) to MAP Tab with Place Detail Open ───
    function openListRestaurantOnMapTab(item) {
        if (!item || !item.name) return;

        if (typeof closeRestaurantDetailModal === 'function') {
            closeRestaurantDetailModal();
        }
        if (typeof window.closeAllMobileMapPopovers === 'function') {
            window.closeAllMobileMapPopovers();
        }

        switchTabUI('map');
        window.location.hash = '#map';
        initMap();

        setTimeout(() => {
            const searchInput = document.getElementById('map-search-input');
            if (searchInput) searchInput.value = item.name;

            if (typeof kakao === 'undefined' || !kakao.maps || !map) return;
            if (typeof map.relayout === 'function') map.relayout();

            if (window.rouletteMapHighlightOverlay) {
                window.rouletteMapHighlightOverlay.setMap(null);
                window.rouletteMapHighlightOverlay = null;
            }
            markers.forEach(m => m.setMap(null));
            markers = [];

            const isSaved = !item.sourceUserId || item.sourceUserId === 'me' || !!item.isOverlapping;
            const isWishlist = !!item.isWishlist || (typeof isPlaceInWishlist === 'function' && isPlaceInWishlist(item.name, item));

            const focusPlaceOnMap = (lat, lng, placeData) => {
                const coords = new kakao.maps.LatLng(lat, lng);
                map.setCenter(coords);
                map.setLevel(3);

                const placeObj = placeData || {
                    place_name: item.name,
                    category_name: item.category || '음식점',
                    address_name: item.road_address || [item.location_large, item.location_small].filter(Boolean).join(' '),
                    road_address_name: item.road_address || '',
                    x: String(lng),
                    y: String(lat),
                    place_url: item.map_url || `https://map.kakao.com/link/search/${encodeURIComponent(item.name)}`
                };

                renderSingleMarker(item, placeObj, isSaved, new kakao.maps.LatLngBounds(), false, isWishlist);
                openPlaceOverlayAndDetail(item, placeObj, isSaved, isWishlist, coords);
            };

            const ps = new kakao.maps.services.Places();
            const geocoderObj = new kakao.maps.services.Geocoder();
            const searchKeyword = item.location_small
                ? `${item.location_small.split('/').pop().trim()} ${item.name}`
                : (item.location_large ? `${item.location_large} ${item.name}` : item.name);

            ps.keywordSearch(searchKeyword, (data, status) => {
                if (status === kakao.maps.services.Status.OK && data.length > 0) {
                    const matched = data.find(d => isSavedRestaurantMatch(item, d));
                    if (matched) {
                        focusPlaceOnMap(parseFloat(matched.y), parseFloat(matched.x), matched);
                        return;
                    }
                    if (item.x && item.y && !isNaN(parseFloat(item.y)) && !isNaN(parseFloat(item.x))) {
                        focusPlaceOnMap(parseFloat(item.y), parseFloat(item.x), null);
                        return;
                    }
                    focusPlaceOnMap(parseFloat(data[0].y), parseFloat(data[0].x), data[0]);
                } else if (item.x && item.y && !isNaN(parseFloat(item.y)) && !isNaN(parseFloat(item.x))) {
                    focusPlaceOnMap(parseFloat(item.y), parseFloat(item.x), null);
                } else {
                    const addrToSearch = item.road_address || item.location_small || item.location_large || item.name;
                    geocoderObj.addressSearch(addrToSearch, (res, geoStatus) => {
                        if (geoStatus === kakao.maps.services.Status.OK && res.length > 0) {
                            focusPlaceOnMap(parseFloat(res[0].y), parseFloat(res[0].x), null);
                        } else {
                            ps.keywordSearch(item.name, (fallbackData, fbStatus) => {
                                if (fbStatus === kakao.maps.services.Status.OK && fallbackData.length > 0) {
                                    const target = fallbackData.find(d => isSavedRestaurantMatch(item, d)) || fallbackData[0];
                                    focusPlaceOnMap(parseFloat(target.y), parseFloat(target.x), target);
                                }
                            });
                        }
                    });
                }
            });
        }, 280);
    }
    window.openListRestaurantOnMapTab = openListRestaurantOnMapTab;

    function initMap() {
        if (map) {
            window.map = map;
            setTimeout(() => { if (map && typeof map.relayout === 'function') map.relayout(); }, 50);
            return;
        }

        const container = document.getElementById('kakao-map');
        checkAndInit();

        function checkAndInit() {
            if (typeof kakao !== 'undefined' && kakao.maps && kakao.maps.services) {
                kakao.maps.load(() => {
                    initializeActualMap();
                });
                return;
            }
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
            if (map) {
                window.map = map;
                return;
            }
            const options = {
                center: new kakao.maps.LatLng(37.5665, 126.9780),
                level: 7
            };

            try {
                map = new kakao.maps.Map(container, options);
                window.map = map;
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
                if (researchBtn) {
                    researchBtn.addEventListener('click', () => {
                        researchBtn.style.display = 'none';
                        updateMapMarkers();
                        if (typeof window.syncActiveOverlayResultsList === 'function') {
                            window.syncActiveOverlayResultsList();
                        }
                    });
                }

                // Global Search Toggle logic
                window.isGlobalSearchActive = false;
                const globalToggleBtn = document.getElementById('btn-global-toggle');
                if (globalToggleBtn) {
                    globalToggleBtn.addEventListener('click', () => {
                        window.isGlobalSearchActive = !window.isGlobalSearchActive;
                        globalToggleBtn.classList.toggle('active', window.isGlobalSearchActive);
                        
                        if (window.isGlobalSearchActive) {
                            if (researchBtn) researchBtn.style.display = 'none';
                        }
                        if (typeof updateMapMarkers === 'function') {
                            updateMapMarkers();
                        }
                    });
                }

                // My Location GPS Button Setup
                const myLocBtn = document.getElementById('btn-my-location');
                if (myLocBtn) {
                    myLocBtn.addEventListener('click', () => {
                        window.moveToUserLocation();
                    });
                }

                kakao.maps.event.addListener(map, 'dragstart', () => {
                    if (window.currentHoverOverlay) {
                        window.currentHoverOverlay.setMap(null);
                        window.currentHoverOverlay = null;
                    }
                    if (typeof window.closeAllMobileMapPopovers === 'function') {
                        window.closeAllMobileMapPopovers();
                    }
                });

                kakao.maps.event.addListener(map, 'click', () => {
                    if (window.currentHoverOverlay) {
                        window.currentHoverOverlay.setMap(null);
                        window.currentHoverOverlay = null;
                    }
                    if (typeof window.closeAllMobileMapPopovers === 'function') {
                        window.closeAllMobileMapPopovers();
                    }
                });

                // Map drag: show "현 위치에서 재검색" button and re-prioritize overlay results list for new viewport
                kakao.maps.event.addListener(map, 'dragend', () => {
                    if (typeof window.syncActiveOverlayResultsList === 'function') {
                        const activeIds = (typeof getActiveFriendIds === 'function') ? getActiveFriendIds() : [];
                        if (window.isMyRestaurantsActive || activeIds.length > 0) {
                            window.syncActiveOverlayResultsList();
                        }
                    }
                    if (window.isGlobalSearchActive) return;
                    if (researchBtn) {
                        researchBtn.style.display = 'inline-flex';
                    }
                });
                // NOTE: zoom_changed intentionally not wired - causes setBounds loop.

                // Initialize friend chips and active overlays if any
                if (typeof renderFriendChips === 'function') {
                    renderFriendChips();
                    const activeIds = (typeof getActiveFriendIds === 'function') ? getActiveFriendIds() : [];
                    if (activeIds.length > 0 && typeof renderAllActiveFriendOverlays === 'function') {
                        renderAllActiveFriendOverlays(window.pendingZoomFriendId || (activeIds.length === 1 ? activeIds[0] : null));
                    }
                }

                console.log("Map visualization ready.");
            } catch (e) {
                console.error("Critical error creating map:", e);
            }
        }
    }
    window.initMap = initMap;

    window.moveToUserLocation = function() {
        const myLocBtn = document.getElementById('btn-my-location');
        if (!navigator.geolocation) {
            alert('이 기기 또는 브라우저에서는 위치 서비스를 지원하지 않습니다.');
            return;
        }

        if (myLocBtn) myLocBtn.classList.add('locating');

        const geoOptions = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 60000
        };

        navigator.geolocation.getCurrentPosition(
            (position) => {
                if (myLocBtn) myLocBtn.classList.remove('locating');
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                const locLatLng = new kakao.maps.LatLng(lat, lng);

                if (map) {
                    map.panTo(locLatLng);
                    map.setLevel(4);

                    if (!window.userLocationOverlay) {
                        const dotEl = document.createElement('div');
                        dotEl.className = 'current-loc-pulse-dot';
                        dotEl.title = '내 위치';
                        window.userLocationOverlay = new kakao.maps.CustomOverlay({
                            position: locLatLng,
                            content: dotEl,
                            zIndex: 200
                        });
                        window.userLocationOverlay.setMap(map);
                    } else {
                        window.userLocationOverlay.setPosition(locLatLng);
                        window.userLocationOverlay.setMap(map);
                    }

                    const researchBtn = document.getElementById('btn-research');
                    if (researchBtn) researchBtn.style.display = 'none';

                    if (typeof updateMapMarkers === 'function') {
                        updateMapMarkers();
                    }

                    try {
                        localStorage.setItem('spoonmap_last_gps', JSON.stringify({ lat, lng, time: Date.now() }));
                    } catch (e) {}

                    if (typeof showToast === 'function') {
                        showToast('현재 위치로 이동했습니다 📍');
                    }
                }
            },
            (err) => {
                if (myLocBtn) myLocBtn.classList.remove('locating');
                console.warn('[GPS] Geolocation error:', err);

                let msg = '위치를 가져올 수 없습니다.';
                if (err.code === 1) {
                    msg = '위치 권한이 차단되어 있습니다. 스마트폰 또는 브라우저 설정에서 위치 권한을 허용해주세요.';
                } else if (err.code === 2) {
                    msg = 'GPS 신호를 찾을 수 없습니다. 잠시 후 다시 시도해주세요.';
                } else if (err.code === 3) {
                    msg = '위치 확인 시간이 초과되었습니다. 다시 시도해주세요.';
                }
                alert(msg);
            },
            geoOptions
        );
    };

    const categoryEmojis = {
        '음식점': '🍴',
        '고기': '🥩',
        '치킨': '🍗',
        '일식': '🍣',
        '중식': '🥢',
        '면요리': '🍜',
        '국/찌개': '🍲',
        '국밥': '🍲',
        '양식': '🍝',
        '피자': '🍕',
        '패스트푸드': '🍔',
        '해산물': '🐟',
        '분식': '🍢',
        '카페': '☕',
        '술집': '🍺',
        '샐러드': '🥗',
        '뷔페': '🍽️',
        '세계요리': '🌮',
        '아시아음식': '🌮',
        '한식': '🍚',
        '패밀리레스토랑': '🍴',
        '간식': '🍪'
    };

    const getEmoji = (categoryText, placeName = '') => {
        if (!categoryText && !placeName) return '🍴';
        const str = `${categoryText || ''} ${placeName || ''}`;
        if (typeof mapKakaoCategoryToStandard === 'function') {
            const std = mapKakaoCategoryToStandard(categoryText, placeName);
            const m = std.match(/[\p{Extended_Pictographic}\uD83C-\uDBFF\uDC00-\uDFFF]/u);
            if (m) return m[0];
        }
        const subPriorities = ['고기', '치킨', '피자', '패스트푸드', '일식', '중식', '양식', '해산물', '국/찌개', '국밥', '면요리', '분식', '술집', '카페', '샐러드', '뷔페', '세계요리', '한식'];
        for (const sub of subPriorities) {
            if (str.includes(sub)) return categoryEmojis[sub] || '🍴';
        }
        return '🍴';
    };

    function updateMapMarkers() {
        if (!map) return;

        const researchBtn = document.getElementById('btn-research');
        if (researchBtn) researchBtn.style.display = 'none';

        const resultsList = document.getElementById('map-results-list');
        const detailPanel = document.getElementById('map-place-detail');
        const mapSearchValue = document.getElementById('map-search-input').value.trim();

        // Clear existing markers and overlays
        markers.forEach(m => m.setMap(null));
        markers = [];
        if (window.currentHoverOverlay) window.currentHoverOverlay.setMap(null);
        window.currentHoverOverlay = null;
        if (window.currentMapOverlay) window.currentMapOverlay.setMap(null);
        window.currentMapOverlay = null;

        resultsList.innerHTML = '';
        detailPanel.style.display = 'none';
        const isInitialState = !mapSearchValue && !window.currCategory && !window.currSubKeyword && !(window.isSharedMapMode && window.sharedMapData);
        if (isInitialState) {
            resultsList.style.display = 'none';
        } else {
            resultsList.style.display = 'block';
        }

        const quickFilters = document.querySelector('.map-quick-filters');
        if (quickFilters) {
            if (mapSearchValue || window.currCategory || window.currSubKeyword) {
                quickFilters.style.display = 'none';
            } else {
                quickFilters.style.display = 'flex';
            }
        }

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
                    updateMapMarkers();
                }
            });

            const subItems = newItem.querySelectorAll('.sub-menu li');
            subItems.forEach(sub => {
                sub.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const keyword = sub.dataset.keyword || '';
                    window.currCategory = 'FD6';
                    window.currSubKeyword = (!keyword || keyword === '음식점' || keyword === '전체') ? '' : keyword;
                    
                    document.querySelectorAll('#category-menu > li').forEach(li => li.classList.remove('on'));
                    document.querySelectorAll('.sub-menu li').forEach(li => li.classList.remove('active'));
                    sub.classList.add('active');

                    newItem.classList.add('on');
                    newItem.classList.remove('sub-open');

                    // Sync mobile catChip
                    const catChip = document.getElementById('btn-cat-chip');
                    const catIcon = document.getElementById('cat-chip-icon');
                    const catText = document.getElementById('cat-chip-text');
                    const catClear = document.getElementById('cat-chip-clear');
                    if (catChip) {
                        if (!window.currSubKeyword) {
                            catChip.classList.remove('cat-active');
                            if (catIcon) catIcon.innerText = '🍴';
                            if (catText) { catText.innerText = '전체'; catText.style.display = 'inline'; }
                            if (catClear) catClear.style.display = 'inline';
                        } else {
                            catChip.classList.add('cat-active');
                            const emojiMap = {
                                '한식': '🍚', '일식': '🍣', '중식': '🥢', '양식': '🍝',
                                '고기': '🥩', '카페': '☕', '술집': '🍺', '분식': '🍢',
                                '치킨': '🍗', '피자': '🍕', '패스트푸드': '🍔', '아시안': '🍜', '아시아음식': '🍜',
                                '샐러드': '🥗', '기타': '🍽️'
                            };
                            if (catIcon) catIcon.innerText = emojiMap[window.currSubKeyword] || '🍴';
                            if (catText) { catText.innerText = ''; catText.style.display = 'none'; }
                            if (catClear) catClear.style.display = 'inline';
                        }
                    }

                    const resultsList = document.getElementById('map-results-list');
                    if (resultsList) {
                        resultsList.style.display = 'block';
                    }
                    updateMapMarkers();
                });
            });
        });

        // Close sub-menu dropdown on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#category-menu')) {
                document.querySelectorAll('#category-menu > li.sub-open').forEach(li => {
                    li.classList.remove('sub-open');
                });
            }
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
            const detailPanel = document.getElementById('map-place-detail');
            const quickFilters = document.querySelector('.map-quick-filters');
            if (detailPanel) detailPanel.style.display = 'none';
            if (quickFilters) quickFilters.style.display = 'none';
            if (resultsList) {
                resultsList.style.display = 'block';
                resultsList.scrollTop = 0;
                resultsList.innerHTML = `<div class="map-empty-state"><p>🔍 지도 화면 전체에서 대량의 맛집 · 10페이지 분량을 수집 중...</p></div>`;
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

            const masterData = getUnifiedRestaurantData();

            // Supplementary Search: If station/region query, category query, or few food places found, also fetch '[query] 맛집' to discover real restaurants!
            const isStationOrArea = /(?:역|동|구|군|시|거리|길|로|\d+가)$/.test(query.trim()) || 
                ['홍대', '신촌', '이태원', '강남', '건대', '대학로', '압구정', '여의도', '명동', '성수', '한남', '을지로', '문래', '연남', '망원', '혜화', '잠실', '판교', '서현', '정자'].includes(query.trim());

            if ((searchType === 'keyword' || searchType === 'category') && (isStationOrArea || uniquePlacesMap.size < 15) && query && query !== 'FD6' && !query.includes('맛집')) {
                try {
                    const extraResults = await Promise.all(
                        targetBoundsList.map(b => fetchPlacesForBounds(ps, 'keyword', `${query} 맛집`, b))
                    );
                    const extraPlaces = extraResults.flat();
                    extraPlaces.forEach(p => {
                        const key = p.id || `${p.place_name}_${p.x}_${p.y}`;
                        if (!uniquePlacesMap.has(key) && isFoodRelatedPlace(p, masterData)) {
                            uniquePlacesMap.set(key, p);
                        }
                    });
                } catch (err) {
                    console.error('Supplementary food places search error:', err);
                }
            }

            // Fallback Search: If 0 places found, search around map center
            if (uniquePlacesMap.size === 0 && query) {
                try {
                    const center = map.getCenter();
                    const queriesToTry = (query === 'FD6' || !query) ? [] : [query, `${query} 맛집`];
                    for (const q of queriesToTry) {
                        const fallbackPlaces = await new Promise(res => {
                            ps.keywordSearch(q, (data, status) => {
                                if (status === kakao.maps.services.Status.OK && data && data.length > 0) res(data);
                                else res([]);
                            }, { location: center, radius: 8000, sort: kakao.maps.services.SortBy.ACCURACY });
                        });
                        fallbackPlaces.forEach(p => {
                            const key = p.id || `${p.place_name}_${p.x}_${p.y}`;
                            if (!uniquePlacesMap.has(key) && isFoodRelatedPlace(p, masterData)) {
                                uniquePlacesMap.set(key, p);
                            }
                        });
                        if (uniquePlacesMap.size > 0) break;
                    }
                    if ((query === 'FD6' || !query || uniquePlacesMap.size === 0) && searchType === 'category') {
                        const centerPlaces = await new Promise(res => {
                            ps.categorySearch('FD6', (data, status) => {
                                if (status === kakao.maps.services.Status.OK && data && data.length > 0) res(data);
                                else res([]);
                            }, { location: center, radius: 8000, sort: kakao.maps.services.SortBy.ACCURACY });
                        });
                        centerPlaces.forEach(p => {
                            const key = p.id || `${p.place_name}_${p.x}_${p.y}`;
                            if (!uniquePlacesMap.has(key) && isFoodRelatedPlace(p, masterData)) {
                                uniquePlacesMap.set(key, p);
                            }
                        });
                    }
                } catch (err) {
                    console.error('Center fallback search error:', err);
                }
            }

            // Filter by Food-Related Places ONLY! (No hair salons, dental clinics, crossroads, subway exits, apartments, etc.)
            let uniquePlaces = Array.from(uniquePlacesMap.values()).filter(p => isFoodRelatedPlace(p, masterData));

            if (uniquePlaces.length === 0) {
                if (resultsList) {
                    resultsList.style.display = 'block';
                    resultsList.innerHTML = `<div class="map-empty-state"><p>음식 · 식당 관련 검색 결과가 없습니다.</p></div>`;
                }
                return;
            }

            // Match with Unified Master Data (My Saved Restaurants / Diary)
            const processedResults = [];
            const searchBounds = new kakao.maps.LatLngBounds();

            uniquePlaces.forEach(place => {
                const savedMatch = masterData.find(r => isSavedRestaurantMatch(r, place));

                const parsedLoc = parseStandardLocation(place.address_name, place.road_address_name);
                const item = savedMatch || {
                    name: place.place_name,
                    category: place.category_name ? mapKakaoCategoryToStandard(place.category_name, place.place_name) : (place.category_group_name || '🍚한식'),
                    location_large: parsedLoc.large || place.address_name,
                    location_small: parsedLoc.small || '',
                    rate: '카카오맵 데이터'
                };

                if (typeof findFriendInfoForPlace === 'function') {
                    const fi = findFriendInfoForPlace(item, place, !!savedMatch);
                    if (fi) item.friendInfo = fi;
                }

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
            if (window.isSharedMapMode && window.sharedMapData) {
                renderSharedMapOnMap();
            } else {
                const activeFriendIds = (typeof getActiveFriendIds === 'function') ? getActiveFriendIds() : [];
                if (activeFriendIds.length > 0 && typeof window.renderAllActiveFriendOverlays === 'function') {
                    window.renderAllActiveFriendOverlays();
                } else {
                    resultsList.style.display = 'none';
                    resultsList.innerHTML = '';
                }
            }
        }
    }
    window.updateMapMarkers = updateMapMarkers;

    function renderSharedMapOnMap() {
        if (!map || !window.sharedMapData) return;

        const resultsList = document.getElementById('map-results-list');
        const detailPanel = document.getElementById('map-place-detail');
        if (detailPanel) detailPanel.style.display = 'none';
        if (resultsList) resultsList.style.display = 'block';

        markers.forEach(m => m.setMap(null));
        markers = [];
        if (window.currentMapOverlay) {
            window.currentMapOverlay.setMap(null);
            window.currentMapOverlay = null;
        }
        if (window.currentHoverOverlay) {
            window.currentHoverOverlay.setMap(null);
            window.currentHoverOverlay = null;
        }

        const items = window.sharedMapData.restaurants || [];
        if (items.length === 0) {
            if (resultsList) {
                resultsList.innerHTML = `<div class="map-empty-state"><p>등록된 맛집이 없습니다.</p></div>`;
            }
            return;
        }

        const bounds = new kakao.maps.LatLngBounds();
        let hasCoords = false;

        let listHtml = `
            <div class="map-results-header" style="padding:10px 14px; font-weight:700; font-size:0.88rem; color:#333; border-bottom:1px solid #E5E7EB;">
                <span>🍽️ ${window.sharedMapData.userName || '미식가'}님의 맛집 (${items.length})</span>
            </div>
            <ul class="places-list" style="list-style:none; padding:0; margin:0;">
        `;

        items.forEach((item, idx) => {
            const coordsX = item.x;
            const coordsY = item.y;
            if (coordsX && coordsY) {
                const place = {
                    id: item.kakao_id || ('shared_' + idx),
                    place_name: item.name,
                    category_name: item.category || '',
                    road_address_name: item.road_address || '',
                    address_name: [item.location_large, item.location_small].filter(Boolean).join(' '),
                    x: coordsX,
                    y: coordsY,
                    place_url: item.map_url || ''
                };
                renderSingleMarker(item, place, true, bounds, true, !!item.isWishlist);
                bounds.extend(new kakao.maps.LatLng(coordsY, coordsX));
                hasCoords = true;
            }

            const spoonDisplay = item.rate || '🥄';
            const locText = [item.location_large, item.location_small].filter(Boolean).join(' ') || item.road_address || '';
            listHtml += `
                <li class="place-item shared-place-item" data-idx="${idx}" style="padding:12px 14px; border-bottom:1px solid #F1F5F9; cursor:pointer;" onclick="focusSharedMapItem(${idx})">
                    <div style="font-weight:700; font-size:0.92rem; color:#1E293B; display:flex; justify-content:space-between; align-items:center;">
                        <span>${item.name}</span>
                        <span style="font-size:0.8rem; color:#EA580C;">${spoonDisplay}</span>
                    </div>
                    <div style="font-size:0.78rem; color:#64748B; margin-top:3px;">
                        ${item.category || ''}${locText ? ` · ${locText}` : ''}
                    </div>
                </li>
            `;
        });

        listHtml += `</ul>`;
        if (resultsList) resultsList.innerHTML = listHtml;

        if (hasCoords && !bounds.isEmpty()) {
            map.setBounds(bounds);
        }
    }
    window.renderSharedMapOnMap = renderSharedMapOnMap;

    window.focusSharedMapItem = function(idx) {
        if (!window.sharedMapData || !window.sharedMapData.restaurants) return;
        const item = window.sharedMapData.restaurants[idx];
        if (!item) return;

        if (item.x && item.y && map) {
            const pos = new kakao.maps.LatLng(item.y, item.x);
            map.panTo(pos);
        }
        if (typeof openRestaurantDetailModal === 'function') {
            openRestaurantDetailModal(item);
        }
    };

    // Numbered Pagination & Clean Replacement Controller
    function renderPaginatedList(allResults, currentPage) {
        const resultsList = document.getElementById('map-results-list');
        if (!resultsList) return;
        resultsList.style.display = 'block';

        const pageSize = 15;
        const totalPages = Math.ceil(allResults.length / pageSize) || 1;
        const safePage = Math.max(1, Math.min(currentPage, totalPages));

        const startIndex = (safePage - 1) * pageSize;
        const pageItems = allResults.slice(startIndex, startIndex + pageSize);

        // 1. Clear previous page items & Prepend Drag Handle & Reset Scroll to Top!
        resultsList.innerHTML = `
            <div id="map-sheet-handle" class="bottom-sheet-handle"><div class="handle-bar"></div></div>
        `;
        resultsList.scrollTop = 0;
        if (typeof attachMapSheetSwipe === 'function') {
            attachMapSheetSwipe();
        }

        // 2. Build current page items
        pageItems.forEach(res => {
            const { item, place } = res;
            const isSaved = (isOwnerUser() || (typeof isUserLoggedIn === 'function' && isUserLoggedIn())) ? res.isSaved : false;
            const isWishlist = res.isWishlist || isPlaceInWishlist(item.name || place.place_name, place);
            const coords = new kakao.maps.LatLng(place.y, place.x);
            const visits = isSaved ? (item.visit_count || 1) : 0;
            let friendInfo = item.friendInfo;
            if (!friendInfo && typeof findFriendInfoForPlace === 'function') {
                friendInfo = findFriendInfoForPlace(item, place, isSaved);
                if (friendInfo) item.friendInfo = friendInfo;
            }

            let tagBadge = '';
            if (friendInfo) {
                if (friendInfo.isCommon && friendInfo.isMultiFriend) {
                    tagBadge = `<span class="saved-place-chip gold">🌟 나 & 다중 친구 · ${friendInfo.matchesCount}명 공통</span>`;
                } else if (friendInfo.isMultiFriend) {
                    tagBadge = `<span class="saved-place-chip" style="background:#F5F3FF; color:#7C3AED; border:1px solid #DDD6FE; font-weight:700;">🔥 다중 친구 · ${friendInfo.matchesCount}명 추천</span>`;
                } else if (friendInfo.isCommon) {
                    tagBadge = `<span class="saved-place-chip gold">🌟 나 & ${friendInfo.friendName} 공통</span>`;
                } else {
                    tagBadge = `<span class="saved-place-chip red" style="background:${friendInfo.color}15; color:${friendInfo.color}; border:1px solid ${friendInfo.color}44;">📺 ${friendInfo.friendName} 추천</span>`;
                }
            } else if (isSaved) {
                tagBadge = visits >= 2 ? `<span class="saved-place-chip gold">🔥 또간집 · ${visits}회</span>` : `<span class="saved-place-chip red">📍 내 저장 맛집</span>`;
            } else if (isWishlist) {
                tagBadge = `<span class="saved-place-chip yellow">⭐ 찜 식당</span>`;
            }

            const itemClass = isSaved ? 'is-saved' : (isWishlist ? 'is-wishlist' : '');
            const resultItem = document.createElement('div');
            resultItem.className = `result-item ${itemClass}`;
            resultItem.innerHTML = `
                <div class="result-item-top">
                    <h4>${(item?.closed || res?.isClosed) ? '<s>' + (place.place_name || item.name) + '</s> <span class="badge-closed">폐점</span>' : (place.place_name || item.name)}</h4>
                    ${tagBadge}
                </div>
                <p>${place.category_name?.split(' > ').pop() || item.category} • ${place.address_name || item.location_large}</p>
            `;

            resultItem.addEventListener('click', () => {
                openPlaceOverlayAndDetail(item, place, isSaved, isWishlist, coords);
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

            // Auto-center active page button in scroll view (가로 스크롤 전용 수식으로 부모 세로 스크롤 튕김 방지!)
            if (activeBtn) {
                pagContainer.scrollLeft = activeBtn.offsetLeft - (pagContainer.offsetWidth / 2) + (activeBtn.offsetWidth / 2);
            }
            resultsList.scrollTop = 0;
        }

        resultsList.scrollTop = 0;
        requestAnimationFrame(() => {
            if (resultsList) resultsList.scrollTop = 0;
        });
    }
    window.renderPaginatedList = renderPaginatedList;

    // =========================================================================
    // Unified Modern Marker System (Compact 26x34px Teardrop Pin + Floating Capsule)
    // =========================================================================
    function getCategoryEmoji(catString, placeName = '') {
        const raw = (catString || '').trim();
        // 1. Extract emoji directly if already present in string (e.g. '🥩고기', '🍣일식', '🍲국/찌개')
        const emojiMatch = raw.match(/[\p{Extended_Pictographic}\uD83C-\uDBFF\uDC00-\uDFFF]/u);
        if (emojiMatch) return emojiMatch[0];

        // 2. Map through standard category mapper using both category text and place name
        if (typeof mapKakaoCategoryToStandard === 'function') {
            const std = mapKakaoCategoryToStandard(raw, placeName);
            const stdEmoji = std.match(/[\p{Extended_Pictographic}\uD83C-\uDBFF\uDC00-\uDFFF]/u);
            if (stdEmoji) return stdEmoji[0];
        }

        // 3. Fallback to existing getEmoji helper
        if (typeof getEmoji === 'function') {
            const fb = getEmoji(raw, placeName);
            if (fb && fb !== '🍴') return fb;
        }

        return '🍴';
    }

    const markerSvgCache = new Map();

    function getModernMarkerSvg(type, category = '', isFlame = false, friendBadge = null, friendBadges = null, placeName = '') {
        // Collect badges list
        let allBadges = [];
        if (Array.isArray(friendBadges) && friendBadges.length > 0) {
            allBadges = friendBadges;
        } else if (Array.isArray(friendBadge) && friendBadge.length > 0) {
            allBadges = friendBadge;
        } else if (friendBadge && typeof friendBadge === 'object') {
            allBadges = [friendBadge];
        }

        const friendKey = allBadges.map(b => `${b.text || ''}_${b.color || ''}`).join(';');
        const safePlaceKey = (placeName || '').slice(0, 15);
        const cacheKey = `c38_${type}_${category}_${safePlaceKey}_${isFlame}_${friendKey}`;
        if (markerSvgCache.has(cacheKey)) {
            return markerSvgCache.get(cacheKey);
        }

        let innerBg = '#FFFFFF';
        let borderColor = '#FF5A5F';
        let iconContent = '';
        let strokeGradient = '';
        let shadowColor = '#000000';
        let shadowOpacity = 0.25;

        const isCommonType = (type === 'common' || type === 'common_multi');

        if (type === 'saved') {
            innerBg = '#FFFFFF';
            borderColor = '#FF4757';
            const emoji = getCategoryEmoji(category, placeName);
            iconContent = `<text x="19" y="19.5" font-size="14.5" text-anchor="middle" dominant-baseline="central" font-family="'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif">${emoji}</text>`;
        } else if (type === 'common_multi') {
            innerBg = '#FFFBEB';
            borderColor = '#F59E0B';
            shadowColor = '#D97706';
            shadowOpacity = 0.42;
            const emoji = getCategoryEmoji(category, placeName);
            iconContent = `<text x="19" y="19.5" font-size="14.5" text-anchor="middle" dominant-baseline="central" font-family="'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif">${emoji}</text>`;
        } else if (type === 'multi_friend') {
            innerBg = '#FAF5FF';
            borderColor = '#7C3AED';
            shadowColor = '#7C3AED';
            shadowOpacity = 0.38;
            const c1 = allBadges[0]?.color || '#EF4444';
            const c2 = allBadges[1]?.color || '#2563EB';
            const c3 = allBadges[2]?.color || '#059669';
            if (allBadges.length >= 3) {
                strokeGradient = `
                    <linearGradient id="multiGrad_${cacheKey.replace(/[^a-zA-Z0-9]/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="${c1}"/>
                        <stop offset="50%" stop-color="${c2}"/>
                        <stop offset="100%" stop-color="${c3}"/>
                    </linearGradient>
                `;
            } else {
                strokeGradient = `
                    <linearGradient id="multiGrad_${cacheKey.replace(/[^a-zA-Z0-9]/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="${c1}"/>
                        <stop offset="100%" stop-color="${c2}"/>
                    </linearGradient>
                `;
            }
            const emoji = getCategoryEmoji(category, placeName);
            iconContent = `<text x="19" y="19.5" font-size="14.5" text-anchor="middle" dominant-baseline="central" font-family="'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif">${emoji}</text>`;
        } else if (type === 'common') {
            innerBg = '#FFFBEB';
            borderColor = '#F59E0B';
            shadowColor = '#D97706';
            shadowOpacity = 0.38;
            const emoji = getCategoryEmoji(category, placeName);
            iconContent = `<text x="19" y="19.5" font-size="14.5" text-anchor="middle" dominant-baseline="central" font-family="'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif">${emoji}</text>`;
        } else if (type === 'friend') {
            innerBg = '#FFFFFF';
            borderColor = allBadges[0]?.color || '#8B5CF6';
            const emoji = getCategoryEmoji(category, placeName);
            iconContent = `<text x="19" y="19.5" font-size="14.5" text-anchor="middle" dominant-baseline="central" font-family="'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif">${emoji}</text>`;
        } else if (type === 'wishlist') {
            innerBg = '#FFFFFF';
            borderColor = '#F59E0B';
            iconContent = `<text x="19" y="19.5" font-size="14.5" text-anchor="middle" dominant-baseline="central" font-family="'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif">⭐</text>`;
        } else {
            // General Kakao search place
            innerBg = '#FFFFFF';
            borderColor = '#64748B';
            const emoji = getCategoryEmoji(category, placeName);
            iconContent = `<text x="19" y="19.5" font-size="14.5" text-anchor="middle" dominant-baseline="central" font-family="'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif">${emoji || '🍴'}</text>`;
        }

        // Top badges: Right shoulder (friend avatars) + Left shoulder (common star or flame)
        let shoulderBadges = '';

        // Left shoulder: Star badge for common intersection (My restaurant & Friend)
        if (isCommonType) {
            shoulderBadges += `
                <circle cx="8.5" cy="8.5" r="5.6" fill="#FFFBEB" stroke="#F59E0B" stroke-width="1"/>
                <text x="8.5" y="9.2" font-size="6.5" text-anchor="middle" dominant-baseline="central">⭐</text>
            `;
        } else if (isFlame && type === 'saved') {
            shoulderBadges += `
                <circle cx="8.5" cy="8.5" r="5.6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1"/>
                <text x="8.5" y="9.2" font-size="6.5" text-anchor="middle" dominant-baseline="central">🔥</text>
            `;
        }

        // Right shoulder: Friend avatar badges
        if (allBadges.length >= 3) {
            const b1 = allBadges[0];
            const b2 = allBadges[1];
            const b3 = allBadges[2];
            shoulderBadges += `
                <circle cx="16" cy="6.8" r="4.8" fill="#FFFFFF" stroke="${b1.color || '#EF4444'}" stroke-width="1"/>
                <circle cx="16" cy="6.8" r="3.8" fill="${b1.color || '#EF4444'}"/>
                <text x="16" y="7.4" font-size="4.5" text-anchor="middle" dominant-baseline="central" font-weight="800" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">${b1.text || '또'}</text>

                <circle cx="23.5" cy="7.6" r="4.8" fill="#FFFFFF" stroke="${b2.color || '#2563EB'}" stroke-width="1"/>
                <circle cx="23.5" cy="7.6" r="3.8" fill="${b2.color || '#2563EB'}"/>
                <text x="23.5" y="8.2" font-size="4.5" text-anchor="middle" dominant-baseline="central" font-weight="800" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">${b2.text || '먹'}</text>

                <circle cx="31" cy="9.4" r="4.8" fill="#FFFFFF" stroke="${b3.color || '#059669'}" stroke-width="1"/>
                <circle cx="31" cy="9.4" r="3.8" fill="${b3.color || '#059669'}"/>
                <text x="31" y="10.0" font-size="4.5" text-anchor="middle" dominant-baseline="central" font-weight="800" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">${b3.text || '정'}</text>
            `;
        } else if (allBadges.length === 2) {
            const b1 = allBadges[0];
            const b2 = allBadges[1];
            shoulderBadges += `
                <circle cx="23" cy="7.8" r="5.5" fill="#FFFFFF" stroke="${b1.color || '#EF4444'}" stroke-width="1"/>
                <circle cx="23" cy="7.8" r="4.5" fill="${b1.color || '#EF4444'}"/>
                <text x="23" y="8.5" font-size="5.2" text-anchor="middle" dominant-baseline="central" font-weight="800" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">${b1.text || '또'}</text>

                <circle cx="30.5" cy="9.5" r="5.5" fill="#FFFFFF" stroke="${b2.color || '#2563EB'}" stroke-width="1"/>
                <circle cx="30.5" cy="9.5" r="4.5" fill="${b2.color || '#2563EB'}"/>
                <text x="30.5" y="10.2" font-size="5.2" text-anchor="middle" dominant-baseline="central" font-weight="800" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">${b2.text || '먹'}</text>
            `;
        } else if (allBadges.length === 1) {
            const b = allBadges[0];
            shoulderBadges += `
                <circle cx="29" cy="9" r="6" fill="#FFFFFF" stroke="${b.color || '#6366F1'}" stroke-width="1"/>
                <circle cx="29" cy="9" r="5" fill="${b.color || '#6366F1'}"/>
                <text x="29" y="9.8" font-size="5.8" text-anchor="middle" dominant-baseline="central" font-weight="800" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">${b.text || '👤'}</text>
            `;
        }

        const safeKey = cacheKey.replace(/[^a-zA-Z0-9]/g, '');
        const shadowId = `sh38_${type}${isFlame ? '_f' : ''}_${safeKey}`;
        const strokeProp = strokeGradient ? `url(#multiGrad_${safeKey})` : borderColor;
        const strokeW = strokeGradient ? '3.5' : (isCommonType ? '3.4' : '3.0');

        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
            <defs>
                ${strokeGradient}
                <filter id="${shadowId}" x="-25%" y="-25%" width="150%" height="150%">
                    <feDropShadow dx="0" dy="1.8" stdDeviation="2.0" flood-color="${shadowColor}" flood-opacity="${shadowOpacity}"/>
                </filter>
            </defs>
            <circle cx="19" cy="19" r="14.5" fill="${innerBg}" stroke="${strokeProp}" stroke-width="${strokeW}" filter="url(#${shadowId})"/>
            ${iconContent}
            ${shoulderBadges}
        </svg>`;

        const dataUri = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
        markerSvgCache.set(cacheKey, dataUri);
        return dataUri;
    }

    // Backward-compatible alias constants
    const RED_MARKER_SVG = getModernMarkerSvg('saved', '한식', false);
    const YELLOW_MARKER_SVG = getModernMarkerSvg('wishlist');
    const BLUE_MARKER_SVG = getModernMarkerSvg('search');

    window.currentHoverOverlay = null;

    function createMarkerCapsuleHtml(item, place, isSaved, isWishlist, isHover = false) {
        const name = place?.place_name || item?.name || '';
        const visits = isSaved ? (item?.visit_count || 1) : 0;

        let icon = '🍴';
        let iconCircleClass = '';
        let iconCircleStyle = '';
        let metaHtml = '';
        let cardClass = '';

        if (item?.friendInfo) {
            const fi = item.friendInfo;
            if (fi.isMultiFriend) {
                icon = '🔥';
                iconCircleClass = 'multi';
                cardClass = fi.isCommon ? 'is-multi is-common' : 'is-multi';
                const friendsTitle = (fi.allMatches && fi.allMatches.length > 0) 
                    ? fi.allMatches.map(m => m.friendName).join(' & ')
                    : '다중 친구';
                if (fi.isCommon) {
                    metaHtml = `<span class="capsule-badge-common">🌟 나 & ${friendsTitle} 공통</span>`;
                } else {
                    metaHtml = `<span class="capsule-badge-multi">🔥 ${friendsTitle} 동시 추천</span>`;
                }
            } else if (fi.isCommon) {
                icon = '🌟';
                iconCircleClass = 'common';
                cardClass = 'is-common';
                metaHtml = `<span class="capsule-badge-common">👥 나 & ${fi.friendName} 공통 맛집</span>`;
            } else {
                icon = fi.avatarText || '👤';
                iconCircleClass = 'friend';
                iconCircleStyle = `background:${fi.color}; color:#ffffff;`;
                cardClass = 'is-friend';
                metaHtml = `<span class="capsule-badge-friend" style="color:${fi.color}; border-color:${fi.color}44;">👤 ${fi.friendName} 추천</span>`;
            }
        } else if (isSaved) {
            icon = getCategoryEmoji(item?.category || place?.category_name, name);
            iconCircleClass = 'saved';
            cardClass = 'is-saved';

            let rateHtml = '';
            if (item?.rate) {
                const spoonCount = (item.rate.match(/🥄/g) || []).length;
                if (spoonCount > 0) {
                    rateHtml = `<span class="capsule-badge-rate">🥄 ${spoonCount}</span>`;
                }
            }

            let visitHtml = '';
            if (visits >= 2) {
                visitHtml = `<span class="capsule-badge-repeat">🔥 또간집 · ${visits}회</span>`;
            } else {
                visitHtml = `<span class="capsule-badge-visit">📍 1회 방문</span>`;
            }

            metaHtml = `${rateHtml} ${visitHtml}`.trim();
        } else if (isWishlist) {
            icon = '⭐';
            iconCircleClass = 'wishlist';
            cardClass = 'is-wishlist';
            metaHtml = `<span class="capsule-badge-wish">⭐ 가고싶은 곳</span>`;
        } else {
            icon = getCategoryEmoji(place?.category_name || item?.category, name);
            iconCircleClass = 'search';
            const catName = place?.category_name ? place.category_name.split(' > ').pop() : (item?.category || '음식점');
            metaHtml = `<span class="capsule-badge-cat">${catName}</span>`;
        }

        const hoverClass = isHover ? 'is-hover' : '';

        return `
            <div class="marker-capsule-wrap ${hoverClass}" onclick="window.reopenCurrentPlaceDetail && window.reopenCurrentPlaceDetail();">
                <div class="marker-capsule-card ${cardClass}">
                    <div class="capsule-icon-circle ${iconCircleClass}" ${iconCircleStyle ? `style="${iconCircleStyle}"` : ''}>${icon}</div>
                    <div class="capsule-content">
                        <div class="capsule-title-row">
                            <span class="capsule-name">${name}</span>
                        </div>
                        ${metaHtml ? `<div class="capsule-meta-row">${metaHtml}</div>` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    function attachMarkerEvents(marker, item, place, isSaved, isWishlist, coords) {
        kakao.maps.event.addListener(marker, 'mouseover', () => {
            const selectedPlace = window.currentSelectedPlaceData?.place;
            const selectedItem = window.currentSelectedPlaceData?.item;
            const isAlreadySelected = (selectedPlace && place && (selectedPlace.id === place.id || selectedPlace.place_name === place.place_name)) ||
                                      (selectedItem && item && selectedItem.name === item.name);
            if (isAlreadySelected && window.currentMapOverlay) {
                return;
            }

            if (window.currentHoverOverlay) {
                window.currentHoverOverlay.setMap(null);
                window.currentHoverOverlay = null;
            }

            const hoverContent = createMarkerCapsuleHtml(item, place, isSaved, isWishlist, true);
            window.currentHoverOverlay = new kakao.maps.CustomOverlay({
                position: coords,
                content: hoverContent,
                yAnchor: 1.0,
                zIndex: 99990
            });
            window.currentHoverOverlay.setMap(map);
        });

        kakao.maps.event.addListener(marker, 'mouseout', () => {
            if (window.currentHoverOverlay) {
                window.currentHoverOverlay.setMap(null);
                window.currentHoverOverlay = null;
            }
        });

        kakao.maps.event.addListener(marker, 'click', () => {
            if (window.currentHoverOverlay) {
                window.currentHoverOverlay.setMap(null);
                window.currentHoverOverlay = null;
            }
            openPlaceOverlayAndDetail(item, place, isSaved, isWishlist, coords);
        });
    }

    window.reopenCurrentPlaceDetail = function() {
        if (window.currentSelectedPlaceData) {
            const d = window.currentSelectedPlaceData;
            showPlaceDetail(d.item, d.address, d.isSaved, d.detailsUrl, d.place);
        }
    };

    function openPlaceOverlayAndDetail(item, place, isSaved, isWishlist, coords) {
        map.panTo(coords);
        if (window.currentHoverOverlay) {
            window.currentHoverOverlay.setMap(null);
            window.currentHoverOverlay = null;
        }
        if (window.currentMapOverlay) {
            window.currentMapOverlay.setMap(null);
            window.currentMapOverlay = null;
        }

        if (!item.friendInfo && typeof findFriendInfoForPlace === 'function') {
            const fi = findFriendInfoForPlace(item, place, isSaved);
            if (fi) item.friendInfo = fi;
        }

        const effectiveSaved = isSaved || !!item.friendInfo?.isCommon;

        const detailsUrl = place?.place_url || item?.map_url || '';
        window.currentSelectedPlaceData = {
            item,
            address: place?.road_address_name || place?.address_name || item?.location_large || '',
            isSaved: effectiveSaved,
            detailsUrl,
            place
        };

        const overlayContent = createMarkerCapsuleHtml(item, place, effectiveSaved, isWishlist, false);
        window.currentMapOverlay = new kakao.maps.CustomOverlay({
            position: coords,
            content: overlayContent,
            yAnchor: 1.0,
            zIndex: 99999
        });
        window.currentMapOverlay.setMap(map);

        showPlaceDetail(item, place?.road_address_name || place?.address_name, effectiveSaved, detailsUrl, place);
    }

    function renderSingleMarker(item, place, isSavedParam, bounds, shouldExtendBounds = false, isWishlistParam = false, friendInfo = null) {
        const isSaved = (isOwnerUser() || window.isSharedMapMode) ? isSavedParam : false;
        const isWishlist = isWishlistParam || isPlaceInWishlist(item.name || place.place_name, place);
        const coords = new kakao.maps.LatLng(place.y, place.x);
        const visits = isSaved ? (item?.visit_count || 1) : 0;
        const isFlame = isSaved && visits >= 2;

        let finalFriendInfo = friendInfo || item.friendInfo;
        if (!finalFriendInfo && typeof findFriendInfoForPlace === 'function') {
            finalFriendInfo = findFriendInfoForPlace(item, place, isSaved);
            if (finalFriendInfo) item.friendInfo = finalFriendInfo;
        }

        if (finalFriendInfo) {
            item.friendInfo = finalFriendInfo;
        }

        let markerImg = null;
        if (typeof kakao !== 'undefined' && kakao.maps && kakao.maps.MarkerImage) {
            let svgUri = '';
            if (finalFriendInfo) {
                let markerType = finalFriendInfo.isCommon ? 'common' : 'friend';
                if (finalFriendInfo.isCommon && finalFriendInfo.isMultiFriend) {
                    markerType = 'common_multi';
                } else if (finalFriendInfo.isMultiFriend) {
                    markerType = 'multi_friend';
                }
                const friendBadges = finalFriendInfo.friendBadges || [{ text: finalFriendInfo.avatarText || '👤', color: finalFriendInfo.color || '#6366F1' }];
                svgUri = getModernMarkerSvg(markerType, item?.category || place.category_name, false, friendBadges[0], friendBadges, item?.name || place?.place_name);
            } else if (isSaved) {
                svgUri = getModernMarkerSvg('saved', item?.category || place.category_name, isFlame, null, null, item?.name || place?.place_name);
            } else if (isWishlist) {
                svgUri = getModernMarkerSvg('wishlist', '', false, null, null, item?.name || place?.place_name);
            } else {
                svgUri = getModernMarkerSvg('search', item?.category || place.category_name, false, null, null, item?.name || place?.place_name);
            }
            markerImg = new kakao.maps.MarkerImage(svgUri, new kakao.maps.Size(38, 38), { offset: new kakao.maps.Point(19, 19) });
        }

        let markerZIndex = 1;
        if (finalFriendInfo) {
            if (finalFriendInfo.isCommon && finalFriendInfo.isMultiFriend) {
                markerZIndex = 140;
            } else if (finalFriendInfo.isMultiFriend) {
                markerZIndex = 130;
            } else if (finalFriendInfo.isCommon) {
                markerZIndex = 125;
            } else {
                markerZIndex = 95;
            }
        } else if (isFlame) {
            markerZIndex = 110;
        } else if (isSaved) {
            markerZIndex = 100;
        } else if (isWishlist) {
            markerZIndex = 90;
        }

        const markerOptions = {
            map: map,
            position: coords,
            zIndex: markerZIndex
        };
        if (markerImg) {
            markerOptions.image = markerImg;
        } else {
            markerOptions.opacity = (isSaved || isWishlist || finalFriendInfo) ? 1 : 0.6;
        }

        const marker = new kakao.maps.Marker(markerOptions);
        markers.push(marker);
        
        if (shouldExtendBounds) {
            bounds.extend(coords);
        }

        attachMarkerEvents(marker, item, place, isSaved, isWishlist, coords);
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
        
        const heroContainer = document.querySelector('.main-photo-hero');
        const heroImg = document.getElementById('gallery-main-img');
        if (!heroImg) return;
        
        document.querySelectorAll('.photo-thumb-list .thumb-img').forEach((t, i) => {
            if (i === index) t.classList.add('active');
            else t.classList.remove('active');
        });

        if (heroContainer) {
            if (photo.isUserPhoto) {
                heroContainer.classList.add('is-user-photo');
            } else {
                heroContainer.classList.remove('is-user-photo');
            }
        }

        heroImg.setAttribute('referrerpolicy', 'no-referrer');
        heroImg.onerror = function() {
            this.onerror = null;
            this.src = photo.fallback_url || photo.thumbnail_url;
        };

        heroImg.src = photo.image_url || photo.thumbnail_url;
    };

    function renderCombinedPhotoGallery(containerEl, photos, placeName) {
        if (!containerEl || !photos || photos.length === 0) {
            if (containerEl) containerEl.style.display = 'none';
            return;
        }
        containerEl.style.display = 'block';
        window.currentGalleryPhotos = photos;

        const firstPhoto = photos[0];
        const isFirstUserPhoto = !!firstPhoto.isUserPhoto;
        const safeName = (placeName || '').replace(/'/g, "\\'");

        let thumbsHtml = '';
        if (photos.length > 1) {
            thumbsHtml = `
                <div class="photo-thumb-list">
                    ${photos.map((p, idx) => `
                        <img class="thumb-img ${idx === 0 ? 'active' : ''} ${p.isUserPhoto ? 'is-user-photo' : ''}" 
                             src="${p.thumbnail_url || p.image_url}" 
                             alt="${placeName} 사진 ${idx + 1}"
                             title="${p.isUserPhoto ? '내가 직접 찍은 사진' : '식당 리뷰 사진'}"
                             referrerpolicy="no-referrer"
                             onclick="window.switchGalleryPhoto(${idx})">
                    `).join('')}
                </div>
            `;
        }

        containerEl.innerHTML = `
            <div class="main-photo-hero ${isFirstUserPhoto ? 'is-user-photo' : ''}" 
                 onclick="window.openPhotoLightbox && window.openPhotoLightbox(document.getElementById('gallery-main-img').src, '${safeName}')" 
                 style="cursor: pointer;" title="클릭하면 사진을 크게 봅니다">
                <img id="gallery-main-img" 
                     src="${firstPhoto.image_url}" 
                     alt="${placeName} 음식 사진" 
                     referrerpolicy="no-referrer"
                     onerror="this.onerror=null; this.src='${firstPhoto.fallback_url || firstPhoto.thumbnail_url}';">
            </div>
            ${thumbsHtml}
        `;
    }

    function fetchPlaceFoodPhotos(placeName, categoryName, containerEl, itemData = null, userPhotos = []) {
        if (!containerEl) return;
        containerEl.style.display = 'block';

        // 1. Convert userPhotos to unified gallery items
        const userGalleryItems = (userPhotos || []).map((p, idx) => ({
            image_url: p.url,
            thumbnail_url: p.url,
            fallback_url: p.url,
            isUserPhoto: true
        }));

        // If user already uploaded photos, render them immediately so user sees them right away
        if (userGalleryItems.length > 0) {
            renderCombinedPhotoGallery(containerEl, userGalleryItems, placeName);
        } else {
            containerEl.innerHTML = `<div class="photo-loading-skeleton">📷 선명한 대표 음식 사진 찾는 중...</div>`;
        }

        const cleanName = (placeName || '').replace(/본점|직영점|지점|점$/g, '').trim();
        let catTag = (categoryName || '').split('>').pop().trim().replace(/음식점|기타|맛집/g, '');
        
        // Build optimal search query prioritizing signature dishes
        let dishQuery = '';
        if (itemData) {
            if (itemData.friendInfo && itemData.friendInfo.menu && itemData.friendInfo.menu.length > 0) {
                const firstDish = String(itemData.friendInfo.menu[0]).replace(/\(.*?\)/g, '').replace(/[0-9,원]/g, '').trim();
                if (firstDish && firstDish.length >= 2) dishQuery = firstDish;
            } else if (itemData.menu) {
                const mArr = Array.isArray(itemData.menu) ? itemData.menu : String(itemData.menu).split(',');
                if (mArr.length > 0) {
                    const firstDish = String(mArr[0]).replace(/\(.*?\)/g, '').replace(/[0-9,원]/g, '').trim();
                    if (firstDish && firstDish.length >= 2) dishQuery = firstDish;
                }
            }
        }

        const query = dishQuery ? `${cleanName} ${dishQuery}` : (catTag ? `${cleanName} ${catTag} 음식` : `${cleanName} 맛집 음식`);
        const headers = { 'Authorization': 'KakaoAK 36e745d970cf6ee083e08a59ebf3c951' };
        const imgUrl = `https://dapi.kakao.com/v2/search/image?query=${encodeURIComponent(query)}&size=25`;

        fetch(imgUrl, { headers })
            .then(res => res.json())
            .then(data => {
                let searchPhotos = [];
                if (data && data.documents && data.documents.length > 0) {
                    const banned = [
                        'menu', '메뉴', '가격', '차림표', '영수증', 'receipt', 'bill',
                        'map', '약도', '지도', '위치', '오시는', 'signboard', '간판',
                        '외관', '입구', '출구', '건물', 'interior', '인테리어', '내부',
                        '테이블', '좌석', '매장', '주차', '화장실', '포장', '배달',
                        '포스터', '배너', '쿠폰', '이벤트', 'screenshot', '스크린샷', '캡처', 'capture'
                    ];

                    const filtered = data.documents.filter(doc => {
                        const str = (doc.doc_url + ' ' + doc.image_url + ' ' + doc.display_sitename).toLowerCase();
                        if (banned.some(b => str.includes(b))) return false;

                        const w = parseInt(doc.width || 0, 10);
                        const h = parseInt(doc.height || 0, 10);
                        if (w > 0 && h > 0) {
                            if (w < 400 || h < 300) return false;
                            const ratio = w / h;
                            if (ratio < 0.6 || ratio > 2.0) return false;
                        }
                        return true;
                    });

                    const docsToUse = filtered.length >= 2 ? filtered : data.documents;
                    docsToUse.forEach(doc => {
                        searchPhotos.push({
                            image_url: doc.image_url,
                            fallback_url: doc.thumbnail_url,
                            thumbnail_url: doc.thumbnail_url,
                            width: doc.width,
                            height: doc.height,
                            isUserPhoto: false
                        });
                    });
                }

                // Deduplicate search photos
                const uniqueSearch = [];
                const seen = new Set();
                userGalleryItems.forEach(u => seen.add(u.image_url));

                for (const p of searchPhotos) {
                    const key = p.thumbnail_url || p.image_url;
                    if (!seen.has(key)) {
                        seen.add(key);
                        uniqueSearch.push(p);
                    }
                    if (uniqueSearch.length >= 6) break;
                }

                // Combine: User Photos First + Search Photos Following!
                const combinedPhotos = [...userGalleryItems, ...uniqueSearch];

                if (combinedPhotos.length > 0) {
                    renderCombinedPhotoGallery(containerEl, combinedPhotos, placeName);
                } else if (userGalleryItems.length === 0) {
                    containerEl.style.display = 'none';
                }
            })
            .catch(err => {
                console.error('Error fetching food photos:', err);
                if (userGalleryItems.length === 0) {
                    containerEl.style.display = 'none';
                }
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
                        <div class="blog-review-card">
                            <div class="blog-review-header">
                                <span class="blog-review-header-title">💬 실제 방문자 한줄평</span>
                                <span class="blog-review-header-source">다음 블로그</span>
                            </div>
                            <p class="blog-review-body">
                                "${cleanContents}"
                            </p>
                            <div class="blog-review-footer">
                                <a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="blog-review-more-btn">더보기 ↗</a>
                            </div>
                        </div>
                    `;
                } else {
                    containerEl.innerHTML = `
                        <div class="blog-review-card">
                            <div class="blog-review-header">
                                <span class="blog-review-header-title">💬 실제 방문자 한줄평</span>
                            </div>
                            <p class="blog-review-body" style="-webkit-line-clamp:unset; color:#94A3B8;">아래 카카오맵 상세 버튼에서 전체 별점 및 리뷰를 확인하실 수 있습니다.</p>
                        </div>
                    `;
                }
            })
            .catch(() => {
                containerEl.innerHTML = `
                    <div class="blog-review-card">
                        <div class="blog-review-header">
                            <span class="blog-review-header-title">💬 실제 방문자 한줄평</span>
                        </div>
                        <p class="blog-review-body" style="-webkit-line-clamp:unset; color:#94A3B8;">아래 카카오맵 상세 버튼에서 전체 별점 및 리뷰를 확인하실 수 있습니다.</p>
                    </div>
                `;
            });
    }

    function showPlaceDetail(item, preciseAddress, isSavedParam, placeUrl, placeData) {
        if (!item.friendInfo && typeof findFriendInfoForPlace === 'function') {
            const fi = findFriendInfoForPlace(item, placeData, isSavedParam);
            if (fi) item.friendInfo = fi;
        }

        const isSaved = isOwnerUser() ? (isSavedParam || !!item.friendInfo?.isCommon) : false;
        const detailPanel = document.getElementById('map-place-detail');
        const resultsList = document.getElementById('map-results-list');
        
        // Hide list, show detail
        resultsList.style.display = 'none';
        detailPanel.style.display = 'flex';
        detailPanel.scrollTop = 0;

        const mapDetailHash = `#map/place?name=${encodeURIComponent(item.name)}`;
        if (window.location.hash !== mapDetailHash) {
            history.replaceState(null, '', mapDetailHash);
        }

        // Prefer specifically passed placeUrl, then item.map_url, then fallback to search
        const finalUrl = placeUrl || item.map_url || `https://map.kakao.com/link/search/${encodeURIComponent(item.name)}`;
        
        // If it's a saved item, show Spoon scores. If unvisited, fetch real Daum Blog review snippet!
        const ratingHtml = isSaved 
            ? `<div class="info-label">맛집 등급 · 나의 평점 및 또간집 횟수</div>
               <div class="info-val rating-val" style="display:flex; align-items:center; gap:8px; margin-top:4px;">
                   ${getSpoonBadgeHtml(item)}
               </div>`
            : `<div id="unvisited-blog-review-box" class="info-val" style="margin-top:2px;"></div>`;

        // Detailed category
        const displayCategory = placeData?.category_name || item.category || '기타';
        const displayAddress = placeData?.address_name || item.location_large || preciseAddress;
        const placeX = placeData?.x || item.x || '';
        const placeY = placeData?.y || item.y || '';

        // Hide quick filters when place detail is open
        const quickFilters = document.querySelector('.map-quick-filters');
        if (quickFilters) quickFilters.style.display = 'none';

        const rawAddr = placeData?.address_name || placeData?.road_address_name || preciseAddress || item.location_large || '';
        const roadAddr = placeData?.road_address_name || '';
        const parsedLoc = (typeof parseStandardLocation === 'function') 
            ? parseStandardLocation(rawAddr, roadAddr) 
            : { large: '', small: '' };
        
        let determinedLarge = item.location_large || parsedLoc.large || '';
        let determinedSmall = item.location_small || parsedLoc.small || '';

        if (typeof standardizeLocation === 'function') {
            const std = standardizeLocation(determinedLarge, determinedSmall, item.name);
            determinedLarge = std.large || determinedLarge;
            determinedSmall = std.small || determinedSmall;
        }

        let standardCategory = item.category || '';
        if (!standardCategory && placeData?.category_name && typeof mapKakaoCategoryToStandard === 'function') {
            standardCategory = mapKakaoCategoryToStandard(placeData.category_name, item.name);
        }
        if (!standardCategory) standardCategory = displayCategory;

        const isWishlisted = isPlaceInWishlist(item.name, placeData);
        const mapUrls = (typeof getPlaceMapUrls === 'function') ? getPlaceMapUrls(item, placeData) : {
            kakaoUrl: `https://map.kakao.com/link/search/${encodeURIComponent(item.name)}`,
            naverUrl: `https://map.naver.com/p/search/${encodeURIComponent(item.name)}`
        };
        const safeName = (item.name || '').replace(/'/g, "\\'");
        const safeCategory = (standardCategory || '').replace(/'/g, "\\'");
        const safeAddress = (displayAddress || '').replace(/'/g, "\\'");
        const safeUrl = (mapUrls.kakaoUrl || '').replace(/'/g, "\\'");
        const safeLarge = (determinedLarge || '').replace(/'/g, "\\'");
        const safeSmall = (determinedSmall || '').replace(/'/g, "\\'");

        const actionsHtml = `
            <div class="place-detail-actions">
                <button type="button" class="btn-add-to-diary" onclick="handleAddPlaceToDiary('${safeName}', '${safeCategory}', '${safeAddress}', '${safeUrl}', '${safeLarge}', '${safeSmall}')">➕ 내 맛집에 추가</button>
                <button type="button" id="btn-wishlist-toggle" class="btn-toggle-wishlist ${isWishlisted ? 'active' : ''}" onclick="handleToggleWishlist('${safeName}', '${safeCategory}', '${safeAddress}', '${safeUrl}', '${placeX}', '${placeY}')">${isWishlisted ? '찜 취소' : '찜하기'}</button>
            </div>
        `;

        const routeUrl = getKakaoDirectionsUrl(item, placeData);

        let friendRecommendHtml = '';
        if (item.friendInfo) {
            const fi = item.friendInfo;
            const isMulti = fi.isMultiFriend && fi.allMatches && fi.allMatches.length > 1;

            if (isMulti) {
                const friendsTitle = fi.allMatches.map(m => `<span style="color:${m.color}; font-weight:800;">${m.friendName}</span>`).join(' & ');
                const totalMatches = fi.allMatches.length;

                const matchCards = fi.allMatches.map((m, idx) => `
                    <div class="multi-friend-subcard">
                        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px;">
                            <div style="display:flex; align-items:center; gap:6px;">
                                <span style="width:22px; height:22px; border-radius:50%; background:${m.color}; color:#fff; display:inline-flex; align-items:center; justify-content:center; font-size:10px; font-weight:800; flex-shrink:0;">${m.avatarText}</span>
                                <strong style="font-size:12px; color:#1E293B;">${m.friendName}</strong>
                            </div>
                            <div style="display:flex; align-items:center; gap:5px;">
                                <span style="font-size:10.5px; color:#6B7280; font-weight:700; background:#F1F5F9; padding:1px 6px; border-radius:10px;">${idx + 1} / ${totalMatches}</span>
                            </div>
                        </div>
                        ${m.comment ? `<p style="font-size:11.5px; color:#4B5563; margin:0 0 6px 0; line-height:1.4;">💬 "${m.comment}"</p>` : ''}
                        ${m.youtubeUrl ? `
                            <div style="margin-top:6px;">
                                <a href="${m.youtubeUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:6px; font-size:11.5px; font-weight:600; color:#DC2626; text-decoration:none; background:#FEF2F2; padding:5px 10px; border-radius:7px; border:1px solid #FECACA; width:100%; box-sizing:border-box;">
                                    <span style="display:inline-flex; align-items:center; justify-content:center; width:20px; height:20px; border-radius:50%; background:#EF4444; color:#fff; font-size:10px; flex-shrink:0;">▶</span>
                                    <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1; font-size:11.5px; color:#1F2937;">${m.youtubeTitle || `${m.friendName} 방영 영상 시청`}</span>
                                </a>
                            </div>
                        ` : ''}
                    </div>
                `).join('');

                friendRecommendHtml = `
                    <div class="friend-recommend-card multi" style="flex-shrink:0 !important; width:100%; box-sizing:border-box; display:block; margin-top:10px;">
                        <div class="multi-recommend-header">
                            <div style="display:flex; align-items:center; gap:6px; min-width:0; flex:1;">
                                <span style="font-size:15px; flex-shrink:0;">🔥</span>
                                <strong style="font-size:12.5px; color:#1E293B; word-break:keep-all;">
                                    ${friendsTitle} 동시 추천!
                                </strong>
                            </div>
                        </div>
                        
                        <div class="multi-friend-carousel-track" onwheel="if(Math.abs(event.deltaY)>Math.abs(event.deltaX)){event.currentTarget.scrollLeft += event.deltaY; event.preventDefault();}">
                            ${matchCards}
                        </div>
                        
                        <div class="multi-friend-dots">
                            ${fi.allMatches.map((_, i) => `<span class="multi-dot ${i === 0 ? 'active' : ''}"></span>`).join('')}
                        </div>
                    </div>
                `;
            } else {
                friendRecommendHtml = `
                    <div class="friend-recommend-card" style="background:#F5F3FF; border: 1.5px solid #DDD6FE; margin-top:10px; border-radius:12px; padding:10px 12px;">
                        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                            <span style="width:22px; height:22px; border-radius:50%; background:${fi.color}; color:#fff; display:inline-flex; align-items:center; justify-content:center; font-size:10px; font-weight:800; flex-shrink:0;">${fi.avatarText}</span>
                            <strong style="font-size:12.5px; color:#1E293B;">${fi.friendName} 님의 추천 맛집</strong>
                        </div>
                        ${fi.comment ? `<p style="font-size:11.5px; color:#4B5563; margin:0; line-height:1.4;">💬 "${fi.comment}"</p>` : ''}
                        ${fi.youtubeUrl ? `
                            <div style="margin-top:6px;">
                                <a href="${fi.youtubeUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:6px; font-size:11.5px; font-weight:600; color:#DC2626; text-decoration:none; background:#FEF2F2; padding:5px 10px; border-radius:7px; border:1px solid #FECACA; width:100%; box-sizing:border-box;">
                                    <span style="display:inline-flex; align-items:center; justify-content:center; width:20px; height:20px; border-radius:50%; background:#EF4444; color:#fff; font-size:10px; flex-shrink:0;">▶</span>
                                    <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1; font-size:11.5px; color:#1F2937;">${fi.youtubeTitle || '방영 영상 시청'}</span>
                                </a>
                            </div>
                        ` : ''}
                    </div>
                `;
            }
        }

        detailPanel.innerHTML = `
            <div id="map-detail-sheet-handle" class="bottom-sheet-handle mobile-only" aria-label="상세 정보 창 닫기/접기"><div class="handle-bar"></div></div>
            <div class="detail-body">
                <div class="detail-header-row">
                    <button class="back-to-list-btn" onclick="handleBackFromPlaceDetail()">
                        <span class="desktop-only">← 목록으로 돌아가기</span>
                        <span class="mobile-only">←</span>
                    </button>
                    <div class="detail-title-wrap">
                        <h3 class="detail-title ${item.closed ? 'is-closed' : ''}">${item.closed ? '<s>' + item.name + '</s> <span class="badge-closed">폐점</span>' : item.name}</h3>
                        <div class="detail-tags">
                            <span class="detail-tag tag-category">${displayCategory}</span>
                            <span class="detail-tag tag-location desktop-only">${item.location_small || displayAddress}</span>
                        </div>
                    </div>
                    <button type="button" class="mobile-only-wish-btn mobile-only ${isWishlisted ? 'active' : ''}" 
                        onclick="handleToggleWishlist('${safeName}', '${safeCategory}', '${safeAddress}', '${safeUrl}', '${placeX}', '${placeY}')" 
                        title="${isWishlisted ? '찜 취소' : '찜하기'}">
                        ⭐
                    </button>
                </div>

                <div class="detail-scroll-body">
                    <div id="detail-photo-gallery" class="detail-photo-gallery"></div>

                    ${friendRecommendHtml}
                    
                    <div class="detail-info-list">
                        <div class="info-item">
                            ${ratingHtml}
                        </div>
                    </div>
                </div>

                <div class="detail-footer-actions">
                    <div class="map-link-container">
                        <a href="${mapUrls.naverUrl}" target="_blank" rel="noopener noreferrer" class="detail-naver-btn">
                            <span class="naver-badge">N</span> 네이버 지도
                        </a>
                        <a href="${mapUrls.kakaoUrl}" target="_blank" rel="noopener noreferrer" class="detail-kakao-btn">
                            <span class="kakao-badge">K</span> 카카오맵
                        </a>
                        <a href="${routeUrl}" target="_blank" rel="noopener noreferrer" class="detail-route-btn">
                            🧭 길찾기
                        </a>
                    </div>

                    ${actionsHtml}
                </div>
            </div>
        `;

        const detailScrollEl = detailPanel.querySelector('.detail-scroll-body');
        if (detailScrollEl) {
            detailScrollEl.scrollTop = 0;
        }

        if (typeof attachDetailSheetSwipe === 'function') {
            attachDetailSheetSwipe();
        }

        // Trigger Photo Display: Combine User Photos with Kakao/Daum Search Photos!
        const photoGalleryEl = document.getElementById('detail-photo-gallery');
        const userPhotos = (isSaved && typeof getRestaurantPhotos === 'function') ? getRestaurantPhotos(item.name) : [];
        fetchPlaceFoodPhotos(item.name, displayCategory, photoGalleryEl, item, userPhotos);

        // Setup multi-friend carousel scroll listener & dot navigation & mouse drag-to-scroll
        const multiTrack = detailPanel.querySelector('.multi-friend-carousel-track');
        const multiDots = detailPanel.querySelectorAll('.multi-dot');
        if (multiTrack) {
            if (multiDots.length > 0) {
                multiTrack.addEventListener('scroll', () => {
                    const card = multiTrack.querySelector('.multi-friend-subcard');
                    const cardWidth = card ? card.offsetWidth + 10 : 1;
                    const activeIdx = Math.min(multiDots.length - 1, Math.max(0, Math.round(multiTrack.scrollLeft / cardWidth)));
                    multiDots.forEach((d, i) => d.classList.toggle('active', i === activeIdx));
                }, { passive: true });

                multiDots.forEach((dot, idx) => {
                    dot.addEventListener('click', () => {
                        const cards = multiTrack.querySelectorAll('.multi-friend-subcard');
                        if (cards[idx]) {
                            cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                        }
                    });
                });
            }

            // Mouse Drag-to-Scroll interaction
            let isDown = false;
            let startX = 0;
            let startScrollLeft = 0;
            let isDraggingCard = false;

            multiTrack.addEventListener('mousedown', (e) => {
                if (e.button !== 0) return; // 좌클릭만 허용
                isDown = true;
                isDraggingCard = false;
                startX = e.pageX;
                startScrollLeft = multiTrack.scrollLeft;
                multiTrack.classList.add('is-dragging');
                multiTrack.style.scrollSnapType = 'none';
            });

            const endDrag = () => {
                if (!isDown) return;
                isDown = false;
                multiTrack.classList.remove('is-dragging');
                multiTrack.style.scrollSnapType = 'x mandatory';
                setTimeout(() => {
                    isDraggingCard = false;
                }, 50);
            };

            multiTrack.addEventListener('mouseleave', endDrag);
            multiTrack.addEventListener('mouseup', endDrag);

            multiTrack.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                const dx = e.pageX - startX;
                if (Math.abs(dx) > 5) {
                    isDraggingCard = true;
                }
                multiTrack.scrollLeft = startScrollLeft - dx;
            });

            // Prevent link click when dragged
            multiTrack.addEventListener('click', (e) => {
                if (isDraggingCard) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }, true);
        }

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
        resetMapSearchToInitial();
    });

    window.activeMyRestaurantListItems = [];
    window.activeFriendOverlayListItems = [];

    window.clearActiveMapPlaceSelection = function() {
        if (window.currentHoverOverlay) {
            window.currentHoverOverlay.setMap(null);
            window.currentHoverOverlay = null;
        }
        if (window.currentMapOverlay) {
            window.currentMapOverlay.setMap(null);
            window.currentMapOverlay = null;
        }
        window.currentSelectedPlaceData = null;
        const detailPanel = document.getElementById('map-place-detail');
        if (detailPanel) {
            detailPanel.style.display = 'none';
            detailPanel.style.transform = '';
            detailPanel.classList.remove('collapsed-peek');
        }
        document.querySelectorAll('#map-results-list .map-result-item.selected').forEach(el => {
            el.classList.remove('selected');
        });
    };

    window.syncActiveOverlayResultsList = function(preserveScroll = false) {
        const mapSearchVal = (document.getElementById('map-search-input')?.value || '').trim();
        const switchWishlistEl = document.getElementById('switch-wishlist-toggle');
        const isWishlistActive = !!(switchWishlistEl && switchWishlistEl.checked);
        const hasSearchOrCategory = !!(mapSearchVal || window.currCategory || window.currSubKeyword || isWishlistActive || (window.isSharedMapMode && window.sharedMapData));

        if (hasSearchOrCategory) return;

        const myItems = (window.isMyRestaurantsActive && Array.isArray(window.activeMyRestaurantListItems))
            ? window.activeMyRestaurantListItems
            : [];
        const friendItems = Array.isArray(window.activeFriendOverlayListItems)
            ? window.activeFriendOverlayListItems
            : [];

        const combined = [...friendItems];
        myItems.forEach(myEntry => {
            const alreadyIncluded = combined.some(fEntry =>
                typeof isSameRestaurant === 'function' && isSameRestaurant(fEntry.item, myEntry.item)
            );
            if (!alreadyIncluded) {
                combined.push(myEntry);
            }
        });

        // Prioritize restaurants inside the current map viewport and closest to the current map center
        const activeMap = map || window.map;
        if (combined.length > 1 && activeMap && typeof activeMap.getCenter === 'function') {
            try {
                const center = activeMap.getCenter();
                const cLat = center.getLat();
                const cLng = center.getLng();
                const bounds = (typeof activeMap.getBounds === 'function') ? activeMap.getBounds() : null;

                const getSortMeta = (entry) => {
                    const p = entry?.place || {};
                    const lat = parseFloat(p.y || entry?.item?.y || 0);
                    const lng = parseFloat(p.x || entry?.item?.x || 0);
                    const hasCoord = (p._hasValidXY !== undefined)
                        ? !!p._hasValidXY
                        : (lat > 33 && lat < 39 && lng > 124 && lng < 132 && !(Math.abs(lng - 126.9780) < 0.0005 && Math.abs(lat - 37.5665) < 0.0005));
                    if (!hasCoord) {
                        return { inBounds: false, hasCoord: false, distSq: Infinity };
                    }
                    const distSq = (lat - cLat) * (lat - cLat) + (lng - cLng) * (lng - cLng);
                    let inBounds = false;
                    if (bounds && typeof kakao !== 'undefined' && kakao.maps && kakao.maps.LatLng) {
                        try {
                            inBounds = bounds.contain(new kakao.maps.LatLng(lat, lng));
                        } catch (_) {}
                    }
                    return { inBounds, hasCoord: true, distSq };
                };

                combined.sort((a, b) => {
                    const ma = getSortMeta(a);
                    const mb = getSortMeta(b);
                    if (ma.inBounds !== mb.inBounds) return ma.inBounds ? -1 : 1;
                    if (ma.hasCoord !== mb.hasCoord) return ma.hasCoord ? -1 : 1;
                    return ma.distSq - mb.distSq;
                });
            } catch (_) {}
        }

        const resultsList = document.getElementById('map-results-list');
        const detailPanel = document.getElementById('map-place-detail');
        const paginateFn = (typeof renderPaginatedList === 'function') ? renderPaginatedList : window.renderPaginatedList;

        if (combined.length > 0 && typeof paginateFn === 'function') {
            const prevScroll = (preserveScroll && resultsList) ? resultsList.scrollTop : 0;
            paginateFn(combined, 1);
            if (resultsList) {
                resultsList.style.display = 'block';
                resultsList.style.transform = 'translateY(0)';
                resultsList.classList.remove('collapsed-peek');
                if (preserveScroll && prevScroll > 0) {
                    resultsList.scrollTop = prevScroll;
                }
            }
            if (detailPanel && !preserveScroll) detailPanel.style.display = 'none';
        } else {
            if (typeof window.clearActiveMapPlaceSelection === 'function') {
                window.clearActiveMapPlaceSelection();
            }
            if (resultsList) {
                resultsList.style.display = 'none';
                resultsList.innerHTML = '';
            }
        }
    };

    window.resetMapSearchToInitial = function() {
        const input = document.getElementById('map-search-input');
        if (input) input.value = '';
        window.currCategory = '';
        window.currSubKeyword = '';
        if (currentFilters) currentFilters.searchQuery = '';
        document.querySelectorAll('#category-menu > li').forEach(li => {
            li.classList.remove('on');
            li.classList.remove('sub-open');
        });
        document.querySelectorAll('.sub-menu li').forEach(li => li.classList.remove('active'));

        const popCat = document.getElementById('popover-cat-menu');
        if (popCat) {
            popCat.querySelectorAll('.pop-cat-item').forEach(i => {
                i.classList.remove('active');
                const c = i.querySelector('.check-mark');
                if (c) c.remove();
            });
        }
        const catChip = document.getElementById('btn-cat-chip');
        if (catChip) catChip.classList.remove('cat-active');
        const catIcon = document.getElementById('cat-chip-icon');
        if (catIcon) catIcon.innerText = '🍴';
        const catText = document.getElementById('cat-chip-text');
        if (catText) {
            catText.innerText = '';
            catText.style.display = 'none';
        }
        const catClear = document.getElementById('cat-chip-clear');
        if (catClear) catClear.style.display = 'none';

        const switchWish = document.getElementById('switch-wishlist-toggle');
        if (switchWish) switchWish.checked = false;
        const btnWish = document.getElementById('btn-show-wishlist');
        if (btnWish) btnWish.classList.remove('active');

        const quickFilters = document.querySelector('.map-quick-filters');
        if (quickFilters) quickFilters.style.removeProperty('display');

        if (typeof window.clearActiveMapPlaceSelection === 'function') {
            window.clearActiveMapPlaceSelection();
        }
        const detailPanel = document.getElementById('map-place-detail');
        if (detailPanel) detailPanel.style.display = 'none';
        const resultsList = document.getElementById('map-results-list');
        if (resultsList) {
            resultsList.style.display = 'none';
            resultsList.innerHTML = '';
        }

        markers.forEach(m => m.setMap(null));
        markers = [];
        const activeFriendIds = (typeof getActiveFriendIds === 'function') ? getActiveFriendIds() : [];
        if (activeFriendIds.length > 0 && typeof window.renderAllActiveFriendOverlays === 'function') {
            window.renderAllActiveFriendOverlays();
        }
        if (window.isMyRestaurantsActive && typeof window.renderMyRestaurantsOverlay === 'function') {
            window.renderMyRestaurantsOverlay();
        }
        if (typeof window.syncActiveOverlayResultsList === 'function') {
            window.syncActiveOverlayResultsList();
        }
        if (typeof window.updateMobileStarChipHighlight === 'function') {
            window.updateMobileStarChipHighlight();
        }
    };

    window.handleBackFromPlaceDetail = function() {
        if (window.location.hash.includes('/place')) {
            history.replaceState(null, '', '#map');
        }
        const resultsList = document.getElementById('map-results-list');
        const detailPanel = document.getElementById('map-place-detail');
        const quickFilters = document.querySelector('.map-quick-filters');

        if (detailPanel) detailPanel.style.display = 'none';
        if (resultsList) {
            const hasItems = resultsList.querySelector('.result-item, .map-result-item');
            if (hasItems) {
                resultsList.style.display = 'block';
            } else {
                resultsList.style.display = 'none';
            }
        }
        if (quickFilters) {
            quickFilters.style.removeProperty('display');
        }
    };

    // ─── Show Wishlist Places on Map ───
    async function showWishlistPlacesOnMap() {
        if (!isUserLoggedIn()) {
            alert('카카오 로그인 후 찜 목록을 확인하실 수 있습니다.');
            const switchWish = document.getElementById('switch-wishlist-toggle');
            if (switchWish) switchWish.checked = false;
            return;
        }

        const wishlist = getUserWishlist();
        const resultsList = document.getElementById('map-results-list');
        const detailPanel = document.getElementById('map-place-detail');

        if (detailPanel) detailPanel.style.display = 'none';
        if (resultsList) {
            resultsList.style.display = 'block';
            resultsList.style.transform = 'translateY(0)';
            resultsList.classList.remove('collapsed-peek');
        }

        markers.forEach(m => m.setMap(null));
        markers = [];
        if (window.currentMapOverlay) {
            window.currentMapOverlay.setMap(null);
            window.currentMapOverlay = null;
        }

        if (!wishlist || wishlist.length === 0) {
            if (resultsList) {
                resultsList.innerHTML = `
                    <div class="map-empty-state" style="text-align:center; padding:28px 16px;">
                        <button class="btn-reset-map-search" onclick="resetMapSearchToInitial()">← 검색 초기화면으로</button>
                        <div style="font-size:2rem; margin:14px 0 8px 0;">⭐</div>
                        <p style="font-size:1.02rem; font-weight:800; color:#1E293B; margin:0 0 6px 0;">찜한 식당이 아직 없습니다.</p>
                        <p style="font-size:0.85rem; color:#64748B; margin:0; line-height:1.45;">지도에서 식당을 찾아 [찜하기]를 누르면 여기에 모아볼 수 있습니다.</p>
                    </div>
                `;
            }
            return;
        }

        resultsList.innerHTML = `
            <div class="map-empty-state">
                <p>⌛ 찜한 식당 ${wishlist.length}곳을 지도에 불러오는 중...</p>
            </div>
        `;

        const ps = (typeof kakao !== 'undefined' && kakao.maps && kakao.maps.services) ? new kakao.maps.services.Places() : null;
        const geocoder = (typeof kakao !== 'undefined' && kakao.maps && kakao.maps.services) ? new kakao.maps.services.Geocoder() : null;
        const bounds = new kakao.maps.LatLngBounds();
        const allWishlistResults = [];

        const resolveItem = (wItem) => {
            return new Promise((resolve) => {
                // Case 1: Coordinate already saved
                if (wItem.x && wItem.y) {
                    const place = {
                        place_name: wItem.name,
                        x: wItem.x,
                        y: wItem.y,
                        address_name: wItem.location || '',
                        road_address_name: wItem.location || '',
                        category_name: wItem.category || '음식점',
                        place_url: wItem.map_url || ''
                    };
                    const item = {
                        name: wItem.name,
                        category: wItem.category || '음식점',
                        location_large: wItem.location || '',
                        location_small: wItem.location || '',
                        map_url: wItem.map_url || '',
                        rate: '',
                        visit_count: 0
                    };
                    renderSingleMarker(item, place, false, bounds, true, true);
                    allWishlistResults.push({ item, place, isSaved: false, isWishlist: true });
                    return resolve(true);
                }

                // Case 2: Keyword search with kakao places
                if (ps) {
                    const searchKw = wItem.location ? `${wItem.name} ${wItem.location}` : wItem.name;
                    ps.keywordSearch(searchKw, (data, status) => {
                        if (status === kakao.maps.services.Status.OK && data && data.length > 0) {
                            const place = data.find(d => isSavedRestaurantMatch({ name: wItem.name, map_url: wItem.map_url, location_large: wItem.location }, d)) || data[0];
                            const item = {
                                name: wItem.name,
                                category: wItem.category || (place.category_name ? mapKakaoCategoryToStandard(place.category_name, wItem.name) : '🍚한식'),
                                location_large: wItem.location || place.address_name || '',
                                location_small: place.road_address_name || place.address_name || '',
                                map_url: wItem.map_url || place.place_url || '',
                                rate: '',
                                visit_count: 0
                            };
                            renderSingleMarker(item, place, false, bounds, true, true);
                            allWishlistResults.push({ item, place, isSaved: false, isWishlist: true });
                            return resolve(true);
                        }

                        // Case 3: Geocode with address
                        if (geocoder && wItem.location) {
                            geocoder.addressSearch(wItem.location, (geoRes, geoStatus) => {
                                if (geoStatus === kakao.maps.services.Status.OK && geoRes && geoRes.length > 0) {
                                    const place = {
                                        place_name: wItem.name,
                                        x: geoRes[0].x,
                                        y: geoRes[0].y,
                                        address_name: geoRes[0].address_name,
                                        road_address_name: geoRes[0].road_address?.address_name || '',
                                        category_name: wItem.category || '음식점',
                                        place_url: wItem.map_url || ''
                                    };
                                    const item = {
                                        name: wItem.name,
                                        category: wItem.category || '음식점',
                                        location_large: wItem.location,
                                        location_small: place.address_name,
                                        map_url: wItem.map_url || '',
                                        rate: '',
                                        visit_count: 0
                                    };
                                    renderSingleMarker(item, place, false, bounds, true, true);
                                    allWishlistResults.push({ item, place, isSaved: false, isWishlist: true });
                                    return resolve(true);
                                }
                                // Fallback without map coordinate
                                const place = {
                                    place_name: wItem.name,
                                    x: '126.9780',
                                    y: '37.5665',
                                    address_name: wItem.location || '',
                                    category_name: wItem.category || '음식점',
                                    place_url: wItem.map_url || ''
                                };
                                const item = {
                                    name: wItem.name,
                                    category: wItem.category || '음식점',
                                    location_large: wItem.location || '',
                                    location_small: wItem.location || '',
                                    map_url: wItem.map_url || '',
                                    rate: '',
                                    visit_count: 0
                                };
                                allWishlistResults.push({ item, place, isSaved: false, isWishlist: true });
                                return resolve(true);
                            });
                        } else {
                            // Fallback without coordinates
                            const place = {
                                place_name: wItem.name,
                                x: '126.9780',
                                y: '37.5665',
                                address_name: wItem.location || '',
                                category_name: wItem.category || '음식점',
                                place_url: wItem.map_url || ''
                            };
                            const item = {
                                name: wItem.name,
                                category: wItem.category || '음식점',
                                location_large: wItem.location || '',
                                location_small: wItem.location || '',
                                map_url: wItem.map_url || '',
                                rate: '',
                                visit_count: 0
                            };
                            allWishlistResults.push({ item, place, isSaved: false, isWishlist: true });
                            return resolve(true);
                        }
                    });
                } else {
                    return resolve(false);
                }
            });
        };

        // Run all concurrently
        await Promise.all(wishlist.map(resolveItem));

        if (allWishlistResults.length > 0) {
            renderPaginatedList(allWishlistResults, 1);
            // Prepend a return-to-initial-state button at the top of results list
            const backBtnEl = document.createElement('button');
            backBtnEl.className = 'btn-reset-map-search';
            backBtnEl.style.marginBottom = '12px';
            backBtnEl.style.display = 'block';
            backBtnEl.textContent = '← 검색 초기화면으로';
            backBtnEl.onclick = () => resetMapSearchToInitial();
            resultsList.insertBefore(backBtnEl, resultsList.firstChild);

            if (markers.length > 0) {
                map.setBounds(bounds);
                if (markers.length === 1) map.setLevel(3);
            }
        } else {
            resultsList.innerHTML = `
                <div class="map-empty-state" style="text-align:center; padding:24px 16px;">
                    <button class="btn-reset-map-search" onclick="resetMapSearchToInitial()">← 검색 초기화면으로</button>
                    <p style="margin-top:12px; color:#64748B;">찜한 식당 정보를 불러오지 못했습니다.</p>
                </div>
            `;
        }
    }

    const btnShowWishlist = document.getElementById('btn-show-wishlist');
    if (btnShowWishlist) {
        btnShowWishlist.addEventListener('click', showWishlistPlacesOnMap);
    }

    // ─── Show My Visited Places on Map - 내 식당 지도 오버레이 ───
    window.isMyRestaurantsActive = false;
    window.activeMyRestaurantMarkers = [];

    function renderMyRestaurantsOverlay(preserveScroll = false) {
        let activeMap = map || window.map;
        if (!activeMap && typeof initMap === 'function') {
            initMap();
            activeMap = map || window.map;
        }

        // 1. 기존 내 식당 마커 제거
        if (Array.isArray(window.activeMyRestaurantMarkers)) {
            window.activeMyRestaurantMarkers.forEach(m => m.setMap(null));
        }
        window.activeMyRestaurantMarkers = [];
        window.activeMyRestaurantListItems = [];

        if (!window.isMyRestaurantsActive) {
            if (typeof window.syncActiveOverlayResultsList === 'function') {
                window.syncActiveOverlayResultsList();
            }
            return;
        }

        if (!activeMap) return;

        window._resolvedCoordsCache = window._resolvedCoordsCache || new Map();
        window._coordAttemptedKeys = window._coordAttemptedKeys || new Set();

        const allData = (typeof getUnifiedRestaurantData === 'function') ? getUnifiedRestaurantData() : [];
        const myPlaces = allData.filter(r => (r.visit_count && r.visit_count > 0) || (r.rate && r.rate.length > 0) || !r.isWishlist);

        const filterSettings = (typeof getFriendFilterSettings === 'function') ? getFriendFilterSettings() : null;
        const unresolvedMyItems = [];
        const myListItems = [];

        myPlaces.forEach(item => {
            if (typeof isFriendRestaurantAllowedByFilters === 'function' && !isFriendRestaurantAllowedByFilters(item, filterSettings)) {
                return;
            }

            const cacheKey = `${(item.name || '').trim().toLowerCase()}|${(item.location_large || item.road_address || '').trim().toLowerCase()}`;
            if (window._resolvedCoordsCache.has(cacheKey)) {
                const cached = window._resolvedCoordsCache.get(cacheKey);
                item.x = cached.x;
                item.y = cached.y;
                if (cached.road_address && !item.road_address) item.road_address = cached.road_address;
            }

            const x = parseFloat(item.x || 0);
            const y = parseFloat(item.y || 0);
            const hasValidXY = x > 124 && x < 132 && y > 33 && y < 39 &&
                !(Math.abs(x - 126.9780) < 0.0005 && Math.abs(y - 37.5665) < 0.0005);

            if (!hasValidXY && !window._coordAttemptedKeys.has(cacheKey) && !item._resolvingNow && unresolvedMyItems.length < 60 && typeof resolveRestaurantCoordinates === 'function') {
                unresolvedMyItems.push(item);
            }

            const place = {
                place_name: item.name,
                category_name: item.category || '음식점',
                address_name: item.road_address || [item.location_large, item.location_small].filter(Boolean).join(' '),
                road_address_name: item.road_address || '',
                x: hasValidXY ? String(x) : '126.9780',
                y: hasValidXY ? String(y) : '37.5665',
                _hasValidXY: hasValidXY,
                place_url: item.map_url || `https://map.kakao.com/link/search/${encodeURIComponent(item.name)}`
            };

            myListItems.push({
                item: item,
                place: place,
                isSaved: true,
                isWishlist: false
            });

            if (!hasValidXY) return;

            const coords = new kakao.maps.LatLng(y, x);
            const svgUri = getModernMarkerSvg('saved', item.category, false, null, null, item.name);
            let markerImg = null;
            if (typeof kakao !== 'undefined' && kakao.maps && kakao.maps.MarkerImage) {
                markerImg = new kakao.maps.MarkerImage(svgUri, new kakao.maps.Size(38, 38), { offset: new kakao.maps.Point(19, 19) });
            }

            const markerOptions = {
                map: activeMap,
                position: coords,
                zIndex: 115
            };
            if (markerImg) markerOptions.image = markerImg;

            const marker = new kakao.maps.Marker(markerOptions);
            window.activeMyRestaurantMarkers.push(marker);

            attachMarkerEvents(marker, item, place, true, false, coords);
        });

        window.activeMyRestaurantListItems = myListItems;
        if (typeof window.syncActiveOverlayResultsList === 'function') {
            window.syncActiveOverlayResultsList(preserveScroll);
        }

        if (unresolvedMyItems.length > 0 && typeof resolveRestaurantCoordinates === 'function') {
            unresolvedMyItems.forEach(r => { r._resolvingNow = true; });
            Promise.all(unresolvedMyItems.map(r => resolveRestaurantCoordinates(r))).then(() => {
                let anyNewlyResolved = false;
                unresolvedMyItems.forEach(r => {
                    r._resolvingNow = false;
                    const rx = parseFloat(r.x || 0);
                    const ry = parseFloat(r.y || 0);
                    if (rx > 124 && rx < 132 && ry > 33 && ry < 39 && !(Math.abs(rx - 126.9780) < 0.0005 && Math.abs(ry - 37.5665) < 0.0005)) {
                        anyNewlyResolved = true;
                    }
                });
                if (anyNewlyResolved && window.isMyRestaurantsActive) {
                    renderMyRestaurantsOverlay(true);
                }
            });
        }
    }
    window.renderMyRestaurantsOverlay = renderMyRestaurantsOverlay;

    function showMyVisitedPlacesOnMap() {
        window.isMyRestaurantsActive = true;
        renderMyRestaurantsOverlay();

        const btnShowMy = document.getElementById('btn-show-my-restaurants');
        if (btnShowMy) btnShowMy.classList.add('active');

        const switchMy = document.getElementById('switch-my-restaurants-toggle');
        if (switchMy) switchMy.checked = true;

        if (typeof window.updateMobileStarChipHighlight === 'function') {
            window.updateMobileStarChipHighlight();
        }
    }
    window.showMyVisitedPlacesOnMap = showMyVisitedPlacesOnMap;

    function hideMyVisitedPlacesOnMap() {
        window.isMyRestaurantsActive = false;
        if (typeof window.clearActiveMapPlaceSelection === 'function') {
            window.clearActiveMapPlaceSelection();
        }
        renderMyRestaurantsOverlay();

        const btnShowMy = document.getElementById('btn-show-my-restaurants');
        if (btnShowMy) btnShowMy.classList.remove('active');

        const switchMy = document.getElementById('switch-my-restaurants-toggle');
        if (switchMy) switchMy.checked = false;

        if (typeof window.updateMobileStarChipHighlight === 'function') {
            window.updateMobileStarChipHighlight();
        }
    }
    window.hideMyVisitedPlacesOnMap = hideMyVisitedPlacesOnMap;

    const btnShowMyRestaurants = document.getElementById('btn-show-my-restaurants');
    if (btnShowMyRestaurants) {
        btnShowMyRestaurants.addEventListener('click', () => {
            if (window.isMyRestaurantsActive) {
                hideMyVisitedPlacesOnMap();
            } else {
                const btnWish = document.getElementById('btn-show-wishlist');
                if (btnWish) btnWish.classList.remove('active');
                showMyVisitedPlacesOnMap();
            }
        });
    }

    // =========================================================================
    // Friend Restaurant & Social Map Overlay System
    // =========================================================================
    const DEFAULT_DEMO_FRIENDS = [];

        // Master-only Mock Gourmets for social feature testing & preview
    const MASTER_MOCK_GOURMETS = [
        {
                "id": "mock_minwoo_jeju",
                "name": "강민우",
                "handle": "@minwoo_jeju",
                "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=minwoo_jeju",
                "bio": "제주와 남해안 일주 · 숨은 노포와 해산물 고기 맛집 탐방러 🌊",
                "count": 20,
                "isMasterMock": true,
                "restaurants": [
                        {
                                "name": "자매국수",
                                "category": "🍚한식",
                                "location_large": "제주 제주",
                                "location_small": "탑동",
                                "road_address": "제주특별자치도 제주시 탑동로 11",
                                "rate": "🥄",
                                "menu": [
                                        "고기국수",
                                        "비빔국수",
                                        "돔베고기"
                                ],
                                "map_url": "https://map.kakao.com/link/search/제주+자매국수",
                                "x": "126.5268",
                                "y": "33.5184",
                                "comment": "진한 사골 육수에 쫄깃한 면발과 야들야들한 돔베고기가 어우러진 제주 대표 명소",
                                "visit_count": 3,
                                "date": "2026-08-10"
                        },
                        {
                                "name": "만선식당",
                                "category": "🐟해산물",
                                "location_large": "제주 서귀포",
                                "location_small": "대정읍",
                                "road_address": "제주특별자치도 서귀포시 대정읍 하모항구로 44",
                                "rate": "🥄🥄",
                                "menu": [
                                        "고등어회",
                                        "갈치조림",
                                        "고등어구이"
                                ],
                                "map_url": "https://map.kakao.com/link/search/모슬포+만선식당",
                                "x": "126.2505",
                                "y": "33.2173",
                                "comment": "비린내 하나 없이 고소함이 폭발하는 모슬포항 원조 고등어회 노포",
                                "visit_count": 2,
                                "date": "2026-08-12"
                        },
                        {
                                "name": "숙성도 노형본점",
                                "category": "🥩고기",
                                "location_large": "제주 제주",
                                "location_small": "노형동",
                                "road_address": "제주특별자치도 제주시 원노형로 41",
                                "rate": "🥄🥄🥄",
                                "menu": [
                                        "삼겹살",
                                        "돼지고기",
                                        "볶음밥"
                                ],
                                "map_url": "https://map.kakao.com/link/search/숙성도+노형본점",
                                "x": "126.4839",
                                "y": "33.4852",
                                "comment": "진한 육향과 환상적인 육즙을 자랑하는 숙성 흑돼지의 정점",
                                "visit_count": 4,
                                "date": "2026-08-15"
                        },
                        {
                                "name": "명진전복",
                                "category": "🐟해산물",
                                "location_large": "제주 제주",
                                "location_small": "구좌읍",
                                "road_address": "제주특별자치도 제주시 구좌읍 해맞이해안로 1282",
                                "rate": "🥄🥄🥄🥄",
                                "menu": [
                                        "솥밥",
                                        "회",
                                        "구이"
                                ],
                                "map_url": "https://map.kakao.com/link/search/구좌+명진전복",
                                "x": "126.8536",
                                "y": "33.5351",
                                "comment": "고소한 전복내장밥 위에 얇게 썬 전복이 듬뿍 올라간 구좌 해안도로 맛집",
                                "visit_count": 2,
                                "date": "2026-07-28"
                        },
                        {
                                "name": "제주오성 순살갈치조림",
                                "category": "🍚한식",
                                "location_large": "제주 서귀포",
                                "location_small": "색달동",
                                "road_address": "제주특별자치도 서귀포시 중문관광로 27",
                                "rate": "🥄🥄🥄🥄🥄",
                                "menu": [
                                        "갈치조림",
                                        "갈치구이",
                                        "성게미역국"
                                ],
                                "map_url": "https://place.map.kakao.com/15234568",
                                "x": "126.4172",
                                "y": "33.2541",
                                "comment": "가시 없이 먹기 편한 순살 갈치조림과 푸짐한 한상 차림의 중문 명가",
                                "visit_count": 2,
                                "date": "2026-07-25"
                        },
                        {
                                "name": "속초 청초수물회",
                                "category": "🐟해산물",
                                "location_large": "강원 속초",
                                "location_small": "조양동",
                                "road_address": "강원특별자치도 속초시 엑스포로 12-36",
                                "rate": "🥄",
                                "menu": [
                                        "물회",
                                        "비빔밥",
                                        "국밥"
                                ],
                                "map_url": "https://map.kakao.com/link/search/속초+청초수물회",
                                "x": "128.5835",
                                "y": "38.1925",
                                "comment": "신선한 해삼과 활전복 살얼음 육수가 끝내주는 대한민국 물회 명가",
                                "visit_count": 3,
                                "date": "2026-06-20"
                        },
                        {
                                "name": "강릉 동해일미",
                                "category": "🍚한식",
                                "location_large": "강원 강릉",
                                "location_small": "교동",
                                "road_address": "강원특별자치도 강릉시 경포로 33-1",
                                "rate": "🥄🥄",
                                "menu": [
                                        "간장게장",
                                        "꽃게탕",
                                        "백반"
                                ],
                                "map_url": "https://map.kakao.com/link/search/강릉+동해일미",
                                "x": "128.8953",
                                "y": "37.7812",
                                "comment": "짜지 않고 은은한 비법 간장에 알이 꽉 찬 동해 암꽃게 정식",
                                "visit_count": 2,
                                "date": "2026-06-21"
                        },
                        {
                                "name": "강릉짬뽕순두부 강릉본점",
                                "category": "🍚한식",
                                "location_large": "강원 강릉",
                                "location_small": "강문동",
                                "road_address": "강원특별자치도 강릉시 초당순두부길 77번길 15",
                                "rate": "🥄🥄🥄",
                                "menu": [
                                        "짬뽕",
                                        "순두부",
                                        "두부전골"
                                ],
                                "map_url": "https://place.map.kakao.com/11267890",
                                "x": "128.9182",
                                "y": "37.7915",
                                "comment": "불맛 가득한 얼큰한 짬뽕 국물에 몽글몽글 부드러운 초당 순두부의 환상 조합",
                                "visit_count": 3,
                                "date": "2026-06-22"
                        },
                        {
                                "name": "초량밀면",
                                "category": "🍚한식",
                                "location_large": "부산 동구",
                                "location_small": "초량동",
                                "road_address": "부산광역시 동구 중앙대로 225",
                                "rate": "🥄🥄🥄🥄",
                                "menu": [
                                        "밀면",
                                        "만두",
                                        "비빔밀면"
                                ],
                                "map_url": "https://place.map.kakao.com/8321092",
                                "x": "129.0401",
                                "y": "35.1165",
                                "comment": "감초와 한약재로 달여낸 육수의 시원한 물밀면과 속이 꽉 찬 수제 왕만두",
                                "visit_count": 3,
                                "date": "2026-05-18"
                        },
                        {
                                "name": "부산 기장 연화리 해녀촌",
                                "category": "🐟해산물",
                                "location_large": "부산 기장군",
                                "location_small": "연화리",
                                "road_address": "부산광역시 기장군 기장읍 연화1길 184",
                                "rate": "🥄🥄🥄🥄🥄",
                                "menu": [
                                        "회",
                                        "죽",
                                        "해산물"
                                ],
                                "map_url": "https://map.kakao.com/link/search/기장+연화리+해녀촌",
                                "x": "129.2241",
                                "y": "35.2215",
                                "comment": "바다 바로 앞에서 갓 잡은 신선한 해산물과 가마솥 전복죽을 즐기는 명소",
                                "visit_count": 2,
                                "date": "2026-05-19"
                        },
                        {
                                "name": "부산 백화양곱창",
                                "category": "🥩고기",
                                "location_large": "부산 중구",
                                "location_small": "남포동",
                                "road_address": "부산광역시 중구 자갈치로23번길 6",
                                "rate": "🥄",
                                "menu": [
                                        "곱창",
                                        "볶음밥",
                                        "구이"
                                ],
                                "map_url": "https://map.kakao.com/link/search/자갈치+백화양곱창",
                                "x": "129.0276",
                                "y": "35.0975",
                                "comment": "연탄불 위에서 이모님이 구워주는 자갈치 시장의 전설적인 양곱창 성지",
                                "visit_count": 2,
                                "date": "2026-05-20"
                        },
                        {
                                "name": "여수 꽃돌게장1번가",
                                "category": "🍚한식",
                                "location_large": "전남 여수",
                                "location_small": "문수동",
                                "road_address": "전라남도 여수시 봉산2로 36",
                                "rate": "🥄🥄",
                                "menu": [
                                        "간장게장",
                                        "꽃게탕",
                                        "백반"
                                ],
                                "map_url": "https://map.kakao.com/link/search/여수+꽃돌게장1번가",
                                "x": "127.7289",
                                "y": "34.7351",
                                "comment": "정갈하고 깊은 감칠맛의 꽃게장과 푸짐한 셀프바가 매력적인 여수 필수 코스",
                                "visit_count": 2,
                                "date": "2026-04-14"
                        },
                        {
                                "name": "여수 삼학집",
                                "category": "🐟해산물",
                                "location_large": "전남 여수",
                                "location_small": "중앙동",
                                "road_address": "전라남도 여수시 이순신광장로 159",
                                "rate": "🥄🥄🥄",
                                "menu": [
                                        "회",
                                        "회덮밥",
                                        "구이"
                                ],
                                "map_url": "https://map.kakao.com/link/search/여수+삼학집",
                                "x": "127.7423",
                                "y": "34.7402",
                                "comment": "막걸리 식초로 새콤달콤하게 무쳐낸 부드러운 서대회를 밥에 비벼 먹는 별미",
                                "visit_count": 1,
                                "date": "2026-04-15"
                        },
                        {
                                "name": "통영 뚱보할매김밥집",
                                "category": "🍙분식",
                                "location_large": "경남 통영",
                                "location_small": "중앙동",
                                "road_address": "경상남도 통영시 통영해안로 325",
                                "rate": "🥄🥄🥄🥄",
                                "menu": [
                                        "김밥",
                                        "분식"
                                ],
                                "map_url": "https://map.kakao.com/link/search/통영+뚱보할매김밥집",
                                "x": "128.4239",
                                "y": "34.8447",
                                "comment": "매콤달콤한 오징어어묵무침과 아삭한 섞박지가 중독적인 원조 충무김밥",
                                "visit_count": 1,
                                "date": "2026-03-10"
                        },
                        {
                                "name": "통영 울도다찌",
                                "category": "🍺술집",
                                "location_large": "경남 통영",
                                "location_small": "무전동",
                                "road_address": "경상남도 통영시 무전5길 12-5",
                                "rate": "🥄🥄🥄🥄🥄",
                                "menu": [
                                        "술집",
                                        "회",
                                        "해산물"
                                ],
                                "map_url": "https://map.kakao.com/link/search/통영+다찌",
                                "x": "128.4285",
                                "y": "34.8584",
                                "comment": "술을 주문할 때마다 끊임없이 쏟아져 나오는 통영 제철 해산물 한 상 차림",
                                "visit_count": 2,
                                "date": "2026-03-11"
                        },
                        {
                                "name": "목포 영란횟집",
                                "category": "🐟해산물",
                                "location_large": "전남 목포",
                                "location_small": "유달동",
                                "road_address": "전라남도 목포시 번화로 42-1",
                                "rate": "🥄",
                                "menu": [
                                        "회",
                                        "전",
                                        "매운탕"
                                ],
                                "map_url": "https://map.kakao.com/link/search/목포+영란횟집",
                                "x": "126.3842",
                                "y": "34.7865",
                                "comment": "두툼한 민어 살과 부레 껍질까지 완벽하게 즐기는 반세기 전통 목포 노포",
                                "visit_count": 2,
                                "date": "2026-02-18"
                        },
                        {
                                "name": "군산 한일옥",
                                "category": "🍚한식",
                                "location_large": "전북 군산",
                                "location_small": "월명동",
                                "road_address": "전북특별자치도 군산시 구영3길 63",
                                "rate": "🥄🥄",
                                "menu": [
                                        "국밥",
                                        "육회비빔밥",
                                        "김치찌개"
                                ],
                                "map_url": "https://map.kakao.com/link/search/군산+한일옥",
                                "x": "126.7051",
                                "y": "35.9839",
                                "comment": "맑은 국물에서 뿜어져 나오는 깊고 진한 한우 소고기 무국의 정수",
                                "visit_count": 3,
                                "date": "2026-01-15"
                        },
                        {
                                "name": "군산 복성루",
                                "category": "🍜중식",
                                "location_large": "전북 군산",
                                "location_small": "월명동",
                                "road_address": "전북특별자치도 군산시 월명로 382",
                                "rate": "🥄🥄🥄",
                                "menu": [
                                        "짬뽕",
                                        "짜장면",
                                        "볶음밥"
                                ],
                                "map_url": "https://map.kakao.com/link/search/군산+복성루",
                                "x": "126.7214",
                                "y": "35.9806",
                                "comment": "돼지고기 고명과 꼬막 조개가 산더미처럼 쌓여 칼칼하고 묵직한 짬뽕",
                                "visit_count": 1,
                                "date": "2026-01-16"
                        },
                        {
                                "name": "태안 원풍식당",
                                "category": "🍚한식",
                                "location_large": "충남 태안",
                                "location_small": "원북면",
                                "road_address": "충청남도 태안군 원북면 원이로 841-1",
                                "rate": "🥄🥄🥄🥄",
                                "menu": [
                                        "낙지",
                                        "칼국수",
                                        "탕"
                                ],
                                "map_url": "https://map.kakao.com/link/search/태안+원풍식당",
                                "x": "126.2575",
                                "y": "36.8532",
                                "comment": "시원한 박속 육수에 산낙지를 살짝 데쳐 먹고 칼국수로 마무리하는 태안 별미",
                                "visit_count": 1,
                                "date": "2025-11-20"
                        },
                        {
                                "name": "순천 건봉국밥",
                                "category": "🍚한식",
                                "location_large": "전남 순천",
                                "location_small": "중앙동",
                                "road_address": "전라남도 순천시 장평로 65",
                                "rate": "🥄🥄🥄🥄🥄",
                                "menu": [
                                        "국밥",
                                        "순대",
                                        "수육"
                                ],
                                "map_url": "https://map.kakao.com/link/search/순천+건봉국밥",
                                "x": "127.4938",
                                "y": "34.9458",
                                "comment": "잡내 없이 깔끔하게 우려낸 국물에 푸짐한 머릿고기가 가득 찬 아랫장 노포",
                                "visit_count": 1,
                                "date": "2025-12-05"
                        }
                ]
        },
        {
                "id": "mock_seoyeon_cafe",
                "name": "이서연",
                "handle": "@seoyeon_cafe",
                "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=seoyeon_cafe",
                "bio": "전국 스페셜티 커피와 감성 베이커리 브런치 큐레이터 ☕🥖",
                "count": 20,
                "isMasterMock": true,
                "restaurants": [
                        {
                                "name": "성수 센터커피",
                                "category": "☕카페",
                                "location_large": "서울 성동구",
                                "location_small": "성수동",
                                "road_address": "서울특별시 성동구 서울숲2길 28-11",
                                "rate": "🥄",
                                "menu": [
                                        "커피",
                                        "카페",
                                        "디저트"
                                ],
                                "map_url": "https://map.kakao.com/link/search/성수동+센터커피",
                                "x": "127.0422",
                                "y": "37.5458",
                                "comment": "영국 바리스타 챔피언 박상호 로스터의 섬세한 싱글오리진 필터커피",
                                "visit_count": 4,
                                "date": "2026-09-01"
                        },
                        {
                                "name": "성수 어니언",
                                "category": "☕카페",
                                "location_large": "서울 성동구",
                                "location_small": "성수동",
                                "road_address": "서울특별시 성동구 아차산로9길 8",
                                "rate": "🥄🥄",
                                "menu": [
                                        "빵",
                                        "디저트",
                                        "커피"
                                ],
                                "map_url": "https://map.kakao.com/link/search/성수동+어니언",
                                "x": "127.0583",
                                "y": "37.5445",
                                "comment": "인더스트리얼 감성의 빈티지 공간에서 즐기는 눈 덮인 시그니처 팡도르",
                                "visit_count": 3,
                                "date": "2026-08-25"
                        },
                        {
                                "name": "연남 테일러커피",
                                "category": "☕카페",
                                "location_large": "서울 마포구",
                                "location_small": "연남동",
                                "road_address": "서울특별시 마포구 성미산로 189",
                                "rate": "🥄🥄🥄",
                                "menu": [
                                        "커피",
                                        "디저트",
                                        "카페"
                                ],
                                "map_url": "https://map.kakao.com/link/search/연남동+테일러커피",
                                "x": "126.9248",
                                "y": "37.5619",
                                "comment": "부드럽고 묵직한 수제 크림이 에스프레소와 어우러진 인생 크림모카",
                                "visit_count": 3,
                                "date": "2026-08-28"
                        },
                        {
                                "name": "한남 오월의종",
                                "category": "☕카페",
                                "location_large": "서울 용산구",
                                "location_small": "한남동",
                                "road_address": "서울특별시 용산구 이태원로 229",
                                "rate": "🥄🥄🥄🥄",
                                "menu": [
                                        "빵",
                                        "디저트"
                                ],
                                "map_url": "https://map.kakao.com/link/search/한남동+오월의종",
                                "x": "127.0008",
                                "y": "37.5367",
                                "comment": "톡톡 터지는 건무화과가 빵 안에 가득 차 있는 천연 발효 하드계열 빵의 성지",
                                "visit_count": 2,
                                "date": "2026-07-15"
                        },
                        {
                                "name": "서촌 부안애서",
                                "category": "🍝양식",
                                "location_large": "서울 종로구",
                                "location_small": "서촌",
                                "road_address": "서울특별시 종로구 자하문로 35",
                                "rate": "🥄🥄🥄🥄🥄",
                                "menu": [
                                        "파스타",
                                        "샐러드",
                                        "브런치"
                                ],
                                "map_url": "https://map.kakao.com/link/search/서촌+부안애서",
                                "x": "126.9719",
                                "y": "37.5802",
                                "comment": "고즈넉한 한옥 골목 사이에서 여유롭게 즐기는 감성 브런치 다이닝",
                                "visit_count": 1,
                                "date": "2026-07-20"
                        },
                        {
                                "name": "파주 더티트렁크",
                                "category": "☕카페",
                                "location_large": "경기 파주",
                                "location_small": "출판도시",
                                "road_address": "경기도 파주시 지목로 114",
                                "rate": "🥄",
                                "menu": [
                                        "햄버거",
                                        "브런치",
                                        "커피"
                                ],
                                "map_url": "https://map.kakao.com/link/search/파주+더티트렁크",
                                "x": "126.7225",
                                "y": "37.7188",
                                "comment": "압도적인 층고와 미국 창고형 인테리어가 돋보이는 복합 문화 베이커리",
                                "visit_count": 2,
                                "date": "2026-06-15"
                        },
                        {
                                "name": "양평 하우스베이커리",
                                "category": "☕카페",
                                "location_large": "경기 양평",
                                "location_small": "서종면",
                                "road_address": "경기도 양평군 서종면 문호리 338-1",
                                "rate": "🥄🥄",
                                "menu": [
                                        "빵",
                                        "디저트",
                                        "음료"
                                ],
                                "map_url": "https://map.kakao.com/link/search/양평+하우스베이커리",
                                "x": "127.3592",
                                "y": "37.5873",
                                "comment": "넓은 잔디 마당과 전통 한옥이 어우러져 피크닉 기분을 내기 좋은 곳",
                                "visit_count": 1,
                                "date": "2026-06-18"
                        },
                        {
                                "name": "남양주 나인블럭 북한강점",
                                "category": "☕카페",
                                "location_large": "경기 남양주",
                                "location_small": "화도읍",
                                "road_address": "경기도 남양주시 조안면 북한강로 914",
                                "rate": "🥄🥄🥄",
                                "menu": [
                                        "커피",
                                        "디저트",
                                        "빵"
                                ],
                                "map_url": "https://map.kakao.com/link/search/남양주+나인블럭+북한강점",
                                "x": "127.3325",
                                "y": "37.5812",
                                "comment": "북한강 물결이 한눈에 내려다보이는 시원한 통창 뷰와 진한 원두",
                                "visit_count": 1,
                                "date": "2026-05-30"
                        },
                        {
                                "name": "수원 정지영커피로스터즈 행궁본점",
                                "category": "☕카페",
                                "location_large": "경기 수원",
                                "location_small": "행궁동",
                                "road_address": "경기도 수원시 팔달구 정조로905번길 13",
                                "rate": "🥄🥄🥄🥄",
                                "menu": [
                                        "커피",
                                        "카페",
                                        "디저트"
                                ],
                                "map_url": "https://map.kakao.com/link/search/수원+정지영커피로스터즈",
                                "x": "127.0145",
                                "y": "37.2848",
                                "comment": "수원 화성 성곽길을 조망하며 즐기는 화성행궁 로스터리 커피의 대명사",
                                "visit_count": 2,
                                "date": "2026-05-12"
                        },
                        {
                                "name": "성심당 본점",
                                "category": "☕카페",
                                "location_large": "대전 중구",
                                "location_small": "은행동",
                                "road_address": "대전광역시 중구 대종로480번길 15",
                                "rate": "🥄🥄🥄🥄🥄",
                                "menu": [
                                        "빵",
                                        "디저트",
                                        "케이크"
                                ],
                                "map_url": "https://place.map.kakao.com/17733090",
                                "x": "127.4276",
                                "y": "36.3276",
                                "comment": "가성비와 완성도 모두 국내 최고를 자랑하는 대전의 자부심 베이커리",
                                "visit_count": 5,
                                "date": "2026-04-20"
                        },
                        {
                                "name": "아베베베이커리 제주",
                                "category": "☕카페",
                                "location_large": "제주 제주",
                                "location_small": "동문시장",
                                "road_address": "제주특별자치도 제주시 동문로6길 4",
                                "rate": "🥄",
                                "menu": [
                                        "빵",
                                        "도넛",
                                        "디저트"
                                ],
                                "map_url": "https://place.map.kakao.com/18765432",
                                "x": "126.5292",
                                "y": "33.5126",
                                "comment": "제주 특산물 우도 땅콩과 오메기떡을 크림 도넛에 가득 채운 동문시장 줄서는 빵집",
                                "visit_count": 3,
                                "date": "2026-04-18"
                        },
                        {
                                "name": "세종 클래식에스프레소",
                                "category": "☕카페",
                                "location_large": "세종 세종",
                                "location_small": "나성동",
                                "road_address": "세종특별자치시 한누리대로 288",
                                "rate": "🥄🥄",
                                "menu": [
                                        "커피",
                                        "에스프레소",
                                        "디저트"
                                ],
                                "map_url": "https://map.kakao.com/link/search/세종+에스프레소바",
                                "x": "127.2608",
                                "y": "36.4862",
                                "comment": "부담 없는 가격에 정통 이탈리안 에스프레소를 스탠딩으로 즐기는 곳",
                                "visit_count": 1,
                                "date": "2026-04-22"
                        },
                        {
                                "name": "대구 딥커피로스터스",
                                "category": "☕카페",
                                "location_large": "대구 중구",
                                "location_small": "봉산동",
                                "road_address": "대구광역시 중구 봉산문화2길 41",
                                "rate": "🥄🥄🥄",
                                "menu": [
                                        "커피",
                                        "티라미수",
                                        "디저트"
                                ],
                                "map_url": "https://map.kakao.com/link/search/대구+봉산동+딥커피로스터스",
                                "x": "128.5992",
                                "y": "35.8624",
                                "comment": "대구 봉산동 카페 골목에서 감미로운 크림과 카카오 토핑 에스프레소의 매력",
                                "visit_count": 2,
                                "date": "2026-03-25"
                        },
                        {
                                "name": "경주 노르딕",
                                "category": "🍝양식",
                                "location_large": "경북 경주",
                                "location_small": "황리단길",
                                "road_address": "경상북도 경주시 포석로 1099",
                                "rate": "🥄🥄🥄🥄",
                                "menu": [
                                        "샐러드",
                                        "샌드위치",
                                        "브런치"
                                ],
                                "map_url": "https://map.kakao.com/link/search/황리단길+노르딕",
                                "x": "129.2098",
                                "y": "35.8361",
                                "comment": "신선한 아보카도와 계란 훈제연어가 듬뿍 올라간 황리단길 대표 브런치",
                                "visit_count": 1,
                                "date": "2026-03-28"
                        },
                        {
                                "name": "부산 모모스 로스터리&커피바 영도",
                                "category": "☕카페",
                                "location_large": "부산 영도구",
                                "location_small": "봉래동",
                                "road_address": "부산광역시 영도구 봉래나루로 160",
                                "rate": "🥄🥄🥄🥄🥄",
                                "menu": [
                                        "커피",
                                        "휘낭시에",
                                        "디저트"
                                ],
                                "map_url": "https://map.kakao.com/link/search/영도+모모스커피",
                                "x": "129.0435",
                                "y": "35.0934",
                                "comment": "영도 부둣가 물류창고를 개조해 바다 풍경과 함께 최정상 스페셜티를 즐기는 곳",
                                "visit_count": 3,
                                "date": "2026-02-15"
                        },
                        {
                                "name": "부산 베르크로스터스",
                                "category": "☕카페",
                                "location_large": "부산 부산진구",
                                "location_small": "전포동",
                                "road_address": "부산광역시 부산진구 서전로58번길 115",
                                "rate": "🥄",
                                "menu": [
                                        "커피",
                                        "디저트",
                                        "쿠키"
                                ],
                                "map_url": "https://map.kakao.com/link/search/전포+베르크로스터스",
                                "x": "129.0664",
                                "y": "35.1558",
                                "comment": "교회 의자와 독특한 지하 쇼룸에서 전포 카페거리만의 힙한 문화를 만끽",
                                "visit_count": 2,
                                "date": "2026-02-16"
                        },
                        {
                                "name": "전주 평화와평화",
                                "category": "☕카페",
                                "location_large": "전북 전주",
                                "location_small": "중앙동",
                                "road_address": "전북특별자치도 전주시 완산구 전주객사4길 73-20",
                                "rate": "🥄🥄",
                                "menu": [
                                        "디저트",
                                        "커피",
                                        "차"
                                ],
                                "map_url": "https://map.kakao.com/link/search/전주+객사+평화와평화",
                                "x": "127.1428",
                                "y": "35.8183",
                                "comment": "조용하고 차분한 공간에서 정성스럽게 내린 커피와 문장을 함께 건네는 공간",
                                "visit_count": 1,
                                "date": "2026-01-22"
                        },
                        {
                                "name": "광주 아티티 동명점",
                                "category": "🍝양식",
                                "location_large": "광주 동구",
                                "location_small": "동명동",
                                "road_address": "광주광역시 동구 동계천로 143-6",
                                "rate": "🥄🥄🥄",
                                "menu": [
                                        "파스타",
                                        "브런치",
                                        "샌드위치"
                                ],
                                "map_url": "https://map.kakao.com/link/search/동명동+아티티",
                                "x": "126.9284",
                                "y": "35.1492",
                                "comment": "유럽 시골 감성의 따뜻한 채광 속에서 즐기는 동명동 브런치 맛집",
                                "visit_count": 1,
                                "date": "2025-12-18"
                        },
                        {
                                "name": "담양 담화헌",
                                "category": "☕카페",
                                "location_large": "전남 담양",
                                "location_small": "봉산면",
                                "road_address": "전라남도 담양군 봉산면 유산길 63",
                                "rate": "🥄🥄🥄🥄",
                                "menu": [
                                        "차",
                                        "디저트",
                                        "전통차"
                                ],
                                "map_url": "https://map.kakao.com/link/search/담양+담화헌",
                                "x": "126.9691",
                                "y": "35.2974",
                                "comment": "옹기 굽는 도예 공방에서 차분하게 대나무 숲 바람을 느끼며 마시는 전통차",
                                "visit_count": 1,
                                "date": "2025-12-19"
                        },
                        {
                                "name": "강릉 테라로사 커피공장 본점",
                                "category": "☕카페",
                                "location_large": "강원 강릉",
                                "location_small": "포남동",
                                "road_address": "강원특별자치도 강릉시 구정면 현천길 7",
                                "rate": "🥄🥄🥄🥄🥄",
                                "menu": [
                                        "커피",
                                        "케이크",
                                        "티라미수"
                                ],
                                "map_url": "https://map.kakao.com/link/search/강릉+테라로사+본점",
                                "x": "128.8872",
                                "y": "37.7118",
                                "comment": "솔향 가득한 강릉에서 한국 스페셜티 커피의 시초를 만나는 붉은 벽돌의 성지",
                                "visit_count": 3,
                                "date": "2025-11-06"
                        }
                ]
        }
];
window.MASTER_MOCK_GOURMETS = MASTER_MOCK_GOURMETS;

    function getCustomFriends() {
        try {
            return JSON.parse(localStorage.getItem('spoonmap_custom_friends') || '[]');
        } catch (_) {
            return [];
        }
    }

    function saveCustomFriends(list) {
        localStorage.setItem('spoonmap_custom_friends', JSON.stringify(list));
        if (typeof saveToCloud === 'function' && typeof isUserLoggedIn === 'function' && isUserLoggedIn()) {
            saveToCloud('custom_friends', list);
        }
    }

    // ─── Persistent Following User Profiles Cache & Resolver ───
    const FOLLOWING_PROFILES_KEY = 'spoonmap_following_user_profiles';

    function getFollowedUserProfilesCache() {
        try {
            return JSON.parse(localStorage.getItem(FOLLOWING_PROFILES_KEY) || '{}');
        } catch (_) {
            return {};
        }
    }
    window.getFollowedUserProfilesCache = getFollowedUserProfilesCache;

    function saveFollowedUserProfile(userObj) {
        if (!userObj || !userObj.id) return;
        try {
            const cache = getFollowedUserProfilesCache();
            const fid = String(userObj.id);
            const currentEntry = cache[fid] || {};
            cache[fid] = {
                id: fid,
                name: userObj.name || userObj.nickname || currentEntry.name || `미식가 #${fid.slice(-4)}`,
                handle: userObj.handle || currentEntry.handle || `@user_${fid.slice(-4)}`,
                avatar: userObj.avatar || userObj.profileImage || currentEntry.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${fid}`,
                bio: userObj.bio || currentEntry.bio || '맛집을 기록하고 공유하는 미식가입니다 🥄',
                count: typeof userObj.count === 'number' ? userObj.count : (userObj.restaurants ? userObj.restaurants.length : (currentEntry.count || 0)),
                privacySettings: userObj.privacySettings || currentEntry.privacySettings || { showVisitDate: true, allowedSpoons: [1, 2, 3, 4, 5] },
                updatedAt: userObj.updatedAt || new Date().toISOString()
            };
            localStorage.setItem(FOLLOWING_PROFILES_KEY, JSON.stringify(cache));
        } catch (_) {}
    }
    window.saveFollowedUserProfile = saveFollowedUserProfile;

    function normFriendId(id) {
        const s = String(id || '').trim().replace(/^following_/, '').replace(/^user_/, '');
        if (s === 'master' || s === '5044584236') return '5044584236';
        return s;
    }
    window.normFriendId = normFriendId;

    function getResolvedFollowedUser(fid) {
        const strFid = String(fid || '');
        const nId = normFriendId(strFid);

        // 1. Cached Discovered Users in memory
        if (typeof cachedDiscoveredUsers !== 'undefined' && Array.isArray(cachedDiscoveredUsers)) {
            const u = cachedDiscoveredUsers.find(cu => normFriendId(cu.id) === nId || String(cu.id) === strFid);
            if (u) {
                saveFollowedUserProfile(u);
                return u;
            }
        }

        // 2. Master Mock Gourmets
        if (typeof isOwnerUser === 'function' && isOwnerUser() && typeof MASTER_MOCK_GOURMETS !== 'undefined') {
            const mock = MASTER_MOCK_GOURMETS.find(m => String(m.id) === strFid || normFriendId(m.id) === nId);
            if (mock) return mock;
        }

        // 3. Persistent LocalStorage Following Profiles Cache (Guarantees no name flickering)
        const persistentCache = getFollowedUserProfilesCache();
        if (persistentCache[strFid]) {
            return persistentCache[strFid];
        }
        if (persistentCache[nId]) {
            return persistentCache[nId];
        }

        // 4. spoonmap_cached_public_users in LocalStorage
        try {
            const rawPublic = JSON.parse(localStorage.getItem('spoonmap_cached_public_users') || '[]');
            const pub = rawPublic.find(p => normFriendId(p.id) === nId || String(p.id) === strFid);
            if (pub) {
                saveFollowedUserProfile(pub);
                return pub;
            }
        } catch (_) {}

        // 4.5 Master Fallback
        if (nId === '5044584236') {
            return {
                id: '5044584236',
                name: '박준호',
                handle: '@junho_spoon',
                avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=junho',
                bio: '서울 마포/용산 일식·고기 맛집 위주로 기록합니다. 직접 가보고 재방문한 찐 맛집만 남겨요 🥢',
                count: 728,
                isMaster: true,
                privacySettings: { showVisitDate: true, allowedSpoons: [1, 2, 3, 4, 5] }
            };
        }

        // 5. Safe Fallback
        return {
            id: strFid,
            name: `미식가 #${strFid.slice(-4)}`,
            handle: `@user_${strFid.slice(-4)}`,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${strFid}`,
            bio: '맛집을 기록하고 공유하는 미식가입니다 🥄',
            count: 0,
            privacySettings: { showVisitDate: true, allowedSpoons: [1, 2, 3, 4, 5] }
        };
    }
    window.getResolvedFollowedUser = getResolvedFollowedUser;

    // Cache for followed users' restaurants
    window.followingRestaurantsCache = window.followingRestaurantsCache || new Map();

    function normalizeFollowedRestaurant(item, fallbackComment, isWish = false) {
        if (!item) return null;
        const name = (item.name || item.place_name || item.title || item.restaurant_name || '').trim();
        if (!name) return null;
        let rateStr = '🥄🥄🥄';
        if (typeof item.rate === 'string' && item.rate) {
            rateStr = item.rate;
        } else if (typeof item.rate === 'number') {
            rateStr = '🥄'.repeat(Math.max(1, Math.min(5, Math.round(item.rate))));
        } else if (isWish) {
            rateStr = '🥄🥄🥄';
        }
        const mapUrl = item.map_url || item.place_url || item.url || `https://map.kakao.com/link/search/${encodeURIComponent(name)}`;
        const rx = parseFloat(item.x || 0);
        const ry = parseFloat(item.y || 0);
        const hasValidCoords = rx > 124 && rx < 132 && ry > 33 && ry < 39 &&
            !(Math.abs(rx - 126.9780) < 0.0005 && Math.abs(ry - 37.5665) < 0.0005);
        return {
            name: name,
            category: item.category || '기타',
            location_large: item.location_large || item.location || '기타',
            location_small: item.location_small || item.location || '',
            road_address: item.road_address || item.address || item.location || '',
            address: item.address || item.road_address || '',
            menu: Array.isArray(item.menu) ? item.menu : (typeof item.menu === 'string' ? item.menu.split(',').map(m => m.trim()).filter(Boolean) : []),
            rate: rateStr,
            comment: item.comment || item.review || item.memo || fallbackComment || '미식가의 추천 맛집',
            map_url: mapUrl,
            x: hasValidCoords ? String(item.x).trim() : '',
            y: hasValidCoords ? String(item.y).trim() : '',
            _resolvedActual: hasValidCoords ? true : false,
            visit_count: item.visit_count || (isWish ? 0 : 1),
            date: item.date || '',
            isWishlist: isWish
        };
    }
    window.normalizeFollowedRestaurant = normalizeFollowedRestaurant;

    async function resolveRestaurantCoordinates(rest) {
        if (!rest) return rest;
        window._resolvedCoordsCache = window._resolvedCoordsCache || new Map();
        window._coordAttemptedKeys = window._coordAttemptedKeys || new Set();
        const cacheKey = `${(rest.name || '').trim().toLowerCase()}|${(rest.location_large || rest.road_address || '').trim().toLowerCase()}`;

        if (window._resolvedCoordsCache.has(cacheKey)) {
            const cached = window._resolvedCoordsCache.get(cacheKey);
            rest.x = cached.x;
            rest.y = cached.y;
            if (cached.road_address && !rest.road_address) rest.road_address = cached.road_address;
            rest._resolvedActual = true;
            return rest;
        }

        const existX = parseFloat(rest.x || 0);
        const existY = parseFloat(rest.y || 0);
        if (existX > 124 && existX < 132 && existY > 33 && existY < 39 &&
            !(Math.abs(existX - 126.9780) < 0.0005 && Math.abs(existY - 37.5665) < 0.0005)) {
            rest._resolvedActual = true;
            window._resolvedCoordsCache.set(cacheKey, { x: String(existX), y: String(existY), road_address: rest.road_address || '' });
            return rest;
        }
        if (rest._resolvedActual && existX > 124 && existY > 33) return rest;
        if (window._coordAttemptedKeys.has(cacheKey)) return rest;
        window._coordAttemptedKeys.add(cacheKey);

        const urlStr = rest.map_url || rest.kakao_url || rest.place_url || '';
        const placeId = (typeof extractKakaoPlaceId === 'function') 
            ? extractKakaoPlaceId(urlStr) 
            : null;

        const coordMatch = urlStr.match(/(\d+\.\d+)[,\s/]+(\d+\.\d+)/);
        if (coordMatch) {
            const v1 = parseFloat(coordMatch[1]);
            const v2 = parseFloat(coordMatch[2]);
            if (v1 >= 33 && v1 <= 39 && v2 >= 124 && v2 <= 132) {
                rest.y = String(v1);
                rest.x = String(v2);
                rest._resolvedActual = true;
                window._resolvedCoordsCache.set(cacheKey, { x: rest.x, y: rest.y, road_address: rest.road_address || '' });
                return rest;
            } else if (v2 >= 33 && v2 <= 39 && v1 >= 124 && v1 <= 132) {
                rest.x = String(v1);
                rest.y = String(v2);
                rest._resolvedActual = true;
                window._resolvedCoordsCache.set(cacheKey, { x: rest.x, y: rest.y, road_address: rest.road_address || '' });
                return rest;
            }
        }

        if (typeof kakao === 'undefined' || !kakao.maps || !kakao.maps.services || !kakao.maps.services.Places) {
            return rest;
        }

        return new Promise(resolve => {
            let finished = false;
            const done = () => {
                if (!finished) {
                    finished = true;
                    resolve(rest);
                }
            };
            const timer = setTimeout(done, 1500);

            try {
                const ps = new kakao.maps.services.Places();
                const primaryQuery = (rest.name || '').trim();
                if (!primaryQuery) {
                    clearTimeout(timer);
                    return done();
                }

                ps.keywordSearch(primaryQuery, (data, status) => {
                    if (finished) return;
                    if (status === kakao.maps.services.Status.OK && Array.isArray(data) && data.length > 0) {
                        let matched = null;
                        if (placeId) {
                            matched = data.find(p => String(p.id) === String(placeId) || (p.place_url && p.place_url.includes(String(placeId))));
                        }
                        if (!matched && rest.location_large) {
                            const locKey = rest.location_large.replace(/\s+/g, '');
                            matched = data.find(p => {
                                const addr = (p.road_address_name || p.address_name || '').replace(/\s+/g, '');
                                return addr.includes(locKey);
                            });
                        }
                        if (!matched) {
                            matched = data.find(p => p.place_name === rest.name || p.place_name.includes(rest.name) || rest.name.includes(p.place_name));
                        }
                        if (!matched) {
                            matched = data[0];
                        }
                        if (matched && matched.x && matched.y) {
                            rest.x = String(matched.x);
                            rest.y = String(matched.y);
                            if (matched.road_address_name) rest.road_address = matched.road_address_name;
                            if (matched.address_name && !rest.address) rest.address = matched.address_name;
                            rest._resolvedActual = true;
                            window._resolvedCoordsCache.set(cacheKey, { x: rest.x, y: rest.y, road_address: rest.road_address || '' });
                        }
                        clearTimeout(timer);
                        done();
                    } else {
                        const fallbackQuery = ((rest.location_large || '') + ' ' + primaryQuery).trim();
                        if (fallbackQuery && fallbackQuery !== primaryQuery) {
                            ps.keywordSearch(fallbackQuery, (fData, fStatus) => {
                                if (finished) return;
                                if (fStatus === kakao.maps.services.Status.OK && Array.isArray(fData) && fData.length > 0) {
                                    let fMatched = null;
                                    if (placeId) {
                                        fMatched = fData.find(p => String(p.id) === String(placeId) || (p.place_url && p.place_url.includes(String(placeId))));
                                    }
                                    if (!fMatched) fMatched = fData[0];
                                    if (fMatched && fMatched.x && fMatched.y) {
                                        rest.x = String(fMatched.x);
                                        rest.y = String(fMatched.y);
                                        if (fMatched.road_address_name) rest.road_address = fMatched.road_address_name;
                                        rest._resolvedActual = true;
                                        window._resolvedCoordsCache.set(cacheKey, { x: rest.x, y: rest.y, road_address: rest.road_address || '' });
                                    }
                                }
                                clearTimeout(timer);
                                done();
                            });
                        } else {
                            clearTimeout(timer);
                            done();
                        }
                    }
                });
            } catch (_) {
                clearTimeout(timer);
                done();
            }
        });
    }

    window.resolveRestaurantCoordinates = resolveRestaurantCoordinates;

    async function ensureListCoordinates(arr) {
        if (!Array.isArray(arr) || arr.length === 0) return arr || [];
        const needResolve = arr.filter(r => {
            if (!r) return false;
            const rx = parseFloat(r.x || 0);
            const ry = parseFloat(r.y || 0);
            const valid = rx > 124 && rx < 132 && ry > 33 && ry < 39 &&
                !(Math.abs(rx - 126.9780) < 0.0005 && Math.abs(ry - 37.5665) < 0.0005);
            if (valid) {
                r._resolvedActual = true;
                return false;
            }
            return true;
        });
        if (needResolve.length > 0 && needResolve.length <= 60) {
            await Promise.all(needResolve.map(item => resolveRestaurantCoordinates(item)));
        }
        return arr;
    }
    window.ensureListCoordinates = ensureListCoordinates;

    async function fetchFollowingUserRestaurants(userId) {
        const rawId = String(userId || '');
        const cleanId = rawId.replace(/^following_/, '').replace(/^user_/, '');
        const nId = normFriendId(cleanId);
        const candidateKeys = Array.from(new Set([cleanId, rawId, nId, `user_${cleanId}`, `following_${cleanId}`, `user_${nId}`, `following_${nId}`]));

        // 1. Master Check - Full restaurants from getMasterRestaurantList
        const isMaster = nId === '5044584236' || cleanId === 'master' || 
                         (typeof cachedDiscoveredUsers !== 'undefined' && Array.isArray(cachedDiscoveredUsers) && cachedDiscoveredUsers.some(u => normFriendId(u.id) === nId && (u.isMaster || u.name === '박준호')));
        if (isMaster) {
            const masterList = (typeof getMasterRestaurantList === 'function') ? getMasterRestaurantList() : [];
            await ensureListCoordinates(masterList);
            candidateKeys.forEach(k => window.followingRestaurantsCache.set(k, masterList));
            return masterList;
        }

        for (const k of candidateKeys) {
            if (window.followingRestaurantsCache.has(k) && Array.isArray(window.followingRestaurantsCache.get(k)) && window.followingRestaurantsCache.get(k).length > 0) {
                const cached = window.followingRestaurantsCache.get(k);
                await ensureListCoordinates(cached);
                return cached;
            }
        }

        // Check cachedDiscoveredUsers in memory
        if (typeof cachedDiscoveredUsers !== 'undefined' && Array.isArray(cachedDiscoveredUsers)) {
            const foundU = cachedDiscoveredUsers.find(u => normFriendId(u.id) === nId || String(u.id) === rawId || String(u.id) === String(userId));
            if (foundU && Array.isArray(foundU.restaurants) && foundU.restaurants.length > 0) {
                await ensureListCoordinates(foundU.restaurants);
                candidateKeys.forEach(k => window.followingRestaurantsCache.set(k, foundU.restaurants));
                return foundU.restaurants;
            }
        }

        // 2. Mock Gourmet Check
        const mockList = (typeof window !== 'undefined' && window.MASTER_MOCK_GOURMETS) 
            ? window.MASTER_MOCK_GOURMETS 
            : ((typeof MASTER_MOCK_GOURMETS !== 'undefined') ? MASTER_MOCK_GOURMETS : []);
        const mockG = mockList.find(m => String(m.id) === cleanId || String(m.id) === rawId);
        if (mockG && Array.isArray(mockG.restaurants) && mockG.restaurants.length > 0) {
            await ensureListCoordinates(mockG.restaurants);
            candidateKeys.forEach(k => window.followingRestaurantsCache.set(k, mockG.restaurants));
            return mockG.restaurants;
        }

        let list = [];
        try {
            if (typeof db !== 'undefined' && db) {
                let userDocData = null;
                const docKeys = [`user_${nId}`, `user_${cleanId}`, nId, cleanId, `user_${rawId}`, rawId];

                // 1) Try spoonmap_users
                for (const dk of docKeys) {
                    if (!userDocData) {
                        try {
                            const dSnap = await db.collection('spoonmap_users').doc(dk).get();
                            if (dSnap.exists) userDocData = dSnap.data();
                        } catch (_) {}
                    }
                }

                // 2) Fallback to spoonmap_public_profiles
                if (!userDocData) {
                    for (const dk of [nId, cleanId, rawId, `user_${cleanId}`]) {
                        if (!userDocData) {
                            try {
                                const pSnap = await db.collection('spoonmap_public_profiles').doc(dk).get();
                                if (pSnap.exists) userDocData = pSnap.data();
                            } catch (_) {}
                        }
                    }
                }

                if (userDocData) {
                    const seenNames = new Set();
                    if (Array.isArray(userDocData.restaurants) && userDocData.restaurants.length > 0) {
                        userDocData.restaurants.forEach(r => {
                            const item = normalizeFollowedRestaurant(r, '친구가 등록한 맛집', !!r.isWishlist);
                            if (item && !seenNames.has(item.name.toLowerCase())) {
                                seenNames.add(item.name.toLowerCase());
                                list.push(item);
                            }
                        });
                    }
                    if (Array.isArray(userDocData.wishlist) && userDocData.wishlist.length > 0) {
                        userDocData.wishlist.forEach(w => {
                            const item = normalizeFollowedRestaurant(w, '친구가 찜한 맛집', true);
                            if (item && !seenNames.has(item.name.toLowerCase())) {
                                seenNames.add(item.name.toLowerCase());
                                list.push(item);
                            }
                        });
                    }
                    if (Array.isArray(userDocData.diary) && userDocData.diary.length > 0) {
                        userDocData.diary.forEach(d => {
                            const item = normalizeFollowedRestaurant(d, '친구의 방문 기록 맛집', false);
                            if (item && !seenNames.has(item.name.toLowerCase())) {
                                seenNames.add(item.name.toLowerCase());
                                list.push(item);
                            }
                        });
                    }
                }
            }
        } catch (e) {
            console.warn('Error fetching following user restaurants:', e);
        }

        // Robust REST API Fallback for any client environment or SDK delay
        if (list.length === 0 && cleanId && cleanId !== 'master') {
            try {
                const restDocKeys = ['user_' + nId, 'user_' + cleanId, nId, cleanId, 'user_' + rawId, rawId];
                for (const rk of restDocKeys) {
                    if (list.length > 0) break;
                    const restUrl = 'https://firestore.googleapis.com/v1/projects/spoonmap-3df1a/databases/(default)/documents/spoonmap_users/' + rk + '?key=AIzaSyBYzyzAjtazA0R-VKU6psbnormWExi0NFM';
                    const resp = await fetch(restUrl);
                    if (!resp.ok) continue;
                    const docJson = await resp.json();
                    if (!docJson || !docJson.fields) continue;
                    const f = docJson.fields;
                    const seenNames = new Set();
                    const parseRestArray = (arrField, fallbackComment, isWish) => {
                        if (!arrField || !arrField.arrayValue || !Array.isArray(arrField.arrayValue.values)) return;
                        arrField.arrayValue.values.forEach(v => {
                            if (!v || !v.mapValue || !v.mapValue.fields) return;
                            const mf = v.mapValue.fields;
                            const rawItem = {};
                            Object.keys(mf).forEach(k => {
                                const valObj = mf[k];
                                rawItem[k] = valObj.stringValue !== undefined ? valObj.stringValue :
                                             valObj.integerValue !== undefined ? parseInt(valObj.integerValue, 10) :
                                             valObj.booleanValue !== undefined ? valObj.booleanValue : '';
                            });
                            const item = normalizeFollowedRestaurant(rawItem, fallbackComment, isWish);
                            if (item && !seenNames.has(item.name.toLowerCase())) {
                                seenNames.add(item.name.toLowerCase());
                                list.push(item);
                            }
                        });
                    };
                    parseRestArray(f.diary, '친구의 방문 기록 맛집', false);
                    parseRestArray(f.wishlist, '친구가 찜한 맛집', true);
                    parseRestArray(f.restaurants, '친구가 등록한 맛집', false);
                }
            } catch (err) {
                console.warn('REST fallback query error:', err);
            }
        }

        await ensureListCoordinates(list);

        candidateKeys.forEach(k => window.followingRestaurantsCache.set(k, list));
        return list;
    }
    window.fetchFollowingUserRestaurants = fetchFollowingUserRestaurants;


    function getFollowingFriendsAsOverlay() {
        const followingIds = (typeof getUserFollowingList === 'function') ? getUserFollowingList() : [];
        if (!followingIds || followingIds.length === 0) return [];

        const cachedUsers = (typeof cachedDiscoveredUsers !== 'undefined' && Array.isArray(cachedDiscoveredUsers))
            ? cachedDiscoveredUsers
            : JSON.parse(localStorage.getItem('spoonmap_cached_public_users') || '[]');

        const colors = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899', '#06B6D4', '#F97316'];

        return followingIds.map((fid, idx) => {
            const nId = normFriendId(fid);
            const u = (typeof getResolvedFollowedUser === 'function') ? getResolvedFollowedUser(fid) : (cachedUsers.find(cu => normFriendId(cu.id) === nId) || null);
            const name = u ? u.name : `미식가 #${String(fid).slice(-4)}`;
            const color = colors[idx % colors.length];
            const priv = u?.privacySettings || { showVisitDate: true, allowedSpoons: [1, 2, 3, 4, 5] };
            let cachedRests = (u && Array.isArray(u.restaurants) && u.restaurants.length > 0)
                ? u.restaurants
                : (window.followingRestaurantsCache.get(String(fid)) || window.followingRestaurantsCache.get(nId) || window.followingRestaurantsCache.get(`user_${nId}`) || window.followingRestaurantsCache.get(`following_${nId}`) || []);

            // If Master, attach master restaurants
            if ((!cachedRests || cachedRests.length === 0) && (nId === '5044584236' || String(fid) === 'master' || u?.isMaster || u?.name === '박준호')) {
                cachedRests = (typeof getMasterRestaurantList === 'function') ? getMasterRestaurantList() : [];
            }

            // Apply privacy filter: allowed spoons safely
            if (Array.isArray(priv.allowedSpoons) && priv.allowedSpoons.length > 0) {
                cachedRests = cachedRests.filter(r => {
                    if (r.isWishlist) return true;
                    const spoonStr = typeof r.rate === 'string' ? r.rate : '';
                    const match = spoonStr.match(/🥄/g);
                    const spoonCount = match ? match.length : (typeof r.rate === 'number' ? Math.round(r.rate) : 3);
                    return priv.allowedSpoons.includes(spoonCount || 1);
                });
            }
            // Apply privacy filter: visit date
            if (priv.showVisitDate === false) {
                cachedRests = cachedRests.map(r => ({ ...r, date: '' }));
            }

            return {
                id: `following_${nId}`,
                realUserId: nId,
                isFollowingUser: true,
                name: name,
                nickname: name,
                avatarText: name.slice(0, 1),
                avatarEmoji: '🥄',
                color: color,
                comment: u?.bio || 'Spoonmap 미식가',
                restaurants: cachedRests
            };
        });
    }
    window.getFollowingFriendsAsOverlay = getFollowingFriendsAsOverlay;

    function getFriendsList() {
        const custom = getCustomFriends();
        const base = [];
        if (typeof window !== 'undefined' && window.DDOGANZIP_FRIEND_DATA) {
            base.push(window.DDOGANZIP_FRIEND_DATA);
        }
        if (typeof window !== 'undefined' && window.MEOGEULTENDE_FRIEND_DATA) {
            base.push(window.MEOGEULTENDE_FRIEND_DATA);
        }
        if (typeof window !== 'undefined' && window.JUNGYUGWANG_FRIEND_DATA) {
            base.push(window.JUNGYUGWANG_FRIEND_DATA);
        }
        if (typeof window !== 'undefined' && window.SEOUL_NAMZAA_FRIEND_DATA) {
            base.push(window.SEOUL_NAMZAA_FRIEND_DATA);
        }
        if (typeof window !== 'undefined' && window.TODAY_DESSERT_FRIEND_DATA) {
            base.push(window.TODAY_DESSERT_FRIEND_DATA);
        }
        base.push(...DEFAULT_DEMO_FRIENDS);
        const following = getFollowingFriendsAsOverlay();
        return [...base, ...custom, ...following];
    }

    function normalizePlaceName(name) {
        if (!name) return '';
        return String(name)
            .replace(/\s+/g, '')
            .replace(/\(.*?\)/g, '')
            .replace(/\[.*?\]/g, '')
            .replace(/본점|직영점|지점|점$/g, '')
            .toLowerCase();
    }
    window.normalizePlaceName = normalizePlaceName;

    function findFriendInfoForPlace(item, placeData, isSavedParam = false) {
        if (!item && !placeData) return null;
        const friends = (typeof getFriendsList === 'function') ? getFriendsList() : [];
        if (!friends || friends.length === 0) return null;

        const rawTargetName = (placeData?.place_name || item?.name || '').trim();
        if (!rawTargetName) return null;

        const targetObj = placeData || item;

        // Only compare against the CURRENT logged-in user's own restaurants (never Master's 728 list when logged in as a friend!)
        const myOwnRestaurants = (typeof getCurrentUserOwnRestaurants === 'function')
            ? getCurrentUserOwnRestaurants()
            : ((typeof isOwnerUser === 'function' && isOwnerUser() && typeof getMasterRestaurantList === 'function') ? getMasterRestaurantList() : []);

        let savedMatchRef = null;
        const isSaved = isSavedParam || (Array.isArray(myOwnRestaurants) && myOwnRestaurants.some(m => {
            if (typeof isSameRestaurant === 'function' ? isSameRestaurant(m, targetObj) : isSavedRestaurantMatch(m, targetObj)) {
                savedMatchRef = m;
                return true;
            }
            return false;
        }));

        if (savedMatchRef && item) {
            if (!item.rate || item.rate === '카카오맵 데이터') item.rate = savedMatchRef.rate;
            if (!item.visit_count) item.visit_count = savedMatchRef.visit_count || 1;
            if (item.closed === undefined) item.closed = savedMatchRef.closed;
            if (!item.category || item.category === '음식점') item.category = savedMatchRef.category;
        }

        const activeFriendIds = (typeof getActiveFriendIds === 'function') ? getActiveFriendIds() : [];
        const activeNormSet = new Set(activeFriendIds.map(id => normFriendId(id)));
        const sortedFriends = [...friends].sort((a, b) => {
            const aAct = activeFriendIds.includes(a.id) || activeNormSet.has(normFriendId(a.id));
            const bAct = activeFriendIds.includes(b.id) || activeNormSet.has(normFriendId(b.id));
            if (aAct && !bAct) return -1;
            if (!aAct && bAct) return 1;
            return 0;
        });

        const currentU = (typeof getCurrentUser === 'function') ? getCurrentUser() : null;
        const myNormId = currentU && currentU.id ? normFriendId(currentU.id) : null;
        const matches = [];

        for (const friend of sortedFriends) {
            if (!friend.restaurants || !Array.isArray(friend.restaurants)) continue;
            if (myNormId && friend.isFollowingUser && normFriendId(friend.realUserId || friend.id) === myNormId) continue;

            for (const r of friend.restaurants) {
                if (typeof isSameRestaurant === 'function') {
                    if (!isSameRestaurant(r, targetObj)) continue;
                } else {
                    const rawRName = (r.name || '').trim();
                    if (!rawRName) continue;
                    const normR = normalizePlaceName(rawRName);
                    const normTarget = normalizePlaceName(rawTargetName);
                    if (normTarget !== normR) continue;
                }

                matches.push({
                    friendId: friend.id,
                    friendName: friend.nickname || friend.name,
                    avatarText: friend.avatarText || '👤',
                    color: friend.color || '#6366F1',
                    comment: r.comment || '',
                    rate: r.rate || '🥄🥄🥄🥄',
                    isCommon: isSaved,
                    myRate: (item && item.rate && item.rate !== '카카오맵 데이터') ? item.rate : (savedMatchRef ? savedMatchRef.rate : null),
                    youtubeUrl: r.youtube_url || null,
                    youtubeTitle: r.youtube_title || null,
                    menu: r.menu || null,
                    roadAddress: r.road_address || null,
                    naver_url: r.naver_url || null,
                    kakao_url: r.kakao_url || r.map_url || null
                });
                break; // One match per friend
            }
        }

        if (matches.length === 0) return null;

        const primary = matches[0];
        return {
            ...primary,
            isMultiFriend: matches.length > 1,
            matchesCount: matches.length,
            friendBadges: matches.map(m => ({ text: m.avatarText, color: m.color, name: m.friendName })),
            allMatches: matches
        };
    }

    window.getFriendsList = getFriendsList;
    window.findFriendInfoForPlace = findFriendInfoForPlace;

    function getActiveFriendIds() {
        try {
            return JSON.parse(localStorage.getItem('spoonmap_active_friend_ids') || '[]');
        } catch (_) {
            return [];
        }
    }
    window.getActiveFriendIds = getActiveFriendIds;

    function saveActiveFriendIds(ids) {
        localStorage.setItem('spoonmap_active_friend_ids', JSON.stringify(ids));
    }
    window.saveActiveFriendIds = saveActiveFriendIds;

    window.activeFriendMarkersMap = new Map();

    function renderFriendChips() {
        const container = document.getElementById('map-friends-chips');
        if (!container) return;

        // Horizontal mouse wheel scrolling support
        if (!container.__wheelAttached) {
            container.__wheelAttached = true;
            container.addEventListener('wheel', (e) => {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    container.scrollLeft += e.deltaY;
                }
            }, { passive: false });
        }

        const friends = getFriendsList();
        const activeIds = getActiveFriendIds();
        const activeNormSet = new Set(activeIds.map(id => normFriendId(id)));

        container.innerHTML = friends.map(f => {
            const isActive = activeIds.includes(f.id) || (f.isFollowingUser && activeNormSet.has(normFriendId(f.id)));
            return `
                <div class="friend-chip ${isActive ? 'active' : ''}" style="--friend-color:${f.color};" onclick="window.toggleFriendOverlay('${f.id}')">
                    <span class="friend-chip-avatar" style="background:${f.color};">${f.avatarText}</span>
                    <span class="friend-chip-name">${f.nickname || f.name}</span>
                    <span class="friend-chip-count">${f.restaurants.length}</span>
                </div>
            `;
        }).join('');
    }
    window.renderFriendChips = renderFriendChips;

    window.toggleFriendOverlay = async function(friendId) {
        if (!map && !window.map && typeof initMap === 'function') {
            initMap();
        }
        let activeIds = getActiveFriendIds();
        const targetNorm = normFriendId(friendId);
        const friends = getFriendsList();
        const friend = friends.find(f => f.id === friendId || (f.isFollowingUser && normFriendId(f.id) === targetNorm));
        if (!friend) return;

        const canonicalId = friend.id;
        const existingIdx = activeIds.findIndex(id => id === canonicalId || id === friendId || (friend.isFollowingUser && normFriendId(id) === targetNorm));

        let zoomTarget = null;
        if (existingIdx > -1) {
            // Deactivate
            activeIds = activeIds.filter((id, i) => i !== existingIdx && !(friend.isFollowingUser && normFriendId(id) === targetNorm));
            saveActiveFriendIds(activeIds);
            if (typeof window.clearActiveMapPlaceSelection === 'function') {
                window.clearActiveMapPlaceSelection();
            }
            showDiaryToast(`👥 [${friend.nickname || friend.name}] 맛집 마커 숨김`);
        } else {
            // If this is a following user, ensure restaurants and their coordinates are loaded
            if (friend.isFollowingUser) {
                const fRealId = friend.realUserId || friend.id || friendId;
                if (!friend.restaurants || friend.restaurants.length === 0) {
                    showDiaryToast(`⏳ ${friend.name} 님의 맛집 정보를 불러오는 중...`);
                    const fetched = await fetchFollowingUserRestaurants(fRealId);
                    friend.restaurants = fetched;
                } else {
                    await ensureListCoordinates(friend.restaurants);
                }

                const cleanFid = normFriendId(fRealId);
                [fRealId, cleanFid, 'user_' + cleanFid, 'following_' + cleanFid, friend.id].forEach(k => {
                    if (window.followingRestaurantsCache) window.followingRestaurantsCache.set(String(k), friend.restaurants);
                });
            }

            // Activate
            activeIds.push(canonicalId);
            saveActiveFriendIds(activeIds);
            zoomTarget = canonicalId;
            showDiaryToast(`⭐ [${friend.nickname || friend.name}] 맛집 마커 겹쳐보기 ON!`);
        }

        renderAllActiveFriendOverlays(zoomTarget);
        renderFriendChips();
        if (typeof renderFriendModalList === 'function') {
            renderFriendModalList();
        }
        if (typeof window.renderMobileFriendsListInPopover === 'function') {
            window.renderMobileFriendsListInPopover();
        }
        if (typeof window.updateMobileStarChipHighlight === 'function') {
            window.updateMobileStarChipHighlight();
        }
    };

    // ─── Friend Map Overlay Filtering Settings ───
    const FRIEND_FILTER_KEY = 'spoonmap_friend_overlay_filters';

    function getFriendFilterSettings() {
        try {
            const saved = JSON.parse(localStorage.getItem(FRIEND_FILTER_KEY));
            if (saved && typeof saved === 'object') {
                return {
                    categories: Array.isArray(saved.categories) ? saved.categories : [],
                    spoons: Array.isArray(saved.spoons) ? saved.spoons : [1, 2, 3, 4, 5]
                };
            }
        } catch (_) {}
        return {
            categories: [],
            spoons: [1, 2, 3, 4, 5]
        };
    }
    window.getFriendFilterSettings = getFriendFilterSettings;

    function saveFriendFilterSettings(settings) {
        try {
            localStorage.setItem(FRIEND_FILTER_KEY, JSON.stringify(settings));
        } catch (_) {}
    }
    window.saveFriendFilterSettings = saveFriendFilterSettings;

    function isFriendRestaurantAllowedByFilters(r, filterSettings) {
        if (!r) return false;
        if (!filterSettings) return true;

        if (Array.isArray(filterSettings.categories) && filterSettings.categories.length > 0) {
            if (filterSettings.categories.includes('__none__')) return false;
            const cat = r.category || '';
            const match = filterSettings.categories.some(c => {
                if (!c) return false;
                if (c === '한식') return cat.includes('한식');
                if (c === '일식') return cat.includes('일식') || cat.includes('초밥') || cat.includes('라멘');
                if (c === '중식') return cat.includes('중식') || cat.includes('짜장');
                if (c === '양식') return cat.includes('양식') || cat.includes('파스타') || cat.includes('스테이크');
                if (c === '고기') return cat.includes('고기') || cat.includes('구이') || cat.includes('삼겹');
                if (c === '해산물') return cat.includes('해산물') || cat.includes('생선') || cat.includes('회') || cat.includes('조개');
                if (c === '카페') return cat.includes('카페') || cat.includes('디저트') || cat.includes('베이커리');
                if (c === '술집') return cat.includes('술집') || cat.includes('주점') || cat.includes('포차') || cat.includes('맥주');
                if (c === '분식') return cat.includes('분식') || cat.includes('떡볶이');
                if (c === '치킨') return cat.includes('치킨') || cat.includes('닭강정');
                if (c === '피자') return cat.includes('피자') || cat.includes('버거');
                if (c === '패스트푸드') return cat.includes('패스트푸드') || cat.includes('버거');
                if (c === '아시안') return cat.includes('아시안') || cat.includes('아시아') || cat.includes('베트남') || cat.includes('태국');
                if (c === '샐러드') return cat.includes('샐러드') || cat.includes('포케');
                if (c === '기타') return cat.includes('기타') || !cat;
                return cat.includes(c);
            });
            if (!match) return false;
        }

        if (Array.isArray(filterSettings.spoons)) {
            if (filterSettings.spoons.length === 0) return false;
            const spoonCount = (r.rate ? (r.rate.match(/🥄/g) || []).length : 3) || 1;
            if (!filterSettings.spoons.includes(spoonCount)) return false;
        }

        return true;
    }

    window.renderAllActiveFriendOverlays = function(zoomFriendId = null, preserveScroll = false) {
        let activeMap = map || window.map;
        if (!activeMap && typeof initMap === 'function') {
            initMap();
            activeMap = map || window.map;
        }
        if (!activeMap) return;

        // 1. Clear all existing friend markers
        if (window.activeFriendMarkersMap) {
            for (const [id, markerList] of window.activeFriendMarkersMap.entries()) {
                if (Array.isArray(markerList)) {
                    markerList.forEach(m => m.setMap(null));
                }
            }
            window.activeFriendMarkersMap.clear();
        }
        window.activeFriendOverlayListItems = [];

        const syncListIfNeeded = () => {
            if (typeof window.syncActiveOverlayResultsList === 'function') {
                window.syncActiveOverlayResultsList(preserveScroll);
            }
        };

        const activeIds = getActiveFriendIds();
        if (!activeIds || activeIds.length === 0) {
            syncListIfNeeded();
            return;
        }
        const activeNormSet = new Set(activeIds.map(id => normFriendId(id)));

        const friends = getFriendsList();
        const activeFriends = friends.filter(f => activeIds.includes(f.id) || (f.isFollowingUser && activeNormSet.has(normFriendId(f.id))));
        if (activeFriends.length === 0) {
            syncListIfNeeded();
            return;
        }

        window._resolvedCoordsCache = window._resolvedCoordsCache || new Map();
        window._coordAttemptedKeys = window._coordAttemptedKeys || new Set();

        const unresolvedItems = [];
        activeFriends.forEach(f => {
            if (!f.restaurants || !Array.isArray(f.restaurants) || f.restaurants.length === 0) {
                const cId = normFriendId(f.realUserId || f.id);
                const rawF = String(f.realUserId || f.id);
                f.restaurants = window.followingRestaurantsCache?.get(cId) || 
                                window.followingRestaurantsCache?.get('user_' + cId) || 
                                window.followingRestaurantsCache?.get('following_' + cId) || 
                                window.followingRestaurantsCache?.get(rawF) || 
                                window.followingRestaurantsCache?.get(String(f.id)) || [];
                if ((!f.restaurants || f.restaurants.length === 0) && f.isFollowingUser && !f._fetchingNow) {
                    f._fetchingNow = true;
                    fetchFollowingUserRestaurants(cId).then(fetched => {
                        f._fetchingNow = false;
                        f.restaurants = fetched;
                        window.renderAllActiveFriendOverlays(zoomFriendId);
                    }).catch(() => { f._fetchingNow = false; });
                }
            }
            if (Array.isArray(f.restaurants) && f.restaurants.length <= 60) {
                f.restaurants.forEach(r => {
                    if (!r) return;
                    const cacheKey = `${(r.name || '').trim().toLowerCase()}|${(r.location_large || r.road_address || '').trim().toLowerCase()}`;
                    if (window._resolvedCoordsCache.has(cacheKey)) {
                        const cached = window._resolvedCoordsCache.get(cacheKey);
                        r.x = cached.x;
                        r.y = cached.y;
                        if (cached.road_address && !r.road_address) r.road_address = cached.road_address;
                    }
                    const rx = parseFloat(r?.x || 0);
                    const ry = parseFloat(r?.y || 0);
                    const valid = rx > 124 && rx < 132 && ry > 33 && ry < 39 &&
                        !(Math.abs(rx - 126.9780) < 0.0005 && Math.abs(ry - 37.5665) < 0.0005);
                    if (!valid && !window._coordAttemptedKeys.has(cacheKey) && !r._resolvingNow) {
                        unresolvedItems.push(r);
                    }
                });
            }
        });

        if (unresolvedItems.length > 0) {
            unresolvedItems.forEach(r => { r._resolvingNow = true; });
            Promise.all(unresolvedItems.map(r => resolveRestaurantCoordinates(r))).then(() => {
                let anyNewlyResolved = false;
                unresolvedItems.forEach(r => {
                    r._resolvingNow = false;
                    const rx = parseFloat(r?.x || 0);
                    const ry = parseFloat(r?.y || 0);
                    if (rx > 124 && rx < 132 && ry > 33 && ry < 39 && !(Math.abs(rx - 126.9780) < 0.0005 && Math.abs(ry - 37.5665) < 0.0005)) {
                        anyNewlyResolved = true;
                    }
                });
                if (anyNewlyResolved && getActiveFriendIds().length > 0) {
                    window.renderAllActiveFriendOverlays(zoomFriendId, true);
                }
            });
        }

        // Only compare against the CURRENT logged-in user's own restaurants (never Master's 728 list when a friend is logged in!)
        const myOwnRestaurants = (typeof getCurrentUserOwnRestaurants === 'function')
            ? getCurrentUserOwnRestaurants()
            : ((typeof isOwnerUser === 'function' && isOwnerUser() && typeof getMasterRestaurantList === 'function') ? getMasterRestaurantList() : []);

        const currentU = (typeof getCurrentUser === 'function') ? getCurrentUser() : null;
        const myNormId = currentU && currentU.id ? normFriendId(currentU.id) : null;

        // Group restaurants across active friends to detect intersections
        const groupedMap = new Map();

        let filterSettings = (typeof getFriendFilterSettings === 'function') ? getFriendFilterSettings() : null;
        const buildGroupedRestaurants = (activeFilters) => {
            groupedMap.clear();
            activeFriends.forEach(friend => {
                if (!friend.restaurants || !Array.isArray(friend.restaurants)) return;
                const isSelfFriend = myNormId && friend.isFollowingUser && normFriendId(friend.realUserId || friend.id) === myNormId;
                friend.restaurants.forEach(r => {
                    if (activeFilters && typeof isFriendRestaurantAllowedByFilters === 'function' && !isFriendRestaurantAllowedByFilters(r, activeFilters)) return;
                    const normName = normalizePlaceName(r.name);
                    if (!normName) return;

                    // Strict matching across friends to combine into multi-friend overlay
                    let matchedEntry = null;
                    for (const existing of groupedMap.values()) {
                        if (typeof isSameRestaurant === 'function' && isSameRestaurant(existing, r)) {
                            matchedEntry = existing;
                            break;
                        }
                    }

                    if (matchedEntry) {
                        if (!matchedEntry.matchedFriends.some(mf => normFriendId(mf.friend.id) === normFriendId(friend.id))) {
                            matchedEntry.matchedFriends.push({ friend, restaurant: r });
                        }
                    } else {
                        // Strict check if currently logged-in user also saved this exact restaurant
                        let commonSaved = null;
                        if (!isSelfFriend && Array.isArray(myOwnRestaurants) && myOwnRestaurants.length > 0) {
                            commonSaved = myOwnRestaurants.find(m => {
                                return typeof isSameRestaurant === 'function' ? isSameRestaurant(m, r) : false;
                            });
                        }

                        const rX = parseFloat(r.x || 0);
                        const rY = parseFloat(r.y || 0);
                        const hasValidXY = rX > 124 && rX < 132 && rY > 33 && rY < 39 &&
                            !(Math.abs(rX - 126.9780) < 0.0005 && Math.abs(rY - 37.5665) < 0.0005);
                        const groupKey = `${normName}_${rX.toFixed(3)}_${rY.toFixed(3)}_${groupedMap.size}`;

                        groupedMap.set(groupKey, {
                            name: r.name,
                            category: r.category || '음식점',
                            road_address: r.road_address || r.location_large || '',
                            location_large: r.location_large || '',
                            x: hasValidXY ? String(r.x) : '126.9780',
                            y: hasValidXY ? String(r.y) : '37.5665',
                            hasValidXY: hasValidXY,
                            map_url: r.map_url || '',
                            kakao_url: r.kakao_url || r.map_url || '',
                            naver_url: r.naver_url || '',
                            isCommon: !!commonSaved,
                            commonSaved: commonSaved || null,
                            matchedFriends: [{ friend, restaurant: r }]
                        });
                    }
                });
            });
        };

        buildGroupedRestaurants(filterSettings);
        // Auto-recover if restrictive filter settings hid 100% of available friend restaurants
        if (groupedMap.size === 0 && activeFriends.some(f => Array.isArray(f.restaurants) && f.restaurants.length > 0)) {
            const defaultFilters = { categories: [], spoons: [1, 2, 3, 4, 5] };
            saveFriendFilterSettings(defaultFilters);
            buildGroupedRestaurants(null);
        }

        const allCreatedMarkers = [];
        const zoomNorm = zoomFriendId ? normFriendId(zoomFriendId) : null;

        groupedMap.forEach(entry => {
            const isMulti = entry.matchedFriends.length > 1;
            const isCommon = entry.isCommon;
            const firstMatch = entry.matchedFriends[0];

            // Build allMatches array for detail rendering
            const allMatches = entry.matchedFriends.map(mf => ({
                friendId: mf.friend.id,
                friendName: mf.friend.nickname || mf.friend.name,
                avatarText: mf.friend.avatarText || '👤',
                color: mf.friend.color || '#6366F1',
                comment: mf.restaurant.comment || '',
                rate: mf.restaurant.rate || '🥄🥄🥄🥄',
                isCommon: isCommon,
                myRate: entry.commonSaved ? entry.commonSaved.rate : null,
                youtubeUrl: mf.restaurant.youtube_url || null,
                youtubeTitle: mf.restaurant.youtube_title || null,
                menu: mf.restaurant.menu || null,
                roadAddress: mf.restaurant.road_address || null,
                naver_url: mf.restaurant.naver_url || null,
                kakao_url: mf.restaurant.kakao_url || mf.restaurant.map_url || null
            }));

            const friendBadges = allMatches.map(m => ({ text: m.avatarText, color: m.color, name: m.friendName }));

            const item = {
                name: entry.name,
                category: entry.category,
                location_large: entry.location_large,
                rate: isCommon && entry.commonSaved ? entry.commonSaved.rate : firstMatch.restaurant.rate,
                visit_count: isCommon && entry.commonSaved ? (entry.commonSaved.visit_count || 1) : 1,
                map_url: entry.map_url || entry.kakao_url,
                friendInfo: {
                    ...allMatches[0],
                    isMultiFriend: isMulti,
                    matchesCount: allMatches.length,
                    friendBadges: friendBadges,
                    allMatches: allMatches
                }
            };

            const place = {
                place_name: entry.name,
                category_name: entry.category,
                address_name: entry.road_address,
                road_address_name: entry.road_address,
                x: entry.x,
                y: entry.y,
                _hasValidXY: entry.hasValidXY,
                place_url: entry.map_url || entry.kakao_url || `https://map.kakao.com/link/search/${encodeURIComponent(entry.name)}`
            };

            entry._builtItem = item;
            entry._builtPlace = place;

            const coords = new kakao.maps.LatLng(place.y, place.x);

            // Determine markerType & zIndex
            let markerType = 'friend';
            let zIndex = 95;
            if (isCommon && isMulti) {
                markerType = 'common_multi';
                zIndex = 140;
            } else if (isMulti) {
                markerType = 'multi_friend';
                zIndex = 130;
            } else if (isCommon) {
                markerType = 'common';
                zIndex = 125;
            }

            const svgUri = getModernMarkerSvg(markerType, item.category, false, friendBadges[0], friendBadges, item.name);

            let markerImg = null;
            if (typeof kakao !== 'undefined' && kakao.maps && kakao.maps.MarkerImage) {
                markerImg = new kakao.maps.MarkerImage(svgUri, new kakao.maps.Size(38, 38), { offset: new kakao.maps.Point(19, 19) });
            }

            const markerOptions = {
                map: activeMap,
                position: coords,
                zIndex: zIndex
            };
            if (markerImg) markerOptions.image = markerImg;

            const marker = new kakao.maps.Marker(markerOptions);
            allCreatedMarkers.push(marker);

            attachMarkerEvents(marker, item, place, isCommon, false, coords);
        });

        window.activeFriendMarkersMap.set('__unified_active__', allCreatedMarkers);

        // Build friendListItems and sync #map-results-list on both PC and Mobile without altering map zoom/center
        const friendListItems = [];
        groupedMap.forEach(entry => {
            if (!zoomFriendId || entry.matchedFriends.some(mf => mf.friend.id === zoomFriendId || normFriendId(mf.friend.id) === zoomNorm)) {
                friendListItems.push({
                    item: entry._builtItem,
                    place: entry._builtPlace,
                    isSaved: entry.isCommon,
                    isWishlist: false
                });
            }
        });
        if (friendListItems.length === 0) {
            groupedMap.forEach(entry => {
                friendListItems.push({
                    item: entry._builtItem,
                    place: entry._builtPlace,
                    isSaved: entry.isCommon,
                    isWishlist: false
                });
            });
        }
        window.activeFriendOverlayListItems = friendListItems;
        syncListIfNeeded();
    };



    // Backward-compatible alias
    function renderFriendMarkers(friend, bounds = null, shouldExtend = false) {
        renderAllActiveFriendOverlays();
    }

    function clearFriendMarkers(friendId) {
        renderAllActiveFriendOverlays();
    }

    // ─── Friend Modal & Settings Management ───
    const FRIEND_CATEGORIES = [
        { key: '한식', label: '🍚 한식' },
        { key: '일식', label: '🍣 일식' },
        { key: '중식', label: '🥢 중식' },
        { key: '양식', label: '🍝 양식' },
        { key: '고기', label: '🥩 고기' },
        { key: '해산물', label: '🐟 해산물' },
        { key: '카페', label: '☕ 카페' },
        { key: '술집', label: '🍺 술집' },
        { key: '분식', label: '🍢 분식' },
        { key: '치킨', label: '🍗 치킨' },
        { key: '피자', label: '🍕 피자·버거' },
        { key: '패스트푸드', label: '🍔 패스트푸드' },
        { key: '아시안', label: '🍜 아시안' },
        { key: '샐러드', label: '🥗 샐러드' },
        { key: '기타', label: '🍽️ 기타' }
    ];

    function renderFriendFilterCategoryChips() {
        const wrap = document.getElementById('friend-category-chips-wrap');
        const btnAll = document.getElementById('btn-toggle-all-friend-cats');
        if (!wrap) return;
        const filterSettings = getFriendFilterSettings();
        const cats = filterSettings.categories || [];
        const isAllSelected = cats.length === 0 || cats.length === FRIEND_CATEGORIES.length;
        if (btnAll) {
            btnAll.textContent = isAllSelected ? '전체 해제' : '전체 선택';
        }

        wrap.innerHTML = FRIEND_CATEGORIES.map(cat => {
            const isActive = isAllSelected || cats.includes(cat.key);
            return `
                <button type="button" class="friend-cat-chip ${isActive ? 'active' : ''}" data-cat="${cat.key}" onclick="window.toggleFriendCategoryFilter('${cat.key}')">
                    ${cat.label}
                </button>
            `;
        }).join('');
    }
    window.renderFriendFilterCategoryChips = renderFriendFilterCategoryChips;

    window.toggleFriendCategoryFilter = function(catKey) {
        const filterSettings = getFriendFilterSettings();
        let current = filterSettings.categories || [];
        if (current.length === 0) {
            current = FRIEND_CATEGORIES.map(c => c.key).filter(k => k !== catKey);
        } else if (current.includes(catKey)) {
            current = current.filter(k => k !== catKey);
            if (current.length === 0) {
                current = ['__none__'];
            }
        } else {
            current = current.filter(k => k !== '__none__');
            current.push(catKey);
            if (current.length === FRIEND_CATEGORIES.length) {
                current = [];
            }
        }
        filterSettings.categories = current;
        saveFriendFilterSettings(filterSettings);
        renderFriendFilterCategoryChips();
        if (typeof window.renderAllActiveFriendOverlays === 'function') {
            window.renderAllActiveFriendOverlays();
        }
        if (typeof window.renderMyRestaurantsOverlay === 'function') {
            window.renderMyRestaurantsOverlay();
        }
    };

    window.toggleAllFriendCategories = function() {
        const filterSettings = getFriendFilterSettings();
        const cats = filterSettings.categories || [];
        const isAll = cats.length === 0 || cats.length === FRIEND_CATEGORIES.length;
        if (isAll) {
            filterSettings.categories = ['__none__'];
        } else {
            filterSettings.categories = [];
        }
        saveFriendFilterSettings(filterSettings);
        renderFriendFilterCategoryChips();
        if (typeof window.renderAllActiveFriendOverlays === 'function') {
            window.renderAllActiveFriendOverlays();
        }
        if (typeof window.renderMyRestaurantsOverlay === 'function') {
            window.renderMyRestaurantsOverlay();
        }
    };

    function renderFriendFilterSpoonChips() {
        const wrap = document.getElementById('friend-spoon-chips-wrap');
        const btnAll = document.getElementById('btn-toggle-all-friend-spoons');
        if (!wrap) return;
        const filterSettings = getFriendFilterSettings();
        const spoons = filterSettings.spoons || [1, 2, 3, 4, 5];
        const isAll = spoons.length === 5;
        if (btnAll) {
            btnAll.textContent = isAll ? '전체 해제' : '전체 선택';
        }

        const spoonItems = [
            { count: 1, label: '🥄 1개' },
            { count: 2, label: '🥄 2개' },
            { count: 3, label: '🥄 3개' },
            { count: 4, label: '🥄 4개' },
            { count: 5, label: '🥄 5개' }
        ];

        wrap.innerHTML = spoonItems.map(item => {
            const isActive = spoons.includes(item.count);
            return `
                <button type="button" class="friend-spoon-chip ${isActive ? 'active' : ''}" data-spoon="${item.count}" onclick="window.toggleFriendSpoonFilter(${item.count})">
                    ${item.label}
                </button>
            `;
        }).join('');
    }
    window.renderFriendFilterSpoonChips = renderFriendFilterSpoonChips;

    window.toggleFriendSpoonFilter = function(spoonCount) {
        const filterSettings = getFriendFilterSettings();
        let spoons = filterSettings.spoons || [1, 2, 3, 4, 5];
        if (spoons.includes(spoonCount)) {
            spoons = spoons.filter(s => s !== spoonCount);
        } else {
            spoons = [...spoons, spoonCount].sort((a, b) => a - b);
        }
        filterSettings.spoons = spoons;
        saveFriendFilterSettings(filterSettings);
        renderFriendFilterSpoonChips();
        if (typeof window.renderAllActiveFriendOverlays === 'function') {
            window.renderAllActiveFriendOverlays();
        }
        if (typeof window.renderMyRestaurantsOverlay === 'function') {
            window.renderMyRestaurantsOverlay();
        }
    };

    window.toggleAllFriendSpoons = function() {
        const filterSettings = getFriendFilterSettings();
        const spoons = filterSettings.spoons || [1, 2, 3, 4, 5];
        if (spoons.length === 5) {
            filterSettings.spoons = [];
        } else {
            filterSettings.spoons = [1, 2, 3, 4, 5];
        }
        saveFriendFilterSettings(filterSettings);
        renderFriendFilterSpoonChips();
        if (typeof window.renderAllActiveFriendOverlays === 'function') {
            window.renderAllActiveFriendOverlays();
        }
        if (typeof window.renderMyRestaurantsOverlay === 'function') {
            window.renderMyRestaurantsOverlay();
        }
    };

    window.toggleAllFriendsOverlay = function(enable) {
        const friends = getFriendsList();
        if (enable) {
            const allIds = friends.map(f => f.id);
            saveActiveFriendIds(allIds);
        } else {
            saveActiveFriendIds([]);
            if (typeof window.clearActiveMapPlaceSelection === 'function') {
                window.clearActiveMapPlaceSelection();
            }
        }
        if (typeof window.renderAllActiveFriendOverlays === 'function') {
            window.renderAllActiveFriendOverlays();
        }
        if (typeof renderFriendChips === 'function') {
            renderFriendChips();
        }
        const searchInput = document.getElementById('friend-search-input');
        renderFriendModalList(searchInput ? searchInput.value.trim() : '');
        if (typeof renderMobileFriendsListInPopover === 'function') {
            renderMobileFriendsListInPopover();
        }
        if (typeof window.updateMobileStarChipHighlight === 'function') {
            window.updateMobileStarChipHighlight();
        }
    };

    function renderFriendModalList(query = '') {
        const listEl = document.getElementById('friend-modal-list');
        const countEl = document.getElementById('friend-modal-count');
        if (!listEl) return;
        const friends = getFriendsList();
        const activeIds = getActiveFriendIds();
        const activeNormSet = new Set(activeIds.map(id => normFriendId(id)));

        const q = (typeof query === 'string') ? query.trim().toLowerCase() : '';
        const filteredFriends = q ? friends.filter(f => {
            const name = (f.name || '').toLowerCase();
            const nick = (f.nickname || '').toLowerCase();
            const comment = (f.comment || '').toLowerCase();
            return name.includes(q) || nick.includes(q) || comment.includes(q);
        }) : friends;

        if (countEl) countEl.textContent = `${activeIds.length}명 켜짐 · 총 ${friends.length}명`;

        if (filteredFriends.length === 0) {
            listEl.innerHTML = `<div class="friend-search-empty">일치하는 친구가 없습니다.</div>`;
            return;
        }

        listEl.innerHTML = filteredFriends.map(f => {
            const isDemo = DEFAULT_DEMO_FRIENDS.some(df => df.id === f.id) || f.id === 'friend_ddoganzip' || f.id === 'friend_meogeultende' || f.id === 'friend_jungyugwang' || f.id === 'friend_seoulnamzaa' || f.id === 'friend_todaydessert';
            const isFollowing = !!f.isFollowingUser;
            const isActive = activeIds.includes(f.id) || (isFollowing && activeNormSet.has(normFriendId(f.id)));
            const badgeTag = f.id === 'friend_ddoganzip'
                ? '<span style="font-size:10px; color:#EF4444; font-weight:700; background:#FEF2F2; padding:1px 5px; border-radius:4px; border:1px solid #FECACA;">풍자 또간집 📺</span>'
                : (f.id === 'friend_meogeultende'
                    ? '<span style="font-size:10px; color:#2563EB; font-weight:700; background:#EFF6FF; padding:1px 5px; border-radius:4px; border:1px solid #BFDBFE;">성시경 추천 🍲</span>'
                    : (f.id === 'friend_jungyugwang'
                        ? '<span style="font-size:10px; color:#059669; font-weight:700; background:#ECFDF5; padding:1px 5px; border-radius:4px; border:1px solid #A7F3D0;">정육왕 추천 🥩</span>'
                        : (f.id === 'friend_seoulnamzaa'
                            ? '<span style="font-size:10px; color:#EA580C; font-weight:700; background:#FFF7ED; padding:1px 5px; border-radius:4px; border:1px solid #FFEDD5;">서울사는남자 🚶</span>'
                            : (f.id === 'friend_todaydessert'
                                ? '<span style="font-size:10px; color:#7C3AED; font-weight:700; background:#F5F3FF; padding:1px 5px; border-radius:4px; border:1px solid #DDD6FE;">투데이디저트 🍰</span>'
                                : (isDemo 
                            ? '<span style="font-size:10px; color:#6366F1; font-weight:normal;">추천 채널</span>' 
                            : (isFollowing 
                                ? '<span style="font-size:10px; color:#10B981; font-weight:700; background:#ECFDF5; padding:1px 5px; border-radius:4px; border:1px solid #A7F3D0;">미식가 🥄</span>' 
                                : ''))))));
            return `
                <div class="friend-modal-item">
                    <div class="friend-item-left">
                        <span class="friend-chip-avatar" style="background:${f.color || '#6366F1'}; width:32px; height:32px; font-size:13px; font-weight:800; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; color:#fff; flex-shrink:0;">${f.avatarText || '👤'}</span>
                        <div class="friend-item-info">
                            <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                <strong style="font-size:0.92rem; font-weight:800; color:#1E293B;">${f.nickname || f.name}</strong>
                                ${badgeTag}
                            </div>
                        </div>
                    </div>
                    <div class="friend-item-actions">
                        <div class="modal-toggle-wrap" style="display:flex; align-items:center; gap:8px;">
                            <span style="font-size:11px; font-weight:800; color:${isActive ? '#7C3AED' : '#94A3B8'}; min-width:24px; text-align:right;">${isActive ? 'ON' : 'OFF'}</span>
                            <label class="toggle-switch-sm">
                                <input type="checkbox" class="friend-toggle" ${isActive ? 'checked' : ''} onchange="window.toggleFriendOverlay('${f.id}')">
                                <span class="toggle-slider-sm"></span>
                            </label>
                        </div>
                        ${(!isDemo && !isFollowing) ? `
                            <button type="button" class="btn-del-friend" onclick="handleDeleteFriend('${f.id}')" title="친구 삭제">삭제</button>
                        ` : ''}
                    </div>
                </div>
            `;
        }).join('');
    }
    window.renderFriendModalList = renderFriendModalList;

    window.clearFriendSearch = function() {
        const searchInput = document.getElementById('friend-search-input');
        const clearBtn = document.getElementById('btn-clear-friend-search');
        if (searchInput) searchInput.value = '';
        if (clearBtn) clearBtn.style.display = 'none';
        renderFriendModalList('');
    };

    window.openFriendManageModal = function() {
        if (typeof window.closeAllMobileMapPopovers === 'function') {
            window.closeAllMobileMapPopovers();
        }
        const modal = document.getElementById('friend-manage-modal');
        if (!modal) return;
        renderFriendFilterCategoryChips();
        renderFriendFilterSpoonChips();

        const searchInput = document.getElementById('friend-search-input');
        const clearBtn = document.getElementById('btn-clear-friend-search');
        if (searchInput) {
            searchInput.value = '';
            if (!searchInput.dataset.hasListener) {
                searchInput.dataset.hasListener = 'true';
                searchInput.addEventListener('input', (e) => {
                    const val = e.target.value.trim();
                    if (clearBtn) clearBtn.style.display = val ? 'inline-block' : 'none';
                    renderFriendModalList(val);
                });
            }
        }
        if (clearBtn) clearBtn.style.display = 'none';

        renderFriendModalList('');
        modal.style.display = 'flex';
        void modal.offsetHeight;
        modal.classList.add('open');
    };

    window.closeFriendManageModal = function() {
        const modal = document.getElementById('friend-manage-modal');
        if (!modal) return;
        modal.classList.remove('open');
        if (typeof window.closeAllMobileMapPopovers === 'function') {
            window.closeAllMobileMapPopovers();
        }
        setTimeout(() => {
            if (!modal.classList.contains('open')) {
                modal.style.display = 'none';
            }
        }, 250);
    };

    window.handleDeleteFriend = function(friendId) {
        if (!confirm('이 친구를 삭제하시겠습니까?')) return;
        clearFriendMarkers(friendId);
        let custom = getCustomFriends();
        custom = custom.filter(f => f.id !== friendId);
        saveCustomFriends(custom);

        let activeIds = getActiveFriendIds();
        activeIds = activeIds.filter(id => id !== friendId);
        saveActiveFriendIds(activeIds);

        renderFriendModalList();
        renderFriendChips();
        showDiaryToast('🗑️ 친구가 삭제되었습니다.');
    };

    window.handleAddNewFriend = function() {
        const nameInput = document.getElementById('new-friend-name');
        const avatarInput = document.getElementById('new-friend-avatar');
        const commentInput = document.getElementById('new-friend-comment');
        const restInput = document.getElementById('new-friend-restaurants');

        const name = (nameInput?.value || '').trim();
        if (!name) {
            alert('친구 이름을 입력해주세요.');
            return;
        }

        const avatarText = (avatarInput?.value || '').trim() || name.slice(0, 1);
        const comment = (commentInput?.value || '').trim() || '내가 애정하는 추천 맛집';

        // Get selected color from dots
        const activeDot = document.querySelector('#new-friend-color-picker .color-dot.active');
        const color = activeDot?.getAttribute('data-color') || '#6366F1';

        // Parse restaurants from textarea
        const rawLines = (restInput?.value || '').split('\n').map(l => l.trim()).filter(Boolean);
        const restaurants = rawLines.map(line => {
            const parts = line.split(/\s+/);
            const rName = parts[0];
            const rCat = parts[1] || '음식점';
            return {
                name: rName,
                category: rCat,
                location_large: '서울',
                rate: '🥄🥄🥄🥄',
                comment: '친구가 강력 추천한 곳',
                x: '126.9780',
                y: '37.5665'
            };
        });

        const newFriend = {
            id: 'friend_custom_' + Date.now(),
            name: name,
            nickname: name,
            avatarText: avatarText,
            color: color,
            comment: comment,
            restaurants: restaurants
        };

        const custom = getCustomFriends();
        custom.push(newFriend);
        saveCustomFriends(custom);

        // Reset form
        if (nameInput) nameInput.value = '';
        if (avatarInput) avatarInput.value = '';
        if (commentInput) commentInput.value = '';
        if (restInput) restInput.value = '';

        renderFriendModalList();
        renderFriendChips();
        showDiaryToast(`🎉 [${name}] 친구가 추가되었습니다! 지도에서 켜보세요.`);
    };

    // Setup color dot picker clicks
    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('color-dot')) {
            document.querySelectorAll('#new-friend-color-picker .color-dot').forEach(d => d.classList.remove('active'));
            e.target.classList.add('active');
        }
    });

    const btnToggleFriendsPanel = document.getElementById('btn-toggle-friends-panel');
    if (btnToggleFriendsPanel) {
        btnToggleFriendsPanel.addEventListener('click', () => {
            const bar = document.getElementById('map-friends-bar');
            if (!bar) return;
            const isShowing = bar.style.display !== 'none';
            bar.style.display = isShowing ? 'none' : 'block';
            btnToggleFriendsPanel.classList.toggle('active', !isShowing);
            if (!isShowing) {
                renderFriendChips();
                // Render any previously active friends
                const activeIds = getActiveFriendIds();
                const friends = getFriendsList();
                activeIds.forEach(fid => {
                    const f = friends.find(item => item.id === fid);
                    if (f && (!window.activeFriendMarkersMap || !window.activeFriendMarkersMap.has(fid))) {
                        renderFriendMarkers(f);
                    }
                });
            }
        });
    }

    const btnOpenFriendManager = document.getElementById('btn-open-friend-manager');
    if (btnOpenFriendManager) {
        btnOpenFriendManager.addEventListener('click', (e) => {
            e.preventDefault();
            window.openFriendManageModal();
        });
    }

    // =========================================================================
    // Mobile Map Modern Chips, Popovers & Drag-down Sheet Controller
    // =========================================================================
    function attachMapSheetSwipe() {
        const sheet = document.getElementById('map-results-list');
        const handle = document.getElementById('map-sheet-handle');
        if (!sheet || !handle) return;
        if (handle._swipeAttached) return;
        handle._swipeAttached = true;

        let startY = 0;
        let currentY = 0;
        let startTime = 0;
        let isDragging = false;

        handle.addEventListener('touchstart', (e) => {
            if (!e.touches || !e.touches[0]) return;
            startY = e.touches[0].clientY;
            currentY = startY;
            startTime = Date.now();
            isDragging = true;
            sheet.style.transition = 'none';
        }, { passive: true });

        handle.addEventListener('touchmove', (e) => {
            if (!isDragging || !e.touches || !e.touches[0]) return;
            currentY = e.touches[0].clientY;
            const deltaY = currentY - startY;

            if (e.cancelable) e.preventDefault();

            const isCollapsed = sheet.classList.contains('collapsed-peek');
            if (isCollapsed) {
                const sheetH = sheet.offsetHeight || 300;
                const peekOffset = sheetH - 44;
                const newY = Math.max(0, peekOffset + deltaY);
                sheet.style.transform = `translateY(${newY}px)`;
            } else {
                if (deltaY > 0) {
                    sheet.style.transform = `translateY(${deltaY}px)`;
                } else {
                    sheet.style.transform = `translateY(${deltaY * 0.15}px)`;
                }
            }
        }, { passive: false });

        const finishDrag = (e) => {
            if (!isDragging) return;
            isDragging = false;

            const endY = (e && e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientY : currentY;
            const deltaY = endY - startY;
            const elapsed = Math.max(1, Date.now() - startTime);
            const velocity = deltaY / elapsed;
            const isCollapsed = sheet.classList.contains('collapsed-peek');

            sheet.style.transition = 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)';

            if (isCollapsed) {
                if (deltaY < -30 || (velocity < -0.3 && deltaY < -10)) {
                    sheet.style.transform = 'translateY(0)';
                    sheet.classList.remove('collapsed-peek');
                } else {
                    sheet.style.transform = 'translateY(calc(100% - 44px))';
                }
            } else {
                if (deltaY > 35 || (velocity > 0.3 && deltaY > 15)) {
                    sheet.style.transform = 'translateY(calc(100% - 44px))';
                    sheet.classList.add('collapsed-peek');
                } else {
                    sheet.style.transform = 'translateY(0)';
                }
            }
        };

        handle.addEventListener('touchend', finishDrag, { passive: true });
        handle.addEventListener('touchcancel', finishDrag, { passive: true });

        // Click/tap toggle fallback
        handle.addEventListener('click', () => {
            sheet.style.transition = 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)';
            const isCollapsed = sheet.classList.contains('collapsed-peek');
            if (isCollapsed) {
                sheet.style.transform = 'translateY(0)';
                sheet.classList.remove('collapsed-peek');
            } else {
                sheet.style.transform = 'translateY(calc(100% - 44px))';
                sheet.classList.add('collapsed-peek');
            }
        });
    }
    window.attachMapSheetSwipe = attachMapSheetSwipe;
    attachMapSheetSwipe();

    function attachDetailSheetSwipe() {
        const sheet = document.getElementById('map-place-detail');
        const handle = document.getElementById('map-detail-sheet-handle');
        if (!sheet || !handle) return;
        if (handle._swipeAttached) return;
        handle._swipeAttached = true;

        let startY = 0;
        let currentY = 0;
        let startTime = 0;
        let isDragging = false;

        const onTouchStart = (e) => {
            if (!e.touches || !e.touches[0]) return;
            if (e.target.closest('button') || e.target.closest('a')) return;
            startY = e.touches[0].clientY;
            currentY = startY;
            startTime = Date.now();
            isDragging = true;
            sheet.style.transition = 'none';
        };

        const onTouchMove = (e) => {
            if (!isDragging || !e.touches || !e.touches[0]) return;
            currentY = e.touches[0].clientY;
            const deltaY = currentY - startY;

            if (e.cancelable) e.preventDefault();

            if (deltaY > 0) {
                sheet.style.transform = `translateY(${deltaY}px)`;
            } else {
                sheet.style.transform = `translateY(${deltaY * 0.15}px)`;
            }
        };

        const finishDrag = (e) => {
            if (!isDragging) return;
            isDragging = false;

            const endY = (e && e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientY : currentY;
            const deltaY = endY - startY;
            const elapsed = Math.max(1, Date.now() - startTime);
            const velocity = deltaY / elapsed;

            sheet.style.transition = 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)';

            if (deltaY > 60 || (velocity > 0.4 && deltaY > 20)) {
                sheet.style.transform = 'translateY(100%)';
                setTimeout(() => {
                    sheet.style.transform = '';
                    if (typeof handleBackFromPlaceDetail === 'function') {
                        handleBackFromPlaceDetail();
                    }
                }, 280);
            } else {
                sheet.style.transform = 'translateY(0)';
            }
        };

        const dragTargets = [handle, sheet.querySelector('.detail-header-row')].filter(Boolean);
        dragTargets.forEach(target => {
            target.addEventListener('touchstart', onTouchStart, { passive: true });
            target.addEventListener('touchmove', onTouchMove, { passive: false });
            target.addEventListener('touchend', finishDrag, { passive: true });
            target.addEventListener('touchcancel', finishDrag, { passive: true });
        });

        // Click/tap toggle fallback: smooth close
        handle.addEventListener('click', () => {
            sheet.style.transition = 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)';
            sheet.style.transform = 'translateY(100%)';
            setTimeout(() => {
                sheet.style.transform = '';
                if (typeof handleBackFromPlaceDetail === 'function') {
                    handleBackFromPlaceDetail();
                }
            }, 280);
        });
    }
    window.attachDetailSheetSwipe = attachDetailSheetSwipe;

    function initMobileMapChipsAndPopovers() {
        const catChip = document.getElementById('btn-cat-chip');
        const starChip = document.getElementById('btn-star-chip');
        const pcStarBtn = document.getElementById('btn-pc-star-menu');
        const popCat = document.getElementById('popover-cat-menu');
        const popStar = document.getElementById('popover-star-menu');
        const backdrop = document.getElementById('map-popover-backdrop');
        const catIcon = document.getElementById('cat-chip-icon');
        const catText = document.getElementById('cat-chip-text');
        const catClear = document.getElementById('cat-chip-clear');

        const switchWishlist = document.getElementById('switch-wishlist-toggle');
        const switchFriends = document.getElementById('switch-friends-toggle');
        const friendsSubList = document.getElementById('pop-friends-sub-list');

        if (!catChip || !starChip || !popCat || !popStar) return;

        function closeAllPopovers() {
            popCat.classList.remove('show');
            popStar.classList.remove('show');
            if (backdrop) backdrop.classList.remove('show');
            catChip.classList.remove('open');
            starChip.classList.remove('open');
            if (pcStarBtn) pcStarBtn.classList.remove('open');
            popCat.style.removeProperty('display');
            popStar.style.removeProperty('display');
            if (backdrop) backdrop.style.removeProperty('display');
        }
        window.closeAllMobileMapPopovers = closeAllPopovers;

        if (backdrop) {
            backdrop.addEventListener('click', (e) => {
                e.stopPropagation();
                closeAllPopovers();
            });
            backdrop.addEventListener('touchstart', (e) => {
                e.preventDefault();
                e.stopPropagation();
                closeAllPopovers();
            }, { passive: false });
        }

        // Ensure initial chip label is clean and hidden
        if (catText) {
            catText.innerText = '';
            catText.style.display = 'none';
        }
        if (catClear) {
            catClear.style.display = 'none';
        }

        // Global outside click listener
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#btn-cat-chip') && 
                !e.target.closest('#btn-star-chip') && 
                !e.target.closest('#btn-pc-star-menu') && 
                !e.target.closest('#popover-cat-menu') && 
                !e.target.closest('#popover-star-menu')) {
                closeAllPopovers();
            }
        });

        // 1. Category Chip Click
        catChip.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = popCat.classList.contains('show');
            closeAllPopovers();
            if (!isOpen) {
                popCat.classList.add('show');
                catChip.classList.add('open');
                if (backdrop) backdrop.classList.add('show');
            }
        });

        // Category Items Selection
        popCat.querySelectorAll('.pop-cat-item').forEach(item => {
            item.addEventListener('click', () => {
                const keyword = item.dataset.keyword || '';
                popCat.querySelectorAll('.pop-cat-item').forEach(i => {
                    i.classList.remove('active');
                    const c = i.querySelector('.check-mark');
                    if (c) c.remove();
                });
                item.classList.add('active');
                const check = document.createElement('span');
                check.className = 'check-mark';
                check.innerText = '✓';
                item.appendChild(check);

                if (!keyword || keyword === '전체') {
                    window.currCategory = 'FD6';
                    window.currSubKeyword = '';
                    catChip.classList.remove('cat-active');
                    if (catIcon) catIcon.innerText = '🍴';
                    if (catText) {
                        catText.innerText = '전체';
                        catText.style.display = 'inline';
                    }
                    if (catClear) catClear.style.display = 'inline';
                } else {
                    window.currCategory = 'FD6';
                    window.currSubKeyword = keyword;
                    catChip.classList.add('cat-active');
                    const emojiMap = {
                        '한식': '🍚', '일식': '🍣', '중식': '🥢', '양식': '🍝',
                        '고기': '🥩', '해산물': '🐟', '카페': '☕', '술집': '🍺', '분식': '🍢',
                        '치킨': '🍗', '피자': '🍕', '패스트푸드': '🍔', '아시안': '🍜', '아시아음식': '🍜',
                        '샐러드': '🥗', '기타': '🍽️'
                    };
                    const em = emojiMap[keyword] || '🍴';
                    if (catIcon) catIcon.innerText = em;
                    if (catText) {
                        catText.innerText = '';
                        catText.style.display = 'none';
                    }
                    if (catClear) catClear.style.display = 'inline';
                    catChip.setAttribute('title', keyword);
                }

                closeAllPopovers();
                const sheet = document.getElementById('map-results-list');
                if (sheet) {
                    sheet.style.display = 'block';
                    sheet.style.transform = 'translateY(0)';
                    sheet.classList.remove('collapsed-peek');
                    sheet.scrollTop = 0;
                }
                updateMapMarkers();
            });
        });

        // Category Clear (✕)
        if (catClear) {
            catClear.addEventListener('click', (e) => {
                e.stopPropagation();
                window.currCategory = '';
                window.currSubKeyword = '';
                catChip.classList.remove('cat-active');
                if (catIcon) catIcon.innerText = '🍴';
                if (catText) {
                    catText.innerText = '';
                    catText.style.display = 'none';
                }
                if (catClear) catClear.style.display = 'none';
                popCat.querySelectorAll('.pop-cat-item').forEach(i => {
                    i.classList.remove('active');
                    const c = i.querySelector('.check-mark');
                    if (c) c.remove();
                });
                closeAllPopovers();
                updateMapMarkers();
                if (typeof window.syncActiveOverlayResultsList === 'function') {
                    window.syncActiveOverlayResultsList();
                }
            });
        }

        // 2. Star Chip / PC Star Button Click
        const handleToggleStarMenu = (e, triggerBtn) => {
            e.stopPropagation();
            const isOpen = popStar.classList.contains('show');
            closeAllPopovers();
            if (!isOpen) {
                popStar.classList.add('show');
                if (triggerBtn) triggerBtn.classList.add('open');
                if (backdrop) backdrop.classList.add('show');
                renderMobileFriendsListInPopover();
                updateStarChipHighlight();
            }
        };

        starChip.addEventListener('click', (e) => handleToggleStarMenu(e, starChip));
        if (pcStarBtn) {
            pcStarBtn.addEventListener('click', (e) => handleToggleStarMenu(e, pcStarBtn));
        }

        // My Restaurants Toggle
        const switchMyRestaurants = document.getElementById('switch-my-restaurants-toggle');
        const popRowMyRestaurants = document.getElementById('pop-row-my-restaurants');
        if (switchMyRestaurants) {
            switchMyRestaurants.addEventListener('change', () => {
                if (switchMyRestaurants.checked) {
                    if (switchWishlist) switchWishlist.checked = false;
                    showMyVisitedPlacesOnMap();
                    closeAllPopovers();
                } else {
                    hideMyVisitedPlacesOnMap();
                }
                updateStarChipHighlight();
            });
        }
        if (popRowMyRestaurants && switchMyRestaurants) {
            popRowMyRestaurants.style.cursor = 'pointer';
            popRowMyRestaurants.addEventListener('click', (e) => {
                if (e.target.closest('.toggle-switch-sm')) return;
                switchMyRestaurants.checked = !switchMyRestaurants.checked;
                switchMyRestaurants.dispatchEvent(new Event('change'));
            });
        }

        // Wishlist Toggle
        const popRowWishlist = document.getElementById('pop-row-wishlist');
        if (switchWishlist) {
            switchWishlist.addEventListener('change', () => {
                if (switchWishlist.checked) {
                    if (switchMyRestaurants && switchMyRestaurants.checked) {
                        hideMyVisitedPlacesOnMap();
                    }
                    showWishlistPlacesOnMap();
                    closeAllPopovers();
                } else {
                    resetMapSearchToInitial();
                }
                updateStarChipHighlight();
            });
        }
        if (popRowWishlist && switchWishlist) {
            popRowWishlist.style.cursor = 'pointer';
            popRowWishlist.addEventListener('click', (e) => {
                if (e.target.closest('.toggle-switch-sm')) return;
                switchWishlist.checked = !switchWishlist.checked;
                switchWishlist.dispatchEvent(new Event('change'));
            });
        }

        // Friends Header Click (Toggle All On / All Off)
        const popRowFriends = document.getElementById('pop-row-friends');
        if (popRowFriends) {
            popRowFriends.addEventListener('click', async (e) => {
                if (e.target.closest('.toggle-switch-sm')) return;
                const activeIds = (typeof getActiveFriendIds === 'function') ? getActiveFriendIds() : [];
                const friends = (typeof getFriendsList === 'function') ? getFriendsList() : [];
                let turnedAllOn = false;
                if (activeIds.length > 0) {
                    saveActiveFriendIds([]);
                    if (typeof window.clearActiveMapPlaceSelection === 'function') {
                        window.clearActiveMapPlaceSelection();
                    }
                    if (typeof window.renderAllActiveFriendOverlays === 'function') {
                        window.renderAllActiveFriendOverlays();
                    }
                    if (typeof renderFriendChips === 'function') {
                        renderFriendChips();
                    }
                } else if (friends.length > 0) {
                    turnedAllOn = true;
                    const allIds = friends.map(f => f.id);
                    saveActiveFriendIds(allIds);
                    if (typeof window.renderAllActiveFriendOverlays === 'function') {
                        window.renderAllActiveFriendOverlays(friends[0].id);
                    }
                    if (typeof renderFriendChips === 'function') {
                        renderFriendChips();
                    }
                }
                renderMobileFriendsListInPopover();
                updateStarChipHighlight();
                if (typeof renderFriendModalList === 'function') {
                    renderFriendModalList();
                }
                if (turnedAllOn) {
                    closeAllPopovers();
                }
            });
        }

        function updateStarChipHighlight() {
            const targets = [starChip, pcStarBtn].filter(Boolean);
            targets.forEach(btn => btn.classList.remove('star-active', 'friend-active', 'both-active', 'my-active'));

            const myOn = switchMyRestaurants && switchMyRestaurants.checked;
            const wishOn = switchWishlist && switchWishlist.checked;
            const activeIds = (typeof getActiveFriendIds === 'function') ? getActiveFriendIds() : [];
            const friendOn = activeIds.length > 0;

            let activeCls = '';
            if (myOn && friendOn) {
                activeCls = 'both-active';
            } else if (myOn) {
                activeCls = 'my-active';
            } else if (wishOn && friendOn) {
                activeCls = 'both-active';
            } else if (wishOn) {
                activeCls = 'star-active';
            } else if (friendOn) {
                activeCls = 'friend-active';
            }
            if (activeCls) {
                targets.forEach(btn => btn.classList.add(activeCls));
            }
        }
        window.updateMobileStarChipHighlight = updateStarChipHighlight;

        function renderMobileFriendsListInPopover() {
            if (!friendsSubList || typeof getFriendsList !== 'function') return;
            const friends = getFriendsList();
            const activeIds = (typeof getActiveFriendIds === 'function') ? getActiveFriendIds() : [];
            const activeSet = new Set(activeIds);
            const activeNormSet = new Set(activeIds.map(id => normFriendId(id)));

            // Update badge in header
            const badgeEl = document.getElementById('pop-friends-active-badge');
            if (badgeEl) {
                if (activeIds.length > 0) {
                    badgeEl.textContent = `${activeIds.length}개 켜짐`;
                    badgeEl.style.color = '#7C3AED';
                    badgeEl.style.background = '#FAF5FF';
                    badgeEl.style.border = '1px solid #DDD6FE';
                } else {
                    badgeEl.textContent = '모두 꺼짐';
                    badgeEl.style.color = '#94A3B8';
                    badgeEl.style.background = '#F8FAFC';
                    badgeEl.style.border = '1px solid #E2E8F0';
                }
            }

            friendsSubList.innerHTML = '';
            if (friends.length === 0) {
                friendsSubList.innerHTML = `<div style="font-size:11px; color:#94A3B8; padding:8px 6px; text-align:center;">등록된 친구가 없습니다.</div>`;
                return;
            }

            friends.forEach(f => {
                const isActive = activeSet.has(f.id) || (f.isFollowingUser && activeNormSet.has(normFriendId(f.id)));
                const rowEl = document.createElement('div');
                rowEl.className = `pop-friend-row ${isActive ? 'active' : ''}`;
                rowEl.innerHTML = `
                    <div class="pop-friend-info">
                        <span class="pop-friend-avatar" style="background:${f.color || '#6366F1'};">${f.avatarText || '👤'}</span>
                        <span class="pop-friend-name" title="${f.nickname || f.name}">${f.nickname || f.name}</span>
                    </div>
                    <label class="toggle-switch-sm friend-toggle-label" style="margin-left:auto;" onclick="event.stopPropagation();">
                        <input type="checkbox" class="friend-toggle" data-friend-id="${f.id}" ${isActive ? 'checked' : ''}>
                        <span class="toggle-slider-sm"></span>
                    </label>
                `;

                const handleToggleFriendFromMobilePopover = async (e) => {
                    e.stopPropagation();
                    const wasActive = isActive;
                    if (typeof window.toggleFriendOverlay === 'function') {
                        await window.toggleFriendOverlay(f.id);
                    }
                    renderMobileFriendsListInPopover();
                    updateStarChipHighlight();
                    if (!wasActive) {
                        closeAllPopovers();
                    }
                };

                const chk = rowEl.querySelector('input.friend-toggle');
                chk.addEventListener('change', handleToggleFriendFromMobilePopover);

                rowEl.addEventListener('click', (e) => {
                    if (e.target.closest('.toggle-switch-sm')) return;
                    handleToggleFriendFromMobilePopover(e);
                });

                friendsSubList.appendChild(rowEl);
            });
        }
        window.renderMobileFriendsListInPopover = renderMobileFriendsListInPopover;

        window.resetMapTabFullState = function() {
            localStorage.setItem('spoonmap_active_friend_ids', '[]');
            window.isMyRestaurantsActive = false;
            window.activeMyRestaurantListItems = [];
            window.activeFriendOverlayListItems = [];

            if (Array.isArray(window.activeMyRestaurantMarkers)) {
                window.activeMyRestaurantMarkers.forEach(m => m.setMap(null));
            }
            window.activeMyRestaurantMarkers = [];

            if (window.activeFriendMarkersMap) {
                for (const [, markerList] of window.activeFriendMarkersMap.entries()) {
                    if (Array.isArray(markerList)) {
                        markerList.forEach(m => m.setMap(null));
                    }
                }
                window.activeFriendMarkersMap.clear();
            }

            const switchMy = document.getElementById('switch-my-restaurants-toggle');
            if (switchMy) switchMy.checked = false;
            const switchWish = document.getElementById('switch-wishlist-toggle');
            if (switchWish) switchWish.checked = false;
            const btnShowMy = document.getElementById('btn-show-my-restaurants');
            if (btnShowMy) btnShowMy.classList.remove('active');
            const btnWish = document.getElementById('btn-show-wishlist');
            if (btnWish) btnWish.classList.remove('active');
            const btnFriends = document.getElementById('btn-toggle-friends-panel');
            if (btnFriends) btnFriends.classList.remove('active');
            const friendsBar = document.getElementById('map-friends-bar');
            if (friendsBar) friendsBar.style.display = 'none';

            closeAllPopovers();
            if (typeof window.resetMapSearchToInitial === 'function') {
                window.resetMapSearchToInitial();
            }
            if (typeof window.renderFriendChips === 'function') {
                window.renderFriendChips();
            }
            renderMobileFriendsListInPopover();
            updateStarChipHighlight();
            if (typeof window.renderFriendModalList === 'function') {
                window.renderFriendModalList();
            }
        };

        // Reset Map tab state on initial load and whenever screen/app/web is closed or backgrounded
        window.resetMapTabFullState();
        window.addEventListener('pageshow', (e) => {
            if (e.persisted && typeof window.resetMapTabFullState === 'function') {
                window.resetMapTabFullState();
            }
        });
        window.addEventListener('pagehide', () => {
            if (typeof window.resetMapTabFullState === 'function') {
                window.resetMapTabFullState();
            }
        });
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden' && typeof window.resetMapTabFullState === 'function') {
                window.resetMapTabFullState();
            }
        });
    }
    initMobileMapChipsAndPopovers();

    // Helper to get filtered data for map
    function getFilteredData() {
        const useName = document.getElementById('search-name').checked;
        const useCat = document.getElementById('search-category').checked;
        const useSub = document.getElementById('search-subloc').checked;
        const masterData = getUnifiedRestaurantData();

        return masterData.filter(item => {
            const catMatch = currentFilters.category.length === 0 || 
                           currentFilters.category.some(c => item.category && item.category.includes(c));
            const hasLarge = currentFilters.location_large && currentFilters.location_large.length > 0;
            const hasSmall = currentFilters.location_small && currentFilters.location_small.length > 0;
            let locMatch = true;
            if (hasLarge || hasSmall) {
                const matchLarge = hasLarge && currentFilters.location_large.some(reg => {
                    if (!reg) return false;
                    const r = reg.trim();
                    return (item.location_large && (item.location_large.includes(r) || r.includes(item.location_large))) ||
                           (item.location_small && (item.location_small.includes(r) || r.includes(item.location_small))) ||
                           (item.road_address && item.road_address.includes(r)) ||
                           (item.address && item.address.includes(r));
                });
                const matchSmall = hasSmall && currentFilters.location_small.includes(item.location_small);
                locMatch = matchLarge || matchSmall;
            }
            
            let searchMatch = true;
            if (currentFilters.searchQuery) {
                searchMatch = false;
                if (useName && item.name.toLowerCase().includes(currentFilters.searchQuery)) searchMatch = true;
                if (useCat && item.category && item.category.toLowerCase().includes(currentFilters.searchQuery)) searchMatch = true;
                if (useSub && item.location_small && item.location_small.toLowerCase().includes(currentFilters.searchQuery)) searchMatch = true;
            }

            return catMatch && locMatch && searchMatch;
        });
    }

    let dateRangeFilter = {
        startDate: '',
        endDate: ''
    };
    window.dateRangeFilter = dateRangeFilter;

    function setupFilters() {
        refreshSidebarFilters();

        // More Button Event
        if (btnMoreLocation) {
            btnMoreLocation.addEventListener('click', () => {
                locationLargeVisibleCount += locationLargePageSize;
                renderLocationButtons();
            });
        }

        // Collapse Button Event
        if (btnCollapseLocation) {
            btnCollapseLocation.addEventListener('click', () => {
                locationLargeVisibleCount = 10;
                renderLocationButtons();
            });
        }

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

        const syncDateInputs = () => {
            if (startInput) startInput.dataset.hasValue = startInput.value ? 'true' : 'false';
            if (endInput) endInput.dataset.hasValue = endInput.value ? 'true' : 'false';
        };
        if (startInput) {
            startInput.addEventListener('change', syncDateInputs);
            startInput.addEventListener('input', syncDateInputs);
        }
        if (endInput) {
            endInput.addEventListener('change', syncDateInputs);
            endInput.addEventListener('input', syncDateInputs);
        }
        syncDateInputs();

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
                syncDateInputs();

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
                if (startInput) {
                    startInput.value = '';
                    startInput.dataset.hasValue = 'false';
                }
                if (endInput) {
                    endInput.value = '';
                    endInput.dataset.hasValue = 'false';
                }
                if (badgeInfo) {
                    badgeInfo.textContent = '';
                    badgeInfo.style.display = 'none';
                }
                render();
            });
        }

        // Expose global full filter reset
        window.resetMainAppFilters = function() {
            currentFilters.gourmet = ['me'];
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
            if (startIn) { startIn.value = ''; startIn.dataset.hasValue = 'false'; }
            if (endIn) { endIn.value = ''; endIn.dataset.hasValue = 'false'; }
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

        // Seed with standard categories
        DEFAULT_CATEGORIES.forEach(cat => categories.add(cat));

        unifiedData.forEach(item => {
            if (item.category) {
                item.category.split(',').forEach(cat => {
                    const t = cat.trim();
                    if (t) {
                        const std = (typeof mapKakaoCategoryToStandard === 'function') ? mapKakaoCategoryToStandard(t, '') : t;
                        categories.add(std || t);
                    }
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

        // Refresh Category Buttons (Keep 'all' button) - Canonical Sort
        if (categoryFilterGroup) {
            const existingCatBtns = categoryFilterGroup.querySelectorAll('.filter-btn:not([data-value="all"])');
            existingCatBtns.forEach(b => b.remove());

            const sortedCats = Array.from(categories).sort((a, b) => {
                const idxA = DEFAULT_CATEGORIES.indexOf(a);
                const idxB = DEFAULT_CATEGORIES.indexOf(b);
                if (idxA !== -1 && idxB !== -1) return idxA - idxB;
                if (idxA !== -1) return -1;
                if (idxB !== -1) return 1;
                return a.localeCompare(b, 'ko');
            });

            sortedCats.forEach(cat => {
                const btn = createFilterBtn('category', cat);
                if (currentFilters.category.includes(cat)) btn.classList.add('active');
                categoryFilterGroup.appendChild(btn);
            });
        }

        // Refresh Dynamic Location Filter UI
        renderDynamicLocationFilters();
        updateLocationActiveBadges();

        // Refresh Gourmet Filter Buttons
        const gourmetGroup = document.getElementById('gourmet-filters');
        const mobileGourmetScroll = document.getElementById('mobile-gourmet-scroll');
        const followingList = (typeof getUserFollowingList === 'function') ? getUserFollowingList() : [];
        const isOwner = (typeof isOwnerUser === 'function') && isOwnerUser();

        const gourmetItems = [
            { id: 'me', label: '👤 내 맛집', mobileLabel: '👤 내 맛집' },
            { id: 'all', label: '🌐 전체', mobileLabel: '🌐 전체' }
        ];

        if (isOwner) {
            gourmetItems.push(
                { id: 'mock_minwoo_jeju', label: '🌊 강민우', mobileLabel: '🌊 강민우' },
                { id: 'mock_seoyeon_cafe', label: '☕ 이서연', mobileLabel: '☕ 이서연' }
            );
        }

        const cachedUsers = (typeof cachedDiscoveredUsers !== 'undefined' && Array.isArray(cachedDiscoveredUsers))
            ? cachedDiscoveredUsers
            : JSON.parse(localStorage.getItem('spoonmap_cached_public_users') || '[]');

        followingList.forEach(fid => {
            if (fid === 'mock_minwoo_jeju' || fid === 'mock_seoyeon_cafe') return;
            const u = (typeof getResolvedFollowedUser === 'function') ? getResolvedFollowedUser(fid) : cachedUsers.find(cu => String(cu.id) === String(fid));
            const name = u ? u.name : `미식가 #${String(fid).slice(-4)}`;
            gourmetItems.push({
                id: String(fid),
                label: `👤 ${name}`,
                mobileLabel: `👤 ${name}`
            });
        });

        gourmetItems.push({ id: 'overlap', label: '🔥 겹치는 맛집', mobileLabel: '🔥 겹치는 맛집', isOverlap: true });

        if (gourmetGroup) {
            gourmetGroup.innerHTML = gourmetItems.map(item => `
                <button type="button" class="filter-btn ${item.isOverlap ? 'overlap-btn' : ''} ${(Array.isArray(currentFilters.gourmet) ? currentFilters.gourmet.includes(item.id) : currentFilters.gourmet === item.id) ? 'active' : ''}" 
                        data-filter="gourmet" data-value="${item.id}">
                    ${item.label}
                </button>
            `).join('');

            gourmetGroup.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', () => setGourmetFilter(btn.dataset.value));
            });
        }

        if (mobileGourmetScroll) {
            mobileGourmetScroll.innerHTML = gourmetItems.map(item => `
                <button type="button" class="mobile-gourmet-chip ${item.isOverlap ? 'chip-overlap' : ''} ${(Array.isArray(currentFilters.gourmet) ? currentFilters.gourmet.includes(item.id) : currentFilters.gourmet === item.id) ? 'active' : ''}" 
                        data-gourmet="${item.id}" onclick="handleMobileGourmetClick(this, '${item.id}')">
                    ${item.mobileLabel}
                </button>
            `).join('');
        }

        updateFilterButtonsUI();
    }
    window.refreshSidebarFilters = refreshSidebarFilters;

    let locationSearchQuery = '';

    function setupDynamicLocationFilter() {
        const locInput = document.getElementById('location-filter-input');
        const clearBtn = document.getElementById('btn-clear-loc-filter');
        const resetBtn = document.getElementById('btn-reset-location-filter');

        if (locInput) {
            locInput.addEventListener('input', (e) => {
                locationSearchQuery = e.target.value.trim().toLowerCase();
                if (clearBtn) clearBtn.style.display = locationSearchQuery ? 'block' : 'none';
                renderDynamicLocationFilters();
            });
        }

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                if (locInput) locInput.value = '';
                locationSearchQuery = '';
                clearBtn.style.display = 'none';
                renderDynamicLocationFilters();
            });
        }

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                clearLocationFilters();
            });
        }
    }

    function clearLocationFilters() {
        currentFilters.location_large = [];
        currentFilters.location_small = [];
        const locInput = document.getElementById('location-filter-input');
        if (locInput) locInput.value = '';
        locationSearchQuery = '';
        const clearBtn = document.getElementById('btn-clear-loc-filter');
        if (clearBtn) clearBtn.style.display = 'none';
        renderDynamicLocationFilters();
        updateLocationActiveBadges();
        listDisplayCount = 50;
        render();
    }
    window.clearLocationFilters = clearLocationFilters;

    function updateLocationActiveBadges() {
        const badgesContainer = document.getElementById('location-active-badges');
        const resetBtn = document.getElementById('btn-reset-location-filter');
        if (!badgesContainer) return;

        const hasLarge = currentFilters.location_large && currentFilters.location_large.length > 0;
        const hasSmall = currentFilters.location_small && currentFilters.location_small.length > 0;

        if (!hasLarge && !hasSmall) {
            badgesContainer.style.display = 'none';
            badgesContainer.innerHTML = '';
            if (resetBtn) resetBtn.style.display = 'none';
            return;
        }

        badgesContainer.style.display = 'flex';
        if (resetBtn) resetBtn.style.display = 'inline-block';
        badgesContainer.innerHTML = '';

        if (hasLarge) {
            currentFilters.location_large.forEach(loc => {
                const chip = document.createElement('span');
                chip.className = 'loc-active-chip';
                chip.innerHTML = `🏛️ ${loc} <span class="loc-active-chip-remove" title="해제">&times;</span>`;
                chip.querySelector('.loc-active-chip-remove').onclick = (e) => {
                    e.stopPropagation();
                    currentFilters.location_large = currentFilters.location_large.filter(l => l !== loc);
                    updateLocationActiveBadges();
                    renderDynamicLocationFilters();
                    listDisplayCount = 50;
                    render();
                };
                badgesContainer.appendChild(chip);
            });
        }

        if (hasSmall) {
            currentFilters.location_small.forEach(loc => {
                const chip = document.createElement('span');
                chip.className = 'loc-active-chip';
                chip.innerHTML = `📍 ${loc} <span class="loc-active-chip-remove" title="해제">&times;</span>`;
                chip.querySelector('.loc-active-chip-remove').onclick = (e) => {
                    e.stopPropagation();
                    currentFilters.location_small = currentFilters.location_small.filter(l => l !== loc);
                    updateLocationActiveBadges();
                    renderDynamicLocationFilters();
                    listDisplayCount = 50;
                    render();
                };
                badgesContainer.appendChild(chip);
            });
        }
    }

    function renderDynamicLocationFilters() {
        const matchedGroup = document.getElementById('location-matched-filters');
        if (!matchedGroup) return;

        matchedGroup.innerHTML = '';

        const unifiedData = getUnifiedRestaurantData();
        const largeCounts = {};
        const smallCounts = {};
        const smallToLarge = {};

        unifiedData.forEach(item => {
            if (item.location_large) {
                largeCounts[item.location_large] = (largeCounts[item.location_large] || 0) + 1;
            }
            if (item.location_small) {
                smallCounts[item.location_small] = (smallCounts[item.location_small] || 0) + 1;
                if (item.location_large) smallToLarge[item.location_small] = item.location_large;
            }
        });

        const isAllActive = (!currentFilters.location_large || currentFilters.location_large.length === 0) &&
                            (!currentFilters.location_small || currentFilters.location_small.length === 0);

        // "All" button
        const allBtn = document.createElement('button');
        allBtn.className = 'filter-btn' + (isAllActive ? ' active' : '');
        allBtn.dataset.value = 'all';
        allBtn.textContent = `전체 (${unifiedData.length})`;
        allBtn.onclick = () => {
            clearLocationFilters();
        };
        matchedGroup.appendChild(allBtn);

        if (!locationSearchQuery) {
            // When no query: show top 5 frequently visited regions as quick chips
            const topLarges = Object.entries(largeCounts)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5);

            topLarges.forEach(([loc, count]) => {
                const btn = document.createElement('button');
                const isActive = currentFilters.location_large && currentFilters.location_large.includes(loc);
                btn.className = 'filter-btn' + (isActive ? ' active' : '');
                btn.textContent = `${loc} (${count})`;
                btn.onclick = () => {
                    if (isActive) {
                        currentFilters.location_large = currentFilters.location_large.filter(l => l !== loc);
                    } else {
                        if (!Array.isArray(currentFilters.location_large)) currentFilters.location_large = [];
                        currentFilters.location_large.push(loc);
                    }
                    updateLocationActiveBadges();
                    renderDynamicLocationFilters();
                    listDisplayCount = 50;
                    render();
                };
                matchedGroup.appendChild(btn);
            });
        } else {
            const q = locationSearchQuery;
            const matchedLarge = Object.entries(largeCounts)
                .filter(([loc]) => loc.toLowerCase().includes(q))
                .sort((a, b) => b[1] - a[1]);

            const matchedSmall = Object.entries(smallCounts)
                .filter(([loc]) => loc.toLowerCase().includes(q))
                .sort((a, b) => b[1] - a[1]);

            if (matchedLarge.length === 0 && matchedSmall.length === 0) {
                const noMatch = document.createElement('div');
                noMatch.className = 'loc-match-hint';
                noMatch.textContent = `"${q}" 관련 지역이 없습니다.`;
                matchedGroup.appendChild(noMatch);
                return;
            }

            // Matched Large locations
            matchedLarge.forEach(([loc, count]) => {
                const btn = document.createElement('button');
                const isActive = currentFilters.location_large && currentFilters.location_large.includes(loc);
                btn.className = 'filter-btn' + (isActive ? ' active' : '');
                btn.textContent = `🏛️ ${loc} (${count})`;
                btn.onclick = () => {
                    if (isActive) {
                        currentFilters.location_large = currentFilters.location_large.filter(l => l !== loc);
                    } else {
                        if (!Array.isArray(currentFilters.location_large)) currentFilters.location_large = [];
                        currentFilters.location_large.push(loc);
                    }
                    updateLocationActiveBadges();
                    renderDynamicLocationFilters();
                    listDisplayCount = 50;
                    render();
                };
                matchedGroup.appendChild(btn);
            });

            // Matched Small locations
            matchedSmall.forEach(([loc, count]) => {
                const btn = document.createElement('button');
                const isActive = currentFilters.location_small && currentFilters.location_small.includes(loc);
                btn.className = 'filter-btn' + (isActive ? ' active' : '');
                const parent = smallToLarge[loc] ? `${smallToLarge[loc]} · ` : '';
                btn.textContent = `📍 ${parent}${loc} (${count})`;
                btn.onclick = () => {
                    if (isActive) {
                        currentFilters.location_small = currentFilters.location_small.filter(l => l !== loc);
                    } else {
                        if (!Array.isArray(currentFilters.location_small)) currentFilters.location_small = [];
                        currentFilters.location_small.push(loc);
                    }
                    updateLocationActiveBadges();
                    renderDynamicLocationFilters();
                    listDisplayCount = 50;
                    render();
                };
                matchedGroup.appendChild(btn);
            });
        }
    }

    function renderLocationButtons() {
        renderDynamicLocationFilters();
        updateLocationActiveBadges();
    }

    function updateFilterButtonsUI() {
        ['category', 'rate', 'location_large', 'location_small'].forEach(type => {
            let groupEl = null;
            if (type === 'category') groupEl = document.getElementById('category-filters');
            else if (type === 'rate') groupEl = document.getElementById('rate-filters');
            else if (type === 'location_large') groupEl = document.getElementById('location-matched-filters');
            else if (type === 'location_small') groupEl = document.getElementById('location-matched-filters');

            if (!groupEl) return;

            const filterValues = currentFilters[type] || [];
            const allBtn = groupEl.querySelector('.filter-btn[data-value="all"]');

            if (filterValues.length === 0 && (!currentFilters.location_large || currentFilters.location_large.length === 0) && (!currentFilters.location_small || currentFilters.location_small.length === 0)) {
                if (allBtn) allBtn.classList.add('active');
            } else if (type === 'category' || type === 'rate') {
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
            }
        });
    }
    window.updateFilterButtonsUI = updateFilterButtonsUI;

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
            resultsList.style.display = 'none';
            resultsList.innerHTML = '';
            return;
        }

        // Filter saved places
        const masterData = getUnifiedRestaurantData();
        let matched = masterData.filter(item => {
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
                if (status === kakao.maps.services.Status.OK && data && data.length > 0) {
                    // Global search for visited: find matching place via Place ID or Address
                    const targetPlace = data.find(d => isSavedRestaurantMatch(item, d)) || data[0];
                    renderSingleMarker(item, targetPlace, true, bounds, true);
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
            if (typeof syncRegionUI === 'function') syncRegionUI();
            if (typeof updatePickerSelectedBanner === 'function') updatePickerSelectedBanner();
        }
        if (type === 'category') {
            syncMobileCatChips();
        }

        listDisplayCount = 50;
        render();
    }

    function syncMobileCatChips() {
        const chipsBar = document.getElementById('mobile-cat-chips-bar');
        if (!chipsBar) return;
        const cats = currentFilters['category'] || [];
        const chipBtns = chipsBar.querySelectorAll('.mobile-cat-chip');
        chipBtns.forEach(btn => {
            const val = btn.dataset.cat;
            if (cats.length === 0) {
                btn.classList.toggle('active', val === 'all');
            } else if (cats.length === 1) {
                btn.classList.toggle('active', cats[0] === val);
            } else {
                btn.classList.toggle('active', cats.includes(val));
            }
        });
    }
    window.syncMobileCatChips = syncMobileCatChips;

    function handleMobileCatClick(btn, cat) {
        if (!currentFilters['category']) currentFilters['category'] = [];

        if (cat === 'all') {
            currentFilters['category'] = [];
        } else {
            const idx = currentFilters['category'].indexOf(cat);
            if (idx > -1) {
                currentFilters['category'].splice(idx, 1);
            } else {
                currentFilters['category'].push(cat);
            }
        }

        if (categoryFilterGroup) {
            categoryFilterGroup.querySelectorAll('.filter-btn').forEach(b => {
                const val = b.dataset.value;
                if (currentFilters['category'].length === 0) {
                    b.classList.toggle('active', val === 'all');
                } else {
                    b.classList.toggle('active', currentFilters['category'].includes(val));
                }
            });
        }

        syncMobileCatChips();
        listDisplayCount = 50;
        render();
    }
    window.handleMobileCatClick = handleMobileCatClick;

    function toggleMobileSidebar(force) {
        const sidebar = document.getElementById('main-sidebar') || document.querySelector('.sidebar');
        const backdrop = document.getElementById('sidebar-backdrop');
        if (!sidebar) return;
        const isOpen = typeof force === 'boolean' ? sidebar.classList.toggle('mobile-open', force) : sidebar.classList.toggle('mobile-open');
        if (backdrop) backdrop.classList.toggle('show', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    window.toggleMobileSidebar = toggleMobileSidebar;

    // ── Full Regions Database by Province (mobile_list_preview.html 표준 데이터) ──
    const ALL_REGIONS_DATA = {
        '서울': [
            { name: '종로구', desc: '광화문, 익선동, 서촌' },
            { name: '중구', desc: '을지로, 명동, 동대문' },
            { name: '용산구', desc: '이태원, 한남동, 삼각지' },
            { name: '성동구', desc: '성수동, 서울숲, 옥수' },
            { name: '마포구', desc: '홍대, 연남동, 망원동' },
            { name: '강남구', desc: '신사동, 압구정, 역삼' },
            { name: '서초구', desc: '강남역, 반포, 양재' },
            { name: '송파구', desc: '잠실, 방이동, 송리단길' },
            { name: '영등포구', desc: '여의도, 문래동, 영등포' },
            { name: '광진구', desc: '건대, 뚝섬, 구의' },
            { name: '서대문구', desc: '신촌, 이대, 연희동' },
            { name: '동대문구', desc: '청량리, 제기동' },
            { name: '은평구', desc: '연신내, 불광' },
            { name: '성북구', desc: '성북동, 안암동' },
            { name: '노원구', desc: '노원역, 상계' },
            { name: '강동구', desc: '천호동, 성내동' },
            { name: '관악구', desc: '샤로수길, 신림' },
            { name: '동작구', desc: '노량진, 사당' },
            { name: '양천구', desc: '목동' },
            { name: '강서구', desc: '마곡, 발산' }
        ],
        '경기/인천': [
            { name: '성남시', desc: '분당, 판교, 정자동' },
            { name: '수원시', desc: '행궁동, 인계동, 광교' },
            { name: '고양시', desc: '일산, 밤리단길' },
            { name: '용인시', desc: '수지, 보정동카페거리' },
            { name: '부천시', desc: '신중동, 상동' },
            { name: '안양시', desc: '평촌, 범계, 안양일번가' },
            { name: '인천 연수구', desc: '송도국제도시' },
            { name: '인천 부평구', desc: '부평테마거리' },
            { name: '하남시', desc: '미사경정공원' },
            { name: '남양주시', desc: '다산, 별내' }
        ],
        '부산/경상': [
            { name: '부산 해운대구', desc: '해리단길, 달맞이길' },
            { name: '부산 부산진구', desc: '서면, 전포카페거리' },
            { name: '부산 수영구', desc: '광안리해변' },
            { name: '부산 중구', desc: '남포동, 자갈치' },
            { name: '대구 중구', desc: '동성로, 교동' },
            { name: '대구 수성구', desc: '들안길, 범어동' },
            { name: '경주시', desc: '황리단길, 첨성대' },
            { name: '포항시', desc: '영일대, 구룡포' }
        ],
        '제주/기타': [
            { name: '제주 제주시', desc: '애월, 조천, 제주시내' },
            { name: '제주 서귀포시', desc: '중문, 성산, 올레시장' },
            { name: '강원 강릉시', desc: '안목해변, 초당순두부' },
            { name: '강원 속초시', desc: '중앙시장, 대포항' },
            { name: '강원 춘천시', desc: '닭갈비골목, 명동' },
            { name: '대전 유성구', desc: '봉명동, 궁동' },
            { name: '전남 여수시', desc: '돌산, 이순신광장' }
        ]
    };

    let currentPickerProvince = 'ALL';
    let pickerSearchQuery = '';

    function toggleAllRegionsSheet(open) {
        const sheet = document.getElementById('all-regions-sheet');
        if (!sheet) return;
        const isOpen = typeof open === 'boolean' ? open : !sheet.classList.contains('show');
        sheet.classList.toggle('show', isOpen);
        sheet.classList.toggle('open', isOpen);
        if (isOpen) {
            updatePickerSelectedBanner();
            renderPickerRegions();
        }
    }
    window.toggleAllRegionsSheet = toggleAllRegionsSheet;

    function updatePickerSelectedBanner() {
        const txt = document.getElementById('picker-selected-text');
        if (!txt) return;
        const regions = currentFilters.location_large || [];
        if (regions.length === 0) {
            txt.textContent = '전체 지역';
        } else if (regions.length === 1) {
            txt.textContent = regions[0];
        } else {
            txt.textContent = `${regions.join(', ')} (${regions.length}곳)`;
        }
    }
    window.updatePickerSelectedBanner = updatePickerSelectedBanner;

    function handlePickerSearch(val) {
        pickerSearchQuery = (val || '').trim().toLowerCase();
        renderPickerRegions();
    }
    window.handlePickerSearch = handlePickerSearch;

    function clearPickerSearch() {
        const input = document.getElementById('picker-search-input');
        if (input) input.value = '';
        pickerSearchQuery = '';
        renderPickerRegions();
    }
    window.clearPickerSearch = clearPickerSearch;

    function filterPickerProvince(prov, btn) {
        currentPickerProvince = prov;
        document.querySelectorAll('.prov-tab').forEach(b => {
            b.classList.remove('active');
        });
        if (btn) btn.classList.add('active');
        renderPickerRegions();
    }
    window.filterPickerProvince = filterPickerProvince;

    function renderPickerRegions() {
        const container = document.getElementById('picker-regions-container');
        if (!container) return;
        container.innerHTML = '';

        let categoriesToShow = Object.keys(ALL_REGIONS_DATA);
        if (currentPickerProvince !== 'ALL') {
            categoriesToShow = [currentPickerProvince];
        }

        let totalMatches = 0;
        const selectedRegions = currentFilters.location_large || [];

        categoriesToShow.forEach(provName => {
            let regions = ALL_REGIONS_DATA[provName] || [];
            if (pickerSearchQuery) {
                regions = regions.filter(r => 
                    r.name.toLowerCase().includes(pickerSearchQuery) || 
                    (r.desc && r.desc.toLowerCase().includes(pickerSearchQuery))
                );
            }

            if (regions.length === 0) return;
            totalMatches += regions.length;

            const section = document.createElement('div');

            const title = document.createElement('div');
            title.className = "region-picker-group-title";
            title.innerHTML = `<span>📍</span> <span>${provName}</span> <span style="font-size:0.68rem; color:#94A3B8; font-weight:normal;">(${regions.length})</span>`;
            section.appendChild(title);

            const grid = document.createElement('div');
            grid.className = "region-picker-grid";

            regions.forEach(r => {
                const isSelected = selectedRegions.includes(r.name);
                const card = document.createElement('div');
                card.className = `region-picker-card ${isSelected ? 'active' : ''}`;
                card.onclick = () => {
                    pickRegionAndClose(r.name);
                };

                card.innerHTML = `
                    <div class="region-picker-card-top">
                        <div class="region-picker-card-name">${r.name}</div>
                        ${isSelected ? '<span class="region-picker-card-check">✓</span>' : ''}
                    </div>
                    <div class="region-picker-card-desc">${r.desc}</div>
                `;
                grid.appendChild(card);
            });

            section.appendChild(grid);
            container.appendChild(section);
        });

        if (totalMatches === 0) {
            container.innerHTML = `
                <div style="padding: 40px 16px; text-align: center; color: #94A3B8; font-size: 0.8rem;">
                    <span style="font-size: 1.8rem; display: block; margin-bottom: 8px;">🔍</span>
                    "<strong>${pickerSearchQuery}</strong>"에 해당하는 지역이 없습니다.<br>
                    <span style="font-size: 0.72rem; color: #94A3B8; margin-top: 4px; display: block;">구 또는 동 이름을 검색해보세요.</span>
                </div>
            `;
        }
    }
    window.renderPickerRegions = renderPickerRegions;

    function pickRegionAndClose(regVal) {
        if (!currentFilters.location_large) currentFilters.location_large = [];
        if (regVal === 'all') {
            currentFilters.location_large = [];
        } else {
            const idx = currentFilters.location_large.indexOf(regVal);
            if (idx > -1) {
                currentFilters.location_large.splice(idx, 1);
            } else {
                currentFilters.location_large.push(regVal);
            }
        }
        currentFilters.location_small = [];
        updatePickerSelectedBanner();
        renderPickerRegions();
        syncRegionUI();
        listDisplayCount = 50;
        render();
    }
    window.pickRegionAndClose = pickRegionAndClose;

    function handleRegionQuickClick(regVal, btn) {
        if (!currentFilters.location_large) currentFilters.location_large = [];
        if (regVal === 'all') {
            currentFilters.location_large = [];
        } else {
            const idx = currentFilters.location_large.indexOf(regVal);
            if (idx > -1) {
                currentFilters.location_large.splice(idx, 1);
            } else {
                currentFilters.location_large.push(regVal);
            }
        }
        currentFilters.location_small = [];
        syncRegionUI();
        updatePickerSelectedBanner();
        listDisplayCount = 50;
        render();
    }
    window.handleRegionQuickClick = handleRegionQuickClick;

    function syncRegionUI() {
        const badge = document.getElementById('active-region-badge');
        const searchDisplay = document.getElementById('sheet-region-search-display');
        const regions = currentFilters.location_large || [];
        const isAll = regions.length === 0;

        if (badge) {
            if (isAll) {
                badge.textContent = '전체';
                badge.className = "active-region-badge";
            } else {
                badge.textContent = regions.length === 1 
                    ? regions[0] 
                    : `${regions[0]} 외 ${regions.length - 1}곳`;
                badge.className = "active-region-badge has-selection";
            }
        }

        if (searchDisplay) {
            searchDisplay.value = isAll ? '' : `📍 ${regions.join(', ')}`;
        }

        // Sync Quick Chips
        document.querySelectorAll('.reg-chip').forEach(b => {
            const rVal = b.dataset.region;
            if (rVal === 'all') {
                b.classList.toggle('active', isAll);
            } else {
                const match = regions.some(r => rVal.includes(r) || r.includes(rVal));
                b.classList.toggle('active', match);
            }
        });

        // Keep desktop location filter in sync
        if (typeof updateLocationActiveBadges === 'function') updateLocationActiveBadges();
        if (typeof renderDynamicLocationFilters === 'function') renderDynamicLocationFilters();
    }
    window.syncRegionUI = syncRegionUI;

    function applyFiltersFromSheet() {
        toggleMobileSidebar(false);
        listDisplayCount = 50;
        render();
        if (typeof showDiaryToast === 'function') {
            showDiaryToast('필터 조건이 적용되었습니다.');
        }
    }
    window.applyFiltersFromSheet = applyFiltersFromSheet;

    function updateSmallLocationFilters(largeValuesArray) {
        if (locationSmallFilterGroup) {
            locationSmallFilterGroup.innerHTML = '';
            
            // Re-create the "All" button properly to keep event listener
            const allBtn = document.createElement('button');
            allBtn.className = 'filter-btn active';
            allBtn.dataset.filter = 'location_small';
            allBtn.dataset.value = 'all';
            allBtn.textContent = '전체';
            allBtn.addEventListener('click', () => handleFilterClick('location_small', 'all', allBtn));
            locationSmallFilterGroup.appendChild(allBtn);
        }
        
        if (!Array.isArray(largeValuesArray) || largeValuesArray.length === 0) {
            if (smallLocSection) smallLocSection.style.display = 'none';
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
            if (smallLocSection) smallLocSection.style.display = 'block';
            if (locationSmallFilterGroup) {
                Array.from(smallLocs).sort().forEach(loc => {
                    const btn = createFilterBtn('location_small', loc);
                    if (currentFilters.location_small.includes(loc)) btn.classList.add('active');
                    locationSmallFilterGroup.appendChild(btn);
                });
            }
        } else {
            if (smallLocSection) smallLocSection.style.display = 'none';
        }
    }

    function getUnifiedDiaryEntries() {
        const isOwner = isOwnerUser();
        const diaryStorageKey = typeof getDiaryStorageKey === 'function' ? getDiaryStorageKey() : (isOwner ? 'spoonmap_diary' : 'spoonmap_user_diary');
        const localEntries = JSON.parse(localStorage.getItem(diaryStorageKey) || '[]');
        const deletedKey = 'spoonmap_deleted_diary';
        const deletedIds = new Set(JSON.parse(localStorage.getItem(deletedKey) || '[]'));
        const deletedRestKey = 'spoonmap_deleted_restaurants';
        const deletedRestaurants = new Set(JSON.parse(localStorage.getItem(deletedRestKey) || '[]'));

        if (!isOwner || typeof diaryData === 'undefined' || !Array.isArray(diaryData)) {
            return localEntries
                .filter(e => e && e.id && !deletedIds.has(String(e.id)) && (!e.name || !deletedRestaurants.has(e.name.trim().toLowerCase())))
                .map(e => ({ ...e, source: 'local' }));
        }

        const localById = new Map();
        const localByKey = new Map();
        localEntries.forEach(entry => {
            if (!entry) return;
            if (entry.id) localById.set(String(entry.id), entry);
            if (entry.originalCsvId) localById.set(String(entry.originalCsvId), entry);
            if (entry.name && entry.date) {
                const normName = entry.name.trim().toLowerCase();
                localByKey.set(`${normName}|${entry.date}`, entry);
                if (entry.originalDate) {
                    localByKey.set(`${normName}|${entry.originalDate}`, entry);
                }
            }
        });

        const unified = [];

        // Pass A: CSV visits (suppress if deleted or overridden by local edit)
        diaryData.forEach((csvEntry, idx) => {
            if (!csvEntry || !csvEntry.name || !csvEntry.date) return;
            const entryId = csvEntry.id || `csv-${idx}-${csvEntry.date}`;
            const shortId = `csv-${idx}`;
            const normName = csvEntry.name.trim().toLowerCase();
            const compKey = `${normName}|${csvEntry.date}`;

            if (deletedRestaurants.has(normName)) return;

            if (deletedIds.has(entryId) || deletedIds.has(shortId) || deletedIds.has(compKey) || (csvEntry.id && deletedIds.has(String(csvEntry.id)))) {
                return;
            }

            const hasOverride = localById.has(entryId) || 
                                localById.has(shortId) || 
                                (csvEntry.id && localById.has(String(csvEntry.id))) || 
                                localByKey.has(compKey);
            if (hasOverride) return;

            unified.push({ ...csvEntry, id: entryId, source: 'csv' });
        });

        // Pass B: Local visits (deduplicate identical restaurant + date, keeping newest)
        const seenLocalKeys = new Set();
        const reversedLocal = [...localEntries].reverse();
        const uniqueLocal = [];
        reversedLocal.forEach(entry => {
            if (!entry || !entry.name) return;
            const key = entry.date ? `${entry.name.trim().toLowerCase()}|${entry.date}` : `${entry.name.trim().toLowerCase()}|nodate`;
            if (seenLocalKeys.has(key)) return;
            seenLocalKeys.add(key);
            uniqueLocal.unshift(entry);
        });

        uniqueLocal.forEach(entry => {
            if (entry.id && deletedIds.has(String(entry.id))) return;
            const normName = entry.name ? entry.name.trim().toLowerCase() : '';
            if (deletedRestaurants.has(normName)) return;
            const key = entry.date ? `${normName}|${entry.date}` : `${normName}|nodate`;
            if (deletedIds.has(key)) return;
            unified.push({ ...entry, source: 'local' });
        });

        return unified;
    }
    window.getUnifiedDiaryEntries = getUnifiedDiaryEntries;

    function getUnifiedRestaurantData() {
        if (window.isSharedMapMode && window.sharedMapData && Array.isArray(window.sharedMapData.restaurants)) {
            return window.sharedMapData.restaurants;
        }

        const isOwner = isOwnerUser();
        const mapByName = new Map();
        const visitsByName = new Map();
        const datesByName = new Map();
        const deletedRestKey = 'spoonmap_deleted_restaurants';
        const deletedRestaurants = new Set(JSON.parse(localStorage.getItem(deletedRestKey) || '[]'));

        // Pass 1: Add base master restaurantData ONLY if Owner!
        if (isOwner && typeof restaurantData !== 'undefined' && Array.isArray(restaurantData)) {
            restaurantData.forEach(r => {
                const key = r.name.trim().toLowerCase();
                if (deletedRestaurants.has(key)) return;
                mapByName.set(key, { ...r, menu: [...(r.menu || [])] });
                if (r.date) {
                    datesByName.set(key, r.date);
                }
            });
        }

        // Pass 2 & 3: Process unified diary entries (CSV + Local, no duplicates)
        const unifiedEntries = getUnifiedDiaryEntries();
        unifiedEntries.forEach(item => {
            if (!item.name) return;
            const key = item.name.trim().toLowerCase();
            if (deletedRestaurants.has(key)) return;
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

            const stdLoc = (typeof standardizeLocation === 'function')
                ? standardizeLocation(item.location_large, item.location_small, item.name)
                : { large: item.location_large, small: item.location_small };
            const locLarge = stdLoc.large || item.location_large;
            const locSmall = stdLoc.small || item.location_small;

            if (existing) {
                if (item.source === 'local') {
                    if (item.category) existing.category = item.category;
                    if (item.rate) existing.rate = item.rate;
                    if (menuArray.length > 0) existing.menu = menuArray;
                    if (locLarge) existing.location_large = locLarge;
                    const validForExisting = (typeof KOREA_REGIONS !== 'undefined' && KOREA_REGIONS[existing.location_large]) 
                        ? KOREA_REGIONS[existing.location_large] : [];
                    if (validForExisting.includes(locSmall) || !existing.location_small) {
                        existing.location_small = locSmall;
                    }
                    if (item.map_url) existing.map_url = item.map_url;
                    if (item.kakao_id) existing.kakao_id = item.kakao_id;
                    if (item.road_address) existing.road_address = item.road_address;
                    if (item.x) existing.x = item.x;
                    if (item.y) existing.y = item.y;
                }
            } else {
                mapByName.set(key, {
                    name: item.name,
                    category: item.category || '기타',
                    rate: item.rate || '🥄',
                    menu: menuArray,
                    location_large: locLarge || '기타',
                    location_small: locSmall || '',
                    map_url: item.map_url || `https://map.kakao.com/link/search/${encodeURIComponent(item.name)}`,
                    kakao_id: item.kakao_id || '',
                    road_address: item.road_address || '',
                    x: item.x || '',
                    y: item.y || '',
                    visit_count: 1
                });
            }
        });

        // Pass 3.5: For general users, also include wishlisted places in their restaurant map!
        if (!isOwner && typeof getUserWishlist === 'function') {
            const wishlist = getUserWishlist();
            wishlist.forEach(wItem => {
                if (!wItem.name) return;
                const key = wItem.name.trim().toLowerCase();
                if (!mapByName.has(key)) {
                    mapByName.set(key, {
                        name: wItem.name,
                        category: wItem.category || '음식점',
                        rate: '',
                        menu: [],
                        location_large: wItem.location || '기타',
                        location_small: wItem.location || '',
                        map_url: wItem.map_url || `https://map.kakao.com/link/search/${encodeURIComponent(wItem.name)}`,
                        kakao_id: wItem.kakao_id || '',
                        road_address: wItem.road_address || '',
                        x: wItem.x || '',
                        y: wItem.y || '',
                        visit_count: 0,
                        isWishlist: true
                    });
                }
            });
        }

        // Pass 3.6: Apply overrides
        const overridesKey = isOwner ? 'spoonmap_restaurant_overrides' : (typeof getUserOverridesStorageKey === 'function' ? getUserOverridesStorageKey() : 'spoonmap_restaurant_overrides');
        const restaurantOverrides = JSON.parse(localStorage.getItem(overridesKey) || '{}');
        Object.keys(restaurantOverrides).forEach(rawKey => {
            const key = rawKey.trim().toLowerCase();
            if (deletedRestaurants.has(key)) return;
            const ov = restaurantOverrides[rawKey];
            if (!ov) return;
            const existing = mapByName.get(key);
            const menuArray = Array.isArray(ov.menu) 
                ? ov.menu 
                : (typeof ov.menu === 'string' ? ov.menu.split(',').map(m => m.trim()).filter(Boolean) : []);
            
            const stdLoc = (typeof standardizeLocation === 'function')
                ? standardizeLocation(ov.location_large, ov.location_small, ov.name || rawKey)
                : { large: ov.location_large, small: ov.location_small };
            const locLarge = stdLoc.large || ov.location_large;
            const locSmall = stdLoc.small || ov.location_small;

            if (existing) {
                if (ov.category) existing.category = ov.category;
                if (ov.rate) existing.rate = ov.rate;
                if (menuArray.length > 0) existing.menu = menuArray;
                if (locLarge) existing.location_large = locLarge;
                const validForExisting = (typeof KOREA_REGIONS !== 'undefined' && KOREA_REGIONS[existing.location_large]) 
                    ? KOREA_REGIONS[existing.location_large] : [];
                if (validForExisting.includes(locSmall) || !existing.location_small) {
                    existing.location_small = locSmall;
                }
                if (ov.map_url) existing.map_url = ov.map_url;
                if (ov.kakao_id) existing.kakao_id = ov.kakao_id;
                if (ov.road_address) existing.road_address = ov.road_address;
                if (ov.x) existing.x = ov.x;
                if (ov.y) existing.y = ov.y;
            } else if (isOwner) {
                mapByName.set(key, {
                    name: ov.name || rawKey,
                    category: ov.category || '기타',
                    rate: ov.rate || '🥄',
                    menu: menuArray,
                    location_large: locLarge || '기타',
                    location_small: locSmall || '',
                    map_url: ov.map_url || `https://map.kakao.com/link/search/${encodeURIComponent(ov.name || rawKey)}`,
                    kakao_id: ov.kakao_id || '',
                    road_address: ov.road_address || '',
                    x: ov.x || '',
                    y: ov.y || '',
                    visit_count: visitsByName.get(key) || 1,
                    date: datesByName.get(key) || ''
                });
            }
        });

        // Pass 4: Finalize merged list with accurate visit_count and latest date
        const unified = [];
        mapByName.forEach((item, key) => {
            if (deletedRestaurants.has(key)) return;
            const count = visitsByName.get(key) || item.visit_count || (item.isWishlist ? 0 : 1);
            const latestDate = datesByName.get(key) || item.date || '';
            const std = (typeof standardizeLocation === 'function') 
                ? standardizeLocation(item.location_large, item.location_small, item.name)
                : { large: item.location_large, small: item.location_small };
            unified.push({
                ...item,
                isOverlapping: false,
                overlappingUsers: undefined,
                sourceUserId: 'me',
                sourceUserName: '나',
                location_large: std.large || item.location_large,
                location_small: std.small || item.location_small,
                visit_count: count,
                date: latestDate
            });
        });

        // ── Friends & Gourmet Data Integration ──
        const mockList = (typeof window !== 'undefined' && window.MASTER_MOCK_GOURMETS) 
            ? window.MASTER_MOCK_GOURMETS 
            : ((typeof MASTER_MOCK_GOURMETS !== 'undefined') ? MASTER_MOCK_GOURMETS : []);

        const followingFriends = (typeof getFollowingFriendsAsOverlay === 'function') ? getFollowingFriendsAsOverlay() : [];

        // Build normalized name map for current user's own restaurants to detect overlaps
        const masterNormMap = new Map();
        unified.forEach(item => {
            const n = (typeof normalizePlaceName === 'function') ? normalizePlaceName(item.name) : item.name.replace(/\s+/g, '').toLowerCase();
            masterNormMap.set(n, item);
        });

        // Collect all followed friends' restaurant lists with author attribution
        const friendsRestaurantsMap = new Map();

        // Add Mock Gourmets if Owner
        if (typeof isOwnerUser === 'function' && isOwnerUser()) {
            mockList.forEach(m => {
                if (Array.isArray(m.restaurants)) {
                    friendsRestaurantsMap.set(m.id, {
                        id: m.id,
                        name: m.name,
                        handle: m.handle,
                        restaurants: m.restaurants
                    });
                }
            });
        }

        // Add real followed friends from overlay/cache
        followingFriends.forEach(ff => {
            const fid = String(ff.realUserId || ff.id);
            const cleanFid = fid.replace(/^following_/, '');
            const pureFid = cleanFid.replace(/^user_/, '');
            const nId = normFriendId(pureFid);
            let rests = (Array.isArray(ff.restaurants) && ff.restaurants.length > 0)
                ? ff.restaurants
                : (window.followingRestaurantsCache?.get(fid) || 
                   window.followingRestaurantsCache?.get(cleanFid) || 
                   window.followingRestaurantsCache?.get(pureFid) ||
                   window.followingRestaurantsCache?.get(nId) ||
                   window.followingRestaurantsCache?.get(`user_${pureFid}`) ||
                   window.followingRestaurantsCache?.get(`following_${cleanFid}`) || []);

            // If this friend is Master, ensure Master's restaurants are attached
            if ((!rests || rests.length === 0) && (nId === '5044584236' || cleanFid === 'master' || pureFid === 'master' || ff.id === 'master' || ff.name === '박준호' || ff.isMaster)) {
                rests = (typeof getMasterRestaurantList === 'function') ? getMasterRestaurantList() : [];
            }

            // If currentViewingGourmet matches this user, attach restaurants
            if ((!rests || rests.length === 0) && window.currentViewingGourmet && 
                (normFriendId(window.currentViewingGourmet.id) === nId) &&
                Array.isArray(window.currentViewingGourmet.restaurants)) {
                rests = window.currentViewingGourmet.restaurants;
            }

            const fEntry = {
                id: nId,
                name: ff.name,
                handle: ff.nickname || '',
                restaurants: rests
            };
            friendsRestaurantsMap.set(fid, fEntry);
            friendsRestaurantsMap.set(cleanFid, fEntry);
            friendsRestaurantsMap.set(pureFid, fEntry);
            friendsRestaurantsMap.set(nId, fEntry);
            friendsRestaurantsMap.set(`user_${pureFid}`, fEntry);
            friendsRestaurantsMap.set(`following_${cleanFid}`, fEntry);
            friendsRestaurantsMap.set(`following_${pureFid}`, fEntry);
            friendsRestaurantsMap.set(`following_${nId}`, fEntry);
        });

        const currentU = (typeof getCurrentUser === 'function') ? getCurrentUser() : null;
        const myNormId = currentU && currentU.id ? normFriendId(currentU.id) : null;
        const seenFEntries = new Set();

        // Cross-check overlaps between current user (unified) and friends
        friendsRestaurantsMap.forEach(fInfo => {
            if (!fInfo || seenFEntries.has(fInfo)) return;
            seenFEntries.add(fInfo);
            const isSelfFriend = myNormId && normFriendId(fInfo.id) === myNormId;
            (fInfo.restaurants || []).forEach(fItem => {
                if (!fItem || !fItem.name) return;
                const fNorm = (typeof normalizePlaceName === 'function') ? normalizePlaceName(fItem.name) : fItem.name.replace(/\s+/g, '').toLowerCase();
                const mMatch = !isSelfFriend ? masterNormMap.get(fNorm) : null;
                const isMatch = mMatch && (typeof isSameRestaurant === 'function' ? isSameRestaurant(mMatch, fItem) : true);
                if (isMatch) {
                    mMatch.isOverlapping = true;
                    if (!mMatch.overlappingUsers) mMatch.overlappingUsers = ['나'];
                    if (!mMatch.overlappingUsers.includes(fInfo.name)) mMatch.overlappingUsers.push(fInfo.name);

                    fItem.isOverlapping = true;
                    fItem.overlappingUsers = ['나', fInfo.name];
                } else {
                    fItem.isOverlapping = false;
                    delete fItem.overlappingUsers;
                }
                fItem.sourceUserId = fInfo.id;
                fItem.sourceUserName = fInfo.name;
            });
        });

        let activeGourmetList = [];
        if (Array.isArray(currentFilters && currentFilters.gourmet)) {
            activeGourmetList = currentFilters.gourmet;
        } else if (currentFilters && currentFilters.gourmet) {
            activeGourmetList = [String(currentFilters.gourmet)];
        } else {
            activeGourmetList = ['me'];
        }

        // Fast path: If specifically viewing a single gourmet with attached restaurants
        if (window.currentViewingGourmet && Array.isArray(window.currentViewingGourmet.restaurants) && window.currentViewingGourmet.restaurants.length > 0) {
            if (activeGourmetList.length === 1 && !activeGourmetList.includes('me') && !activeGourmetList.includes('all') && !activeGourmetList.includes('overlap')) {
                const targetGid = normFriendId(activeGourmetList[0]);
                const viewGid = normFriendId(window.currentViewingGourmet.id);
                if (targetGid === viewGid || String(activeGourmetList[0]) === String(window.currentViewingGourmet.id)) {
                    const vName = window.currentViewingGourmet.name || '미식가';
                    const isSelfView = myNormId && viewGid === myNormId;
                    window.currentViewingGourmet.restaurants.forEach(fItem => {
                        if (!fItem || !fItem.name) return;
                        const fNorm = (typeof normalizePlaceName === 'function') ? normalizePlaceName(fItem.name) : fItem.name.replace(/\s+/g, '').toLowerCase();
                        const mMatch = !isSelfView ? masterNormMap.get(fNorm) : null;
                        const isMatch = mMatch && (typeof isSameRestaurant === 'function' ? isSameRestaurant(mMatch, fItem) : true);
                        if (isMatch) {
                            fItem.isOverlapping = true;
                            fItem.overlappingUsers = ['나', vName];
                        } else {
                            fItem.isOverlapping = false;
                            delete fItem.overlappingUsers;
                        }
                        fItem.sourceUserId = window.currentViewingGourmet.id;
                        fItem.sourceUserName = vName;
                    });
                    return window.currentViewingGourmet.restaurants;
                }
            }
        }

        // 1. Overlapping restaurants only
        if (activeGourmetList.includes('overlap')) {
            return unified.filter(item => item.isOverlapping);
        }

        // 2. All - Me + All friends
        if (activeGourmetList.includes('all')) {
            const combined = [...unified];
            friendsRestaurantsMap.forEach(fInfo => {
                (fInfo.restaurants || []).forEach(fItem => {
                    const fNorm = (typeof normalizePlaceName === 'function') ? normalizePlaceName(fItem.name) : fItem.name.replace(/\s+/g, '').toLowerCase();
                    if (!masterNormMap.has(fNorm)) {
                        combined.push(fItem);
                    }
                });
            });
            return combined;
        }

        // 3. Multi-selection of users - Me and/or friends
        const selectedGourmetSet = new Set(activeGourmetList);
        const result = [];
        const includedNorms = new Set();

        if (selectedGourmetSet.has('me')) {
            unified.forEach(item => {
                const norm = (typeof normalizePlaceName === 'function') ? normalizePlaceName(item.name) : item.name.replace(/\s+/g, '').toLowerCase();
                if (!item.sourceUserName) item.sourceUserName = '나';
                result.push(item);
                includedNorms.add(norm);
            });
        }

        selectedGourmetSet.forEach(gid => {
            if (gid === 'me') return;
            const cleanGid = String(gid).replace(/^following_/, '');
            const pureGid = cleanGid.replace(/^user_/, '');
            const fInfo = friendsRestaurantsMap.get(String(gid)) || 
                          friendsRestaurantsMap.get(cleanGid) || 
                          friendsRestaurantsMap.get(pureGid) ||
                          friendsRestaurantsMap.get(`user_${pureGid}`) ||
                          friendsRestaurantsMap.get(`following_${cleanGid}`) ||
                          friendsRestaurantsMap.get(`following_${pureGid}`);
            if (fInfo && Array.isArray(fInfo.restaurants)) {
                fInfo.restaurants.forEach(fItem => {
                    const norm = (typeof normalizePlaceName === 'function') ? normalizePlaceName(fItem.name) : fItem.name.replace(/\s+/g, '').toLowerCase();
                    if (!includedNorms.has(norm)) {
                        result.push(fItem);
                        includedNorms.add(norm);
                    }
                });
            }
        });

        return result;
    }

    window.getUnifiedRestaurantData = getUnifiedRestaurantData;


    // ── Gourmet Filter Controller - 내 맛집 · 친구 · 전체 · 겹치는 맛집 ──
    function setGourmetFilter(value, isReplace = false) {
        if (!currentFilters) return;
        if (!Array.isArray(currentFilters.gourmet)) {
            currentFilters.gourmet = currentFilters.gourmet ? [String(currentFilters.gourmet)] : ['me'];
        }

        const v = String(value || 'me');

        if (isReplace || v === 'all' || v === 'overlap') {
            currentFilters.gourmet = [v];
        } else {
            // If currently in all or overlap mode, replace with the clicked user
            if (currentFilters.gourmet.includes('all') || currentFilters.gourmet.includes('overlap')) {
                currentFilters.gourmet = [v];
            } else {
                const idx = currentFilters.gourmet.indexOf(v);
                if (idx > -1) {
                    if (currentFilters.gourmet.length > 1) {
                        currentFilters.gourmet.splice(idx, 1);
                    } else {
                        currentFilters.gourmet = ['me'];
                    }
                } else {
                    currentFilters.gourmet.push(v);
                }
            }
        }

        // 1. Sync PC Sidebar filter buttons
        const sGroup = document.getElementById('gourmet-filters');
        if (sGroup) {
            sGroup.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.toggle('active', currentFilters.gourmet.includes(b.dataset.value));
            });
        }

        // 2. Sync Mobile Chip buttons
        const mGroup = document.getElementById('mobile-gourmet-chips-bar');
        if (mGroup) {
            mGroup.querySelectorAll('.mobile-gourmet-chip').forEach(b => {
                b.classList.toggle('active', currentFilters.gourmet.includes(b.dataset.gourmet));
            });
        }

        // 3. Update or hide the Top Viewing Banner
        const banner = document.getElementById('gourmet-viewing-banner');
        const nameEl = document.getElementById('gourmet-viewing-name');
        const subEl = document.getElementById('gourmet-viewing-sub');

        if (banner) {
            if (currentFilters.gourmet.length === 1 && currentFilters.gourmet[0] === 'me') {
                banner.style.display = 'none';
                window.currentViewingGourmet = null;
            } else {
                banner.style.display = 'flex';
                if (currentFilters.gourmet.includes('all')) {
                    if (nameEl) nameEl.textContent = '모든 미식가';
                    if (subEl) subEl.textContent = '나와 팔로잉 친구들의 맛집 전체 보기';
                    window.currentViewingGourmet = { id: 'all', name: '모든 미식가' };
                } else if (currentFilters.gourmet.includes('overlap')) {
                    if (nameEl) nameEl.textContent = '함께 등록한 맛집';
                    if (subEl) subEl.textContent = '나와 친구들이 공통으로 추천하는 맛집 모음';
                    window.currentViewingGourmet = { id: 'overlap', name: '함께 등록한 맛집' };
                } else {
                    const mockList = (typeof window !== 'undefined' && window.MASTER_MOCK_GOURMETS) 
                        ? window.MASTER_MOCK_GOURMETS 
                        : ((typeof MASTER_MOCK_GOURMETS !== 'undefined') ? MASTER_MOCK_GOURMETS : []);
                    const cachedUsers = (typeof cachedDiscoveredUsers !== 'undefined' && Array.isArray(cachedDiscoveredUsers))
                        ? cachedDiscoveredUsers
                        : (JSON.parse(localStorage.getItem('spoonmap_cached_public_users') || '[]'));

                    const names = currentFilters.gourmet.map(gid => {
                        if (gid === 'me') return '나';
                        const m = mockList.find(x => String(x.id) === String(gid));
                        if (m) return m.name;
                        const u = cachedUsers.find(x => String(x.id) === String(gid) || String(x.id).replace(/^user_/, '') === String(gid).replace(/^following_/, '').replace(/^user_/, ''));
                        if (u) return u.name;
                        return '미식가';
                    });

                    if (nameEl) nameEl.textContent = names.join(' · ');
                    if (subEl) {
                        subEl.textContent = currentFilters.gourmet.length > 1
                            ? '선택한 미식가들의 맛집 모아보기'
                            : '추천 맛집 둘러보기 모드';
                    }
                    const curGid = currentFilters.gourmet.length === 1 ? currentFilters.gourmet[0] : null;
                    const cleanCurGid = curGid ? String(curGid).replace(/^following_/, '') : null;
                    const pureCurGid = cleanCurGid ? cleanCurGid.replace(/^user_/, '') : null;
                    let existingRests = null;
                    if (window.currentViewingGourmet && Array.isArray(window.currentViewingGourmet.restaurants)) {
                        const viewClean = String(window.currentViewingGourmet.id).replace(/^following_/, '').replace(/^user_/, '');
                        if (pureCurGid === viewClean || cleanCurGid === viewClean || window.currentViewingGourmet.id === currentFilters.gourmet.join(',')) {
                            existingRests = window.currentViewingGourmet.restaurants;
                        }
                    }
                    if (!existingRests && cleanCurGid && window.followingRestaurantsCache) {
                        existingRests = window.followingRestaurantsCache.get(cleanCurGid) || 
                                        window.followingRestaurantsCache.get(pureCurGid) || 
                                        window.followingRestaurantsCache.get(`user_${pureCurGid}`) ||
                                        window.followingRestaurantsCache.get(curGid) || 
                                        window.followingRestaurantsCache.get(`following_${cleanCurGid}`);
                    }
                    if (!existingRests && (cleanCurGid === 'master' || pureCurGid === 'master')) {
                        existingRests = (typeof getMasterRestaurantList === 'function') ? getMasterRestaurantList() : null;
                    }
                    if (!existingRests && pureCurGid && typeof cachedDiscoveredUsers !== 'undefined' && Array.isArray(cachedDiscoveredUsers)) {
                        const foundU = cachedDiscoveredUsers.find(u => String(u.id).replace(/^user_/, '') === pureCurGid);
                        if (foundU && Array.isArray(foundU.restaurants) && foundU.restaurants.length > 0) {
                            existingRests = foundU.restaurants;
                        }
                    }
                    window.currentViewingGourmet = {
                        id: currentFilters.gourmet.join(','),
                        name: names.join(' · '),
                        restaurants: existingRests || (window.currentViewingGourmet && Array.isArray(window.currentViewingGourmet.restaurants) ? window.currentViewingGourmet.restaurants : null)
                    };
                }
            }
        }

        listDisplayCount = 50;
        render();
    }

    window.setGourmetFilter = setGourmetFilter;
    window.handleMobileGourmetClick = function(btn, value) {
        setGourmetFilter(value);
    };

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
            const hasLarge = currentFilters.location_large && currentFilters.location_large.length > 0;
            const hasSmall = currentFilters.location_small && currentFilters.location_small.length > 0;
            let locMatch = true;
            if (hasLarge || hasSmall) {
                const matchLarge = hasLarge && currentFilters.location_large.some(reg => {
                    if (!reg) return false;
                    const r = reg.trim();
                    return (item.location_large && (item.location_large.includes(r) || r.includes(item.location_large))) ||
                           (item.location_small && (item.location_small.includes(r) || r.includes(item.location_small))) ||
                           (item.road_address && item.road_address.includes(r)) ||
                           (item.address && item.address.includes(r));
                });
                const matchSmall = hasSmall && currentFilters.location_small.includes(item.location_small);
                locMatch = matchLarge || matchSmall;
            }
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

            return catMatch && locMatch && rateMatch && searchMatch && dateMatch;
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
        if (unifiedData.length === 0) {
            grid.innerHTML = `
                <div class="empty-list-state">
                    <div class="empty-icon">🥄</div>
                    <h4>아직 등록된 나만의 맛집이 없습니다</h4>
                    <p>지도(MAP)에서 마음에 드는 식당을 <b>[내 맛집에 추가]</b>하거나 <b>[찜하기]</b>로 나만의 맛집 리스트를 만들어보세요!</p>
                    <button class="empty-reset-btn" onclick="window.location.hash='#map'">지도에서 맛집 찾기 📍</button>
                </div>
            `;
        } else if (filtered.length === 0) {
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
                    <span>방문</span>
                    <span>평점</span>
                    <span>지도</span>
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
    window.render = render;

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
        currentFilters.gourmet = ['me'];
        const banner = document.getElementById('gourmet-viewing-banner');
        if (banner) banner.style.display = 'none';
        window.currentViewingGourmet = null;
        const mGroup = document.getElementById('mobile-gourmet-chips-bar');
        if (mGroup) {
            mGroup.querySelectorAll('.mobile-gourmet-chip').forEach(b => {
                b.classList.toggle('active', b.dataset.gourmet === 'me');
            });
        }
        const sGroup = document.getElementById('gourmet-filters');
        if (sGroup) {
            sGroup.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.toggle('active', b.dataset.value === 'me');
            });
        }
        if (typeof dateRangeFilter !== 'undefined') {
            dateRangeFilter.startDate = null;
            dateRangeFilter.endDate = null;
        }

        // 2. Reset text search & date inputs
        const searchInputEl = document.getElementById('restaurant-search');
        if (searchInputEl) searchInputEl.value = '';
        const startDateInput = document.getElementById('filter-start-date');
        const endDateInput = document.getElementById('filter-end-date');
        if (startDateInput) { startDateInput.value = ''; startDateInput.dataset.hasValue = 'false'; }
        if (endDateInput) { endDateInput.value = ''; endDateInput.dataset.hasValue = 'false'; }

        // 3. Reset sort buttons to default
        document.querySelectorAll('.sort-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.sort === 'default');
        });
        currentSorts = [];

        // 4. Update UI & re-render
        refreshSidebarFilters();
        if (typeof syncMobileCatChips === 'function') syncMobileCatChips();
        updateFilterButtonsUI();
        if (typeof syncRegionUI === 'function') syncRegionUI();
        if (typeof updatePickerSelectedBanner === 'function') updatePickerSelectedBanner();
        listDisplayCount = 50;
        render();

        // 5. User feedback toast
        if (typeof showDiaryToast === 'function') {
            showDiaryToast('🔄 모든 필터가 초기화되었습니다.');
        }
    }
    window.resetAllFilters = resetAllFilters;

    function getFilteredData() {
        const masterData = getUnifiedRestaurantData();
        return masterData.filter(item => {
            if (!item.map_url) return false;

            const catMatch = currentFilters.category.length === 0 || 
                           currentFilters.category.some(c => item.category && item.category.includes(c));
            const hasLarge = currentFilters.location_large && currentFilters.location_large.length > 0;
            const hasSmall = currentFilters.location_small && currentFilters.location_small.length > 0;
            let locMatch = true;
            if (hasLarge || hasSmall) {
                const matchLarge = hasLarge && currentFilters.location_large.some(reg => {
                    if (!reg) return false;
                    const r = reg.trim();
                    return (item.location_large && (item.location_large.includes(r) || r.includes(item.location_large))) ||
                           (item.location_small && (item.location_small.includes(r) || r.includes(item.location_small))) ||
                           (item.road_address && item.road_address.includes(r)) ||
                           (item.address && item.address.includes(r));
                });
                const matchSmall = hasSmall && currentFilters.location_small.includes(item.location_small);
                locMatch = matchLarge || matchSmall;
            }
            const rateMatch = currentFilters.rate.length === 0 ||
                            currentFilters.rate.includes(item.rate);

            return catMatch && locMatch && rateMatch;
        });
    }

    function createCard(item, isCompact = false) {
        const card = document.createElement('div');
        
        // Count spoons or format rate
        const spoonCount = (item.rate ? (item.rate.match(/CLR|🥄/g) || item.rate.match(/🥄/g) || []).length : 0) || 1;
        const mapUrls = (typeof getPlaceMapUrls === 'function') ? getPlaceMapUrls(item) : {
            kakaoUrl: `https://map.kakao.com/link/search/${encodeURIComponent(item.name)}`,
            naverUrl: `https://map.naver.com/p/search/${encodeURIComponent(item.name)}`
        };

        if (isCompact) {
            card.className = 'compact-card-row' + (item.closed ? ' is-closed' : '');
            const compactTitleHtml = item.closed ? `<s>${item.name}</s> <span class="badge-closed">폐점</span>` : item.name;
            
            const catTag = item.category ? item.category.split(',')[0].trim() : '기타';
            const catColor = getNotionTagColor(catTag);
            
            const menuArray = Array.isArray(item.menu) ? item.menu : (typeof item.menu === 'string' ? item.menu.split(',') : []);
            const firstMenu = menuArray.length > 0 ? menuArray[0].trim() : '-';
            const menuColor = firstMenu !== '-' ? getNotionTagColor(firstMenu) : { bg: '#F1F1EF', color: '#37352F' };
            
            const locLargeColor = item.location_large ? getNotionTagColor(item.location_large) : { bg: '#F1F1EF', color: '#37352F' };
            const locSmallColor = item.location_small ? getNotionTagColor(item.location_small) : { bg: '#F1F1EF', color: '#37352F' };

            let compactGourmetBadge = '';
            if (item.isOverlapping && Array.isArray(item.overlappingUsers) && item.overlappingUsers.length > 1) {
                const u = item.overlappingUsers;
                const compactLabel = u.length >= 3 ? `${u[0]} 외 ${u.length - 1}명` : `${u[0]}·${u[1]}`;
                compactGourmetBadge = ` <span class="compact-visit-badge is-frequent" style="font-size:0.68rem; padding:1px 5px;" title="함께 등록한 맛집: ${u.join(' · ')}">🔥 ${compactLabel}</span>`;
            } else if ((Array.isArray(currentFilters.gourmet) ? (currentFilters.gourmet.includes('all') || currentFilters.gourmet.length > 1) : currentFilters.gourmet === 'all') && item.sourceUserName) {
                compactGourmetBadge = ` <span class="compact-visit-badge" style="font-size:0.68rem; padding:1px 5px;" title="${item.sourceUserName}">👤 ${item.sourceUserName}</span>`;
            }

            card.innerHTML = `
                <div class="compact-col-name" title="${item.name}">${compactTitleHtml}${compactGourmetBadge}</div>
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
                <div class="compact-col-cell compact-visit-cell">
                    <span class="compact-visit-badge ${item.visit_count >= 2 ? 'is-frequent' : ''}">
                        ${item.visit_count >= 2 ? '🔥 ' + item.visit_count + '회' : '1회'}
                    </span>
                </div>
                <div class="compact-col-rate">
                    ${'🥄'.repeat(spoonCount)}
                </div>
                <div class="compact-col-cell compact-map-cell">
                    <a href="${mapUrls.naverUrl}" target="_blank" rel="noopener noreferrer" class="compact-map-btn naver-map-btn" onclick="event.stopPropagation()">Naver 🗺️</a>
                    <a href="${mapUrls.kakaoUrl}" target="_blank" rel="noopener noreferrer" class="compact-map-btn kakao-map-btn" onclick="event.stopPropagation()">Kakao 📍</a>
                </div>
            `;
        } else {
            card.className = 'restaurant-card' + (item.closed ? ' is-closed' : '');
            const cardTitleHtml = item.closed ? `<s>${item.name}</s> <span class="badge-closed">폐점</span>` : item.name;
            const menuTagsHtml = item.menu && item.menu.length > 0 
                ? item.menu.slice(0, 3).map(m => `<span class="menu-chip">🏷️ ${m}</span>`).join('') 
                : '';

            const primaryCategory = item.category ? item.category.split(',')[0].trim() : '기타';
            let gourmetBadgeHtml = '';
            if (item.isOverlapping && Array.isArray(item.overlappingUsers) && item.overlappingUsers.length > 1) {
                const u = item.overlappingUsers;
                const fullUsersTitle = u.join(' · ');
                const overlapLabel = u.length >= 3 ? `${u[0]} 외 ${u.length - 1}명` : `${u[0]}·${u[1]}`;
                gourmetBadgeHtml = `<span class="card-gourmet-badge is-overlap" title="함께 등록한 맛집: ${fullUsersTitle}">🔥 ${overlapLabel}</span>`;
            } else if ((Array.isArray(currentFilters.gourmet) ? (currentFilters.gourmet.includes('all') || currentFilters.gourmet.length > 1) : currentFilters.gourmet === 'all') && item.sourceUserName) {
                gourmetBadgeHtml = `<span class="card-gourmet-badge" title="${item.sourceUserName}">👤 ${item.sourceUserName}</span>`;
            } else if (item.sourceUserId && item.sourceUserId !== 'me' && item.isOverlapping) {
                gourmetBadgeHtml = `<span class="card-gourmet-badge is-overlap" title="나도 등록한 맛집">🔥 공통 맛집</span>`;
            }

            card.innerHTML = `
                <div class="card-header ${gourmetBadgeHtml ? 'has-gourmet-badge' : ''}">
                    <div class="card-header-left">
                        <span class="category-badge" title="${item.category || '기타'}">${primaryCategory}</span>
                        ${gourmetBadgeHtml}
                    </div>
                    ${getSpoonBadgeHtml(item)}
                </div>
                <div class="card-body">
                    <h2 class="card-title">${cardTitleHtml}</h2>
                    <div class="location-info">
                        <span class="loc-badge loc-large">${item.location_large}</span>
                        ${item.location_small ? `<span class="loc-badge loc-small">${item.location_small}</span>` : ''}
                    </div>
                    ${menuTagsHtml ? `<div class="card-menu-list">${menuTagsHtml}</div>` : ''}
                </div>
                <div class="card-footer">
                    <a href="${mapUrls.naverUrl}" target="_blank" rel="noopener noreferrer" class="map-link-btn naver-link" onclick="event.stopPropagation()">
                        <span>Naver</span> 🗺️
                    </a>
                    <a href="${mapUrls.kakaoUrl}" target="_blank" rel="noopener noreferrer" class="map-link-btn kakao-link" onclick="event.stopPropagation()">
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
    const routeBtn = document.getElementById('list-detail-route-btn');
    const historyCountEl = document.getElementById('list-detail-history-count');
    const historyListEl = document.getElementById('list-detail-history-list');

    if (!overlay) return;

    // Always start in View Mode
    switchDetailModalMode('view');

    // Load and render photos for this restaurant
    if (typeof refreshListModalPhotoGrid === 'function') {
        refreshListModalPhotoGrid(item.name);
    }

    // 1. Title & Visit Badge
    if (nameEl) {
        nameEl.innerHTML = item.closed ? `<s>${item.name}</s> <span class="badge-closed">폐점</span>` : item.name;
    }
    
    const visits = getAllVisitsForRestaurant(item.name);
    const totalCount = visits.length || item.visit_count || 1;

    if (badgeEl) {
        const overlapText = (item.isOverlapping && Array.isArray(item.overlappingUsers) && item.overlappingUsers.length > 1)
            ? `🔥 ${item.overlappingUsers.join(' · ')}`
            : '';
        if (totalCount >= 2 && overlapText) {
            let icon = totalCount >= 10 ? '👑' : '🔥';
            badgeEl.innerHTML = `${icon} ${totalCount}회 방문 · ${overlapText}`;
            badgeEl.style.display = 'inline-flex';
        } else if (totalCount >= 2) {
            let icon = '🔥';
            if (totalCount >= 10) icon = '👑';
            badgeEl.innerHTML = `${icon} ${totalCount}회 방문 · 또간집`;
            badgeEl.style.display = 'inline-flex';
        } else if (overlapText) {
            badgeEl.innerHTML = `${overlapText} 공통 맛집`;
            badgeEl.style.display = 'inline-flex';
        } else {
            badgeEl.style.display = 'none';
        }
    }

    // 2. Spoon Rate
    const spoonCount = (item.rate ? (item.rate.match(/CLR|🥄/g) || item.rate.match(/🥄/g) || []).length : 0) || 1;
    if (rateEl) {
        rateEl.innerHTML = `${'🥄'.repeat(spoonCount)} <span style="font-size:0.85rem; color:var(--text-secondary); font-weight:600;">수저 평점 ${spoonCount}개</span>`;
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
    const mapUrls = (typeof getPlaceMapUrls === 'function') ? getPlaceMapUrls(item) : {
        kakaoUrl: `https://map.kakao.com/link/search/${encodeURIComponent(item.name)}`,
        naverUrl: `https://map.naver.com/p/search/${encodeURIComponent(item.name)}`
    };
    if (naverBtn) naverBtn.href = mapUrls.naverUrl;
    if (kakaoBtn) kakaoBtn.href = mapUrls.kakaoUrl;
    if (routeBtn) {
        routeBtn.href = 'javascript:void(0)';
        routeBtn.removeAttribute('target');
        routeBtn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (typeof window.openListRestaurantOnMapTab === 'function') {
                window.openListRestaurantOnMapTab(item);
            }
        };
    }

    // 7. Visit History Timeline with rich memo & clickable date
    if (historyCountEl) historyCountEl.textContent = `총 ${totalCount}회`;
    if (historyListEl) {
        historyListEl.innerHTML = '';
        if (visits.length > 0) {
            const sortedVisits = [...visits].sort((a, b) => {
                const dA = a.date || '0000-00-00';
                const dB = b.date || '0000-00-00';
                return dB.localeCompare(dA);
            });
            sortedVisits.forEach((v, idx) => {
                const orderNum = sortedVisits.length - idx;
                const memoText = (v.data && (v.data.memo || v.data.review)) || v.memo || '';
                const shortDate = (v.date && v.date.length === 10) ? v.date.slice(2) : (v.date || '날짜 미지정');
                const div = document.createElement('div');
                div.className = 'history-item-card';
                div.title = v.date ? `클릭하면 ${v.date} 다이어리로 이동합니다` : '클릭하여 방문 날짜를 입력할 수 있습니다';
                div.innerHTML = `
                    <div class="history-item-top">
                        <span class="history-date-link">
                            📅 ${shortDate}
                            <span class="jump-hint">${v.date ? '다이어리 ➔' : '입력 ➔'}</span>
                        </span>
                        <span class="history-order-chip">${orderNum >= 2 ? '🔥' : '📍'} ${orderNum}회</span>
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
                    if (v.date) {
                        navigateToDiaryDate(v.date);
                    } else {
                        closeRestaurantDetailModal();
                        openEditDiaryDrawer(v.data || v);
                    }
                };
                historyListEl.appendChild(div);
            });
        } else {
            const shortLatest = (item.date && item.date.length === 10) ? item.date.slice(2) : (item.date || '기록 없음');
            historyListEl.innerHTML = `
                <div class="history-item-card" style="text-align:center; color:var(--text-muted); padding:0.8rem;">
                    📅 최근 방문: ${shortLatest}
                </div>
            `;
        }
    }

    // 8. Action Buttons Binding
    const addDiaryBtn = document.getElementById('btn-add-diary-for-this-restaurant');
    const editRestaurantBtn = document.getElementById('btn-edit-restaurant-info');
    const scrapeBtn = document.getElementById('btn-scrape-to-wishlist');

    if (window.isSharedMapMode) {
        if (addDiaryBtn) addDiaryBtn.style.display = 'none';
        if (editRestaurantBtn) editRestaurantBtn.style.display = 'none';
        if (scrapeBtn) {
            scrapeBtn.style.display = 'flex';
            scrapeBtn.onclick = () => scrapeCurrentRestaurantToWishlist(item);
        }
    } else {
        if (addDiaryBtn) {
            addDiaryBtn.style.display = '';
            addDiaryBtn.onclick = () => addDiaryForRestaurant(item);
        }
        if (editRestaurantBtn) {
            editRestaurantBtn.style.display = '';
            editRestaurantBtn.onclick = () => switchDetailModalMode('edit');
        }
        if (scrapeBtn) scrapeBtn.style.display = 'none';
    }

    // Ensure clean state before opening
    const modalContentCard = overlay.querySelector('.list-detail-modal-card');
    if (modalContentCard) {
        modalContentCard.style.transform = '';
        modalContentCard.style.transition = '';
    }
    overlay.style.opacity = '';
    overlay.style.transition = '';

    // Open Modal
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeRestaurantDetailModal(immediate = false) {
    const overlay = document.getElementById('list-detail-modal-overlay');
    if (!overlay) return;

    // Close open popovers
    document.querySelectorAll('.notion-dropdown-popover.open').forEach(p => p.classList.remove('open'));

    const isMobile = window.innerWidth <= 768;
    const card = overlay.querySelector('.list-detail-modal-card');

    if (isMobile && card && !immediate && overlay.classList.contains('open')) {
        card.style.transition = 'transform 0.26s cubic-bezier(0.16, 1, 0.3, 1)';
        card.style.transform = 'translateY(100%)';
        overlay.style.transition = 'opacity 0.26s ease';
        overlay.style.opacity = '0';

        setTimeout(() => {
            overlay.classList.remove('open');
            card.style.transform = '';
            card.style.transition = '';
            overlay.style.opacity = '';
            overlay.style.transition = '';
            document.body.style.overflow = '';
        }, 260);
    } else {
        overlay.classList.remove('open');
        if (card) {
            card.style.transform = '';
            card.style.transition = '';
        }
        overlay.style.opacity = '';
        overlay.style.transition = '';
        document.body.style.overflow = '';
    }
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

    // 1. Save to overrides
    const overridesKey = typeof getUserOverridesStorageKey === 'function' ? getUserOverridesStorageKey() : 'spoonmap_restaurant_overrides';
    const diaryStorageKey = typeof getDiaryStorageKey === 'function' ? getDiaryStorageKey() : 'spoonmap_diary';
    const overrides = JSON.parse(localStorage.getItem(overridesKey) || '{}');
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
    localStorage.setItem(overridesKey, JSON.stringify(overrides));
    if (typeof saveToCloud === 'function') {
        saveToCloud('overrides', overrides);
    }

    // 2. Batch sync all entries in user diary for this restaurant
    const existing = JSON.parse(localStorage.getItem(diaryStorageKey) || '[]');
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
        localStorage.setItem(diaryStorageKey, JSON.stringify(existing));
        if (typeof saveToCloud === 'function') {
            saveToCloud('diary', existing);
        }
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

function deleteRestaurantMasterFromModal() {
    if (!currentDetailModalItem || !currentDetailModalItem.name) return;
    const name = currentDetailModalItem.name;
    const key = name.trim().toLowerCase();

    if (!confirm(`"${name}" 식당을 정말 삭제하시겠습니까?\n등록된 방문 기록과 사진도 함께 삭제됩니다.`)) return;

    const isOwner = isOwnerUser();
    const diaryStorageKey = typeof getDiaryStorageKey === 'function' ? getDiaryStorageKey() : (isOwner ? 'spoonmap_diary' : 'spoonmap_user_diary');
    const overridesKey = isOwner ? 'spoonmap_restaurant_overrides' : (typeof getUserOverridesStorageKey === 'function' ? getUserOverridesStorageKey() : 'spoonmap_restaurant_overrides');

    // 1. Remove from diary
    const existing = JSON.parse(localStorage.getItem(diaryStorageKey) || '[]');
    const updatedDiary = existing.filter(e => !e.name || e.name.trim().toLowerCase() !== key);
    localStorage.setItem(diaryStorageKey, JSON.stringify(updatedDiary));

    // 2. Remove from overrides
    const overrides = JSON.parse(localStorage.getItem(overridesKey) || '{}');
    delete overrides[key];
    Object.keys(overrides).forEach(k => {
        if (k.trim().toLowerCase() === key) delete overrides[k];
    });
    localStorage.setItem(overridesKey, JSON.stringify(overrides));

    // 3. Mark in deleted restaurants
    const deletedRestKey = 'spoonmap_deleted_restaurants';
    const deletedRestaurants = JSON.parse(localStorage.getItem(deletedRestKey) || '[]');
    deletedRestaurants.push(key);
    const uniqueDeletedRest = [...new Set(deletedRestaurants)];
    localStorage.setItem(deletedRestKey, JSON.stringify(uniqueDeletedRest));

    // 4. Mark all visits in deleted diary (for CSV suppression)
    const deletedDiaryKey = 'spoonmap_deleted_diary';
    const deletedDiary = JSON.parse(localStorage.getItem(deletedDiaryKey) || '[]');
    deletedDiary.push(`${key}|*`);
    if (typeof diaryData !== 'undefined' && Array.isArray(diaryData)) {
        diaryData.forEach((entry, idx) => {
            if (entry.name && entry.name.trim().toLowerCase() === key) {
                deletedDiary.push(entry.id || `csv-${idx}-${entry.date}`);
                deletedDiary.push(`csv-${idx}`);
                if (entry.date) deletedDiary.push(`${key}|${entry.date}`);
            }
        });
    }
    const uniqueDeletedDiary = [...new Set(deletedDiary)];
    localStorage.setItem(deletedDiaryKey, JSON.stringify(uniqueDeletedDiary));

    // 5. Remove from wishlist
    if (typeof removeUserWishlist === 'function') {
        removeUserWishlist(name);
    }

    // 6. Delete photos
    if (typeof saveRestaurantPhotosToStore === 'function') {
        saveRestaurantPhotosToStore(name, []);
    }

    // 7. Cloud sync
    if (typeof saveToCloud === 'function') {
        saveToCloud('diary', updatedDiary);
        saveToCloud('overrides', overrides);
        saveToCloud('deleted_restaurants', uniqueDeletedRest);
        saveToCloud('deleted_diary', uniqueDeletedDiary);
    }

    // 8. Close modal & re-render
    closeRestaurantDetailModal();
    if (window.renderApp) window.renderApp();
    if (window.populateRecommendCategories) window.populateRecommendCategories();
    if (typeof computeAndRenderFoodInsights === 'function') computeAndRenderFoodInsights();
    if (typeof renderDiaryCalendar === 'function') renderDiaryCalendar();
    showDiaryToast(`🗑️ "${name}" 식당이 삭제되었습니다.`);
}
window.deleteRestaurantMasterFromModal = deleteRestaurantMasterFromModal;

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
                notionSelectors.category.setValues(item.category);
            }
            if (item.location_large && item.location_small && notionSelectors.location_small && typeof notionSelectors.location_small.selectSmallWithLarge === 'function') {
                notionSelectors.location_small.selectSmallWithLarge(item.location_large, item.location_small);
            } else {
                if (item.location_large && notionSelectors.location_large) {
                    notionSelectors.location_large.setSelected([item.location_large]);
                }
                if (item.location_small && notionSelectors.location_small) {
                    notionSelectors.location_small.setSelected([item.location_small]);
                }
            }
            if (item.menu && notionSelectors.menu) {
                const menus = Array.isArray(item.menu) ? item.menu : (typeof item.menu === 'string' ? item.menu.split(',').map(m => m.trim()).filter(Boolean) : []);
                if (menus.length > 0) notionSelectors.menu.setValues(menus[0]);
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

    const mapUrls = (typeof getPlaceMapUrls === 'function') ? getPlaceMapUrls(item) : {
        kakaoUrl: `https://map.kakao.com/link/search/${encodeURIComponent(item.name)}`,
        naverUrl: `https://map.naver.com/p/search/${encodeURIComponent(item.name)}`
    };
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
            <a href="${mapUrls.naverUrl}" target="_blank" rel="noopener noreferrer" class="overlay-naver">네이버 지도에서 보기</a>
            <a href="${mapUrls.kakaoUrl}" target="_blank" rel="noopener noreferrer" class="overlay-kakao">카카오맵에서 보기</a>
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
    if (!masterData || !masterData.length) {
        const summaryEl = document.getElementById('insights-total-summary');
        if (summaryEl) summaryEl.textContent = '아직 등록된 식사 일기나 맛집 데이터가 없습니다.';
        const countEl = document.getElementById('stat-total-count');
        if (countEl) countEl.textContent = '0곳';
        const visEl = document.getElementById('stat-visited-count');
        if (visEl) visEl.textContent = '0곳 (0%)';
        const topPlaceEl = document.getElementById('stat-top-place');
        if (topPlaceEl) topPlaceEl.textContent = '-';
        const topCatEl = document.getElementById('stat-top-category');
        if (topCatEl) topCatEl.textContent = '-';

        ['insights-region-list', 'insights-category-list', 'insights-rate-list', 'insights-top-places-list'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = '<div style="padding:1.5rem;text-align:center;color:#9CA3AF;font-size:0.9rem;">등록된 데이터가 없습니다.</div>';
        });
        return;
    }

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
    if (visEl) visEl.textContent = `${reVisitedCount}곳 · ${visitedPct}%`;

    const topPlace = topVisitedItems[0];
    const topPlaceEl = document.getElementById('stat-top-place');
    if (topPlaceEl) topPlaceEl.textContent = topPlace ? `${topPlace.name} · ${topPlace.visit_count || 1}회` : '-';

    // Top Category
    const sortedCats = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]);
    const topCat = sortedCats[0];
    const topCatEl = document.getElementById('stat-top-category');
    if (topCatEl) topCatEl.textContent = topCat ? `${topCat[0]} · ${topCat[1]}곳` : '-';

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
                        <span class="bar-count">${count}곳 · ${pct}%</span>
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
                        <span class="bar-count">${count}곳 · ${pct}%</span>
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
                        <span class="bar-count">${count}곳 · ${pct}%</span>
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

window.resetSommelierChat = function() {
    const input = document.getElementById('sommelier-user-input');
    if (input) input.value = '';
    sommelierInitialized = false;
    if (window.sommelierContext) {
        window.sommelierContext.lastLocation = '';
        window.sommelierContext.lastCategoryDisplay = '';
        window.sommelierContext.lastPlaces = [];
        window.sommelierContext.lastCourseIntent = null;
        window.sommelierContext.lastMoodText = '';
        window.sommelierContext.lastStep1Places = [];
        window.sommelierContext.lastStep2Places = [];
        window.sommelierContext.lastQuery = '';
        window.sommelierContext.history = [];
    }
    initSommelierTab();
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
                원하시는 <b>코스 및 카테고리</b>를 무엇이든 자유롭게 요구해 보세요!<br>
                <div class="mobile-only" style="margin-top: 10px;">
                    <button type="button" class="btn-show-quick-prompts" onclick="showSommelierPromptsList()">
                        💡 추천 질문 목록 보기
                    </button>
                </div>
            </div>
        </div>
    `;

    if (!sendBtn.dataset.bound) {
        sendBtn.addEventListener('click', handleSommelierSend);
        sendBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            handleSommelierSend();
        }, { passive: false });
        sendBtn.dataset.bound = 'true';
    }
    if (!input.dataset.bound) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSommelierSend();
            }
        });
        // Crucial for iOS Safari: resets hit-testing coordinate matrix when virtual keyboard is dismissed
        input.addEventListener('blur', () => {
            setTimeout(() => {
                window.scrollTo(0, 0);
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }, 60);
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 250);
        });
        input.dataset.bound = 'true';
    }
}

window.showSommelierPromptsList = function() {
    const thread = document.getElementById('sommelier-chat-thread');
    if (!thread) return;

    const promptsDiv = document.createElement('div');
    promptsDiv.className = 'chat-msg ai-msg';
    promptsDiv.innerHTML = `
        <div class="chat-avatar">🤖</div>
        <div class="chat-bubble sommelier-prompts-guide">
            <div class="prompts-guide-header">
                <b>💡 추천 질문 모음</b>
                <span class="prompts-guide-sub">원하는 질문을 터치하면 바로 추천해 드려요!</span>
            </div>
            
            <div class="prompt-category-group">
                <div class="prompt-category-title">📍 실시간 & 내 맛집</div>
                <div class="prompt-btn-grid">
                    <button type="button" class="prompt-select-btn" onclick="sendSommelierQuickPrompt('🌐 카카오 지도 실시간 추천 1차 3곳과 2차 3곳 추천해줘')">🌐 카카오 1차 3곳 + 2차 3곳</button>
                    <button type="button" class="prompt-select-btn" onclick="sendSommelierQuickPrompt('🔥 내 맛집 데이터에서만 5수저 맛집 3곳 추천해줘')">🔥 내 맛집 5수저 3곳만</button>
                    <button type="button" class="prompt-select-btn" onclick="sendSommelierQuickPrompt('🔥 내가 2번 이상 방문해서 검증된 또간집 중에서 3곳 추천해줘')">🔥 검증된 찐 또간집 3곳</button>
                </div>
            </div>

            <div class="prompt-category-group">
                <div class="prompt-category-title">🥂 데이트 & 코스</div>
                <div class="prompt-btn-grid">
                    <button type="button" class="prompt-select-btn" onclick="sendSommelierQuickPrompt('🌧️ 비 오는 날 연남동 데이트 코스 1차 고기집 1곳, 2차 카페 1곳 추천해줘')">🌧️ 연남동 고기 + 카페 데이트</button>
                    <button type="button" class="prompt-select-btn" onclick="sendSommelierQuickPrompt('🍰 성수동 1차 감성 양식당 1곳, 2차 디저트 카페 1곳 데이트 코스 짜줘')">🍰 성수동 양식 + 디저트 코스</button>
                </div>
            </div>

            <div class="prompt-category-group">
                <div class="prompt-category-title">🍺 모임 / 회식 / 2차</div>
                <div class="prompt-btn-grid">
                    <button type="button" class="prompt-select-btn" onclick="sendSommelierQuickPrompt('🍺 강남역 근처 카카오 지도 실시간 2차 술집 2곳 추천해줘')">🍺 강남역 2차 술집 2곳</button>
                    <button type="button" class="prompt-select-btn" onclick="sendSommelierQuickPrompt('🥩 여의도에서 팀 회식하기 좋은 넓고 친절한 고깃집 2곳 추천해줘')">🥩 여의도 회식 고깃집 2곳</button>
                    <button type="button" class="prompt-select-btn" onclick="sendSommelierQuickPrompt('🌙 이태원 근처 분위기 좋고 늦게까지 하는 2차 요리주점 2곳')">🌙 이태원 심야 2차 요리주점 2곳</button>
                </div>
            </div>

            <div class="prompt-category-group">
                <div class="prompt-category-title">🍚 혼밥 & 맛집 탐방</div>
                <div class="prompt-btn-grid">
                    <button type="button" class="prompt-select-btn" onclick="sendSommelierQuickPrompt('🍶 신촌에서 눈치 안 보고 편하게 혼밥하기 좋은 맛집 2곳 알려줘')">🍶 신촌 편한 혼밥 맛집 2곳</button>
                    <button type="button" class="prompt-select-btn" onclick="sendSommelierQuickPrompt('💰 홍대 주변 푸짐하고 가성비 뛰어난 혜자 맛집 3곳 알려줘')">💰 홍대 푸짐한 가성비 3곳</button>
                    <button type="button" class="prompt-select-btn" onclick="sendSommelierQuickPrompt('🍲 종로 근처 속 확 풀리는 얼큰한 국물과 해장 맛집 2곳')">🍲 종로 속풀리는 국물 해장 2곳</button>
                    <button type="button" class="prompt-select-btn" onclick="sendSommelierQuickPrompt('🌮 이태원에서 카카오 지도로 안 가본 타코 남미 음식점 3곳 찾아줘')">🌮 이태원 신상 타코 남미 3곳</button>
                </div>
            </div>
        </div>
    `;
    thread.appendChild(promptsDiv);
    thread.scrollTop = thread.scrollHeight;
};

function cleanMarkdownText(str) {
    if (!str) return '';
    let cleaned = str
        .replace(/```html/gi, '')
        .replace(/```/g, '')
        .replace(/\*\*/g, '')          // remove **
        .replace(/\*/g, '')           // remove *
        .replace(/###/g, '')          // remove ###
        .replace(/##/g, '')           // remove ##
        .replace(/#/g, '')            // remove #
        .replace(/---/g, '')          // remove ---
        .trim();

    // Clean parentheses in rec-tag-pill (e.g. "추천 1 (고기집)" -> "추천 1 · 고기집")
    cleaned = cleaned.replace(/<span class="rec-tag-pill">([\s\S]*?)<\/span>/g, (m, tagText) => {
        let noParen = tagText.replace(/[()]/g, ' ').replace(/\s+/g, ' ').trim();
        noParen = noParen.replace(/\s*:\s*/g, ' · ').replace(/\s*-\s*/g, ' · ');
        return `<span class="rec-tag-pill">${noParen}</span>`;
    });

    return cleaned;
}

function findUserVisitCount(placeName) {
    if (typeof restaurantData === 'undefined' || !restaurantData || !restaurantData.length) return 0;
    const cleanName = (placeName || '').replace(/[\s\-_()]+/g, '').toLowerCase();
    if (!cleanName) return 0;
    for (const r of restaurantData) {
        const rName = (r.name || '').replace(/[\s\-_()]+/g, '').toLowerCase();
        if (rName && (cleanName === rName || (cleanName.length >= 4 && (cleanName.includes(rName) || rName.includes(cleanName))))) {
            return r.visit_count || (r.spoon_rating ? 1 : 0);
        }
    }
    return 0;
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
            const cleanKakaoBtn = kakaoBtn.replace('에서 보기', '').replace('에서보기', '');
            const naverBtn = '<a href="' + naverUrl + '" target="_blank" class="rec-naver-pill-btn">\uD83D\uDDFA\uFE0F \ub124\uc774\ubc84\uc9c0\ub3c4</a>';
            return titleTag + middle + '<div class="rec-map-btns">' + cleanKakaoBtn + naverBtn + '</div>';
        }
    );
}

function renderCardStandard(tagText, placeName, addr, desc, mapUrl) {
    const cleanTag = cleanMarkdownText(tagText);
    const cleanTitle = cleanMarkdownText(placeName);
    const cleanAddr = cleanMarkdownText(addr);
    const cleanDesc = cleanMarkdownText(desc);
    const visitCount = findUserVisitCount(cleanTitle);
    const badgeHtml = visitCount > 0 ? `<span class="sommelier-visit-badge">🏆 내 단골집 ${visitCount}회 방문</span>` : '';

    const mapUrls = (typeof getPlaceMapUrls === 'function') ? getPlaceMapUrls({ name: cleanTitle, map_url: mapUrl, location_large: cleanAddr }) : {
        kakaoUrl: (mapUrl && !mapUrl.includes('naver.') ? mapUrl : `https://map.kakao.com/link/search/${encodeURIComponent(cleanTitle)}`),
        naverUrl: (mapUrl && mapUrl.includes('naver.') ? mapUrl : `https://map.naver.com/p/search/${encodeURIComponent(cleanAddr ? cleanAddr + ' ' + cleanTitle : cleanTitle)}`)
    };

    return `
        <div class="rec-card-standard">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; flex-wrap: wrap; gap: 4px; width: 100%;">
                <span class="rec-tag-pill">${cleanTag}</span>
                ${badgeHtml}
            </div>
            <h4 class="rec-place-title">${cleanTitle}</h4>
            <div class="rec-place-meta">📍 <b>위치:</b> ${cleanAddr}</div>
            <p class="rec-place-desc">${cleanDesc}</p>
            <div class="rec-map-btns">
                <a href="${mapUrls.kakaoUrl}" target="_blank" rel="noopener noreferrer" class="rec-kakao-pill-btn">👈 카카오맵</a>
                <a href="${mapUrls.naverUrl}" target="_blank" rel="noopener noreferrer" class="rec-naver-pill-btn">🗺️ 네이버지도</a>
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
    input.blur();

    // Reset viewport scroll offset on iOS Safari
    const resyncViewport = () => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    resyncViewport();
    setTimeout(resyncViewport, 50);
    setTimeout(resyncViewport, 200);

    thread.scrollTop = thread.scrollHeight;

    // AI Typing Indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-msg ai-msg';
    typingDiv.id = 'ai-typing-indicator';
    typingDiv.innerHTML = `
        <div class="chat-avatar">🤖</div>
        <div class="chat-bubble">🍷 취향 및 요청 조건 정밀 분석 중...</div>
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
        setTimeout(() => {
            resyncViewport();
            thread.scrollTop = thread.scrollHeight;
        }, 100);
    };

    // 12-second safety fallback timeout so questions NEVER get stuck
    setTimeout(() => {
        if (!responded) {
            console.warn('Sommelier query timeout, triggering fallback engine...');
            processSommelierFallbackOnly(text, safeCallback);
        }
    }, 12000);

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
    { key: '국물', display: '국물요리', desc: (loc) => `${loc}에서 시원하거나 뜨끈한 국물 요리로 속을 든든하게 채울 수 있는 곳입니다.` },
    { key: '타코', display: '타코/멕시칸', desc: (loc) => `${loc}에서 멕시코 전통 레시피의 살사 소스와 푸짐한 토핑이 어우러진 정통 타코를 맛볼 수 있는 곳입니다.` },
    { key: '멕시칸', display: '멕시칸', desc: (loc) => `${loc}에서 타코, 부리또, 퀘사디아 등 다채로운 멕시코 전통 요리를 즐길 수 있는 이색 맛집입니다.` },
    { key: '남미', display: '남미요리', desc: (loc) => `${loc}에서 이국적인 향신료와 정통 조리법으로 남미의 깊은 미식을 경험할 수 있는 곳입니다.` },
    { key: '베이커리', display: '베이커리', desc: (loc) => `${loc}에서 매일 아침 구워내는 천연 발효빵과 향긋한 페이스트리를 즐길 수 있는 빵집입니다.` },
    { key: '빵집', display: '베이커리', desc: (loc) => `${loc}에서 갓 구운 신선한 빵과 달콤한 구움과자를 만날 수 있는 베이커리입니다.` },
    { key: '브런치', display: '브런치', desc: (loc) => `${loc}에서 여유로운 오전과 오후, 신선한 샐러드와 에그 베네딕트 등 풍성한 브런치를 즐기기 좋습니다.` },
    { key: '와인바', display: '와인바', desc: (loc) => `${loc}에서 엄선된 내추럴 및 컨벤셔널 와인 페어링으로 로맨틱한 저녁을 보내기 완벽한 와인바입니다.` },
    { key: '펍', display: '펍/바', desc: (loc) => `${loc}에서 시원한 크래프트 맥주와 이국적인 핑거 푸드로 가볍게 한잔 기울이기 좋은 펍입니다.` },
    { key: '바', display: '바', desc: (loc) => `${loc}에서 세련된 무드 속에서 시그니처 칵테일과 싱글몰트 위스키를 즐길 수 있는 바입니다.` },
    { key: '요리주점', display: '요리주점', desc: (loc) => `${loc}에서 수준 높은 제철 요리와 다채로운 주류를 페어링할 수 있는 감성 주점입니다.` },
    { key: '곱창', display: '곱창/대창', desc: (loc) => `${loc}에서 쫄깃하고 고소한 곱이 가득 찬 소곱창과 대창을 돌판에 구워 먹는 인기 맛집입니다.` },
    { key: '대창', display: '대창구이', desc: (loc) => `${loc}에서 고소한 풍미와 부드러운 식감이 일품인 대창 구이 전문점입니다.` },
    { key: '막창', display: '막창구이', desc: (loc) => `${loc}에서 쫄깃한 식감과 특제 막장 소스가 어우러진 막창 전문점입니다.` },
    { key: '횟집', display: '횟집', desc: (loc) => `${loc}에서 싱싱한 제철 활어회와 푸짐한 해산물 한 상을 맛볼 수 있는 곳입니다.` },
    { key: '회', display: '회/해산물', desc: (loc) => `${loc}에서 신선한 제철 회와 바다의 풍미를 정갈하게 즐길 수 있는 곳입니다.` },
    { key: '해산물', display: '해산물', desc: (loc) => `${loc}에서 신선한 조개구이와 제철 해산물 요리를 풍성하게 맛볼 수 있는 해산물 전문점입니다.` },
    { key: '샤브샤브', display: '샤브샤브', desc: (loc) => `${loc}에서 맑고 시원한 육수에 신선한 야채와 얇게 썬 소고기를 살짝 데쳐 먹는 샤브샤브 맛집입니다.` },
    { key: '양꼬치', display: '양꼬치', desc: (loc) => `${loc}에서 숯불에 노릇하게 자동 회전 구이로 구워 먹는 육즙 가득한 양꼬치 전문점입니다.` },
    { key: '오마카세', display: '오마카세', desc: (loc) => `${loc}에서 셰프의 당일 엄선 식재료로 정성스레 이어지는 프리미엄 코스 요리를 즐길 수 있는 곳입니다.` },
    { key: '분식', display: '분식', desc: (loc) => `${loc}에서 떡볶이, 튀김, 순대 등 누구나 사랑하는 친근하고 맛있는 분식을 즐길 수 있습니다.` },
    { key: '혼밥', display: '혼밥 맛집', desc: (loc) => `${loc}에서 주변 눈치 볼 필요 없이 편안한 바 좌석에서 오롯이 식사를 즐길 수 있는 1인 혼밥 명소입니다.` },
    { key: '가성비', display: '가성비 맛집', desc: (loc) => `${loc}에서 착한 가격에 푸짐한 양과 뛰어난 맛을 자랑하는 혜자스러운 가성비 식당입니다.` }
];

const CONVERSATIONAL_STOPWORDS = new Set([
    '이거', '그거', '저거', '여기', '거기', '저기', '이곳', '그곳', '저곳', '요기', '조기',
    '다른', '새로운', '다시', '말고', '제외', '빼고', '바꿔', '변경', '교체',
    '여긴', '거긴', '이건', '그건', '저건', '다른곳', '다른데', '새로', '딴데',
    '여기말고', '이거말고', '저기말고', '거기말고', '이곳말고', '그곳말고',
    '더', '없어', '마음에', '안들어', '가봤어', '가본곳', '봤어', '가봤는데', '갔다왔어',
    '추천', '알려줘', '보여줘', '찾아줘', '골라줘', '부탁해', '해줘', '어때',
    '식당', '맛집', '음식점', '밥집', '술집', '카페', '코스', '가볼만한곳',
    '오늘', '내일', '주말', '저녁', '점심', '아침', '야식', '회식', '데이트'
]);

function extractLocationAndCategory(query) {
    // 1. 대화형 지시어 및 재추천/제외 의도 구문 사전 제거 (예: "여기말고 다른곳", "이거 말고 다시")
    let qClean = query
        .replace(/(여기말고|이거말고|저기말고|거기말고|이곳말고|그곳말고|다른곳|다른데|딴데|새로운곳)/gi, ' ')
        .replace(/(여기\s*말고|이거\s*말고|저기\s*말고|거기\s*말고|이곳\s*말고|그곳\s*말고)/gi, ' ')
        .replace(/(다른\s*곳|다른\s*데|새로운\s*곳|다시\s*추천|다시\s*알려|바꿔\s*줘|골라\s*줘|골라줘|짜줘|부탁해)/gi, ' ')
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
    // 주의: 초|중|고 단독 글자는 어미(~말고, ~하고, ~빼고)와 충돌하므로 초등학교|중학교|고등학교로만 매칭!
    if (!targetLocDisplay) {
        const poiRegex = /([가-힣a-zA-Z0-9]{2,15})(역|터미널|공항|환승센터|선착장|대학교|대학|캠퍼스|초등학교|중학교|고등학교|병원|의료원|스타필드|백화점|아울렛|몰|코엑스|벡스코|킨텍스|예술의전당|미술관|박물관|아트센터|문화회관|영화관|롯데월드|에버랜드|타워|경기장|운동장|체육관|스타디움|공원|유원지|리조트|호텔|골프장|캠핑장|워터파크|스파|온천|해수욕장|해변|포구|항|계곡|폭포|호수|산|봉|섬|단지|지구|거리|골목|시장|특별시|광역시|시|군|구|동|읍|면|리|가|로|길)/;
        const match = qClean.match(poiRegex);
        if (match && !CONVERSATIONAL_STOPWORDS.has(match[0])) {
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

        const words = cleaned.split(/\s+/).filter(w => {
            if (w.length < 2) return false;
            if (CONVERSATIONAL_STOPWORDS.has(w)) return false;
            for (const stop of CONVERSATIONAL_STOPWORDS) {
                if (w === stop || w.startsWith(stop) || w.endsWith(stop)) return false;
            }
            return true;
        });
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
    lastCategoryDisplay: '',
    lastPlaces: [],          // Place names previously recommended
    lastCourseIntent: null,  // { isMultiCourse, cat1Display, cat2Display, step1Req, step2Req, totalReq }
    lastMoodText: '',        // Contextual mood e.g. "비 오는 날 감성에 어울리는 로맨틱한 데이트 코스로 완벽한 "
    lastStep1Places: [],     // Previous 1차 places objects
    lastStep2Places: [],     // Previous 2차 places objects
    lastQuery: '',
    history: []
};

// ─── Location Verifier: Strict Region Boundary Filter ───
function isPlaceInTargetLocation(place, targetLoc) {
    if (!targetLoc || targetLoc === '주변' || targetLoc === '전국' || targetLoc === '요청하신 지역') return true;
    const addr = ((place.road_address_name || '') + ' ' + (place.address_name || '')).toLowerCase();
    const cleanTarget = targetLoc.replace(/(역|동|구|시|군|읍|면|리|동네|인근|근처|주변)$/, '').trim().toLowerCase();
    if (!cleanTarget) return true;

    const AREA_ALIASES = {
        '홍대': ['마포', '서교', '동교', '상수', '합정', '창전', '연남', '홍대'],
        '망원': ['마포', '망원'],
        '상수': ['마포', '상수'],
        '합정': ['마포', '합정', '서교'],
        '연남': ['마포', '연남'],
        '연남동': ['마포', '연남'],
        '신촌': ['서대문', '신촌', '창천', '대현', '노고산', '마포'],
        '이대': ['서대문', '대현', '신촌', '이화'],
        '강남': ['강남', '서초', '역삼', '서초동', '도곡', '논현'],
        '강남역': ['강남', '서초', '역삼', '서초동'],
        '양재': ['서초', '양재'],
        '선릉': ['강남', '역삼', '삼성', '대치'],
        '삼성': ['강남', '삼성', '코엑스'],
        '성수': ['성수', '성동구'],
        '성수동': ['성수', '성동구'],
        '뚝섬': ['성수', '성동구', '뚝섬'],
        '서울숲': ['성수', '성동구', '서울숲'],
        '여의도': ['여의도', '여의동', '영등포'],
        '영등포': ['영등포', '문래', '당산'],
        '문래': ['영등포', '문래동'],
        '당산': ['영등포', '당산'],
        '이태원': ['이태원', '용산', '한남', '보광'],
        '한남': ['용산', '한남', '이태원', '보광'],
        '한남동': ['용산', '한남', '이태원'],
        '용산': ['용산', '한강로', '용리단', '원효'],
        '용리단길': ['용산', '한강로', '용리단'],
        '삼각지': ['용산', '한강로', '삼각지'],
        '종로': ['종로', '관철', '인사', '익선', '묘동', '인의'],
        '을지로': ['중구', '을지로', '초동', '입정동', '산림동', '명동', '충무로'],
        '충무로': ['중구', '충무로', '을지로', '필동'],
        '명동': ['중구', '명동', '을지로'],
        '익선동': ['종로', '익선', '돈의동'],
        '서촌': ['종로', '통의', '통인', '누하', '옥인', '체부', '서촌'],
        '북촌': ['종로', '가회', '계동', '재동', '삼청', '북촌'],
        '삼청동': ['종로', '삼청', '소격', '안국'],
        '안국': ['종로', '안국', '인사동', '삼청'],
        '인사동': ['종로', '인사동', '관훈', '견지'],
        '혜화': ['종로', '혜화', '명륜', '대학로'],
        '대학로': ['종로', '혜화', '명륜', '대학로'],
        '건대': ['광진', '화양', '자양', '건국', '화양동'],
        '잠실': ['송파', '잠실', '신천동', '방이동'],
        '방이동': ['송파', '방이동', '잠실'],
        '송리단길': ['송파', '송파동', '방이동', '잠실', '석촌'],
        '석촌호수': ['송파', '송파동', '방이동', '잠실', '석촌'],
        '압구정': ['강남', '신사', '압구정'],
        '신사': ['강남', '신사', '압구정'],
        '가로수길': ['강남', '신사', '압구정'],
        '청담': ['강남', '청담'],
        '샤로수길': ['관악', '봉천', '낙성대', '서울대'],
        '서울대입구': ['관악', '봉천', '낙성대', '서울대'],
        '판교': ['분당', '판교', '백현', '삼평', '운중', '성남'],
        '분당': ['분당', '정자', '서현', '야탑', '수내', '미금', '성남'],
        '정자': ['분당', '정자', '성남'],
        '서현': ['분당', '서현', '성남'],
        '야탑': ['분당', '야탑', '성남'],
        '수원': ['수원', '팔달', '영통', '장안', '권선'],
        '인계동': ['수원', '인계', '팔달'],
        '행궁동': ['수원', '행궁', '팔달', '신풍', '장안'],
        '일산': ['고양', '일산', '백석', '마두', '주엽', '대화'],
        '송도': ['인천', '연수', '송도'],
        '부평': ['인천', '부평'],
        '구월동': ['인천', '남동', '구월'],
        '해운대': ['부산', '해운대', '우동', '중동', '좌동', '송정'],
        '광안리': ['부산', '수영', '광안', '민락'],
        '서면': ['부산', '부산진', '부전', '전포', '범천'],
        '전포': ['부산', '부산진', '전포', '서면'],
        '동성로': ['대구', '중구', '동성로', '삼덕', '봉산', '공평'],
        '교동': ['대구', '중구', '교동'],
        '동명동': ['광주', '동구', '동명'],
        '상무지구': ['광주', '서구', '치평', '상무'],
        '둔산동': ['대전', '서구', '둔산', '탄방'],
        '봉명동': ['대전', '유성', '봉명'],
        '객리단길': ['전주', '완산', '고사', '다가'],
        '한옥마을': ['전주', '완산', '풍남', '교동'],
        '황리단길': ['경주', '황남', '사정', '포석'],
        '제주': ['제주', '애월', '서귀포', '한림', '조천', '구좌', '안덕'],
        '서귀포': ['서귀포', '중문', '성산', '안덕']
    };

    const aliases = AREA_ALIASES[cleanTarget] || AREA_ALIASES[targetLoc.toLowerCase()];
    if (aliases) {
        return aliases.some(alias => addr.includes(alias.toLowerCase()));
    }

    return addr.includes(cleanTarget);
}

// ─── Category Match Validator ───
function isPlaceMatchingCategory(place, targetCat) {
    if (!targetCat || targetCat === '맛집' || targetCat === '식당' || targetCat === '음식점') return true;
    const catName = (place.category_name || '').toLowerCase();
    const pName = (place.place_name || '').toLowerCase();
    const catGroup = place.category_group_code || '';
    const cleanCat = targetCat.toLowerCase();

    if (/카페|커피|디저트|베이커리|빵집/.test(cleanCat)) {
        return catGroup === 'CE7' || /카페|커피|디저트|베이커리|제과|다방|빙수/.test(catName) || /카페|커피|베이커리|디저트/.test(pName);
    }
    if (/고기|삼겹살|소고기|갈비|한우|곱창|막창|구이/.test(cleanCat)) {
        return /육류|고기|삼겹살|갈비|소고기|한우|곱창|막창|대창|구이|정육/.test(catName) || /갈비|삼겹살|고기|한우|정육|곱창/.test(pName);
    }
    if (/양식|파스타|피자|스테이크|이탈리안|프렌치|버거|브런치/.test(cleanCat)) {
        return /양식|이탈리안|프렌치|패밀리레스토랑|스테이크|파스타|피자|버거|브런치/.test(catName) || /파스타|피자|비스트로|버거|스테이크|키친|다이닝/.test(pName);
    }
    if (/일식|초밥|스시|라멘|돈까스|돈가스|우동|사시미|회/.test(cleanCat)) {
        return /일식|초밥|스시|라멘|돈가스|돈까스|우동|사시미|회|횟집/.test(catName) || /스시|초밥|라멘|카츠|돈까스|이자카야/.test(pName);
    }
    if (/중식|중국집|짜장|짬뽕|마라|딤섬|양꼬치/.test(cleanCat)) {
        return /중식|중국요리|마라|딤섬|양꼬치/.test(catName) || /반점|짬뽕|짜장|마라탕|양꼬치/.test(pName);
    }
    if (/술집|주점|맥주|호프|와인|소주|이자카야|포차|바\b|펍/.test(cleanCat)) {
        return /술집|주점|호프|맥주|와인|이자카야|포장마차|바\(bar\)|칵테일/.test(catName) || /주점|술집|포차|펍|와인|이자카야|비어/.test(pName);
    }
    if (/한식|국물|해장|순대|국밥|찌개|백반|한정식/.test(cleanCat)) {
        return /한식|국밥|해장국|순대|찌개|탕|백반|한정식|국수/.test(catName) || /식당|국밥|해장|순대|옥|식당/.test(pName);
    }
    return catName.includes(cleanCat) || pName.includes(cleanCat);
}

// ─── Sommelier Culinary Category Classifier (Actual Place Data First) ───
function getPlaceCulinaryCategory(place, fallbackRole) {
    const rawCat = (place.category_name || '').toLowerCase();
    const rawName = (place.place_name || '').toLowerCase();
    const combined = rawCat + ' ' + rawName;

    // 1. Meat / BBQ / Grill / Tripe
    if (/곱창|대창|막창|특양/.test(combined)) return 'gopchang';
    if (/고기|삼겹|갈비|한우|구이|목살|정육|바베큐|차돌|양꼬치|숯불|화로|육류|불고기|제육|스테이크하우스/.test(combined)) return 'meat';

    // 2. Cafe / Coffee / Dessert / Bakery
    if (/카페|커피|디저트|베이커리|베이글|빙수|찻집|마카롱|케이크|도넛|구움과자|크로플|에스프레소|와플|다과/.test(combined)) return 'cafe';

    // 3. Wine / Cocktail / Dining Bar
    if (/와인|바\(bar\)|칵테일|위스키|비스트로|다이닝바|몰트|라운지/.test(combined)) return 'wine';

    // 4. Pub / Izakaya / Beer / Pocha
    if (/이자카야|주점|호프|맥주|펍|포차|요리주점|실내포장마차|야키토리|어묵바|술집|선술집/.test(combined)) return 'pub';

    // 5. Western / Pasta / Pizza / Steak / Italian
    if (/양식|파스타|피자|스테이크|이탈리안|프렌치|버거|뇨끼|리조또|브런치|라자냐/.test(combined)) return 'western';

    // 6. Japanese / Sushi / Sashimi / Ramen / Katsu
    if (/일식|초밥|스시|사시미|라멘|돈카츠|돈까스|소바|우동|카이센동|오마카세|가츠동|텐동|츠케멘/.test(combined)) return 'japanese';

    // 7. Chinese / Dimsum / Mala
    if (/중식|중국집|중화|짜장|짬뽕|탕수육|마라|딤섬|소룡포|꿔바로우|만두|양꼬치/.test(combined)) return 'chinese';

    // 8. Seafood / Fish / Raw Fish / Shellfish
    if (/해물|생선|횟집|조개|게장|아구|장어|조개구이|해산물|낙지|문어|쭈꾸미/.test(combined)) return 'seafood';

    // 9. Korean Stew / Soup / Gukbap / Hansik
    if (/한식|백반|국밥|설렁탕|곰탕|해장국|찌개|탕|순대국|갈비탕|보쌈|족발|전통|가정식|감자탕|칼국수|냉면|수제비/.test(combined)) return 'korean';

    // 10. Asian / Mexican / Exotic
    if (/멕시칸|타코|태국|베트남|쌀국수|아시안|인도|커리|남미/.test(combined)) return 'asian_exotic';

    // 11. Role-based fallback ONLY if place category is completely unknown
    if (fallbackRole) {
        const f = fallbackRole.toLowerCase();
        if (/고기|삼겹|한우|갈비/.test(f)) return 'meat';
        if (/곱창|대창/.test(f)) return 'gopchang';
        if (/카페|커피|디저트|베이커리/.test(f)) return 'cafe';
        if (/와인/.test(f)) return 'wine';
        if (/술집|맥주|이자카야|주점|호프/.test(f)) return 'pub';
        if (/양식|파스타|스테이크|피자/.test(f)) return 'western';
        if (/일식|초밥|스시|라멘/.test(f)) return 'japanese';
        if (/중식|중국/.test(f)) return 'chinese';
        if (/해물|회|횟집/.test(f)) return 'seafood';
        if (/한식|국물|밥/.test(f)) return 'korean';
    }

    return 'general';
}

// ─── 3-Stage Dynamic Sommelier Culinary Description Engine ───
function generateSmartSommelierDescription(place, role, moodText, locDisplay) {
    const pName = place.place_name || '';
    const hash = Math.abs(hashString(pName));
    const roleText = (role || '').toLowerCase();
    const culCat = getPlaceCulinaryCategory(place, role);

    // 1. Signature Taste & Culinary Profile
    let tasteSentence = '';
    const tasteProfiles = {
        meat: [
            '엄선된 상위 등급 원육을 최적의 온도로 숙성하여 깊은 육향과 풍부한 육즙의 진수를 맛볼 수 있는 프리미엄 육류 전문점입니다.',
            '철저한 저온 숙성을 거쳐 부드러운 육질과 고소한 감칠맛이 일품이며, 정갈한 밑반찬과 특제 소스의 조화가 돋보입니다.',
            '신선한 원육 본연의 풍미를 숯불 직화로 온전히 살려내어, 겉은 바삭하고 속은 촉촉한 완벽한 굽기를 자랑하는 직화 구이 명소입니다.'
        ],
        gopchang: [
            '잡내 없이 깔끔하게 손질된 신선한 곱창을 뜨거운 돌판 위에서 노릇하게 구워내, 고소한 곱과 쫄깃한 식감이 일품인 곳입니다.',
            '풍부한 육즙과 녹진하고 부드러운 대창 구이의 진수를 경험할 수 있으며, 새콤매콤한 부추무침과의 궁합이 환상적입니다.'
        ],
        cafe: [
            '스페셜티 등급의 싱글 오리진 원두를 섬세하게 추출한 향긋한 커피와 매일 아침 구워내는 수제 구움과자의 밸런스가 뛰어난 공간입니다.',
            '풍미 짙은 시그니처 크림 라떼와 달콤하고 부드러운 핸드메이드 디저트를 즐기며 여유로운 대화를 나누기 완벽한 감성 카페입니다.',
            '감각적인 인테리어와 함께 제철 과일을 듬뿍 올린 프리미엄 타르트 및 페이스트리가 눈과 입을 동시에 사로잡는 디저트 명소입니다.'
        ],
        wine: [
            '소믈리에가 엄선한 다채로운 컨벤셔널 및 내추럴 와인 셀렉션과 와인의 풍미를 돋워주는 섬세한 타파스 페어링이 매력적인 로맨틱 와인바입니다.',
            '차분한 조도와 감각적인 오브제가 돋보이는 공간에서, 부드러운 바디감의 와인 한잔과 함께 깊이 있는 대화를 나누기 최적인 곳입니다.'
        ],
        pub: [
            '신선한 제철 식재료로 정성스럽게 조리한 수준 높은 수제 안주와 시원한 생맥주·하이볼의 페어링이 돋보이는 감성 주점입니다.',
            '은은한 불향이 배어있는 야키토리 꼬치구이와 따끈하고 깊은 맛의 나베 요리가 어우러져 한잔 기울이기 완벽한 밤의 온기를 전해줍니다.',
            '국내외 크래프트 비어와 정갈한 핑거푸드가 준비된 트렌디한 공간으로, 가볍고 유쾌한 2차 분위기를 만끽하기에 안성맞춤입니다.'
        ],
        western: [
            '알덴테로 삶아낸 생면 파스타에 신선한 식재료와 깊은 풍미의 소스가 빈틈없이 어우러지는 세련된 이탈리안 비스트로입니다.',
            '참나무 장작 화덕에서 고온으로 빠르게 구워내 겉은 바삭하고 속은 쫄깃한 도우 위에 신선한 치즈와 토핑이 듬뿍 올라간 정통 피자입니다.',
            '최상급 소고기를 완벽한 시어링으로 구워내 풍부한 육즙과 부드러운 식감이 돋보이는 프리미엄 스테이크를 경험할 수 있습니다.'
        ],
        japanese: [
            '숙성회의 찰진 감칠맛과 고슬고슬하게 쥔 샤리의 온도가 완벽한 밸런스를 이루는 정통 스시 명소입니다.',
            '장시간 푹 고아낸 깊고 진한 특제 육수와 쫄깃한 생면, 부드러운 차슈가 감탄을 자아내는 정통 라멘 전문점입니다.',
            '두툼한 프리미엄 원육을 저온에서 튀겨내 겉은 바삭하고 속은 선홍빛 육즙이 가득한 정통 카츠의 진수를 맛볼 수 있습니다.'
        ],
        chinese: [
            '불맛이 살아있는 정통 웍 요리와 겉은 바삭하고 속은 쫀득한 꿔바로우, 깊고 칼칼한 육수가 일품인 짬뽕을 즐길 수 있는 중식 명가입니다.',
            '얇고 투명한 만두피 속에 육즙이 가득 찬 소룡포와 하가우 등 섬세하게 빚은 정통 딤섬의 매력을 만끽할 수 있는 곳입니다.'
        ],
        seafood: [
            '당일 산지 직송된 신선한 활어회를 두툼하게 썰어내어 차진 식감과 바다 본연의 달큰한 감칠맛을 오롯이 느낄 수 있는 해산물 명소입니다.',
            '신선한 제철 해산물과 시원 칼칼한 조개탕이 어우러져 한잔 곁들이기에도 속을 달래기에도 최적인 곳입니다.'
        ],
        korean: [
            '정성 들여 고아낸 진한 육수와 푸짐한 건더기가 속을 든든하고 따뜻하게 채워주는 손맛 가득한 정통 한식당입니다.',
            '신선한 제철 식재료로 정갈하게 차려낸 기본 찬과 감칠맛 넘치는 뚝배기 요리가 편안하고 기분 좋은 한 끼를 완성해 줍니다.'
        ],
        asian_exotic: [
            '이국적인 향신료와 신선한 허브의 풍미가 어우러져 한입 가득 다채롭고 산뜻한 미식의 향연을 선사하는 이색 맛집입니다.'
        ],
        general: [
            `${locDisplay}에서 검증된 정갈한 손맛과 신선한 재료로 호불호 없이 만족스러운 식사를 선사하는 인기 맛집입니다.`
        ]
    };

    const pool = tasteProfiles[culCat] || tasteProfiles.general;
    tasteSentence = pool[hash % pool.length];

    // 2. Ambiance & Mood Context
    let ambianceSentence = '';
    const isRainy = /비\s*오는|비오는|비올때|우천|비\s*내리는/i.test(moodText);
    const isDate = /데이트|연인|커플|소개팅/i.test(moodText);
    const isSolo = /혼밥|혼자/i.test(moodText);
    const isParty = /회식|모임|단체|동기/i.test(moodText);

    if (isRainy) {
        if (culCat === 'meat' || culCat === 'gopchang') {
            ambianceSentence = '창밖 빗소리와 함께 지글지글 피어오르는 숯불의 훈연향이 더해져 더욱 운치 있고 아늑한 분위기를 자아냅니다.';
        } else if (culCat === 'cafe' || culCat === 'wine') {
            ambianceSentence = '비 내리는 날씨 특유의 감성과 은은한 조명이 어우러져 창밖 풍경을 바라보며 깊은 여유를 즐기기 좋습니다.';
        } else if (culCat === 'pub') {
            ambianceSentence = '비 오는 날 시원한 한잔과 따뜻한 요리를 곁들이며 도란도란 이야기를 나누기에 더할 나위 없습니다.';
        } else {
            ambianceSentence = '비 오는 날 특유의 차분하고 운치 있는 무드가 더해져 머무는 시간 내내 편안한 힐링을 선사합니다.';
        }
    } else if (isDate) {
        ambianceSentence = '은은하고 따뜻한 웜톤 조명과 감각적인 인테리어가 어우러져 동행인과 로맨틱한 분위기를 만끽하기에 완벽합니다.';
    } else if (isSolo) {
        ambianceSentence = '주변 시선 부담 없이 오롯이 나만의 미식에 집중할 수 있는 편안하고 아늑한 좌석 구조를 갖추고 있습니다.';
    } else if (isParty) {
        ambianceSentence = '테이블 간격이 여유롭고 쾌적한 공간 배치가 돋보여 소중한 분들과 편안한 대화를 나누며 모임을 가지기에 훌륭합니다.';
    } else {
        ambianceSentence = '깔끔하고 정돈된 내부 공간과 아늑한 좌석 배치로 편안하게 머무르실 수 있습니다.';
    }

    // 3. Course Transit Flow
    let flowSentence = '';
    if (roleText.includes('1차')) {
        flowSentence = '든든하게 메인 식사를 즐긴 후 인근 카페나 산책 코스로 가볍게 발걸음을 옮기기 편리한 동선입니다.';
    } else if (roleText.includes('2차')) {
        flowSentence = '1차 식사 후 부담 없이 도보로 이동하여, 달콤한 디저트나 가벼운 한잔과 함께 하루를 완벽하게 마무리할 수 있습니다.';
    } else {
        flowSentence = '접근성이 뛰어나 인근 골목 산책이나 주변 카페 및 문화 공간으로의 동선 연계가 매우 훌륭합니다.';
    }

    return `${tasteSentence} ${ambianceSentence} ${flowSentence}`;
}

function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}

// ─── Sommelier Course Guide Tips Generator ───
function generateSommelierTips(list1, list2, locDisplay, moodText, isMultiCourse) {
    const tips = [];
    const isRainy = /비\s*오는|비오는|비올때|우천|비\s*내리는/i.test(moodText);
    const isDate = /데이트|연인|커플|소개팅/i.test(moodText);
    const isParty = /회식|모임|단체|동기/i.test(moodText);
    const isSolo = /혼밥|혼자/i.test(moodText);

    if (isMultiCourse && list1 && list1.length > 0 && list2 && list2.length > 0) {
        if (isRainy) {
            tips.push('동선 안내: 1차 식사 장소에서 2차 매장까지 도보 5분에서 10분 내외로 비 오는 날에도 우산 쓰고 낭만 있게 걷기 최적의 코스입니다.');
            tips.push('웨이팅 팁: 비 오는 날에는 매장 앞 대기 공간이 협소할 수 있으니 캐치테이블 원격 줄서기나 사전 유선 확인을 권장합니다.');
            tips.push('코스 팁: 1차 식사를 마치기 약 15분 전 2차 매장의 현장 여유 좌석을 미리 확인하시면 비를 맞지 않고 매끄럽게 입장하실 수 있습니다.');
        } else if (isDate) {
            tips.push('동선 안내: 1차 식사 장소에서 2차 매장까지 도보 5분에서 10분 내외로 산책하며 대화 나누기 좋은 최적의 데이트 동선입니다.');
            tips.push('예약 팁: 창가 자리나 분위기 좋은 2인석은 당일 조기 마감될 수 있으니 네이버 지도 예약 또는 캐치테이블을 활용해 보세요.');
            tips.push('코스 팁: 1차 식사를 마치기 전 2차 매장의 잔여 좌석을 미리 확인하시면 흐름이 끊기지 않는 완벽한 데이트가 완성됩니다.');
        } else if (isParty) {
            tips.push('동선 안내: 1차 장소와 2차 매장이 동일 역세권 도보권에 인접하여 단체 인원 이동 시에도 부담이 없습니다.');
            tips.push('좌석 팁: 단체 인원 방문 시 사전 전화 문의를 통해 테이블 연결 및 룸 배정 가능 여부를 미리 조율하시는 것을 추천합니다.');
            tips.push('결제 팁: 분할 결제나 법인카드 영수증 처리가 필요하신 경우 주문 시 미리 말씀하시면 원활합니다.');
        } else {
            tips.push('동선 안내: 1차 식사 장소에서 2차 매장까지 도보 5분에서 10분 내외로 여유롭게 이동하실 수 있는 최적의 동선입니다.');
            tips.push('웨이팅 팁: 피크시간대인 18시부터 20시 사이에는 대기가 발생할 수 있으니 캐치테이블 원격 줄서기나 사전 유선 확인을 권장합니다.');
            tips.push('코스 팁: 1차 매장에서 식사를 마치기 약 15분 전 2차 매장의 현장 여유 좌석을 미리 확인하시면 더욱 매끄러운 코스가 완성됩니다.');
        }
    } else {
        if (isSolo) {
            tips.push('혼밥 팁: 식사 피크시간인 12시에서 13시, 18시에서 19시를 살짝 피해 방문하시면 한층 더 여유롭고 조용한 식사를 즐기실 수 있습니다.');
            tips.push('주문 팁: 매장 앞 키오스크가 마련되어 있어 혼자서도 부담 없이 간편하게 주문이 가능합니다.');
            tips.push('좌석 팁: 1인 바 테이블이 마련되어 있어 주변 시선 없이 편안하게 식사에 집중하실 수 있습니다.');
        } else if (isRainy) {
            tips.push('날씨 팁: 비 오는 날에는 대기 등록 후 인근 카페나 실내 대기 공간에서 순서를 기다리시는 것을 권장합니다.');
            tips.push('방문 팁: 주말이나 우천 시 예약 손님이 많을 수 있으니 방문 전 네이버 지도 예약 가능 여부를 확인하시면 좋습니다.');
            tips.push('주차 및 교통: 빗길 골목 주차가 혼잡할 수 있으니 가급적 대중교통 또는 인근 지하철역 공영주차장 이용을 추천합니다.');
        } else if (isDate) {
            tips.push('데이트 팁: 감성적인 인테리어와 조명이 매력적인 곳으로, 사전 예약 시 분위기 좋은 자리를 요청하시면 더욱 만족스럽습니다.');
            tips.push('웨이팅 팁: 인기 매장의 경우 캐치테이블이나 테이블링을 통한 온라인 대기 등록이 가능합니다.');
            tips.push('동선 팁: 식사 전후로 인근 골목의 개성 있는 쇼룸이나 산책로를 가볍게 둘러보기에 아주 좋습니다.');
        } else {
            tips.push('방문 팁: 주말 및 공휴일에는 예약 손님이 많을 수 있으니 방문 전 네이버 지도 예약 가능 여부를 확인하시면 좋습니다.');
            tips.push('주차 및 교통: 번화가 골목 특성상 인근 공영주차장 이용 또는 대중교통 이용을 추천해 드립니다.');
            tips.push('주문 팁: 대표 시그니처 메뉴와 제철 시즌 메뉴를 조합하시면 만족스러운 한 상을 즐기실 수 있습니다.');
        }
    }

    const titleText = isMultiCourse ? '💡 소믈리에 코스 가이드' : '💡 소믈리에 방문 가이드';
    const itemsHtml = tips.map(t => `<li>• ${escapeHtml(t)}</li>`).join('');
    return `
        <div class="sommelier-tips-box">
            <div class="tips-title">${titleText}</div>
            <ul class="tips-list">
                ${itemsHtml}
            </ul>
        </div>
    `;
}

// ─── Multi-Course & Multi-Category Extraction Helper ───
function extractCourseIntent(query) {
    const q = query.toLowerCase();

    // 1. Explicit 1차 ... 2차 ... pattern
    const has1cha = query.includes('1차');
    const has2cha = query.includes('2차');
    if (has1cha && has2cha) {
        const part1 = (query.split('1차')[1] || '').split(/[12]차/)[0];
        const part2 = (query.split('2차')[1] || '').split(/[12]차/)[0];

        const m1 = part1.match(/([두세네다섯여섯일이삼사오육칠팔구십1-9]+)\s*(곳|개|선|군데)/i);
        const m2 = part2.match(/([두세네다섯여섯일이삼사오육칠팔구십1-9]+)\s*(곳|개|선|군데)/i);
        const c1 = m1 ? (parseKoreanNumber(m1[1]) || 1) : 1;
        const c2 = m2 ? (parseKoreanNumber(m2[1]) || 1) : 1;

        let cat1 = null, cat2 = null;
        for (const cat of FOOD_CATEGORIES) {
            if (!cat1 && part1.toLowerCase().includes(cat.key.toLowerCase())) cat1 = cat.display;
            if (!cat2 && part2.toLowerCase().includes(cat.key.toLowerCase())) cat2 = cat.display;
        }
        return {
            isMultiCourse: true,
            cat1Display: cat1 || '식사',
            cat2Display: cat2 || '카페',
            step1Req: c1,
            step2Req: c2,
            totalReq: c1 + c2
        };
    }

    // 2. Dual Category with count pattern: e.g. "성수 카페 2곳 저녁 2곳", "고기 2곳 카페 1곳", "밥집 2개 술집 1개"
    const dualCountMatch = query.match(/([가-힣a-zA-Z0-9]+)\s*([두세네다섯여섯일이삼사오육칠팔구십1-9]+)\s*(곳|개|선|군데)[,\s+&/및이랑와과~]+\s*([가-힣a-zA-Z0-9]+)\s*([두세네다섯여섯일이삼사오육칠팔구십1-9]+)\s*(곳|개|선|군데)/i);
    if (dualCountMatch) {
        const rawWord1 = dualCountMatch[1];
        const c1 = parseKoreanNumber(dualCountMatch[2]) || 1;
        const rawWord2 = dualCountMatch[4];
        const c2 = parseKoreanNumber(dualCountMatch[5]) || 1;

        let cat1 = null, cat2 = null;
        if (/저녁|점심|식사|밥|밥집|식당/.test(rawWord1)) cat1 = '맛집';
        else {
            for (const cat of FOOD_CATEGORIES) {
                if (rawWord1.includes(cat.key)) { cat1 = cat.display; break; }
            }
        }
        if (/저녁|점심|식사|밥|밥집|식당/.test(rawWord2)) cat2 = '맛집';
        else {
            for (const cat of FOOD_CATEGORIES) {
                if (rawWord2.includes(cat.key)) { cat2 = cat.display; break; }
            }
        }

        if (cat1 && cat2) {
            return {
                isMultiCourse: true,
                cat1Display: cat1,
                cat2Display: cat2,
                step1Req: c1,
                step2Req: c2,
                totalReq: c1 + c2
            };
        }
    }

    // 3. Plus/Combination with count (e.g. "양식 + 디저트", "고기 + 카페")
    if (query.includes('+') || query.includes('하고') || query.includes('먹고')) {
        let foundCats = [];
        for (const cat of FOOD_CATEGORIES) {
            if (q.includes(cat.key.toLowerCase())) {
                foundCats.push(cat.display);
            }
        }
        foundCats = Array.from(new Set(foundCats));
        if (foundCats.length >= 2) {
            const mTotal = query.match(/([두세네다섯여섯일이삼사오육칠팔구십1-9]+)\s*(곳|개|선)/i);
            const each = mTotal ? (parseKoreanNumber(mTotal[1]) || 1) : 1;
            return {
                isMultiCourse: true,
                cat1Display: foundCats[0],
                cat2Display: foundCats[1],
                step1Req: each,
                step2Req: each,
                totalReq: each * 2
            };
        }
    }

    // 4. Single Category
    const mTotal = query.match(/([두세네다섯여섯일이삼사오육칠팔구십1-9]+)\s*(곳|개|선)/i);
    const count = mTotal ? (parseKoreanNumber(mTotal[1]) || 2) : 2;
    return {
        isMultiCourse: false,
        cat1Display: null,
        cat2Display: null,
        step1Req: null,
        step2Req: null,
        totalReq: count
    };
}
function processSommelierQuery(query, callback) {
    const q = query.toLowerCase();
    const DEFAULT_GEMINI_KEY = atob('QVEuQWI4Uk42S3lSZElqVjBoaHRBUVhkTThYUVBvSlMyZHpBblExUjdwRjFsejZ4amsyUlE=');
    const geminiKey = localStorage.getItem('spoonmap_gemini_key') || DEFAULT_GEMINI_KEY;

    // ─── Multi-turn Intent Detection ───
    const isExcludeReRec = /여기 말고|여기말고|이거 말고|이거말고|다른 곳|다른곳|다른 데|다른데|딴데|다시 추천|다시 알려|다시|바꿔|더 없어|더 보여|제외|말고|새로운|가봤|가본/i.test(query);
    const isStep2Only = /2차만|술집만|카페만|디저트만/i.test(query);
    const isStep1Only = /1차만|밥집만|식당만|고기집만|양식만/i.test(query);
    const isMenuTips = /메뉴|뭐 시켜|대표메뉴|시그니처|꿀팁|조합|주문/i.test(query);
    const isWalkingRoute = /도보|걸어서|동선|거리|근처|역에서|가까운/i.test(query);
    const isFeatures = /주차|발렛|룸|개별룸|방|예약|캐치테이블|웨이팅|대기/i.test(query);
    const isBudget = /예산|가성비|인당|만원|가격|고급|오마카세|파인다이닝/i.test(query);

    // ─── Mood Detection ───
    let moodKeywords = [];
    if (/비\s*오는|비오는|비올때|우천|비\s*내리는/i.test(query)) moodKeywords.push('비 오는 날 운치에 어울리는');
    if (/데이트|연인|커플|소개팅/i.test(query)) moodKeywords.push('로맨틱한 데이트 코스로 완벽한');
    if (/회식|모임|단체|동기/i.test(query)) moodKeywords.push('즐거운 모임과 회식에 적합한');
    if (/혼밥|혼자/i.test(query)) moodKeywords.push('편안하게 혼밥을 즐기기 좋은');
    let moodText = moodKeywords.length > 0 ? (moodKeywords.join(' ') + ' ') : '';

    if (!moodText && isExcludeReRec && window.sommelierContext.lastMoodText) {
        moodText = window.sommelierContext.lastMoodText;
    }
    if (moodText) {
        window.sommelierContext.lastMoodText = moodText;
    }

    // ─── Unified Multi-Course & Multi-Category Extraction ───
    let courseIntent = extractCourseIntent(query);
    let isMultiCourse = courseIntent.isMultiCourse;
    let cat1Display = courseIntent.cat1Display;
    let cat2Display = courseIntent.cat2Display;
    let step1Req = courseIntent.step1Req;
    let step2Req = courseIntent.step2Req;
    let totalReq = courseIntent.totalReq;

    // ─── Location & Category Extraction (With Dynamic Extractor & Memory) ───
    let { targetLoc, targetLocDisplay, mainCat, mainCatDisplay, catDescFn } = extractLocationAndCategory(query);

    // Inherit courseIntent if user asks follow-up (e.g. "여기말고 다른곳 추천해줘")
    if (!isMultiCourse && !mainCat && (isExcludeReRec || isStep1Only || isStep2Only) && window.sommelierContext.lastCourseIntent && window.sommelierContext.lastCourseIntent.isMultiCourse) {
        courseIntent = { ...window.sommelierContext.lastCourseIntent };
        isMultiCourse = courseIntent.isMultiCourse;
        cat1Display = courseIntent.cat1Display;
        cat2Display = courseIntent.cat2Display;
        step1Req = courseIntent.step1Req;
        step2Req = courseIntent.step2Req;
        totalReq = courseIntent.totalReq;
        console.log(`[Spoonmap Multi-turn] Inheriting course structure: 1차 ${cat1Display} ${step1Req}곳 + 2차 ${cat2Display} ${step2Req}곳`);
    }

    // Inherit previous location & category if user is asking a follow-up
    if (!targetLocDisplay && window.sommelierContext.lastLocation) {
        targetLocDisplay = window.sommelierContext.lastLocation;
        console.log(`[Spoonmap Multi-turn] Inheriting previous location: ${targetLocDisplay}`);
    }

    if (!mainCatDisplay && !isMultiCourse && window.sommelierContext.lastCategoryDisplay) {
        mainCatDisplay = window.sommelierContext.lastCategoryDisplay;
        console.log(`[Spoonmap Multi-turn] Inheriting previous category: ${mainCatDisplay}`);
    }

    const locSearch = targetLocDisplay || '';
    const locDisplay = targetLocDisplay || '요청하신 지역';

    // Update Context Location & Category & Course Intent
    if (targetLocDisplay) {
        window.sommelierContext.lastLocation = targetLocDisplay;
    }
    if (isMultiCourse) {
        window.sommelierContext.lastCategoryDisplay = `${cat1Display} & ${cat2Display}`;
        window.sommelierContext.lastCourseIntent = {
            isMultiCourse: true,
            cat1Display,
            cat2Display,
            step1Req,
            step2Req,
            totalReq
        };
    } else {
        if (mainCatDisplay || cat1Display) {
            window.sommelierContext.lastCategoryDisplay = mainCatDisplay || cat1Display;
        }
        window.sommelierContext.lastCourseIntent = {
            isMultiCourse: false,
            cat1Display: null,
            cat2Display: null,
            step1Req: null,
            step2Req: null,
            totalReq: totalReq || 2
        };
    }

    // ─── Source Preference ───
    const hasKakaoKeywords = q.includes('카카오') || q.includes('실시간') || q.includes('안가본') || q.includes('새로운');
    const hasLocalKeywords = q.includes('내 맛집') || q.includes('내가 간') || q.includes('단골') || q.includes('저장된') || q.includes('내 데이터') || q.includes('또간집') || q.includes('5수저');
    
    // Auth Check for Private Data Queries
    if (!isOwnerUser() && hasLocalKeywords) {
        callback({
            html: `<div class="sommelier-intro-p">
                🔒 <b>나만의 또간집 및 저장 맛집 연동 추천</b>은 카카오 로그인 후 이용하실 수 있습니다.<br><br>
                상단 헤더의 <b>[💬 로그인]</b> 버튼을 누르시면 회원님의 미식 데이터와 연동된 맞춤 추천을 바로 받아보실 수 있습니다! 🍷✨
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

            // Build Multi-turn Instructions & filter fresh places
            const previousPlacesList = window.sommelierContext.lastPlaces || [];

            const filterFreshPlaces = (places) => {
                if (!previousPlacesList.length) return places;
                const filtered = places.filter(p => {
                    const pName = (p.place_name || '').replace(/\s+/g, '');
                    return !previousPlacesList.some(prev => {
                        const cleanPrev = (prev || '').replace(/\s+/g, '');
                        return cleanPrev.includes(pName) || pName.includes(cleanPrev);
                    });
                });
                return filtered.length > 0 ? filtered : places;
            };

            const freshKakao1 = filterFreshPlaces(kakaoPlaces1);
            const freshKakao2 = isMultiCourse ? filterFreshPlaces(kakaoPlaces2) : [];

            const kakaoData1Str = JSON.stringify(freshKakao1.slice(0, 8).map(p => ({ 이름: p.place_name, 주소: p.road_address_name || p.address_name, 카테고리: p.category_name, url: p.place_url })));
            const kakaoData2Str = isMultiCourse
                ? JSON.stringify(freshKakao2.slice(0, 8).map(p => ({ 이름: p.place_name, 주소: p.road_address_name || p.address_name, 카테고리: p.category_name, url: p.place_url })))
                : '[]';

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
- 분위기 및 상황: ${moodText || '일반 미식 큐레이션'}
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
4. 각 식당 설명: 실제 상호명의 대표 시그니처 메뉴, 실제 방문자 리뷰 핵심 호평 포인트, 분위기, 추천 이유를 사실에 근거하여 2-3문장으로 전문성 있고 품격 있게 작성할 것. (식당 카테고리에 맞는 정확한 설명 필수, 카페가 아닌 일반 식당이나 고기집에 커피/디저트 설명을 적지 말 것)
5. 반드시 아래 HTML 구조로만 출력:

<div class="sommelier-intro-p">따뜻하고 친근한 소개 문구 (2-3문장, 사용자의 요청 조건 완벽 반영 언급)</div>

각 장소마다 아래 카드 구조 사용 (태그와 제목 등에 괄호 사용 금지):
<div class="rec-card-standard">
    <span class="rec-tag-pill">추천 번호 · 카테고리 (예: 1차 · 삼겹살구이 또는 추천 1 · 파스타)</span>
    <h4 class="rec-place-title">실제 매장 이름</h4>
    <div class="rec-place-meta">📍 <b>위치:</b> 실제 도로명 주소</div>
    <p class="rec-place-desc">대표 메뉴 맛, 실제 방문자 리뷰 핵심 포인트, 분위기, 추천 이유를 2-3문장으로 상세히 설명</p>
    <a href="실제카카오맵URL" target="_blank" class="rec-kakao-pill-btn">👈 카카오맵</a>
</div>

6. 카드 목록 출력 후, 맨 마지막에 방문객을 위한 소믈리에 가이드 박스를 아래 HTML 구조로 반드시 추가할 것 (모든 항목에서 괄호 절대 사용 금지):
<div class="sommelier-tips-box">
    <div class="tips-title">💡 ${isMultiCourse ? '소믈리에 코스 가이드' : '소믈리에 방문 가이드'}</div>
    <ul class="tips-list">
        <li>• 동선 안내: 1차 및 2차 이동 동선 또는 역세권 접근성 팁</li>
        <li>• 웨이팅 팁: 예약 및 피크시간 대기 요령</li>
        <li>• 추천 꿀팁: 상황 및 날씨에 어울리는 유용한 팁</li>
    </ul>
</div>`;

            const modelsToTry = [
                'gemini-3.5-flash-lite',
                'gemini-3.1-flash-lite'
            ];

            const MAX_RETRIES_PER_MODEL = 1; // 503 순간 과부하 발생 시 1회 재시도 (소중한 3.6-flash 쿼터 보존)

            function attemptModel(idx, retryCount = 0) {
                if (idx >= modelsToTry.length) {
                    console.warn('[Spoonmap] All Gemini models failed. Falling back to local parser.');
                    processSommelierFallbackOnly(query, callback);
                    return;
                }
                const model = modelsToTry[idx];
                console.log(`[Spoonmap] Trying Gemini model: ${model} (attempt: ${retryCount + 1})`);

                const handleFail = (status, errData) => {
                    if ((status === 503 || status === 429) && retryCount < MAX_RETRIES_PER_MODEL) {
                        console.warn(`[Spoonmap] Model ${model} HTTP ${status}. Retrying in 1s (attempt ${retryCount + 2})...`, errData);
                        setTimeout(() => attemptModel(idx, retryCount + 1), 1000);
                    } else {
                        console.warn(`[Spoonmap] Model ${model} failed, moving to next model:`, errData);
                        attemptModel(idx + 1, 0);
                    }
                };

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
                            handleFail(res.status, errData);
                        }).catch(() => {
                            handleFail(res.status, 'No JSON error body');
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

                        // Ensure Sommelier Guide tips box is always present in Gemini output
                        if (!textRes.includes('sommelier-tips-box')) {
                            const tipsHtml = generateSommelierTips(freshKakao1, freshKakao2, locDisplay, moodText, isMultiCourse);
                            textRes += tipsHtml;
                        }

                        console.log(`[Spoonmap] Success with model: ${model}`);

                        // Update Context Memory: Extract recommended place names
                        const titleMatches = textRes.match(/<h4 class="rec-place-title">([\s\S]*?)<\/h4>/g);
                        if (titleMatches) {
                            const newPlaces = titleMatches.map(m => m.replace(/<[^>]+>/g, '').trim());
                            window.sommelierContext.lastPlaces = Array.from(new Set([...window.sommelierContext.lastPlaces, ...newPlaces]));
                        }

                        callback({ html: textRes });
                    } else {
                        console.warn(`[Spoonmap] Model ${model} returned no candidates:`, data);
                        attemptModel(idx + 1, 0);
                    }
                })
                .catch(err => {
                    console.warn(`[Spoonmap] Model ${model} fetch error:`, err);
                    handleFail(503, err);
                });
            }

            attemptModel(0, 0);
        }

        // Multi-Query Kakao Search Engine: Tries primary keyword first, falls back if 0 results
        if (typeof kakao !== 'undefined' && kakao.maps && kakao.maps.services) {
            const ps = new kakao.maps.services.Places();

            function searchKakaoSmart(keywordPrimary, keywordFallback) {
                return new Promise(resolve => {
                    ps.keywordSearch(keywordPrimary, (data, status) => {
                        let valid = (status === kakao.maps.services.Status.OK && data && data.length > 0)
                            ? (targetLocDisplay ? data.filter(p => isPlaceInTargetLocation(p, targetLocDisplay)) : data)
                            : [];
                        if (valid.length > 0) {
                            resolve(valid);
                        } else if (keywordFallback && keywordFallback !== keywordPrimary) {
                            ps.keywordSearch(keywordFallback, (fbData, fbStatus) => {
                                let fbValid = (fbStatus === kakao.maps.services.Status.OK && fbData && fbData.length > 0)
                                    ? (targetLocDisplay ? fbData.filter(p => isPlaceInTargetLocation(p, targetLocDisplay)) : fbData)
                                    : [];
                                resolve(fbValid.length > 0 ? fbValid : (fbData || []));
                            });
                        } else {
                            resolve(data && data.length > 0 ? data : []);
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

    // ─── Multi-turn Intent Detection ───
    const isExcludeReRec = /여기 말고|여기말고|이거 말고|이거말고|다른 곳|다른곳|다른 데|다른데|딴데|다시 추천|다시 알려|다시|바꿔|더 없어|더 보여|제외|말고|새로운|가봤|가본/i.test(query);
    const isStep2Only = /2차만|술집만|카페만|디저트만/i.test(query);
    const isStep1Only = /1차만|밥집만|식당만|고기집만|양식만/i.test(query);

    // ─── Mood Detection ───
    let moodKeywords = [];
    if (/비\s*오는|비오는|비올때|우천|비\s*내리는/i.test(query)) moodKeywords.push('비 오는 날 운치에 어울리는');
    if (/데이트|연인|커플|소개팅/i.test(query)) moodKeywords.push('로맨틱한 데이트 코스로 완벽한');
    if (/회식|모임|단체|동기/i.test(query)) moodKeywords.push('즐거운 모임과 회식에 적합한');
    if (/혼밥|혼자/i.test(query)) moodKeywords.push('편안하게 혼밥을 즐기기 좋은');
    let moodText = moodKeywords.length > 0 ? (moodKeywords.join(' ') + ' ') : '';

    if (!moodText && isExcludeReRec && window.sommelierContext.lastMoodText) {
        moodText = window.sommelierContext.lastMoodText;
    }
    if (moodText) {
        window.sommelierContext.lastMoodText = moodText;
    }

    // ─── Unified Multi-Course & Multi-Category Extraction ───
    let courseIntent = extractCourseIntent(query);
    let isMultiCourse = courseIntent.isMultiCourse;
    let cat1Display = courseIntent.cat1Display;
    let cat2Display = courseIntent.cat2Display;
    let step1Req = courseIntent.step1Req;
    let step2Req = courseIntent.step2Req;
    let totalReq = courseIntent.totalReq;

    // ─── Use shared extraction function ───
    let { targetLocDisplay, mainCat, mainCatDisplay, catDescFn } = extractLocationAndCategory(query);

    // Inherit courseIntent if user asks follow-up (e.g. "여기말고 다른곳 추천해줘")
    if (!isMultiCourse && !mainCat && (isExcludeReRec || isStep1Only || isStep2Only) && window.sommelierContext.lastCourseIntent && window.sommelierContext.lastCourseIntent.isMultiCourse) {
        courseIntent = { ...window.sommelierContext.lastCourseIntent };
        isMultiCourse = courseIntent.isMultiCourse;
        cat1Display = courseIntent.cat1Display;
        cat2Display = courseIntent.cat2Display;
        step1Req = courseIntent.step1Req;
        step2Req = courseIntent.step2Req;
        totalReq = courseIntent.totalReq;
        console.log(`[Spoonmap Fallback Multi-turn] Inherited course structure: 1차 ${cat1Display} ${step1Req}곳 + 2차 ${cat2Display} ${step2Req}곳`);
    }

    // 사전에 없는 지역도 커버: raw 패턴 추출
    if (!targetLocDisplay) {
        const rawMatch = query.match(/([가-힣]{2,5})(역|시|군|구|동)\b/);
        if (rawMatch && !CONVERSATIONAL_STOPWORDS.has(rawMatch[1])) {
            targetLocDisplay = rawMatch[1];
        }
    }

    // ─── Multi-turn Context Inheritance ───
    if (!targetLocDisplay && window.sommelierContext.lastLocation) {
        targetLocDisplay = window.sommelierContext.lastLocation;
        console.log(`[Spoonmap Fallback Multi-turn] Inherited location: ${targetLocDisplay}`);
    }
    if (targetLocDisplay) {
        window.sommelierContext.lastLocation = targetLocDisplay;
    }

    const locDisplay = targetLocDisplay || '주변';

    let primaryCatDisplay = cat1Display || cat2Display || mainCatDisplay;
    if (!primaryCatDisplay && !isMultiCourse && window.sommelierContext.lastCategoryDisplay) {
        primaryCatDisplay = window.sommelierContext.lastCategoryDisplay;
        console.log(`[Spoonmap Fallback Multi-turn] Inherited category: ${primaryCatDisplay}`);
    }

    if (isMultiCourse) {
        window.sommelierContext.lastCategoryDisplay = `${cat1Display} & ${cat2Display}`;
        window.sommelierContext.lastCourseIntent = {
            isMultiCourse: true,
            cat1Display,
            cat2Display,
            step1Req,
            step2Req,
            totalReq
        };
    } else if (primaryCatDisplay) {
        window.sommelierContext.lastCategoryDisplay = primaryCatDisplay;
        window.sommelierContext.lastCourseIntent = {
            isMultiCourse: false,
            cat1Display: null,
            cat2Display: null,
            step1Req: null,
            step2Req: null,
            totalReq: totalReq || 2
        };
    }

    const primaryDescFn = catDescFn || ((loc) => `${loc}에서 정갈한 맛과 편안한 분위기로 만족스러운 시간을 보내기 최적인 추천 장소입니다.`);

    // ─── Auth Check for Private Data Queries ───
    const hasLocalKeywords = q.includes('내 맛집') || q.includes('내가 간') || q.includes('단골') || q.includes('저장된') || q.includes('내 데이터') || q.includes('또간집') || q.includes('5수저');
    if (!isOwnerUser() && hasLocalKeywords) {
        callback({
            html: `<div class="sommelier-intro-p">
                🔒 <b>나만의 또간집 및 저장 맛집 연동 추천</b>은 카카오 로그인 후 이용하실 수 있습니다.<br><br>
                상단 헤더의 <b>[💬 로그인]</b> 버튼을 누르시면 회원님의 미식 데이터와 연동된 맞춤 추천을 바로 받아보실 수 있습니다! 🍷✨
            </div>`
        });
        return;
    }

    // ─── Local Saved Places (for logged-in user asking for "내 맛집") ───
    let localCandidates = [];
    if (isOwnerUser() && hasLocalKeywords && typeof restaurantData !== 'undefined' && restaurantData.length > 0) {
        localCandidates = restaurantData.filter(item => {
            const matchLoc = !targetLocDisplay || isPlaceInTargetLocation(item, targetLocDisplay);
            const cat = (item.category || '').toLowerCase();
            const matchCat = !primaryCatDisplay || cat.includes(primaryCatDisplay.toLowerCase()) || (primaryCatDisplay === '맛집');
            return matchLoc && matchCat;
        }).map(item => ({
            place_name: item.name,
            road_address_name: item.location_large || item.address,
            address_name: item.address,
            category_name: item.category || primaryCatDisplay || '맛집',
            place_url: item.map_url || `https://map.kakao.com/link/search/${encodeURIComponent(item.name)}`
        }));
    }

    // Deduplication Helper: Strict name match or 4+ char substring
    const isSamePlace = (pName, prev) => {
        const cleanP = (pName || '').replace(/[\s\-_()]+/g, '').toLowerCase();
        const cleanPrev = (prev || '').replace(/[\s\-_()]+/g, '').toLowerCase();
        if (!cleanP || !cleanPrev) return false;
        if (cleanP === cleanPrev) return true;
        if (cleanP.length >= 4 && cleanPrev.length >= 4) {
            return cleanP.includes(cleanPrev) || cleanPrev.includes(cleanP);
        }
        return false;
    };

    if (typeof kakao !== 'undefined' && kakao.maps && kakao.maps.services) {
        const ps = new kakao.maps.services.Places();
        const searchOptions = (!targetLocDisplay && typeof map !== 'undefined' && map && map.getCenter)
            ? { location: map.getCenter(), radius: 5000 }
            : {};

        if (isMultiCourse) {
            const kw1 = `${locDisplay} ${cat1Display || '맛집'}`;
            const kw2 = `${locDisplay} ${cat2Display || '카페'}`;
            console.log(`[Spoonmap Fallback] Multi-course search: "${kw1}" + "${kw2}"`);
            ps.keywordSearch(kw1, (d1, s1) => {
                ps.keywordSearch(kw2, (d2, s2) => {
                    let p1 = s1 === kakao.maps.services.Status.OK ? d1 : [];
                    let p2 = s2 === kakao.maps.services.Status.OK ? d2 : [];
                    if (targetLocDisplay) {
                        const f1 = p1.filter(p => isPlaceInTargetLocation(p, targetLocDisplay));
                        if (f1.length > 0) p1 = f1;
                        const f2 = p2.filter(p => isPlaceInTargetLocation(p, targetLocDisplay));
                        if (f2.length > 0) p2 = f2;
                    }
                    if (cat1Display) {
                        const cf1 = p1.filter(p => isPlaceMatchingCategory(p, cat1Display));
                        if (cf1.length > 0) p1 = cf1;
                    }
                    if (cat2Display) {
                        const cf2 = p2.filter(p => isPlaceMatchingCategory(p, cat2Display));
                        if (cf2.length > 0) p2 = cf2;
                    }
                    renderCourseFallback(p1, p2);
                }, searchOptions);
            }, searchOptions);
            return;
        }

        const kw = `${locDisplay} ${primaryCatDisplay || '맛집'}`;
        console.log(`[Spoonmap Fallback] Single search: "${kw}"`);
        ps.keywordSearch(kw, (data, status) => {
            let places = status === kakao.maps.services.Status.OK ? data : [];
            if (targetLocDisplay) {
                const f = places.filter(p => isPlaceInTargetLocation(p, targetLocDisplay));
                if (f.length > 0) places = f;
            }
            if (primaryCatDisplay) {
                const cf = places.filter(p => isPlaceMatchingCategory(p, primaryCatDisplay));
                if (cf.length > 0) places = cf;
            }
            const merged = localCandidates.length > 0 ? [...localCandidates, ...places] : places;
            renderSingleFallback(merged);
        }, searchOptions);
    } else {
        renderSingleFallback(localCandidates);
    }

    function renderCourseFallback(places1, places2) {
        const count1 = step1Req || 1;
        const count2 = step2Req || 1;
        const prevPlaces = window.sommelierContext.lastPlaces || [];

        const filterPrev = (places) => {
            if (!prevPlaces.length) return places;
            const filtered = places.filter(p => !prevPlaces.some(prev => isSamePlace(p.place_name, prev)));
            return filtered.length > 0 ? filtered : places;
        };

        let list1 = filterPrev(places1).slice(0, count1);
        if (list1.length === 0 && places1.length > 0) {
            list1 = places1.slice(0, count1);
        }

        const list1Names = new Set(list1.map(p => (p.place_name || '').replace(/[\s\-_()]+/g, '').toLowerCase()));
        let candidatePlaces2 = filterPrev(places2).filter(p => !list1Names.has((p.place_name || '').replace(/[\s\-_()]+/g, '').toLowerCase()));
        if (candidatePlaces2.length === 0 && places2.length > 0) {
            candidatePlaces2 = places2.filter(p => !list1Names.has((p.place_name || '').replace(/[\s\-_()]+/g, '').toLowerCase()));
        }
        let list2 = candidatePlaces2.slice(0, count2);

        if (isStep2Only && window.sommelierContext.lastStep1Places && window.sommelierContext.lastStep1Places.length > 0) {
            list1 = window.sommelierContext.lastStep1Places;
        }
        if (isStep1Only && window.sommelierContext.lastStep2Places && window.sommelierContext.lastStep2Places.length > 0) {
            list2 = window.sommelierContext.lastStep2Places;
        }

        if (list1.length === 0 && list2.length === 0) {
            callback({
                html: `<div class="sommelier-intro-p">
                    죄송합니다. <b>${escapeHtml(locDisplay)}</b> 지역에서 '${escapeHtml(cat1Display || '식사')}' 및 '${escapeHtml(cat2Display || '카페')}' 관련 실제 매장 데이터를 찾지 못했습니다. 😢<br><br>
                    💡 <b>검색 팁:</b> <i>"${locDisplay}역 맛집"</i>처럼 구체적인 역/동 단위로 다시 질문해 보세요!
                </div>`
            });
            return;
        }

        const newNames = [...list1.map(p => p.place_name), ...list2.map(p => p.place_name)];
        window.sommelierContext.lastPlaces = Array.from(new Set([...prevPlaces, ...newNames]));
        window.sommelierContext.lastStep1Places = list1;
        window.sommelierContext.lastStep2Places = list2;

        const cards1Html = list1.map((p) => {
            const cName = p.category_name ? p.category_name.split('>').pop().trim() : (cat1Display || '식사');
            const desc = generateSmartSommelierDescription(p, `1차 · ${cat1Display || '식사'}`, moodText, locDisplay);
            return renderCardStandard(`1차 · ${cName}`, p.place_name, p.road_address_name || p.address_name, desc, p.place_url);
        }).join('');

        const cards2Html = list2.map((p) => {
            const cName = p.category_name ? p.category_name.split('>').pop().trim() : (cat2Display || '카페 및 술집');
            const desc = generateSmartSommelierDescription(p, `2차 · ${cat2Display || '카페 및 술집'}`, moodText, locDisplay);
            return renderCardStandard(`2차 · ${cName}`, p.place_name, p.road_address_name || p.address_name, desc, p.place_url);
        }).join('');

        let introText = '';
        if (isExcludeReRec && prevPlaces.length > 0) {
            const prevSummary = prevPlaces.slice(-2).join(', ');
            introText = `이전에 추천해 드린 <b>${escapeHtml(prevSummary)}</b>를 제외하고, ${moodText}<b>${escapeHtml(locDisplay)}</b> 인근의 새로운 1차 <b>${escapeHtml(cat1Display || '식사')}</b> ${list1.length}곳과 2차 <b>${escapeHtml(cat2Display || '카페 및 술집')}</b> ${list2.length}곳으로 엄선했습니다! 🍷✨`;
        } else {
            introText = `안녕하세요! Spoonmap AI 미식 소믈리에입니다. ${moodText}<b>${escapeHtml(locDisplay)}</b> 인근으로 1차 <b>${escapeHtml(cat1Display || '식사')}</b> ${list1.length}곳과 2차 <b>${escapeHtml(cat2Display || '카페 및 술집')}</b> ${list2.length}곳을 준비했습니다.`;
        }

        const tipsHtml = generateSommelierTips(list1, list2, locDisplay, moodText, true);

        callback({ html: `<div class="sommelier-intro-p">${introText}</div><div class="sommelier-rec-grid">${cards1Html}${cards2Html}</div>${tipsHtml}` });
    }

    function renderSingleFallback(kakaoPlaces = []) {
        const targetCatDisplay = primaryCatDisplay || '맛집';
        const count = totalReq || 2;
        const prevPlaces = window.sommelierContext.lastPlaces || [];

        let candidatePlaces = kakaoPlaces;
        if (prevPlaces.length > 0) {
            const filtered = kakaoPlaces.filter(p => !prevPlaces.some(prev => isSamePlace(p.place_name, prev)));
            if (filtered.length > 0) {
                candidatePlaces = filtered;
            }
        }

        let chosenPlaces = candidatePlaces.slice(0, count);
        if (chosenPlaces.length === 0 && kakaoPlaces.length > 0) {
            chosenPlaces = kakaoPlaces.slice(0, count);
        }

        if (chosenPlaces.length === 0) {
            callback({
                html: `<div class="sommelier-intro-p">
                    죄송합니다. <b>${escapeHtml(locDisplay)}</b> 지역에서 <b>${escapeHtml(targetCatDisplay)}</b> 관련 실제 매장을 찾지 못했습니다. 😢<br><br>
                    💡 <b>추천 팁:</b> <i>"${locDisplay} 맛집 2곳"</i> 또는 다른 메뉴/지역으로 질문해 보세요!
                </div>`
            });
            return;
        }

        const newNames = chosenPlaces.map(p => p.place_name);
        window.sommelierContext.lastPlaces = Array.from(new Set([...prevPlaces, ...newNames]));

        let introText = '';
        if (isExcludeReRec && prevPlaces.length > 0) {
            const prevSummary = prevPlaces.slice(-2).join(', ');
            introText = `앞서 추천해 드린 <b>${escapeHtml(prevSummary)}</b> 외에, ${moodText}<b>${escapeHtml(locDisplay)}</b>의 또 다른 <b>${escapeHtml(targetCatDisplay)}</b> ${chosenPlaces.length}곳을 새롭게 엄선했습니다! 🍷✨`;
        } else {
            introText = `안녕하세요! Spoonmap AI 미식 소믈리에입니다. 요청하신 ${moodText}<b>${escapeHtml(locDisplay)} ${escapeHtml(targetCatDisplay)}</b> ${chosenPlaces.length}곳을 엄선해 드립니다.`;
        }

        const cardsHtml = chosenPlaces.map((p, i) => {
            const cName = p.category_name ? p.category_name.split('>').pop().trim() : targetCatDisplay;
            const desc = generateSmartSommelierDescription(p, targetCatDisplay, moodText, locDisplay);
            const tagNum = (isExcludeReRec && prevPlaces.length > 0) ? (prevPlaces.length - newNames.length + i + 1) : (i + 1);
            return renderCardStandard(`추천 ${tagNum} · ${cName}`, p.place_name, p.road_address_name || p.address_name, desc, p.place_url);
        }).join('');

        const tipsHtml = generateSommelierTips(chosenPlaces, [], locDisplay, moodText, false);

        callback({ html: `<div class="sommelier-intro-p">${introText}</div><div class="sommelier-rec-grid">${cardsHtml}</div>${tipsHtml}` });
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
        this.availableOptions = new Set();

        // 1. Seed canonical standard options
        if (this.baseKey === 'category') {
            DEFAULT_CATEGORIES.forEach(cat => this.availableOptions.add(cat));
        } else if (this.baseKey === 'menu') {
            DEFAULT_MENUS.forEach(m => this.availableOptions.add(m));
            if (window._spoonmapSharedMenus && Array.isArray(window._spoonmapSharedMenus)) {
                window._spoonmapSharedMenus.forEach(m => this.availableOptions.add(m));
            }
        }

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

        // Location small is strictly scoped to parent location_large from KOREA_REGIONS DB, not arbitrary global tags
        if (this.baseKey !== 'location_small') {
            if (typeof restaurantData !== 'undefined') {
                if (isOwnerUser() || this.baseKey === 'location_large') {
                    collect(restaurantData, this.baseKey);
                }
            }
            if (isOwnerUser()) {
                if (typeof diaryData !== 'undefined') collect(diaryData, this.baseKey);
            }

            // Preload nationwide regions for location_large
            if (this.baseKey === 'location_large') {
                if (typeof getAllKoreaLargeLocations === 'function') {
                    getAllKoreaLargeLocations().forEach(loc => this.availableOptions.add(loc));
                }
            }

            // Load from user's diary
            const diaryStorageKey = typeof getDiaryStorageKey === 'function' ? getDiaryStorageKey() : 'spoonmap_diary';
            const localDiary = JSON.parse(localStorage.getItem(diaryStorageKey) || '[]');
            collect(localDiary, this.baseKey);

            // Load custom options created by user from localStorage
            const customStoreKey = typeof getUserCustomOptionsKey === 'function' ? getUserCustomOptionsKey() : 'spoonmap_custom_options';
            const customStore = JSON.parse(localStorage.getItem(customStoreKey) || '{}');
            if (customStore[this.baseKey] && Array.isArray(customStore[this.baseKey])) {
                customStore[this.baseKey].forEach(opt => this.availableOptions.add(opt));
            }
        }
    }

    bindEvents() {
        if (!this.fieldEl) return;

        // Toggle popover on bar click with stopPropagation
        const bar = this.fieldEl.querySelector('.notion-tag-input-bar');
        if (bar) {
            bar.setAttribute('tabindex', '0');
            bar.onclick = (e) => {
                if (e.target.classList.contains('notion-tag-remove')) return;
                e.stopPropagation();
                this.togglePopover();
            };
            bar.onkeydown = (e) => {
                if (e.key === 'Tab') {
                    e.preventDefault();
                    this.closePopover();
                    handleNotionTagTabNavigation(this.fieldType, e.shiftKey);
                    return;
                }
                if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    this.openPopover();
                }
            };
        }

        // Search input filtering & Keyboard Navigation (상하 화살표 + 엔터 지원)
        if (this.searchEl) {
            this.searchEl.oninput = () => {
                this.focusedOptionIndex = 0;
                this.renderOptions(this.searchEl.value.trim());
            };
            this.searchEl.onkeydown = (e) => {
                const getClickableItems = () => {
                    return Array.from(this.optionsEl?.querySelectorAll('.notion-option-item:not([style*="pointer-events: none"])') || []);
                };

                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const items = getClickableItems();
                    if (items.length > 0) {
                        this.focusedOptionIndex = (typeof this.focusedOptionIndex === 'number')
                            ? Math.min(items.length - 1, this.focusedOptionIndex + 1)
                            : 0;
                        this.updateKeyboardFocus(items);
                    }
                    return;
                }
                if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const items = getClickableItems();
                    if (items.length > 0) {
                        this.focusedOptionIndex = (typeof this.focusedOptionIndex === 'number')
                            ? Math.max(0, this.focusedOptionIndex - 1)
                            : 0;
                        this.updateKeyboardFocus(items);
                    }
                    return;
                }
                if (e.key === 'Tab') {
                    e.preventDefault();
                    this.closePopover();
                    handleNotionTagTabNavigation(this.fieldType, e.shiftKey);
                    return;
                }
                if (e.key === 'Escape') {
                    e.preventDefault();
                    this.closePopover();
                    return;
                }
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const items = getClickableItems();
                    if (items.length > 0 && typeof this.focusedOptionIndex === 'number' && items[this.focusedOptionIndex]) {
                        items[this.focusedOptionIndex].click();
                        if (this.isMultiSelect) {
                            if (this.searchEl) this.searchEl.value = '';
                            this.focusedOptionIndex = 0;
                            this.renderOptions('');
                        }
                    } else {
                        const query = this.searchEl.value.trim();
                        if (query) {
                            this.addOptionAndSelect(query);
                            if (this.searchEl) this.searchEl.value = '';
                            this.focusedOptionIndex = 0;
                            this.renderOptions('');
                        }
                    }
                }
            };
        }

        // Create button click
        if (this.createBtnEl) {
            this.createBtnEl.onclick = () => {
                const query = this.searchEl ? this.searchEl.value.trim() : '';
                if (query) {
                    this.addOptionAndSelect(query);
                    if (this.searchEl) this.searchEl.value = '';
                    this.focusedOptionIndex = 0;
                    this.renderOptions('');
                }
            };
        }

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (this.popoverEl && this.popoverEl.classList.contains('open')) {
                if (this.fieldEl && !this.fieldEl.contains(e.target)) {
                    this.closePopover();
                }
            }
        });
    }

    updateKeyboardFocus(items) {
        if (!items) {
            items = Array.from(this.optionsEl?.querySelectorAll('.notion-option-item:not([style*="pointer-events: none"])') || []);
        }
        if (items.length === 0) return;
        if (typeof this.focusedOptionIndex !== 'number' || this.focusedOptionIndex < 0) {
            this.focusedOptionIndex = 0;
        } else if (this.focusedOptionIndex >= items.length) {
            this.focusedOptionIndex = items.length - 1;
        }
        items.forEach((item, idx) => {
            if (idx === this.focusedOptionIndex) {
                item.classList.add('keyboard-focused');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('keyboard-focused');
            }
        });
    }

    togglePopover() {
        if (!this.popoverEl) return;
        const willOpen = !this.popoverEl.classList.contains('open');

        // Close other popovers
        document.querySelectorAll('.notion-dropdown-popover.open').forEach(p => {
            if (p !== this.popoverEl) p.classList.remove('open');
        });

        if (willOpen) {
            this.openPopover();
        } else {
            this.closePopover();
        }
    }

    openPopover() {
        if (!this.popoverEl) return;
        this.popoverEl.classList.add('open');
        this.focusedOptionIndex = 0;
        if (this.searchEl) {
            this.searchEl.value = '';
            this.searchEl.focus();
        }
        this.renderOptions('');
    }

    closePopover() {
        if (this.popoverEl) this.popoverEl.classList.remove('open');
    }

    setSelected(valArrayOrString) {
        this.setValues(valArrayOrString);
    }

    addOptionAndSelect(optName) {
        if (!optName) return;
        if (this.baseKey === 'menu') {
            optName = optName.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '').trim();
            if (!optName) return;
            if (typeof syncSharedMenuToCloud === 'function') {
                syncSharedMenuToCloud(optName);
            }
        }
        this.availableOptions.add(optName);

        // Save custom option to localStorage using baseKey
        const customStoreKey = typeof getUserCustomOptionsKey === 'function' ? getUserCustomOptionsKey() : (typeof DIARY_CUSTOM_OPTIONS_KEY !== 'undefined' ? DIARY_CUSTOM_OPTIONS_KEY : 'spoonmap_custom_options');
        const customStore = JSON.parse(localStorage.getItem(customStoreKey) || '{}');
        if (!customStore[this.baseKey]) customStore[this.baseKey] = [];
        if (!customStore[this.baseKey].includes(optName)) {
            customStore[this.baseKey].push(optName);
            localStorage.setItem(customStoreKey, JSON.stringify(customStore));
            if (typeof saveToCloud === 'function') {
                saveToCloud('custom_options', customStore);
            }
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

    selectSmallWithLarge(large, small) {
        const parentKey = this.fieldType.startsWith('modal_') ? 'modal_location_large' : 'location_large';
        this._lockedSmall = small;
        if (typeof notionSelectors !== 'undefined' && notionSelectors[parentKey]) {
            notionSelectors[parentKey]._skipSmallOpen = true;
            notionSelectors[parentKey].selectTag(large);
            notionSelectors[parentKey]._skipSmallOpen = false;
        }
        this.selectTag(small);
        this._lockedSmall = null;
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

        if (this.baseKey === 'location_large') {
            const smallKey = this.fieldType.startsWith('modal_') ? 'modal_location_small' : 'location_small';
            if (typeof notionSelectors !== 'undefined' && notionSelectors[smallKey]) {
                notionSelectors[smallKey].onParentLocationLargeChanged(val);
                if (notionSelectors[smallKey].selectedValues.length === 0 && !this._skipSmallOpen) {
                    setTimeout(() => {
                        notionSelectors[smallKey].openPopover();
                    }, 80);
                }
            }
        }
    }

    deselectTag(val) {
        this.selectedValues = this.selectedValues.filter(v => v !== val);
        this.renderSelectedTags();
        this.renderOptions(this.searchEl ? this.searchEl.value.trim() : '');

        if (this.baseKey === 'location_large') {
            const smallKey = this.fieldType.startsWith('modal_') ? 'modal_location_small' : 'location_small';
            if (typeof notionSelectors !== 'undefined' && notionSelectors[smallKey]) {
                notionSelectors[smallKey].onParentLocationLargeChanged('');
            }
        }
    }

    setValues(valArrayOrString) {
        let vals = [];
        if (Array.isArray(valArrayOrString)) {
            vals = valArrayOrString;
        } else if (typeof valArrayOrString === 'string') {
            if (this.isMultiSelect) {
                vals = valArrayOrString.split(',').map(v => v.trim()).filter(Boolean);
            } else {
                const trimmed = valArrayOrString.trim();
                vals = trimmed ? [trimmed] : [];
            }
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

        if (this.baseKey === 'location_large') {
            const smallKey = this.fieldType.startsWith('modal_') ? 'modal_location_small' : 'location_small';
            if (typeof notionSelectors !== 'undefined' && notionSelectors[smallKey]) {
                notionSelectors[smallKey].onParentLocationLargeChanged(vals[0] || '');
            }
        }
    }

    onParentLocationLargeChanged(parentLarge) {
        if (this._lockedSmall) {
            this.selectedValues = [this._lockedSmall];
            this.renderSelectedTags();
            return;
        }
        if (parentLarge && typeof getKoreaSmallLocations === 'function') {
            const validSmalls = getKoreaSmallLocations(parentLarge);
            if (this.selectedValues.length > 0) {
                const stillValid = this.selectedValues.filter(val => validSmalls.includes(val));
                if (stillValid.length === 0) {
                    this.clear();
                } else if (stillValid.length !== this.selectedValues.length) {
                    this.selectedValues = stillValid;
                    this.renderSelectedTags();
                }
            }
        } else {
            this.clear();
        }
        this.renderOptions(this.searchEl ? this.searchEl.value.trim() : '');
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

        if (this.baseKey === 'location_large') {
            const smallKey = this.fieldType.startsWith('modal_') ? 'modal_location_small' : 'location_small';
            if (typeof notionSelectors !== 'undefined' && notionSelectors[smallKey]) {
                notionSelectors[smallKey].onParentLocationLargeChanged('');
            }
        }
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

        // ── Case 1: location_small (Dependent on location_large) ──
        if (this.baseKey === 'location_small') {
            const parentKey = this.fieldType.startsWith('modal_') ? 'modal_location_large' : 'location_large';
            const parentLarge = (typeof notionSelectors !== 'undefined' && notionSelectors[parentKey]) 
                ? notionSelectors[parentKey].getValueString() 
                : '';

            if (parentLarge) {
                // Sub-locations strictly for selected parentLarge from DB
                let smallOpts = (typeof getKoreaSmallLocations === 'function') ? [...getKoreaSmallLocations(parentLarge)] : [];
                this.selectedValues.forEach(val => {
                    if (val && !smallOpts.includes(val)) smallOpts.push(val);
                });

                const filtered = query 
                    ? smallOpts.filter(opt => opt.toLowerCase().includes(query.toLowerCase()))
                    : smallOpts;

                filtered.forEach(opt => {
                    const color = getNotionTagColor(opt);
                    const displayLabel = getFormattedTagDisplay(opt);
                    const isSelected = this.selectedValues.includes(opt);

                    const optEl = document.createElement('div');
                    optEl.className = `notion-option-item${isSelected ? ' selected' : ''}`;
                    optEl.innerHTML = `
                        <div class="option-tag-badge" style="background-color:${color.bg}; color:${color.color}">
                            📍 ${displayLabel}
                        </div>
                        ${isSelected ? '<span class="option-check">✓</span>' : ''}
                    `;
                    optEl.addEventListener('mouseenter', () => {
                        const items = Array.from(this.optionsEl.querySelectorAll('.notion-option-item:not([style*="pointer-events: none"])'));
                        const idx = items.indexOf(optEl);
                        if (idx !== -1) {
                            this.focusedOptionIndex = idx;
                            this.updateKeyboardFocus(items);
                        }
                    });
                    optEl.addEventListener('click', () => {
                        if (isSelected) {
                            this.deselectTag(opt);
                        } else {
                            this.selectTag(opt);
                        }
                    });
                    this.optionsEl.appendChild(optEl);
                });

                // If searching, also display matching places from other regions
                if (query) {
                    const nationwide = (typeof searchKoreaSmallLocations === 'function')
                        ? searchKoreaSmallLocations(query).filter(item => item.large !== parentLarge).slice(0, 20)
                        : [];

                    if (nationwide.length > 0) {
                        const divider = document.createElement('div');
                        divider.className = 'notion-option-item';
                        divider.style.pointerEvents = 'none';
                        divider.style.fontSize = '0.75rem';
                        divider.style.color = 'var(--text-secondary)';
                        divider.style.padding = '8px 12px 4px 12px';
                        divider.style.fontWeight = '600';
                        divider.style.borderTop = '1px dashed var(--border-color, #eee)';
                        divider.style.marginTop = '4px';
                        divider.textContent = '🌐 다른 지역 검색 결과';
                        this.optionsEl.appendChild(divider);

                        nationwide.forEach(({ large, small }) => {
                            const color = getNotionTagColor(small);
                            const optEl = document.createElement('div');
                            optEl.className = 'notion-option-item';
                            optEl.innerHTML = `
                                <div class="option-tag-badge" style="background-color:${color.bg}; color:${color.color}">
                                    📍 ${small} <span style="font-size:0.75rem; opacity:0.75; font-weight:normal;">(${large})</span>
                                </div>
                            `;
                            optEl.addEventListener('mouseenter', () => {
                                const items = Array.from(this.optionsEl.querySelectorAll('.notion-option-item:not([style*="pointer-events: none"])'));
                                const idx = items.indexOf(optEl);
                                if (idx !== -1) {
                                    this.focusedOptionIndex = idx;
                                    this.updateKeyboardFocus(items);
                                }
                            });
                            optEl.addEventListener('click', () => {
                                this.selectSmallWithLarge(large, small);
                            });
                            this.optionsEl.appendChild(optEl);
                        });
                    }
                }

                if (filtered.length === 0 && (!query || this.optionsEl.children.length === 0)) {
                    const emptyNotice = document.createElement('div');
                    emptyNotice.className = 'notion-option-item';
                    emptyNotice.style.pointerEvents = 'none';
                    emptyNotice.style.fontSize = '0.82rem';
                    emptyNotice.style.color = 'var(--text-secondary)';
                    emptyNotice.style.padding = '8px 12px';
                    emptyNotice.textContent = `"${parentLarge}" 하위에 일치하는 장소가 없습니다.`;
                    this.optionsEl.appendChild(emptyNotice);
                }

                if (this.createBtnEl) {
                    const exactMatch = smallOpts.some(opt => opt.toLowerCase() === query.toLowerCase());
                    if (query && !exactMatch) {
                        this.createBtnEl.style.display = 'flex';
                        this.createBtnEl.innerHTML = `<span>+ "${query}" 생성</span>`;
                    } else {
                        this.createBtnEl.style.display = 'none';
                    }
                }
                this.updateKeyboardFocus();
                return;
            } else {
                // parentLarge is NOT selected yet: direct small location search / pick
                if (!query) {
                    const hintEl = document.createElement('div');
                    hintEl.className = 'notion-option-item';
                    hintEl.style.pointerEvents = 'none';
                    hintEl.style.fontSize = '0.78rem';
                    hintEl.style.color = 'var(--text-secondary)';
                    hintEl.style.padding = '6px 12px 4px 12px';
                    hintEl.style.fontWeight = '600';
                    hintEl.textContent = '💡 인기 지역 소분류';
                    this.optionsEl.appendChild(hintEl);

                    const popular = (typeof getPopularKoreaSmallLocations === 'function') 
                        ? getPopularKoreaSmallLocations() 
                        : [];

                    popular.forEach(({ large, small }) => {
                        const color = getNotionTagColor(small);
                        const optEl = document.createElement('div');
                        optEl.className = 'notion-option-item';
                        optEl.innerHTML = `
                            <div class="option-tag-badge" style="background-color:${color.bg}; color:${color.color}">
                                📍 ${small} <span style="font-size:0.75rem; opacity:0.75; font-weight:normal;">(${large})</span>
                            </div>
                        `;
                        optEl.addEventListener('mouseenter', () => {
                            const items = Array.from(this.optionsEl.querySelectorAll('.notion-option-item:not([style*="pointer-events: none"])'));
                            const idx = items.indexOf(optEl);
                            if (idx !== -1) {
                                this.focusedOptionIndex = idx;
                                this.updateKeyboardFocus(items);
                            }
                        });
                        optEl.addEventListener('click', () => {
                            this.selectSmallWithLarge(large, small);
                        });
                        this.optionsEl.appendChild(optEl);
                    });
                } else {
                    const matches = (typeof searchKoreaSmallLocations === 'function') ? searchKoreaSmallLocations(query).slice(0, 30) : [];
                    if (matches.length === 0) {
                        const noMatch = document.createElement('div');
                        noMatch.className = 'notion-option-item';
                        noMatch.style.pointerEvents = 'none';
                        noMatch.style.fontSize = '0.82rem';
                        noMatch.style.color = 'var(--text-secondary)';
                        noMatch.style.padding = '8px 12px';
                        noMatch.textContent = `"${query}" 검색 결과가 없습니다.`;
                        this.optionsEl.appendChild(noMatch);
                    } else {
                        matches.forEach(({ large, small }) => {
                            const color = getNotionTagColor(small);
                            const optEl = document.createElement('div');
                            optEl.className = 'notion-option-item';
                            optEl.innerHTML = `
                                <div class="option-tag-badge" style="background-color:${color.bg}; color:${color.color}">
                                    📍 ${small} <span style="font-size:0.75rem; opacity:0.75; font-weight:normal;">(${large})</span>
                                </div>
                            `;
                            optEl.addEventListener('mouseenter', () => {
                                const items = Array.from(this.optionsEl.querySelectorAll('.notion-option-item:not([style*="pointer-events: none"])'));
                                const idx = items.indexOf(optEl);
                                if (idx !== -1) {
                                    this.focusedOptionIndex = idx;
                                    this.updateKeyboardFocus(items);
                                }
                            });
                            optEl.addEventListener('click', () => {
                                this.selectSmallWithLarge(large, small);
                            });
                            this.optionsEl.appendChild(optEl);
                        });
                    }
                }

                if (this.createBtnEl) {
                    if (query) {
                        this.createBtnEl.style.display = 'flex';
                        this.createBtnEl.innerHTML = `<span>+ "${query}" 생성</span>`;
                    } else {
                        this.createBtnEl.style.display = 'none';
                    }
                }
                this.updateKeyboardFocus();
                return;
            }
        }

        // ── Case 2: location_large (Show all nationwide divisions) ──
        if (this.baseKey === 'location_large') {
            let allOpts = (typeof getAllKoreaLargeLocations === 'function') ? getAllKoreaLargeLocations() : Array.from(this.availableOptions);
            const PROV_ORDER = ['서울', '경기', '인천', '부산', '대구', '대전', '광주', '울산', '세종', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'];
            allOpts.sort((a, b) => {
                const provA = a.split(' ')[0];
                const provB = b.split(' ')[0];
                const idxA = PROV_ORDER.indexOf(provA);
                const idxB = PROV_ORDER.indexOf(provB);
                if (idxA !== -1 && idxB !== -1 && idxA !== idxB) return idxA - idxB;
                return a.localeCompare(b, 'ko');
            });

            const filtered = query 
                ? allOpts.filter(opt => opt.toLowerCase().includes(query.toLowerCase()))
                : allOpts;

            filtered.forEach(opt => {
                const color = getNotionTagColor(opt);
                const displayLabel = getFormattedTagDisplay(opt);
                const isSelected = this.selectedValues.includes(opt);

                const optEl = document.createElement('div');
                optEl.className = `notion-option-item${isSelected ? ' selected' : ''}`;
                optEl.innerHTML = `
                    <div class="option-tag-badge" style="background-color:${color.bg}; color:${color.color}">
                        🏛️ ${displayLabel}
                    </div>
                    ${isSelected ? '<span class="option-check">✓</span>' : ''}
                `;
                optEl.addEventListener('mouseenter', () => {
                    const items = Array.from(this.optionsEl.querySelectorAll('.notion-option-item:not([style*="pointer-events: none"])'));
                    const idx = items.indexOf(optEl);
                    if (idx !== -1) {
                        this.focusedOptionIndex = idx;
                        this.updateKeyboardFocus(items);
                    }
                });
                optEl.addEventListener('click', () => {
                    if (isSelected) {
                        this.deselectTag(opt);
                    } else {
                        this.selectTag(opt);
                    }
                });
                this.optionsEl.appendChild(optEl);
            });

            if (this.createBtnEl) {
                const exactMatch = allOpts.some(opt => opt.toLowerCase() === query.toLowerCase());
                if (query && !exactMatch) {
                    this.createBtnEl.style.display = 'flex';
                    this.createBtnEl.innerHTML = `<span>+ "${query}" 생성</span>`;
                } else {
                    this.createBtnEl.style.display = 'none';
                }
            }
            this.updateKeyboardFocus();
            return;
        }

        // ── Case 3: category & menu ──
        let allOpts = Array.from(this.availableOptions);
        if (this.baseKey === 'category') {
            allOpts.sort((a, b) => {
                const idxA = DEFAULT_CATEGORIES.indexOf(a);
                const idxB = DEFAULT_CATEGORIES.indexOf(b);
                if (idxA !== -1 && idxB !== -1) return idxA - idxB;
                if (idxA !== -1) return -1;
                if (idxB !== -1) return 1;
                return a.localeCompare(b, 'ko');
            });
        } else {
            allOpts.sort((a, b) => a.localeCompare(b, 'ko'));
        }
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

            optEl.addEventListener('mouseenter', () => {
                const items = Array.from(this.optionsEl.querySelectorAll('.notion-option-item:not([style*="pointer-events: none"])'));
                const idx = items.indexOf(optEl);
                if (idx !== -1) {
                    this.focusedOptionIndex = idx;
                    this.updateKeyboardFocus(items);
                }
            });

            optEl.addEventListener('click', () => {
                if (isSelected) {
                    this.deselectTag(opt);
                } else {
                    this.selectTag(opt);
                }
            });

            optEl.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                e.stopPropagation();
                showNotionTagContextMenu(e.clientX, e.clientY, opt, this.baseKey);
            });

            this.optionsEl.appendChild(optEl);
        });

        if (this.createBtnEl) {
            const exactMatch = allOpts.some(opt => opt.toLowerCase() === query.toLowerCase());
            if (query && !exactMatch) {
                this.createBtnEl.style.display = 'flex';
                this.createBtnEl.innerHTML = `<span>+ "${query}" 생성</span>`;
            } else {
                this.createBtnEl.style.display = 'none';
            }
        }
        this.updateKeyboardFocus();
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

    // 1. Remove from custom options localStorage
    const customStoreKey = typeof getUserCustomOptionsKey === 'function' ? getUserCustomOptionsKey() : (typeof DIARY_CUSTOM_OPTIONS_KEY !== 'undefined' ? DIARY_CUSTOM_OPTIONS_KEY : 'spoonmap_custom_options');
    const customStore = JSON.parse(localStorage.getItem(customStoreKey) || '{}');
    if (customStore[baseKey] && Array.isArray(customStore[baseKey])) {
        customStore[baseKey] = customStore[baseKey].filter(item => item !== optName);
        localStorage.setItem(customStoreKey, JSON.stringify(customStore));
        if (typeof saveToCloud === 'function') {
            saveToCloud('custom_options', customStore);
        }
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
    const overridesKey = typeof getUserOverridesStorageKey === 'function' ? getUserOverridesStorageKey() : 'spoonmap_restaurant_overrides';
    const diaryStorageKey = typeof getDiaryStorageKey === 'function' ? getDiaryStorageKey() : 'spoonmap_diary';
    const overrides = JSON.parse(localStorage.getItem(overridesKey) || '{}');
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
        localStorage.setItem(overridesKey, JSON.stringify(overrides));
        if (typeof saveToCloud === 'function') {
            saveToCloud('overrides', overrides);
        }
    }

    const diaryEntries = JSON.parse(localStorage.getItem(diaryStorageKey) || '[]');
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
        localStorage.setItem(diaryStorageKey, JSON.stringify(diaryEntries));
        if (typeof saveToCloud === 'function') {
            saveToCloud('diary', diaryEntries);
        }
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
    if (window._notionSelectorsInitialized) {
        if (typeof notionSelectors !== 'undefined') {
            Object.values(notionSelectors).forEach(sel => {
                if (sel && typeof sel.initOptions === 'function') sel.initOptions();
            });
        }
        return;
    }

    // Diary drawer selectors
    if (document.getElementById('notion-field-category')) {
        notionSelectors.category = new NotionTagSelector('category', true);
        notionSelectors.menu = new NotionTagSelector('menu', true);
        notionSelectors.location_large = new NotionTagSelector('location_large', false);
        notionSelectors.location_small = new NotionTagSelector('location_small', false);
    }

    // Modal inline edit selectors
    if (document.getElementById('notion-field-modal_category')) {
        notionSelectors.modal_category = new NotionTagSelector('modal_category', true);
        notionSelectors.modal_menu = new NotionTagSelector('modal_menu', true);
        notionSelectors.modal_location_large = new NotionTagSelector('modal_location_large', false);
        notionSelectors.modal_location_small = new NotionTagSelector('modal_location_small', false);
    }

    window._notionSelectorsInitialized = true;

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

    setupGlobalTabNavigationHooks();
}

// ─── Tab Key Chaining & Navigation Engine ───
function handleNotionTagTabNavigation(currentFieldType, isShiftKey) {
    const isModal = currentFieldType.startsWith('modal_');

    const diaryChain = [
        'diary-input-name',
        'diary-input-date',
        'category',
        'menu',
        'location_large',
        'location_small',
        'diary-input-map',
        'diary-input-memo'
    ];

    const modalChain = [
        'modal_category',
        'modal_menu',
        'modal_location_large',
        'modal_location_small',
        'modal-edit-input-map',
        'modal-edit-input-memo'
    ];

    const chain = isModal ? modalChain : diaryChain;
    const currentIndex = chain.indexOf(currentFieldType);
    if (currentIndex === -1) return;

    const nextIndex = isShiftKey ? currentIndex - 1 : currentIndex + 1;
    if (nextIndex < 0 || nextIndex >= chain.length) return;

    const targetKey = chain[nextIndex];
    focusFormField(targetKey);
}

function focusFormField(targetKey) {
    // Close any currently open notion popovers
    document.querySelectorAll('.notion-dropdown-popover.open').forEach(p => p.classList.remove('open'));

    // 1. If it's a NotionTagSelector
    if (typeof notionSelectors !== 'undefined' && notionSelectors[targetKey]) {
        const selector = notionSelectors[targetKey];
        selector.openPopover();
        return;
    }

    // 2. If it's a standard DOM Element
    const el = document.getElementById(targetKey);
    if (el) {
        // If date field is hidden in drawer (e.g. edit restaurant master info), skip to category
        if (targetKey === 'diary-input-date') {
            const dateField = document.getElementById('diary-drawer-field-date');
            if (dateField && (dateField.style.display === 'none' || dateField.offsetParent === null)) {
                focusFormField('category');
                return;
            }
        }
        el.focus();
        if (typeof el.select === 'function') el.select();
    }
}

function setupGlobalTabNavigationHooks() {
    // 1. Diary Drawer Date -> Category on Tab
    const diaryDate = document.getElementById('diary-input-date');
    if (diaryDate) {
        diaryDate.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && !e.shiftKey) {
                e.preventDefault();
                focusFormField('category');
            }
        });
    }

    // 2. Diary Drawer Name -> Date or Category on Tab
    const diaryName = document.getElementById('diary-input-name');
    if (diaryName) {
        diaryName.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && !e.shiftKey) {
                const dateField = document.getElementById('diary-drawer-field-date');
                if (dateField && (dateField.style.display === 'none' || dateField.offsetParent === null)) {
                    e.preventDefault();
                    focusFormField('category');
                }
            }
        });
    }

    // 3. Diary Drawer Map URL -> Shift+Tab to Location Small
    const diaryMap = document.getElementById('diary-input-map');
    if (diaryMap) {
        diaryMap.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && e.shiftKey) {
                e.preventDefault();
                focusFormField('location_small');
            }
        });
    }

    // 4. Modal Map URL -> Shift+Tab to Modal Location Small
    const modalMap = document.getElementById('modal-edit-input-map');
    if (modalMap) {
        modalMap.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && e.shiftKey) {
                e.preventDefault();
                focusFormField('modal_location_small');
            }
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

// ─── Phase 3.1: Restaurant Master Entity & Kakao Places Integration ───

function normalizeRestaurantName(name) {
    if (!name) return '';
    return name
        .replace(/[\(\)\[\]\{\}\<\>·\-_,./\\~`!@#$%^&*+=?]/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/\s*(본점|1호점|직영점|별관|신관|분점|원조)$/, '')
        .trim()
        .toLowerCase();
}

function extractRegionFromAddress(address, roadAddress) {
    const raw = (address || roadAddress || '').trim();
    if (!raw) return { large: '', small: '' };

    const tokens = raw.split(/\s+/);
    if (tokens.length >= 2) {
        let candidateLarge = `${tokens[0]} ${tokens[1]}`;
        candidateLarge = candidateLarge
            .replace(/^서울특별시/, '서울')
            .replace(/^부산광역시/, '부산')
            .replace(/^대구광역시/, '대구')
            .replace(/^인천광역시/, '인천')
            .replace(/^광주광역시/, '광주')
            .replace(/^대전광역시/, '대전')
            .replace(/^울산광역시/, '울산')
            .replace(/^세종특별자치시/, '세종')
            .replace(/^경기도/, '경기')
            .replace(/^강원특별자치도|^강원도/, '강원')
            .replace(/^충청북도/, '충북')
            .replace(/^충청남도/, '충남')
            .replace(/^전라북도|^전북특별자치도/, '전북')
            .replace(/^전라남도/, '전남')
            .replace(/^경상북도/, '경북')
            .replace(/^경상남도/, '경남')
            .replace(/^제주특별자치도|^제주도/, '제주');

        candidateLarge = candidateLarge.replace(/([가-힣]+)시$/, '$1');

        let candidateSmall = '';
        for (let i = 2; i < tokens.length; i++) {
            const t = tokens[i];
            if (/(동|읍|면|리|가)$/.test(t) && !/(시|군|구)$/.test(t)) {
                candidateSmall = t.replace(/[0-9]+가?$/, '');
                break;
            }
        }

        if (typeof standardizeLocation === 'function') {
            const std = standardizeLocation(candidateLarge, candidateSmall, '');
            if (std.large) {
                return { large: std.large, small: std.small || candidateSmall };
            }
        }
        return { large: candidateLarge, small: candidateSmall };
    }
    return { large: '', small: '' };
}

function findExistingRestaurant(query) {
    if (!query) return null;
    const unified = (typeof getUnifiedRestaurantData === 'function') ? getUnifiedRestaurantData() : [];
    if (!unified || unified.length === 0) return null;

    const qKakaoId = query.kakaoId ? String(query.kakaoId).trim() : '';
    const qName = (query.name || '').trim();
    const qNormName = normalizeRestaurantName(qName);
    const qUrlId = query.mapUrl ? (query.mapUrl.match(/\/(\d+)(?:\D|$)/) || [])[1] : '';
    const qLarge = (query.locationLarge || '').trim();
    const qSmall = (query.locationSmall || '').trim();
    const qX = parseFloat(query.x);
    const qY = parseFloat(query.y);

    // 1순위: kakao_id 일치
    if (qKakaoId) {
        const found = unified.find(r => {
            if (r.kakao_id && String(r.kakao_id).trim() === qKakaoId) return true;
            if (r.map_url) {
                const m = r.map_url.match(/\/(\d+)(?:\D|$)/);
                if (m && m[1] === qKakaoId) return true;
            }
            return false;
        });
        if (found) return found;
    }

    // 2순위: map_url 내 카카오 ID 일치
    if (qUrlId) {
        const found = unified.find(r => {
            if (r.kakao_id && String(r.kakao_id).trim() === qUrlId) return true;
            if (r.map_url) {
                const m = r.map_url.match(/\/(\d+)(?:\D|$)/);
                if (m && m[1] === qUrlId) return true;
            }
            return false;
        });
        if (found) return found;
    }

    // 3순위: 정확한 식당명 일치
    const exactMatch = unified.find(r => r.name && r.name.trim().toLowerCase() === qName.toLowerCase());
    if (exactMatch) return exactMatch;

    // 4순위: 정규화 명칭 + 지역 일치
    if (qNormName) {
        const normMatch = unified.find(r => {
            if (!r.name) return false;
            const rNorm = normalizeRestaurantName(r.name);
            if (rNorm !== qNormName) return false;

            if (qSmall && r.location_small && (qSmall.includes(r.location_small) || r.location_small.includes(qSmall))) {
                return true;
            }
            if (qLarge && r.location_large && qLarge === r.location_large) {
                return true;
            }
            if (!qSmall && !r.location_small) return true;
            return false;
        });
        if (normMatch) return normMatch;
    }

    // 5순위: GPS 좌표 150m 이내 근접 + 정규화 명칭 부분 일치
    if (!isNaN(qX) && !isNaN(qY) && qX > 0 && qY > 0 && qNormName) {
        const geoMatch = unified.find(r => {
            const rx = parseFloat(r.x || (r.coords && r.coords.getLng && r.coords.getLng()));
            const ry = parseFloat(r.y || (r.coords && r.coords.getLat && r.coords.getLat()));
            if (isNaN(rx) || isNaN(ry) || rx <= 0 || ry <= 0) return false;

            const dx = (qX - rx) * 88000;
            const dy = (qY - ry) * 111000;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist <= 150) {
                const rNorm = normalizeRestaurantName(r.name);
                if (rNorm.includes(qNormName) || qNormName.includes(rNorm)) return true;
            }
            return false;
        });
        if (geoMatch) return geoMatch;
    }

    return null;
}

function populateDiaryAutocomplete() {
    setupDiaryNameSearch();
}

function setupDiaryNameSearch() {
    const input = document.getElementById('diary-input-name');
    const container = document.getElementById('diary-name-suggestions');
    if (!input || !container) return;

    let debounceTimer = null;
    let selectedSuggestionIndex = -1;
    let currentSuggestions = [];

    const hideSuggestions = () => {
        container.style.display = 'none';
        container.innerHTML = '';
        selectedSuggestionIndex = -1;
        currentSuggestions = [];
    };

    const renderSuggestions = (items) => {
        currentSuggestions = items;
        selectedSuggestionIndex = -1;

        if (!items || items.length === 0) {
            hideSuggestions();
            return;
        }

        container.innerHTML = items.map((item, idx) => {
            const isSaved = !!item.existingMatch;
            const visitCount = item.existingMatch?.visit_count || (item.existingMatch ? getAllVisitsForRestaurant(item.existingMatch.name).length : 0);
            const badgeHtml = isSaved 
                ? `<span class="name-suggestion-badge">${visitCount > 1 ? visitCount + '회 방문' : '등록됨'}</span>`
                : '';
            const catHtml = item.displayCategory ? `<span class="name-suggestion-cat">${item.displayCategory}</span>` : '';
            const addrHtml = item.displayAddress ? `<div class="name-suggestion-addr">${item.displayAddress}</div>` : '';

            return `
                <div class="name-suggestion-item" data-index="${idx}">
                    <div class="name-suggestion-top">
                        <span class="name-suggestion-name">${item.name}</span>
                        <div class="name-suggestion-meta">
                            ${catHtml}
                            ${badgeHtml}
                        </div>
                    </div>
                    ${addrHtml}
                </div>
            `;
        }).join('');

        container.style.display = 'block';

        container.querySelectorAll('.name-suggestion-item').forEach(el => {
            el.addEventListener('mousedown', (e) => {
                e.preventDefault();
                const idx = parseInt(el.dataset.index, 10);
                if (!isNaN(idx) && currentSuggestions[idx]) {
                    selectSuggestion(currentSuggestions[idx]);
                }
            });
        });
    };

    const highlightItem = (index) => {
        const items = container.querySelectorAll('.name-suggestion-item');
        items.forEach((el, i) => {
            el.classList.toggle('is-selected', i === index);
            if (i === index) el.scrollIntoView({ block: 'nearest' });
        });
    };

    const selectSuggestion = (item) => {
        input.value = item.name;
        hideSuggestions();
        autoFillRestaurantData(item.rawPlace || item.name, item.existingMatch);
        if (typeof refreshDiaryPhotoGrid === 'function') refreshDiaryPhotoGrid(item.name);
    };

    input.addEventListener('input', () => {
        const query = input.value.trim();
        if (!query) {
            hideSuggestions();
            return;
        }

        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            searchPlacesForDrawer(query, (results) => {
                renderSuggestions(results);
            });
        }, 220);
    });

    input.addEventListener('keydown', (e) => {
        if (container.style.display === 'none' || currentSuggestions.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedSuggestionIndex = (selectedSuggestionIndex + 1) % currentSuggestions.length;
            highlightItem(selectedSuggestionIndex);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedSuggestionIndex = (selectedSuggestionIndex - 1 + currentSuggestions.length) % currentSuggestions.length;
            highlightItem(selectedSuggestionIndex);
        } else if (e.key === 'Enter') {
            if (selectedSuggestionIndex >= 0 && selectedSuggestionIndex < currentSuggestions.length) {
                e.preventDefault();
                selectSuggestion(currentSuggestions[selectedSuggestionIndex]);
            }
        } else if (e.key === 'Escape') {
            hideSuggestions();
        }
    });

    input.addEventListener('blur', () => {
        setTimeout(() => {
            hideSuggestions();
            if (input.value.trim()) {
                const match = findExistingRestaurant({ name: input.value.trim() });
                autoFillRestaurantData(input.value.trim(), match);
                if (typeof refreshDiaryPhotoGrid === 'function') refreshDiaryPhotoGrid(input.value.trim());
            }
        }, 220);
    });

    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !container.contains(e.target)) {
            hideSuggestions();
        }
    });
}

function searchPlacesForDrawer(query, callback) {
    const results = [];
    const unified = (typeof getUnifiedRestaurantData === 'function') ? getUnifiedRestaurantData() : [];
    const queryLower = query.toLowerCase();

    // 1. Local existing matches
    const matchedLocal = unified.filter(r => r.name && r.name.toLowerCase().includes(queryLower)).slice(0, 5);
    matchedLocal.forEach(r => {
        results.push({
            name: r.name,
            displayCategory: r.category || '',
            displayAddress: [r.location_large, r.location_small].filter(Boolean).join(' '),
            existingMatch: r,
            rawPlace: {
                place_name: r.name,
                place_url: r.map_url || '',
                id: r.kakao_id || (r.map_url ? (r.map_url.match(/\/(\d+)(?:\D|$)/) || [])[1] : ''),
                category_name: r.category || '',
                address_name: '',
                road_address_name: r.road_address || '',
                x: r.x || '',
                y: r.y || ''
            }
        });
    });

    // 2. Kakao Places keywordSearch
    if (typeof kakao !== 'undefined' && kakao.maps && kakao.maps.services && kakao.maps.services.Places) {
        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(query, (data, status) => {
            if (status === kakao.maps.services.Status.OK && Array.isArray(data)) {
                data.slice(0, 7).forEach(p => {
                    const existingMatch = findExistingRestaurant({
                        kakaoId: p.id,
                        name: p.place_name,
                        mapUrl: p.place_url,
                        roadAddress: p.road_address_name || p.address_name,
                        x: p.x,
                        y: p.y
                    });

                    // 중복 결과 방지 (이미 results에 동일 kakao_id나 동일 이름이 있으면 업데이트)
                    const alreadyInResults = results.find(r => 
                        (p.id && r.rawPlace?.id === p.id) || 
                        (r.name.toLowerCase() === p.place_name.toLowerCase())
                    );

                    if (alreadyInResults) {
                        if (!alreadyInResults.rawPlace?.id) {
                            alreadyInResults.rawPlace = p;
                            alreadyInResults.displayAddress = p.road_address_name || p.address_name;
                        }
                        if (existingMatch && !alreadyInResults.existingMatch) {
                            alreadyInResults.existingMatch = existingMatch;
                        }
                    } else {
                        const stdCat = (typeof mapKakaoCategoryToStandard === 'function')
                            ? mapKakaoCategoryToStandard(p.category_name, p.place_name)
                            : (p.category_name ? p.category_name.split('>').pop().trim() : '');

                        results.push({
                            name: p.place_name,
                            displayCategory: stdCat,
                            displayAddress: p.road_address_name || p.address_name || '',
                            existingMatch: existingMatch,
                            rawPlace: p
                        });
                    }
                });
            }
            callback(results.slice(0, 10));
        });
    } else {
        callback(results.slice(0, 10));
    }
}

function autoFillRestaurantData(placeOrName, existingMatch = null) {
    if (!placeOrName) return;

    let place = null;
    let restaurantName = '';

    if (typeof placeOrName === 'object' && placeOrName !== null) {
        place = placeOrName;
        restaurantName = place.place_name || place.name || '';
    } else {
        restaurantName = String(placeOrName).trim();
    }

    if (!restaurantName) return;

    // 기존 매칭 식당이 명시되지 않았다면 검색
    if (!existingMatch) {
        existingMatch = findExistingRestaurant({
            kakaoId: place?.id,
            name: restaurantName,
            mapUrl: place?.place_url,
            roadAddress: place?.road_address_name || place?.address_name,
            x: place?.x,
            y: place?.y
        });
    }

    // 1. 식당명 & 히든 메타데이터 입력
    const nameInput = document.getElementById('diary-input-name');
    if (nameInput) nameInput.value = restaurantName;

    const kakaoIdInput = document.getElementById('diary-input-kakao-id');
    const roadAddrInput = document.getElementById('diary-input-road-address');
    const xInput = document.getElementById('diary-input-x');
    const yInput = document.getElementById('diary-input-y');

    const finalKakaoId = place?.id || existingMatch?.kakao_id || (existingMatch?.map_url ? (existingMatch.map_url.match(/\/(\d+)(?:\D|$)/) || [])[1] : '') || '';
    const finalRoadAddr = place?.road_address_name || place?.address_name || existingMatch?.road_address || '';
    const finalX = place?.x || existingMatch?.x || '';
    const finalY = place?.y || existingMatch?.y || '';

    if (kakaoIdInput) kakaoIdInput.value = finalKakaoId;
    if (roadAddrInput) roadAddrInput.value = finalRoadAddr;
    if (xInput) xInput.value = finalX;
    if (yInput) yInput.value = finalY;

    // 2. 카카오맵 URL 자동 입력
    const mapInput = document.getElementById('diary-input-map');
    const mapUrl = place?.place_url || existingMatch?.map_url || (finalKakaoId ? `https://place.map.kakao.com/${finalKakaoId}` : '');
    if (mapInput && mapUrl) {
        mapInput.value = mapUrl;
    }

    // 3. 식당 분류 (Category) 자동 선택
    let targetCat = existingMatch?.category || '';
    if (!targetCat && place?.category_name) {
        targetCat = (typeof mapKakaoCategoryToStandard === 'function') 
            ? mapKakaoCategoryToStandard(place.category_name, restaurantName) 
            : place.category_name.split('>').pop().trim();
    }
    if (targetCat && notionSelectors?.category) {
        notionSelectors.category.setSelected([targetCat]);
    }

    // 4. 지역 대분류 & 소분류 자동 선택
    let largeLoc = existingMatch?.location_large || '';
    let smallLoc = existingMatch?.location_small || '';
    if ((!largeLoc || !smallLoc) && (place?.address_name || place?.road_address_name)) {
        const parsed = extractRegionFromAddress(place.address_name, place.road_address_name);
        if (!largeLoc && parsed.large) largeLoc = parsed.large;
        if (!smallLoc && parsed.small) smallLoc = parsed.small;
    }
    if (largeLoc && smallLoc && notionSelectors?.location_small && typeof notionSelectors.location_small.selectSmallWithLarge === 'function') {
        notionSelectors.location_small.selectSmallWithLarge(largeLoc, smallLoc);
    } else {
        if (largeLoc && notionSelectors?.location_large) {
            notionSelectors.location_large.setSelected([largeLoc]);
        }
        if (smallLoc && notionSelectors?.location_small) {
            notionSelectors.location_small.setSelected([smallLoc]);
        }
    }

    // 5. 대표 메뉴 및 수저 평점 (기존 등록 식당인 경우 채움)
    if (existingMatch) {
        if (existingMatch.menu && notionSelectors?.menu) {
            const menuArr = Array.isArray(existingMatch.menu) ? existingMatch.menu : (typeof existingMatch.menu === 'string' ? existingMatch.menu.split(',').map(m => m.trim()).filter(Boolean) : []);
            if (menuArr.length > 0) notionSelectors.menu.setSelected(menuArr);
        }

        if (existingMatch.rate) {
            const spoonCount = (existingMatch.rate.match(/🥄/g) || []).length || 1;
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

    if (typeof refreshDiaryPhotoGrid === 'function') {
        refreshDiaryPhotoGrid(restaurantName);
    }

    updateDrawerVisitBadge(restaurantName);
}

// Calculate total visits and specific visit order for a restaurant
function getAllVisitsForRestaurant(restaurantName) {
    if (!restaurantName) return [];
    const norm = restaurantName.trim().toLowerCase();
    const unified = (typeof getUnifiedDiaryEntries === 'function') ? getUnifiedDiaryEntries() : [];
    const visits = [];
    unified.forEach(item => {
        if (item.name && item.name.trim().toLowerCase() === norm) {
            visits.push({
                id: item.id,
                name: item.name,
                date: item.date,
                source: item.source || 'local',
                data: item
            });
        }
    });
    visits.sort((a, b) => new Date(a.date) - new Date(b.date));
    return visits;
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
    const unified = (typeof getUnifiedDiaryEntries === 'function') ? getUnifiedDiaryEntries() : [];
    unified.forEach(entry => {
        if (!entry.date) return;
        const d = new Date(entry.date + 'T00:00:00');
        if (d.getFullYear() === year && d.getMonth() === month) {
            if (!byDate[entry.date]) byDate[entry.date] = [];
            byDate[entry.date].push(entry);
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
                    return `<span class="diary-mini-tag" style="background:${color.bg}; color:${color.color}">${escapeHtml(c)}</span>`;
                }).join('');

                const visitBadgeHtml = (totalCount >= 2 && orderNum >= 2) 
                    ? `<span class="card-visit-tag">${totalCount >= 10 ? '👑' : '🔥'}${orderNum}회차</span>` 
                    : '';

                const restPhotos = (typeof getRestaurantPhotos === 'function') ? getRestaurantPhotos(entry.name) : [];
                const photoTagHtml = restPhotos.length > 0 ? `<span class="card-photo-tag">📷 ${restPhotos.length}</span>` : '';

                // Get category emoji for compact view
                const catEmoji = getCategoryEmoji(entry.category);

                card.innerHTML = `
                    <!-- Mobile Compact View: 1-line chip -->
                    <div class="card-mobile-compact" title="${escapeHtml(entry.name)}">
                        <span class="compact-cat-dot">${catEmoji}</span>
                        <span class="compact-name">${escapeHtml(entry.name)}</span>
                    </div>

                    <!-- Desktop Full View: standard Notion-style card -->
                    <div class="card-desktop-full">
                        <div class="card-name" title="${escapeHtml(entry.name)}">${escapeHtml(entry.name)}</div>
                        <div class="card-sub-row">
                            ${visitBadgeHtml}
                            ${photoTagHtml}
                            ${tagsHtml}
                        </div>
                        ${spoonCount > 0 ? `<div class="card-spoon-row"><span class="card-spoon">${'🥄'.repeat(spoonCount)}</span></div>` : ''}
                        ${entry.memo ? `<div class="card-memo-row" title="${escapeHtml(entry.memo)}">📝 ${escapeHtml(entry.memo)}</div>` : ''}
                    </div>
                `;

                // Desktop Drag & Drop (HTML5)
                card.addEventListener('dragstart', (e) => {
                    draggedEntryData = entry;
                    card.classList.add('is-dragging');
                    e.dataTransfer.setData('text/plain', JSON.stringify(entry));
                });

                card.addEventListener('dragend', () => {
                    card.classList.remove('is-dragging');
                    draggedEntryData = null;
                });

                // Mobile Touch Drag & Drop
                let touchStartX = 0;
                let touchStartY = 0;
                let isTouchDragging = false;
                let touchGhost = null;
                let touchDragTimer = null;
                let currentHoveredCell = null;

                card.addEventListener('touchstart', (e) => {
                    if (window.innerWidth > 768) return;
                    const touch = e.touches[0];
                    touchStartX = touch.clientX;
                    touchStartY = touch.clientY;
                    isTouchDragging = false;
                    currentHoveredCell = null;

                    touchDragTimer = setTimeout(() => {
                        isTouchDragging = true;
                        card.classList.add('is-dragging');

                        touchGhost = document.createElement('div');
                        touchGhost.className = 'diary-touch-ghost';
                        touchGhost.innerHTML = `<span>${catEmoji}</span> <span>${escapeHtml(entry.name)}</span>`;
                        touchGhost.style.left = `${touch.clientX}px`;
                        touchGhost.style.top = `${touch.clientY}px`;
                        document.body.appendChild(touchGhost);

                        if (navigator.vibrate) navigator.vibrate(30);
                    }, 220);
                }, { passive: true });

                card.addEventListener('touchmove', (e) => {
                    if (window.innerWidth > 768) return;
                    const touch = e.touches[0];
                    const dx = Math.abs(touch.clientX - touchStartX);
                    const dy = Math.abs(touch.clientY - touchStartY);

                    if (!isTouchDragging) {
                        if (dx > 8 || dy > 8) {
                            clearTimeout(touchDragTimer);
                        }
                        return;
                    }

                    if (e.cancelable) e.preventDefault();
                    if (touchGhost) {
                        touchGhost.style.left = `${touch.clientX}px`;
                        touchGhost.style.top = `${touch.clientY}px`;
                    }

                    const elem = document.elementFromPoint(touch.clientX, touch.clientY);
                    const targetCell = elem ? elem.closest('.diary-day-cell') : null;

                    if (targetCell !== currentHoveredCell) {
                        if (currentHoveredCell) currentHoveredCell.classList.remove('drag-over');
                        currentHoveredCell = targetCell;
                        if (currentHoveredCell) currentHoveredCell.classList.add('drag-over');
                    }
                }, { passive: false });

                card.addEventListener('touchend', (e) => {
                    if (window.innerWidth > 768) return;
                    clearTimeout(touchDragTimer);

                    if (isTouchDragging) {
                        card.classList.remove('is-dragging');
                        if (touchGhost) {
                            touchGhost.remove();
                            touchGhost = null;
                        }

                        const changedTouch = e.changedTouches[0];
                        const elem = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY);
                        const targetCell = elem ? elem.closest('.diary-day-cell') : null;

                        if (currentHoveredCell) {
                            currentHoveredCell.classList.remove('drag-over');
                            currentHoveredCell = null;
                        }

                        if (targetCell && targetCell.dataset.date && targetCell.dataset.date !== entry.date) {
                            moveDiaryEntryToDate(entry, targetCell.dataset.date);
                        }
                        isTouchDragging = false;
                    }
                });

                card.addEventListener('touchcancel', () => {
                    clearTimeout(touchDragTimer);
                    if (isTouchDragging) {
                        card.classList.remove('is-dragging');
                        if (touchGhost) {
                            touchGhost.remove();
                            touchGhost = null;
                        }
                        if (currentHoveredCell) {
                            currentHoveredCell.classList.remove('drag-over');
                            currentHoveredCell = null;
                        }
                        isTouchDragging = false;
                    }
                });

                // Click -> On mobile select day, on desktop open edit drawer
                card.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (window.innerWidth <= 768) {
                        grid.querySelectorAll('.diary-day-cell').forEach(c => c.classList.remove('is-selected-day'));
                        cell.classList.add('is-selected-day');
                        renderDiaryMobileFeed(dateStr, entries);
                        return;
                    }
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

        // Click cell to select day and show in mobile feed
        cell.addEventListener('click', (e) => {
            if (e.target.closest('.diary-add-btn')) return;
            grid.querySelectorAll('.diary-day-cell').forEach(c => c.classList.remove('is-selected-day'));
            cell.classList.add('is-selected-day');
            renderDiaryMobileFeed(dateStr, entries);
        });

        grid.appendChild(cell);
    }

    // Auto-select initial date for mobile feed (today if in month, or first date with entries, or 1st)
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    let targetSelectDate = null;
    let targetEntries = [];

    if (year === today.getFullYear() && month === today.getMonth()) {
        targetSelectDate = todayStr;
        targetEntries = byDate[todayStr] || [];
    } else {
        const daysWithEntries = Object.keys(byDate).sort().reverse();
        if (daysWithEntries.length > 0) {
            targetSelectDate = daysWithEntries[0];
            targetEntries = byDate[targetSelectDate] || [];
        } else {
            targetSelectDate = `${year}-${String(month + 1).padStart(2, '0')}-01`;
            targetEntries = [];
        }
    }

    if (targetSelectDate) {
        const targetCell = grid.querySelector(`.diary-day-cell[data-date="${targetSelectDate}"]`);
        if (targetCell) targetCell.classList.add('is-selected-day');
        renderDiaryMobileFeed(targetSelectDate, targetEntries);
    }
}

function getCategoryEmoji(cat) {
    if (!cat) return '🍴';
    if (cat.includes('카페') || cat.includes('디저트')) return '☕';
    if (cat.includes('일식') || cat.includes('초밥') || cat.includes('라멘')) return '🍣';
    if (cat.includes('한식') || cat.includes('고기') || cat.includes('찌개') || cat.includes('국밥')) return '🍚';
    if (cat.includes('중식') || cat.includes('마라') || cat.includes('딤섬')) return '🥟';
    if (cat.includes('양식') || cat.includes('파스타') || cat.includes('피자') || cat.includes('버거')) return '🍕';
    if (cat.includes('술집') || cat.includes('바') || cat.includes('주점') || cat.includes('이자카야')) return '🍺';
    if (cat.includes('분식') || cat.includes('떡볶이')) return '🍢';
    return '🍴';
}

function openRestaurantDetailFromDiary(entry) {
    if (!entry || !entry.name) return;
    const key = entry.name.trim().toLowerCase();
    const allUnified = typeof getUnifiedRestaurantData === 'function' ? getUnifiedRestaurantData() : [];
    let item = allUnified.find(r => r.name && r.name.trim().toLowerCase() === key);

    if (!item) {
        item = {
            id: entry.id || `diary-${Date.now()}`,
            name: entry.name,
            category: entry.category || '기타',
            rate: entry.rate || '🥄',
            memo: entry.memo || '',
            photos: (typeof getRestaurantPhotos === 'function') ? getRestaurantPhotos(entry.name) : [],
            source: entry.source || 'diary',
            naver_url: entry.map_url || `https://map.naver.com/v5/search/${encodeURIComponent(entry.name)}`,
            kakao_url: `https://map.kakao.com/link/search/${encodeURIComponent(entry.name)}`
        };
    }

    if (typeof openRestaurantDetailModal === 'function') {
        openRestaurantDetailModal(item);
    } else {
        openEditDiaryDrawer(entry);
    }
}
window.openRestaurantDetailFromDiary = openRestaurantDetailFromDiary;

function renderDiaryMobileFeed(dateStr, entries) {
    const feedHeader = document.getElementById('diary-mobile-feed-title');
    const feedAction = document.getElementById('diary-mobile-feed-action');
    const feedList = document.getElementById('diary-mobile-feed-list');
    if (!feedHeader || !feedList) return;

    if (!entries) entries = [];

    let formattedDate = dateStr;
    try {
        const parts = dateStr.split('-');
        if (parts.length === 3) {
            const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
            const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
            formattedDate = `${parts[0]}.${parts[1]}.${parts[2]} (${dayNames[d.getDay()]})`;
        }
    } catch(e) {}

    // Clean date header without (0곳)
    feedHeader.innerHTML = `<span style="margin-right:6px;">📅</span><span>${formattedDate}</span>`;

    // '+ 기록 추가' button on the right side of header when date has entries
    if (feedAction) {
        if (entries.length > 0) {
            feedAction.innerHTML = `
                <button type="button" class="btn-feed-add-record" onclick="openDiaryDrawer('${dateStr}')">
                    <span style="font-size:13px; font-weight:800; line-height:1; margin-right:3px;">+</span> 기록 추가
                </button>
            `;
        } else {
            feedAction.innerHTML = '';
        }
    }

    feedList.innerHTML = '';

    if (entries.length === 0) {
        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'diary-feed-empty';
        emptyDiv.innerHTML = `
            <div class="feed-empty-icon">🍽️</div>
            <div class="feed-empty-title">이 날짜에 등록된 방문 기록이 없습니다</div>
            <div class="feed-empty-desc">기억에 남는 맛있는 순간을 기록해보세요!</div>
            <button type="button" class="btn-diary-add-coral" onclick="openDiaryDrawer('${dateStr}')">
                <span style="font-size:1.1rem; line-height:1; margin-right:4px;">+</span> 새 방문 기록 추가
            </button>
        `;
        feedList.appendChild(emptyDiv);
        return;
    }

    entries.forEach(entry => {
        const card = document.createElement('div');
        card.className = 'diary-mobile-feed-card';

        const visitInfo = getAllVisitsForRestaurant(entry.name);
        const visitIdx = visitInfo.findIndex(v => String(v.id) === String(entry.id) || v.date === entry.date);
        const orderNum = visitIdx !== -1 ? visitIdx + 1 : visitInfo.length;
        const totalCount = visitInfo.length;

        const spoonCount = entry.rate ? (entry.rate.match(/CLR|🥄/g) || entry.rate.match(/🥄/g) || []).length : 0;
        const catArray = entry.category ? entry.category.split(',').map(c => c.trim()).filter(Boolean) : [];
        const catHtml = catArray.map(c => {
            const color = getNotionTagColor(c);
            return `<span class="card-cat-badge" style="background:${color.bg}; color:${color.color}">${escapeHtml(c)}</span>`;
        }).join('');

        const visitBadge = (totalCount >= 2 && orderNum >= 2)
            ? `<span class="card-visit-tag" style="font-size:0.72rem; padding:2px 6px;">${totalCount >= 10 ? '👑' : '🔥'}${orderNum}회차</span>`
            : '';

        card.innerHTML = `
            <div class="feed-card-left">
                <div class="feed-card-name">${escapeHtml(entry.name)}</div>
                <div class="feed-card-meta">
                    ${catHtml}
                    ${spoonCount > 0 ? `<span class="card-spoons">${'🥄'.repeat(spoonCount)}</span>` : ''}
                    ${entry.memo ? `<span class="feed-card-memo">📝 ${escapeHtml(entry.memo)}</span>` : ''}
                </div>
            </div>
            ${visitBadge ? `<div class="feed-card-right">${visitBadge}</div>` : ''}
        `;

        // Direct click on the restaurant card opens '방문 기록 수정' drawer
        card.addEventListener('click', () => {
            openEditDiaryDrawer(entry);
        });

        feedList.appendChild(card);
    });
}
window.renderDiaryMobileFeed = renderDiaryMobileFeed;

// Move Entry to New Date via Drag & Drop
function moveDiaryEntryToDate(entry, newDate) {
    if (!entry || !newDate || entry.date === newDate) return;

    const diaryStorageKey = typeof getDiaryStorageKey === 'function' ? getDiaryStorageKey() : 'spoonmap_diary';
    const localEntries = JSON.parse(localStorage.getItem(diaryStorageKey) || '[]');
    let foundIdx = localEntries.findIndex(e => String(e.id) === String(entry.id));

    if (foundIdx !== -1) {
        if (!localEntries[foundIdx].originalDate && entry.date) {
            localEntries[foundIdx].originalDate = entry.date;
        }
        localEntries[foundIdx].date = newDate;
    } else {
        // Promote CSV entry to Local storage with new date and preserve link to original CSV entry
        const newLocal = {
            ...entry,
            id: entry.id || Date.now(),
            originalCsvId: entry.id,
            originalDate: entry.date,
            date: newDate,
            created_at: new Date().toISOString()
        };
        localEntries.push(newLocal);
    }

    localStorage.setItem(diaryStorageKey, JSON.stringify(localEntries));
    if (typeof saveToCloud === 'function') {
        saveToCloud('diary', localEntries);
    }
    renderDiaryCalendar();
    if (window.renderApp) window.renderApp();
    showDiaryToast(`📍 "${entry.name}" 항목이 ${newDate} 날짜로 이동되었습니다!`);
}

function openDiaryDrawer(dateStr, prefillData = null) {
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

    if (nameInput) nameInput.value = prefillData?.name || '';
    if (rateInput) rateInput.value = '';
    if (rateLabel) rateLabel.textContent = '선택 안 함';
    if (mapInput) mapInput.value = prefillData?.mapUrl || '';
    if (memoInput) memoInput.value = '';

    const kakaoIdInput = document.getElementById('diary-input-kakao-id');
    const roadAddrInput = document.getElementById('diary-input-road-address');
    const xInput = document.getElementById('diary-input-x');
    const yInput = document.getElementById('diary-input-y');
    if (kakaoIdInput) kakaoIdInput.value = prefillData?.kakao_id || '';
    if (roadAddrInput) roadAddrInput.value = prefillData?.road_address || '';
    if (xInput) xInput.value = prefillData?.x || '';
    if (yInput) yInput.value = prefillData?.y || '';

    if (typeof initAllNotionSelectors === 'function') initAllNotionSelectors();
    if (typeof notionSelectors !== 'undefined') {
        Object.values(notionSelectors).forEach(sel => sel.clear());
    }
    document.querySelectorAll('.rate-spoon').forEach(b => b.classList.remove('active'));

    // If prefillData has category or location, select in notionSelectors
    if (prefillData && typeof notionSelectors !== 'undefined') {
        if (prefillData.category && notionSelectors.category) {
            notionSelectors.category.setSelected([prefillData.category]);
        }
        const pLarge = prefillData.location_large || prefillData.location || '';
        const pSmall = prefillData.location_small || '';
        if (pLarge && pSmall && notionSelectors.location_small && typeof notionSelectors.location_small.selectSmallWithLarge === 'function') {
            notionSelectors.location_small.selectSmallWithLarge(pLarge, pSmall);
        } else {
            if (pLarge && notionSelectors.location_large) {
                notionSelectors.location_large.setSelected([pLarge]);
            }
            if (pSmall && notionSelectors.location_small) {
                notionSelectors.location_small.setSelected([pSmall]);
            }
        }
    }

    if (dateInput) dateInput.value = dateStr || '';

    if (typeof refreshDiaryPhotoGrid === 'function') {
        refreshDiaryPhotoGrid(prefillData?.name || '');
    }

    if (overlay) {
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    if (memoInput && prefillData?.name) {
        setTimeout(() => memoInput.focus(), 150);
    } else if (nameInput) {
        setTimeout(() => nameInput.focus(), 100);
    }
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

    const kakaoIdInput = document.getElementById('diary-input-kakao-id');
    const roadAddrInput = document.getElementById('diary-input-road-address');
    const xInput = document.getElementById('diary-input-x');
    const yInput = document.getElementById('diary-input-y');
    if (kakaoIdInput) kakaoIdInput.value = entry.kakao_id || '';
    if (roadAddrInput) roadAddrInput.value = entry.road_address || '';
    if (xInput) xInput.value = entry.x || '';
    if (yInput) yInput.value = entry.y || '';

    // Load and render photos for this restaurant
    if (typeof refreshDiaryPhotoGrid === 'function') {
        refreshDiaryPhotoGrid(entry.name || '');
    }

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
    const date = document.getElementById('diary-input-date')?.value || '';

    if (!editId && !name) return;
    if (!confirm(`"${name}" 방문 기록을 정말 삭제하시겠습니까?`)) return;

    const diaryStorageKey = typeof getDiaryStorageKey === 'function' ? getDiaryStorageKey() : 'spoonmap_diary';
    const localEntries = JSON.parse(localStorage.getItem(diaryStorageKey) || '[]');
    const updated = localEntries.filter(e => String(e.id) !== String(editId) && !(e.name === name && e.date === date));
    localStorage.setItem(diaryStorageKey, JSON.stringify(updated));

    // Record in deleted list for CSV suppression
    const deletedKey = 'spoonmap_deleted_diary';
    const deletedList = JSON.parse(localStorage.getItem(deletedKey) || '[]');
    if (editId) deletedList.push(String(editId));
    if (name && date) deletedList.push(`${name.trim().toLowerCase()}|${date}`);
    if (editId && String(editId).startsWith('csv-')) {
        const parts = String(editId).split('-');
        if (parts.length >= 3) {
            const origDate = parts.slice(2).join('-');
            deletedList.push(`${name.trim().toLowerCase()}|${origDate}`);
        }
    }
    const uniqueDeleted = [...new Set(deletedList)];
    localStorage.setItem(deletedKey, JSON.stringify(uniqueDeleted));

    if (typeof saveToCloud === 'function') {
        saveToCloud('diary', updated);
        saveToCloud('deleted_diary', uniqueDeleted);
    }

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
    let location_large = notionSelectors.location_large ? notionSelectors.location_large.getValueString() : '';
    let location_small = notionSelectors.location_small ? notionSelectors.location_small.getValueString() : '';
    if (typeof standardizeLocation === 'function') {
        const std = standardizeLocation(location_large, location_small, name);
        if (std.large) location_large = std.large;
        if (std.small) location_small = std.small;
    }
    const map_url = document.getElementById('diary-input-map')?.value.trim() || '';
    const memo = document.getElementById('diary-input-memo')?.value.trim() || '';

    // Master entity metadata
    const kakao_id = document.getElementById('diary-input-kakao-id')?.value.trim() || '';
    const road_address = document.getElementById('diary-input-road-address')?.value.trim() || '';
    const x = document.getElementById('diary-input-x')?.value.trim() || '';
    const y = document.getElementById('diary-input-y')?.value.trim() || '';

    // De-duplication check: Match against existing restaurant master data
    const matchedExisting = findExistingRestaurant({
        kakaoId: kakao_id,
        name: name,
        mapUrl: map_url,
        roadAddress: road_address,
        locationLarge: location_large,
        locationSmall: location_small,
        x: x,
        y: y
    });

    // Unify to canonical restaurant name and key
    const finalName = matchedExisting ? matchedExisting.name : name;
    const key = finalName.trim().toLowerCase();

    const diaryStorageKey = typeof getDiaryStorageKey === 'function' ? getDiaryStorageKey() : 'spoonmap_diary';
    const overridesKey = typeof getUserOverridesStorageKey === 'function' ? getUserOverridesStorageKey() : 'spoonmap_restaurant_overrides';

    // ─── Mode A: Restaurant Master Info Batch Edit (From LIST Tab) ───
    if (editId && editId.startsWith('__MASTER_EDIT__')) {
        const overrides = JSON.parse(localStorage.getItem(overridesKey) || '{}');
        overrides[key] = {
            ...(overrides[key] || {}),
            name: finalName,
            category,
            location_large,
            location_small,
            menu,
            rate,
            map_url: map_url || overrides[key]?.map_url || '',
            memo,
            kakao_id: kakao_id || overrides[key]?.kakao_id || '',
            road_address: road_address || overrides[key]?.road_address || '',
            x: x || overrides[key]?.x || '',
            y: y || overrides[key]?.y || '',
            updated_at: new Date().toISOString()
        };
        localStorage.setItem(overridesKey, JSON.stringify(overrides));
        if (typeof saveToCloud === 'function') {
            saveToCloud('overrides', overrides);
        }

        const existing = JSON.parse(localStorage.getItem(diaryStorageKey) || '[]');
        let diaryUpdated = false;
        existing.forEach(entry => {
            if (entry.name && entry.name.trim().toLowerCase() === key) {
                entry.name = finalName;
                entry.category = category;
                if (location_large) entry.location_large = location_large;
                if (location_small) entry.location_small = location_small;
                if (menu.length > 0) entry.menu = menu;
                if (rate) entry.rate = rate;
                if (map_url) entry.map_url = map_url;
                if (kakao_id) entry.kakao_id = kakao_id;
                if (road_address) entry.road_address = road_address;
                if (x) entry.x = x;
                if (y) entry.y = y;
                diaryUpdated = true;
            }
        });
        if (diaryUpdated) {
            localStorage.setItem(diaryStorageKey, JSON.stringify(existing));
            if (typeof saveToCloud === 'function') {
                saveToCloud('diary', existing);
            }
        }
        if (typeof publishPublicProfile === 'function') {
            publishPublicProfile();
        }

        closeDiaryDrawer();
        renderDiaryCalendar();
        if (window.renderApp) window.renderApp();

        const allUnified = getUnifiedRestaurantData();
        const updatedItem = allUnified.find(r => r.name.trim().toLowerCase() === key);
        if (updatedItem) {
            openRestaurantDetailModal(updatedItem);
        }

        showDiaryToast(`"${finalName}" 정보 수정 완료`);
        return;
    }

    // ─── Mode B: Normal Diary Entry Add / Edit ───
    const existing = JSON.parse(localStorage.getItem(diaryStorageKey) || '[]');

    if (editId) {
        // Update mode
        const isCsvId = String(editId).startsWith('csv-');
        const originalCsvDate = isCsvId ? String(editId).split('-').slice(2).join('-') : undefined;
        const idx = existing.findIndex(e => 
            String(e.id) === String(editId) || 
            (e.originalCsvId && String(e.originalCsvId) === String(editId)) ||
            (e.name && e.name.trim().toLowerCase() === key && (date ? e.date === date : (!e.date || (originalCsvDate && e.date === originalCsvDate))))
        );
        const updatedEntry = {
            id: isNaN(Number(editId)) ? editId : Number(editId),
            originalCsvId: isCsvId ? editId : (idx !== -1 ? existing[idx].originalCsvId : undefined),
            originalDate: originalCsvDate || (idx !== -1 ? existing[idx].originalDate : undefined),
            name: finalName,
            date: date || '',
            category,
            rate,
            menu,
            location_large,
            location_small,
            map_url: map_url || (idx !== -1 ? existing[idx].map_url : ''),
            memo,
            kakao_id: kakao_id || (idx !== -1 ? existing[idx].kakao_id : ''),
            road_address: road_address || (idx !== -1 ? existing[idx].road_address : ''),
            x: x || (idx !== -1 ? existing[idx].x : ''),
            y: y || (idx !== -1 ? existing[idx].y : ''),
            updated_at: new Date().toISOString()
        };

        if (idx !== -1) {
            existing[idx] = updatedEntry;
        } else {
            existing.push(updatedEntry);
        }
        localStorage.setItem(diaryStorageKey, JSON.stringify(existing));
        showDiaryToast(`"${finalName}" 수정 완료`);
    } else {
        // Create mode
        const existingIdx = existing.findIndex(e => e.name && e.name.trim().toLowerCase() === key && (date ? e.date === date : !e.date));
        const newEntry = {
            id: existingIdx !== -1 ? existing[existingIdx].id : Date.now(),
            name: finalName,
            date: date || '',
            category,
            rate,
            menu,
            location_large,
            location_small,
            map_url,
            memo,
            kakao_id,
            road_address,
            x,
            y,
            created_at: existingIdx !== -1 ? (existing[existingIdx].created_at || new Date().toISOString()) : new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        if (existingIdx !== -1) {
            existing[existingIdx] = newEntry;
        } else {
            existing.push(newEntry);
        }
        localStorage.setItem(diaryStorageKey, JSON.stringify(existing));
        showDiaryToast(date ? `"${finalName}" 방문 기록 저장 완료` : `"${finalName}" 등록 완료`);
    }

    // ─── Global Sync: Always sync overrides & all visits so LIST and DIARY share identical info! ───
    const overrides = JSON.parse(localStorage.getItem(overridesKey) || '{}');
    overrides[key] = {
        ...(overrides[key] || {}),
        name: finalName,
        category,
        location_large,
        location_small,
        menu,
        rate,
        map_url: map_url || overrides[key]?.map_url || '',
        kakao_id: kakao_id || overrides[key]?.kakao_id || '',
        road_address: road_address || overrides[key]?.road_address || '',
        x: x || overrides[key]?.x || '',
        y: y || overrides[key]?.y || '',
        updated_at: new Date().toISOString()
    };
    localStorage.setItem(overridesKey, JSON.stringify(overrides));

    // Batch sync other diary records of this restaurant
    existing.forEach(entry => {
        if (entry.name && entry.name.trim().toLowerCase() === key) {
            entry.name = finalName;
            entry.category = category;
            if (location_large) entry.location_large = location_large;
            if (location_small) entry.location_small = location_small;
            if (menu.length > 0) entry.menu = menu;
            if (kakao_id) entry.kakao_id = kakao_id;
            if (road_address) entry.road_address = road_address;
            if (x) entry.x = x;
            if (y) entry.y = y;
        }
    });
    localStorage.setItem(diaryStorageKey, JSON.stringify(existing));

    // Un-delete if this restaurant was previously marked deleted
    const deletedRestKey = 'spoonmap_deleted_restaurants';
    const deletedRestaurants = JSON.parse(localStorage.getItem(deletedRestKey) || '[]');
    if (deletedRestaurants.includes(key)) {
        const filtered = deletedRestaurants.filter(k => k !== key);
        localStorage.setItem(deletedRestKey, JSON.stringify(filtered));
        if (typeof saveToCloud === 'function') {
            saveToCloud('deleted_restaurants', filtered);
        }
    }
    const deletedDiaryKey = 'spoonmap_deleted_diary';
    const deletedDiary = JSON.parse(localStorage.getItem(deletedDiaryKey) || '[]');
    if (deletedDiary.includes(`${key}|*`)) {
        const filteredDiary = deletedDiary.filter(d => d !== `${key}|*`);
        localStorage.setItem(deletedDiaryKey, JSON.stringify(filteredDiary));
        if (typeof saveToCloud === 'function') {
            saveToCloud('deleted_diary', filteredDiary);
        }
    }

    // Save to Cloud Firestore
    if (typeof saveToCloud === 'function') {
        saveToCloud('diary', existing);
        saveToCloud('overrides', overrides);
    }
    if (typeof publishPublicProfile === 'function') {
        publishPublicProfile();
    }

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
    const diaryStorageKey = typeof getDiaryStorageKey === 'function' ? getDiaryStorageKey() : 'spoonmap_diary';
    const entries = JSON.parse(localStorage.getItem(diaryStorageKey) || '[]');
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

// ═══════════════════════════════════════════════════════════════════
// 12. 소셜 프로필 (PROFILE) & 실제 유저 기반 팔로우/팔로잉 미식 네트워크
// ═══════════════════════════════════════════════════════════════════

// Preset Avatars for Profile Customization
const PRESET_AVATARS = [
    { id: 'master_bot', name: '👑 마스터 봇', url: 'https://api.dicebear.com/7.x/bottts/svg?seed=junho' },
    { id: 'chef_bot', name: '🍳 셰프 로봇', url: 'https://api.dicebear.com/7.x/bottts/svg?seed=chef_master' },
    { id: 'gold_spoon', name: '🥄 황금 스푼', url: 'https://api.dicebear.com/7.x/bottts/svg?seed=spoon_gourmet' },
    { id: 'ramen_fan', name: '🍜 라멘 마니아', url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ramenlover' },
    { id: 'sushi_fan', name: '🍣 스시 탐험가', url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sushiexplorer' },
    { id: 'meat_fan', name: '🥩 고기 굽는 자', url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bbqmaster' },
    { id: 'cafe_fan', name: '☕ 감성 카페러', url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=cafetour' },
    { id: 'bakery_fan', name: '🥐 빵지 순례자', url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=croissant' },
    { id: 'wine_fan', name: '🍷 와인 소믈리에', url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sommelier' },
    { id: 'pizza_fan', name: '🍕 피자 & 파스타', url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=pizzalover' },
    { id: 'spicy_fan', name: '🌶️ 매운맛 킬러', url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=spicyfood' },
    { id: 'kakao_original', name: '💬 카카오 프로필', isKakao: true }
];

function getUserProfileKey() {
    const u = getCurrentUser();
    if (!u || !u.id) return 'spoonmap_guest_profile';
    if (isOwnerUser()) return 'spoonmap_master_profile';
    return `spoonmap_user_${u.id}_profile`;
}

function getUserProfile() {
    const key = getUserProfileKey();
    const u = getCurrentUser() || {};
    const isOwner = isOwnerUser();

    try {
        const saved = localStorage.getItem(key);
        if (saved) {
            const parsed = JSON.parse(saved);
            // Clean legacy mock counts (force to 0)
            if (parsed.followersCount === 28 || parsed.followersCount === 2 || typeof parsed.followersCount !== 'number') {
                parsed.followersCount = 0;
            }
            if (!parsed.profileImage) {
                parsed.profileImage = u.profileImage || (isOwner ? 'https://api.dicebear.com/7.x/bottts/svg?seed=junho' : 'https://api.dicebear.com/7.x/avataaars/svg?seed=gourmet');
            }
            return parsed;
        }
    } catch (e) {
        console.warn('Failed to parse user profile', e);
    }

    // Default Profile Generation
    const defaultProfile = {
        userId: u.id || 'guest',
        nickname: u.nickname || (isOwner ? '박준호' : '미식가'),
        handle: isOwner ? '@junho_spoon' : `@user_${String(u.id || '1004').slice(-4)}`,
        bio: isOwner 
            ? '서울 마포/용산 일식·고기 맛집 위주로 기록합니다. 직접 가보고 재방문한 찐 맛집만 남겨요 🥢' 
            : '나만의 맛집을 기록하고 공유하는 미식가입니다 🥄',
        profileImage: u.profileImage || (isOwner ? 'https://api.dicebear.com/7.x/bottts/svg?seed=junho' : 'https://api.dicebear.com/7.x/avataaars/svg?seed=gourmet'),
        isMaster: isOwner,
        followersCount: 0
    };

    localStorage.setItem(key, JSON.stringify(defaultProfile));
    return defaultProfile;
}

function saveUserProfile(updated) {
    const key = getUserProfileKey();
    localStorage.setItem(key, JSON.stringify(updated));

    // Update current session user nickname & avatar if changed
    const u = getCurrentUser();
    if (u) {
        u.nickname = updated.nickname;
        if (updated.profileImage) u.profileImage = updated.profileImage;
        localStorage.setItem('spoonmap_current_user', JSON.stringify(u));
    }

    if (typeof saveToCloud === 'function') {
        saveToCloud('profile', updated);
    }

    publishPublicProfile(updated);
    updateUserAuthUI();
}

async function publishPublicProfile(profile) {
    if (!isFirebaseReady || !db) return;
    const u = getCurrentUser();
    if (!u || !u.id) return;

    try {
        const isOwner = isOwnerUser();
        let restCount = 0;
        let userPublicRests = [];

        if (isOwner) {
            const unified = (typeof getUnifiedRestaurantData === 'function') ? getUnifiedRestaurantData() : [];
            restCount = unified.length;
            userPublicRests = (typeof getMasterRestaurantList === 'function') ? getMasterRestaurantList() : [];
        } else {
            const diaryKey = typeof getDiaryStorageKey === 'function' ? getDiaryStorageKey() : null;
            const wishKey = typeof getUserWishlistKey === 'function' ? getUserWishlistKey() : null;
            const dList = diaryKey ? JSON.parse(localStorage.getItem(diaryKey) || '[]') : [];
            const wList = wishKey ? JSON.parse(localStorage.getItem(wishKey) || '[]') : [];
            const seenPubNames = new Set();

            wList.forEach(w => {
                const item = (typeof normalizeFollowedRestaurant === 'function') ? normalizeFollowedRestaurant(w, '친구가 찜한 맛집', true) : w;
                if (item && item.name && !seenPubNames.has(item.name.toLowerCase())) {
                    seenPubNames.add(item.name.toLowerCase());
                    userPublicRests.push(item);
                }
            });
            dList.forEach(d => {
                const item = (typeof normalizeFollowedRestaurant === 'function') ? normalizeFollowedRestaurant(d, '친구의 방문 기록 맛집', false) : d;
                if (item && item.name && !seenPubNames.has(item.name.toLowerCase())) {
                    seenPubNames.add(item.name.toLowerCase());
                    userPublicRests.push(item);
                }
            });
            if (typeof window.ensureListCoordinates === 'function' && userPublicRests.length > 0) {
                await window.ensureListCoordinates(userPublicRests);
            }
            restCount = seenPubNames.size;
        }

        const resolvedProfile = profile || ((typeof getUserProfile === 'function') ? getUserProfile() : {});
        const privSettings = resolvedProfile.privacySettings || ((typeof getUserPrivacySettings === 'function') ? getUserPrivacySettings() : { showVisitDate: true, allowedSpoons: [1, 2, 3, 4, 5] });
        const publicData = {
            id: String(u.id),
            name: resolvedProfile.nickname || u.nickname,
            handle: resolvedProfile.handle || (isOwner ? '@junho_spoon' : `@user_${String(u.id).slice(-4)}`),
            bio: resolvedProfile.bio || (isOwner ? '서울 마포/용산 일식·고기 맛집 위주로 기록합니다. 직접 가보고 재방문한 찐 맛집만 남겨요 🥢' : '나만의 맛집을 기록하고 공유하는 미식가입니다 🥄'),
            avatar: resolvedProfile.profileImage || u.profileImage || (isOwner ? 'https://api.dicebear.com/7.x/bottts/svg?seed=junho' : ''),
            isMaster: isOwner,
            count: restCount,
            restaurants: userPublicRests,
            privacySettings: privSettings,
            updatedAt: new Date().toISOString()
        };

        // Cache locally immediately so user sees own info or can share
        try {
            let cached = JSON.parse(localStorage.getItem('spoonmap_cached_public_users') || '[]');
            const idx = cached.findIndex(item => String(item.id) === String(u.id));
            if (idx > -1) cached[idx] = publicData;
            else cached.push(publicData);
            localStorage.setItem('spoonmap_cached_public_users', JSON.stringify(cached));
        } catch (_) {}

        if (window.followingRestaurantsCache) {
            window.followingRestaurantsCache.set(String(u.id), userPublicRests);
            window.followingRestaurantsCache.set(`user_${u.id}`, userPublicRests);
            window.followingRestaurantsCache.set(`following_${u.id}`, userPublicRests);
        }

        // 1. Publish with user's Kakao ID
        await db.collection('spoonmap_public_profiles').doc(String(u.id)).set(publicData, { merge: true });

        // 2. If Master, also publish under 'master' doc for guaranteed indexing
        if (isOwner) {
            const masterDocData = { ...publicData, id: 'master' };
            await db.collection('spoonmap_public_profiles').doc('master').set(masterDocData, { merge: true });
        }
        console.log('[Spoonmap] Public profile published to Firestore ☁️');
    } catch (e) {
        console.warn('publishPublicProfile error:', e);
    }
}

let cachedDiscoveredUsers = (function() {
    try {
        return JSON.parse(localStorage.getItem('spoonmap_cached_public_users') || '[]');
    } catch (_) {
        return [];
    }
})();

let publicProfilesUnsubscribe = null;

function setupRealtimePublicProfilesListener() {
    if (!isFirebaseReady || !db || publicProfilesUnsubscribe) return;
    try {
        const currentUserId = getCurrentUser() ? String(getCurrentUser().id) : null;
        const isCurrentUserOwner = typeof isOwnerUser === 'function' ? isOwnerUser() : false;

        publicProfilesUnsubscribe = db.collection('spoonmap_public_profiles')
            .onSnapshot(snapshot => {
                const users = [];
                snapshot.forEach(doc => {
                    const data = doc.data();
                    if (!data) return;
                    const dataId = String(data.id || doc.id);
                    const isSelf = (currentUserId && dataId === currentUserId) || 
                                   (isCurrentUserOwner && (dataId === 'master' || data.isMaster === true));
                    if (!isSelf) {
                        users.push({ ...data, id: dataId });
                        if (Array.isArray(data.restaurants) && data.restaurants.length > 0 && window.followingRestaurantsCache) {
                            window.followingRestaurantsCache.set(dataId, data.restaurants);
                            window.followingRestaurantsCache.set(`user_${dataId}`, data.restaurants);
                            window.followingRestaurantsCache.set(`following_${dataId}`, data.restaurants);
                        }
                    }
                });

                const seen = new Set();
                const deduped = [];
                for (const u of users) {
                    const key = u.name || u.id;
                    if (!seen.has(key)) {
                        seen.add(key);
                        deduped.push(u);
                    }
                }

                cachedDiscoveredUsers = deduped;
                try {
                    localStorage.setItem('spoonmap_cached_public_users', JSON.stringify(deduped));
                } catch (_) {}

                const profileTabEl = document.getElementById('view-profile');
                if (profileTabEl && (profileTabEl.classList.contains('active') || profileTabEl.style.display !== 'none')) {
                    const searchInput = document.getElementById('discover-user-search');
                    if (typeof renderDiscoverUsersList === 'function') {
                        renderDiscoverUsersList(searchInput ? searchInput.value : '');
                    }
                }
            }, err => {
                console.warn('[Spoonmap] Realtime public profiles listener error:', err);
            });
    } catch (e) {
        console.warn('setupRealtimePublicProfilesListener error:', e);
    }
}

async function fetchDiscoveredUsersFromCloud() {
    let localCached = [];
    try {
        localCached = JSON.parse(localStorage.getItem('spoonmap_cached_public_users') || '[]');
    } catch (_) {}

    if (!isFirebaseReady || !db) {
        return localCached;
    }

    setupRealtimePublicProfilesListener();

    try {
        const snap = await db.collection('spoonmap_public_profiles').get();
        window.spoonmapCloudStatus = 'ok';
        const users = [];
        const currentUserId = getCurrentUser() ? String(getCurrentUser().id) : null;
        const isCurrentUserOwner = typeof isOwnerUser === 'function' ? isOwnerUser() : false;

        snap.forEach(doc => {
            const data = doc.data();
            if (!data) return;
            const dataId = String(data.id || doc.id);
            // Don't show current user to themselves in discover list
            const isSelf = (currentUserId && dataId === currentUserId) || 
                           (isCurrentUserOwner && (dataId === 'master' || data.isMaster === true));
            if (!isSelf) {
                users.push({ ...data, id: dataId });
                if (Array.isArray(data.restaurants) && data.restaurants.length > 0 && window.followingRestaurantsCache) {
                    window.followingRestaurantsCache.set(dataId, data.restaurants);
                    window.followingRestaurantsCache.set(`user_${dataId}`, data.restaurants);
                    window.followingRestaurantsCache.set(`following_${dataId}`, data.restaurants);
                }
            }
        });

        // Deduplicate users by name or ID
        const seen = new Set();
        const dedupedUsers = [];
        for (const u of users) {
            const key = u.name || u.id;
            if (!seen.has(key)) {
                seen.add(key);
                dedupedUsers.push(u);
            }
        }

        // Also check spoonmap_users to guarantee no registered user is ever missed
        try {
            const usersSnap = await db.collection('spoonmap_users').get();
            usersSnap.forEach(uDoc => {
                const uData = uDoc.data();
                if (!uData || uDoc.id === 'master_data') return;
                const rawId = uDoc.id.replace(/^user_/, '');
                if (currentUserId && rawId === currentUserId) return;
                if (isCurrentUserOwner && (rawId === 'master' || uData.isMaster === true)) return;

                const prof = uData.profile || {};
                const uInfo = uData.user_info || {};
                const resolvedName = prof.nickname || uInfo.nickname || `미식가 #${rawId.slice(-4)}`;
                const resolvedAvatar = prof.profileImage || uInfo.profileImage || `https://api.dicebear.com/7.x/avataaars/svg?seed=${rawId}`;

                // Build restaurant list for this user from wishlist, diary, and restaurants
                const userRests = [];
                const seenRNames = new Set();
                if (Array.isArray(uData.restaurants)) {
                    uData.restaurants.forEach(r => {
                        const item = (typeof normalizeFollowedRestaurant === 'function') ? normalizeFollowedRestaurant(r, '친구가 등록한 맛집', !!r.isWishlist) : r;
                        if (item && item.name && !seenRNames.has(item.name.toLowerCase())) {
                            seenRNames.add(item.name.toLowerCase());
                            userRests.push(item);
                        }
                    });
                }
                if (Array.isArray(uData.wishlist)) {
                    uData.wishlist.forEach(w => {
                        const item = (typeof normalizeFollowedRestaurant === 'function') ? normalizeFollowedRestaurant(w, '친구가 찜한 맛집', true) : w;
                        if (item && item.name && !seenRNames.has(item.name.toLowerCase())) {
                            seenRNames.add(item.name.toLowerCase());
                            userRests.push(item);
                        }
                    });
                }
                if (Array.isArray(uData.diary)) {
                    uData.diary.forEach(d => {
                        const item = (typeof normalizeFollowedRestaurant === 'function') ? normalizeFollowedRestaurant(d, '친구의 방문 기록 맛집', false) : d;
                        if (item && item.name && !seenRNames.has(item.name.toLowerCase())) {
                            seenRNames.add(item.name.toLowerCase());
                            userRests.push(item);
                        }
                    });
                }
                const totalRests = userRests.length;

                // Cache in memory
                if (window.followingRestaurantsCache) {
                    window.followingRestaurantsCache.set(rawId, userRests);
                    window.followingRestaurantsCache.set(`user_${rawId}`, userRests);
                    window.followingRestaurantsCache.set(`following_${rawId}`, userRests);
                }

                const existingIdx = dedupedUsers.findIndex(ex => String(ex.id) === String(rawId) || ex.name === resolvedName);
                if (existingIdx === -1) {
                    const recoveredUser = {
                        id: rawId,
                        name: resolvedName,
                        handle: prof.handle || `@user_${rawId.slice(-4)}`,
                        bio: prof.bio || '나만의 맛집을 기록하고 공유하는 미식가입니다 🥄',
                        avatar: resolvedAvatar,
                        count: totalRests,
                        restaurants: userRests,
                        isMaster: false,
                        updatedAt: uData.updated_at || new Date().toISOString()
                    };
                    dedupedUsers.push(recoveredUser);
                    db.collection('spoonmap_public_profiles').doc(rawId).set(recoveredUser, { merge: true }).catch(() => {});
                } else {
                    dedupedUsers[existingIdx].count = Math.max(totalRests, dedupedUsers[existingIdx].count || 0);
                    if (userRests.length > 0) {
                        dedupedUsers[existingIdx].restaurants = userRests;
                    }
                    if (prof.profileImage && dedupedUsers[existingIdx].avatar !== prof.profileImage) {
                        dedupedUsers[existingIdx].avatar = prof.profileImage;
                    }
                    if (prof.bio) {
                        dedupedUsers[existingIdx].bio = prof.bio;
                    }
                }
            });
        } catch (_) {}


        if (isCurrentUserOwner && mockList.length > 0) {
            mockList.forEach(mock => {
                const ex = dedupedUsers.find(u => String(u.id) === mock.id);
                if (!ex) {
                    dedupedUsers.push({
                        id: mock.id,
                        name: mock.name,
                        handle: mock.handle,
                        bio: mock.bio,
                        avatar: mock.avatar,
                        count: mock.count,
                        isMasterMock: true,
                        restaurants: mock.restaurants
                    });
                } else {
                    ex.isMasterMock = true;
                    if (!ex.restaurants || !Array.isArray(ex.restaurants)) {
                        ex.restaurants = mock.restaurants;
                    }
                    if (!ex.count || ex.count < 20) {
                        ex.count = 20;
                    }
                }
            });
        }

        cachedDiscoveredUsers = dedupedUsers;
        localStorage.setItem('spoonmap_cached_public_users', JSON.stringify(dedupedUsers));

        // Update persistent followed profiles cache for any followed users
        const currentFollowing = (typeof getUserFollowingList === 'function') ? getUserFollowingList() : [];
        currentFollowing.forEach(fid => {
            const matched = dedupedUsers.find(cu => String(cu.id) === String(fid));
            if (matched && typeof saveFollowedUserProfile === 'function') {
                saveFollowedUserProfile(matched);
            }
        });

        return dedupedUsers;
    } catch (e) {
        console.warn('fetchDiscoveredUsersFromCloud error:', e);
        if (e && (e.code === 'permission-denied' || (e.message && e.message.includes('permission')))) {
            window.spoonmapCloudStatus = 'permission-denied';
        } else {
            window.spoonmapCloudStatus = 'error';
        }
        return localCached;
    }
}

function getUserFollowingKey() {
    const u = getCurrentUser();
    if (!u || !u.id) return 'spoonmap_guest_following';
    return `spoonmap_user_${u.id}_following`;
}

function getUserFollowingList() {
    const key = getUserFollowingKey();
    const isOwner = typeof isOwnerUser === 'function' ? isOwnerUser() : false;
    try {
        const saved = localStorage.getItem(key);
        if (saved) {
            const list = JSON.parse(saved);
            if (Array.isArray(list)) {
                const legacyMockIds = isOwner
                    ? ['master', '5044584236', 'seongsu_foodie', 'wine_lover', 'gukbap_master', 'bakery_zoe', 'yeonnam_chef']
                    : ['seongsu_foodie', 'wine_lover', 'gukbap_master', 'bakery_zoe', 'yeonnam_chef'];
                let cleaned = list
                    .filter(id => !legacyMockIds.includes(String(id)))
                    .map(id => (!isOwner && String(id) === 'master') ? '5044584236' : String(id));

                if (isOwner) {
                    const masterMockIds = ['mock_minwoo_jeju', 'mock_seoyeon_cafe'];
                    const unfollowedMocks = JSON.parse(localStorage.getItem('spoonmap_master_unfollowed_mocks') || '[]');
                    masterMockIds.forEach(mid => {
                        if (!unfollowedMocks.includes(mid) && !cleaned.includes(mid)) {
                            cleaned.push(mid);
                        }
                    });
                } else {
                    cleaned = cleaned.filter(id => !String(id).startsWith('mock_'));
                }

                cleaned = Array.from(new Set(cleaned));
                if (cleaned.length !== list.length || cleaned.some((v, i) => v !== String(list[i]))) {
                    saveUserFollowingList(cleaned);
                }
                return cleaned;
            }
        } else if (isOwner) {
            const initialMasterList = ['mock_minwoo_jeju', 'mock_seoyeon_cafe'];
            saveUserFollowingList(initialMasterList);
            return initialMasterList;
        }
    } catch (e) {
        console.warn('Failed to parse following list', e);
    }
    return isOwner ? ['mock_minwoo_jeju', 'mock_seoyeon_cafe'] : [];
}

function saveUserFollowingList(list) {
    const key = getUserFollowingKey();
    localStorage.setItem(key, JSON.stringify(list));
    if (typeof saveToCloud === 'function') {
        saveToCloud('following', list);
    }
}

function updateProfileAvatarDisplay(url) {
    const contentEl = document.getElementById('profile-avatar-content');
    if (!contentEl) return;
    const profile = getUserProfile();
    const badge = profile && profile.avatarBadge ? profile.avatarBadge : '🥄';
    if (url) {
        contentEl.innerHTML = `
            <img id="profile-avatar-img" src="${url}" alt="프로필 사진" class="profile-avatar-img" onerror="this.onerror=null; this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=fallback';">
            <span class="profile-avatar-badge-tag">${badge}</span>
        `;
    } else {
        contentEl.innerHTML = `<div class="profile-avatar-fallback">🥄</div>`;
    }
}

function toggleFollowUser(targetId) {
    const isOwner = typeof isOwnerUser === 'function' ? isOwnerUser() : false;
    const normTargetId = (!isOwner && String(targetId) === 'master') ? '5044584236' : String(targetId);
    let list = getUserFollowingList();
    const idx = list.findIndex(id => String(id) === normTargetId || String(id) === String(targetId));
    let isNowFollowing = false;

    if (idx > -1) {
        list.splice(idx, 1);
        isNowFollowing = false;
        if (String(normTargetId).startsWith('mock_')) {
            const unfollowedMocks = JSON.parse(localStorage.getItem('spoonmap_master_unfollowed_mocks') || '[]');
            if (!unfollowedMocks.includes(String(normTargetId))) {
                unfollowedMocks.push(String(normTargetId));
                localStorage.setItem('spoonmap_master_unfollowed_mocks', JSON.stringify(unfollowedMocks));
            }
        }
        showDiaryToast(`언팔로우했습니다.`);
    } else {
        list.push(String(normTargetId));
        isNowFollowing = true;
        if (String(normTargetId).startsWith('mock_')) {
            let unfollowedMocks = JSON.parse(localStorage.getItem('spoonmap_master_unfollowed_mocks') || '[]');
            unfollowedMocks = unfollowedMocks.filter(id => id !== String(normTargetId));
            localStorage.setItem('spoonmap_master_unfollowed_mocks', JSON.stringify(unfollowedMocks));
        }
        // Cache user profile immediately to prevent flickering
        let targetUserObj = (typeof cachedDiscoveredUsers !== 'undefined' && Array.isArray(cachedDiscoveredUsers))
            ? cachedDiscoveredUsers.find(cu => String(cu.id) === String(normTargetId) || String(cu.id) === String(targetId))
            : null;
        if (!targetUserObj && typeof MASTER_MOCK_GOURMETS !== 'undefined') {
            targetUserObj = MASTER_MOCK_GOURMETS.find(m => String(m.id) === String(normTargetId));
        }
        if (targetUserObj && typeof saveFollowedUserProfile === 'function') {
            saveFollowedUserProfile(targetUserObj);
        }
        showDiaryToast(`⭐ 팔로우했습니다!`);
    }

    saveUserFollowingList(list);
    renderProfileView();
    if (typeof refreshSidebarFilters === 'function') {
        refreshSidebarFilters();
    }
}
window.toggleFollowUser = toggleFollowUser;

function renderProfileView() {
    const profile = getUserProfile();
    const isOwner = isOwnerUser();
    const followingList = getUserFollowingList();
    const u = getCurrentUser() || {};

    // 1. Profile Header
    const nameEl = document.getElementById('profile-display-name');
    const badgeEl = document.getElementById('profile-role-badge');
    const handleEl = document.getElementById('profile-display-handle');
    const bioEl = document.getElementById('profile-display-bio');

    if (nameEl) nameEl.textContent = profile.nickname;
    if (badgeEl) {
        badgeEl.textContent = isOwner ? '👑 Spoonmap 마스터' : '🥄 미식가';
        badgeEl.className = isOwner ? 'profile-role-badge' : 'profile-role-badge gourmet-badge';
    }
    if (handleEl) handleEl.textContent = profile.handle;
    if (bioEl) bioEl.textContent = profile.bio;

    // Render Avatar cleanly into profile-avatar-content
    const currentAvatarUrl = profile.profileImage || u.profileImage || (isOwner ? 'https://api.dicebear.com/7.x/bottts/svg?seed=junho' : 'https://api.dicebear.com/7.x/avataaars/svg?seed=gourmet');
    updateProfileAvatarDisplay(currentAvatarUrl);

    // 2. Exact Metrics: Registered Restaurants & Diary Visits
    const restStatEl = document.getElementById('profile-stat-restaurants');
    const visitStatEl = document.getElementById('profile-stat-visits');
    const followerStatEl = document.getElementById('profile-stat-followers');
    const followingStatEl = document.getElementById('profile-stat-following');
    const badgeCountEl = document.getElementById('following-badge-count');

    let totalRestaurants = 0;
    if (isOwner) {
        const unified = (typeof getUnifiedRestaurantData === 'function') ? getUnifiedRestaurantData() : [];
        totalRestaurants = unified.length;
    } else {
        totalRestaurants = (typeof getCurrentUserOwnRestaurants === 'function') ? getCurrentUserOwnRestaurants().length : getUserWishlist().length;
    }

    // Accurately count visits via unified entries (no duplicates)
    let totalVisits = 0;
    if (isOwner) {
        totalVisits = (typeof getUnifiedDiaryEntries === 'function') ? getUnifiedDiaryEntries().length : 0;
    } else {
        const diaryStorageKey = typeof getDiaryStorageKey === 'function' ? getDiaryStorageKey() : 'spoonmap_user_diary';
        const userEntries = JSON.parse(localStorage.getItem(diaryStorageKey) || '[]');
        totalVisits = userEntries.length;
    }

    if (restStatEl) restStatEl.textContent = totalRestaurants.toLocaleString();
    if (visitStatEl) visitStatEl.textContent = totalVisits.toLocaleString();

    let totalFollowers = profile.followersCount || 0;
    if (isOwner) {
        totalFollowers = Math.max(2, totalFollowers + 2);
    }
    if (followerStatEl) followerStatEl.textContent = totalFollowers;
    if (followingStatEl) followingStatEl.textContent = followingList.length;
    if (badgeCountEl) badgeCountEl.textContent = `${followingList.length}명`;

    // 3. Auto-publish latest profile to cloud
    publishPublicProfile(profile);

    // 4. Render Following Cards
    renderFollowingCards();

    // 5. Render Discover Users List from Cloud
    renderDiscoverUsersList();
}
window.renderProfileView = renderProfileView;

function renderFollowingCards() {
    const followingGrid = document.getElementById('following-users-grid');
    if (!followingGrid) return;
    const followingList = getUserFollowingList();

    if (followingList.length === 0) {
        followingGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align:center; padding: 2.2rem 1rem; color:#9CA3AF; font-size:0.85rem; line-height: 1.6;">
                아직 팔로잉한 미식가가 없습니다.<br>아래 [새로운 미식가 찾기]에서 다른 유저를 찾아 팔로우해 보세요! 👥
            </div>
        `;
        return;
    }

    followingGrid.innerHTML = followingList.map(fid => {
        const u = (typeof getResolvedFollowedUser === 'function') ? getResolvedFollowedUser(fid) : {
            id: fid,
            name: `미식가 #${String(fid).slice(-4)}`,
            handle: `@user_${String(fid).slice(-4)}`,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${fid}`,
            bio: '맛집을 기록하고 공유하는 미식가입니다 🥄',
            count: 0
        };
        const targetUid = u.id || fid;
        return `
            <div class="following-user-card">
                <div class="following-card-top">
                    <img src="${u.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + targetUid}" alt="${u.name}" class="following-user-avatar">
                    <div class="following-user-info">
                        <div class="following-user-name">${u.name}</div>
                        <div class="following-user-handle">${u.handle}</div>
                    </div>
                </div>
                <p class="following-user-bio">${u.bio || '등록된 소개글이 없습니다.'}</p>
                <div class="following-card-bottom">
                    <span class="following-stats-text">맛집 <b>${(u && (u.isMaster || u.name === '박준호' || String(targetUid) === 'master' || String(targetUid) === '5044584236') && (!u.count || u.count === 0)) ? 728 : (u.count || 0)}곳</b></span>
                    <div class="following-card-actions">
                        <button type="button" class="btn-view-gourmet-map" onclick="viewGourmetMap('${fid}', event)">지도</button>
                        <button type="button" class="btn-view-gourmet-list" onclick="viewGourmetRestaurantList('${fid}', event)">식당 목록</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}
window.renderFollowingCards = renderFollowingCards;

let isRecommendUsersOpen = false;

function toggleRecommendUsers() {
    isRecommendUsersOpen = !isRecommendUsersOpen;
    const btn = document.getElementById('btn-toggle-recommend-users');
    if (btn) {
        if (isRecommendUsersOpen) {
            btn.classList.add('active');
            btn.innerHTML = `<span class="recommend-icon">✨</span><span class="recommend-text">추천 닫기</span>`;
        } else {
            btn.classList.remove('active');
            btn.innerHTML = `<span class="recommend-icon">✨</span><span class="recommend-text">추천</span>`;
        }
    }
    const searchInput = document.getElementById('discover-user-search');
    renderDiscoverUsersList(searchInput ? searchInput.value : '');
}
window.toggleRecommendUsers = toggleRecommendUsers;

async function renderDiscoverUsersList(searchQuery = '') {
    const listEl = document.getElementById('discover-users-list');
    if (!listEl) return;

    const followingList = getUserFollowingList();
    const rawQ = (searchQuery || '').trim();
    const q = rawQ.toLowerCase();
    const cleanQ = q.replace(/^@/, '');

    // Fetch from Firestore
    const cloudUsers = await fetchDiscoveredUsersFromCloud();

    // If any followed user was missing from cachedDiscoveredUsers, fetch individually
    const missingFids = followingList.filter(fid => !String(fid).startsWith('mock_') && !cachedDiscoveredUsers.some(cu => String(cu.id) === String(fid)));
    if (missingFids.length > 0 && isFirebaseReady && db && window.spoonmapCloudStatus !== 'permission-denied') {
        await Promise.all(missingFids.map(async (fid) => {
            try {
                const doc = await db.collection('spoonmap_public_profiles').doc(String(fid)).get();
                if (doc.exists && doc.data()) {
                    const uData = doc.data();
                    cachedDiscoveredUsers.push(uData);
                    if (typeof saveFollowedUserProfile === 'function') {
                        saveFollowedUserProfile(uData);
                    }
                }
            } catch (e) {}
        }));
        localStorage.setItem('spoonmap_cached_public_users', JSON.stringify(cachedDiscoveredUsers));
    }

    // Refresh following cards and sidebar/mobile filters with resolved user names & avatars!
    renderFollowingCards();
    if (typeof refreshSidebarFilters === 'function') {
        refreshSidebarFilters();
    }

    let warningBanner = '';
    if (window.spoonmapCloudStatus === 'permission-denied') {
        warningBanner = `
            <div style="background:#FFFBEB; border:1px solid #FDE68A; border-radius:12px; padding:0.9rem 1rem; margin-bottom:1rem; font-size:0.8rem; color:#92400E; line-height:1.5;">
                <div style="font-weight:700; display:flex; align-items:center; gap:6px; margin-bottom:4px;">
                    <span>⚠️</span> <span>Firebase 클라우드 권한 확인 안내</span>
                </div>
                Firebase Firestore 보안 규칙이 만료되어 실시간 사용자 목록 조회가 일시 제한되었습니다.<br>
                Firebase 콘솔의 Firestore 규칙 탭에서 규칙을 갱신하시면 즉시 다른 미식가 검색이 정상화됩니다.
            </div>
        `;
    }

    // 1. Search Query active: Real-time search across all users
    if (q) {
        const searched = cloudUsers.filter(u => {
            const nameMatch = u.name && u.name.toLowerCase().includes(q);
            const handleMatch = u.handle && u.handle.toLowerCase().replace(/^@/, '').includes(cleanQ);
            const bioMatch = u.bio && u.bio.toLowerCase().includes(q);
            const idMatch = u.id && String(u.id).toLowerCase().includes(cleanQ);
            return nameMatch || handleMatch || bioMatch || idMatch;
        });

        if (searched.length === 0) {
            listEl.innerHTML = `
                ${warningBanner}
                <div style="text-align:center; padding: 2.2rem 1rem; color:#6B7280; font-size:0.85rem; line-height: 1.6;">
                    <div style="font-size:1.6rem; margin-bottom:6px;">🔍</div>
                    <div style="font-weight:700; color:#374151; margin-bottom:4px;">"${searchQuery}" 미식가를 찾을 수 없습니다.</div>
                    <div style="font-size:0.8rem; color:#9CA3AF; margin-bottom:12px;">
                        Spoonmap에 카카오 로그인을 완료한 사용자만 검색할 수 있습니다.<br>
                        아직 Spoonmap을 이용하지 않은 친구라면 초대 링크를 보내보세요!
                    </div>
                    <button type="button" onclick="handleShareMyMap()" style="background:#F59E0B; color:white; border:none; border-radius:8px; padding:8px 16px; font-size:0.82rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:6px; box-shadow:0 2px 6px rgba(245,158,11,0.25);">
                        <span>🔗</span> 내 맛집 초대 링크 공유하기
                    </button>
                </div>
            `;
            return;
        }

        listEl.innerHTML = warningBanner + searched.map(u => renderDiscoverUserItemHtml(u, followingList)).join('');
        return;
    }

    // 2. Initial State: If search is empty and recommendations are NOT open
    if (!isRecommendUsersOpen) {
        listEl.innerHTML = `
            ${warningBanner}
            <div class="discover-initial-guide">
                <div class="discover-initial-icon">✨</div>
                <div class="discover-initial-title">나와 취향이 맞는 미식가를 찾아보세요</div>
                <div class="discover-initial-desc">닉네임이나 @핸들로 직접 검색하거나, 추천 버튼을 눌러 추천 미식가를 둘러보세요.</div>
                <button type="button" class="btn-recommend-open" onclick="toggleRecommendUsers()">
                    <span>✨</span>
                    <span>추천 미식가 보기</span>
                </button>
            </div>
        `;
        return;
    }

    // 3. Recommendations Active: Render up to 5 recommended users
    const recommended = cloudUsers.slice(0, 5);

    if (recommended.length === 0) {
        listEl.innerHTML = `
            ${warningBanner}
            <div style="text-align:center; padding: 2rem 1rem; color:#9CA3AF; font-size:0.84rem; line-height: 1.6;">
                아직 등록된 다른 미식가가 없습니다.<br>상단의 <b>[🔗 내 맛집 공유]</b> 링크를 친구에게 보내 함께 미식 지도를 만들어 보세요! 🥄
            </div>
        `;
        return;
    }

    const recHeader = `
        <div class="discover-recommend-badge-header">
            <span class="recommend-badge-title">✨ 추천 미식가 5인</span>
            <span class="recommend-badge-sub">취향에 맞는 미식가를 팔로우해 보세요</span>
        </div>
    `;

    listEl.innerHTML = warningBanner + recHeader + recommended.map(u => renderDiscoverUserItemHtml(u, followingList)).join('');
}

function renderDiscoverUserItemHtml(u, followingList) {
    const nFn = window.normFriendId || (id => String(id));
    const isFollowing = followingList.some(fid => String(fid) === String(u.id) || nFn(fid) === nFn(u.id));
    const badge = u.isMaster 
        ? '<span style="font-size:0.7rem; background:#FEF3C7; color:#92400E; padding:1px 5px; border-radius:4px; font-weight:700; margin-left:4px;">👑 마스터</span>' 
        : (u.isMasterMock ? '<span style="font-size:0.7rem; background:#EFF6FF; color:#1D4ED8; padding:1px 5px; border-radius:4px; font-weight:700; margin-left:4px;">🥄 큐레이터</span>' : '');
    return `
        <div class="discover-user-item">
            <div class="discover-user-left">
                <img src="${u.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + u.id}" alt="${u.name}">
                <div>
                    <div class="discover-user-names">${u.name}${badge} <span>${u.handle || ''}</span></div>
                    <div class="discover-user-desc">${u.bio || '등록된 소개글이 없습니다.'} · 맛집 ${u.count || 0}곳</div>
                </div>
            </div>
            <button class="btn-toggle-follow ${isFollowing ? 'following' : 'not-following'}" onclick="toggleFollowUser('${u.id}')">
                ${isFollowing ? '팔로잉 ✓' : '+ 팔로우'}
            </button>
        </div>
    `;
}

// ─── Discover Search Listener ───
document.addEventListener('DOMContentLoaded', () => {
    const discoverSearch = document.getElementById('discover-user-search');
    if (discoverSearch) {
        discoverSearch.addEventListener('input', () => {
            renderDiscoverUsersList(discoverSearch.value);
        });
    }
});

// ─── Helper: Get Master's Full Restaurants List (Never polluted by friend's diary!) ───
function getMasterRestaurantList() {
    const isOwner = (typeof isOwnerUser === 'function') && isOwnerUser();

    // If a non-owner friend is logged in, prefer Master's published public profile from Firestore cache if available
    if (!isOwner && typeof cachedDiscoveredUsers !== 'undefined' && Array.isArray(cachedDiscoveredUsers)) {
        const masterProfile = cachedDiscoveredUsers.find(u => String(u.id) === '5044584236' || String(u.id) === 'master' || u.isMaster === true || u.name === '박준호');
        if (masterProfile && Array.isArray(masterProfile.restaurants) && masterProfile.restaurants.length >= 700) {
            return masterProfile.restaurants.map(r => ({
                ...r,
                isOverlapping: false,
                overlappingUsers: undefined
            }));
        }
    }

    const mapByName = new Map();
    const visitsByName = new Map();
    const datesByName = new Map();

    // 1. Base restaurantData (from data.js)
    if (typeof restaurantData !== 'undefined' && Array.isArray(restaurantData)) {
        restaurantData.forEach(r => {
            const key = r.name.trim().toLowerCase();
            mapByName.set(key, { ...r, menu: [...(r.menu || [])] });
            if (r.date) datesByName.set(key, r.date);
        });
    }

    // 2 & 3. Master diary visits: ONLY use getUnifiedDiaryEntries() when Master is logged in; otherwise use static diaryData CSV!
    const masterDiary = isOwner
        ? ((typeof getUnifiedDiaryEntries === 'function') ? getUnifiedDiaryEntries() : [])
        : ((typeof diaryData !== 'undefined' && Array.isArray(diaryData)) ? diaryData : []);

    masterDiary.forEach(item => {
        if (!item || !item.name) return;
        const key = item.name.trim().toLowerCase();
        visitsByName.set(key, (visitsByName.get(key) || 0) + 1);
        if (item.date) {
            const prevDate = datesByName.get(key) || '';
            if (!prevDate || item.date > prevDate) datesByName.set(key, item.date);
        }
        const existing = mapByName.get(key);
        const menuArray = Array.isArray(item.menu) 
            ? item.menu 
            : (typeof item.menu === 'string' ? item.menu.split(',').map(m => m.trim()).filter(Boolean) : []);
        if (existing) {
            if (isOwner && item.source === 'local') {
                if (item.category) existing.category = item.category;
                if (item.rate) existing.rate = item.rate;
                if (menuArray.length > 0) existing.menu = menuArray;
                if (item.location_large) existing.location_large = item.location_large;
                if (item.location_small) existing.location_small = item.location_small;
                if (item.map_url) existing.map_url = item.map_url;
            }
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

    // 4. Overrides (Only apply localStorage master overrides when Owner is logged in)
    if (isOwner) {
        const masterOverrides = JSON.parse(localStorage.getItem('spoonmap_restaurant_overrides') || '{}');
        Object.keys(masterOverrides).forEach(rawKey => {
            const key = rawKey.trim().toLowerCase();
            const ov = masterOverrides[rawKey];
            if (!ov) return;
            const existing = mapByName.get(key);
            if (existing) {
                if (ov.category) existing.category = ov.category;
                if (ov.rate) existing.rate = ov.rate;
                if (ov.location_large) existing.location_large = ov.location_large;
                if (ov.location_small) existing.location_small = ov.location_small;
                if (ov.map_url) existing.map_url = ov.map_url;
            } else {
                mapByName.set(key, {
                    name: ov.name || rawKey,
                    category: ov.category || '기타',
                    rate: ov.rate || '🥄',
                    menu: Array.isArray(ov.menu) ? ov.menu : [],
                    location_large: ov.location_large || '기타',
                    location_small: ov.location_small || '',
                    map_url: ov.map_url || `https://map.kakao.com/link/search/${encodeURIComponent(ov.name || rawKey)}`,
                    visit_count: visitsByName.get(key) || 1,
                    date: datesByName.get(key) || ''
                });
            }
        });
    }

    const list = [];
    mapByName.forEach((item, key) => {
        const count = visitsByName.get(key) || item.visit_count || 1;
        const latestDate = datesByName.get(key) || item.date || '';
        list.push({
            ...item,
            isOverlapping: false,
            overlappingUsers: undefined,
            visit_count: count,
            date: latestDate
        });
    });

    return list;
}
window.getMasterRestaurantList = getMasterRestaurantList;

// ─── Helper: Get Current Logged-in User's Own Saved Restaurants Only ───
function getCurrentUserOwnRestaurants() {
    if (typeof isOwnerUser === 'function' && isOwnerUser()) {
        return getMasterRestaurantList();
    }
    const u = (typeof getCurrentUser === 'function') ? getCurrentUser() : null;
    if (!u || !u.id) return [];

    const mapByName = new Map();
    const diaryKey = (typeof getDiaryStorageKey === 'function') ? getDiaryStorageKey() : `spoonmap_user_${u.id}_diary`;
    const wishKey = (typeof getUserWishlistKey === 'function') ? getUserWishlistKey() : `spoonmap_user_${u.id}_wishlist`;
    let diaryEntries = [];
    let wishEntries = [];
    try {
        diaryEntries = JSON.parse(localStorage.getItem(diaryKey) || '[]');
    } catch (_) {}
    try {
        wishEntries = JSON.parse(localStorage.getItem(wishKey) || '[]');
    } catch (_) {}

    diaryEntries.forEach(d => {
        if (!d || !d.name) return;
        const key = d.name.trim().toLowerCase();
        const existing = mapByName.get(key);
        if (existing) {
            existing.visit_count = (existing.visit_count || 1) + 1;
            if (d.rate) existing.rate = d.rate;
            if (d.map_url) existing.map_url = d.map_url;
        } else {
            mapByName.set(key, {
                name: d.name.trim(),
                category: d.category || '기타',
                rate: d.rate || '🥄🥄🥄',
                location_large: d.location_large || d.location || '기타',
                location_small: d.location_small || '',
                road_address: d.road_address || d.address || '',
                map_url: d.map_url || '',
                x: d.x || '',
                y: d.y || '',
                visit_count: 1,
                date: d.date || ''
            });
        }
    });

    wishEntries.forEach(w => {
        if (!w || !w.name) return;
        const key = w.name.trim().toLowerCase();
        if (!mapByName.has(key)) {
            mapByName.set(key, {
                name: w.name.trim(),
                category: w.category || '음식점',
                rate: w.rate || '🥄🥄🥄',
                location_large: w.location_large || w.location || '기타',
                location_small: w.location_small || '',
                road_address: w.road_address || w.address || '',
                map_url: w.map_url || '',
                x: w.x || '',
                y: w.y || '',
                visit_count: 0,
                isWishlist: true
            });
        }
    });

    return Array.from(mapByName.values());
}
window.getCurrentUserOwnRestaurants = getCurrentUserOwnRestaurants;

// ─── Shared Gourmet Viewer Mode (팔로잉한 실제 유저의 식당 리스트 열람) ───
window.viewGourmetMap = async function(userId, evt) {
    if (evt && evt.currentTarget && typeof evt.currentTarget.blur === 'function') evt.currentTarget.blur();
    if (document.activeElement && typeof document.activeElement.blur === 'function') document.activeElement.blur();

    const nFn = window.normFriendId || (id => String(id || '').trim().replace(/^following_/, '').replace(/^user_/, ''));
    const rawId = String(userId || '').replace(/^following_/, '');
    const cleanId = rawId.replace(/^user_/, '');
    const nId = nFn(cleanId);

    const friends = (typeof window.getFriendsList === 'function') ? window.getFriendsList() : [];
    let friend = friends.find(f =>
        String(f.id) === String(userId) ||
        String(f.realUserId) === String(userId) ||
        String(f.id) === `following_${nId}` ||
        String(f.id) === `following_${cleanId}` ||
        (f.isFollowingUser && nFn(f.realUserId || f.id) === nId)
    );

    if (!friend) {
        const u = (typeof window.getResolvedFollowedUser === 'function') ? window.getResolvedFollowedUser(userId) : null;
        if (u) {
            const mockList = (typeof window !== 'undefined' && window.MASTER_MOCK_GOURMETS) ? window.MASTER_MOCK_GOURMETS : [];
            const directMock = mockList.find(m => String(m.id) === String(userId) || String(m.id) === cleanId);
            const rests = directMock && Array.isArray(directMock.restaurants) ? directMock.restaurants : (u.restaurants || []);
            friend = {
                id: directMock ? directMock.id : `following_${nId}`,
                realUserId: nId,
                name: u.name,
                nickname: u.name,
                avatarText: u.name.slice(0, 1),
                color: '#3B82F6',
                restaurants: rests,
                isFollowingUser: !directMock
            };
        }
    }

    if (!friend) {
        showDiaryToast('미식가 정보를 찾을 수 없습니다.');
        return;
    }

    const targetFriendId = friend.id;
    window.pendingZoomFriendId = targetFriendId;

    // 1. 다른 레이어 끄고 오직 이 친구 지도만 활성화 (initMap 실행 전에 먼저 저장!)
    if (typeof window.saveActiveFriendIds === 'function') {
        window.saveActiveFriendIds([targetFriendId]);
    } else {
        localStorage.setItem('spoonmap_active_friend_ids', JSON.stringify([targetFriendId]));
    }

    // 2. 즉시 MAP 탭으로 화면 전환 - 모바일 및 PC 100% 즉시 이동
    window.location.hash = '#map';
    if (typeof window.switchTabUI === 'function') window.switchTabUI('map');
    document.body.classList.add('is-map-tab');
    if (typeof window.closeAllMobileMapPopovers === 'function') {
        window.closeAllMobileMapPopovers();
    }

    document.querySelectorAll('.tab-btn, .mobile-tab-btn, .mobile-bnav-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.tab === 'map');
    });
    document.querySelectorAll('.tab-content').forEach(c => {
        c.classList.toggle('active', c.id === 'map-view');
    });

    if (!window.map && typeof window.initMap === 'function') {
        window.initMap();
    }

    if (typeof window.hideMyVisitedPlacesOnMap === 'function') {
        window.hideMyVisitedPlacesOnMap();
    }
    const btnWish = document.getElementById('btn-show-wishlist');
    if (btnWish) btnWish.classList.remove('active');
    const switchWish = document.getElementById('switch-wishlist-toggle');
    if (switchWish) switchWish.checked = false;
    const switchMy = document.getElementById('switch-my-restaurants-toggle');
    if (switchMy) switchMy.checked = false;

    showDiaryToast(`📍 ${friend.nickname || friend.name} 님의 맛집 지도 불러오는 중...`);

    // 3. 식당 데이터 및 정확한 좌표 비동기 확보
    const fetchFn = window.fetchFollowingUserRestaurants;
    if (typeof fetchFn === 'function') {
        const fetched = await fetchFn(friend.realUserId || nId || cleanId || userId);
        if (Array.isArray(fetched) && fetched.length > 0) {
            friend.restaurants = fetched;
        }
    }
    if (Array.isArray(friend.restaurants) && friend.restaurants.length > 0 && typeof window.ensureListCoordinates === 'function') {
        await window.ensureListCoordinates(friend.restaurants);
    }

    [userId, rawId, cleanId, nId, `user_${cleanId}`, `user_${nId}`, `following_${cleanId}`, `following_${nId}`, targetFriendId].forEach(k => {
        if (window.followingRestaurantsCache) window.followingRestaurantsCache.set(String(k), friend.restaurants);
    });

    // 4. 지도 리사이즈 및 마커 렌더링 + 사이드바/바텀시트 목록 노출 (window.map 준비 보장)
    let retryCount = 0;
    const renderOverlayNow = () => {
        const activeMap = window.map;
        if (!activeMap) {
            if (typeof window.initMap === 'function') window.initMap();
            if (retryCount < 25) {
                retryCount++;
                setTimeout(renderOverlayNow, 120);
            }
            return;
        }
        if (typeof activeMap.relayout === 'function') {
            activeMap.relayout();
        }
        if (typeof window.renderAllActiveFriendOverlays === 'function') {
            window.renderAllActiveFriendOverlays(targetFriendId);
        }
        if (typeof window.renderFriendChips === 'function') {
            window.renderFriendChips();
        }
        if (typeof window.renderMobileFriendsListInPopover === 'function') {
            window.renderMobileFriendsListInPopover();
        }
        if (typeof window.updateMobileStarChipHighlight === 'function') {
            window.updateMobileStarChipHighlight();
        }
        const resultsList = document.getElementById('map-results-list');
        if (resultsList && (friend.restaurants || []).length > 0) {
            resultsList.style.display = 'block';
            resultsList.style.transform = 'translateY(0)';
            resultsList.classList.remove('collapsed-peek');
        }
        window.pendingZoomFriendId = null;
    };

    renderOverlayNow();
    setTimeout(renderOverlayNow, 150);
    setTimeout(renderOverlayNow, 400);

    showDiaryToast(`📍 ${friend.nickname || friend.name} 님의 맛집 지도 (${(friend.restaurants || []).length}곳)`);
};


window.viewGourmetRestaurantList = async function(userId, evt) {
    if (evt && evt.currentTarget && typeof evt.currentTarget.blur === 'function') evt.currentTarget.blur();
    if (document.activeElement && typeof document.activeElement.blur === 'function') document.activeElement.blur();

    const nFn = window.normFriendId || (id => String(id || '').trim().replace(/^following_/, '').replace(/^user_/, ''));
    const rawId = String(userId || '').replace(/^following_/, '');
    const cleanId = rawId.replace(/^user_/, '');
    const nId = nFn(cleanId);

    // 1. 대상 유저 신속 식별
    const mockList = (typeof window !== 'undefined' && window.MASTER_MOCK_GOURMETS) 
        ? window.MASTER_MOCK_GOURMETS 
        : ((typeof MASTER_MOCK_GOURMETS !== 'undefined') ? MASTER_MOCK_GOURMETS : []);
    const directMock = mockList.find(m => String(m.id) === String(userId) || String(m.id) === rawId || String(m.id) === cleanId);

    const friends = (typeof window.getFriendsList === 'function') ? window.getFriendsList() : [];
    const directFriend = friends.find(f => String(f.id) === String(userId) || String(f.realUserId) === cleanId || String(f.id) === `following_${cleanId}` || (f.isFollowingUser && nFn(f.realUserId || f.id) === nId));

    const cachedUsers = (typeof cachedDiscoveredUsers !== 'undefined' && Array.isArray(cachedDiscoveredUsers)) ? cachedDiscoveredUsers : [];
    const directCached = cachedUsers.find(u => nFn(u.id) === nId || String(u.id) === rawId || String(u.id) === String(userId));

    const resolvedU = (typeof window.getResolvedFollowedUser === 'function') ? window.getResolvedFollowedUser(userId) : null;
    let targetUser = directMock || directFriend || directCached || resolvedU || null;
    const targetName = targetUser?.nickname || targetUser?.name || '미식가';

    // 2. 즉시 LIST 탭으로 화면 전환 - 모바일 및 PC 100% 즉시 이동
    window.location.hash = '#list';
    window.currentViewingGourmet = {
        id: String(nId || userId),
        name: targetName,
        handle: targetUser?.handle || '',
        restaurants: []
    };

    if (typeof window.switchTabUI === 'function') window.switchTabUI('list');

    document.querySelectorAll('.tab-btn, .mobile-tab-btn, .mobile-bnav-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.tab === 'list');
    });
    document.querySelectorAll('.tab-content').forEach(c => {
        c.classList.toggle('active', c.id === 'list-view');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 3. 모든 필터 완전 초기화
    const filtersObj = window.currentFilters;
    if (filtersObj) {
        filtersObj.searchQuery = '';
        filtersObj.category = [];
        filtersObj.location_large = [];
        filtersObj.location_small = [];
        filtersObj.rate = [];
    }
    if (window.dateRangeFilter) {
        window.dateRangeFilter.startDate = null;
        window.dateRangeFilter.endDate = null;
    }
    const searchInput = document.getElementById('restaurant-search');
    if (searchInput) searchInput.value = '';
    const startDateInput = document.getElementById('filter-start-date');
    const endDateInput = document.getElementById('filter-end-date');
    if (startDateInput) { startDateInput.value = ''; startDateInput.dataset.hasValue = 'false'; }
    if (endDateInput) { endDateInput.value = ''; endDateInput.dataset.hasValue = 'false'; }
    if (typeof window.refreshSidebarFilters === 'function') window.refreshSidebarFilters();
    if (typeof window.syncMobileCatChips === 'function') window.syncMobileCatChips();
    if (typeof window.updateFilterButtonsUI === 'function') window.updateFilterButtonsUI();
    if (typeof window.syncRegionUI === 'function') window.syncRegionUI();

    showDiaryToast(`🍽️ ${targetName} 님의 맛집 목록을 불러오는 중...`);

    // 4. 식당 데이터 취득
    let userRestaurants = [];
    const isMaster = nId === '5044584236' || cleanId === 'master' || targetUser?.isMaster || targetName === '박준호';
    if (isMaster) {
        userRestaurants = (typeof window.getMasterRestaurantList === 'function') ? window.getMasterRestaurantList() : [];
    } else if (directMock && Array.isArray(directMock.restaurants) && directMock.restaurants.length > 0) {
        userRestaurants = [...directMock.restaurants];
    } else if (typeof window.fetchFollowingUserRestaurants === 'function') {
        userRestaurants = await window.fetchFollowingUserRestaurants(nId || cleanId || rawId);
    } else if (directFriend && Array.isArray(directFriend.restaurants) && directFriend.restaurants.length > 0) {
        userRestaurants = [...directFriend.restaurants];
    } else if (directCached && Array.isArray(directCached.restaurants) && directCached.restaurants.length > 0) {
        userRestaurants = [...directCached.restaurants];
    }

    // 5. 비공개 설정 반영
    const targetPriv = targetUser?.privacySettings || { showVisitDate: true, allowedSpoons: [1, 2, 3, 4, 5] };
    if (Array.isArray(targetPriv.allowedSpoons) && targetPriv.allowedSpoons.length > 0) {
        userRestaurants = userRestaurants.filter(r => {
            if (r.isWishlist) return true;
            const spoonStr = typeof r.rate === 'string' ? r.rate : '';
            const match = spoonStr.match(/🥄/g);
            const spoonCount = match ? match.length : (typeof r.rate === 'number' ? Math.round(r.rate) : 3);
            return targetPriv.allowedSpoons.includes(spoonCount || 1);
        });
    }
    if (targetPriv.showVisitDate === false) {
        userRestaurants = userRestaurants.map(r => ({ ...r, date: '' }));
    }

    // 6. 캐시 및 currentViewingGourmet 동기화
    if (window.followingRestaurantsCache) {
        [String(userId), rawId, cleanId, nId, `user_${cleanId}`, `user_${nId}`, `following_${cleanId}`, `following_${nId}`].forEach(k => {
            window.followingRestaurantsCache.set(String(k), userRestaurants);
        });
    }
    if (targetUser) targetUser.restaurants = userRestaurants;

    window.currentViewingGourmet = {
        id: String(nId || userId),
        name: targetName,
        handle: targetUser?.handle || '',
        restaurants: userRestaurants
    };

    if (typeof window.setGourmetFilter === 'function') {
        window.setGourmetFilter(String(nId || userId), true);
    }

    // 7. 확정 렌더링
    const renderFn = window.render || window.renderApp;
    if (typeof renderFn === 'function') {
        renderFn();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (userRestaurants.length === 0) {
        showDiaryToast(`ℹ️ ${targetName} 님이 등록한 공개 맛집이 아직 없습니다.`);
    } else {
        showDiaryToast(`🍽️ ${targetName} 님의 맛집 ${userRestaurants.length}곳`);
    }
};



window.exitGourmetViewingMode = function() {
    if (typeof setGourmetFilter === 'function') {
        setGourmetFilter('me', true);
    } else if (typeof window.setGourmetFilter === 'function') {
        window.setGourmetFilter('me', true);
    }
    showDiaryToast(`🏠 내 맛집 목록으로 돌아왔습니다.`);
};

// ─── Privacy Settings for Gourmet List Sharing ───
window.getUserPrivacySettings = function() {
    try {
        const prof = (typeof getUserProfile === 'function') ? getUserProfile() : null;
        if (prof && prof.privacySettings) {
            return {
                showVisitDate: prof.privacySettings.showVisitDate !== false,
                allowedSpoons: Array.isArray(prof.privacySettings.allowedSpoons) && prof.privacySettings.allowedSpoons.length > 0
                    ? prof.privacySettings.allowedSpoons
                    : [1, 2, 3, 4, 5]
            };
        }
        const saved = localStorage.getItem('spoonmap_privacy_settings');
        if (saved) return JSON.parse(saved);
    } catch (_) {}
    return { showVisitDate: true, allowedSpoons: [1, 2, 3, 4, 5] };
};

window.saveUserPrivacySettings = function(settings) {
    try {
        localStorage.setItem('spoonmap_privacy_settings', JSON.stringify(settings));
        const prof = getUserProfile();
        prof.privacySettings = settings;
        saveUserProfile(prof);
    } catch (e) {
        console.warn('saveUserPrivacySettings error:', e);
    }
};

window.toggleProfilePrivacyPanel = function() {
    const panel = document.getElementById('profile-privacy-panel');
    const btn = document.getElementById('btn-profile-privacy-toggle');
    if (!panel || !btn) return;
    const isHidden = panel.style.display === 'none' || !panel.style.display;
    panel.style.display = isHidden ? 'flex' : 'none';
    if (isHidden) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
};

let currentModalPrivacyAllowedSpoons = [1, 2, 3, 4, 5];

window.togglePrivacySpoonChip = function(spoonNum) {
    const num = parseInt(spoonNum, 10);
    const chip = document.querySelector(`.privacy-spoon-chip[data-spoon="${num}"]`);
    if (!chip) return;

    if (currentModalPrivacyAllowedSpoons.includes(num)) {
        if (currentModalPrivacyAllowedSpoons.length === 1) {
            showDiaryToast('최소 한 개 이상의 수저 등급을 선택해야 합니다.');
            return;
        }
        currentModalPrivacyAllowedSpoons = currentModalPrivacyAllowedSpoons.filter(s => s !== num);
        chip.classList.remove('active');
    } else {
        currentModalPrivacyAllowedSpoons.push(num);
        currentModalPrivacyAllowedSpoons.sort((a, b) => a - b);
        chip.classList.add('active');
    }
};

function updatePrivacySettingSummaryBadge() {
    // Summary text removed from button as requested
}

// ─── Profile Edit Modal ───
window.openProfileEditModal = function() {
    const profile = getUserProfile();
    const modal = document.getElementById('profile-edit-modal');
    const nameInput = document.getElementById('edit-profile-name');
    const handleInput = document.getElementById('edit-profile-handle');
    const bioInput = document.getElementById('edit-profile-bio');

    if (nameInput) nameInput.value = profile.nickname || '';
    if (handleInput) handleInput.value = profile.handle || '';
    if (bioInput) bioInput.value = profile.bio || '';

    // Privacy Settings UI Initialization
    const privacy = (profile && profile.privacySettings) ? profile.privacySettings : getUserPrivacySettings();
    const dateToggle = document.getElementById('privacy-toggle-date');
    if (dateToggle) {
        dateToggle.checked = privacy.showVisitDate !== false;
    }

    currentModalPrivacyAllowedSpoons = Array.isArray(privacy.allowedSpoons) && privacy.allowedSpoons.length > 0 
        ? [...privacy.allowedSpoons] 
        : [1, 2, 3, 4, 5];

    [1, 2, 3, 4, 5].forEach(num => {
        const chip = document.querySelector(`.privacy-spoon-chip[data-spoon="${num}"]`);
        if (chip) {
            const isActive = currentModalPrivacyAllowedSpoons.includes(num);
            if (isActive) chip.classList.add('active');
            else chip.classList.remove('active');
        }
    });

    const panel = document.getElementById('profile-privacy-panel');
    const btn = document.getElementById('btn-profile-privacy-toggle');
    if (panel) panel.style.display = 'none';
    if (btn) btn.classList.remove('active');

    if (modal) modal.classList.add('open');
};

window.closeProfileEditModal = function() {
    const modal = document.getElementById('profile-edit-modal');
    if (modal) modal.classList.remove('open');
};

window.saveProfileFromModal = function() {
    const nameInput = document.getElementById('edit-profile-name');
    const handleInput = document.getElementById('edit-profile-handle');
    const bioInput = document.getElementById('edit-profile-bio');
    const dateToggle = document.getElementById('privacy-toggle-date');

    const name = nameInput ? nameInput.value.trim() : '';
    let handle = handleInput ? handleInput.value.trim() : '';
    const bio = bioInput ? bioInput.value.trim() : '';
    const showVisitDate = dateToggle ? dateToggle.checked : true;
    const allowedSpoons = currentModalPrivacyAllowedSpoons.length > 0 ? [...currentModalPrivacyAllowedSpoons] : [1, 2, 3, 4, 5];

    if (!name) {
        alert('닉네임을 입력해 주세요.');
        return;
    }

    if (handle && !handle.startsWith('@')) {
        handle = '@' + handle;
    }

    const current = getUserProfile();
    const updated = {
        ...current,
        nickname: name,
        handle: handle || current.handle,
        bio: bio,
        privacySettings: {
            showVisitDate: showVisitDate,
            allowedSpoons: allowedSpoons
        }
    };

    saveUserProfile(updated);
    try {
        localStorage.setItem('spoonmap_privacy_settings', JSON.stringify(updated.privacySettings));
    } catch (_) {}
    closeProfileEditModal();
    renderProfileView();
    showDiaryToast('✅ 프로필 정보 및 공유 범위 설정이 저장되었습니다!');
};

// ─── Custom Avatar Studio: Config Data & Module ───
const STUDIO_AVATAARS_HAIRS_MALE = [
    { id: 'shortFlat', name: '숏 플랫 댄디', icon: '👦' },
    { id: 'theCaesarAndSidePart', name: '가르마 펌', icon: '👨' },
    { id: 'theCaesar', name: '깔끔 리젠트', icon: '🧑' },
    { id: 'shortWaved', name: '웨이브 숏', icon: '💇‍♂️' },
    { id: 'shortCurly', name: '볼륨 베이비펌', icon: '🦱' },
    { id: 'shavedSides', name: '투블럭 페이드', icon: '💈' },
    { id: 'shaggyMullet', name: '트렌디 울프컷', icon: '🐺' },
    { id: 'shortRound', name: '단정한 댄디볼륨', icon: '✂️' },
    { id: 'sides', name: '포마드 클래식', icon: '👔' },
    { id: 'winterHat02', name: '스트릿 비니', icon: '🧢' },
    { id: 'hat', name: '클래식 페도라', icon: '🎩' }
];

const STUDIO_AVATAARS_HAIRS_FEMALE = [
    { id: 'bob', name: '세련된 태슬 단발', icon: '👩' },
    { id: 'bun', name: '올림머리 당고 번', icon: '👱‍♀️' },
    { id: 'straight01', name: '찰랑 긴 생머리', icon: '👩‍🦰' },
    { id: 'curvy', name: '풍성 여신 웨이브', icon: '👸' },
    { id: 'longButNotTooLong', name: '내추럴 미디움', icon: '👱' },
    { id: 'miaWallace', name: '시크 처피뱅 단발', icon: '🖤' },
    { id: 'curly', name: '러블리 히피펌', icon: '🦱' },
    { id: 'straight02', name: '청순 레이어드 컷', icon: '✨' },
    { id: 'straightAndStrand', name: '사이드 브릿지', icon: '💫' },
    { id: 'bigHair', name: '글래머 볼륨 롱', icon: '💃' },
    { id: 'froBand', name: '헤어밴드 컬', icon: '🎀' },
    { id: 'winterHat02', name: '포근 니트 비니', icon: '🧶' }
];

const STUDIO_AVATAARS_HAIRS = [...STUDIO_AVATAARS_HAIRS_MALE, ...STUDIO_AVATAARS_HAIRS_FEMALE];

const STUDIO_AVATAARS_FACES = [
    { id: 'f_happy', name: '행복한 미소', eyes: 'happy', mouth: 'smile', icon: '😊' },
    { id: 'f_wink', name: '찡긋 윙크', eyes: 'wink', mouth: 'smile', icon: '😉' },
    { id: 'f_eating', name: '냠냠 맛있는', eyes: 'happy', mouth: 'eating', icon: '😋' },
    { id: 'f_love', name: '사랑스런 눈', eyes: 'hearts', mouth: 'smile', icon: '😍' },
    { id: 'f_tongue', name: '장난꾸러기', eyes: 'winkWacky', mouth: 'tongue', icon: '😜' },
    { id: 'f_serious', name: '시크 미식가', eyes: 'default', mouth: 'serious', icon: '🧐' },
    { id: 'f_cry', name: '감동의 눈물', eyes: 'cry', mouth: 'smile', icon: '🥹' },
    { id: 'f_surprised', name: '동공지진', eyes: 'surprised', mouth: 'disbelief', icon: '😲' },
    { id: 'f_twinkle', name: '반짝반짝', eyes: 'default', mouth: 'twinkle', icon: '✨' },
    { id: 'f_dizzy', name: '배터짐 기절', eyes: 'xDizzy', mouth: 'eating', icon: '😵' }
];

const STUDIO_AVATAARS_CLOTHES = [
    { id: 'blazerAndShirt', name: '셰프 수트', icon: '👔' },
    { id: 'collarAndSweater', name: '셔츠 & 니트', icon: '🧶' },
    { id: 'hoodie', name: '스트릿 후드', icon: '🧥' },
    { id: 'overall', name: '빈티지 멜빵', icon: '👖' },
    { id: 'graphicShirt', name: '그래픽 반팔', icon: '🍕' },
    { id: 'shirtCrewNeck', name: '크루넥 티', icon: '👕' },
    { id: 'shirtVNeck', name: '깔끔 V넥', icon: '🎽' },
    { id: 'blazerAndSweater', name: '블레이저', icon: '🕴️' }
];

const STUDIO_HAIR_COLORS = [
    { id: '2c1b18', name: '딥 블랙' },
    { id: '4a312c', name: '다크 브라운' },
    { id: '724133', name: '내추럴 브라운' },
    { id: 'd6b370', name: '골든 블론드' },
    { id: 'ecdcbf', name: '애쉬 블론드' },
    { id: 'f59797', name: '파스텔 핑크' },
    { id: 'c93305', name: '코퍼 레드' },
    { id: 'e8e1e1', name: '실버 그레이' }
];

const STUDIO_SKIN_TONES = [
    { id: 'ffdbb4', name: '라이트 톤', hex: 'ffdbb4' },
    { id: 'edb98a', name: '내추럴 톤', hex: 'edb98a' },
    { id: 'f8d25c', name: '웜 베이지', hex: 'f8d25c' },
    { id: 'd08b5b', name: '구릿빛 탠', hex: 'd08b5b' },
    { id: 'ae5d29', name: '딥 브라운', hex: 'ae5d29' },
    { id: '614335', name: '다크 톤', hex: '614335' }
];

const STUDIO_CLOTHES_COLORS = [
    { id: 'ffffff', name: '화이트' },
    { id: 'ff5c5c', name: '코랄 레드' },
    { id: '25557c', name: '딥 네이비' },
    { id: '262e33', name: '젯 블랙' },
    { id: 'a7ffc4', name: '세이지 민트' },
    { id: 'ffffb1', name: '버터 옐로우' },
    { id: 'b1e2ff', name: '스카이 블루' },
    { id: 'ffafb9', name: '파스텔 핑크' },
    { id: '929598', name: '차콜 그레이' },
    { id: 'e6e6e6', name: '소프트 아이보리' }
];

const STUDIO_ACCESSORIES = [
    { id: 'none', name: '안경 없음', icon: '🚫' },
    { id: 'round', name: '둥근 뿔테', icon: '👓' },
    { id: 'prescription02', name: '클래식 사각', icon: '🕶️' },
    { id: 'sunglasses', name: '블랙 선글라스', icon: '😎' },
    { id: 'wayfarers', name: '틴트 글래스', icon: '🥸' }
];

const STUDIO_BG_COLORS = [
    { id: 'FFE5E8', name: '소프트 코랄' },
    { id: 'FFE8D6', name: '피치 크림' },
    { id: 'FEF3C7', name: '버터 옐로우' },
    { id: 'D1FAE5', name: '민트 그린' },
    { id: 'E2E8F0', name: '세이지 그레이' },
    { id: 'E0F2FE', name: '스카이 블루' },
    { id: 'EDE9FE', name: '라벤더' },
    { id: 'FCE7F3', name: '체리 블라썸' },
    { id: 'F8FAF5', name: '크림 베이지' },
    { id: '334155', name: '다크 차콜' }
];

const STUDIO_FOOD_BADGES = [
    { id: 'spoon', emoji: '🥄', name: '수저' },
    { id: 'wine', emoji: '🍷', name: '와인' },
    { id: 'ramen', emoji: '🍜', name: '라멘' },
    { id: 'sushi', emoji: '🍣', name: '스시' },
    { id: 'meat', emoji: '🥩', name: '고기' },
    { id: 'pizza', emoji: '🍕', name: '피자' },
    { id: 'croissant', emoji: '🥐', name: '크루아상' },
    { id: 'coffee', emoji: '☕', name: '커피' },
    { id: 'dessert', emoji: '🍰', name: '디저트' },
    { id: 'crown', emoji: '👑', name: '왕관' }
];

const STUDIO_NOTION_HAIRS_MALE = [
    { id: 'variant01', name: '클래식 가르마', icon: '👨' },
    { id: 'variant03', name: '깔끔 크롭컷', icon: '👦' },
    { id: 'variant05', name: '댄디 숏컷', icon: '🧑' },
    { id: 'variant12', name: '바버샵 포마드', icon: '💈' },
    { id: 'variant13', name: '내추럴 숏 가르마', icon: '💇‍♂️' },
    { id: 'variant15', name: '소프트 리젠트', icon: '✨' },
    { id: 'variant22', name: '댄디 투블럭', icon: '👔' },
    { id: 'variant27', name: '캐주얼 텍스처 숏', icon: '💫' },
    { id: 'variant33', name: '모던 사이드 스윕', icon: '🕶️' },
    { id: 'variant53', name: '힙한 샤기 울프컷', icon: '🐺' },
    { id: 'hat', name: '스트릿 비니 앤 캡', icon: '🧢' }
];

const STUDIO_NOTION_HAIRS_FEMALE = [
    { id: 'variant07', name: '내추럴 롱 웨이브', icon: '💁' },
    { id: 'variant08', name: '찰랑 롱 스트레이트', icon: '👩‍🦰' },
    { id: 'variant10', name: '시크 단발 태슬컷', icon: '👩' },
    { id: 'variant02', name: '세련된 미디움 웨이브', icon: '💇‍♀️' },
    { id: 'variant04', name: '러블리 C컬 단발', icon: '✨' },
    { id: 'variant16', name: '풍성 여신 웨이브', icon: '👸' },
    { id: 'variant20', name: '사이드 포니테일', icon: '👧' },
    { id: 'variant24', name: '우아한 레이어드 컷', icon: '💫' },
    { id: 'variant26', name: '러블리 당고머리 번', icon: '👱‍♀️' },
    { id: 'variant28', name: '로맨틱 S컬 롱', icon: '💖' },
    { id: 'variant30', name: '하이 포니테일', icon: '🎀' },
    { id: 'variant36', name: '화려한 글램 롱헤어', icon: '💃' }
];

const STUDIO_NOTION_HAIRS = [...STUDIO_NOTION_HAIRS_MALE, ...STUDIO_NOTION_HAIRS_FEMALE];

const STUDIO_NOTION_FACES = [
    { id: 'nf_1', name: '반달 눈웃음', eyes: 'variant03', lips: 'variant03', icon: '😊' },
    { id: 'nf_2', name: '함박 미소', eyes: 'variant03', lips: 'variant08', icon: '😄' },
    { id: 'nf_3', name: '찡긋 윙크', eyes: 'variant04', lips: 'variant05', icon: '😉' },
    { id: 'nf_4', name: '시크 차분', eyes: 'variant01', lips: 'variant04', icon: '😐' },
    { id: 'nf_5', name: '놀란 동공지진', eyes: 'variant05', lips: 'variant12', icon: '😮' }
];

const STUDIO_NOTION_GESTURES = [
    { id: 'none', name: '제스처 없음', icon: '🚫' },
    { id: 'waveOkLongArms', name: '오케이 링', icon: '👌' },
    { id: 'handPhone', name: '스마트폰', icon: '📱' },
    { id: 'point', name: '손가락 가리킴', icon: '👉' },
    { id: 'hand', name: '손인사', icon: '👋' }
];

const AVATAARS_TABS = [
    { id: 'gender', name: '성별 베이스' },
    { id: 'hair', name: '헤어 컬러' },
    { id: 'face', name: '표정' },
    { id: 'clothes', name: '의상 컬러' },
    { id: 'accessories', name: '소품' },
    { id: 'bg', name: '배경 뱃지' }
];

const NOTION_TABS = [
    { id: 'gender', name: '성별 베이스' },
    { id: 'hair', name: '헤어' },
    { id: 'face', name: '눈 입 표정' },
    { id: 'accessories', name: '제스처 소품' },
    { id: 'bg', name: '배경 뱃지' }
];

let avatarStudioState = {
    styleBase: 'avataaars',
    activeTab: 'hair',
    gender: 'male',
    isKakaoPhoto: false,
    top: 'theCaesarAndSidePart',
    hairColor: '2c1b18',
    skinColor: 'ffdbb4',
    eyes: 'happy',
    mouth: 'smile',
    clothing: 'blazerAndShirt',
    clothesColor: '25557c',
    accessories: 'none',
    notionGender: 'male',
    notionHair: 'variant01',
    notionEyes: 'variant03',
    notionLips: 'variant03',
    notionGlasses: 'none',
    notionGesture: 'none',
    backgroundColor: 'FFE5E8',
    foodBadge: '🥄'
};

function buildStudioAvatarUrl() {
    if (avatarStudioState.isKakaoPhoto) {
        const u = getCurrentUser();
        return (u && u.profileImage) || 'https://api.dicebear.com/7.x/bottts/svg?seed=kakao';
    }
    if (avatarStudioState.styleBase === 'avataaars') {
        const params = [
            `top=${encodeURIComponent(avatarStudioState.top)}`,
            `hairColor=${encodeURIComponent(avatarStudioState.hairColor)}`,
            `skinColor=${encodeURIComponent(avatarStudioState.skinColor)}`,
            `eyes=${encodeURIComponent(avatarStudioState.eyes)}`,
            `mouth=${encodeURIComponent(avatarStudioState.mouth)}`,
            `clothing=${encodeURIComponent(avatarStudioState.clothing)}`,
            `clothesColor=${encodeURIComponent(avatarStudioState.clothesColor)}`,
            `backgroundColor=${encodeURIComponent(avatarStudioState.backgroundColor)}`
        ];
        if (avatarStudioState.accessories !== 'none') {
            params.push(`accessories=${encodeURIComponent(avatarStudioState.accessories)}`);
            params.push('accessoriesProbability=100');
        } else {
            params.push('accessoriesProbability=0');
        }
        params.push('facialHairProbability=0');
        return `https://api.dicebear.com/7.x/avataaars/svg?${params.join('&')}`;
    } else {
        const params = [
            `hair=${encodeURIComponent(avatarStudioState.notionHair)}`,
            `eyes=${encodeURIComponent(avatarStudioState.notionEyes)}`,
            `lips=${encodeURIComponent(avatarStudioState.notionLips)}`,
            `backgroundColor=${encodeURIComponent(avatarStudioState.backgroundColor)}`
        ];
        if (avatarStudioState.notionGlasses !== 'none') {
            params.push(`glasses=${encodeURIComponent(avatarStudioState.notionGlasses)}`);
            params.push('glassesProbability=100');
        } else {
            params.push('glassesProbability=0');
        }
        if (avatarStudioState.notionGesture !== 'none') {
            params.push(`gesture=${encodeURIComponent(avatarStudioState.notionGesture)}`);
            params.push('gestureProbability=100');
            params.push('flip=true');
        } else {
            params.push('gestureProbability=0');
        }
        return `https://api.dicebear.com/7.x/notionists/svg?${params.join('&')}`;
    }
}

function updateStudioPreview() {
    const img = document.getElementById('studio-avatar-preview-img');
    const wrap = document.getElementById('studio-avatar-wrap');
    const badge = document.getElementById('studio-food-badge-overlay');
    if (img) img.src = buildStudioAvatarUrl();
    if (wrap) wrap.style.backgroundColor = '#' + avatarStudioState.backgroundColor;
    if (badge) badge.textContent = avatarStudioState.foodBadge;
}

function renderStudioTabBar() {
    const tabBar = document.getElementById('studio-tab-bar');
    if (!tabBar) return;
    const tabs = avatarStudioState.styleBase === 'avataaars' ? AVATAARS_TABS : NOTION_TABS;
    
    if (!tabs.some(t => t.id === avatarStudioState.activeTab)) {
        avatarStudioState.activeTab = tabs[0].id;
    }

    tabBar.innerHTML = tabs.map(t => `
        <button type="button" class="studio-tab-btn ${t.id === avatarStudioState.activeTab ? 'active' : ''}" data-tab="${t.id}" onclick="switchStudioTab('${t.id}')">
            ${t.name}
        </button>
    `).join('');
}

function renderStudioTabOptions(tabId) {
    if (avatarStudioState.styleBase === 'avataaars') {
        if (tabId === 'gender') {
            return `
                <div>
                    <div class="studio-section-title"><span>성별 베이스</span></div>
                    <div class="studio-parts-grid">
                        <div class="studio-part-card ${avatarStudioState.gender === 'male' ? 'selected' : ''}" onclick="setStudioGenderPreset('male')">
                            <span class="studio-part-icon">👨</span>
                            <span class="studio-part-name">남성형</span>
                        </div>
                        <div class="studio-part-card ${avatarStudioState.gender === 'female' ? 'selected' : ''}" onclick="setStudioGenderPreset('female')">
                            <span class="studio-part-icon">👩</span>
                            <span class="studio-part-name">여성형</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="studio-section-title"><span>피부톤</span></div>
                    <div class="studio-color-row">
                        ${STUDIO_SKIN_TONES.map(s => `
                            <div class="studio-color-chip ${avatarStudioState.skinColor === s.hex ? 'selected' : ''}" style="background-color: #${s.hex};" title="${s.name}" onclick="setStudioPart('skinColor', '${s.hex}', this)"></div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        if (tabId === 'hair') {
            const currentGender = avatarStudioState.gender || 'male';
            const hairs = currentGender === 'male' ? STUDIO_AVATAARS_HAIRS_MALE : STUDIO_AVATAARS_HAIRS_FEMALE;
            const title = currentGender === 'male' ? `남성 헤어스타일 · ${hairs.length}종` : `여성 헤어스타일 · ${hairs.length}종`;

            return `
                <div>
                    <div class="studio-section-title">
                        <span>${title}</span>
                        <div class="studio-gender-pill-toggle">
                            <button type="button" class="studio-gender-pill-btn ${currentGender === 'male' ? 'active' : ''}" onclick="setStudioGenderPreset('male')">남성</button>
                            <button type="button" class="studio-gender-pill-btn ${currentGender === 'female' ? 'active' : ''}" onclick="setStudioGenderPreset('female')">여성</button>
                        </div>
                    </div>
                    <div class="studio-parts-grid">
                        ${hairs.map(h => `
                            <div class="studio-part-card ${avatarStudioState.top === h.id ? 'selected' : ''}" onclick="setStudioPart('top', '${h.id}', this)">
                                <span class="studio-part-icon">${h.icon}</span>
                                <span class="studio-part-name">${h.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div>
                    <div class="studio-section-title"><span>헤어 컬러 · 8종</span></div>
                    <div class="studio-color-row">
                        ${STUDIO_HAIR_COLORS.map(c => `
                            <div class="studio-color-chip ${avatarStudioState.hairColor === c.id ? 'selected' : ''}" style="background-color: #${c.id};" title="${c.name}" onclick="setStudioPart('hairColor', '${c.id}', this)"></div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        if (tabId === 'face') {
            return `
                <div>
                    <div class="studio-section-title"><span>표정 및 눈입 조합 · 10종</span></div>
                    <div class="studio-parts-grid">
                        ${STUDIO_AVATAARS_FACES.map(f => {
                            const isSel = (f.eyes === avatarStudioState.eyes && f.mouth === avatarStudioState.mouth);
                            return `
                                <div class="studio-part-card ${isSel ? 'selected' : ''}" onclick="setStudioFace('${f.eyes}', '${f.mouth}', this)">
                                    <span class="studio-part-icon">${f.icon}</span>
                                    <span class="studio-part-name">${f.name}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }

        if (tabId === 'clothes') {
            return `
                <div>
                    <div class="studio-section-title"><span>의상 스타일 · 8종</span></div>
                    <div class="studio-parts-grid">
                        ${STUDIO_AVATAARS_CLOTHES.map(c => `
                            <div class="studio-part-card ${avatarStudioState.clothing === c.id ? 'selected' : ''}" onclick="setStudioPart('clothing', '${c.id}', this)">
                                <span class="studio-part-icon">${c.icon}</span>
                                <span class="studio-part-name">${c.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div>
                    <div class="studio-section-title"><span>의상 컬러 · 10종</span></div>
                    <div class="studio-color-row">
                        ${STUDIO_CLOTHES_COLORS.map(c => `
                            <div class="studio-color-chip ${avatarStudioState.clothesColor === c.id ? 'selected' : ''}" style="background-color: #${c.id};" title="${c.name}" onclick="setStudioPart('clothesColor', '${c.id}', this)"></div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        if (tabId === 'accessories') {
            return `
                <div>
                    <div class="studio-section-title"><span>안경 및 소품</span></div>
                    <div class="studio-parts-grid">
                        ${STUDIO_ACCESSORIES.map(a => `
                            <div class="studio-part-card ${avatarStudioState.accessories === a.id ? 'selected' : ''}" onclick="setStudioPart('accessories', '${a.id}', this)">
                                <span class="studio-part-icon">${a.icon}</span>
                                <span class="studio-part-name">${a.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        if (tabId === 'bg') {
            return `
                <div>
                    <div class="studio-section-title"><span>시그니처 미식 뱃지 · 10종</span></div>
                    <div class="studio-parts-grid">
                        ${STUDIO_FOOD_BADGES.map(b => `
                            <div class="studio-part-card ${avatarStudioState.foodBadge === b.emoji ? 'selected' : ''}" onclick="setStudioPart('foodBadge', '${b.emoji}', this)">
                                <span class="studio-part-icon">${b.emoji}</span>
                                <span class="studio-part-name">${b.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div>
                    <div class="studio-section-title"><span>배경 테마 컬러 · 10종</span></div>
                    <div class="studio-color-row">
                        ${STUDIO_BG_COLORS.map(bg => `
                            <div class="studio-color-chip ${avatarStudioState.backgroundColor === bg.id ? 'selected' : ''}" style="background-color: #${bg.id};" title="${bg.name}" onclick="setStudioPart('backgroundColor', '${bg.id}', this)"></div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    } else {
        if (tabId === 'gender') {
            return `
                <div>
                    <div class="studio-section-title"><span>성별 베이스</span></div>
                    <div class="studio-parts-grid">
                        <div class="studio-part-card ${avatarStudioState.notionGender === 'male' ? 'selected' : ''}" onclick="setStudioNotionGenderPreset('male')">
                            <span class="studio-part-icon">👨</span>
                            <span class="studio-part-name">남성형</span>
                        </div>
                        <div class="studio-part-card ${avatarStudioState.notionGender === 'female' ? 'selected' : ''}" onclick="setStudioNotionGenderPreset('female')">
                            <span class="studio-part-icon">👩</span>
                            <span class="studio-part-name">여성형</span>
                        </div>
                    </div>
                </div>
            `;
        }

        if (tabId === 'hair') {
            const currentGender = avatarStudioState.notionGender || 'male';
            const hairs = currentGender === 'male' ? STUDIO_NOTION_HAIRS_MALE : STUDIO_NOTION_HAIRS_FEMALE;
            const title = currentGender === 'male' ? `남성 노션 헤어 · ${hairs.length}종` : `여성 노션 헤어 · ${hairs.length}종`;

            return `
                <div>
                    <div class="studio-section-title">
                        <span>${title}</span>
                        <div class="studio-gender-pill-toggle">
                            <button type="button" class="studio-gender-pill-btn ${currentGender === 'male' ? 'active' : ''}" onclick="setStudioNotionGenderPreset('male')">남성</button>
                            <button type="button" class="studio-gender-pill-btn ${currentGender === 'female' ? 'active' : ''}" onclick="setStudioNotionGenderPreset('female')">여성</button>
                        </div>
                    </div>
                    <div class="studio-parts-grid">
                        ${hairs.map(h => `
                            <div class="studio-part-card ${avatarStudioState.notionHair === h.id ? 'selected' : ''}" onclick="setStudioPart('notionHair', '${h.id}', this)">
                                <span class="studio-part-icon">${h.icon}</span>
                                <span class="studio-part-name">${h.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        if (tabId === 'face') {
            return `
                <div>
                    <div class="studio-section-title"><span>노션 눈입 표정 · 5종</span></div>
                    <div class="studio-parts-grid">
                        ${STUDIO_NOTION_FACES.map(f => {
                            const isSel = (f.eyes === avatarStudioState.notionEyes && f.lips === avatarStudioState.notionLips);
                            return `
                                <div class="studio-part-card ${isSel ? 'selected' : ''}" onclick="setStudioFace('${f.eyes}', '${f.lips}', this)">
                                    <span class="studio-part-icon">${f.icon}</span>
                                    <span class="studio-part-name">${f.name}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }

        if (tabId === 'accessories') {
            return `
                <div>
                    <div class="studio-section-title"><span>손동작 제스처 · 5종</span></div>
                    <div class="studio-parts-grid">
                        ${STUDIO_NOTION_GESTURES.map(g => `
                            <div class="studio-part-card ${avatarStudioState.notionGesture === g.id ? 'selected' : ''}" onclick="setStudioPart('notionGesture', '${g.id}', this)">
                                <span class="studio-part-icon">${g.icon}</span>
                                <span class="studio-part-name">${g.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div>
                    <div class="studio-section-title"><span>노션 안경</span></div>
                    <div class="studio-parts-grid">
                        <div class="studio-part-card ${avatarStudioState.notionGlasses === 'none' ? 'selected' : ''}" onclick="setStudioPart('notionGlasses', 'none', this)">
                            <span class="studio-part-icon">🚫</span>
                            <span class="studio-part-name">안경 없음</span>
                        </div>
                        <div class="studio-part-card ${avatarStudioState.notionGlasses === 'variant01' ? 'selected' : ''}" onclick="setStudioPart('notionGlasses', 'variant01', this)">
                            <span class="studio-part-icon">👓</span>
                            <span class="studio-part-name">모던 안경</span>
                        </div>
                    </div>
                </div>
            `;
        }

        if (tabId === 'bg') {
            return `
                <div>
                    <div class="studio-section-title"><span>시그니처 미식 뱃지 · 10종</span></div>
                    <div class="studio-parts-grid">
                        ${STUDIO_FOOD_BADGES.map(b => `
                            <div class="studio-part-card ${avatarStudioState.foodBadge === b.emoji ? 'selected' : ''}" onclick="setStudioPart('foodBadge', '${b.emoji}', this)">
                                <span class="studio-part-icon">${b.emoji}</span>
                                <span class="studio-part-name">${b.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div>
                    <div class="studio-section-title"><span>배경 테마 컬러 · 10종</span></div>
                    <div class="studio-color-row">
                        ${STUDIO_BG_COLORS.map(bg => `
                            <div class="studio-color-chip ${avatarStudioState.backgroundColor === bg.id ? 'selected' : ''}" style="background-color: #${bg.id};" title="${bg.name}" onclick="setStudioPart('backgroundColor', '${bg.id}', this)"></div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
    }
    return '';
}

window.switchStudioTab = function(tabId) {
    avatarStudioState.activeTab = tabId;
    const tabBar = document.getElementById('studio-tab-bar');
    if (tabBar) {
        tabBar.querySelectorAll('.studio-tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabId);
        });
    }
    const container = document.getElementById('studio-options-content');
    if (container) {
        container.innerHTML = renderStudioTabOptions(tabId);
        container.scrollTop = 0;
    }
};

window.switchStudioStyle = function(style) {
    avatarStudioState.styleBase = style;
    avatarStudioState.isKakaoPhoto = false;

    const btnAvat = document.getElementById('btn-style-avataaars');
    const btnNotion = document.getElementById('btn-style-notionists');
    if (btnAvat) btnAvat.classList.toggle('active', style === 'avataaars');
    if (btnNotion) btnNotion.classList.toggle('active', style === 'notionists');

    renderStudioTabBar();
    const container = document.getElementById('studio-options-content');
    if (container) {
        container.innerHTML = renderStudioTabOptions(avatarStudioState.activeTab);
        container.scrollTop = 0;
    }
    updateStudioPreview();
};

window.setStudioPart = function(partKey, value, el) {
    avatarStudioState.isKakaoPhoto = false;
    avatarStudioState[partKey] = value;
    updateStudioPreview();

    if (el) {
        const parent = el.closest('.studio-parts-grid, .studio-color-row');
        if (parent) {
            parent.querySelectorAll('.selected').forEach(c => c.classList.remove('selected'));
            el.classList.add('selected');
        }
    }
};

window.setStudioFace = function(eyes, mouth, el) {
    avatarStudioState.isKakaoPhoto = false;
    if (avatarStudioState.styleBase === 'avataaars') {
        avatarStudioState.eyes = eyes;
        avatarStudioState.mouth = mouth;
    } else {
        avatarStudioState.notionEyes = eyes;
        avatarStudioState.notionLips = mouth;
    }
    updateStudioPreview();

    if (el) {
        const parent = el.closest('.studio-parts-grid');
        if (parent) {
            parent.querySelectorAll('.selected').forEach(c => c.classList.remove('selected'));
            el.classList.add('selected');
        }
    }
};

window.setStudioGenderPreset = function(gender) {
    avatarStudioState.isKakaoPhoto = false;
    avatarStudioState.gender = gender;
    if (gender === 'male') {
        if (!STUDIO_AVATAARS_HAIRS_MALE.some(h => h.id === avatarStudioState.top)) {
            avatarStudioState.top = 'theCaesarAndSidePart';
        }
        avatarStudioState.clothing = 'blazerAndShirt';
        avatarStudioState.eyes = 'happy';
        avatarStudioState.mouth = 'smile';
        avatarStudioState.accessories = 'none';
    } else {
        if (!STUDIO_AVATAARS_HAIRS_FEMALE.some(h => h.id === avatarStudioState.top)) {
            avatarStudioState.top = 'bob';
        }
        avatarStudioState.clothing = 'collarAndSweater';
        avatarStudioState.eyes = 'happy';
        avatarStudioState.mouth = 'smile';
        avatarStudioState.accessories = 'none';
    }
    updateStudioPreview();

    const container = document.getElementById('studio-options-content');
    if (container) {
        container.innerHTML = renderStudioTabOptions(avatarStudioState.activeTab);
    }
};

window.setStudioNotionGenderPreset = function(gender) {
    avatarStudioState.isKakaoPhoto = false;
    avatarStudioState.notionGender = gender;
    if (gender === 'male') {
        if (!STUDIO_NOTION_HAIRS_MALE.some(h => h.id === avatarStudioState.notionHair)) {
            avatarStudioState.notionHair = 'variant01';
        }
        avatarStudioState.notionEyes = 'variant03';
        avatarStudioState.notionLips = 'variant03';
    } else {
        if (!STUDIO_NOTION_HAIRS_FEMALE.some(h => h.id === avatarStudioState.notionHair)) {
            avatarStudioState.notionHair = 'variant07';
        }
        avatarStudioState.notionEyes = 'variant03';
        avatarStudioState.notionLips = 'variant05';
    }
    updateStudioPreview();

    const container = document.getElementById('studio-options-content');
    if (container) {
        container.innerHTML = renderStudioTabOptions(avatarStudioState.activeTab);
    }
};

window.shuffleStudioParts = function() {
    avatarStudioState.isKakaoPhoto = false;
    if (avatarStudioState.styleBase === 'avataaars') {
        const hairList = (avatarStudioState.gender === 'female') ? STUDIO_AVATAARS_HAIRS_FEMALE : STUDIO_AVATAARS_HAIRS_MALE;
        avatarStudioState.top = hairList[Math.floor(Math.random() * hairList.length)].id;
        avatarStudioState.hairColor = STUDIO_HAIR_COLORS[Math.floor(Math.random() * STUDIO_HAIR_COLORS.length)].id;
        avatarStudioState.skinColor = STUDIO_SKIN_TONES[Math.floor(Math.random() * STUDIO_SKIN_TONES.length)].id;
        const face = STUDIO_AVATAARS_FACES[Math.floor(Math.random() * STUDIO_AVATAARS_FACES.length)];
        avatarStudioState.eyes = face.eyes;
        avatarStudioState.mouth = face.mouth;
        avatarStudioState.clothing = STUDIO_AVATAARS_CLOTHES[Math.floor(Math.random() * STUDIO_AVATAARS_CLOTHES.length)].id;
        avatarStudioState.clothesColor = STUDIO_CLOTHES_COLORS[Math.floor(Math.random() * STUDIO_CLOTHES_COLORS.length)].id;
        avatarStudioState.accessories = STUDIO_ACCESSORIES[Math.floor(Math.random() * STUDIO_ACCESSORIES.length)].id;
    } else {
        const notionHairList = (avatarStudioState.notionGender === 'female') ? STUDIO_NOTION_HAIRS_FEMALE : STUDIO_NOTION_HAIRS_MALE;
        avatarStudioState.notionHair = notionHairList[Math.floor(Math.random() * notionHairList.length)].id;
        const nFace = STUDIO_NOTION_FACES[Math.floor(Math.random() * STUDIO_NOTION_FACES.length)];
        avatarStudioState.notionEyes = nFace.eyes;
        avatarStudioState.notionLips = nFace.lips;
        avatarStudioState.notionGlasses = Math.random() > 0.5 ? 'variant01' : 'none';
        avatarStudioState.notionGesture = STUDIO_NOTION_GESTURES[Math.floor(Math.random() * STUDIO_NOTION_GESTURES.length)].id;
    }
    avatarStudioState.backgroundColor = STUDIO_BG_COLORS[Math.floor(Math.random() * STUDIO_BG_COLORS.length)].id;
    avatarStudioState.foodBadge = STUDIO_FOOD_BADGES[Math.floor(Math.random() * STUDIO_FOOD_BADGES.length)].emoji;

    updateStudioPreview();
    const container = document.getElementById('studio-options-content');
    if (container) {
        container.innerHTML = renderStudioTabOptions(avatarStudioState.activeTab);
    }
};

window.restoreKakaoProfilePhoto = function() {
    const u = getCurrentUser();
    if (!u || !u.profileImage) {
        showDiaryToast('카카오 프로필 사진을 찾을 수 없습니다.');
        return;
    }
    avatarStudioState.isKakaoPhoto = true;
    updateStudioPreview();
    showDiaryToast('카카오 원본 프로필 사진으로 설정되었습니다.');
};

window.openAvatarStudioModal = function() {
    const modal = document.getElementById('avatar-studio-modal');
    if (!modal) return;

    const profile = getUserProfile();
    const currentUser = getCurrentUser() || {};
    const currentAvatar = profile.profileImage || currentUser.profileImage || '';

    const kakaoBtn = document.getElementById('btn-studio-kakao-restore');
    if (kakaoBtn) {
        const hasKakaoPhoto = currentUser.profileImage && !currentUser.profileImage.includes('dicebear');
        kakaoBtn.style.display = hasKakaoPhoto ? 'inline-flex' : 'none';
    }

    avatarStudioState.isKakaoPhoto = false;
    if (currentAvatar.includes('notionists')) {
        avatarStudioState.styleBase = 'notionists';
        try {
            const urlObj = new URL(currentAvatar);
            if (urlObj.searchParams.get('hair')) {
                avatarStudioState.notionHair = urlObj.searchParams.get('hair');
                if (STUDIO_NOTION_HAIRS_FEMALE.some(h => h.id === avatarStudioState.notionHair)) {
                    avatarStudioState.notionGender = 'female';
                } else if (STUDIO_NOTION_HAIRS_MALE.some(h => h.id === avatarStudioState.notionHair)) {
                    avatarStudioState.notionGender = 'male';
                }
            }
            if (urlObj.searchParams.get('eyes')) avatarStudioState.notionEyes = urlObj.searchParams.get('eyes');
            if (urlObj.searchParams.get('lips')) avatarStudioState.notionLips = urlObj.searchParams.get('lips');
            if (urlObj.searchParams.get('glasses')) avatarStudioState.notionGlasses = urlObj.searchParams.get('glasses');
            if (urlObj.searchParams.get('gesture')) avatarStudioState.notionGesture = urlObj.searchParams.get('gesture');
            if (urlObj.searchParams.get('backgroundColor')) avatarStudioState.backgroundColor = urlObj.searchParams.get('backgroundColor');
        } catch (e) {}
    } else if (currentAvatar.includes('avataaars')) {
        avatarStudioState.styleBase = 'avataaars';
        try {
            const urlObj = new URL(currentAvatar);
            if (urlObj.searchParams.get('top')) {
                avatarStudioState.top = urlObj.searchParams.get('top');
                if (STUDIO_AVATAARS_HAIRS_FEMALE.some(h => h.id === avatarStudioState.top)) {
                    avatarStudioState.gender = 'female';
                } else if (STUDIO_AVATAARS_HAIRS_MALE.some(h => h.id === avatarStudioState.top)) {
                    avatarStudioState.gender = 'male';
                }
            }
            if (urlObj.searchParams.get('hairColor')) avatarStudioState.hairColor = urlObj.searchParams.get('hairColor');
            if (urlObj.searchParams.get('skinColor')) avatarStudioState.skinColor = urlObj.searchParams.get('skinColor');
            if (urlObj.searchParams.get('eyes')) avatarStudioState.eyes = urlObj.searchParams.get('eyes');
            if (urlObj.searchParams.get('mouth')) avatarStudioState.mouth = urlObj.searchParams.get('mouth');
            if (urlObj.searchParams.get('clothing')) avatarStudioState.clothing = urlObj.searchParams.get('clothing');
            if (urlObj.searchParams.get('clothesColor')) avatarStudioState.clothesColor = urlObj.searchParams.get('clothesColor');
            if (urlObj.searchParams.get('accessories')) avatarStudioState.accessories = urlObj.searchParams.get('accessories');
            if (urlObj.searchParams.get('backgroundColor')) avatarStudioState.backgroundColor = urlObj.searchParams.get('backgroundColor');
        } catch (e) {}
    } else if (currentUser.profileImage && !currentUser.profileImage.includes('dicebear')) {
        avatarStudioState.isKakaoPhoto = true;
    }

    if (profile.avatarBadge) {
        avatarStudioState.foodBadge = profile.avatarBadge;
    }

    const btnAvat = document.getElementById('btn-style-avataaars');
    const btnNotion = document.getElementById('btn-style-notionists');
    if (btnAvat) btnAvat.classList.toggle('active', avatarStudioState.styleBase === 'avataaars');
    if (btnNotion) btnNotion.classList.toggle('active', avatarStudioState.styleBase === 'notionists');

    renderStudioTabBar();
    const container = document.getElementById('studio-options-content');
    if (container) {
        container.innerHTML = renderStudioTabOptions(avatarStudioState.activeTab);
        container.scrollTop = 0;
    }

    updateStudioPreview();
    modal.classList.add('open');
};

window.closeAvatarStudioModal = function() {
    const modal = document.getElementById('avatar-studio-modal');
    if (modal) modal.classList.remove('open');
};

window.saveCustomAvatar = function() {
    const finalUrl = buildStudioAvatarUrl();
    const profile = getUserProfile();
    profile.profileImage = finalUrl;
    profile.avatarBadge = avatarStudioState.foodBadge;
    saveUserProfile(profile);

    const u = getCurrentUser();
    if (u) {
        u.profileImage = finalUrl;
        u.avatarBadge = avatarStudioState.foodBadge;
        localStorage.setItem('spoonmap_current_user', JSON.stringify(u));
    }

    closeAvatarStudioModal();
    renderProfileView();
    updateUserAuthUI();
    showDiaryToast('✨ 프로필 아바타가 저장되었습니다!');
};

// Aliases for backwards compatibility
window.openAvatarPickerModal = window.openAvatarStudioModal;
window.closeAvatarPickerModal = window.closeAvatarStudioModal;
window.selectPresetAvatar = function(url) {
    const profile = getUserProfile();
    profile.profileImage = url;
    saveUserProfile(profile);
    const u = getCurrentUser();
    if (u) {
        u.profileImage = url;
        localStorage.setItem('spoonmap_current_user', JSON.stringify(u));
    }
    closeAvatarStudioModal();
    renderProfileView();
    updateUserAuthUI();
    showDiaryToast('✨ 프로필 아바타가 변경되었습니다!');
};

// ─── Phase 3.3: Web Share Link & Visitor Scraping Module ───
window.isSharedMapMode = false;
window.sharedMapData = null;

function generateShareToken() {
    return Math.random().toString(36).substring(2, 10);
}

function getShareStorageKey() {
    const u = getCurrentUser();
    return u && u.id ? `spoonmap_user_${u.id}_share_token` : 'spoonmap_guest_share_token';
}

async function publishSharedMap(forceNew = false) {
    const u = getCurrentUser();
    if (!u || !u.id) {
        alert('로그인 후 이용할 수 있습니다.');
        return null;
    }

    let token = localStorage.getItem(getShareStorageKey());
    if (!token || forceNew) {
        token = generateShareToken();
        localStorage.setItem(getShareStorageKey(), token);
    }

    const profile = getUserProfile();
    const rawRestaurants = (typeof getUnifiedRestaurantData === 'function') ? getUnifiedRestaurantData() : [];
    
    // Privacy filter: Sanitize restaurants for public sharing (exclude private diary notes & apply privacy settings)
    const privacy = (profile && profile.privacySettings) ? profile.privacySettings : ((typeof getUserPrivacySettings === 'function') ? getUserPrivacySettings() : { showVisitDate: true, allowedSpoons: [1, 2, 3, 4, 5] });
    let sanitizedRestaurants = rawRestaurants.map(r => ({
        name: r.name,
        category: r.category || '기타',
        location_large: r.location_large || '',
        location_small: r.location_small || '',
        menu: Array.isArray(r.menu) ? r.menu : (typeof r.menu === 'string' ? r.menu.split(',').map(m => m.trim()).filter(Boolean) : []),
        rate: r.rate || '🥄',
        visit_count: r.visit_count || 1,
        map_url: r.map_url || (r.kakao_id ? `https://place.map.kakao.com/${r.kakao_id}` : `https://map.kakao.com/link/search/${encodeURIComponent(r.name)}`),
        kakao_id: r.kakao_id || '',
        road_address: r.road_address || '',
        x: r.x || '',
        y: r.y || '',
        date: (privacy.showVisitDate !== false) ? (r.date || '') : '',
        isWishlist: !!r.isWishlist
    }));

    if (Array.isArray(privacy.allowedSpoons)) {
        sanitizedRestaurants = sanitizedRestaurants.filter(r => {
            const spoonCount = (r.rate ? (r.rate.match(/🥄/g) || []).length : 1) || 1;
            return privacy.allowedSpoons.includes(spoonCount);
        });
    }

    const rawWishlist = (typeof getUserWishlist === 'function') ? getUserWishlist() : [];
    const sanitizedWishlist = rawWishlist.map(w => ({
        name: w.name,
        category: w.category || '기타',
        location: w.location || '',
        map_url: w.map_url || (w.kakao_id ? `https://place.map.kakao.com/${w.kakao_id}` : `https://map.kakao.com/link/search/${encodeURIComponent(w.name)}`),
        kakao_id: w.kakao_id || '',
        road_address: w.road_address || '',
        x: w.x || '',
        y: w.y || ''
    }));

    // Merge wishlisted items into restaurants if not already present
    const existingNames = new Set(sanitizedRestaurants.map(r => (r.name || '').trim().toLowerCase()));
    sanitizedWishlist.forEach(w => {
        const k = (w.name || '').trim().toLowerCase();
        if (k && !existingNames.has(k)) {
            existingNames.add(k);
            sanitizedRestaurants.push({
                name: w.name,
                category: w.category || '기타',
                location_large: w.location || '기타',
                location_small: '',
                menu: [],
                rate: '',
                visit_count: 0,
                map_url: w.map_url,
                kakao_id: w.kakao_id || '',
                road_address: w.road_address || '',
                x: w.x || '',
                y: w.y || '',
                date: '',
                isWishlist: true
            });
        }
    });

    const payload = {
        token: token,
        userId: String(u.id),
        userName: profile.nickname || u.nickname || '미식가',
        userAvatar: profile.profileImage || u.profileImage || '',
        isMaster: isOwnerUser(),
        restaurants: sanitizedRestaurants,
        wishlist: sanitizedWishlist,
        isActive: true,
        updatedAt: new Date().toISOString()
    };

    if (isFirebaseReady && db) {
        try {
            await db.collection('spoonmap_shared_maps').doc(token).set(payload, { merge: true });
        } catch (err) {
            console.warn('Failed to publish shared map to Firestore:', err);
        }
    }

    return token;
}

window.handleShareMyMap = async function() {
    const token = await publishSharedMap(false);
    if (!token) return;
    openShareLinkModal(token);
};

window.openShareLinkModal = function(token) {
    const activeToken = token || localStorage.getItem(getShareStorageKey()) || '';
    const modal = document.getElementById('share-link-modal');
    const input = document.getElementById('share-link-input');
    const toggle = document.getElementById('share-active-toggle');

    if (!modal || !input) return;

    const shareUrl = `${window.location.origin}${window.location.pathname}?share=${activeToken}`;
    input.value = shareUrl;
    if (toggle) toggle.checked = true;

    modal.style.display = 'flex';
    modal.classList.add('open');
};

window.closeShareLinkModal = function() {
    const modal = document.getElementById('share-link-modal');
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('open');
    }
};

window.copyCurrentShareLink = function() {
    const input = document.getElementById('share-link-input');
    if (!input || !input.value) return;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(input.value).then(() => {
            showDiaryToast('공유 링크가 복사되었습니다');
        }).catch(() => {
            input.select();
            document.execCommand('copy');
            showDiaryToast('공유 링크가 복사되었습니다');
        });
    } else {
        input.select();
        document.execCommand('copy');
        showDiaryToast('공유 링크가 복사되었습니다');
    }
};

window.regenerateShareLink = async function() {
    if (!confirm('새 공유 링크를 발급하시겠습니까? 기존 링크는 더 이상 작동하지 않습니다.')) return;
    const newToken = await publishSharedMap(true);
    if (newToken) {
        const input = document.getElementById('share-link-input');
        if (input) input.value = `${window.location.origin}${window.location.pathname}?share=${newToken}`;
        showDiaryToast('새 링크가 발급되었습니다');
    }
};

window.toggleShareLinkActive = async function(isActive) {
    const token = localStorage.getItem(getShareStorageKey());
    if (!token || !isFirebaseReady || !db) return;

    try {
        await db.collection('spoonmap_shared_maps').doc(token).update({
            isActive: isActive,
            updatedAt: new Date().toISOString()
        });
        showDiaryToast(isActive ? '공유가 활성화되었습니다' : '공유가 비활성화되었습니다');
    } catch (err) {
        console.warn('Failed to update share link status:', err);
    }
};

// ─── Shared Map Mode Activation (For Visitors) ───
function enableSharedMapMode(sharedData) {
    window.isSharedMapMode = true;
    window.sharedMapData = sharedData;

    // Show top banner
    const banner = document.getElementById('shared-map-banner');
    const bannerText = document.getElementById('shared-banner-text');
    if (banner && bannerText) {
        const visitedCount = (sharedData.restaurants || []).filter(r => !r.isWishlist).length;
        const wishCount = (sharedData.wishlist || []).length;
        bannerText.textContent = `${sharedData.userName || '미식가'}님의 맛집 지도 · 맛집 ${visitedCount}곳 · 위시리스트 ${wishCount}곳`;
        banner.style.display = 'flex';
    }

    // Hide drawer add button & private controls
    const quickAddBtn = document.querySelector('.quick-add-btn');
    if (quickAddBtn) quickAddBtn.style.display = 'none';

    // Update tab view locks
    if (typeof updateAuthProtectedViews === 'function') {
        updateAuthProtectedViews();
    }

    // Switch to MAP tab if currently on private/locked tab
    const route = typeof parseRoute === 'function' ? parseRoute() : { tab: 'map' };
    if (route.tab === 'diary' || route.tab === 'profile' || route.tab === 'insights') {
        const mapBtn = document.querySelector('.tab-btn[data-tab="map"]') || document.querySelector('.mobile-tab-btn[data-tab="map"]');
        if (mapBtn) mapBtn.click();
    }

    // Re-render map and list
    if (window.renderApp) window.renderApp();
    if (typeof renderSharedMapOnMap === 'function') {
        renderSharedMapOnMap();
    } else if (window.updateMapMarkers) {
        window.updateMapMarkers();
    }
}

window.exitSharedMapMode = function() {
    const cleanUrl = `${window.location.origin}${window.location.pathname}`;
    window.location.href = cleanUrl;
};

// Visitor Scraping Handler
window.scrapeCurrentRestaurantToWishlist = function(item) {
    const targetItem = item || currentDetailModalItem;
    if (!targetItem) return;

    const wishlistKey = getUserWishlistKey();
    let wishlist = [];
    try {
        wishlist = JSON.parse(localStorage.getItem(wishlistKey) || '[]');
    } catch (_) {
        wishlist = [];
    }

    const normName = targetItem.name.trim().toLowerCase();
    const isAlreadySaved = wishlist.some(w => w.name && w.name.trim().toLowerCase() === normName);

    if (isAlreadySaved) {
        showDiaryToast('이미 위시리스트에 담긴 식당입니다');
        return;
    }

    const locText = [targetItem.location_large, targetItem.location_small].filter(Boolean).join(' ') || targetItem.road_address || '기타';
    const newWishItem = {
        id: Date.now(),
        name: targetItem.name,
        category: targetItem.category || '기타',
        location: locText,
        map_url: targetItem.map_url || (targetItem.kakao_id ? `https://place.map.kakao.com/${targetItem.kakao_id}` : `https://map.kakao.com/link/search/${encodeURIComponent(targetItem.name)}`),
        kakao_id: targetItem.kakao_id || '',
        road_address: targetItem.road_address || '',
        x: targetItem.x || '',
        y: targetItem.y || '',
        created_at: new Date().toISOString()
    };

    wishlist.unshift(newWishItem);
    localStorage.setItem(wishlistKey, JSON.stringify(wishlist));

    if (isUserLoggedIn() && typeof saveToCloud === 'function') {
        saveToCloud('wishlist', wishlist);
    }

    showDiaryToast(`"${targetItem.name}" 위시리스트에 담았습니다`);
};

// Route check on load
let shareRouteAttempts = 0;
async function initSharedMapRoute() {
    const urlParams = new URLSearchParams(window.location.search);
    const shareToken = urlParams.get('share');
    if (!shareToken) return false;

    if (!isFirebaseReady || !db) {
        if (shareRouteAttempts++ < 25) {
            setTimeout(initSharedMapRoute, 300);
        }
        return false;
    }

    try {
        const docSnap = await db.collection('spoonmap_shared_maps').doc(shareToken).get();
        if (!docSnap.exists) {
            alert('존재하지 않는 공유 링크입니다.');
            window.exitSharedMapMode();
            return false;
        }

        const sharedData = docSnap.data();
        if (!sharedData || sharedData.isActive === false) {
            alert('공유가 비활성화된 링크입니다.');
            window.exitSharedMapMode();
            return false;
        }

        enableSharedMapMode(sharedData);
        return true;
    } catch (err) {
        console.warn('initSharedMapRoute error:', err);
        return false;
    }
}

// ─── Food Insights Floating Modal Controls ───
window.openInsightModal = function() {
    const modal = document.getElementById('insight-modal');
    if (!modal) return;
    if (typeof computeAndRenderFoodInsights === 'function') {
        computeAndRenderFoodInsights();
    }
    modal.classList.add('open');
};

window.closeInsightModal = function() {
    const modal = document.getElementById('insight-modal');
    if (modal) modal.classList.remove('open');
};

// ═══════════════════════════════════════════════════════════════════
// 14. 식당 및 음식 사진 관리 시스템 (Restaurant Photo System)
// ═══════════════════════════════════════════════════════════════════

const PHOTO_DB_NAME = 'SpoonmapPhotosDB';
const PHOTO_STORE_NAME = 'restaurant_photos';
let photoDbPromise = null;
window.restaurantPhotoCache = new Map();

function normalizeRestaurantKey(name) {
    if (!name) return '';
    return String(name).trim().toLowerCase().replace(/\s+/g, '');
}
window.normalizeRestaurantKey = normalizeRestaurantKey;

function getPhotoDb() {
    if (!photoDbPromise) {
        photoDbPromise = new Promise((resolve) => {
            if (!window.indexedDB) {
                console.warn('IndexedDB not supported in this browser');
                resolve(null);
                return;
            }
            const req = indexedDB.open(PHOTO_DB_NAME, 1);
            req.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains(PHOTO_STORE_NAME)) {
                    db.createObjectStore(PHOTO_STORE_NAME, { keyPath: 'restaurantKey' });
                }
            };
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => {
                console.warn('Failed to open SpoonmapPhotosDB:', req.error);
                resolve(null);
            };
        });
    }
    return photoDbPromise;
}

async function initPhotoStorage() {
    try {
        const idb = await getPhotoDb();
        if (!idb) return;
        const tx = idb.transaction(PHOTO_STORE_NAME, 'readonly');
        const store = tx.objectStore(PHOTO_STORE_NAME);
        const req = store.getAll();
        req.onsuccess = () => {
            const allRecords = req.result || [];
            allRecords.forEach(r => {
                if (r && r.restaurantKey) {
                    window.restaurantPhotoCache.set(r.restaurantKey, r.photos || []);
                }
            });
            console.log(`[Spoonmap] Loaded photos for ${window.restaurantPhotoCache.size} restaurants from IndexedDB 📷`);
            if (typeof renderDiaryCalendar === 'function') {
                renderDiaryCalendar();
            }
            // Background sync with Firebase Cloud
            setTimeout(() => {
                if (typeof syncPhotosFromCloud === 'function') syncPhotosFromCloud();
            }, 1200);
        };
    } catch (e) {
        console.warn('initPhotoStorage error:', e);
    }
}
window.initPhotoStorage = initPhotoStorage;

// Client-side Image Compression (HTML5 Canvas)
function compressImage(fileOrBlob, maxDimension = 1000, quality = 0.8) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                let width = img.width;
                let height = img.height;
                if (width > height) {
                    if (width > maxDimension) {
                        height = Math.round((height * maxDimension) / width);
                        width = maxDimension;
                    }
                } else {
                    if (height > maxDimension) {
                        width = Math.round((width * maxDimension) / height);
                        height = maxDimension;
                    }
                }
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
                resolve(compressedDataUrl);
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(fileOrBlob);
    });
}
window.compressImage = compressImage;

function getRestaurantPhotos(name) {
    const key = normalizeRestaurantKey(name);
    if (!key) return [];
    return window.restaurantPhotoCache.get(key) || [];
}
window.getRestaurantPhotos = getRestaurantPhotos;

async function saveRestaurantPhotosToStore(name, photosArray) {
    const key = normalizeRestaurantKey(name);
    if (!key) return;
    window.restaurantPhotoCache.set(key, photosArray);

    // 1. Save to IndexedDB
    try {
        const idb = await getPhotoDb();
        if (idb) {
            const tx = idb.transaction(PHOTO_STORE_NAME, 'readwrite');
            const store = tx.objectStore(PHOTO_STORE_NAME);
            store.put({
                restaurantKey: key,
                restaurantName: name,
                photos: photosArray,
                updatedAt: new Date().toISOString()
            });
        }
    } catch (e) {
        console.warn('save to IndexedDB error:', e);
    }

    // 2. Cloud Backup to Firestore
    if (isFirebaseReady && db) {
        try {
            const userScope = (typeof getFirestoreUserDocPath === 'function' ? getFirestoreUserDocPath() : null) || (isOwnerUser() ? 'master_data' : 'guest');
            const docId = `${userScope}_${key}`;
            await db.collection('spoonmap_restaurant_photos').doc(docId).set({
                userScope,
                restaurantKey: key,
                restaurantName: name,
                photos: photosArray,
                updatedAt: new Date().toISOString()
            }, { merge: true });
        } catch (e) {
            console.warn('save to Firestore photos error:', e);
        }
    }
}

async function syncPhotosFromCloud() {
    if (!isFirebaseReady || !db) return;
    const userScope = (typeof getFirestoreUserDocPath === 'function' ? getFirestoreUserDocPath() : null) || (isOwnerUser() ? 'master_data' : null);
    if (!userScope || userScope === 'guest') return;

    try {
        const snap = await db.collection('spoonmap_restaurant_photos')
            .where('userScope', '==', userScope)
            .get();

        if (!snap.empty) {
            const idb = await getPhotoDb();
            const tx = idb ? idb.transaction(PHOTO_STORE_NAME, 'readwrite') : null;
            const store = tx ? tx.objectStore(PHOTO_STORE_NAME) : null;

            snap.forEach(doc => {
                const data = doc.data();
                if (data && data.restaurantKey && Array.isArray(data.photos)) {
                    // Update in-memory cache
                    window.restaurantPhotoCache.set(data.restaurantKey, data.photos);
                    // Persist to local IndexedDB on this device
                    if (store) {
                        store.put({
                            restaurantKey: data.restaurantKey,
                            restaurantName: data.restaurantName || '',
                            photos: data.photos,
                            updatedAt: data.updatedAt || new Date().toISOString()
                        });
                    }
                }
            });

            console.log(`[Spoonmap] Synced ${snap.size} restaurant photo albums from Firebase Cloud (${userScope}) ☁️📷`);

            // Refresh UI
            if (typeof renderDiaryCalendar === 'function') renderDiaryCalendar();
            if (currentDetailModalItem && typeof refreshListModalPhotoGrid === 'function') {
                refreshListModalPhotoGrid(currentDetailModalItem.name);
            }
        }
    } catch (e) {
        console.warn('syncPhotosFromCloud error:', e);
    }
}
window.syncPhotosFromCloud = syncPhotosFromCloud;

async function addRestaurantPhotos(name, dataUrls) {
    if (!name || !dataUrls || dataUrls.length === 0) return [];
    const current = [...getRestaurantPhotos(name)];
    dataUrls.forEach(url => {
        current.push({
            id: 'p_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
            url,
            createdAt: new Date().toISOString()
        });
    });
    await saveRestaurantPhotosToStore(name, current);
    return current;
}
window.addRestaurantPhotos = addRestaurantPhotos;

async function deleteRestaurantPhoto(name, photoId) {
    if (!name || !photoId) return [];
    const current = getRestaurantPhotos(name).filter(p => String(p.id) !== String(photoId));
    await saveRestaurantPhotosToStore(name, current);
    return current;
}
window.deleteRestaurantPhoto = deleteRestaurantPhoto;

// Render Photo Grid into Dropzone
function renderPhotoPreviewGrid(containerEl, restaurantName, photos, sourceContext) {
    if (!containerEl) return;
    const isDiary = sourceContext === 'diary';
    const inputId = isDiary ? 'diary-photo-file-input' : 'list-photo-file-input';

    const itemsHtml = photos.map(p => {
        const safeUrl = p.url.replace(/'/g, "\\'");
        const safeName = (restaurantName || '').replace(/'/g, "\\'");
        const safeId = String(p.id).replace(/'/g, "\\'");
        return `
            <div class="photo-thumb-wrap" onclick="openPhotoLightbox('${safeUrl}', '${safeName}')" title="클릭하면 사진을 크게 봅니다">
                <img src="${p.url}" alt="${restaurantName} 사진" class="photo-thumb-img">
                <button type="button" class="photo-delete-btn" onclick="event.stopPropagation(); handleDeletePhotoClick('${safeName}', '${safeId}', '${sourceContext}')" title="사진 삭제">&times;</button>
            </div>
        `;
    }).join('');

    const addBoxHtml = `
        <div class="photo-add-box" onclick="document.getElementById('${inputId}').click()" title="사진 추가">
            <span class="photo-add-icon">➕</span>
            <span>사진 추가</span>
        </div>
    `;

    containerEl.innerHTML = itemsHtml + addBoxHtml;
}

window.handleDeletePhotoClick = async function(restaurantName, photoId, sourceContext) {
    if (!confirm('이 사진을 정말 삭제하시겠습니까?')) return;
    await deleteRestaurantPhoto(restaurantName, photoId);
    showDiaryToast('🗑️ 사진이 삭제되었습니다.');

    if (sourceContext === 'diary') {
        refreshDiaryPhotoGrid(restaurantName);
    } else if (sourceContext === 'list') {
        refreshListModalPhotoGrid(restaurantName);
    }
    if (typeof renderDiaryCalendar === 'function') {
        renderDiaryCalendar();
    }
};

function refreshDiaryPhotoGrid(restaurantName) {
    const gridEl = document.getElementById('diary-photo-preview-grid');
    if (!gridEl) return;
    const name = restaurantName || document.getElementById('diary-input-name')?.value.trim() || '';
    const photos = getRestaurantPhotos(name);
    renderPhotoPreviewGrid(gridEl, name, photos, 'diary');
}
window.refreshDiaryPhotoGrid = refreshDiaryPhotoGrid;

function refreshListModalPhotoGrid(restaurantName) {
    const gridEl = document.getElementById('list-photo-preview-grid');
    const countEl = document.getElementById('list-photo-count');
    if (!gridEl) return;
    const name = restaurantName || currentDetailModalItem?.name || '';
    const photos = getRestaurantPhotos(name);
    if (countEl) countEl.textContent = `${photos.length}장`;
    renderPhotoPreviewGrid(gridEl, name, photos, 'list');
}
window.refreshListModalPhotoGrid = refreshListModalPhotoGrid;

// Process Image Files (Folder Select, Drag & Drop, Paste)
async function handleProcessPhotoFiles(restaurantName, fileList, sourceContext) {
    if (!restaurantName) {
        alert('먼저 식당명을 입력하거나 선택해주세요!');
        return;
    }
    const imageFiles = Array.from(fileList).filter(f => f.type && f.type.startsWith('image/'));
    if (imageFiles.length === 0) {
        alert('이미지 파일(JPG, PNG, WebP 등)만 업로드할 수 있습니다.');
        return;
    }

    showDiaryToast(`⏳ 사진 ${imageFiles.length}장 압축 및 등록 중...`);

    try {
        const compressedUrls = await Promise.all(imageFiles.map(f => compressImage(f)));
        await addRestaurantPhotos(restaurantName, compressedUrls);
        showDiaryToast(`📸 사진 ${compressedUrls.length}장이 성공적으로 등록되었습니다!`);

        if (sourceContext === 'diary') {
            refreshDiaryPhotoGrid(restaurantName);
        } else if (sourceContext === 'list') {
            refreshListModalPhotoGrid(restaurantName);
        }
        if (typeof renderDiaryCalendar === 'function') {
            renderDiaryCalendar();
        }
    } catch (err) {
        console.error('Photo upload error:', err);
        alert('사진을 처리하는 중 오류가 발생했습니다.');
    }
}
window.handleProcessPhotoFiles = handleProcessPhotoFiles;

// Setup Drag & Drop + Click File Input
function setupPhotoDropzone(dropzoneEl, fileInputEl, sourceContext, getRestaurantNameFn) {
    if (!dropzoneEl || !fileInputEl) return;

    dropzoneEl.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzoneEl.classList.add('drag-active');
    });

    dropzoneEl.addEventListener('dragleave', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzoneEl.classList.remove('drag-active');
    });

    dropzoneEl.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzoneEl.classList.remove('drag-active');
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const name = getRestaurantNameFn();
            handleProcessPhotoFiles(name, e.dataTransfer.files, sourceContext);
        }
    });

    fileInputEl.addEventListener('change', () => {
        if (fileInputEl.files && fileInputEl.files.length > 0) {
            const name = getRestaurantNameFn();
            handleProcessPhotoFiles(name, fileInputEl.files, sourceContext);
            fileInputEl.value = '';
        }
    });
}

// Lightbox Viewer
window.openPhotoLightbox = function(url, caption = '') {
    const modal = document.getElementById('photo-lightbox-modal');
    const img = document.getElementById('lightbox-img');
    const cap = document.getElementById('lightbox-caption');
    if (!modal || !img) return;
    img.src = url;
    if (cap) cap.textContent = caption || '';
    modal.classList.add('open');
};

window.closePhotoLightbox = function(e) {
    if (e) e.stopPropagation();
    const modal = document.getElementById('photo-lightbox-modal');
    if (modal) modal.classList.remove('open');
};

// Render User Photos in MAP Tab Place Detail (delegates to combined photo gallery)
function renderUserPhotosInMapGallery(placeName, userPhotos, containerEl) {
    if (!containerEl) return;
    if (typeof fetchPlaceFoodPhotos === 'function') {
        fetchPlaceFoodPhotos(placeName, '', containerEl, null, userPhotos);
    }
}
window.renderUserPhotosInMapGallery = renderUserPhotosInMapGallery;

window.switchUserGalleryPhoto = function(url, thumbEl) {
    const mainImg = document.getElementById('gallery-main-img');
    if (mainImg) mainImg.src = url;
    document.querySelectorAll('.detail-photo-gallery .thumb-img').forEach(t => t.classList.remove('active'));
    if (thumbEl) thumbEl.classList.add('active');
};

// Global Clipboard Paste Listener (Ctrl + V)
window.addEventListener('paste', async (e) => {
    // Check if Diary drawer is open
    const diaryOverlay = document.getElementById('diary-drawer-overlay');
    const isDiaryOpen = diaryOverlay && diaryOverlay.classList.contains('open');

    // Check if List detail modal is open
    const listOverlay = document.getElementById('list-detail-modal-overlay');
    const isListOpen = listOverlay && (listOverlay.style.display !== 'none' && !listOverlay.classList.contains('hidden'));

    if (!isDiaryOpen && !isListOpen) return;

    const items = (e.clipboardData || window.clipboardData)?.items;
    if (!items) return;

    const imageFiles = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i].type && items[i].type.indexOf('image') !== -1) {
            const file = items[i].getAsFile();
            if (file) imageFiles.push(file);
        }
    }

    if (imageFiles.length === 0) return;

    if (isDiaryOpen) {
        const name = document.getElementById('diary-input-name')?.value.trim();
        if (!name) {
            alert('사진을 붙여넣기 전에 먼저 식당명을 입력해주세요!');
            return;
        }
        handleProcessPhotoFiles(name, imageFiles, 'diary');
    } else if (isListOpen) {
        const name = currentDetailModalItem?.name;
        if (name) {
            handleProcessPhotoFiles(name, imageFiles, 'list');
        }
    }
});

// Initialize Photo Dropzones when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initPhotoStorage();

    // Diary Dropzone
    const diaryDropzone = document.getElementById('diary-photo-dropzone');
    const diaryFileInput = document.getElementById('diary-photo-file-input');
    setupPhotoDropzone(diaryDropzone, diaryFileInput, 'diary', () => {
        return document.getElementById('diary-input-name')?.value.trim() || '';
    });

    // List Detail Dropzone
    const listDropzone = document.getElementById('list-photo-dropzone');
    const listFileInput = document.getElementById('list-photo-file-input');
    setupPhotoDropzone(listDropzone, listFileInput, 'list', () => {
        return currentDetailModalItem?.name || '';
    });

    // PWA & Smart Install Manager
    initPwaManager();
});

// ─── PWA & Smart Install Manager ───
let deferredPwaPrompt = null;

function isPwaStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches ||
           window.navigator.standalone === true ||
           document.referrer.includes('android-app://');
}

function isIosDevice() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function initPwaManager() {
    // 1. Register Service Worker with cache versioning
    if ('serviceWorker' in navigator) {
        let refreshingSw = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (refreshingSw) return;
            refreshingSw = true;
            window.location.reload();
        });
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js?v=202610082340', { updateViaCache: 'none' })
                .then((reg) => {
                    console.log('[PWA] Service Worker registered with scope:', reg.scope);
                    if (typeof reg.update === 'function') reg.update().catch(() => {});
                })
                .catch((err) => {
                    console.warn('[PWA] Service Worker registration failed:', err);
                });
        });
    }

    // 2. Hide install buttons if already in standalone app mode
    const isStandalone = isPwaStandalone();
    const profileRow = document.getElementById('profile-pwa-install-row');
    if (profileRow) {
        profileRow.style.display = isStandalone ? 'none' : 'flex';
    }

    if (isStandalone) {
        const banner = document.getElementById('pwa-install-banner');
        if (banner) banner.classList.remove('show');
        return;
    }

    // 3. Android & Chromium beforeinstallprompt listener
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPwaPrompt = e;
        checkAndShowPwaBanner();
    });

    // 4. iOS Safari initial check
    if (isIosDevice()) {
        checkAndShowPwaBanner();
    }

    // 5. App installed event listener
    window.addEventListener('appinstalled', () => {
        deferredPwaPrompt = null;
        window.dismissPwaBanner(true);
        if (typeof showToast === 'function') {
            showToast('Spoonmap 앱이 홈 화면에 성공적으로 설치되었습니다!');
        }
    });
}

function checkAndShowPwaBanner() {
    if (isPwaStandalone()) return;

    // Strictly mobile only: Never show on PC desktop browsers
    if (window.innerWidth > 768) {
        return;
    }

    // Check 7-day cooldown
    const dismissedAt = localStorage.getItem('spoonmap_pwa_dismissed_at');
    if (dismissedAt) {
        const diffMs = Date.now() - parseInt(dismissedAt, 10);
        const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
        if (diffMs < sevenDaysMs) {
            return;
        }
    }

    // Gentle delay after page load on mobile
    setTimeout(() => {
        if (window.innerWidth > 768) return;
        const banner = document.getElementById('pwa-install-banner');
        if (banner && !isPwaStandalone()) {
            banner.classList.add('show');
        }
    }, 1800);
}

window.triggerPwaInstall = function() {
    if (deferredPwaPrompt) {
        deferredPwaPrompt.prompt();
        deferredPwaPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('[PWA] User accepted installation');
            }
            deferredPwaPrompt = null;
            window.dismissPwaBanner(true);
        });
    } else if (isIosDevice()) {
        const modal = document.getElementById('pwa-ios-modal');
        if (modal) modal.classList.add('active');
    } else {
        if (isPwaStandalone()) {
            if (typeof showToast === 'function') {
                showToast('이미 홈 화면 앱으로 실행 중입니다.');
            }
        } else {
            const modal = document.getElementById('pwa-ios-modal');
            if (modal) {
                modal.classList.add('active');
            } else if (typeof showToast === 'function') {
                showToast('브라우저 메뉴에서 [홈 화면에 추가] 또는 [설치]를 눌러주세요.');
            }
        }
    }
};

window.dismissPwaBanner = function(isPermanent) {
    const banner = document.getElementById('pwa-install-banner');
    if (banner) {
        banner.classList.remove('show');
    }
    if (isPermanent) {
        localStorage.setItem('spoonmap_pwa_dismissed_at', String(Date.now() + 365 * 24 * 60 * 60 * 1000));
    } else {
        localStorage.setItem('spoonmap_pwa_dismissed_at', String(Date.now()));
    }
};

window.closeIosInstallModal = function() {
    const modal = document.getElementById('pwa-ios-modal');
    if (modal) {
        modal.classList.remove('active');
    }
};




