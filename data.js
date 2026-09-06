const restaurantData = [
    {
        "category":  "🍣일식",
        "name":  "카라멘야",
        "date":  "2026-07-06",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1025832828",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "라멘"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "옛고을",
        "date":  "2026-07-19",
        "location_small":  "방화동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2103771928",
        "location_large":  "서울 강서구",
        "menu":  [
                     "삼계탕",
                     "오리"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "마루가메우동 잠실롯데월드몰점",
        "date":  "2026-07-16",
        "location_small":  "신천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/498055551",
        "location_large":  "서울 송파구",
        "menu":  [
                     "우동"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "박만배 아리랑보쌈 선릉점",
        "date":  "2026-07-14",
        "location_small":  "대치동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/632206337",
        "location_large":  "서울 강남구",
        "menu":  [
                     "보쌈"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "선이랑 Sun s Donut",
        "date":  "2026-07-14",
        "location_small":  "도곡동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1877857019",
        "location_large":  "서울 강남구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "코시",
        "date":  "2026-07-14",
        "location_small":  "도곡동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1003513439",
        "location_large":  "서울 강남구",
        "menu":  [
                     "우동"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "오늘도빙수앤커피",
        "date":  "2026-07-10",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/301037533",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "빙수"
                 ],
        "visit_count":  8,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "버거킹 마곡원그로브몰점",
        "date":  "2026-07-18",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/546841062",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  7,
        "closed":  false
    },
    {
        "category":  "🍕피자",
        "name":  "엉클피자",
        "date":  "2026-07-20",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1480004855",
        "location_large":  "서울 용산구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "스타벅스 용산역써밋R점",
        "date":  "2026-07-20",
        "location_small":  "한강로",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/255305228",
        "location_large":  "서울 용산구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "해일로",
        "date":  "2026-07-23",
        "location_small":  "창신동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/974518328",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🥩고기",
        "name":  "우정",
        "date":  "2026-07-23",
        "location_small":  "신당동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27388900",
        "location_large":  "서울 중구",
        "menu":  [
                     "닭발"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "KFC 발산역점",
        "date":  "2026-07-24",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1725139526",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  7,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "딜라이트버거",
        "date":  "2026-07-24",
        "location_small":  "망우동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/172588437",
        "location_large":  "서울 중랑구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "오토김밥 마곡점",
        "date":  "2026-07-25",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1184366929",
        "location_large":  "서울 강서구",
        "menu":  [
                     "김밥"
                 ],
        "visit_count":  5,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "담채 본점",
        "date":  "2026-07-25",
        "location_small":  "내발산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/11679502",
        "location_large":  "서울 강서구",
        "menu":  [
                     "샤브샤브",
                     "쭈꾸미"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "BHC치킨 우장산역점",
        "date":  "2026-07-31",
        "location_small":  "내발산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/24910396",
        "location_large":  "서울 강서구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "또보겠지떡볶이 해피토스점",
        "date":  "2026-07-27",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/644614560",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "청담추어정",
        "date":  "2026-07-28",
        "location_small":  "내발산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1895066587",
        "location_large":  "서울 강서구",
        "menu":  [
                     "추어탕"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "용호야채곱창",
        "date":  "2026-07-30",
        "location_small":  "용문동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/861655692",
        "location_large":  "서울 용산구",
        "menu":  [
                     "곱창"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "룸프",
        "date":  "2026-06-28",
        "location_small":  "송파동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/131631493",
        "location_large":  "서울 송파구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "그릭베리 이대신촌점",
        "date":  "2026-06-27",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1159681174",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "요거트"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "빵어니스타 이태원점",
        "date":  "2026-06-27",
        "location_small":  "이태원동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2099464862",
        "location_large":  "서울 용산구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍕피자",
        "name":  "피자브루클린 이태원",
        "date":  "2026-06-27",
        "location_small":  "이태원동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1313366442",
        "location_large":  "서울 용산구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "마포곱창타운",
        "date":  "2026-06-26",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/10341266",
        "location_large":  "서울 마포구",
        "menu":  [
                     "곱창"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "냐냐쿤",
        "date":  "2026-06-26",
        "location_small":  "동교동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1747474239",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "아이오밀",
        "date":  "2026-06-26",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1999464409",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오차즈케"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "두찜 마포신수점",
        "date":  "2026-06-29",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1021203220",
        "location_large":  "서울 마포구",
        "menu":  [
                     "찜닭"
                 ],
        "visit_count":  10,
        "closed":  true
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "롯데리아 신촌역점",
        "date":  "2026-06-29",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/623338539",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍣일식",
        "name":  "한창희천하일면",
        "date":  "2026-06-30",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "visit_count":  34,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "오레타치카레",
        "date":  "2026-07-02",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/925178825",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카레"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "신촌버거",
        "date":  "2026-07-03",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/283933287",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "함박연",
        "date":  "2026-07-04",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1484816380",
        "location_large":  "경기 남양주",
        "menu":  [
                     "함박스테이크"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "아리계곡 이수역점",
        "date":  "2026-07-05",
        "location_small":  "사당동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/932891056",
        "location_large":  "서울 동작구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "뺑스톡 공덕점",
        "date":  "2026-07-05",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/822254572",
        "location_large":  "서울 마포구",
        "menu":  [
                     "빵"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "파이브가이즈 용산",
        "date":  "2026-07-09",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/183570751",
        "location_large":  "서울 용산구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "텐쿠라",
        "date":  "2026-07-09",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1633172516",
        "location_large":  "서울 용산구",
        "menu":  [
                     "텐동"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "돈불1971 신촌직영점",
        "date":  "2026-07-10",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/26874707",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "삼겹살"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍽️뷔페",
        "name":  "더파티움 여의도",
        "date":  "2026-05-31",
        "location_small":  "여의도동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1485166493",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "뷔페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "록갈비 합정",
        "date":  "2026-05-31",
        "location_small":  "합정동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1993303139",
        "location_large":  "서울 마포구",
        "menu":  [
                     "등갈비"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "보어드앤헝그리",
        "date":  "2026-06-01",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/108492868",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  5,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🥩고기",
        "name":  "김숙성",
        "date":  "2026-06-01",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/227760533",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼겹살",
                     "제육볶음"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "리얼짜글이 서대문점",
        "date":  "2026-06-02",
        "location_small":  "남가좌동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1869215772",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "짜글이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "수저가",
        "date":  "2026-06-02",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/651155763",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짬뽕"
                 ],
        "visit_count":  11,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "가미우동",
        "date":  "2026-06-03",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/13337463",
        "location_large":  "서울 마포구",
        "menu":  [
                     "우동"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "청년다방 신촌점",
        "date":  "2026-06-05",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1569852736",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "김판석초밥",
        "date":  "2026-06-04",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/397566370",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "초밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🌮세계요리, 🍔패스트푸드",
        "name":  "밀플랜비 서강대점",
        "date":  "2026-06-05",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/960971083",
        "location_large":  "서울 마포구",
        "menu":  [
                     "브리또"
                 ],
        "visit_count":  15,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "BHC치킨 발산점",
        "date":  "2026-06-04",
        "location_small":  "내발산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/11794591",
        "location_large":  "서울 강서구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "효자막창 용산점",
        "date":  "2026-06-07",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/551918507",
        "location_large":  "서울 용산구",
        "menu":  [
                     "곱창"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥗샐러드",
        "name":  "포케올데이 홍대점",
        "date":  "2026-06-08",
        "location_small":  "성산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1279060792",
        "location_large":  "서울 마포구",
        "menu":  [
                     "포케"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "쉑쉑버거 홍대점",
        "date":  "2026-06-10",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/136268965",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "스시히바리",
        "date":  "2026-06-09",
        "location_small":  "아현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/80394697",
        "location_large":  "서울 마포구",
        "menu":  [
                     "초밥"
                 ],
        "visit_count":  5,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "본죽\u0026비빔밥cafe 대흥역점",
        "date":  "2026-06-11",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1594238704",
        "location_large":  "서울 마포구",
        "menu":  [
                     "비빔밥",
                     "죽"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "철인7호치킨 홍대점",
        "date":  "2026-06-12",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/26871883",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "고미카츠",
        "date":  "2026-06-11",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/545566786",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "유선장어",
        "date":  "2026-06-13",
        "location_small":  "양촌읍",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1601188060",
        "location_large":  "경기 김포",
        "menu":  [
                     "장어구이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "소곤면옥",
        "date":  "2026-06-14",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1685201182",
        "location_large":  "서울 강서구",
        "menu":  [
                     "불고기",
                     "평양냉면"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "야바이",
        "date":  "2026-06-14",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/11634686",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "오꼬노미야끼"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "신센라멘 홍대점",
        "date":  "2026-06-15",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1366939286",
        "location_large":  "서울 마포구",
        "menu":  [
                     "라멘"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "대한카츠 마포점",
        "date":  "2026-06-16",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1042643162",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "거북이의 주방",
        "date":  "2026-06-15",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1401663204",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카레"
                 ],
        "visit_count":  8,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "덮덮밥 홍대점",
        "date":  "2026-06-25",
        "location_small":  "서교동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1790756430",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍣일식",
        "name":  "TOL",
        "date":  "2026-06-17",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "visit_count":  19,
        "closed":  false
    },
    {
        "category":  "🥗샐러드",
        "name":  "써브웨이 서강대점",
        "date":  "2026-06-18",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/223880589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "visit_count":  16,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "지금식당 마포직영점",
        "date":  "2026-06-18",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1193512345",
        "location_large":  "서울 마포구",
        "menu":  [
                     "솥밥"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "스시이안앤 신촌점",
        "date":  "2026-06-19",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/512210695",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "회전초밥"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍽️뷔페",
        "name":  "에스칼라디움웨딩홀",
        "date":  "2026-06-20",
        "location_small":  "삼산동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1663084466",
        "location_large":  "인천 부평구",
        "menu":  [
                     "뷔페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "석암생소금구이 성수점",
        "date":  "2026-06-21",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1892245869",
        "location_large":  "서울 성동구",
        "menu":  [
                     "삼겹살"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "크림라벨",
        "date":  "2026-06-21",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/402240184#photoview",
        "location_large":  "서울 성동구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍝양식",
        "name":  "헤비스테이크 더연남",
        "date":  "2026-06-22",
        "location_small":  "동교동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/671788697",
        "location_large":  "서울 마포구",
        "menu":  [
                     "스테이크"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "정월",
        "date":  "2026-06-22",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/131878421",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "visit_count":  8,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "옥수동돼치집 돼지와김치의완벽한비율을찾다 마포점",
        "date":  "2026-06-23",
        "location_small":  "공덕동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1692800582",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돼지김치구이"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "쿠츠",
        "date":  "2026-06-23",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/14544642",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "visit_count":  5,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "봉구스밥버거 서강대점",
        "date":  "2026-06-24",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "visit_count":  32,
        "closed":  false
    },
    {
        "category":  "🍽️뷔페",
        "name":  "애슐리퀸즈 현대유플렉스신촌점",
        "date":  "2026-06-24",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/317024934",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "뷔페"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "맥도날드 연세대점",
        "date":  "2026-06-25",
        "location_small":  "창천동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/18606733",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  6,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "바다돌섬포차 이태원점",
        "date":  "2026-05-17",
        "location_small":  "이태원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/740460227",
        "location_large":  "서울 용산구",
        "menu":  [
                     "술집",
                     "회"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "대한냉면 마포점",
        "date":  "2026-05-18",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1085817955",
        "location_large":  "서울 마포구",
        "menu":  [
                     "냉면"
                 ],
        "visit_count":  5,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "한강서초순대국",
        "date":  "2026-05-18",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/12044566",
        "location_large":  "서울 마포구",
        "menu":  [
                     "국밥"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "식물원김밥 공덕점",
        "date":  "2026-05-20",
        "location_small":  "도화동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1935690765",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "금복식당",
        "date":  "2026-05-22",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1722785841",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고등어구이",
                     "카레"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "르봉뺑",
        "date":  "2026-05-23",
        "location_small":  "가평읍",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1695937616",
        "location_large":  "경기 가평",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "남이섬 티하우스 차담",
        "date":  "2026-05-24",
        "location_small":  "남산면",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1708311659",
        "location_large":  "강원 춘천",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "초원닭갈비막국수",
        "date":  "2026-05-24",
        "location_small":  "가평읍",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/17082781",
        "location_large":  "경기 가평",
        "menu":  [
                     "닭갈비"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍕피자",
        "name":  "잇츠피자 호평",
        "date":  "2026-05-24",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1338334638",
        "location_large":  "경기 남양주",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "미가",
        "date":  "2026-05-26",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16443006",
        "location_large":  "서울 마포구",
        "menu":  [
                     "제육볶음",
                     "파전"
                 ],
        "visit_count":  11,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "맘스터치 마포대흥역점",
        "date":  "2026-05-27",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1679593996",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  7,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "샨샨",
        "date":  "2026-05-28",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1231701730",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕"
                 ],
        "visit_count":  5,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "자담치킨 홍대점",
        "date":  "2026-05-28",
        "location_small":  "창전동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1892965420",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "옥정",
        "date":  "2026-05-29",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1048556062",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "☕카페, 🥗샐러드",
        "name":  "잼베이커리",
        "date":  "2026-05-30",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/578311224",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "육회바른연어 대흥역점",
        "date":  "2026-05-30",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/93909311",
        "location_large":  "서울 마포구",
        "menu":  [
                     "육회비빔밥"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "거부기밥",
        "date":  "2026-04-17",
        "location_small":  "가경동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1773834978",
        "location_large":  "충북 청주",
        "menu":  [
                     "주먹밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "파리크라상 원그로브점",
        "date":  "2026-04-19",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/847184931",
        "location_large":  "서울 강서구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🥩고기",
        "name":  "인사동마늘보쌈",
        "date":  "2026-04-19",
        "location_small":  "관훈동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/890992896",
        "location_large":  "서울 종로구",
        "menu":  [
                     "보쌈"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "맥도날드 우장산DT점",
        "date":  "2026-04-04",
        "location_small":  "화곡동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/27176968",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "배떡 신길점",
        "date":  "2026-04-02",
        "location_small":  "신길동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1172377224",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "리정원 대흥점",
        "date":  "2026-04-02",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1448096292",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼겹살",
                     "찌개"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍣일식",
        "name":  "돈까스브로스 마포공덕점",
        "date":  "2026-04-20",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1764886627",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "웰빙봉평메일마을",
        "date":  "2026-04-21",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/662370482",
        "location_large":  "서울 마포구",
        "menu":  [
                     "막국수"
                 ],
        "visit_count":  7,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "엄마애밥상",
        "date":  "2026-04-22",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "visit_count":  20,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "프랭크버거 서강대점",
        "date":  "2026-04-22",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/834184731",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  9,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "세끼김밥",
        "date":  "2026-04-23",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/742902254",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥"
                 ],
        "visit_count":  5,
        "closed":  false
    },
    {
        "category":  "🍕피자",
        "name":  "노모어피자",
        "date":  "2026-04-24",
        "location_small":  "서교동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/133054294",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🥩고기",
        "name":  "동래정 대흥점",
        "date":  "2026-04-24",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/200708589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "국밥",
                     "찌개"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍣일식, 🍺술집",
        "name":  "야끼토리잔잔 방이직역점",
        "date":  "2026-04-26",
        "location_small":  "방이동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/488762146",
        "location_large":  "서울 송파구",
        "menu":  [
                     "이자카야"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "미크",
        "date":  "2026-04-26",
        "location_small":  "송파동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1068012698",
        "location_large":  "서울 송파구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "노브랜드버거 신촌점",
        "date":  "2026-04-27",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1324490254",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "버그네차돌불고기",
        "date":  "2026-04-28",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/18539594",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김치찌개",
                     "불고기"
                 ],
        "visit_count":  5,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "개성손만두 마포점",
        "date":  "2026-04-29",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "visit_count":  19,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "썸이프",
        "date":  "2026-05-06",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1770013018",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "밀크빌리지",
        "date":  "2026-04-30",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1111660019",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "카츠하나비",
        "date":  "2026-04-30",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1552499190",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "맛찬들왕소금구이 발산점",
        "date":  "2026-05-09",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/21360116",
        "location_large":  "서울 강서구",
        "menu":  [
                     "삼겹살"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "효자오리바베큐",
        "date":  "2026-05-04",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/527000679",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오리"
                 ],
        "visit_count":  7,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "박포식육식당",
        "date":  "2026-05-01",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/661769676",
        "location_large":  "경기 남양주",
        "menu":  [
                     "삼겹살"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🌮세계요리",
        "name":  "갓잇 용산점",
        "date":  "2026-05-02",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2027527525",
        "location_large":  "서울 용산구",
        "menu":  [
                     "타코"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "KFC 신촌역점",
        "date":  "2026-05-14",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/692703127",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  10,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "우동가조쿠 신촌점",
        "date":  "2026-05-05",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1160906124",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "우동"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "동대문엽기떡볶이 신촌점",
        "date":  "2026-05-06",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/17764441",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  5,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "카페252",
        "date":  "2026-05-06",
        "location_small":  "상봉동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/131735695",
        "location_large":  "서울 중랑구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍕피자",
        "name":  "고블린피자",
        "date":  "2026-05-06",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2036434781",
        "location_large":  "서울 마포구",
        "menu":  [
                     "파스타",
                     "피자"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "가마로강정 잠실새내역점",
        "date":  "2026-05-07",
        "location_small":  "잠실동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1396396658",
        "location_large":  "서울 송파구",
        "menu":  [
                     "닭강정"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "떰즈업",
        "date":  "2026-05-08",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/447354571",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "키친 205",
        "date":  "2026-05-09",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1337140142",
        "location_large":  "서울 마포구",
        "menu":  [
                     "케이크"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍣일식, 🍺술집",
        "name":  "오몬자",
        "date":  "2026-05-10",
        "location_small":  "역삼동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/465871230",
        "location_large":  "서울 강남구",
        "menu":  [
                     "몬자야끼",
                     "오꼬노미야끼"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "스타벅스 파미에파크R점",
        "date":  "2026-05-10",
        "location_small":  "반포동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/25502514",
        "location_large":  "서울 서초구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "이삭토스트 마포용강점",
        "date":  "2026-05-11",
        "location_small":  "용강동",
        "rate":  "🥄🥄",
        "map_url":  "http://place.map.kakao.com/1095063794",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "마포쌈밥식당",
        "date":  "2026-05-12",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1919542306",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌈밥"
                 ],
        "visit_count":  12,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "명량핫도그 연희점",
        "date":  "2026-05-15",
        "location_small":  "연희동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/886981259",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "핫도그"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍕피자",
        "name":  "피자몰 신촌점",
        "date":  "2026-05-15",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27048302",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🥗샐러드",
        "name":  "포케올데이 마곡점",
        "date":  "2026-05-16",
        "location_small":  "마곡동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/2042213205",
        "location_large":  "서울 강서구",
        "menu":  [
                     "포케"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "천막집",
        "date":  "2026-04-05",
        "location_small":  "동선동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1925267112",
        "location_large":  "서울 성북구",
        "menu":  [
                     "삼겹살"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "코우이",
        "date":  "2026-04-05",
        "location_small":  "삼선동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1869705473",
        "location_large":  "서울 성북구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "롯데리아 대흥역점",
        "date":  "2026-04-07",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/20012019",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  12,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍣일식",
        "name":  "아비꼬 신촌점",
        "date":  "2026-04-08",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/17735995",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "카레"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "홍원",
        "date":  "2026-04-09",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/13083730",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "visit_count":  6,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "교촌치킨 신수점",
        "date":  "2026-04-10",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/19392082",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  5,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "동대문엽기떡볶이 마포공덕점",
        "date":  "2026-04-10",
        "location_small":  "염리동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/18657538",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "더파이홀",
        "date":  "2026-04-11",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1011256721",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🥗샐러드",
        "name":  "샐러디 서강대점",
        "date":  "2026-04-13",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/205546197",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샐러드"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍝양식",
        "name":  "뽁식당 신촌점",
        "date":  "2026-04-11",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/298384195",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "파스타"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "또보겠지떡볶이집 깐따비아점",
        "date":  "2026-04-14",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/895272833",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  7,
        "closed":  false
    },
    {
        "category":  "🍗치킨, 🍺술집",
        "name":  "BHC치킨 중문점",
        "date":  "2026-04-15",
        "location_small":  "색달동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1887034298",
        "location_large":  "제주 서귀포",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "풍로 중문직영점",
        "date":  "2026-04-15",
        "location_small":  "색달동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/106372237",
        "location_large":  "제주 서귀포",
        "menu":  [
                     "삼겹살"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "아베베베이커리 제주",
        "date":  "2026-04-15",
        "location_small":  "동문시장",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/587249375",
        "location_large":  "제주 제주",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "먹돌고기국수 제주본점",
        "date":  "2026-04-15",
        "location_small":  "제주공항",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1588732308",
        "location_large":  "제주 제주",
        "menu":  [
                     "고기국수"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "마농치킨 본점",
        "date":  "2026-04-16",
        "location_small":  "중앙동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/11291724",
        "location_large":  "제주 서귀포",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "제주오성 순살갈치조림",
        "date":  "2026-04-16",
        "location_small":  "색달동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/10627937",
        "location_large":  "제주 서귀포",
        "menu":  [
                     "갈치조림"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "두리둠비 제주중문본점",
        "date":  "2026-04-16",
        "location_small":  "색달동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/221479836",
        "location_large":  "제주 서귀포",
        "menu":  [
                     "순두부"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "제라헌 본점",
        "date":  "2026-04-17",
        "location_small":  "동문시장",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/899155913",
        "location_large":  "제주 제주",
        "menu":  [
                     "떡"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "불턱버거 2021",
        "date":  "2026-04-17",
        "location_small":  "대포동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27850475",
        "location_large":  "제주 서귀포",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "계순내닭강정",
        "date":  "2026-03-24",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1475248000",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭강정"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "단막 종각점",
        "date":  "2026-03-22",
        "location_small":  "관철동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/944030617",
        "location_large":  "서울 종로구",
        "menu":  [
                     "막창"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "피롤츠 커피하우스",
        "date":  "2026-03-22",
        "location_small":  "태평로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/115474774",
        "location_large":  "서울 중구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "한솥도시락 서강대점",
        "date":  "2026-03-26",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1584071787",
        "location_large":  "서울 마포구",
        "menu":  [
                     "도시락"
                 ],
        "visit_count":  10,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "왁버거 홍대입구역점",
        "date":  "2026-03-26",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/280575941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍕피자",
        "name":  "피자스쿨 대흥역점",
        "date":  "2026-03-27",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/25781457",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "다모토리히읗",
        "date":  "2026-03-29",
        "location_small":  "용산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/11794306",
        "location_large":  "서울 용산구",
        "menu":  [
                     "술집",
                     "파전"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "김가네 한옥마을점",
        "date":  "2026-03-29",
        "location_small":  "필동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/8191243",
        "location_large":  "서울 중구",
        "menu":  [
                     "김밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "퀸즈베리도넛하우스",
        "date":  "2026-03-29",
        "location_small":  "신당동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1557643957",
        "location_large":  "서울 중구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍣일식",
        "name":  "숲길돈가스",
        "date":  "2026-03-30",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/145404038",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "럼버잭",
        "date":  "2026-03-01",
        "location_small":  "부암동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/20941365",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "코이크",
        "date":  "2026-02-18",
        "location_small":  "연남동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/727239043",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "찐쭈",
        "date":  "2026-02-20",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1808390476",
        "location_large":  "서울 마포구",
        "menu":  [
                     "불고기",
                     "쭈꾸미불고기"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍗치킨, 🍙분식",
        "name":  "연가닭강정 대흥점",
        "date":  "2026-02-27",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1024205713",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭강정"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "맘스터치 마곡역홈앤쇼핑점",
        "date":  "2026-02-28",
        "location_small":  "마곡동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1407853054",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "뼈탄집",
        "date":  "2026-03-01",
        "location_small":  "내자동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1993931194",
        "location_large":  "서울 종로구",
        "menu":  [
                     "삼겹살"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "소하염전 익선점",
        "date":  "2026-03-02",
        "location_small":  "익선동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1130146507",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "엄용백돼지국밥 종각점",
        "date":  "2026-03-02",
        "location_small":  "인사동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/416934208",
        "location_large":  "서울 종로구",
        "menu":  [
                     "국밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "옛날돈까스",
        "date":  "2026-03-11",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/674504424",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "킹콩부대찌개 마포대흥오남매행복점",
        "date":  "2026-03-12",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1744462722",
        "location_large":  "서울 마포구",
        "menu":  [
                     "부대찌개"
                 ],
        "visit_count":  7,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "탄탄면공방 더 블랙 원그로브점",
        "date":  "2026-03-14",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1825701689",
        "location_large":  "서울 강서구",
        "menu":  [
                     "탄탄면"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "동대문엽기떡볶이 남양주호평점",
        "date":  "2026-03-14",
        "location_small":  "호평동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1284557301",
        "location_large":  "경기 남양주",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "조개우물보쌈",
        "date":  "2026-03-15",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1002637700",
        "location_large":  "서울 마포구",
        "menu":  [
                     "보쌈"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "9램",
        "date":  "2026-03-15",
        "location_small":  "망원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/173906030",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍺술집",
        "name":  "동학",
        "date":  "2026-03-13",
        "location_small":  "공릉동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16329163",
        "location_large":  "서울 노원구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "청석골감자탕순대국",
        "date":  "2026-03-06",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/15455029",
        "location_large":  "서울 마포구",
        "menu":  [
                     "감자탕"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "평화남영 문래점",
        "date":  "2026-03-08",
        "location_small":  "문래동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2098181745",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "이자카야"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "정과자점",
        "date":  "2026-03-08",
        "location_small":  "연남동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/103046351",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "마포닭곰탕 본점",
        "date":  "2026-03-09",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/17361050",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭곰탕",
                     "부대찌개"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍺술집, 🥩고기",
        "name":  "짚뿔닭발",
        "date":  "2026-02-01",
        "location_small":  "흥인동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/267213453",
        "location_large":  "서울 중구",
        "menu":  [
                     "닭발"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "오우뉴",
        "date":  "2026-02-01",
        "location_small":  "신당동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/104846297",
        "location_large":  "서울 중구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "소바연구소",
        "date":  "2026-02-02",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2114260452",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "메밀소바"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "파친코",
        "date":  "2026-02-04",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1142997501",
        "location_large":  "서울 용산구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "동식탁",
        "date":  "2026-02-04",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1797119835",
        "location_large":  "서울 용산구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "롤앤롤 김밥",
        "date":  "2026-02-06",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1581143656",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥"
                 ],
        "visit_count":  10,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🥩고기",
        "name":  "송고집왕족발 본점",
        "date":  "2026-02-08",
        "location_small":  "내발산동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/21324937",
        "location_large":  "서울 강서구",
        "menu":  [
                     "족발"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "기요한",
        "date":  "2026-02-09",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/736634882",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카이센동"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "홍콩반점0410 대흥역점",
        "date":  "2026-02-10",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/336646124",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "BHC치킨 신촌점",
        "date":  "2026-02-11",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "about:blank",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  5,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "스탠다드번",
        "date":  "2026-02-14",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1322951657",
        "location_large":  "서울 용산구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🥩고기",
        "name":  "뜯고기 신용산본점",
        "date":  "2026-02-14",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/34618391",
        "location_large":  "서울 용산구",
        "menu":  [
                     "등갈비"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "일호단팥",
        "date":  "2026-01-15",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/59940969",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🥩고기",
        "name":  "장군굴보쌈",
        "date":  "2026-01-18",
        "location_small":  "관수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/10731091",
        "location_large":  "서울 종로구",
        "menu":  [
                     "보쌈"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "베이커리 아궁",
        "date":  "2026-01-18",
        "location_small":  "관철동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/265446905",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍕피자",
        "name":  "피자스쿨 이대점",
        "date":  "2026-01-21",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1235214382",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🥩고기",
        "name":  "고기마니밥마니",
        "date":  "2026-01-21",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27290474",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼겹살"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "신촌수제비",
        "date":  "2026-01-22",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/12502450",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "수제비"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "에뚜왈 신촌점",
        "date":  "2026-01-26",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/81542663",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "송계옥 교대점",
        "date":  "2026-01-25",
        "location_small":  "서초동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1621224124",
        "location_large":  "서울 서초구",
        "menu":  [
                     "닭고기"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "루앨드파리 서초본점",
        "date":  "2026-01-25",
        "location_small":  "서초동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/26455895",
        "location_large":  "서울 서초구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍣일식",
        "name":  "오므파탈",
        "date":  "2026-01-26",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1539064922",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "오므라이스"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "중화객잔수",
        "date":  "2026-01-28",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/211096332",
        "location_large":  "서울 용산구",
        "menu":  [
                     "짜장면",
                     "탕수육"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "혼신꼬치 신촌점",
        "date":  "2026-01-29",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/357150027",
        "location_large":  "서울 마포구",
        "menu":  [
                     "꼬치",
                     "이자카야"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "이자카야 우규 신촌점",
        "date":  "2026-01-29",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/770326605",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "이자카야"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "버거킹 신촌1점",
        "date":  "2026-01-29",
        "location_small":  "창천동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/8375653",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "설빙 발산점",
        "date":  "2026-01-30",
        "location_small":  "등촌동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/26644158",
        "location_large":  "서울 강서구",
        "menu":  [
                     "빙수"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "광주똑순이아구찜",
        "date":  "2026-01-30",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27501934",
        "location_large":  "서울 강서구",
        "menu":  [
                     "아구찜"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "미식일가",
        "date":  "2025-12-28",
        "location_small":  "군자동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27229361",
        "location_large":  "서울 광진구",
        "menu":  [
                     "조개구이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "오드커피하우스",
        "date":  "2025-12-28",
        "location_small":  "자양동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1353991558",
        "location_large":  "서울 광진구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥗샐러드",
        "name":  "지미존스 서강대점",
        "date":  "2025-12-29",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/937173939",
        "location_large":  "서울 마포구",
        "menu":  [
                     "브리또"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🥩고기",
        "name":  "오리촌",
        "date":  "2026-01-03",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/9317412",
        "location_large":  "경기 남양주",
        "menu":  [
                     "오리"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "쿠슈울트라라멘 평내호평점",
        "date":  "2026-01-04",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/992018359",
        "location_large":  "경기 남양주",
        "menu":  [
                     "라멘"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "피아이씨",
        "date":  "2026-01-04",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1952568266",
        "location_large":  "경기 남양주",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "이태리부대찌개 서강대점",
        "date":  "2026-01-06",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1609712037",
        "location_large":  "서울 마포구",
        "menu":  [
                     "부대찌개"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨, 🍺술집",
        "name":  "꼬꼬로치킨 홍대점",
        "date":  "2026-01-07",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/242944327",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "경호네",
        "date":  "2026-01-07",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/365481447",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  3,
        "closed":  true
    },
    {
        "category":  "🍚한식, 🍺술집",
        "name":  "하루",
        "date":  "2026-01-10",
        "location_small":  "화곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/122968001",
        "location_large":  "서울 강서구",
        "menu":  [
                     "회"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨, 🍚한식",
        "name":  "04판 대학로점",
        "date":  "2026-01-11",
        "location_small":  "명륜동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1520170130",
        "location_large":  "서울 종로구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "에디션엠",
        "date":  "2026-01-11",
        "location_small":  "명륜동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1761099960",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "끼로끼로부엉이",
        "date":  "2025-12-16",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27383419",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돼지고기",
                     "소고기"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "히노키공방",
        "date":  "2025-12-16",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/12273254",
        "location_large":  "서울 마포구",
        "menu":  [
                     "백반"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "팥고당 명동본점",
        "date":  "2025-12-17",
        "location_small":  "명동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/414539288",
        "location_large":  "서울 중구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "스시로 명동성당점",
        "date":  "2025-12-17",
        "location_small":  "명동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1353238103",
        "location_large":  "서울 중구",
        "menu":  [
                     "회전초밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "고드니",
        "date":  "2025-12-18",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/700615587",
        "location_large":  "서울 강서구",
        "menu":  [
                     "카페",
                     "휘낭시에"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "역전할머니맥주 서울방이점",
        "date":  "2025-12-18",
        "location_small":  "방이동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1970587460",
        "location_large":  "서울 송파구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "콘서트",
        "date":  "2025-12-21",
        "location_small":  "송파동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://map.naver.com/p/entry/place/1650418825",
        "location_large":  "서울 송파구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  3,
        "closed":  true
    },
    {
        "category":  "🍙분식",
        "name":  "유부선생 서강대점",
        "date":  "2025-12-22",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1799052538",
        "location_large":  "서울 마포구",
        "menu":  [
                     "유부초밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "왔쏘 홍대점",
        "date":  "2025-12-23",
        "location_small":  "서교동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/295479292",
        "location_large":  "서울 마포구",
        "menu":  [
                     "소고기"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "해주찹쌀순대",
        "date":  "2025-12-26",
        "location_small":  "잠실동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/17811923",
        "location_large":  "서울 송파구",
        "menu":  [
                     "국밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "감탄계숯불치킨 강남점",
        "date":  "2025-12-27",
        "location_small":  "역삼동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/413386069",
        "location_large":  "서울 강남구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "레뽀드라라 강남점",
        "date":  "2025-12-27",
        "location_small":  "역삼동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1586942536",
        "location_large":  "서울 강남구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "스아게K",
        "date":  "2025-11-21",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/138967530",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카레"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "밀빛",
        "date":  "2025-11-23",
        "location_small":  "송파동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1346816522",
        "location_large":  "서울 송파구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "방이동쭈꾸미",
        "date":  "2025-11-23",
        "location_small":  "방이동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/13290448",
        "location_large":  "서울 송파구",
        "menu":  [
                     "쭈꾸미"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "지지고 서강대점",
        "date":  "2025-11-24",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/368211608",
        "location_large":  "서울 마포구",
        "menu":  [
                     "컵밥"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "다람쥐곳간 마곡점",
        "date":  "2025-11-25",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/102871137",
        "location_large":  "서울 강서구",
        "menu":  [
                     "호두과자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "현이네회시장",
        "date":  "2025-11-26",
        "location_small":  "망원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1878597817",
        "location_large":  "서울 마포구",
        "menu":  [
                     "회"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "신전떡볶이 신촌점",
        "date":  "2025-11-27",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/545166130",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "FOWS(파우스)",
        "date":  "2025-11-29",
        "location_small":  "삼청동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1265107117",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍝양식",
        "name":  "미트볼라운지",
        "date":  "2025-11-29",
        "location_small":  "팔판동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/240698532",
        "location_large":  "서울 종로구",
        "menu":  [
                     "파스타"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "파툼",
        "date":  "2025-11-29",
        "location_small":  "삼청동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/8113742",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "상록수",
        "date":  "2025-11-30",
        "location_small":  "청파동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/572302487",
        "location_large":  "서울 용산구",
        "menu":  [
                     "삼겹살"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "투다리 신촌1호점",
        "date":  "2025-12-03",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/106595995",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🥩고기",
        "name":  "그뭄족발 본점",
        "date":  "2025-12-07",
        "location_small":  "문래동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1210497999",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "족발"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "몽상",
        "date":  "2025-12-07",
        "location_small":  "문래동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/843025334",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "거구장",
        "date":  "2025-12-09",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/77380285",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돼지고기",
                     "찌개"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "우얼소곱창 마포직영점",
        "date":  "2025-12-10",
        "location_small":  "도화동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/826560438",
        "location_large":  "서울 마포구",
        "menu":  [
                     "곱창"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "유자유김치떡볶이 신촌점",
        "date":  "2025-12-11",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/104532017",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "복호두 마곡역점",
        "date":  "2025-12-13",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/450606222",
        "location_large":  "서울 강서구",
        "menu":  [
                     "호두과자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍕피자",
        "name":  "오구피자 명덕점",
        "date":  "2025-11-01",
        "location_small":  "내발산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/12520232",
        "location_large":  "서울 강서구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "도래집 잠실방이점",
        "date":  "2025-11-02",
        "location_small":  "방이동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/185071604",
        "location_large":  "서울 송파구",
        "menu":  [
                     "도래창"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "크레뮤클럽",
        "date":  "2025-11-02",
        "location_small":  "송파동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/81791583",
        "location_large":  "서울 송파구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "싸다김밥 신촌점",
        "date":  "2025-11-03",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/78558656",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "김밥"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "파파이스 홍대점",
        "date":  "2025-11-04",
        "location_small":  "서교동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/960562796",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "멘토미",
        "date":  "2025-11-04",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1938091586",
        "location_large":  "서울 마포구",
        "menu":  [
                     "가츠동",
                     "마제소바"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "고택",
        "date":  "2025-11-05",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2059984663",
        "location_large":  "서울 용산구",
        "menu":  [
                     "갈비찜"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "교촌치킨 신촌점",
        "date":  "2025-11-06",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/26602826",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "서강주막",
        "date":  "2025-11-07",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1166611413",
        "location_large":  "서울 마포구",
        "menu":  [
                     "보쌈"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "일일미미",
        "date":  "2025-11-08",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/923480400",
        "location_large":  "서울 강서구",
        "menu":  [
                     "짜장면"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "7.8 을지로",
        "date":  "2025-11-09",
        "location_small":  "주교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1425843424",
        "location_large":  "서울 중구",
        "menu":  [
                     "막걸리"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "뚜레쥬르 제일제당센터점",
        "date":  "2025-11-09",
        "location_small":  "쌍림동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/15686257",
        "location_large":  "서울 중구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥗샐러드",
        "name":  "샌디 빌리지",
        "date":  "2025-11-10",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/326057387",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치",
                     "샐러드"
                 ],
        "visit_count":  14,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "굽네치킨 이대역점",
        "date":  "2025-11-11",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/164159610",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍙분식, 🍜중식",
        "name":  "왕중왕만두",
        "date":  "2025-11-13",
        "location_small":  "부평동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1563786166",
        "location_large":  "부산 중구",
        "menu":  [
                     "만두"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "환공어묵",
        "date":  "2025-11-14",
        "location_small":  "초량동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1063886095",
        "location_large":  "부산 동구",
        "menu":  [
                     "어묵"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "부산꼼장어",
        "date":  "2025-11-13",
        "location_small":  "남포동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/9809468",
        "location_large":  "부산 중구",
        "menu":  [
                     "꼼장어"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "젤라송",
        "date":  "2025-11-13",
        "location_small":  "암남동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/840073582",
        "location_large":  "부산 서구",
        "menu":  [
                     "젤라또"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "이가네떡볶이 본점",
        "date":  "2025-11-12",
        "location_small":  "부평동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/20204736",
        "location_large":  "부산 중구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "깡돼후야시장",
        "date":  "2025-11-12",
        "location_small":  "부평동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/213124109",
        "location_large":  "부산 중구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "명품상회",
        "date":  "2025-11-12",
        "location_small":  "남포동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1243887880",
        "location_large":  "부산 중구",
        "menu":  [
                     "회"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "후지라멘",
        "date":  "2025-11-12",
        "location_small":  "중앙동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27535990",
        "location_large":  "부산 중구",
        "menu":  [
                     "라멘"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "롯데리아 서울역사점",
        "date":  "2025-11-12",
        "location_small":  "봉래동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/7857647",
        "location_large":  "서울 중구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "금문중화요리",
        "date":  "2025-11-17",
        "location_small":  "합정동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/174870783",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "넨네",
        "date":  "2025-11-19",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1188302034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "이자카야"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "할리스 용산아이파크몰점",
        "date":  "2025-10-08",
        "location_small":  "한강로",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1414818029",
        "location_large":  "서울 용산구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "신용산 닭한마리",
        "date":  "2025-10-08",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/401374367",
        "location_large":  "서울 용산구",
        "menu":  [
                     "닭한마리"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "부여식품 을지로점",
        "date":  "2025-10-09",
        "location_small":  "인현동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/9802643",
        "location_large":  "서울 중구",
        "menu":  [
                     "막창",
                     "삼겹살"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "파치마마 베이커리",
        "date":  "2025-10-09",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/370995699",
        "location_large":  "서울 용산구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "뇌산마을 대학로점",
        "date":  "2025-10-12",
        "location_small":  "동숭동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/950481567",
        "location_large":  "서울 종로구",
        "menu":  [
                     "뼈구이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "일월일일",
        "date":  "2025-10-12",
        "location_small":  "명륜동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1877004477",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "덮덮밥 서울공덕점",
        "date":  "2025-10-27",
        "location_small":  "도화동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/900914553",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "달떡볶이 공덕점",
        "date":  "2025-10-14",
        "location_small":  "공덕동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1034150132",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "락희돈",
        "date":  "2025-10-22",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/814587106",
        "location_large":  "서울 마포구",
        "menu":  [
                     "꼬치",
                     "술집"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "호요 홍대점",
        "date":  "2025-10-22",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1145849878",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오꼬노미야끼"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "마포광안리",
        "date":  "2025-10-15",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/364627237",
        "location_large":  "서울 마포구",
        "menu":  [
                     "육회비빔밥",
                     "회"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "서래함박 더현대서울",
        "date":  "2025-10-17",
        "location_small":  "여의도동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/891364647",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "함박스테이크"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "사루카메 더현대서울",
        "date":  "2025-10-17",
        "location_small":  "여의도동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/249194338",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "라멘"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "무근본",
        "date":  "2025-10-19",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1167924540",
        "location_large":  "서울 성동구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍕피자",
        "name":  "에이셉피자 성수점",
        "date":  "2025-10-19",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/118259686",
        "location_large":  "서울 성동구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "차일디쉬",
        "date":  "2025-10-19",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2009228453",
        "location_large":  "서울 성동구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "샤브로21 대흥",
        "date":  "2025-10-20",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/127867629",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샤브샤브"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "교도리",
        "date":  "2025-10-15",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/803910728",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭발"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "버거리 신촌점",
        "date":  "2025-10-23",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1556187939",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "삼첩분식 서울공덕점",
        "date":  "2025-10-23",
        "location_small":  "도화동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/44467254",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "남강마황오리전문점",
        "date":  "2025-10-26",
        "location_small":  "목동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/8881928",
        "location_large":  "서울 양천구",
        "menu":  [
                     "오리"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "밴댕이가득한집놋그릇집",
        "date":  "2025-10-26",
        "location_small":  "강화읍",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/9077469",
        "location_large":  "인천 강화군",
        "menu":  [
                     "회",
                     "회덮밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍽️뷔페",
        "name":  "로운 신촌본점",
        "date":  "2025-10-28",
        "location_small":  "동교동",
        "rate":  "🥄🥄",
        "map_url":  "https://map.kakao.com/",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샤브샤브"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "미식가주택",
        "date":  "2025-10-29",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/71272867",
        "location_large":  "서울 마포구",
        "menu":  [
                     "이자카야"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "아웃닭 구월점",
        "date":  "2025-10-31",
        "location_small":  "구월동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/245926998",
        "location_large":  "인천 남동구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "남매밥상",
        "date":  "2025-10-31",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/929653827",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고등어구이",
                     "제육볶음",
                     "찌개"
                 ],
        "visit_count":  10,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "콘웰",
        "date":  "2025-07-02",
        "location_small":  "망원동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1909653777",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍺술집",
        "name":  "동어동락 삼성본점",
        "date":  "2025-09-14",
        "location_small":  "삼성동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1751054299",
        "location_large":  "서울 강남구",
        "menu":  [
                     "회"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "산노루 삼성점",
        "date":  "2025-09-14",
        "location_small":  "삼성동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/737014061",
        "location_large":  "서울 강남구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "카츠와이찌 신촌점",
        "date":  "2025-10-01",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/28097791",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "돈까스"
                 ],
        "visit_count":  3,
        "closed":  true
    },
    {
        "category":  "☕카페",
        "name":  "설빙 신촌점",
        "date":  "2025-09-19",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/24879347",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "빙수"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍣일식, 🍺술집",
        "name":  "군자하루",
        "date":  "2025-09-21",
        "location_small":  "중곡동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/286712467",
        "location_large":  "서울 광진구",
        "menu":  [
                     "이자카야",
                     "회"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "슈네켄베이크하우스",
        "date":  "2025-09-21",
        "location_small":  "자양동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/241702787",
        "location_large":  "서울 광진구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "보배반점 공덕점",
        "date":  "2025-09-22",
        "location_small":  "도화동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1365191842",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "핵밥 서강대점",
        "date":  "2025-09-25",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1475631715",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "뱅뱅막국수 역삼본점",
        "date":  "2025-09-28",
        "location_small":  "도곡동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1391619096",
        "location_large":  "서울 강남구",
        "menu":  [
                     "막국수"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "마르케베이커리",
        "date":  "2025-09-28",
        "location_small":  "논현동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/114427899",
        "location_large":  "서울 강남구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍕피자",
        "name":  "역대급피자 대흥점",
        "date":  "2025-09-29",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1868923975",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "니즈버거 신촌점",
        "date":  "2025-09-30",
        "location_small":  "창전동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/404326976",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥗샐러드",
        "name":  "하이포테이토",
        "date":  "2025-10-02",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/908477259",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "태광식당",
        "date":  "2025-10-01",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27233428",
        "location_large":  "서울 마포구",
        "menu":  [
                     "백반"
                 ],
        "visit_count":  5,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "위치앤그레텔",
        "date":  "2025-10-02",
        "location_small":  "연남동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/362902426",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "용성통닭 본점",
        "date":  "2025-10-02",
        "location_small":  "행궁동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/8022147",
        "location_large":  "경기 수원",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "허스트커피",
        "date":  "2025-10-03",
        "location_small":  "신풍동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/998887356",
        "location_large":  "경기 수원",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "슬로우써니사이드",
        "date":  "2025-10-03",
        "location_small":  "신풍동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1879123369",
        "location_large":  "경기 수원",
        "menu":  [
                     "브런치"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "덕수식당",
        "date":  "2025-10-04",
        "location_small":  "태안읍 동문리",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/8891473",
        "location_large":  "충남 태안",
        "menu":  [
                     "간장게장",
                     "게국지"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "샤브20 서울발산역점",
        "date":  "2025-10-07",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1768952564",
        "location_large":  "서울 강서구",
        "menu":  [
                     "샤브샤브"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "버거킹 마곡점",
        "date":  "2025-08-30",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/2147364653",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "카이스샌드위치샵",
        "date":  "2025-08-30",
        "location_small":  "봉산동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/439067126",
        "location_large":  "대구 중구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "세연콩국 본점",
        "date":  "2025-08-30",
        "location_small":  "남산동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/14515978",
        "location_large":  "대구 중구",
        "menu":  [
                     "콩국",
                     "콩국수"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "안동생고기뭉티기",
        "date":  "2025-08-29",
        "location_small":  "두류동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16453078",
        "location_large":  "대구 달서구",
        "menu":  [
                     "뭉티기"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "임 갈매기살전문점",
        "date":  "2025-08-29",
        "location_small":  "두류동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16635401",
        "location_large":  "대구 달서구",
        "menu":  [
                     "갈매기살"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "베이크백",
        "date":  "2025-08-29",
        "location_small":  "초량동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/319656538",
        "location_large":  "부산 동구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "안목 서면점",
        "date":  "2025-08-29",
        "location_small":  "부전동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/942946257",
        "location_large":  "부산 부산진구",
        "menu":  [
                     "국밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "개미집 광안리본점",
        "date":  "2025-08-28",
        "location_small":  "광안동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/13719092",
        "location_large":  "부산 수영구",
        "menu":  [
                     "낙곱새"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍕피자",
        "name":  "이재모피자 서면점",
        "date":  "2025-08-28",
        "location_small":  "전포동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/413556366",
        "location_large":  "부산 부산진구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "넉아웃",
        "date":  "2025-08-28",
        "location_small":  "부전동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/897675548",
        "location_large":  "부산 부산진구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "초량밀면",
        "date":  "2025-08-27",
        "location_small":  "초량동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27365831",
        "location_large":  "부산 동구",
        "menu":  [
                     "밀면"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "배떡 신촌점",
        "date":  "2025-08-25",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/842143619",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "김태완스시 마포점",
        "date":  "2025-08-26",
        "location_small":  "도화동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1175874488",
        "location_large":  "서울 마포구",
        "menu":  [
                     "초밥"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "왕십리소곱창",
        "date":  "2025-08-24",
        "location_small":  "홍익동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1425389371",
        "location_large":  "서울 성동구",
        "menu":  [
                     "곱창"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "카페꼬밍",
        "date":  "2025-08-24",
        "location_small":  "행당동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1583624066",
        "location_large":  "서울 성동구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "키친봄날",
        "date":  "2025-09-01",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1573253740",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "김밥"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "고기왕창 자이언트비빔밥 홍대점",
        "date":  "2025-09-04",
        "location_small":  "서교동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/495717982",
        "location_large":  "서울 마포구",
        "menu":  [
                     "육회비빔밥"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍝양식, 🍣일식",
        "name":  "잠연",
        "date":  "2025-09-03",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/745963542",
        "location_large":  "서울 용산구",
        "menu":  [
                     "퓨전요리"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "겐로쿠우동 타임스퀘어점",
        "date":  "2025-09-06",
        "location_small":  "영등포동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2000944918",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "우동"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "롯데리아 발산역점",
        "date":  "2025-09-06",
        "location_small":  "등촌동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/14490394",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "천하보쌈",
        "date":  "2025-09-07",
        "location_small":  "원서동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/10848372",
        "location_large":  "서울 종로구",
        "menu":  [
                     "보쌈"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "스탠다드브레드 안국",
        "date":  "2025-09-07",
        "location_small":  "재동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1532324202",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "큐스닭강정",
        "date":  "2025-09-10",
        "location_small":  "망원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/19949548",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭강정"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "네임이즈마빈",
        "date":  "2025-09-10",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/631455576",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "용싸키친",
        "date":  "2025-09-10",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/15526292",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "바른치킨 서강대 로봇점",
        "date":  "2025-09-11",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1446748474",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  5,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "츠케루 공덕",
        "date":  "2025-09-12",
        "location_small":  "도화동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1596931299",
        "location_large":  "서울 마포구",
        "menu":  [
                     "라멘"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "호감도",
        "date":  "2025-08-10",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1362579800",
        "location_large":  "서울 성동구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "쎈느",
        "date":  "2025-08-10",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1783691580",
        "location_large":  "서울 성동구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "해운대 달맞이 빵",
        "date":  "2025-08-13",
        "location_small":  "저동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/768172634",
        "location_large":  "서울 중구",
        "menu":  [
                     "빵",
                     "커피"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🥩고기",
        "name":  "화육계",
        "date":  "2025-08-13",
        "location_small":  "을지로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/345283033",
        "location_large":  "서울 중구",
        "menu":  [
                     "닭발"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "오토김밥 공덕점",
        "date":  "2025-08-14",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1163187809",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥",
                     "닭강정"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "마부자생삽겹살김치찌개",
        "date":  "2025-08-17",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/143245596",
        "location_large":  "서울 강서구",
        "menu":  [
                     "삼겹살"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "오지오커피",
        "date":  "2025-08-17",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1631067502",
        "location_large":  "서울 강서구",
        "menu":  [
                     "커피",
                     "크루키"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "복성각",
        "date":  "2025-08-18",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/7892863",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "짜장면",
                     "탕수육"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "스페샬나잇트 본점",
        "date":  "2025-08-20",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/908159543",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "을밀대",
        "date":  "2025-08-20",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/25048467",
        "location_large":  "서울 마포구",
        "menu":  [
                     "평양냉면"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "카츠몬스터 연남본점",
        "date":  "2025-08-04",
        "location_small":  "연남동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1988523643",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "롯데리아 마곡역점",
        "date":  "2025-07-28",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/34199271",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "개나리아구찜 송파본점",
        "date":  "2025-07-27",
        "location_small":  "방이동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/143467064",
        "location_large":  "서울 송파구",
        "menu":  [
                     "아구찜"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍝양식",
        "name":  "뀌노이",
        "date":  "2025-07-31",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1893522279",
        "location_large":  "서울 마포구",
        "menu":  [
                     "뇨끼",
                     "파스타"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍽️뷔페",
        "name":  "곤자가컨벤션",
        "date":  "2025-08-01",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/8231583",
        "location_large":  "서울 마포구",
        "menu":  [
                     "뷔페"
                 ],
        "visit_count":  8,
        "closed":  false
    },
    {
        "category":  "🥗샐러드",
        "name":  "슬로우캘리 공덕점",
        "date":  "2025-08-01",
        "location_small":  "신공덕동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/264285226",
        "location_large":  "서울 마포구",
        "menu":  [
                     "포케"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "마치st118",
        "date":  "2025-08-03",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1602285730",
        "location_large":  "경기 남양주",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "수제칼집생고기",
        "date":  "2025-08-02",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/13597096",
        "location_large":  "경기 남양주",
        "menu":  [
                     "삼겹살"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "인크커피 다산점",
        "date":  "2025-08-02",
        "location_small":  "다산동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/585660022",
        "location_large":  "경기 남양주",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "이박사의신동막걸리",
        "date":  "2025-08-06",
        "location_small":  "용강동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/14536745",
        "location_large":  "서울 마포구",
        "menu":  [
                     "전",
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "토끼정 KTX서울역사점",
        "date":  "2025-08-08",
        "location_small":  "봉래동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/954522598",
        "location_large":  "서울 중구",
        "menu":  [
                     "돈까스",
                     "카레"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍺술집",
        "name":  "완미족발 평내호평역점",
        "date":  "2025-06-29",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/777206145",
        "location_large":  "경기 남양주",
        "menu":  [
                     "족발"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "봉커피",
        "date":  "2025-06-29",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27419559",
        "location_large":  "경기 남양주",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "놀숲 프리미엄홍대점",
        "date":  "2025-07-04",
        "location_small":  "서교동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1265568839",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만화카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식, 🍺술집",
        "name":  "미도리야",
        "date":  "2025-07-06",
        "location_small":  "이태원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/24985617",
        "location_large":  "서울 용산구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "아벡쉐리",
        "date":  "2025-07-06",
        "location_small":  "한남동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/541563112",
        "location_large":  "서울 용산구",
        "menu":  [
                     "커피"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "싸움의고수 신촌점",
        "date":  "2025-07-08",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27543827",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "보쌈"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "미소국수",
        "date":  "2025-07-09",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1347916642",
        "location_large":  "서울 마포구",
        "menu":  [
                     "국수"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "담솥 신촌점",
        "date":  "2025-07-11",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1160182405",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "솥밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍺술집",
        "name":  "연대포",
        "date":  "2025-07-13",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/15516966",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "전"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "문지리535",
        "date":  "2025-07-13",
        "location_small":  "탄현면",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1455161506",
        "location_large":  "경기 파주",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "롯데리아 인천공항제2여객터미널점",
        "date":  "2025-07-16",
        "location_small":  "운서동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1298926904",
        "location_large":  "인천 중구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "우리닭곰탕",
        "date":  "2025-07-21",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1089320134",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭곰탕",
                     "초계국수"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "정든그릇",
        "date":  "2025-07-25",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1069804608",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "돈까스",
                     "메밀소바"
                 ],
        "visit_count":  8,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "뽁순이볶음밥 마포점",
        "date":  "2025-06-09",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/338592317",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "볶음밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "처갓집양념치킨 염리점",
        "date":  "2025-06-11",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/8081328",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "아우어베이커리 신촌숲길점",
        "date":  "2025-06-11",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2064598955",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "조조모모",
        "date":  "2025-06-16",
        "location_small":  "방이동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/171171267",
        "location_large":  "서울 송파구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페, 🥗샐러드",
        "name":  "윈즈오운",
        "date":  "2025-06-17",
        "location_small":  "대현동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1079750859",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "샌드위치"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "을지OB베어 와우",
        "date":  "2025-06-14",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1251519679",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "슈퍼말차 용산아이파크몰",
        "date":  "2025-06-20",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/846314097",
        "location_large":  "서울 용산구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍝양식",
        "name":  "점보파스타 마포본점",
        "date":  "2025-06-20",
        "location_small":  "창전동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2034389246",
        "location_large":  "서울 마포구",
        "menu":  [
                     "리조또",
                     "파스타"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍙분식, 🍚한식",
        "name":  "우리집떡볶이",
        "date":  "2025-06-22",
        "location_small":  "신당동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27234119",
        "location_large":  "서울 중구",
        "menu":  [
                     "닭발",
                     "떡볶이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "메일룸",
        "date":  "2025-06-22",
        "location_small":  "황학동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1330474006",
        "location_large":  "서울 중구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "유브유부 연남점",
        "date":  "2025-06-23",
        "location_small":  "연남동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1427643858",
        "location_large":  "서울 마포구",
        "menu":  [
                     "유부초밥"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "🍗치킨, 🍚한식",
        "name":  "마니마니톡톡",
        "date":  "2025-06-23",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1060711910",
        "location_large":  "서울 마포구",
        "menu":  [
                     "백반",
                     "치킨"
                 ],
        "visit_count":  7,
        "closed":  true
    },
    {
        "category":  "🍚한식",
        "name":  "담산 신촌본점",
        "date":  "2025-06-24",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1480854338",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "등갈비"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "똥꼬하우스",
        "date":  "2025-06-25",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1306288469",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "닭똥집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "오시 망원본점",
        "date":  "2025-06-25",
        "location_small":  "망원동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/863823354",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오꼬노미야끼"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍝양식, 🍽️뷔페",
        "name":  "빕스 은평롯데점",
        "date":  "2025-06-08",
        "location_small":  "진관동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/997786908",
        "location_large":  "서울 은평구",
        "menu":  [
                     "뷔페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "우산꼬치",
        "date":  "2025-06-07",
        "location_small":  "갈현동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1171746396",
        "location_large":  "서울 은평구",
        "menu":  [
                     "꼬치"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍺술집",
        "name":  "주녘",
        "date":  "2025-06-07",
        "location_small":  "갈현동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1604269239",
        "location_large":  "서울 은평구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "1인1잔",
        "date":  "2025-06-07",
        "location_small":  "진관동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670102239",
        "location_large":  "서울 은평구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "신생포차 신촌점",
        "date":  "2025-06-04",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1744842448",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "🍚한식, 🍺술집",
        "name":  "홍미닭발 신촌점",
        "date":  "2025-06-04",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/11951868",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "닭발"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "시즈니",
        "date":  "2025-06-03",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1387324500",
        "location_large":  "서울 성동구",
        "menu":  [
                     "빙수"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "윤경양식당",
        "date":  "2025-06-03",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/64431735",
        "location_large":  "서울 성동구",
        "menu":  [
                     "돈까스"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🥩고기",
        "name":  "왕십리불곱창",
        "date":  "2025-06-02",
        "location_small":  "망우동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18522216",
        "location_large":  "서울 중랑구",
        "menu":  [
                     "곱창"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍺술집",
        "name":  "윤이불닭발 영등포점",
        "date":  "2025-05-09",
        "location_small":  "영등포동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1071904329",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "닭발"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "명량핫도그 대흥역점",
        "date":  "2025-05-08",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1961550147",
        "location_large":  "서울 마포구",
        "menu":  [
                     "핫도그"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "옥면가",
        "date":  "2025-05-08",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/301221235",
        "location_large":  "서울 마포구",
        "menu":  [
                     "국수"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "산쪼메 호평점",
        "date":  "2025-05-06",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/748605485",
        "location_large":  "경기 남양주",
        "menu":  [
                     "라멘"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "카페 제니엘",
        "date":  "2025-05-06",
        "location_small":  "주문진읍",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/599987563",
        "location_large":  "강원 강릉",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "소돌막국수",
        "date":  "2025-05-06",
        "location_small":  "주문진읍",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1629307609",
        "location_large":  "강원 강릉",
        "menu":  [
                     "막국수"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "오징어순대나라",
        "date":  "2025-05-05",
        "location_small":  "성남동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/637492057",
        "location_large":  "강원 강릉",
        "menu":  [
                     "오징어순대"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "배니닭강정",
        "date":  "2025-05-05",
        "location_small":  "성남동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/19660110",
        "location_large":  "강원 강릉",
        "menu":  [
                     "닭강정"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "애시당초",
        "date":  "2025-05-05",
        "location_small":  "초당동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1168878886",
        "location_large":  "강원 강릉",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "초당110",
        "date":  "2025-05-05",
        "location_small":  "강문동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1647908801",
        "location_large":  "강원 강릉",
        "menu":  [
                     "젤라또"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "강릉짬뽕순두부 강릉본점",
        "date":  "2025-05-05",
        "location_small":  "강문동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/731412427",
        "location_large":  "강원 강릉",
        "menu":  [
                     "순두부"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "원조마포소금구이",
        "date":  "2025-05-11",
        "location_small":  "방이동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16326803",
        "location_large":  "서울 송파구",
        "menu":  [
                     "돼지고기"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "쉐이크쉑 용산점",
        "date":  "2025-05-10",
        "location_small":  "한강로",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1955384260",
        "location_large":  "서울 용산구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨, 🍺술집",
        "name":  "부라보선술집",
        "date":  "2025-05-10",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1801175062",
        "location_large":  "서울 용산구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "뚜스뚜스",
        "date":  "2025-05-10",
        "location_small":  "한강로동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1911093773",
        "location_large":  "서울 용산구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "☕카페, 🍺술집",
        "name":  "턴테이블스낵바",
        "date":  "2025-05-14",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27433952",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥗샐러드",
        "name":  "와우바게트샌드위치",
        "date":  "2025-05-13",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/790690407",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "맘스터치 신촌점",
        "date":  "2025-05-12",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27551667",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "숯불꼼장어",
        "date":  "2025-05-18",
        "location_small":  "돈의동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/15568897",
        "location_large":  "서울 종로구",
        "menu":  [
                     "꼼장어"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "필요의방",
        "date":  "2025-05-18",
        "location_small":  "을지로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/109477583",
        "location_large":  "서울 중구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "츠케루",
        "date":  "2025-05-17",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/268235810",
        "location_large":  "서울 마포구",
        "menu":  [
                     "라멘"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥗샐러드",
        "name":  "빈카이브",
        "date":  "2025-05-20",
        "location_small":  "대현동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1520120363",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "샌드위치"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "노브랜드버거 마곡점",
        "date":  "2025-05-25",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1720074844",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "스시우찌",
        "date":  "2025-05-25",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1005384096",
        "location_large":  "경기 남양주",
        "menu":  [
                     "초밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "테를지",
        "date":  "2025-05-23",
        "location_small":  "사정동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1647204680",
        "location_large":  "경북 경주",
        "menu":  [
                     "프레첼"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "황남빵",
        "date":  "2025-05-23",
        "location_small":  "황오동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/26519092",
        "location_large":  "경북 경주",
        "menu":  [
                     "황남빵"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "반카이막 경주본점",
        "date":  "2025-05-23",
        "location_small":  "황남동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1798751627",
        "location_large":  "경북 경주",
        "menu":  [
                     "아이스크림"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍕피자, 🍝양식",
        "name":  "피자옥",
        "date":  "2025-05-23",
        "location_small":  "황남동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1225134792",
        "location_large":  "경북 경주",
        "menu":  [
                     "파스타",
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "아덴 보문호수점",
        "date":  "2025-05-22",
        "location_small":  "신평동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/425270187",
        "location_large":  "경북 경주",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "기와메밀막국수",
        "date":  "2025-05-22",
        "location_small":  "구황동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/725002926",
        "location_large":  "경북 경주",
        "menu":  [
                     "막국수"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "경주약과방",
        "date":  "2025-05-21",
        "location_small":  "황남동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1507806813",
        "location_large":  "경북 경주",
        "menu":  [
                     "개성주악"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "경주대게닭강정",
        "date":  "2025-05-21",
        "location_small":  "황남동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1054251976",
        "location_large":  "경북 경주",
        "menu":  [
                     "닭강정"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "점점",
        "date":  "2025-05-21",
        "location_small":  "황남동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/133871935",
        "location_large":  "경북 경주",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "황남두꺼비",
        "date":  "2025-05-21",
        "location_small":  "황남동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "http://xn--place-961v.map.kakao.com/1952344699",
        "location_large":  "경북 경주",
        "menu":  [
                     "갈비찜"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "롯데리아 용산역사ST점",
        "date":  "2025-05-30",
        "location_small":  "한강로",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/17942379",
        "location_large":  "서울 용산구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "여수당 과자점",
        "date":  "2025-05-30",
        "location_small":  "중앙동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/192785425",
        "location_large":  "전남 여수",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "여수딸기모찌 고마리",
        "date":  "2025-05-30",
        "location_small":  "중앙동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/187738410",
        "location_large":  "전남 여수",
        "menu":  [
                     "딸기모찌"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "영애통장어",
        "date":  "2025-05-30",
        "location_small":  "교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/116932008",
        "location_large":  "전남 여수",
        "menu":  [
                     "장어탕"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "낭만한잔79포차",
        "date":  "2025-05-29",
        "location_small":  "종화동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1676638559",
        "location_large":  "전남 여수",
        "menu":  [
                     "돌문어삼합"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "백년유자 여수점",
        "date":  "2025-05-29",
        "location_small":  "중앙동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1650221658",
        "location_large":  "전남 여수",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "안자네밥상",
        "date":  "2025-05-29",
        "location_small":  "교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1266581709",
        "location_large":  "전남 여수",
        "menu":  [
                     "간장게장",
                     "갈치조림"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드, 🍕피자",
        "name":  "트레디어스 홀세일 클럽 마곡점",
        "date":  "2025-06-01",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1140314024",
        "location_large":  "서울 강서구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍝양식",
        "name":  "음음",
        "date":  "2025-05-03",
        "location_small":  "관훈동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/42264893",
        "location_large":  "서울 종로구",
        "menu":  [
                     "파스타"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "제도",
        "date":  "2025-05-03",
        "location_small":  "부암동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://kko.kakao.com/S-03s0aAEH",
        "location_large":  "서울 종로구",
        "menu":  [
                     "커피",
                     "푸딩"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "옥오꼬노미야끼",
        "date":  "2025-04-30",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/651011450",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오꼬노미야끼"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍺술집",
        "name":  "시시비비",
        "date":  "2025-04-27",
        "location_small":  "사당동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/490006660",
        "location_large":  "서울 동작구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍝양식",
        "name":  "아웃백 광교갤러리아",
        "date":  "2025-04-25",
        "location_small":  "하동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1681181343",
        "location_large":  "경기 수원",
        "menu":  [
                     "스테이크",
                     "파스타"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "숯토리 수원인계점",
        "date":  "2025-04-24",
        "location_small":  "인계동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/768133196",
        "location_large":  "경기 수원",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "역전할머니맥주 수원인계점",
        "date":  "2025-04-24",
        "location_small":  "인계동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/116196120",
        "location_large":  "경기 수원",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍝양식",
        "name":  "미즈컨테이너 광교갤러리아",
        "date":  "2025-04-24",
        "location_small":  "하동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1832557951",
        "location_large":  "경기 수원",
        "menu":  [
                     "파스타",
                     "피자"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "심야식당선",
        "date":  "2025-04-23",
        "location_small":  "인계동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/808030640",
        "location_large":  "경기 수원",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "2층술집",
        "date":  "2025-04-23",
        "location_small":  "인계동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/410812230",
        "location_large":  "경기 수원",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🥩고기",
        "name":  "갈비명가서서갈비 수원본점",
        "date":  "2025-04-23",
        "location_small":  "인계동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/916627053",
        "location_large":  "경기 수원",
        "menu":  [
                     "돼지갈비"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "연리희재",
        "date":  "2025-04-23",
        "location_small":  "하동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2034540788",
        "location_large":  "경기 수원",
        "menu":  [
                     "개성주악"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식, 🍚한식",
        "name":  "소구장",
        "date":  "2025-04-22",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1781711138",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이",
                     "튀김"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "런커피",
        "date":  "2025-04-16",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1356232146",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식, 🍚한식",
        "name":  "마포마두 대흥점",
        "date":  "2025-04-13",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/12755600",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이",
                     "만두",
                     "어묵"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "원조뼈다귀감자탕 본점",
        "date":  "2025-04-20",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16187584",
        "location_large":  "경기 남양주",
        "menu":  [
                     "감자탕"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍺술집",
        "name":  "수다떠는오징어 호평본점",
        "date":  "2025-04-19",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2133364335",
        "location_large":  "경기 남양주",
        "menu":  [
                     "회"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "노랑통닭 광흥창점",
        "date":  "2025-04-14",
        "location_small":  "창전동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/868374193",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍣일식",
        "name":  "함반",
        "date":  "2025-04-13",
        "location_small":  "합정동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2114131901",
        "location_large":  "서울 마포구",
        "menu":  [
                     "함박스테이크"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "보마",
        "date":  "2025-04-11",
        "location_small":  "이태원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/415009738",
        "location_large":  "서울 용산구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "만조",
        "date":  "2025-04-11",
        "location_small":  "해방촌",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1773422199",
        "location_large":  "서울 용산구",
        "menu":  [
                     "뭉티기"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "🍚한식, 🍣일식",
        "name":  "한신우동 서강대점",
        "date":  "2025-04-11",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1490753915",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스",
                     "우동"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🥗샐러드",
        "name":  "크런치샌드위치",
        "date":  "2025-04-07",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1970402078",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍺술집",
        "name":  "적막",
        "date":  "2025-04-06",
        "location_small":  "서촌",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1552691715",
        "location_large":  "서울 종로구",
        "menu":  [
                     "닭발"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "☕카페",
        "name":  "팔",
        "date":  "2025-04-06",
        "location_small":  "통인동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1759358358",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "양지분식",
        "date":  "2025-04-04",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/21410030",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "visit_count":  2,
        "closed":  true
    },
    {
        "category":  "☕카페",
        "name":  "솝커피",
        "date":  "2025-04-04",
        "location_small":  "연남동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/817132826",
        "location_large":  "서울 마포구",
        "menu":  [
                     "커피"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식, 🍺술집",
        "name":  "스미비 숯불구이",
        "date":  "2025-04-02",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/399698120",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "가화만사성",
        "date":  "2025-03-24",
        "location_small":  "창천동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1536467186",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "짜장면"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍕피자, 🍝양식",
        "name":  "피제리아더키",
        "date":  "2025-03-19",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/561289275",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍣일식",
        "name":  "일식비",
        "date":  "2025-03-17",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/858069008",
        "location_large":  "서울 강서구",
        "menu":  [
                     "회"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "쌍굴옻닭",
        "date":  "2025-03-23",
        "location_small":  "덕은동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/10068499",
        "location_large":  "경기 고양",
        "menu":  [
                     "삼계탕",
                     "옻닭"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "황금오리농장",
        "date":  "2025-03-02",
        "location_small":  "가양동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2048176933",
        "location_large":  "서울 강서구",
        "menu":  [
                     "오리"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "예산가마솥국밥",
        "date":  "2025-03-29",
        "location_small":  "영등포동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/792095102",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "국밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "미나리밭 오리사냥 문래점",
        "date":  "2025-03-28",
        "location_small":  "문래동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1566150136",
        "location_large":  "서울 영등포구",
        "menu":  [

                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍕피자, 🍝양식",
        "name":  "포그",
        "date":  "2025-03-28",
        "location_small":  "합정동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1317622013",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "상상오리 홍대점",
        "date":  "2025-03-26",
        "location_small":  "창전동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/174542888",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오리"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "겐로쿠우동 홍대본점",
        "date":  "2025-03-25",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/12437276",
        "location_large":  "서울 마포구",
        "menu":  [
                     "우동"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "유부로 더현대서울",
        "date":  "2025-03-23",
        "location_small":  "여의도동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1357557435",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "유부초밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "오레노라멘 송파점",
        "date":  "2025-03-16",
        "location_small":  "송파동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1087614547",
        "location_large":  "서울 송파구",
        "menu":  [
                     "라멘"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍺술집",
        "name":  "매주가",
        "date":  "2025-03-15",
        "location_small":  "방이동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1119011541",
        "location_large":  "서울 송파구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "맥도날드 영등포점",
        "date":  "2025-03-14",
        "location_small":  "영등포동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/7861591",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "광명대창집영등포집",
        "date":  "2025-03-14",
        "location_small":  "영등포동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/34150783",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "곱창"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🌮세계요리",
        "name":  "타코로코",
        "date":  "2025-03-12",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/26524405",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "타코"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "수저가",
        "date":  "2025-03-11",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/542808268",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짬뽕"
                 ],
        "visit_count":  4,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "파이브가이즈 서울역점",
        "date":  "2025-03-09",
        "location_small":  "봉래동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/614833390",
        "location_large":  "서울 중구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "타오마라탕 신촌점",
        "date":  "2025-03-09",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2027326489",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "마라탕"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "덮당",
        "date":  "2025-03-08",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/791340802",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "진미오향족발",
        "date":  "2025-03-07",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/17736011",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "족발"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식, 🍺술집",
        "name":  "토리야 참피온",
        "date":  "2025-03-05",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2115062809",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭고기",
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "성수족발",
        "date":  "2025-02-28",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/8416853",
        "location_large":  "서울 성동구",
        "menu":  [
                     "족발"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍜중식, 🍣일식",
        "name":  "데이릿 더현대서울",
        "date":  "2025-02-27",
        "location_small":  "여의도동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/871143674",
        "location_large":  "서울 영등포구",
        "menu":  [

                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "죠죠 더현대서울점",
        "date":  "2025-02-27",
        "location_small":  "여의도동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/420297065",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "오꼬노미야끼"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "더라멘워 더현대서울점",
        "date":  "2025-02-27",
        "location_small":  "여의도동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1483503760",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "라멘"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "명랑핫도그 아현역점",
        "date":  "2025-02-25",
        "location_small":  "북아현동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/863548410",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이",
                     "핫도그"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "카페메틀",
        "date":  "2025-02-24",
        "location_small":  "합정동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1633185698",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "마늘집",
        "date":  "2025-02-24",
        "location_small":  "합정동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1301732319",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭볶음탕",
                     "닭한마리"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "브라운시티 로스팅랩",
        "date":  "2025-02-22",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/327828139",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페",
                     "커피"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "스시지현",
        "date":  "2025-02-22",
        "location_small":  "연남동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1297596109",
        "location_large":  "서울 마포구",
        "menu":  [
                     "초밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "커츠",
        "date":  "2025-02-21",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/919165564",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "아웃닭 신촌역점",
        "date":  "2025-02-19",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27341509",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "앨리케이커",
        "date":  "2025-02-19",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1571969111",
        "location_large":  "서울 강서구",
        "menu":  [
                     "케이크"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "또보겠지떡볶이집 스마일보이점",
        "date":  "2025-02-17",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/524094409",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "녹기전에",
        "date":  "2025-02-17",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/712881606",
        "location_large":  "서울 마포구",
        "menu":  [
                     "아이스크림"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "몽주방",
        "date":  "2024-11-29",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/581963667",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🥗샐러드",
        "name":  "포케올데이 공덕점",
        "date":  "2024-11-27",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1297162293",
        "location_large":  "서울 마포구",
        "menu":  [
                     "포케"
                 ],
        "visit_count":  5,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "솔솥 연남점",
        "date":  "2024-11-25",
        "location_small":  "연남동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1506623283",
        "location_large":  "서울 마포구",
        "menu":  [
                     "솥밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "탕화쿵푸마라탕 첨단점",
        "date":  "2025-02-15",
        "location_small":  "첨단",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/297521021",
        "location_large":  "광주 광산구",
        "menu":  [
                     "마라탕"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "1984 술마시는작업실 첨단점",
        "date":  "2025-02-14",
        "location_small":  "첨단",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1292029176",
        "location_large":  "광주 광산구",
        "menu":  [
                     "술집",
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍣일식",
        "name":  "청원모밀",
        "date":  "2025-02-14",
        "location_small":  "첨단",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/815915586",
        "location_large":  "광주 광산구",
        "menu":  [
                     "돈까스",
                     "메밀소바"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "홍두깨칼국수",
        "date":  "2025-02-12",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1140258830",
        "location_large":  "서울 마포구",
        "menu":  [
                     "칼국수"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥡아시안",
        "name":  "포엔띠우",
        "date":  "2025-02-11",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1853354235",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌀국수"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "꼰대상회",
        "date":  "2025-02-11",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/147318488",
        "location_large":  "서울 마포구",
        "menu":  [
                     "해장국"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "🍗치킨",
        "name":  "페리카나 공덕역점",
        "date":  "2025-02-10",
        "location_small":  "공덕동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/10891505",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "한솥도시락 이대역점",
        "date":  "2024-12-04",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/18248679",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "도시락"
                 ],
        "visit_count":  7,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "굽네치킨 북아현점",
        "date":  "2024-12-09",
        "location_small":  "북아현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1526618624",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "가마솥에푹끓인묵은김치찜 마포점",
        "date":  "2024-12-16",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/728243913",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김치찜"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥗샐러드",
        "name":  "샐러드앤가든 서울공덕점",
        "date":  "2024-12-18",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/125881152",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샐러드",
                     "포케"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "더크레딧",
        "date":  "2024-12-19",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1881094942",
        "location_large":  "서울 마포구",
        "menu":  [
                     "빵",
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "도레도레 영등포롯데점",
        "date":  "2024-12-23",
        "location_small":  "영등포동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/609292637",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "커피",
                     "케이크"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "아비꼬 타임스퀘어점",
        "date":  "2024-12-23",
        "location_small":  "영등포동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/26942456",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "카레"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "장수보감",
        "date":  "2024-12-24",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/14832719",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼계탕"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "1987 신샤브 마포점",
        "date":  "2024-12-27",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/847209556",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샤브샤브"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "세아마라탕 서강대점",
        "date":  "2024-11-09",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1629334425",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마라탕"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "부탄츄 신촌점",
        "date":  "2025-01-12",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/21572456",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "라멘"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "하트티라미수 현대백화점신촌점",
        "date":  "2024-12-25",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/218154293",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "티라미수"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "방화동 교동짬뽕",
        "date":  "2024-12-25",
        "location_small":  "방화동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/25858128",
        "location_large":  "서울 강서구",
        "menu":  [
                     "짬뽕"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "고삼이 신촌점",
        "date":  "2024-12-24",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/17505297",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "고등어구이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "한식주점 제일회관 수원직영점",
        "date":  "2024-12-20",
        "location_small":  "수원역",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/662047130",
        "location_large":  "경기 수원",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "카쿠시타",
        "date":  "2024-12-17",
        "location_small":  "연남동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1317927211",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "우리바다수산(성산점)",
        "date":  "2024-12-13",
        "location_small":  "성산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/15965312",
        "location_large":  "서울 마포구",
        "menu":  [
                     "회"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍝양식",
        "name":  "아웃백스테이크하우스 신촌점",
        "date":  "2024-12-13",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/7991188",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "스테이크",
                     "파스타"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "마르뜨",
        "date":  "2024-12-07",
        "location_small":  "망원동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1371486408",
        "location_large":  "서울 마포구",
        "menu":  [
                     "빙수"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "건어물라운지",
        "date":  "2024-12-07",
        "location_small":  "망원동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/887161079",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "청어람 2호점",
        "date":  "2024-12-07",
        "location_small":  "망원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1028137347",
        "location_large":  "서울 마포구",
        "menu":  [
                     "곱창",
                     "곱창전골"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "히카",
        "date":  "2024-12-07",
        "location_small":  "망원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1243515681",
        "location_large":  "서울 마포구",
        "menu":  [
                     "커피",
                     "케이크"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "캐빈",
        "date":  "2024-12-01",
        "location_small":  "흑석동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1458421452",
        "location_large":  "서울 동작구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "칠가마라상궈마라탕 중앙대점",
        "date":  "2024-12-01",
        "location_small":  "흑석동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1656084578",
        "location_large":  "서울 동작구",
        "menu":  [
                     "마라샹궈",
                     "마라탕"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "어덜트온리",
        "date":  "2024-11-23",
        "location_small":  "신사동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/203277944",
        "location_large":  "서울 강남구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "바다포차돌섬 신사점",
        "date":  "2024-11-23",
        "location_small":  "신사동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/677390319",
        "location_large":  "서울 강남구",
        "menu":  [
                     "회"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "따우전드 신사점",
        "date":  "2024-11-23",
        "location_small":  "신사동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1363607100",
        "location_large":  "서울 강남구",
        "menu":  [
                     "커피",
                     "파이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "678치킨앤버거 신촌서강직영점",
        "date":  "2025-01-21",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1887745600",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "대파곱창",
        "date":  "2025-01-23",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2000501931",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "곱창"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "그릭데이 이대본점",
        "date":  "2025-01-24",
        "location_small":  "대현동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/577825774",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "요거트"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "고디바베이커리 현대백화점신촌점",
        "date":  "2025-01-24",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1695844849",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "빵"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "아소정",
        "date":  "2025-01-24",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/7990640",
        "location_large":  "서울 마포구",
        "menu":  [
                     "갈비찜",
                     "갈비탕",
                     "냉면"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "설빙 서울망원점",
        "date":  "2025-01-25",
        "location_small":  "망원동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/350204016",
        "location_large":  "서울 마포구",
        "menu":  [
                     "빙수"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "교촌치킨 망원2동점",
        "date":  "2025-01-25",
        "location_small":  "망원동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/11280281",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "경성양꼬치 연남직영점",
        "date":  "2025-01-31",
        "location_small":  "동교동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27460896",
        "location_large":  "서울 마포구",
        "menu":  [
                     "양꼬치"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "노량진수산물도매식당",
        "date":  "2025-02-01",
        "location_small":  "노량진동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/8205369",
        "location_large":  "서울 동작구",
        "menu":  [
                     "회"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "스타벅스 서강대프라자점",
        "date":  "2025-02-04",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/892961860",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치",
                     "커피"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "산산바베큐 신촌본점",
        "date":  "2025-02-05",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1284065915",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "일미집 영등포점",
        "date":  "2025-02-08",
        "location_small":  "영등포동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/147462961",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "감자탕"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "명륜진사갈비 영등포역점",
        "date":  "2024-12-31",
        "location_small":  "영등포동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1995389455",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "돼지고기"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍽️뷔페",
        "name":  "다이닝원 발산점",
        "date":  "2025-01-01",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1544543391",
        "location_large":  "서울 강서구",
        "menu":  [
                     "뷔페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "네네치킨 대명비발디점",
        "date":  "2025-01-02",
        "location_small":  "서면 대곡리",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/24093740",
        "location_large":  "강원 홍천",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "맥도날드 중앙대점",
        "date":  "2025-01-02",
        "location_small":  "흑석동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/14091840",
        "location_large":  "서울 동작구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "이디야커피 홍천서면점",
        "date":  "2025-01-03",
        "location_small":  "서면 대곡리",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/381231413",
        "location_large":  "강원 홍천",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🥩고기",
        "name":  "홍천조박사화로구이",
        "date":  "2025-01-03",
        "location_small":  "서면 대곡리",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1925458047",
        "location_large":  "강원 홍천",
        "menu":  [
                     "삼겹살"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "무쇠김치삼겹연남",
        "date":  "2025-01-11",
        "location_small":  "연남동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/511084756",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼겹살"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "돈이찌 서울역점",
        "date":  "2025-01-13",
        "location_small":  "봉래동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1585718261",
        "location_large":  "서울 중구",
        "menu":  [
                     "덮밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍕피자",
        "name":  "오리지널시카고피자 홍대본점",
        "date":  "2025-01-14",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/24324645",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "두끼 홍대역점",
        "date":  "2025-01-14",
        "location_small":  "동교동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/27296903",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "고토히라우동",
        "date":  "2024-11-02",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/21129871",
        "location_large":  "서울 마포구",
        "menu":  [
                     "우동"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "내가찜한닭 신촌점",
        "date":  "2024-10-31",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27367019",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "찜닭"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "순이네바지락칼국수",
        "date":  "2024-10-30",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/20527389",
        "location_large":  "서울 마포구",
        "menu":  [
                     "칼국수"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "강남불백 3호점",
        "date":  "2024-10-28",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/724244479",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "불고기"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "스타벅스 서강대점",
        "date":  "2024-10-26",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/25115119",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "갈매기샌드 1호점",
        "date":  "2024-10-25",
        "location_small":  "초량동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/184124450",
        "location_large":  "부산 동구",
        "menu":  [
                     "샌드위치"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍕피자",
        "name":  "이재모피자 부산역점",
        "date":  "2024-10-25",
        "location_small":  "초량동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/663545767",
        "location_large":  "부산 동구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "채도",
        "date":  "2024-10-25",
        "location_small":  "남포동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/438825525",
        "location_large":  "부산 중구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "흑미 무한도전 씨앗호떡",
        "date":  "2024-10-25",
        "location_small":  "남포동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/103515412",
        "location_large":  "부산 중구",
        "menu":  [
                     "호떡"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "가마솥 깡통분식",
        "date":  "2024-10-25",
        "location_small":  "중동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/241371594",
        "location_large":  "부산 해운대구",
        "menu":  [
                     "떡볶이",
                     "어묵"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "맥도날드 달맞이DT점",
        "date":  "2024-10-24",
        "location_small":  "중동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/7862025",
        "location_large":  "부산 해운대구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "상국이네",
        "date":  "2024-10-24",
        "location_small":  "중동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/9089301",
        "location_large":  "부산 해운대구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "재희상회",
        "date":  "2024-10-24",
        "location_small":  "민락동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/618937131",
        "location_large":  "부산 수영구",
        "menu":  [

                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "자연도소금빵 해운대점",
        "date":  "2024-10-24",
        "location_small":  "중동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/810707734",
        "location_large":  "부산 해운대구",
        "menu":  [
                     "빵"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "타이드",
        "date":  "2024-10-24",
        "location_small":  "중동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1008941116",
        "location_large":  "부산 해운대구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "가야밀면",
        "date":  "2024-10-24",
        "location_small":  "우동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/156752169",
        "location_large":  "부산 해운대구",
        "menu":  [
                     "밀면"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "굽네치킨 서강점",
        "date":  "2024-10-22",
        "location_small":  "창전동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/17723918",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥗샐러드",
        "name":  "샐러디 마포구청점",
        "date":  "2024-10-21",
        "location_small":  "성산동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1341401934",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치",
                     "샐러드"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "두끼떡볶이 이대점",
        "date":  "2024-10-17",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/26949275",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "신촌야생마",
        "date":  "2024-10-16",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/678293473",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "닭꼬치",
                     "어묵"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🌮세계요리",
        "name":  "베어스타코 아현공덕점",
        "date":  "2024-10-11",
        "location_small":  "아현동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/981286710",
        "location_large":  "서울 마포구",
        "menu":  [
                     "퀘사디아",
                     "타코"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🥡아시안",
        "name":  "포옹남",
        "date":  "2024-10-11",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/931810511",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌀국수"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "리춘시장 신촌점",
        "date":  "2024-10-07",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/941746912",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "마라샹궈",
                     "마라탕"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍕피자, 🍺술집",
        "name":  "펍피맥 용산점",
        "date":  "2024-10-04",
        "location_small":  "한강로",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1392356786",
        "location_large":  "서울 용산구",
        "menu":  [
                     "맥주",
                     "피자"
                 ],
        "visit_count":  3,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "덮밥만드는남자 이대점",
        "date":  "2024-09-30",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/795522115",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "덮밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "본도시락 공덕역점",
        "date":  "2024-09-27",
        "location_small":  "신공덕동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/19012185",
        "location_large":  "서울 마포구",
        "menu":  [
                     "도시락"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "한식밥상",
        "date":  "2024-09-25",
        "location_small":  "서교동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1447900437",
        "location_large":  "서울 마포구",
        "menu":  [
                     "도시락"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "김실력포차 본점",
        "date":  "2024-09-21",
        "location_small":  "이태원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/920906713",
        "location_large":  "서울 용산구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "밥은먹었어",
        "date":  "2024-09-19",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/636198841",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "덮밥",
                     "찌개"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "풍년기사님식당",
        "date":  "2024-09-19",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/21410532",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김치찌개",
                     "불고기"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "성심당 본점",
        "date":  "2024-07-10",
        "location_small":  "은행동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/17733090",
        "location_large":  "대전 중구",
        "menu":  [
                     "빵"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "투다리 신수점",
        "date":  "2024-09-12",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1410747507",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "가마치통닭 서울신촌점",
        "date":  "2024-09-12",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1588458564",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "한솥도시락 홍대서교점",
        "date":  "2024-09-09",
        "location_small":  "서교동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1873252598",
        "location_large":  "서울 마포구",
        "menu":  [
                     "도시락"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "생마차 부천신중동점",
        "date":  "2024-09-07",
        "location_small":  "신중동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/504789189",
        "location_large":  "경기 부천",
        "menu":  [
                     "닭꼬치",
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "🍺술집",
        "name":  "고래주당",
        "date":  "2024-09-07",
        "location_small":  "중동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1097446371",
        "location_large":  "경기 부천",
        "menu":  [
                     "이자카야"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "돈맛탱 마포점",
        "date":  "2024-09-06",
        "location_small":  "도화동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/58899072",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼겹살"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥡아시안",
        "name":  "반미362 신촌점",
        "date":  "2024-09-03",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/134850295",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "반미"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "🍚한식",
        "name":  "구름계란덮밥 공덕점",
        "date":  "2024-09-02",
        "location_small":  "도화동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/137366305",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍜중식",
        "name":  "짬뽕공장 군산점",
        "date":  "2024-08-30",
        "location_small":  "수송동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1544446763",
        "location_large":  "전북 군산",
        "menu":  [
                     "짬뽕",
                     "탕수육"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "바르미샤브샤브칼국수",
        "date":  "2024-08-29",
        "location_small":  "수송동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/26611615",
        "location_large":  "전북 군산",
        "menu":  [
                     "샤브샤브"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "뽕나무한그루 멀베리케이터링",
        "date":  "2024-08-29",
        "location_small":  "월명동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/934006931",
        "location_large":  "전북 군산",
        "menu":  [
                     "도시락"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "🍺술집",
        "name":  "군산비어포트",
        "date":  "2024-08-28",
        "location_small":  "금암동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1005319024",
        "location_large":  "전북 군산",
        "menu":  [
                     "맥주",
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "아티제 신용산역점",
        "date":  "2024-08-24",
        "location_small":  "한강로",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1394878905",
        "location_large":  "서울 용산구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "안스베이커리 롯데김포공항점",
        "date":  "2024-08-24",
        "location_small":  "방화동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/20306338",
        "location_large":  "서울 강서구",
        "menu":  [
                     "빵"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "도제 롯데백화점김포공항점",
        "date":  "2024-08-24",
        "location_small":  "방화동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2143263514",
        "location_large":  "서울 강서구",
        "menu":  [
                     "유부초밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "홍대삭 상수본점",
        "date":  "2024-08-23",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/19909925",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥡아시안",
        "name":  "퐁타이",
        "date":  "2024-08-22",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/370730135",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌀국수",
                     "팟타이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "요거트월드 홍대직영점",
        "date":  "2024-08-19",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1022033941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "아이스크림",
                     "요거트"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "김영곤초밥",
        "date":  "2024-08-19",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/892664076",
        "location_large":  "서울 마포구",
        "menu":  [
                     "초밥"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🥡아시안",
        "name":  "타이반쩜",
        "date":  "2024-08-16",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1593321233",
        "location_large":  "서울 마포구",
        "menu":  [
                     "나시고랭",
                     "팟타이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "지호한방삼계탕 마포대흥역점",
        "date":  "2024-08-14",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27529929",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼계탕"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "푸라닭 신수점",
        "date":  "2024-08-12",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/249943691",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "망향비빔국수 강서점",
        "date":  "2024-08-11",
        "location_small":  "염창동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/9016062",
        "location_large":  "서울 강서구",
        "menu":  [
                     "국수"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🥩고기",
        "name":  "이동정원갈비",
        "date":  "2024-08-11",
        "location_small":  "이동면",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/9943776",
        "location_large":  "경기 포천",
        "menu":  [
                     "소갈비"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "쭈노치킨가게 충무로가게",
        "date":  "2024-08-10",
        "location_small":  "초동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/26794773",
        "location_large":  "서울 중구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "스시하랑",
        "date":  "2024-08-09",
        "location_small":  "구로동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/940903451",
        "location_large":  "서울 구로구",
        "menu":  [
                     "초밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "르프리크캐주얼 더현대서울",
        "date":  "2024-08-08",
        "location_small":  "여의도동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/139622537",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식, 🍺술집",
        "name":  "사이",
        "date":  "2024-08-07",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1430251798",
        "location_large":  "서울 강서구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍕피자, 🍺술집",
        "name":  "902 탭하우스 마곡나루점",
        "date":  "2024-08-07",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1816460262",
        "location_large":  "서울 강서구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍜중식, 🍝양식",
        "name":  "니뽕내뽕 용산아이파크몰점",
        "date":  "2024-08-05",
        "location_small":  "한강로",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/26404559",
        "location_large":  "서울 용산구",
        "menu":  [
                     "짬뽕",
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "한옥집김치찜 롯데몰김포공항점",
        "date":  "2024-08-04",
        "location_small":  "방화동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/152955640",
        "location_large":  "서울 강서구",
        "menu":  [
                     "김치찌개",
                     "김치찜"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨, 🍙분식",
        "name":  "더바스켓 대흥역점",
        "date":  "2024-07-29",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/661901379",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이",
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "춤추는왕만두 등촌점",
        "date":  "2024-07-21",
        "location_small":  "목동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1817978313",
        "location_large":  "서울 양천구",
        "menu":  [
                     "만두"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "바이주커피로스터스",
        "date":  "2024-07-21",
        "location_small":  "내발산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/692152161",
        "location_large":  "서울 강서구",
        "menu":  [
                     "빙수",
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "미족현",
        "date":  "2024-07-30",
        "location_small":  "이태원동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/147755006",
        "location_large":  "서울 용산구",
        "menu":  [
                     "족발"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍕피자",
        "name":  "모터시티 이태원점",
        "date":  "2024-07-30",
        "location_small":  "이태원동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/124338573",
        "location_large":  "서울 용산구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥗샐러드",
        "name":  "써브웨이 신촌점",
        "date":  "2024-08-03",
        "location_small":  "창천동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/19157220",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "샌드위치"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍝양식",
        "name":  "동네파스타",
        "date":  "2024-08-01",
        "location_small":  "도화동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1894870866",
        "location_large":  "서울 마포구",
        "menu":  [
                     "파스타",
                     "필라프"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "🍜중식",
        "name":  "국빈",
        "date":  "2024-08-01",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/9672649",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "투다리 동교점",
        "date":  "2024-07-17",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18168123",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "🍕피자",
        "name":  "레코드피자",
        "date":  "2024-07-17",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1458266151",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "소곤",
        "date":  "2024-07-14",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2028389229",
        "location_large":  "서울 강서구",
        "menu":  [
                     "소고기",
                     "평양냉면"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍺술집",
        "name":  "부엉이산장 신촌점",
        "date":  "2024-07-12",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1244901881",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "전",
                     "닭볶음탕"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "싱싱나라김밥",
        "date":  "2024-07-11",
        "location_small":  "용문동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/18754045",
        "location_large":  "서울 용산구",
        "menu":  [
                     "김밥"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "한입소반",
        "date":  "2024-07-11",
        "location_small":  "청파동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/23557234",
        "location_large":  "서울 용산구",
        "menu":  [
                     "김밥"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍽️뷔페",
        "name":  "호텔오노마대전오토그래프컬렉션",
        "date":  "2024-07-10",
        "location_small":  "도룡동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/31629985",
        "location_large":  "대전 유성구",
        "menu":  [
                     "뷔페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "솔솥 경의선숲길점",
        "date":  "2024-07-08",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1900763830",
        "location_large":  "서울 마포구",
        "menu":  [
                     "솥밥"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "🍚한식",
        "name":  "명품원조한방왕족발 용산본점",
        "date":  "2024-07-06",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/21344318",
        "location_large":  "서울 용산구",
        "menu":  [
                     "족발"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "부산집 2호점",
        "date":  "2024-07-05",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1095501911",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥡아시안",
        "name":  "포가레 신촌점",
        "date":  "2024-07-04",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/140618987",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "쌀국수"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍕피자",
        "name":  "피자헤븐 마포점",
        "date":  "2024-07-03",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/26334579",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "☕카페",
        "name":  "마호가니 타임스퀘어점",
        "date":  "2024-06-28",
        "location_small":  "영등포동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/872170410",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "커피"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "속초코다리냉면 타임스퀘어점",
        "date":  "2024-06-28",
        "location_small":  "영등포동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/787115726",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "냉면"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍕피자",
        "name":  "더랜치브루잉 을지로3가점",
        "date":  "2024-06-26",
        "location_small":  "을지로",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/168774091",
        "location_large":  "서울 중구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "덮담 홍대점",
        "date":  "2024-06-07",
        "location_small":  "서교동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1604851454?openhour=1",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "🥩고기",
        "name":  "서강곱창",
        "date":  "2024-06-25",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/23446406",
        "location_large":  "서울 마포구",
        "menu":  [
                     "곱창"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍽️뷔페",
        "name":  "애슐리퀸즈 공덕점",
        "date":  "2024-06-28",
        "location_small":  "공덕동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1811178955",
        "location_large":  "서울 마포구",
        "menu":  [
                     "뷔페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "폴트버거 하남점",
        "date":  "2024-06-15",
        "location_small":  "신장동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1455286647",
        "location_large":  "경기 하남",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "라온숨",
        "date":  "2024-06-14",
        "location_small":  "화도읍",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/850275015",
        "location_large":  "경기 남양주",
        "menu":  [
                     "커피"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "피크니크 홍대 경의선숲길점",
        "date":  "2024-06-22",
        "location_small":  "창전동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1637508578",
        "location_large":  "서울 마포구",
        "menu":  [
                     "수플레"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "서령",
        "date":  "2024-06-22",
        "location_small":  "남대문로",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1644608542",
        "location_large":  "서울 중구",
        "menu":  [
                     "평양냉면"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "구도로통닭 신촌점",
        "date":  "2024-06-18",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1845470766",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "🍝양식",
        "name":  "정각",
        "date":  "2024-06-20",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/313504476",
        "location_large":  "서울 마포구",
        "menu":  [
                     "스테이크",
                     "파스타"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "민트콘디션 커피 바",
        "date":  "2024-06-04",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1705841050",
        "location_large":  "서울 마포구",
        "menu":  [
                     "바스크치즈케이크",
                     "커피"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "육연타",
        "date":  "2024-06-04",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1760097689",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스",
                     "메밀소바"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍺술집",
        "name":  "한주당",
        "date":  "2024-05-30",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1557171985",
        "location_large":  "서울 마포구",
        "menu":  [
                     "막걸리"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "🍣일식",
        "name":  "만평우동 대흥역점",
        "date":  "2024-05-30",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1305312189",
        "location_large":  "서울 마포구",
        "menu":  [
                     "우동"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "카페드리옹 코엑스점",
        "date":  "2024-05-24",
        "location_small":  "삼성동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1092315691",
        "location_large":  "서울 강남구",
        "menu":  [
                     "디저트",
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "클로리스티룸 코엑스몰점",
        "date":  "2024-05-23",
        "location_small":  "삼성동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/26897290",
        "location_large":  "서울 강남구",
        "menu":  [
                     "밀크티",
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "🌮세계요리",
        "name":  "바토스 파르나스몰점",
        "date":  "2024-05-24",
        "location_small":  "삼성동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1635696078",
        "location_large":  "서울 강남구",
        "menu":  [
                     "브리또",
                     "타코"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "능라도 강남점",
        "date":  "2024-05-23",
        "location_small":  "삼성동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27261403",
        "location_large":  "서울 강남구",
        "menu":  [
                     "냉면",
                     "평양냉면"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "광화문석갈비 코엑스점",
        "date":  "2024-05-23",
        "location_small":  "삼성동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/885622105",
        "location_large":  "서울 강남구",
        "menu":  [
                     "석갈비"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "삼청동샤브에프소드 신촌점",
        "date":  "2024-05-21",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/428917606",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샤브샤브"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "BBQ 마포용강점",
        "date":  "2024-05-22",
        "location_small":  "용강동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/21236122",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "막창굽는연탄할매 직영마포점",
        "date":  "2024-05-20",
        "location_small":  "도화동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/773500485",
        "location_large":  "서울 마포구",
        "menu":  [
                     "곱창",
                     "막창"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "🍚한식",
        "name":  "치즈밥있슈 서강대점",
        "date":  "2024-05-20",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/21232401",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치즈밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "가마치통닭 서강대점",
        "date":  "2024-05-14",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1874156592",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "나노갈매기",
        "date":  "2024-05-18",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/13129099",
        "location_large":  "서울 용산구",
        "menu":  [
                     "갈매기살"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍺술집",
        "name":  "대림호프포차",
        "date":  "2024-05-11",
        "location_small":  "을지로",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1851200859",
        "location_large":  "서울 중구",
        "menu":  [
                     "찌개"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "통큰갈비 마포공덕점",
        "date":  "2024-05-17",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/971261193",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돼지고기"
                 ],
        "visit_count":  2,
        "closed":  false
    },
    {
        "category":  "🍕피자",
        "name":  "파파존스 마포점",
        "date":  "2024-05-13",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/26167390",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "찌니네마약통닭 염리 2호점",
        "date":  "2024-05-09",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/827520709",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "해피치즈스마일 연남점",
        "date":  "2024-03-02",
        "location_small":  "연남동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/661872026",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "효자동 닭꼬치",
        "date":  "2024-03-10",
        "location_small":  "통인동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/485793560",
        "location_large":  "서울 종로구",
        "menu":  [
                     "닭꼬치"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식, 🍜중식",
        "name":  "이양권반상",
        "date":  "2024-03-08",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1978020868",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍗치킨",
        "name":  "잉치킨",
        "date":  "",
        "location_small":  "영등포동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1158337242",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "정통집",
        "date":  "2024-04-09",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/398715963",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "돼지김치구이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🌮세계요리",
        "name":  "할리스코 마곡점",
        "date":  "2024-05-05",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1615433470",
        "location_large":  "서울 강서구",
        "menu":  [
                     "퀘사디아",
                     "타코"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "하이바 마곡점",
        "date":  "2024-05-04",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2104864628",
        "location_large":  "서울 강서구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "🍺술집",
        "name":  "단토리",
        "date":  "2024-05-04",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1585759764",
        "location_large":  "서울 강서구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  true
    },
    {
        "category":  "🍚한식",
        "name":  "재모식당",
        "date":  "2024-05-03",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/622222463",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스",
                     "제육볶음"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "펍휘트니",
        "date":  "2024-05-03",
        "location_small":  "잠실동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/197316893",
        "location_large":  "서울 송파구",
        "menu":  [
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍕피자",
        "name":  "미드티운피자",
        "date":  "2024-05-01",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1620087875",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍣일식",
        "name":  "멘야요시",
        "date":  "2024-04-30",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/2013584419",
        "location_large":  "서울 마포구",
        "menu":  [
                     "라멘",
                     "야끼소바"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "☕카페",
        "name":  "브루잉세레모니",
        "date":  "2024-04-10",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/804984272",
        "location_large":  "서울 성동구",
        "menu":  [
                     "커피"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "원조광명할머니빈대떡",
        "date":  "2024-04-07",
        "location_small":  "광명동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18598029",
        "location_large":  "경기 광명",
        "menu":  [
                     "빈대떡"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "오목집 신도림점",
        "date":  "2024-03-29",
        "location_small":  "신도림동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1774627288",
        "location_large":  "서울 구로구",
        "menu":  [
                     "족발"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "르프리크",
        "date":  "2024-03-29",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/936069123",
        "location_large":  "서울 성동구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "다운타우너 광교갤러리아",
        "date":  "2024-04-24",
        "location_small":  "하동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1624407362",
        "location_large":  "경기 수원",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍺술집",
        "name":  "페스티발",
        "date":  "2024-04-10",
        "location_small":  "성수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1331993429",
        "location_large":  "서울 성동구",
        "menu":  [
                     "맥주",
                     "술집"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥩고기",
        "name":  "송계옥",
        "date":  "2024-04-10",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/127242418",
        "location_large":  "서울 성동구",
        "menu":  [
                     "닭구이",
                     "닭고기"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍚한식",
        "name":  "뜸들이다 신촌직영점",
        "date":  "",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/641152180",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🍙분식",
        "name":  "신촌맛집 떡볶이돈까스",
        "date":  "2024-04-23",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1710216831",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  1,
        "closed":  false
    },
    {
        "category":  "🥗샐러드",
        "name":  "프레퍼스 다이어트 푸드",
        "date":  "2024-04-22",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/929376837",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "샐러드"
                 ],
        "visit_count":  1,
        "closed":  false
    }
];
const diaryData = [
    {
        "date":  "2025-04-17",
        "name":  "톨",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-18",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-12",
        "name":  "양지분식",
        "category":  "🍙분식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/21410030",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-04-22",
        "name":  "두끼떡볶이 이대점",
        "category":  "🍙분식",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/26949275",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-13",
        "name":  "마포쌈밥식당",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1919542306",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌈밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-02",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-22",
        "name":  "프레퍼스 다이어트 푸드",
        "category":  "🥗샐러드",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/929376837",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "샐러드"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-05",
        "name":  "미가",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16443006",
        "location_large":  "서울 마포구",
        "menu":  [
                     "제육볶음",
                     "파전"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-08",
        "name":  "홍원",
        "category":  "🍜중식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/13083730",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-04",
        "name":  "김영곤초밥",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/892664076",
        "location_large":  "서울 마포구",
        "menu":  [
                     "초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-23",
        "name":  "신촌맛집 떡볶이돈까스",
        "category":  "🍙분식",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1710216831",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-03",
        "name":  "남매밥상",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/929653827",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고등어구이",
                     "제육볶음",
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-10",
        "name":  "송계옥",
        "category":  "🥩고기",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/127242418",
        "location_large":  "서울 성동구",
        "menu":  [
                     "닭구이",
                     "닭고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-10",
        "name":  "페스티발",
        "category":  "🍺술집",
        "location_small":  "성수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1331993429",
        "location_large":  "서울 성동구",
        "menu":  [
                     "맥주",
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-24",
        "name":  "다운타우너 광교갤러리아",
        "category":  "🍔패스트푸드",
        "location_small":  "하동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1624407362",
        "location_large":  "경기 수원",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-25",
        "name":  "미즈컨테이너 광교갤러리아",
        "category":  "🍝양식",
        "location_small":  "하동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1832557951",
        "location_large":  "경기 수원",
        "menu":  [
                     "파스타",
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-26",
        "name":  "아웃백 광교갤러리아",
        "category":  "🍝양식",
        "location_small":  "하동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1681181343",
        "location_large":  "경기 수원",
        "menu":  [
                     "스테이크",
                     "파스타"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-03-29",
        "name":  "르프리크",
        "category":  "🍔패스트푸드",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/936069123",
        "location_large":  "서울 성동구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-03-29",
        "name":  "오목집 신도림점",
        "category":  "🍚한식",
        "location_small":  "신도림동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1774627288",
        "location_large":  "서울 구로구",
        "menu":  [
                     "족발"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-07",
        "name":  "원조광명할머니빈대떡",
        "category":  "🍚한식",
        "location_small":  "광명동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18598029",
        "location_large":  "경기 광명",
        "menu":  [
                     "빈대떡"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-10",
        "name":  "방화동 교동짬뽕",
        "category":  "🍜중식",
        "location_small":  "방화동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/25858128",
        "location_large":  "서울 강서구",
        "menu":  [
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-10",
        "name":  "브루잉세레모니",
        "category":  "☕카페",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/804984272",
        "location_large":  "서울 성동구",
        "menu":  [
                     "커피"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-14",
        "name":  "감탄계숯불치킨 강남점",
        "category":  "🍗치킨",
        "location_small":  "역삼동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/413386069",
        "location_large":  "서울 강남구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-29",
        "name":  "개성손만두 마포점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-29",
        "name":  "바른치킨 서강대 로봇점",
        "category":  "🍗치킨",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1446748474",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-30",
        "name":  "멘야요시",
        "category":  "🍣일식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/2013584419",
        "location_large":  "서울 마포구",
        "menu":  [
                     "라멘",
                     "야끼소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-01",
        "name":  "킹콩부대찌개 마포대흥오남매행복점",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1744462722",
        "location_large":  "서울 마포구",
        "menu":  [
                     "부대찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-01",
        "name":  "미드티운피자",
        "category":  "🍕피자",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1620087875",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-02",
        "name":  "통큰갈비 마포공덕점",
        "category":  "🥩고기",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/971261193",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돼지고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-03",
        "name":  "펍휘트니",
        "category":  "🍺술집",
        "location_small":  "잠실동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/197316893",
        "location_large":  "서울 송파구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-03",
        "name":  "재모식당",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/622222463",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스",
                     "제육볶음"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-04",
        "name":  "오지오커피",
        "category":  "☕카페",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1631067502",
        "location_large":  "서울 강서구",
        "menu":  [
                     "커피",
                     "크루키"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-04",
        "name":  "단토리",
        "category":  "🍺술집",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1585759764",
        "location_large":  "서울 강서구",
        "menu":  [
                     "술집"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-05-04",
        "name":  "하이바 마곡점",
        "category":  "🍺술집",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2104864628",
        "location_large":  "서울 강서구",
        "menu":  [
                     "술집"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-05-05",
        "name":  "할리스코 마곡점",
        "category":  "🌮세계요리",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1615433470",
        "location_large":  "서울 강서구",
        "menu":  [
                     "퀘사디아",
                     "타코"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-04-09",
        "name":  "정통집",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/398715963",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "돼지김치구이"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-03-08",
        "name":  "이양권반상",
        "category":  "🍚한식, 🍜중식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1978020868",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-03-10",
        "name":  "효자동 닭꼬치",
        "category":  "🍙분식",
        "location_small":  "통인동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/485793560",
        "location_large":  "서울 종로구",
        "menu":  [
                     "닭꼬치"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-03-02",
        "name":  "해피치즈스마일 연남점",
        "category":  "🍙분식",
        "location_small":  "연남동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/661872026",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-14",
        "name":  "정든그릇",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1069804608",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "돈까스",
                     "메밀소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-08",
        "name":  "미가",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16443006",
        "location_large":  "서울 마포구",
        "menu":  [
                     "제육볶음",
                     "파전"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-08",
        "name":  "태광식당",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27233428",
        "location_large":  "서울 마포구",
        "menu":  [
                     "백반"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-09",
        "name":  "찌니네마약통닭 염리 2호점",
        "category":  "🍗치킨",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/827520709",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-10",
        "name":  "한입소반",
        "category":  "🍚한식",
        "location_small":  "청파동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/23557234",
        "location_large":  "서울 용산구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-10",
        "name":  "싱싱나라김밥",
        "category":  "🍚한식",
        "location_small":  "용문동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/18754045",
        "location_large":  "서울 용산구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-10",
        "name":  "효자오리바베큐",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/527000679",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오리"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-11",
        "name":  "만평우동 대흥역점",
        "category":  "🍣일식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1305312189",
        "location_large":  "서울 마포구",
        "menu":  [
                     "우동"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-13",
        "name":  "태광식당",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27233428",
        "location_large":  "서울 마포구",
        "menu":  [
                     "백반"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-13",
        "name":  "파파존스 마포점",
        "category":  "🍕피자",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/26167390",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-16",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-16",
        "name":  "명량핫도그 대흥역점",
        "category":  "🍙분식",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1961550147",
        "location_large":  "서울 마포구",
        "menu":  [
                     "핫도그"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-15",
        "name":  "수저가",
        "category":  "🍜중식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/651155763",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-17",
        "name":  "통큰갈비 마포공덕점",
        "category":  "🥩고기",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/971261193",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돼지고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-11",
        "name":  "대림호프포차",
        "category":  "🍚한식, 🍺술집",
        "location_small":  "을지로",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1851200859",
        "location_large":  "서울 중구",
        "menu":  [
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-11",
        "name":  "7.8 을지로",
        "category":  "🍺술집",
        "location_small":  "주교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1425843424",
        "location_large":  "서울 중구",
        "menu":  [
                     "막걸리"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-18",
        "name":  "나노갈매기",
        "category":  "🥩고기",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/13129099",
        "location_large":  "서울 용산구",
        "menu":  [
                     "갈매기살"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-18",
        "name":  "펍피맥 용산점",
        "category":  "🍕피자, 🍺술집",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1392356786",
        "location_large":  "서울 용산구",
        "menu":  [
                     "맥주",
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-14",
        "name":  "수저가",
        "category":  "🍜중식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/542808268",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-14",
        "name":  "가마치통닭 서강대점",
        "category":  "🍗치킨",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1874156592",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-20",
        "name":  "치즈밥있슈 서강대점",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/21232401",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치즈밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-20",
        "name":  "막창굽는연탄할매 직영마포점",
        "category":  "🥩고기",
        "location_small":  "도화동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/773500485",
        "location_large":  "서울 마포구",
        "menu":  [
                     "곱창",
                     "막창"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-05-22",
        "name":  "프랭크버거 서강대점",
        "category":  "🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/834184731",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-22",
        "name":  "BBQ 마포용강점",
        "category":  "🍗치킨",
        "location_small":  "용강동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/21236122",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-21",
        "name":  "삼청동샤브에프소드 신촌점",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/428917606",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샤브샤브"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-23",
        "name":  "광화문석갈비 코엑스점",
        "category":  "🍚한식",
        "location_small":  "삼성동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/885622105",
        "location_large":  "서울 강남구",
        "menu":  [
                     "석갈비"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-23",
        "name":  "능라도 강남점",
        "category":  "🍚한식",
        "location_small":  "삼성동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27261403",
        "location_large":  "서울 강남구",
        "menu":  [
                     "냉면",
                     "평양냉면"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-24",
        "name":  "바토스 파르나스몰점",
        "category":  "🌮세계요리",
        "location_small":  "삼성동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1635696078",
        "location_large":  "서울 강남구",
        "menu":  [
                     "브리또",
                     "타코"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-23",
        "name":  "클로리스티룸 코엑스몰점",
        "category":  "☕카페",
        "location_small":  "삼성동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/26897290",
        "location_large":  "서울 강남구",
        "menu":  [
                     "밀크티",
                     "카페"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-05-24",
        "name":  "카페드리옹 코엑스점",
        "category":  "☕카페",
        "location_small":  "삼성동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1092315691",
        "location_large":  "서울 강남구",
        "menu":  [
                     "디저트",
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-24",
        "name":  "아비꼬 신촌점",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/17735995",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "카레"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-25",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-27",
        "name":  "포케올데이 공덕점",
        "category":  "🥗샐러드",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1297162293",
        "location_large":  "서울 마포구",
        "menu":  [
                     "포케"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-28",
        "name":  "교촌치킨 신수점",
        "category":  "🍗치킨",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/19392082",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-28",
        "name":  "동대문엽기떡볶이 마포공덕점",
        "category":  "🍙분식",
        "location_small":  "염리동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/18657538",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-29",
        "name":  "그릭데이 이대본점",
        "category":  "☕카페",
        "location_small":  "대현동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/577825774",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "요거트"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-30",
        "name":  "만평우동 대흥역점",
        "category":  "🍣일식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1305312189",
        "location_large":  "서울 마포구",
        "menu":  [
                     "우동"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-30",
        "name":  "한주당",
        "category":  "🍚한식, 🍺술집",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1557171985",
        "location_large":  "서울 마포구",
        "menu":  [
                     "막걸리"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-05-31",
        "name":  "쉑쉑버거 홍대점",
        "category":  "🍔패스트푸드",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/136268965",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-31",
        "name":  "마포닭곰탕 본점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/17361050",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭곰탕",
                     "부대찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-27",
        "name":  "마니마니톡톡",
        "category":  "🍗치킨, 🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1060711910",
        "location_large":  "서울 마포구",
        "menu":  [
                     "백반",
                     "치킨"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-05-28",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-26",
        "name":  "마니마니톡톡",
        "category":  "🍗치킨, 🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1060711910",
        "location_large":  "서울 마포구",
        "menu":  [
                     "백반",
                     "치킨"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-04-11",
        "name":  "마포쌈밥식당",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1919542306",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌈밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-07",
        "name":  "정든그릇",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1069804608",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "돈까스",
                     "메밀소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-13",
        "name":  "효자오리바베큐",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/527000679",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오리"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-10",
        "name":  "미가",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16443006",
        "location_large":  "서울 마포구",
        "menu":  [
                     "제육볶음",
                     "파전"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-12",
        "name":  "버그네차돌불고기",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/18539594",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김치찌개",
                     "불고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-12",
        "name":  "두찜 마포신수점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1021203220",
        "location_large":  "서울 마포구",
        "menu":  [
                     "찜닭"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-06-04",
        "name":  "육연타",
        "category":  "🍣일식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1760097689",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스",
                     "메밀소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-04",
        "name":  "민트콘디션 커피 바",
        "category":  "☕카페",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1705841050",
        "location_large":  "서울 마포구",
        "menu":  [
                     "바스크치즈케이크",
                     "커피"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-21",
        "name":  "홍원",
        "category":  "🍜중식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/13083730",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-20",
        "name":  "피자몰 신촌점",
        "category":  "🍕피자",
        "location_small":  "노고산동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/27048302",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-20",
        "name":  "정각",
        "category":  "🍝양식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/313504476",
        "location_large":  "서울 마포구",
        "menu":  [
                     "스테이크",
                     "파스타"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-19",
        "name":  "거북이의 주방",
        "category":  "🍣일식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1401663204",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카레"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-18",
        "name":  "을밀대",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/25048467",
        "location_large":  "서울 마포구",
        "menu":  [
                     "평양냉면"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-17",
        "name":  "프랭크버거 서강대점",
        "category":  "🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/834184731",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-18",
        "name":  "구도로통닭 신촌점",
        "category":  "🍗치킨",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1845470766",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-06-22",
        "name":  "서령",
        "category":  "🍚한식",
        "location_small":  "남대문로",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1644608542",
        "location_large":  "서울 중구",
        "menu":  [
                     "평양냉면"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-22",
        "name":  "피크니크 홍대 경의선숲길점",
        "category":  "☕카페",
        "location_small":  "창전동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1637508578",
        "location_large":  "서울 마포구",
        "menu":  [
                     "수플레"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-14",
        "name":  "라온숨",
        "category":  "☕카페",
        "location_small":  "화도읍",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/850275015",
        "location_large":  "경기 남양주",
        "menu":  [
                     "커피"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-14",
        "name":  "수제칼집생고기",
        "category":  "🥩고기",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/13597096",
        "location_large":  "경기 남양주",
        "menu":  [
                     "삼겹살"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-15",
        "name":  "폴트버거 하남점",
        "category":  "🍔패스트푸드",
        "location_small":  "신장동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1455286647",
        "location_large":  "경기 하남",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-03",
        "name":  "마니마니톡톡",
        "category":  "🍗치킨, 🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1060711910",
        "location_large":  "서울 마포구",
        "menu":  [
                     "백반",
                     "치킨"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-06-24",
        "name":  "쿠츠",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/14544642",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-11",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-28",
        "name":  "애슐리퀸즈 공덕점",
        "category":  "🍽️뷔페",
        "location_small":  "공덕동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1811178955",
        "location_large":  "서울 마포구",
        "menu":  [
                     "뷔페"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-25",
        "name":  "서강곱창",
        "category":  "🥩고기",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/23446406",
        "location_large":  "서울 마포구",
        "menu":  [
                     "곱창"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-24",
        "name":  "웰빙봉평메일마을",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/662370482",
        "location_large":  "서울 마포구",
        "menu":  [
                     "막국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-07",
        "name":  "덮담 홍대점",
        "category":  "🍚한식",
        "location_small":  "서교동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1604851454?openhour=1",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-06-07",
        "name":  "웰빙봉평메일마을",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/662370482",
        "location_large":  "서울 마포구",
        "menu":  [
                     "막국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-05",
        "name":  "핵밥 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1475631715",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-05",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-17",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-26",
        "name":  "더랜치브루잉 을지로3가점",
        "category":  "🍕피자",
        "location_small":  "을지로",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/168774091",
        "location_large":  "서울 중구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-26",
        "name":  "쭈노치킨가게 충무로가게",
        "category":  "🍗치킨",
        "location_small":  "초동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/26794773",
        "location_large":  "서울 중구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-26",
        "name":  "해운대 달맞이 빵",
        "category":  "☕카페",
        "location_small":  "저동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/768172634",
        "location_large":  "서울 중구",
        "menu":  [
                     "빵",
                     "커피"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-27",
        "name":  "홍콩반점0410 대흥역점",
        "category":  "🍜중식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/336646124",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-28",
        "name":  "속초코다리냉면 타임스퀘어점",
        "category":  "🍚한식",
        "location_small":  "영등포동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/787115726",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "냉면"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-06-28",
        "name":  "마호가니 타임스퀘어점",
        "category":  "☕카페",
        "location_small":  "영등포동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/872170410",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "커피"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-01",
        "name":  "홍원",
        "category":  "🍜중식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/13083730",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-01",
        "name":  "더파이홀",
        "category":  "☕카페",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1011256721",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-02",
        "name":  "투다리 신수점",
        "category":  "🍺술집",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1410747507",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-02",
        "name":  "바른치킨 서강대 로봇점",
        "category":  "🍗치킨",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1446748474",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-03",
        "name":  "피자헤븐 마포점",
        "category":  "🍕피자",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/26334579",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-04-16",
        "name":  "수저가",
        "category":  "🍜중식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/542808268",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-03",
        "name":  "수저가",
        "category":  "🍜중식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/651155763",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-04",
        "name":  "포가레 신촌점",
        "category":  "🥡아시안",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/140618987",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "쌀국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-04",
        "name":  "스아게K",
        "category":  "🍣일식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/138967530",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카레"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-05",
        "name":  "부산집 2호점",
        "category":  "🍺술집",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1095501911",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-05",
        "name":  "태광식당",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27233428",
        "location_large":  "서울 마포구",
        "menu":  [
                     "백반"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-05",
        "name":  "핵밥 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1475631715",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-06",
        "name":  "명품원조한방왕족발 용산본점",
        "category":  "🍚한식",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/21344318",
        "location_large":  "서울 용산구",
        "menu":  [
                     "족발"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-06",
        "name":  "펍피맥 용산점",
        "category":  "🍕피자, 🍺술집",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1392356786",
        "location_large":  "서울 용산구",
        "menu":  [
                     "맥주",
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-07",
        "name":  "망향비빔국수 강서점",
        "category":  "🍚한식",
        "location_small":  "염창동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/9016062",
        "location_large":  "서울 강서구",
        "menu":  [
                     "국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-08",
        "name":  "솔솥 경의선숲길점",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1900763830",
        "location_large":  "서울 마포구",
        "menu":  [
                     "솥밥"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-07-23",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-09",
        "name":  "파이브가이즈 서울역점",
        "category":  "🍔패스트푸드",
        "location_small":  "봉래동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/614833390",
        "location_large":  "서울 중구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-09",
        "name":  "뺑스톡 공덕점",
        "category":  "☕카페",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/822254572",
        "location_large":  "서울 마포구",
        "menu":  [
                     "빵"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-10",
        "name":  "호텔오노마대전오토그래프컬렉션",
        "category":  "🍽️뷔페",
        "location_small":  "도룡동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/31629985",
        "location_large":  "대전 유성구",
        "menu":  [
                     "뷔페"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-11",
        "name":  "한입소반",
        "category":  "🍚한식",
        "location_small":  "청파동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/23557234",
        "location_large":  "서울 용산구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-11",
        "name":  "싱싱나라김밥",
        "category":  "🍚한식",
        "location_small":  "용문동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/18754045",
        "location_large":  "서울 용산구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-12",
        "name":  "개성손만두 마포점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-12",
        "name":  "아웃닭 신촌역점",
        "category":  "🍗치킨",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27341509",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-12",
        "name":  "부엉이산장 신촌점",
        "category":  "🍚한식, 🍺술집",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1244901881",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "전",
                     "닭볶음탕"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-13",
        "name":  "쌍굴옻닭",
        "category":  "🍚한식",
        "location_small":  "덕은동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/10068499",
        "location_large":  "경기 고양",
        "menu":  [
                     "삼계탕",
                     "옻닭"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-14",
        "name":  "소곤",
        "category":  "🍚한식",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2028389229",
        "location_large":  "서울 강서구",
        "menu":  [
                     "소고기",
                     "평양냉면"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-15",
        "name":  "장수보감",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/14832719",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼계탕"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-15",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-16",
        "name":  "우리닭곰탕",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1089320134",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭곰탕",
                     "초계국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-16",
        "name":  "덮덮밥 서울공덕점",
        "category":  "🍚한식",
        "location_small":  "도화동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/900914553",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-17",
        "name":  "카라멘야",
        "category":  "🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1025832828",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "라멘"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-17",
        "name":  "설빙 신촌점",
        "category":  "☕카페",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/24879347",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "빙수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-17",
        "name":  "레코드피자",
        "category":  "🍕피자",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1458266151",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-17",
        "name":  "투다리 동교점",
        "category":  "🍺술집",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18168123",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-07-17",
        "name":  "오늘도빙수앤커피",
        "category":  "☕카페",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/301037533",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "빙수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-18",
        "name":  "밥은먹었어",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/636198841",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "덮밥",
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-19",
        "name":  "몽주방",
        "category":  "🍺술집",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/581963667",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-19",
        "name":  "톨",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-19",
        "name":  "오늘도빙수앤커피",
        "category":  "☕카페",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/301037533",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "빙수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-26",
        "name":  "거북이의 주방",
        "category":  "🍣일식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1401663204",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카레"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-25",
        "name":  "효자오리바베큐",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/527000679",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오리"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-26",
        "name":  "포케올데이 공덕점",
        "category":  "🥗샐러드",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1297162293",
        "location_large":  "서울 마포구",
        "menu":  [
                     "포케"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-25",
        "name":  "키친봄날",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1573253740",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-24",
        "name":  "마포쌈밥식당",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1919542306",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌈밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-08",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-23",
        "name":  "프랭크버거 서강대점",
        "category":  "🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/834184731",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-22",
        "name":  "밀플랜비 서강대점",
        "category":  "🌮세계요리, 🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/960971083",
        "location_large":  "서울 마포구",
        "menu":  [
                     "브리또"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-22",
        "name":  "두찜 마포신수점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1021203220",
        "location_large":  "서울 마포구",
        "menu":  [
                     "찜닭"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-07-29",
        "name":  "찐쭈",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1808390476",
        "location_large":  "서울 마포구",
        "menu":  [
                     "불고기",
                     "쭈꾸미불고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-30",
        "name":  "웰빙봉평메일마을",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/662370482",
        "location_large":  "서울 마포구",
        "menu":  [
                     "막국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-31",
        "name":  "끼로끼로부엉이",
        "category":  "🥩고기",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27383419",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돼지고기",
                     "소고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-31",
        "name":  "샐러디 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/205546197",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샐러드"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-01",
        "name":  "국빈",
        "category":  "🍜중식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/9672649",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-01",
        "name":  "동네파스타",
        "category":  "🍝양식",
        "location_small":  "도화동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1894870866",
        "location_large":  "서울 마포구",
        "menu":  [
                     "파스타",
                     "필라프"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-08-02",
        "name":  "교촌치킨 신촌점",
        "category":  "🍗치킨",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/26602826",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-02",
        "name":  "톨",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-02",
        "name":  "동대문엽기떡볶이 신촌점",
        "category":  "🍙분식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/17764441",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-03",
        "name":  "써브웨이 신촌점",
        "category":  "🥗샐러드",
        "location_small":  "창천동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/19157220",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-30",
        "name":  "모터시티 이태원점",
        "category":  "🍕피자",
        "location_small":  "이태원동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/124338573",
        "location_large":  "서울 용산구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-30",
        "name":  "쉼",
        "category":  "☕카페",
        "location_small":  "이태원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/147755006",
        "location_large":  "서울 용산구",
        "menu":  [
                     "와플"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-28",
        "name":  "미족현",
        "category":  "🍚한식",
        "location_small":  "이태원동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/147755006",
        "location_large":  "서울 용산구",
        "menu":  [
                     "족발"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-28",
        "name":  "문지리535",
        "category":  "☕카페",
        "location_small":  "탄현면",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1455161506",
        "location_large":  "경기 파주",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-21",
        "name":  "바이주커피로스터스",
        "category":  "☕카페",
        "location_small":  "내발산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/692152161",
        "location_large":  "서울 강서구",
        "menu":  [
                     "빙수",
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-21",
        "name":  "춤추는왕만두 등촌점",
        "category":  "🍙분식",
        "location_small":  "목동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1817978313",
        "location_large":  "서울 양천구",
        "menu":  [
                     "만두"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-29",
        "name":  "더바스켓 대흥역점",
        "category":  "🍗치킨, 🍙분식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/661901379",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이",
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-04",
        "name":  "한옥집김치찜 롯데몰김포공항점",
        "category":  "🍚한식",
        "location_small":  "방화동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/152955640",
        "location_large":  "서울 강서구",
        "menu":  [
                     "김치찌개",
                     "김치찜"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-05",
        "name":  "니뽕내뽕 용산아이파크몰점",
        "category":  "🍜중식, 🍝양식",
        "location_small":  "한강로",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/26404559",
        "location_large":  "서울 용산구",
        "menu":  [
                     "짬뽕",
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-06",
        "name":  "소곤면옥",
        "category":  "🍚한식",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1685201182",
        "location_large":  "서울 강서구",
        "menu":  [
                     "불고기",
                     "평양냉면"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-07",
        "name":  "902 탭하우스 마곡나루점",
        "category":  "🍕피자, 🍺술집",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1816460262",
        "location_large":  "서울 강서구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-07",
        "name":  "사이",
        "category":  "🍣일식, 🍺술집",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1430251798",
        "location_large":  "서울 강서구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-08",
        "name":  "르프리크캐주얼 더현대서울",
        "category":  "🍔패스트푸드",
        "location_small":  "여의도동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/139622537",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-09",
        "name":  "스시하랑",
        "category":  "🍣일식",
        "location_small":  "구로동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/940903451",
        "location_large":  "서울 구로구",
        "menu":  [
                     "초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-09",
        "name":  "포케올데이 공덕점",
        "category":  "🥗샐러드",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1297162293",
        "location_large":  "서울 마포구",
        "menu":  [
                     "포케"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-10",
        "name":  "쭈노치킨가게 충무로가게",
        "category":  "🍗치킨",
        "location_small":  "초동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/26794773",
        "location_large":  "서울 중구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-10",
        "name":  "해운대 달맞이 빵",
        "category":  "☕카페",
        "location_small":  "저동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/768172634",
        "location_large":  "서울 중구",
        "menu":  [
                     "빵",
                     "커피"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-11",
        "name":  "이동정원갈비",
        "category":  "🍚한식, 🥩고기",
        "location_small":  "이동면",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/9943776",
        "location_large":  "경기 포천",
        "menu":  [
                     "소갈비"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-11",
        "name":  "망향비빔국수 강서점",
        "category":  "🍚한식",
        "location_small":  "염창동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/9016062",
        "location_large":  "서울 강서구",
        "menu":  [
                     "국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-12",
        "name":  "정든그릇",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1069804608",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "돈까스",
                     "메밀소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-12",
        "name":  "푸라닭 신수점",
        "category":  "🍗치킨",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/249943691",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-13",
        "name":  "아웃백스테이크하우스 신촌점",
        "category":  "🍝양식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/7991188",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "스테이크",
                     "파스타"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-14",
        "name":  "수저가",
        "category":  "🍜중식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/651155763",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-14",
        "name":  "지호한방삼계탕 마포대흥역점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27529929",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼계탕"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-15",
        "name":  "돈까스브로스 마포공덕점",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1764886627",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-16",
        "name":  "샨샨",
        "category":  "🍜중식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1231701730",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-16",
        "name":  "타이반쩜",
        "category":  "🥡아시안",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1593321233",
        "location_large":  "서울 마포구",
        "menu":  [
                     "나시고랭",
                     "팟타이"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-19",
        "name":  "김영곤초밥",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/892664076",
        "location_large":  "서울 마포구",
        "menu":  [
                     "초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-20",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-20",
        "name":  "포케올데이 공덕점",
        "category":  "🥗샐러드",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1297162293",
        "location_large":  "서울 마포구",
        "menu":  [
                     "포케"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-19",
        "name":  "요거트월드 홍대직영점",
        "category":  "☕카페",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1022033941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "아이스크림",
                     "요거트"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-21",
        "name":  "미가",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16443006",
        "location_large":  "서울 마포구",
        "menu":  [
                     "제육볶음",
                     "파전"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-21",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-22",
        "name":  "퐁타이",
        "category":  "🥡아시안",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/370730135",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌀국수",
                     "팟타이"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-22",
        "name":  "KFC 신촌역점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/692703127",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-23",
        "name":  "남매밥상",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/929653827",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고등어구이",
                     "제육볶음",
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-23",
        "name":  "홍대삭 상수본점",
        "category":  "🍙분식",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/19909925",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-24",
        "name":  "도제 롯데백화점김포공항점",
        "category":  "🍚한식",
        "location_small":  "방화동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2143263514",
        "location_large":  "서울 강서구",
        "menu":  [
                     "유부초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-24",
        "name":  "안스베이커리 롯데김포공항점",
        "category":  "☕카페",
        "location_small":  "방화동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/20306338",
        "location_large":  "서울 강서구",
        "menu":  [
                     "빵"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-24",
        "name":  "신용산 닭한마리",
        "category":  "🍚한식",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/401374367",
        "location_large":  "서울 용산구",
        "menu":  [
                     "닭한마리"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-24",
        "name":  "아티제 신용산역점",
        "category":  "☕카페",
        "location_small":  "한강로",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1394878905",
        "location_large":  "서울 용산구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-26",
        "name":  "킹콩부대찌개 마포대흥오남매행복점",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1744462722",
        "location_large":  "서울 마포구",
        "menu":  [
                     "부대찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-23",
        "name":  "녹기전에",
        "category":  "☕카페",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/712881606",
        "location_large":  "서울 마포구",
        "menu":  [
                     "아이스크림"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-11",
        "name":  "녹기전에",
        "category":  "☕카페",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/712881606",
        "location_large":  "서울 마포구",
        "menu":  [
                     "아이스크림"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-26",
        "name":  "샐러드앤가든 서울공덕점",
        "category":  "🥗샐러드",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/125881152",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샐러드",
                     "포케"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-27",
        "name":  "개성손만두 마포점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-27",
        "name":  "두찜 마포신수점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1021203220",
        "location_large":  "서울 마포구",
        "menu":  [
                     "찜닭"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-08-28",
        "name":  "토끼정 KTX서울역사점",
        "category":  "🍣일식",
        "location_small":  "봉래동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/954522598",
        "location_large":  "서울 중구",
        "menu":  [
                     "돈까스",
                     "카레"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-28",
        "name":  "군산비어포트",
        "category":  "🍺술집",
        "location_small":  "금암동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1005319024",
        "location_large":  "전북 군산",
        "menu":  [
                     "맥주",
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-29",
        "name":  "뽕나무한그루 멀베리케이터링",
        "category":  "🍚한식",
        "location_small":  "월명동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/934006931",
        "location_large":  "전북 군산",
        "menu":  [
                     "도시락"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-08-29",
        "name":  "바르미샤브샤브칼국수",
        "category":  "🍚한식",
        "location_small":  "수송동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/26611615",
        "location_large":  "전북 군산",
        "menu":  [
                     "샤브샤브"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-08-30",
        "name":  "짬뽕공장 군산점",
        "category":  "🍜중식",
        "location_small":  "수송동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1544446763",
        "location_large":  "전북 군산",
        "menu":  [
                     "짬뽕",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-02",
        "name":  "한솥도시락 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1584071787",
        "location_large":  "서울 마포구",
        "menu":  [
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-02",
        "name":  "구름계란덮밥 공덕점",
        "category":  "🍚한식",
        "location_small":  "도화동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/137366305",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-03",
        "name":  "미가",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16443006",
        "location_large":  "서울 마포구",
        "menu":  [
                     "제육볶음",
                     "파전"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-03",
        "name":  "반미362 신촌점",
        "category":  "🥡아시안",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/134850295",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "반미"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-09-05",
        "name":  "크런치샌드위치",
        "category":  "🥗샐러드",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1970402078",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-04",
        "name":  "한솥도시락 이대역점",
        "category":  "🍚한식",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/18248679",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-10",
        "name":  "호시카츠 서울역점",
        "category":  "🍣일식",
        "location_small":  "대현동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18248679",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-05",
        "name":  "세끼김밥",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/742902254",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-06",
        "name":  "돈맛탱 마포점",
        "category":  "🍚한식",
        "location_small":  "도화동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/58899072",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼겹살"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-06",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-07",
        "name":  "오늘도빙수앤커피",
        "category":  "☕카페",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/301037533",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "빙수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-07",
        "name":  "고래주당",
        "category":  "🍺술집",
        "location_small":  "중동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1097446371",
        "location_large":  "경기 부천",
        "menu":  [
                     "이자카야"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-07",
        "name":  "생마차 부천신중동점",
        "category":  "🍺술집",
        "location_small":  "신중동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/504789189",
        "location_large":  "경기 부천",
        "menu":  [
                     "닭꼬치",
                     "치킨"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-09-06",
        "name":  "오늘도빙수앤커피",
        "category":  "☕카페",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/301037533",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "빙수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-08",
        "name":  "맘스터치 마포대흥역점",
        "category":  "🍔패스트푸드",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1679593996",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-09",
        "name":  "톨",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-09",
        "name":  "한솥도시락 홍대서교점",
        "category":  "🍚한식",
        "location_small":  "서교동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1873252598",
        "location_large":  "서울 마포구",
        "menu":  [
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-10",
        "name":  "점보파스타 마포본점",
        "category":  "🍝양식",
        "location_small":  "창전동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/2034389246",
        "location_large":  "서울 마포구",
        "menu":  [
                     "리조또",
                     "파스타"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-26",
        "name":  "개성손만두 마포점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-11",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-02",
        "name":  "한솥도시락 이대역점",
        "category":  "🍚한식",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/18248679",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-12",
        "name":  "가마치통닭 서울신촌점",
        "category":  "🍗치킨",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1588458564",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-12",
        "name":  "투다리 신수점",
        "category":  "🍺술집",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1410747507",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-13",
        "name":  "베어스타코 아현공덕점",
        "category":  "🌮세계요리",
        "location_small":  "아현동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/981286710",
        "location_large":  "서울 마포구",
        "menu":  [
                     "퀘사디아",
                     "타코"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-13",
        "name":  "마포닭곰탕 본점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/17361050",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭곰탕",
                     "부대찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-12",
        "name":  "쿠츠",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/14544642",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-07-10",
        "name":  "성심당 본점",
        "category":  "☕카페",
        "location_small":  "은행동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/17733090",
        "location_large":  "대전 중구",
        "menu":  [
                     "빵"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-04",
        "name":  "호시카츠 서울역점",
        "category":  "🍣일식",
        "location_small":  "대현동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18248679",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-19",
        "name":  "풍년기사님식당",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/21410532",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김치찌개",
                     "불고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-19",
        "name":  "밥은먹었어",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/636198841",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "덮밥",
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-21",
        "name":  "김실력포차 본점",
        "category":  "🍚한식",
        "location_small":  "이태원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/920906713",
        "location_large":  "서울 용산구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-22",
        "name":  "롤앤롤 김밥",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1581143656",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-25",
        "name":  "한식밥상",
        "category":  "🍚한식",
        "location_small":  "서교동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1447900437",
        "location_large":  "서울 마포구",
        "menu":  [
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-24",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-23",
        "name":  "써브웨이 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/223880589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-23",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-24",
        "name":  "세끼김밥",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/742902254",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-26",
        "name":  "샌디 빌리지",
        "category":  "🥗샐러드",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/326057387",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치",
                     "샐러드"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-10",
        "name":  "개성손만두 마포점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-27",
        "name":  "본도시락 공덕역점",
        "category":  "🍚한식",
        "location_small":  "신공덕동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/19012185",
        "location_large":  "서울 마포구",
        "menu":  [
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-02",
        "name":  "톨",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-28",
        "name":  "지지고 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/368211608",
        "location_large":  "서울 마포구",
        "menu":  [
                     "컵밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-28",
        "name":  "강남불백 3호점",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/724244479",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "불고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-23",
        "name":  "샌디 빌리지",
        "category":  "🥗샐러드",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/326057387",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치",
                     "샐러드"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-30",
        "name":  "곤자가컨벤션",
        "category":  "🍚한식, 🍽️뷔페",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/8231583",
        "location_large":  "서울 마포구",
        "menu":  [
                     "뷔페"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-30",
        "name":  "덮밥만드는남자 이대점",
        "category":  "🍚한식",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/795522115",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "덮밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-03",
        "name":  "샌디 빌리지",
        "category":  "🥗샐러드",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/326057387",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치",
                     "샐러드"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-01",
        "name":  "점보파스타 마포본점",
        "category":  "🍝양식",
        "location_small":  "창전동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/2034389246",
        "location_large":  "서울 마포구",
        "menu":  [
                     "리조또",
                     "파스타"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-27",
        "name":  "톨",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-09-11",
        "name":  "한솥도시락 이대역점",
        "category":  "🍚한식",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/18248679",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-03",
        "name":  "맘스터치 마포대흥역점",
        "category":  "🍔패스트푸드",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1679593996",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-01",
        "name":  "샌디 빌리지",
        "category":  "🥗샐러드",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/326057387",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치",
                     "샐러드"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-04",
        "name":  "펍피맥 용산점",
        "category":  "🍕피자, 🍺술집",
        "location_small":  "한강로",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1392356786",
        "location_large":  "서울 용산구",
        "menu":  [
                     "맥주",
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-04",
        "name":  "동식탁",
        "category":  "🍺술집",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1797119835",
        "location_large":  "서울 용산구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-07",
        "name":  "밀플랜비 서강대점",
        "category":  "🌮세계요리, 🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/960971083",
        "location_large":  "서울 마포구",
        "menu":  [
                     "브리또"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-07",
        "name":  "리춘시장 신촌점",
        "category":  "🍜중식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/941746912",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "마라샹궈",
                     "마라탕"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-07",
        "name":  "오늘도빙수앤커피",
        "category":  "☕카페",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/301037533",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "빙수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-08",
        "name":  "마니마니톡톡",
        "category":  "🍗치킨, 🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1060711910",
        "location_large":  "서울 마포구",
        "menu":  [
                     "백반",
                     "치킨"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-09-29",
        "name":  "샌디 빌리지",
        "category":  "🥗샐러드",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/326057387",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치",
                     "샐러드"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-09",
        "name":  "한신우동 서강대점",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1490753915",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스",
                     "우동"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-10",
        "name":  "잼베이커리",
        "category":  "☕카페, 🥗샐러드",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/578311224",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-10",
        "name":  "점보파스타 마포본점",
        "category":  "🍝양식",
        "location_small":  "창전동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/2034389246",
        "location_large":  "서울 마포구",
        "menu":  [
                     "리조또",
                     "파스타"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-11",
        "name":  "포옹남",
        "category":  "🥡아시안",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/931810511",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌀국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-11",
        "name":  "베어스타코 아현공덕점",
        "category":  "🌮세계요리",
        "location_small":  "아현동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/981286710",
        "location_large":  "서울 마포구",
        "menu":  [
                     "퀘사디아",
                     "타코"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-12",
        "name":  "피자스쿨 대흥역점",
        "category":  "🍕피자",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/25781457",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-27",
        "name":  "써브웨이 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/223880589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-01",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-05-14",
        "name":  "수저가",
        "category":  "🍜중식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/542808268",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-15",
        "name":  "담산 신촌본점",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1480854338",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "등갈비"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-15",
        "name":  "설빙 신촌점",
        "category":  "☕카페",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/24879347",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "빙수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-16",
        "name":  "신촌야생마",
        "category":  "🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/678293473",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "닭꼬치",
                     "어묵"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-17",
        "name":  "두끼떡볶이 이대점",
        "category":  "🍙분식",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/26949275",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-17",
        "name":  "한솥도시락 이대역점",
        "category":  "🍚한식",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/18248679",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-18",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-18",
        "name":  "효자오리바베큐",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/527000679",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오리"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-19",
        "name":  "오토김밥 공덕점",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1163187809",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥",
                     "닭강정"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-27",
        "name":  "롤앤롤 김밥",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1581143656",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-21",
        "name":  "곤자가컨벤션",
        "category":  "🍚한식, 🍽️뷔페",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/8231583",
        "location_large":  "서울 마포구",
        "menu":  [
                     "뷔페"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-21",
        "name":  "샐러디 마포구청점",
        "category":  "🥗샐러드",
        "location_small":  "성산동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1341401934",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치",
                     "샐러드"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-22",
        "name":  "개성손만두 마포점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-22",
        "name":  "굽네치킨 서강점",
        "category":  "🍗치킨",
        "location_small":  "창전동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/17723918",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-23",
        "name":  "정든그릇",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1069804608",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "돈까스",
                     "메밀소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-08",
        "name":  "샌디 빌리지",
        "category":  "🥗샐러드",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/326057387",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치",
                     "샐러드"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-24",
        "name":  "롯데리아 서울역사점",
        "category":  "🍔패스트푸드",
        "location_small":  "봉래동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/7857647",
        "location_large":  "서울 중구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-24",
        "name":  "가야밀면",
        "category":  "🍚한식",
        "location_small":  "우동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/156752169",
        "location_large":  "부산 해운대구",
        "menu":  [
                     "밀면"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-24",
        "name":  "타이드",
        "category":  "☕카페",
        "location_small":  "중동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1008941116",
        "location_large":  "부산 해운대구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-24",
        "name":  "자연도소금빵 해운대점",
        "category":  "☕카페",
        "location_small":  "중동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/810707734",
        "location_large":  "부산 해운대구",
        "menu":  [
                     "빵"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-24",
        "name":  "재희상회",
        "category":  "🍚한식",
        "location_small":  "민락동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/618937131",
        "location_large":  "부산 수영구",
        "menu":  [

                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-24",
        "name":  "상국이네",
        "category":  "🍙분식",
        "location_small":  "중동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/9089301",
        "location_large":  "부산 해운대구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-24",
        "name":  "맥도날드 달맞이DT점",
        "category":  "🍔패스트푸드",
        "location_small":  "중동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/7862025",
        "location_large":  "부산 해운대구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-25",
        "name":  "극동돼지국밥",
        "category":  "🍚한식",
        "location_small":  "중동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/241371594",
        "location_large":  "부산 해운대구",
        "menu":  [
                     "국밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-25",
        "name":  "가마솥 깡통분식",
        "category":  "🍙분식",
        "location_small":  "중동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/241371594",
        "location_large":  "부산 해운대구",
        "menu":  [
                     "떡볶이",
                     "어묵"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-25",
        "name":  "흑미 무한도전 씨앗호떡",
        "category":  "🍙분식",
        "location_small":  "남포동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/103515412",
        "location_large":  "부산 중구",
        "menu":  [
                     "호떡"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-25",
        "name":  "채도",
        "category":  "☕카페",
        "location_small":  "남포동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/438825525",
        "location_large":  "부산 중구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-25",
        "name":  "이재모피자 부산역점",
        "category":  "🍕피자",
        "location_small":  "초량동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/663545767",
        "location_large":  "부산 동구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-25",
        "name":  "갈매기샌드 1호점",
        "category":  "☕카페",
        "location_small":  "초량동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/184124450",
        "location_large":  "부산 동구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-26",
        "name":  "덮당",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/791340802",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-26",
        "name":  "스타벅스 서강대점",
        "category":  "☕카페",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/25115119",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-20",
        "name":  "롤앤롤 김밥",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1581143656",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-13",
        "name":  "써브웨이 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/223880589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-28",
        "name":  "강남불백 3호점",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/724244479",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "불고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-29",
        "name":  "장수보감",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/14832719",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼계탕"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-14",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-30",
        "name":  "순이네바지락칼국수",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/20527389",
        "location_large":  "서울 마포구",
        "menu":  [
                     "칼국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-30",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-31",
        "name":  "톨",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-26",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-01",
        "name":  "킹콩부대찌개 마포대흥오남매행복점",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1744462722",
        "location_large":  "서울 마포구",
        "menu":  [
                     "부대찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-31",
        "name":  "내가찜한닭 신촌점",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27367019",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "찜닭"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-02",
        "name":  "고토히라우동",
        "category":  "🍣일식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/21129871",
        "location_large":  "서울 마포구",
        "menu":  [
                     "우동"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-17",
        "name":  "마포쌈밥식당",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1919542306",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌈밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-17",
        "name":  "굽네치킨 이대역점",
        "category":  "🍗치킨",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/164159610",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-16",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-16",
        "name":  "롤앤롤 김밥",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1581143656",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-15",
        "name":  "마니마니톡톡",
        "category":  "🍗치킨, 🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1060711910",
        "location_large":  "서울 마포구",
        "menu":  [
                     "백반",
                     "치킨"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-01-15",
        "name":  "KFC 신촌역점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/692703127",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-14",
        "name":  "두끼 홍대역점",
        "category":  "🍙분식",
        "location_small":  "동교동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/27296903",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-14",
        "name":  "오리지널시카고피자 홍대본점",
        "category":  "🍕피자",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/24324645",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-13",
        "name":  "돈이찌 서울역점",
        "category":  "🍣일식",
        "location_small":  "봉래동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1585718261",
        "location_large":  "서울 중구",
        "menu":  [
                     "덮밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-13",
        "name":  "싸움의고수 신촌점",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27543827",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "보쌈"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-12",
        "name":  "부탄츄 신촌점",
        "category":  "🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/21572456",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "라멘"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-11",
        "name":  "무쇠김치삼겹연남",
        "category":  "🍚한식",
        "location_small":  "연남동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/511084756",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼겹살"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-10",
        "name":  "보어드앤헝그리",
        "category":  "🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/108492868",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-09",
        "name":  "롯데리아 대흥역점",
        "category":  "🍔패스트푸드",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/20012019",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-04",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-08",
        "name":  "유닭스토리 닭한마리 신촌점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/20012019",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭한마리"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-08",
        "name":  "세끼김밥",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/742902254",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-06",
        "name":  "개성손만두 마포점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-06",
        "name":  "용싸키친",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/15526292",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-07",
        "name":  "샌디 빌리지",
        "category":  "🥗샐러드",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/326057387",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치",
                     "샐러드"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-05",
        "name":  "바른치킨 서강대 로봇점",
        "category":  "🍗치킨",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1446748474",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-09",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-03",
        "name":  "홍천조박사화로구이",
        "category":  "🍚한식, 🥩고기",
        "location_small":  "서면 대곡리",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1925458047",
        "location_large":  "강원 홍천",
        "menu":  [
                     "삼겹살"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-03",
        "name":  "이디야커피 홍천서면점",
        "category":  "☕카페",
        "location_small":  "서면 대곡리",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/381231413",
        "location_large":  "강원 홍천",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-02",
        "name":  "맥도날드 중앙대점",
        "category":  "🍔패스트푸드",
        "location_small":  "흑석동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/14091840",
        "location_large":  "서울 동작구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-02",
        "name":  "네네치킨 대명비발디점",
        "category":  "🍗치킨",
        "location_small":  "서면 대곡리",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/24093740",
        "location_large":  "강원 홍천",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-01",
        "name":  "다이닝원 발산점",
        "category":  "🍽️뷔페",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1544543391",
        "location_large":  "서울 강서구",
        "menu":  [
                     "뷔페"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-31",
        "name":  "명륜진사갈비 영등포역점",
        "category":  "🥩고기",
        "location_small":  "영등포동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1995389455",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "돼지고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-08",
        "name":  "일미집 영등포점",
        "category":  "🍚한식",
        "location_small":  "영등포동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/147462961",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "감자탕"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-07",
        "name":  "정든그릇",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1069804608",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "돈까스",
                     "메밀소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-07",
        "name":  "또보겠지떡볶이집 깐따비아점",
        "category":  "🍙분식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/895272833",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-06",
        "name":  "톨",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-06",
        "name":  "롯데리아 대흥역점",
        "category":  "🍔패스트푸드",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/20012019",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-05",
        "name":  "산산바베큐 신촌본점",
        "category":  "🍗치킨",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1284065915",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-03",
        "name":  "개성손만두 마포점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-04",
        "name":  "스타벅스 서강대프라자점",
        "category":  "☕카페",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/892961860",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치",
                     "커피"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-26",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-03",
        "name":  "리정원 대흥점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1448096292",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼겹살",
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-03",
        "name":  "피자스쿨 대흥역점",
        "category":  "🍕피자",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/25781457",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-01",
        "name":  "노량진수산물도매식당",
        "category":  "🍚한식",
        "location_small":  "노량진동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/8205369",
        "location_large":  "서울 동작구",
        "menu":  [
                     "회"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-31",
        "name":  "브라운시티 로스팅랩",
        "category":  "☕카페",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/327828139",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페",
                     "커피"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-31",
        "name":  "수저가",
        "category":  "🍜중식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/651155763",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-31",
        "name":  "경성양꼬치 연남직영점",
        "category":  "🥩고기",
        "location_small":  "동교동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27460896",
        "location_large":  "서울 마포구",
        "menu":  [
                     "양꼬치"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-31",
        "name":  "경호네",
        "category":  "🍺술집",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/365481447",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-01-25",
        "name":  "현이네회시장",
        "category":  "🍚한식",
        "location_small":  "망원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1878597817",
        "location_large":  "서울 마포구",
        "menu":  [
                     "회"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-25",
        "name":  "교촌치킨 망원2동점",
        "category":  "🍗치킨",
        "location_small":  "망원동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/11280281",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-25",
        "name":  "설빙 서울망원점",
        "category":  "☕카페",
        "location_small":  "망원동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/350204016",
        "location_large":  "서울 마포구",
        "menu":  [
                     "빙수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-24",
        "name":  "아소정",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/7990640",
        "location_large":  "서울 마포구",
        "menu":  [
                     "갈비찜",
                     "갈비탕",
                     "냉면"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-24",
        "name":  "고디바베이커리 현대백화점신촌점",
        "category":  "☕카페",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1695844849",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "빵"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-24",
        "name":  "그릭데이 이대본점",
        "category":  "☕카페",
        "location_small":  "대현동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/577825774",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "요거트"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-23",
        "name":  "곤자가컨벤션",
        "category":  "🍚한식, 🍽️뷔페",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/8231583",
        "location_large":  "서울 마포구",
        "menu":  [
                     "뷔페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-23",
        "name":  "대파곱창",
        "category":  "🥩고기",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2000501931",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "곱창"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-23",
        "name":  "오늘도빙수앤커피",
        "category":  "☕카페",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/301037533",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "빙수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-21",
        "name":  "678치킨앤버거 신촌서강직영점",
        "category":  "🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1887745600",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-22",
        "name":  "밀플랜비 서강대점",
        "category":  "🌮세계요리, 🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/960971083",
        "location_large":  "서울 마포구",
        "menu":  [
                     "브리또"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-21",
        "name":  "오토김밥 공덕점",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1163187809",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥",
                     "닭강정"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-20",
        "name":  "대한카츠 마포점",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1042643162",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-20",
        "name":  "미가",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16443006",
        "location_large":  "서울 마포구",
        "menu":  [
                     "제육볶음",
                     "파전"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-19",
        "name":  "노브랜드버거 마곡점",
        "category":  "🍔패스트푸드",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1720074844",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-23",
        "name":  "따우전드 신사점",
        "category":  "☕카페",
        "location_small":  "신사동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1363607100",
        "location_large":  "서울 강남구",
        "menu":  [
                     "커피",
                     "파이"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-23",
        "name":  "바다포차돌섬 신사점",
        "category":  "🍚한식",
        "location_small":  "신사동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/677390319",
        "location_large":  "서울 강남구",
        "menu":  [
                     "회"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-23",
        "name":  "어덜트온리",
        "category":  "🍺술집",
        "location_small":  "신사동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/203277944",
        "location_large":  "서울 강남구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-22",
        "name":  "포그",
        "category":  "🍕피자, 🍝양식",
        "location_small":  "합정동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1317622013",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-01",
        "name":  "칠가마라상궈마라탕 중앙대점",
        "category":  "🍜중식",
        "location_small":  "흑석동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1656084578",
        "location_large":  "서울 동작구",
        "menu":  [
                     "마라샹궈",
                     "마라탕"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-01",
        "name":  "캐빈",
        "category":  "🍺술집",
        "location_small":  "흑석동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1458421452",
        "location_large":  "서울 동작구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-07",
        "name":  "히카",
        "category":  "☕카페",
        "location_small":  "망원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1243515681",
        "location_large":  "서울 마포구",
        "menu":  [
                     "커피",
                     "케이크"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-07",
        "name":  "청어람 2호점",
        "category":  "🍚한식",
        "location_small":  "망원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1028137347",
        "location_large":  "서울 마포구",
        "menu":  [
                     "곱창",
                     "곱창전골"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-07",
        "name":  "건어물라운지",
        "category":  "🍺술집",
        "location_small":  "망원동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/887161079",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-07",
        "name":  "마르뜨",
        "category":  "☕카페",
        "location_small":  "망원동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1371486408",
        "location_large":  "서울 마포구",
        "menu":  [
                     "빙수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-13",
        "name":  "아웃백스테이크하우스 신촌점",
        "category":  "🍝양식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/7991188",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "스테이크",
                     "파스타"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-13",
        "name":  "우리바다수산(성산점)",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/15965312",
        "location_large":  "서울 마포구",
        "menu":  [
                     "회"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-17",
        "name":  "카쿠시타",
        "category":  "🍺술집",
        "location_small":  "연남동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1317927211",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-14",
        "name":  "락희돈",
        "category":  "🍺술집",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/814587106",
        "location_large":  "서울 마포구",
        "menu":  [
                     "꼬치",
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-17",
        "name":  "락희돈",
        "category":  "🍺술집",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/814587106",
        "location_large":  "서울 마포구",
        "menu":  [
                     "꼬치",
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-20",
        "name":  "한식주점 제일회관 수원직영점",
        "category":  "🍺술집",
        "location_small":  "수원역",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/662047130",
        "location_large":  "경기 수원",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-24",
        "name":  "고삼이 신촌점",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/17505297",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "고등어구이"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-25",
        "name":  "방화동 교동짬뽕",
        "category":  "🍜중식",
        "location_small":  "방화동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/25858128",
        "location_large":  "서울 강서구",
        "menu":  [
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-25",
        "name":  "하트티라미수 현대백화점신촌점",
        "category":  "☕카페",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/218154293",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "티라미수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-15",
        "name":  "떰즈업",
        "category":  "🍔패스트푸드",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/447354571",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-10",
        "name":  "부탄츄 신촌점",
        "category":  "🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/21572456",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "라멘"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-09",
        "name":  "세아마라탕 서강대점",
        "category":  "🍜중식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1629334425",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마라탕"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-08",
        "name":  "정월",
        "category":  "🍜중식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/131878421",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-01-22",
        "name":  "정월",
        "category":  "🍜중식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/131878421",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-31",
        "name":  "찐쭈",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1808390476",
        "location_large":  "서울 마포구",
        "menu":  [
                     "불고기",
                     "쭈꾸미불고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-30",
        "name":  "스시히바리",
        "category":  "🍣일식",
        "location_small":  "아현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/80394697",
        "location_large":  "서울 마포구",
        "menu":  [
                     "초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-29",
        "name":  "맥도날드 우장산DT점",
        "category":  "🍔패스트푸드",
        "location_small":  "화곡동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/27176968",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-27",
        "name":  "1987 신샤브 마포점",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/847209556",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샤브샤브"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-26",
        "name":  "킹콩부대찌개 마포대흥오남매행복점",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1744462722",
        "location_large":  "서울 마포구",
        "menu":  [
                     "부대찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-24",
        "name":  "장수보감",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/14832719",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼계탕"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-23",
        "name":  "아비꼬 타임스퀘어점",
        "category":  "🍣일식",
        "location_small":  "영등포동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/26942456",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "카레"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-23",
        "name":  "을밀대",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/25048467",
        "location_large":  "서울 마포구",
        "menu":  [
                     "평양냉면"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-23",
        "name":  "도레도레 영등포롯데점",
        "category":  "☕카페",
        "location_small":  "영등포동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/609292637",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "커피",
                     "케이크"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-22",
        "name":  "KFC 신촌역점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/692703127",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-20",
        "name":  "프랭크버거 서강대점",
        "category":  "🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/834184731",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-19",
        "name":  "포엔띠우",
        "category":  "🥡아시안",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1853354235",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌀국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-19",
        "name":  "더크레딧",
        "category":  "☕카페",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1881094942",
        "location_large":  "서울 마포구",
        "menu":  [
                     "빵",
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-19",
        "name":  "두찜 마포신수점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1021203220",
        "location_large":  "서울 마포구",
        "menu":  [
                     "찜닭"
                 ],
        "closed":  true
    },
    {
        "date":  "2024-12-18",
        "name":  "남매밥상",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/929653827",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고등어구이",
                     "제육볶음",
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-18",
        "name":  "샐러드앤가든 서울공덕점",
        "category":  "🥗샐러드",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/125881152",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샐러드",
                     "포케"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-17",
        "name":  "개성손만두 마포점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-16",
        "name":  "가마솥에푹끓인묵은김치찜 마포점",
        "category":  "🍚한식",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/728243913",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김치찜"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-16",
        "name":  "미가",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16443006",
        "location_large":  "서울 마포구",
        "menu":  [
                     "제육볶음",
                     "파전"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-15",
        "name":  "홍콩반점0410 대흥역점",
        "category":  "🍜중식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/336646124",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-12",
        "name":  "지금식당 마포직영점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1193512345",
        "location_large":  "서울 마포구",
        "menu":  [
                     "솥밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-12",
        "name":  "한신우동 서강대점",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1490753915",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스",
                     "우동"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-11",
        "name":  "샌디 빌리지",
        "category":  "🥗샐러드",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/326057387",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치",
                     "샐러드"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-10",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-27",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-09",
        "name":  "굽네치킨 북아현점",
        "category":  "🍗치킨",
        "location_small":  "북아현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1526618624",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-09",
        "name":  "마포광안리",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/364627237",
        "location_large":  "서울 마포구",
        "menu":  [
                     "육회비빔밥",
                     "회"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-06",
        "name":  "포그",
        "category":  "🍕피자, 🍝양식",
        "location_small":  "합정동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1317622013",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-06",
        "name":  "포케올데이 홍대점",
        "category":  "🥗샐러드",
        "location_small":  "성산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1279060792",
        "location_large":  "서울 마포구",
        "menu":  [
                     "포케"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-05",
        "name":  "명량핫도그 대흥역점",
        "category":  "🍙분식",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1961550147",
        "location_large":  "서울 마포구",
        "menu":  [
                     "핫도그"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-04",
        "name":  "밀플랜비 서강대점",
        "category":  "🌮세계요리, 🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/960971083",
        "location_large":  "서울 마포구",
        "menu":  [
                     "브리또"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-04",
        "name":  "한솥도시락 이대역점",
        "category":  "🍚한식",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/18248679",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-05",
        "name":  "개성손만두 마포점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-03",
        "name":  "세끼김밥",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/742902254",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-02",
        "name":  "태광식당",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27233428",
        "location_large":  "서울 마포구",
        "menu":  [
                     "백반"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-12-02",
        "name":  "오토김밥 마곡점",
        "category":  "🍚한식",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1184366929",
        "location_large":  "서울 강서구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-10",
        "name":  "샤브로21 대흥역",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/127867629",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샤브샤브"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-10",
        "name":  "페리카나 공덕역점",
        "category":  "🍗치킨",
        "location_small":  "공덕동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/10891505",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-10",
        "name":  "명랑핫도그 아현역점",
        "category":  "🍙분식",
        "location_small":  "북아현동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/863548410",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이",
                     "핫도그"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-11",
        "name":  "꼰대상회",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/147318488",
        "location_large":  "서울 마포구",
        "menu":  [
                     "해장국"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-02-11",
        "name":  "포엔띠우",
        "category":  "🥡아시안",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1853354235",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌀국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-12",
        "name":  "홍두깨칼국수",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1140258830",
        "location_large":  "서울 마포구",
        "menu":  [
                     "칼국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-04",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-13",
        "name":  "프랭크버거 서강대점",
        "category":  "🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/834184731",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-14",
        "name":  "청원모밀",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "첨단",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/815915586",
        "location_large":  "광주 광산구",
        "menu":  [
                     "돈까스",
                     "메밀소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-14",
        "name":  "1984 술마시는작업실 첨단점",
        "category":  "🍺술집",
        "location_small":  "첨단",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1292029176",
        "location_large":  "광주 광산구",
        "menu":  [
                     "술집",
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-15",
        "name":  "탕화쿵푸마라탕 첨단점",
        "category":  "🍜중식",
        "location_small":  "첨단",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/297521021",
        "location_large":  "광주 광산구",
        "menu":  [
                     "마라탕"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-19",
        "name":  "신촌수제비",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/12502450",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "수제비"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-29",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-20",
        "name":  "용싸키친",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/15526292",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-20",
        "name":  "교촌치킨 신수점",
        "category":  "🍗치킨",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/19392082",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-22",
        "name":  "상상오리 홍대점",
        "category":  "🍚한식",
        "location_small":  "창전동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/174542888",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오리"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-21",
        "name":  "정든그릇",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1069804608",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "돈까스",
                     "메밀소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-24",
        "name":  "맘스터치 마포대흥역점",
        "category":  "🍔패스트푸드",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1679593996",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-25",
        "name":  "톨",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-25",
        "name":  "솔솥 연남점",
        "category":  "🍚한식",
        "location_small":  "연남동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1506623283",
        "location_large":  "서울 마포구",
        "menu":  [
                     "솥밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-26",
        "name":  "샤브로21 대흥역",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/127867629",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샤브샤브"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-19",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-10-28",
        "name":  "써브웨이 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/223880589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-27",
        "name":  "포케올데이 공덕점",
        "category":  "🥗샐러드",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1297162293",
        "location_large":  "서울 마포구",
        "menu":  [
                     "포케"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-28",
        "name":  "홍원",
        "category":  "🍜중식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/13083730",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-28",
        "name":  "샌디 빌리지",
        "category":  "🥗샐러드",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/326057387",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치",
                     "샐러드"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-29",
        "name":  "한솥도시락 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1584071787",
        "location_large":  "서울 마포구",
        "menu":  [
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-29",
        "name":  "몽주방",
        "category":  "🍺술집",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/581963667",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2024-11-30",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-17",
        "name":  "샨샨",
        "category":  "🍜중식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1231701730",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-17",
        "name":  "녹기전에",
        "category":  "☕카페",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/712881606",
        "location_large":  "서울 마포구",
        "menu":  [
                     "아이스크림"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-17",
        "name":  "또보겠지떡볶이집 스마일보이점",
        "category":  "🍙분식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/524094409",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-18",
        "name":  "KFC 신촌역점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/692703127",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-19",
        "name":  "앨리케이커",
        "category":  "☕카페",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1571969111",
        "location_large":  "서울 강서구",
        "menu":  [
                     "케이크"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-19",
        "name":  "로운 신촌본점",
        "category":  "🍚한식, 🍽️뷔페",
        "location_small":  "동교동",
        "rate":  "🥄🥄",
        "map_url":  "https://map.kakao.com/",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샤브샤브"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-19",
        "name":  "아웃닭 신촌역점",
        "category":  "🍗치킨",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27341509",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-20",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-21",
        "name":  "커츠",
        "category":  "🍣일식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/919165564",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-21",
        "name":  "유닭스토리 닭한마리 신촌점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/20012019",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭한마리"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-22",
        "name":  "스시지현",
        "category":  "🍣일식",
        "location_small":  "연남동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1297596109",
        "location_large":  "서울 마포구",
        "menu":  [
                     "초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-22",
        "name":  "브라운시티 로스팅랩",
        "category":  "☕카페",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/327828139",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페",
                     "커피"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-24",
        "name":  "마늘집",
        "category":  "🍚한식",
        "location_small":  "합정동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1301732319",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭볶음탕",
                     "닭한마리"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-24",
        "name":  "카페메틀",
        "category":  "☕카페",
        "location_small":  "합정동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1633185698",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-25",
        "name":  "롤앤롤 김밥",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1581143656",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-25",
        "name":  "명랑핫도그 아현역점",
        "category":  "🍙분식",
        "location_small":  "북아현동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/863548410",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이",
                     "핫도그"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-13",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-26",
        "name":  "경호네",
        "category":  "🍺술집",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/365481447",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-02-27",
        "name":  "개성손만두 마포점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-27",
        "name":  "더라멘워 더현대서울점",
        "category":  "🍣일식",
        "location_small":  "여의도동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1483503760",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "라멘"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-27",
        "name":  "죠죠 더현대서울점",
        "category":  "🍣일식",
        "location_small":  "여의도동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/420297065",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "오꼬노미야끼"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-27",
        "name":  "데이릿 더현대서울",
        "category":  "🍚한식, 🍜중식, 🍣일식",
        "location_small":  "여의도동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/871143674",
        "location_large":  "서울 영등포구",
        "menu":  [

                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-28",
        "name":  "성수족발",
        "category":  "🍚한식",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/8416853",
        "location_large":  "서울 성동구",
        "menu":  [
                     "족발"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-28",
        "name":  "무근본",
        "category":  "🍺술집",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1167924540",
        "location_large":  "서울 성동구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-24",
        "name":  "마니마니톡톡",
        "category":  "🍗치킨, 🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1060711910",
        "location_large":  "서울 마포구",
        "menu":  [
                     "백반",
                     "치킨"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-02-20",
        "name":  "피자스쿨 대흥역점",
        "category":  "🍕피자",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/25781457",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-02-18",
        "name":  "써브웨이 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/223880589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-04",
        "name":  "곤자가컨벤션",
        "category":  "🍚한식, 🍽️뷔페",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/8231583",
        "location_large":  "서울 마포구",
        "menu":  [
                     "뷔페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-05",
        "name":  "토리야 참피온",
        "category":  "🍣일식, 🍺술집",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2115062809",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭고기",
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-06",
        "name":  "밀플랜비 서강대점",
        "category":  "🌮세계요리, 🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/960971083",
        "location_large":  "서울 마포구",
        "menu":  [
                     "브리또"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-06",
        "name":  "리정원 대흥점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1448096292",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼겹살",
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-07",
        "name":  "웰빙봉평메일마을",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/662370482",
        "location_large":  "서울 마포구",
        "menu":  [
                     "막국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-07",
        "name":  "진미오향족발",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/17736011",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "족발"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-07",
        "name":  "오늘도빙수앤커피",
        "category":  "☕카페",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/301037533",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "빙수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-08",
        "name":  "고드니",
        "category":  "☕카페",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/700615587",
        "location_large":  "서울 강서구",
        "menu":  [
                     "카페",
                     "휘낭시에"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-08",
        "name":  "정월",
        "category":  "🍜중식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/131878421",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-08",
        "name":  "덮당",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/791340802",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-09",
        "name":  "타오마라탕 신촌점",
        "category":  "🍜중식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2027326489",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "마라탕"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-09",
        "name":  "파이브가이즈 서울역점",
        "category":  "🍔패스트푸드",
        "location_small":  "봉래동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/614833390",
        "location_large":  "서울 중구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-10",
        "name":  "써브웨이 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/223880589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-11",
        "name":  "남매밥상",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/929653827",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고등어구이",
                     "제육볶음",
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-11",
        "name":  "수저가",
        "category":  "🍜중식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/542808268",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-13",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-13",
        "name":  "한강서초순대국",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/12044566",
        "location_large":  "서울 마포구",
        "menu":  [
                     "국밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-12",
        "name":  "타코로코",
        "category":  "🌮세계요리",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/26524405",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "타코"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-14",
        "name":  "광명대창집영등포집",
        "category":  "🥩고기",
        "location_small":  "영등포동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/34150783",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "곱창"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-14",
        "name":  "맥도날드 영등포점",
        "category":  "🍔패스트푸드",
        "location_small":  "영등포동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/7861591",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-15",
        "name":  "매주가",
        "category":  "🍚한식, 🍺술집",
        "location_small":  "방이동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1119011541",
        "location_large":  "서울 송파구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-16",
        "name":  "오레노라멘 송파점",
        "category":  "🍣일식",
        "location_small":  "송파동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1087614547",
        "location_large":  "서울 송파구",
        "menu":  [
                     "라멘"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-18",
        "name":  "개성손만두 마포점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-18",
        "name":  "KFC 신촌역점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/692703127",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-27",
        "name":  "곤자가컨벤션",
        "category":  "🍚한식, 🍽️뷔페",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/8231583",
        "location_large":  "서울 마포구",
        "menu":  [
                     "뷔페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-20",
        "name":  "마포곱창타운",
        "category":  "🥩고기",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/10341266",
        "location_large":  "서울 마포구",
        "menu":  [
                     "곱창"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-21",
        "name":  "끼로끼로부엉이",
        "category":  "🥩고기",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27383419",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돼지고기",
                     "소고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-23",
        "name":  "유부로 더현대서울",
        "category":  "🍚한식",
        "location_small":  "여의도동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1357557435",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "유부초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-25",
        "name":  "남매밥상",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/929653827",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고등어구이",
                     "제육볶음",
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-25",
        "name":  "겐로쿠우동 홍대본점",
        "category":  "🍣일식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/12437276",
        "location_large":  "서울 마포구",
        "menu":  [
                     "우동"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-26",
        "name":  "상상오리 홍대점",
        "category":  "🍚한식",
        "location_small":  "창전동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/174542888",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오리"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-20",
        "name":  "곤자가컨벤션",
        "category":  "🍚한식, 🍽️뷔페",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/8231583",
        "location_large":  "서울 마포구",
        "menu":  [
                     "뷔페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-28",
        "name":  "포그",
        "category":  "🍕피자, 🍝양식",
        "location_small":  "합정동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1317622013",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-28",
        "name":  "미나리밭 오리사냥 문래점",
        "category":  "🍚한식",
        "location_small":  "문래동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1566150136",
        "location_large":  "서울 영등포구",
        "menu":  [

                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-29",
        "name":  "예산가마솥국밥",
        "category":  "🍚한식",
        "location_small":  "영등포동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/792095102",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "국밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-29",
        "name":  "롯데리아 대흥역점",
        "category":  "🍔패스트푸드",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/20012019",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-30",
        "name":  "아비꼬 신촌점",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/17735995",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "카레"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-02",
        "name":  "황금오리농장",
        "category":  "🍚한식",
        "location_small":  "가양동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2048176933",
        "location_large":  "서울 강서구",
        "menu":  [
                     "오리"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-23",
        "name":  "쌍굴옻닭",
        "category":  "🍚한식",
        "location_small":  "덕은동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/10068499",
        "location_large":  "경기 고양",
        "menu":  [
                     "삼계탕",
                     "옻닭"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-17",
        "name":  "일식비",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/858069008",
        "location_large":  "서울 강서구",
        "menu":  [
                     "회"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-19",
        "name":  "피제리아더키",
        "category":  "🍕피자, 🍝양식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/561289275",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-24",
        "name":  "가화만사성",
        "category":  "🍜중식",
        "location_small":  "창천동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1536467186",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "짜장면"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-31",
        "name":  "밀플랜비 서강대점",
        "category":  "🌮세계요리, 🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/960971083",
        "location_large":  "서울 마포구",
        "menu":  [
                     "브리또"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-03-31",
        "name":  "맥도날드 연세대점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/18606733",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-01",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-02",
        "name":  "스미비 숯불구이",
        "category":  "🍣일식, 🍺술집",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/399698120",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-03",
        "name":  "정든그릇",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1069804608",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "돈까스",
                     "메밀소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-04",
        "name":  "마포닭곰탕 본점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/17361050",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭곰탕",
                     "부대찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-04",
        "name":  "솝커피",
        "category":  "☕카페",
        "location_small":  "연남동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/817132826",
        "location_large":  "서울 마포구",
        "menu":  [
                     "커피"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-04",
        "name":  "양지분식",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/21410030",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-04-05",
        "name":  "끼로끼로부엉이",
        "category":  "🥩고기",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27383419",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돼지고기",
                     "소고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-06",
        "name":  "팔",
        "category":  "☕카페",
        "location_small":  "통인동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1759358358",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-06",
        "name":  "적막",
        "category":  "🍚한식, 🍺술집",
        "location_small":  "서촌",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1552691715",
        "location_large":  "서울 종로구",
        "menu":  [
                     "닭발"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-04-07",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-07",
        "name":  "크런치샌드위치",
        "category":  "🥗샐러드",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1970402078",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-08",
        "name":  "마포쌈밥식당",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1919542306",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌈밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-17",
        "name":  "샌디 빌리지",
        "category":  "🥗샐러드",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/326057387",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치",
                     "샐러드"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-09",
        "name":  "맘스터치 마포대흥역점",
        "category":  "🍔패스트푸드",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1679593996",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-10",
        "name":  "정월",
        "category":  "🍜중식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/131878421",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-11",
        "name":  "한신우동 서강대점",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1490753915",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스",
                     "우동"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-11",
        "name":  "만조",
        "category":  "🍺술집",
        "location_small":  "해방촌",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1773422199",
        "location_large":  "서울 용산구",
        "menu":  [
                     "뭉티기"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-04-11",
        "name":  "보마",
        "category":  "🍺술집",
        "location_small":  "이태원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/415009738",
        "location_large":  "서울 용산구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-12",
        "name":  "카라멘야",
        "category":  "🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1025832828",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "라멘"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-12",
        "name":  "써브웨이 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/223880589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-13",
        "name":  "함반",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "합정동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2114131901",
        "location_large":  "서울 마포구",
        "menu":  [
                     "함박스테이크"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-14",
        "name":  "옥정",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1048556062",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-14",
        "name":  "노랑통닭 광흥창점",
        "category":  "🍗치킨",
        "location_small":  "창전동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/868374193",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-15",
        "name":  "거북이의 주방",
        "category":  "🍣일식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1401663204",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카레"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-21",
        "name":  "롯데리아 대흥역점",
        "category":  "🍔패스트푸드",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/20012019",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-16",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-16",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-08",
        "name":  "샌디 빌리지",
        "category":  "🥗샐러드",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/326057387",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치",
                     "샐러드"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-18",
        "name":  "광주똑순이아구찜",
        "category":  "🍚한식",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27501934",
        "location_large":  "서울 강서구",
        "menu":  [
                     "아구찜"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-19",
        "name":  "오토김밥 마곡점",
        "category":  "🍚한식",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1184366929",
        "location_large":  "서울 강서구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-19",
        "name":  "수다떠는오징어 호평본점",
        "category":  "🍚한식, 🍺술집",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2133364335",
        "location_large":  "경기 남양주",
        "menu":  [
                     "회"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-20",
        "name":  "원조뼈다귀감자탕 본점",
        "category":  "🍚한식",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16187584",
        "location_large":  "경기 남양주",
        "menu":  [
                     "감자탕"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-13",
        "name":  "마포마두 대흥점",
        "category":  "🍙분식, 🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/12755600",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이",
                     "만두",
                     "어묵"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-21",
        "name":  "파친코",
        "category":  "🍺술집",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1142997501",
        "location_large":  "서울 용산구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-20",
        "name":  "빈카이브",
        "category":  "🥗샐러드",
        "location_small":  "대현동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1520120363",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-15",
        "name":  "롯데리아 대흥역점",
        "category":  "🍔패스트푸드",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/20012019",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-22",
        "name":  "용싸키친",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/15526292",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-16",
        "name":  "런커피",
        "category":  "☕카페",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1356232146",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-22",
        "name":  "소구장",
        "category":  "🍙분식, 🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1781711138",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이",
                     "튀김"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-23",
        "name":  "연리희재",
        "category":  "☕카페",
        "location_small":  "하동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2034540788",
        "location_large":  "경기 수원",
        "menu":  [
                     "개성주악"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-23",
        "name":  "갈비명가서서갈비 수원본점",
        "category":  "🍚한식, 🥩고기",
        "location_small":  "인계동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/916627053",
        "location_large":  "경기 수원",
        "menu":  [
                     "돼지갈비"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-23",
        "name":  "2층술집",
        "category":  "🍺술집",
        "location_small":  "인계동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/410812230",
        "location_large":  "경기 수원",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-23",
        "name":  "심야식당선",
        "category":  "🍺술집",
        "location_small":  "인계동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/808030640",
        "location_large":  "경기 수원",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-24",
        "name":  "미즈컨테이너 광교갤러리아",
        "category":  "🍝양식",
        "location_small":  "하동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1832557951",
        "location_large":  "경기 수원",
        "menu":  [
                     "파스타",
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-24",
        "name":  "용성통닭 본점",
        "category":  "🍗치킨",
        "location_small":  "행궁동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/8022147",
        "location_large":  "경기 수원",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-24",
        "name":  "역전할머니맥주 수원인계점",
        "category":  "🍺술집",
        "location_small":  "인계동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/116196120",
        "location_large":  "경기 수원",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-24",
        "name":  "숯토리 수원인계점",
        "category":  "🍺술집",
        "location_small":  "인계동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/768133196",
        "location_large":  "경기 수원",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-25",
        "name":  "아웃백 광교갤러리아",
        "category":  "🍝양식",
        "location_small":  "하동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1681181343",
        "location_large":  "경기 수원",
        "menu":  [
                     "스테이크",
                     "파스타"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-27",
        "name":  "시시비비",
        "category":  "🍚한식, 🍺술집",
        "location_small":  "사당동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/490006660",
        "location_large":  "서울 동작구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-28",
        "name":  "보어드앤헝그리",
        "category":  "🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/108492868",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-29",
        "name":  "곤자가컨벤션",
        "category":  "🍚한식, 🍽️뷔페",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/8231583",
        "location_large":  "서울 마포구",
        "menu":  [
                     "뷔페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-29",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-30",
        "name":  "롤앤롤 김밥",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1581143656",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-30",
        "name":  "옥오꼬노미야끼",
        "category":  "🍣일식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/651011450",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오꼬노미야끼"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-04-30",
        "name":  "락희돈",
        "category":  "🍺술집",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/814587106",
        "location_large":  "서울 마포구",
        "menu":  [
                     "꼬치",
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-01",
        "name":  "동대문엽기떡볶이 신촌점",
        "category":  "🍙분식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/17764441",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-01",
        "name":  "포케올데이 홍대점",
        "category":  "🥗샐러드",
        "location_small":  "성산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1279060792",
        "location_large":  "서울 마포구",
        "menu":  [
                     "포케"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-02",
        "name":  "킹콩부대찌개 마포대흥오남매행복점",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1744462722",
        "location_large":  "서울 마포구",
        "menu":  [
                     "부대찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-02",
        "name":  "KFC 발산역점",
        "category":  "🍔패스트푸드",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1725139526",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-03",
        "name":  "제도",
        "category":  "☕카페",
        "location_small":  "부암동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://kko.kakao.com/S-03s0aAEH",
        "location_large":  "서울 종로구",
        "menu":  [
                     "커피",
                     "푸딩"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-03",
        "name":  "음음",
        "category":  "🍝양식",
        "location_small":  "관훈동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/42264893",
        "location_large":  "서울 종로구",
        "menu":  [
                     "파스타"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-01",
        "name":  "트레디어스 홀세일 클럽 마곡점",
        "category":  "🍔패스트푸드, 🍕피자",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1140314024",
        "location_large":  "서울 강서구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-29",
        "name":  "안자네밥상",
        "category":  "🍚한식",
        "location_small":  "교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1266581709",
        "location_large":  "전남 여수",
        "menu":  [
                     "간장게장",
                     "갈치조림"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-29",
        "name":  "백년유자 여수점",
        "category":  "☕카페",
        "location_small":  "중앙동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1650221658",
        "location_large":  "전남 여수",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-29",
        "name":  "낭만한잔79포차",
        "category":  "🍺술집",
        "location_small":  "종화동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1676638559",
        "location_large":  "전남 여수",
        "menu":  [
                     "돌문어삼합"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-30",
        "name":  "영애통장어",
        "category":  "🍚한식",
        "location_small":  "교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/116932008",
        "location_large":  "전남 여수",
        "menu":  [
                     "장어탕"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-30",
        "name":  "여수딸기모찌 고마리",
        "category":  "☕카페",
        "location_small":  "중앙동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/187738410",
        "location_large":  "전남 여수",
        "menu":  [
                     "딸기모찌"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-30",
        "name":  "여수당 과자점",
        "category":  "☕카페",
        "location_small":  "중앙동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/192785425",
        "location_large":  "전남 여수",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-30",
        "name":  "롯데리아 용산역사ST점",
        "category":  "🍔패스트푸드",
        "location_small":  "한강로",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/17942379",
        "location_large":  "서울 용산구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-26",
        "name":  "써브웨이 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/223880589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-28",
        "name":  "포케올데이 홍대점",
        "category":  "🥗샐러드",
        "location_small":  "성산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1279060792",
        "location_large":  "서울 마포구",
        "menu":  [
                     "포케"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-27",
        "name":  "대한냉면 마포점",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1085817955",
        "location_large":  "서울 마포구",
        "menu":  [
                     "냉면"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-27",
        "name":  "금문중화요리",
        "category":  "🍜중식",
        "location_small":  "합정동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/174870783",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-21",
        "name":  "롯데리아 서울역사점",
        "category":  "🍔패스트푸드",
        "location_small":  "봉래동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/7857647",
        "location_large":  "서울 중구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-21",
        "name":  "황남두꺼비",
        "category":  "🍚한식",
        "location_small":  "황남동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "http://xn--place-961v.map.kakao.com/1952344699",
        "location_large":  "경북 경주",
        "menu":  [
                     "갈비찜"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-21",
        "name":  "점점",
        "category":  "🍺술집",
        "location_small":  "황남동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/133871935",
        "location_large":  "경북 경주",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-21",
        "name":  "경주대게닭강정",
        "category":  "🍗치킨",
        "location_small":  "황남동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1054251976",
        "location_large":  "경북 경주",
        "menu":  [
                     "닭강정"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-21",
        "name":  "경주약과방",
        "category":  "☕카페",
        "location_small":  "황남동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1507806813",
        "location_large":  "경북 경주",
        "menu":  [
                     "개성주악"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-22",
        "name":  "기와메밀막국수",
        "category":  "🍚한식",
        "location_small":  "구황동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/725002926",
        "location_large":  "경북 경주",
        "menu":  [
                     "막국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-22",
        "name":  "아덴 보문호수점",
        "category":  "☕카페",
        "location_small":  "신평동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/425270187",
        "location_large":  "경북 경주",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-23",
        "name":  "피자옥",
        "category":  "🍕피자, 🍝양식",
        "location_small":  "황남동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1225134792",
        "location_large":  "경북 경주",
        "menu":  [
                     "파스타",
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-23",
        "name":  "반카이막 경주본점",
        "category":  "☕카페",
        "location_small":  "황남동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1798751627",
        "location_large":  "경북 경주",
        "menu":  [
                     "아이스크림"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-23",
        "name":  "황남빵",
        "category":  "☕카페",
        "location_small":  "황오동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/26519092",
        "location_large":  "경북 경주",
        "menu":  [
                     "황남빵"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-23",
        "name":  "테를지",
        "category":  "☕카페",
        "location_small":  "사정동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1647204680",
        "location_large":  "경북 경주",
        "menu":  [
                     "프레첼"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-24",
        "name":  "교촌치킨 신수점",
        "category":  "🍗치킨",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/19392082",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-24",
        "name":  "동대문엽기떡볶이 신촌점",
        "category":  "🍙분식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/17764441",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-25",
        "name":  "스시우찌",
        "category":  "🍣일식",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1005384096",
        "location_large":  "경기 남양주",
        "menu":  [
                     "초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-25",
        "name":  "노브랜드버거 마곡점",
        "category":  "🍔패스트푸드",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1720074844",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-19",
        "name":  "한솥도시락 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1584071787",
        "location_large":  "서울 마포구",
        "menu":  [
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-19",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-20",
        "name":  "빈카이브",
        "category":  "🥗샐러드",
        "location_small":  "대현동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1520120363",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-20",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-17",
        "name":  "츠케루",
        "category":  "🍣일식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/268235810",
        "location_large":  "서울 마포구",
        "menu":  [
                     "라멘"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-17",
        "name":  "키친 205",
        "category":  "☕카페",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1337140142",
        "location_large":  "서울 마포구",
        "menu":  [
                     "케이크"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-18",
        "name":  "필요의방",
        "category":  "☕카페",
        "location_small":  "을지로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/109477583",
        "location_large":  "서울 중구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-18",
        "name":  "숯불꼼장어",
        "category":  "🍚한식",
        "location_small":  "돈의동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/15568897",
        "location_large":  "서울 종로구",
        "menu":  [
                     "꼼장어"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-12",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-12",
        "name":  "맘스터치 신촌점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27551667",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-13",
        "name":  "와우바게트샌드위치",
        "category":  "🥗샐러드",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/790690407",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-14",
        "name":  "대한냉면 마포점",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1085817955",
        "location_large":  "서울 마포구",
        "menu":  [
                     "냉면"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-14",
        "name":  "고기왕창 자이언트비빔밥 홍대점",
        "category":  "🍚한식",
        "location_small":  "서교동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/495717982",
        "location_large":  "서울 마포구",
        "menu":  [
                     "육회비빔밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-14",
        "name":  "턴테이블스낵바",
        "category":  "☕카페, 🍺술집",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27433952",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-15",
        "name":  "샌디 빌리지",
        "category":  "🥗샐러드",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/326057387",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치",
                     "샐러드"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-16",
        "name":  "밀플랜비 서강대점",
        "category":  "🌮세계요리, 🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/960971083",
        "location_large":  "서울 마포구",
        "menu":  [
                     "브리또"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-16",
        "name":  "교촌치킨 신수점",
        "category":  "🍗치킨",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/19392082",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-10",
        "name":  "뚜스뚜스",
        "category":  "☕카페",
        "location_small":  "한강로동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1911093773",
        "location_large":  "서울 용산구",
        "menu":  [
                     "카페"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-05-10",
        "name":  "부라보선술집",
        "category":  "🍗치킨, 🍺술집",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1801175062",
        "location_large":  "서울 용산구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-10",
        "name":  "쉐이크쉑 용산점",
        "category":  "🍔패스트푸드",
        "location_small":  "한강로",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1955384260",
        "location_large":  "서울 용산구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-11",
        "name":  "원조마포소금구이",
        "category":  "🥩고기",
        "location_small":  "방이동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16326803",
        "location_large":  "서울 송파구",
        "menu":  [
                     "돼지고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-05",
        "name":  "강릉짬뽕순두부 강릉본점",
        "category":  "🍚한식",
        "location_small":  "강문동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/731412427",
        "location_large":  "강원 강릉",
        "menu":  [
                     "순두부"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-05",
        "name":  "초당110",
        "category":  "☕카페",
        "location_small":  "강문동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1647908801",
        "location_large":  "강원 강릉",
        "menu":  [
                     "젤라또"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-05",
        "name":  "애시당초",
        "category":  "☕카페",
        "location_small":  "초당동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1168878886",
        "location_large":  "강원 강릉",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-05",
        "name":  "배니닭강정",
        "category":  "🍗치킨",
        "location_small":  "성남동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/19660110",
        "location_large":  "강원 강릉",
        "menu":  [
                     "닭강정"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-05",
        "name":  "오징어순대나라",
        "category":  "🍙분식",
        "location_small":  "성남동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/637492057",
        "location_large":  "강원 강릉",
        "menu":  [
                     "오징어순대"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-06",
        "name":  "소돌막국수",
        "category":  "🍚한식",
        "location_small":  "주문진읍",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1629307609",
        "location_large":  "강원 강릉",
        "menu":  [
                     "막국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-06",
        "name":  "카페 제니엘",
        "category":  "☕카페",
        "location_small":  "주문진읍",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/599987563",
        "location_large":  "강원 강릉",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-06",
        "name":  "산쪼메 호평점",
        "category":  "🍣일식",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/748605485",
        "location_large":  "경기 남양주",
        "menu":  [
                     "라멘"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-07",
        "name":  "밀플랜비 서강대점",
        "category":  "🌮세계요리, 🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/960971083",
        "location_large":  "서울 마포구",
        "menu":  [
                     "브리또"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-07",
        "name":  "샌디 빌리지",
        "category":  "🥗샐러드",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/326057387",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치",
                     "샐러드"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-08",
        "name":  "옥면가",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/301221235",
        "location_large":  "서울 마포구",
        "menu":  [
                     "국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-08",
        "name":  "명량핫도그 대흥역점",
        "category":  "🍙분식",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1961550147",
        "location_large":  "서울 마포구",
        "menu":  [
                     "핫도그"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-09",
        "name":  "남매밥상",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/929653827",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고등어구이",
                     "제육볶음",
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-05-09",
        "name":  "윤이불닭발 영등포점",
        "category":  "🍚한식, 🍺술집",
        "location_small":  "영등포동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1071904329",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "닭발"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-02",
        "name":  "밀플랜비 서강대점",
        "category":  "🌮세계요리, 🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/960971083",
        "location_large":  "서울 마포구",
        "menu":  [
                     "브리또"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-02",
        "name":  "왕십리불곱창",
        "category":  "🍚한식, 🥩고기",
        "location_small":  "망우동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18522216",
        "location_large":  "서울 중랑구",
        "menu":  [
                     "곱창"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-03",
        "name":  "윤경양식당",
        "category":  "🍣일식",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/64431735",
        "location_large":  "서울 성동구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-03",
        "name":  "시즈니",
        "category":  "☕카페",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1387324500",
        "location_large":  "서울 성동구",
        "menu":  [
                     "빙수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-04",
        "name":  "홍미닭발 신촌점",
        "category":  "🍚한식, 🍺술집",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/11951868",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "닭발"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-04",
        "name":  "신생포차 신촌점",
        "category":  "🍺술집",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1744842448",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "술집"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-06-05",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-05",
        "name":  "써브웨이 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/223880589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-07",
        "name":  "1인1잔",
        "category":  "☕카페",
        "location_small":  "진관동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670102239",
        "location_large":  "서울 은평구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-07",
        "name":  "주녘",
        "category":  "🍚한식, 🍺술집",
        "location_small":  "갈현동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1604269239",
        "location_large":  "서울 은평구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-07",
        "name":  "우산꼬치",
        "category":  "🍺술집",
        "location_small":  "갈현동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1171746396",
        "location_large":  "서울 은평구",
        "menu":  [
                     "꼬치"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-08",
        "name":  "빕스 은평롯데점",
        "category":  "🍝양식, 🍽️뷔페",
        "location_small":  "진관동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/997786908",
        "location_large":  "서울 은평구",
        "menu":  [
                     "뷔페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-27",
        "name":  "바른치킨 서강대 로봇점",
        "category":  "🍗치킨",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1446748474",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-27",
        "name":  "KFC 발산역점",
        "category":  "🍔패스트푸드",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1725139526",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-26",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-26",
        "name":  "싸움의고수 신촌점",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27543827",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "보쌈"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-25",
        "name":  "고블린피자",
        "category":  "🍕피자",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2036434781",
        "location_large":  "서울 마포구",
        "menu":  [
                     "파스타",
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-25",
        "name":  "오시 망원본점",
        "category":  "🍣일식",
        "location_small":  "망원동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/863823354",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오꼬노미야끼"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-25",
        "name":  "똥꼬하우스",
        "category":  "🍺술집",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1306288469",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "닭똥집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-24",
        "name":  "쉑쉑버거 홍대점",
        "category":  "🍔패스트푸드",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/136268965",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-24",
        "name":  "담산 신촌본점",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1480854338",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "등갈비"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-23",
        "name":  "마니마니톡톡",
        "category":  "🍗치킨, 🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1060711910",
        "location_large":  "서울 마포구",
        "menu":  [
                     "백반",
                     "치킨"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-06-23",
        "name":  "유브유부 연남점",
        "category":  "🍚한식",
        "location_small":  "연남동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1427643858",
        "location_large":  "서울 마포구",
        "menu":  [
                     "유부초밥"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-06-22",
        "name":  "메일룸",
        "category":  "☕카페",
        "location_small":  "황학동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1330474006",
        "location_large":  "서울 중구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-22",
        "name":  "우리집떡볶이",
        "category":  "🍙분식, 🍚한식",
        "location_small":  "신당동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27234119",
        "location_large":  "서울 중구",
        "menu":  [
                     "닭발",
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-21",
        "name":  "계순내닭강정",
        "category":  "🍗치킨",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1475248000",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭강정"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-20",
        "name":  "점보파스타 마포본점",
        "category":  "🍝양식",
        "location_small":  "창전동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2034389246",
        "location_large":  "서울 마포구",
        "menu":  [
                     "리조또",
                     "파스타"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-20",
        "name":  "김태완스시 마포점",
        "category":  "🍣일식",
        "location_small":  "도화동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1175874488",
        "location_large":  "서울 마포구",
        "menu":  [
                     "초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-20",
        "name":  "슈퍼말차 용산아이파크몰",
        "category":  "☕카페",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/846314097",
        "location_large":  "서울 용산구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-19",
        "name":  "마포쌈밥식당",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1919542306",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌈밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-14",
        "name":  "을지OB베어 와우",
        "category":  "🍺술집",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1251519679",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-18",
        "name":  "개성손만두 마포점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-18",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-17",
        "name":  "톨",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-17",
        "name":  "윈즈오운",
        "category":  "☕카페, 🥗샐러드",
        "location_small":  "대현동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1079750859",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-16",
        "name":  "수저가",
        "category":  "🍜중식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/651155763",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-16",
        "name":  "조조모모",
        "category":  "🍺술집",
        "location_small":  "방이동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/171171267",
        "location_large":  "서울 송파구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-16",
        "name":  "콘서트",
        "category":  "☕카페",
        "location_small":  "송파동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://map.naver.com/p/entry/place/1650418825",
        "location_large":  "서울 송파구",
        "menu":  [
                     "카페"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-06-15",
        "name":  "우동가조쿠 신촌점",
        "category":  "🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1160906124",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "우동"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-13",
        "name":  "개성손만두 마포점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-19",
        "name":  "금문중화요리",
        "category":  "🍜중식",
        "location_small":  "합정동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/174870783",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-13",
        "name":  "고기마니밥마니",
        "category":  "🍚한식, 🥩고기",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27290474",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼겹살"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-12",
        "name":  "웰빙봉평메일마을",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/662370482",
        "location_large":  "서울 마포구",
        "menu":  [
                     "막국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-12",
        "name":  "써브웨이 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/223880589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-11",
        "name":  "롤앤롤 김밥",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1581143656",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-11",
        "name":  "아우어베이커리 신촌숲길점",
        "category":  "☕카페",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2064598955",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-11",
        "name":  "처갓집양념치킨 염리점",
        "category":  "🍗치킨",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/8081328",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-10",
        "name":  "남매밥상",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/929653827",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고등어구이",
                     "제육볶음",
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-10",
        "name":  "애슐리퀸즈 현대유플렉스신촌점",
        "category":  "🍽️뷔페",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/317024934",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "뷔페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-09",
        "name":  "뽁순이볶음밥 마포점",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/338592317",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "볶음밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-25",
        "name":  "정든그릇",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1069804608",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "돈까스",
                     "메밀소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-24",
        "name":  "마포쌈밥식당",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1919542306",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌈밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-25",
        "name":  "삼첩분식 서울공덕점",
        "category":  "🍙분식",
        "location_small":  "도화동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/44467254",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-24",
        "name":  "꼬꼬로치킨 홍대점",
        "category":  "🍗치킨, 🍺술집",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/242944327",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-22",
        "name":  "남매밥상",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/929653827",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고등어구이",
                     "제육볶음",
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-23",
        "name":  "샨샨",
        "category":  "🍜중식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1231701730",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-23",
        "name":  "대한냉면 마포점",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1085817955",
        "location_large":  "서울 마포구",
        "menu":  [
                     "냉면"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-22",
        "name":  "두찜 마포신수점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1021203220",
        "location_large":  "서울 마포구",
        "menu":  [
                     "찜닭"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-07-21",
        "name":  "우리닭곰탕",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1089320134",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭곰탕",
                     "초계국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-21",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-16",
        "name":  "롯데리아 인천공항제2여객터미널점",
        "category":  "🍔패스트푸드",
        "location_small":  "운서동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1298926904",
        "location_large":  "인천 중구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-13",
        "name":  "문지리535",
        "category":  "☕카페",
        "location_small":  "탄현면",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1455161506",
        "location_large":  "경기 파주",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-13",
        "name":  "연대포",
        "category":  "🍚한식, 🍺술집",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/15516966",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "전"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-11",
        "name":  "담솥 신촌점",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1160182405",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "솥밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-10",
        "name":  "쿠츠",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/14544642",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-10",
        "name":  "고택",
        "category":  "🍺술집",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2059984663",
        "location_large":  "서울 용산구",
        "menu":  [
                     "갈비찜"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-09",
        "name":  "미소국수",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1347916642",
        "location_large":  "서울 마포구",
        "menu":  [
                     "국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-09",
        "name":  "굽네치킨 이대역점",
        "category":  "🍗치킨",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/164159610",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-08",
        "name":  "싸움의고수 신촌점",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27543827",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "보쌈"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-08",
        "name":  "대한냉면 마포점",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1085817955",
        "location_large":  "서울 마포구",
        "menu":  [
                     "냉면"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-07",
        "name":  "톨",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-07",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-06",
        "name":  "아벡쉐리",
        "category":  "☕카페",
        "location_small":  "한남동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/541563112",
        "location_large":  "서울 용산구",
        "menu":  [
                     "커피"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-06",
        "name":  "미도리야",
        "category":  "🍣일식, 🍺술집",
        "location_small":  "이태원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/24985617",
        "location_large":  "서울 용산구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-04",
        "name":  "거북이의 주방",
        "category":  "🍣일식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1401663204",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카레"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-04",
        "name":  "놀숲 프리미엄홍대점",
        "category":  "☕카페",
        "location_small":  "서교동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1265568839",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만화카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-03",
        "name":  "고블린피자",
        "category":  "🍕피자",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2036434781",
        "location_large":  "서울 마포구",
        "menu":  [
                     "파스타",
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-03",
        "name":  "버거리 신촌점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1556187939",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-02",
        "name":  "웰빙봉평메일마을",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/662370482",
        "location_large":  "서울 마포구",
        "menu":  [
                     "막국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-01",
        "name":  "미가",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16443006",
        "location_large":  "서울 마포구",
        "menu":  [
                     "제육볶음",
                     "파전"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-01",
        "name":  "신전떡볶이 신촌점",
        "category":  "🍙분식",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/545166130",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-29",
        "name":  "봉커피",
        "category":  "☕카페",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27419559",
        "location_large":  "경기 남양주",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-29",
        "name":  "완미족발 평내호평역점",
        "category":  "🍚한식, 🍺술집",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/777206145",
        "location_large":  "경기 남양주",
        "menu":  [
                     "족발"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-30",
        "name":  "수저가",
        "category":  "🍜중식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/651155763",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-06-30",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-09",
        "name":  "버거킹 마곡원그로브몰점",
        "category":  "🍔패스트푸드",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/546841062",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-08",
        "name":  "토끼정 KTX서울역사점",
        "category":  "🍣일식",
        "location_small":  "봉래동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/954522598",
        "location_large":  "서울 중구",
        "menu":  [
                     "돈까스",
                     "카레"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-08",
        "name":  "또보겠지떡볶이집 깐따비아점",
        "category":  "🍙분식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/895272833",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-07",
        "name":  "밀플랜비 서강대점",
        "category":  "🌮세계요리, 🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/960971083",
        "location_large":  "서울 마포구",
        "menu":  [
                     "브리또"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-07",
        "name":  "역대급피자 대흥점",
        "category":  "🍕피자",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1868923975",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-06",
        "name":  "하이포테이토",
        "category":  "🥗샐러드",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/908477259",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-06",
        "name":  "이박사의신동막걸리",
        "category":  "🍺술집",
        "location_small":  "용강동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/14536745",
        "location_large":  "서울 마포구",
        "menu":  [
                     "전",
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-05",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-04",
        "name":  "정월",
        "category":  "🍜중식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/131878421",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-05",
        "name":  "버거리 신촌점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1556187939",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-04",
        "name":  "카츠몬스터 연남본점",
        "category":  "🍣일식",
        "location_small":  "연남동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1988523643",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-02",
        "name":  "인크커피 다산점",
        "category":  "☕카페",
        "location_small":  "다산동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/585660022",
        "location_large":  "경기 남양주",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-02",
        "name":  "수제칼집생고기",
        "category":  "🥩고기",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/13597096",
        "location_large":  "경기 남양주",
        "menu":  [
                     "삼겹살"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-03",
        "name":  "함박연",
        "category":  "🍣일식",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1484816380",
        "location_large":  "경기 남양주",
        "menu":  [
                     "함박스테이크"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-03",
        "name":  "마치st118",
        "category":  "☕카페",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1602285730",
        "location_large":  "경기 남양주",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-01",
        "name":  "슬로우캘리 공덕점",
        "category":  "🥗샐러드",
        "location_small":  "신공덕동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/264285226",
        "location_large":  "서울 마포구",
        "menu":  [
                     "포케"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-01",
        "name":  "곤자가컨벤션",
        "category":  "🍚한식, 🍽️뷔페",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/8231583",
        "location_large":  "서울 마포구",
        "menu":  [
                     "뷔페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-31",
        "name":  "뀌노이",
        "category":  "🍝양식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1893522279",
        "location_large":  "서울 마포구",
        "menu":  [
                     "뇨끼",
                     "파스타"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-31",
        "name":  "이삭토스트 마포용강점",
        "category":  "🍔패스트푸드",
        "location_small":  "용강동",
        "rate":  "🥄🥄",
        "map_url":  "http://place.map.kakao.com/1095063794",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-30",
        "name":  "교촌치킨 신촌점",
        "category":  "🍗치킨",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/26602826",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-27",
        "name":  "콘서트",
        "category":  "☕카페",
        "location_small":  "송파동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://map.naver.com/p/entry/place/1650418825",
        "location_large":  "서울 송파구",
        "menu":  [
                     "카페"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-07-27",
        "name":  "개나리아구찜 송파본점",
        "category":  "🍚한식",
        "location_small":  "방이동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/143467064",
        "location_large":  "서울 송파구",
        "menu":  [
                     "아구찜"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-28",
        "name":  "롯데리아 마곡역점",
        "category":  "🍔패스트푸드",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/34199271",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-30",
        "name":  "카츠몬스터 연남본점",
        "category":  "🍣일식",
        "location_small":  "연남동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1988523643",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-29",
        "name":  "아이오밀",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1999464409",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오차즈케"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-29",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-28",
        "name":  "거북이의 주방",
        "category":  "🍣일식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1401663204",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카레"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-22",
        "name":  "한솥도시락 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1584071787",
        "location_large":  "서울 마포구",
        "menu":  [
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-21",
        "name":  "KFC 발산역점",
        "category":  "🍔패스트푸드",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1725139526",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-20",
        "name":  "을밀대",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/25048467",
        "location_large":  "서울 마포구",
        "menu":  [
                     "평양냉면"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-20",
        "name":  "스페샬나잇트 본점",
        "category":  "🍺술집",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/908159543",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-19",
        "name":  "프랭크버거 서강대점",
        "category":  "🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/834184731",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-18",
        "name":  "맥도날드 연세대점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/18606733",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-18",
        "name":  "복성각",
        "category":  "🍜중식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/7892863",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "짜장면",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-17",
        "name":  "오지오커피",
        "category":  "☕카페",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1631067502",
        "location_large":  "서울 강서구",
        "menu":  [
                     "커피",
                     "크루키"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-17",
        "name":  "마부자생삽겹살김치찌개",
        "category":  "🥩고기",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/143245596",
        "location_large":  "서울 강서구",
        "menu":  [
                     "삼겹살"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-16",
        "name":  "롯데리아 발산역점",
        "category":  "🍔패스트푸드",
        "location_small":  "등촌동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/14490394",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-15",
        "name":  "또보겠지떡볶이집 깐따비아점",
        "category":  "🍙분식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/895272833",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-14",
        "name":  "킹콩부대찌개 마포대흥오남매행복점",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1744462722",
        "location_large":  "서울 마포구",
        "menu":  [
                     "부대찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-14",
        "name":  "오토김밥 공덕점",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1163187809",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥",
                     "닭강정"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-13",
        "name":  "화육계",
        "category":  "🍚한식, 🥩고기",
        "location_small":  "을지로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/345283033",
        "location_large":  "서울 중구",
        "menu":  [
                     "닭발"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-13",
        "name":  "해운대 달맞이 빵",
        "category":  "☕카페",
        "location_small":  "저동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/768172634",
        "location_large":  "서울 중구",
        "menu":  [
                     "빵",
                     "커피"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-12",
        "name":  "한솥도시락 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1584071787",
        "location_large":  "서울 마포구",
        "menu":  [
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-12",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-11",
        "name":  "버거리 신촌점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1556187939",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-10",
        "name":  "쎈느",
        "category":  "☕카페",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1783691580",
        "location_large":  "서울 성동구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-10",
        "name":  "호감도",
        "category":  "🍺술집",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1362579800",
        "location_large":  "서울 성동구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-11",
        "name":  "신전떡볶이 신촌점",
        "category":  "🍙분식",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/545166130",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-13",
        "name":  "버거킹 마곡원그로브몰점",
        "category":  "🍔패스트푸드",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/546841062",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-12",
        "name":  "잼베이커리",
        "category":  "☕카페, 🥗샐러드",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/578311224",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-12",
        "name":  "츠케루 공덕",
        "category":  "🍣일식",
        "location_small":  "도화동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1596931299",
        "location_large":  "서울 마포구",
        "menu":  [
                     "라멘"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-11",
        "name":  "육회바른연어 대흥역점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/93909311",
        "location_large":  "서울 마포구",
        "menu":  [
                     "육회비빔밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-11",
        "name":  "바른치킨 서강대 로봇점",
        "category":  "🍗치킨",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1446748474",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-10",
        "name":  "용싸키친",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/15526292",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-10",
        "name":  "네임이즈마빈",
        "category":  "☕카페",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/631455576",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-08",
        "name":  "카츠와이찌 신촌점",
        "category":  "🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/28097791",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-09-10",
        "name":  "큐스닭강정",
        "category":  "🍗치킨",
        "location_small":  "망원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/19949548",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭강정"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-09",
        "name":  "아이오밀",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1999464409",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오차즈케"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-09",
        "name":  "파파이스 홍대점",
        "category":  "🍔패스트푸드",
        "location_small":  "서교동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/960562796",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-07",
        "name":  "스탠다드브레드 안국",
        "category":  "☕카페",
        "location_small":  "재동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1532324202",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-07",
        "name":  "천하보쌈",
        "category":  "🍚한식",
        "location_small":  "원서동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/10848372",
        "location_large":  "서울 종로구",
        "menu":  [
                     "보쌈"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-06",
        "name":  "롯데리아 발산역점",
        "category":  "🍔패스트푸드",
        "location_small":  "등촌동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/14490394",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-06",
        "name":  "겐로쿠우동 타임스퀘어점",
        "category":  "🍣일식",
        "location_small":  "영등포동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2000944918",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "우동"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-03",
        "name":  "잠연",
        "category":  "🍝양식, 🍣일식",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/745963542",
        "location_large":  "서울 용산구",
        "menu":  [
                     "퓨전요리"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-05",
        "name":  "톨",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-05",
        "name":  "또보겠지떡볶이집 깐따비아점",
        "category":  "🍙분식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/895272833",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-04",
        "name":  "떰즈업",
        "category":  "🍔패스트푸드",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/447354571",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-04",
        "name":  "고기왕창 자이언트비빔밥 홍대점",
        "category":  "🍚한식",
        "location_small":  "서교동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/495717982",
        "location_large":  "서울 마포구",
        "menu":  [
                     "육회비빔밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-02",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-02",
        "name":  "마포쌈밥식당",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1919542306",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌈밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-01",
        "name":  "마포광안리",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/364627237",
        "location_large":  "서울 마포구",
        "menu":  [
                     "육회비빔밥",
                     "회"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-01",
        "name":  "키친봄날",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1573253740",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-24",
        "name":  "카페꼬밍",
        "category":  "☕카페",
        "location_small":  "행당동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1583624066",
        "location_large":  "서울 성동구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-24",
        "name":  "왕십리소곱창",
        "category":  "🍚한식",
        "location_small":  "홍익동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1425389371",
        "location_large":  "서울 성동구",
        "menu":  [
                     "곱창"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-26",
        "name":  "김태완스시 마포점",
        "category":  "🍣일식",
        "location_small":  "도화동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1175874488",
        "location_large":  "서울 마포구",
        "menu":  [
                     "초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-26",
        "name":  "개성손만두 마포점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-25",
        "name":  "배떡 신촌점",
        "category":  "🍙분식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/842143619",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-27",
        "name":  "초량밀면",
        "category":  "🍚한식",
        "location_small":  "초량동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27365831",
        "location_large":  "부산 동구",
        "menu":  [
                     "밀면"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-28",
        "name":  "넉아웃",
        "category":  "☕카페",
        "location_small":  "부전동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/897675548",
        "location_large":  "부산 부산진구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-28",
        "name":  "이재모피자 서면점",
        "category":  "🍕피자",
        "location_small":  "전포동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/413556366",
        "location_large":  "부산 부산진구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-28",
        "name":  "개미집 광안리본점",
        "category":  "🍚한식",
        "location_small":  "광안동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/13719092",
        "location_large":  "부산 수영구",
        "menu":  [
                     "낙곱새"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-29",
        "name":  "안목 서면점",
        "category":  "🍚한식",
        "location_small":  "부전동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/942946257",
        "location_large":  "부산 부산진구",
        "menu":  [
                     "국밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-29",
        "name":  "베이크백",
        "category":  "☕카페",
        "location_small":  "초량동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/319656538",
        "location_large":  "부산 동구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-29",
        "name":  "임 갈매기살전문점",
        "category":  "🍚한식",
        "location_small":  "두류동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16635401",
        "location_large":  "대구 달서구",
        "menu":  [
                     "갈매기살"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-29",
        "name":  "안동생고기뭉티기",
        "category":  "🍚한식",
        "location_small":  "두류동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16453078",
        "location_large":  "대구 달서구",
        "menu":  [
                     "뭉티기"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-30",
        "name":  "세연콩국 본점",
        "category":  "🍚한식",
        "location_small":  "남산동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/14515978",
        "location_large":  "대구 중구",
        "menu":  [
                     "콩국",
                     "콩국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-30",
        "name":  "카이스샌드위치샵",
        "category":  "☕카페",
        "location_small":  "봉산동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/439067126",
        "location_large":  "대구 중구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-08-30",
        "name":  "버거킹 마곡점",
        "category":  "🍔패스트푸드",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/2147364653",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-07",
        "name":  "샤브20 서울발산역점",
        "category":  "🍚한식",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1768952564",
        "location_large":  "서울 강서구",
        "menu":  [
                     "샤브샤브"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-04",
        "name":  "덕수식당",
        "category":  "🍚한식",
        "location_small":  "태안읍 동문리",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/8891473",
        "location_large":  "충남 태안",
        "menu":  [
                     "간장게장",
                     "게국지"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-04",
        "name":  "바다풍경카페",
        "category":  "☕카페",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "about:blank",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-03",
        "name":  "슬로우써니사이드",
        "category":  "☕카페",
        "location_small":  "신풍동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1879123369",
        "location_large":  "경기 수원",
        "menu":  [
                     "브런치"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-03",
        "name":  "허스트커피",
        "category":  "☕카페",
        "location_small":  "신풍동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/998887356",
        "location_large":  "경기 수원",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-02",
        "name":  "용성통닭 본점",
        "category":  "🍗치킨",
        "location_small":  "행궁동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/8022147",
        "location_large":  "경기 수원",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-02",
        "name":  "위치앤그레텔",
        "category":  "☕카페",
        "location_small":  "연남동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/362902426",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-01",
        "name":  "태광식당",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27233428",
        "location_large":  "서울 마포구",
        "menu":  [
                     "백반"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-02",
        "name":  "하이포테이토",
        "category":  "🥗샐러드",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/908477259",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-01",
        "name":  "카츠와이찌 신촌점",
        "category":  "🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/28097791",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-09-30",
        "name":  "니즈버거 신촌점",
        "category":  "🍣일식",
        "location_small":  "창전동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/404326976",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-30",
        "name":  "달떡볶이 공덕점",
        "category":  "🍙분식",
        "location_small":  "공덕동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1034150132",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-29",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-29",
        "name":  "역대급피자 대흥점",
        "category":  "🍕피자",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1868923975",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-28",
        "name":  "마르케베이커리",
        "category":  "☕카페",
        "location_small":  "논현동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/114427899",
        "location_large":  "서울 강남구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-26",
        "name":  "남매밥상",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/929653827",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고등어구이",
                     "제육볶음",
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-28",
        "name":  "뱅뱅막국수 역삼본점",
        "category":  "🍚한식",
        "location_small":  "도곡동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1391619096",
        "location_large":  "서울 강남구",
        "menu":  [
                     "막국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-25",
        "name":  "핵밥 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1475631715",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-25",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-24",
        "name":  "톨",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-24",
        "name":  "윗유어스 혼신꼬치",
        "category":  "🍺술집",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/357150027",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭꼬치",
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-23",
        "name":  "덮덮밥 서울공덕점",
        "category":  "🍚한식",
        "location_small":  "도화동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/900914553",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-22",
        "name":  "한솥도시락 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1584071787",
        "location_large":  "서울 마포구",
        "menu":  [
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-22",
        "name":  "보배반점 공덕점",
        "category":  "🍜중식",
        "location_small":  "도화동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1365191842",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-21",
        "name":  "슈네켄베이크하우스",
        "category":  "☕카페",
        "location_small":  "자양동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/241702787",
        "location_large":  "서울 광진구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-21",
        "name":  "군자하루",
        "category":  "🍣일식, 🍺술집",
        "location_small":  "중곡동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/286712467",
        "location_large":  "서울 광진구",
        "menu":  [
                     "이자카야",
                     "회"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-19",
        "name":  "설빙 신촌점",
        "category":  "☕카페",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/24879347",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "빙수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-18",
        "name":  "보어드앤헝그리",
        "category":  "🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/108492868",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-18",
        "name":  "카츠와이찌 신촌점",
        "category":  "🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/28097791",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-09-17",
        "name":  "마포곱창타운",
        "category":  "🥩고기",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/10341266",
        "location_large":  "서울 마포구",
        "menu":  [
                     "곱창"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-16",
        "name":  "군자네",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "about:blank",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "갈치조림",
                     "고등어구이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-16",
        "name":  "두찜 마포신수점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1021203220",
        "location_large":  "서울 마포구",
        "menu":  [
                     "찜닭"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-09-15",
        "name":  "롤앤롤 김밥",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1581143656",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-15",
        "name":  "싸다김밥 신촌점",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/78558656",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-14",
        "name":  "산노루 삼성점",
        "category":  "☕카페",
        "location_small":  "삼성동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/737014061",
        "location_large":  "서울 강남구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-09-14",
        "name":  "동어동락 삼성본점",
        "category":  "🍚한식, 🍺술집",
        "location_small":  "삼성동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1751054299",
        "location_large":  "서울 강남구",
        "menu":  [
                     "회"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-07-02",
        "name":  "콘웰",
        "category":  "☕카페",
        "location_small":  "망원동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1909653777",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-31",
        "name":  "남매밥상",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/929653827",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고등어구이",
                     "제육볶음",
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-31",
        "name":  "아웃닭 구월점",
        "category":  "🍗치킨",
        "location_small":  "구월동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/245926998",
        "location_large":  "인천 남동구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-30",
        "name":  "고블린피자",
        "category":  "🍕피자",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2036434781",
        "location_large":  "서울 마포구",
        "menu":  [
                     "파스타",
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-30",
        "name":  "굽네치킨 이대역점",
        "category":  "🍗치킨",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/164159610",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-29",
        "name":  "롯데리아 대흥역점",
        "category":  "🍔패스트푸드",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/20012019",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-29",
        "name":  "미식가주택",
        "category":  "🍺술집",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/71272867",
        "location_large":  "서울 마포구",
        "menu":  [
                     "이자카야"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-28",
        "name":  "수저가",
        "category":  "🍜중식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/651155763",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-28",
        "name":  "로운 신촌본점",
        "category":  "🍚한식, 🍽️뷔페",
        "location_small":  "동교동",
        "rate":  "🥄🥄",
        "map_url":  "https://map.kakao.com/",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샤브샤브"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-27",
        "name":  "써브웨이 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/223880589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-27",
        "name":  "덮덮밥 서울공덕점",
        "category":  "🍚한식",
        "location_small":  "도화동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/900914553",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-26",
        "name":  "밴댕이가득한집놋그릇집",
        "category":  "🍚한식",
        "location_small":  "강화읍",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/9077469",
        "location_large":  "인천 강화군",
        "menu":  [
                     "회",
                     "회덮밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-26",
        "name":  "남강마황오리전문점",
        "category":  "🍚한식",
        "location_small":  "목동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/8881928",
        "location_large":  "서울 양천구",
        "menu":  [
                     "오리"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-25",
        "name":  "KFC 발산역점",
        "category":  "🍔패스트푸드",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1725139526",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-24",
        "name":  "효자오리바베큐",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/527000679",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오리"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-23",
        "name":  "삼첩분식 서울공덕점",
        "category":  "🍙분식",
        "location_small":  "도화동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/44467254",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-23",
        "name":  "버거리 신촌점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1556187939",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-22",
        "name":  "옥정",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1048556062",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-15",
        "name":  "교도리",
        "category":  "🍺술집",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/803910728",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭발"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-21",
        "name":  "스시이안앤 신촌점",
        "category":  "🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/512210695",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "회전초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-21",
        "name":  "두찜 마포신수점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1021203220",
        "location_large":  "서울 마포구",
        "menu":  [
                     "찜닭"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-10-20",
        "name":  "샤브로21 대흥",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/127867629",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샤브샤브"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-20",
        "name":  "돈까스브로스 마포공덕점",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1764886627",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-19",
        "name":  "차일디쉬",
        "category":  "☕카페",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2009228453",
        "location_large":  "서울 성동구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-19",
        "name":  "에이셉피자 성수점",
        "category":  "🍕피자",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/118259686",
        "location_large":  "서울 성동구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-19",
        "name":  "무근본",
        "category":  "🍺술집",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1167924540",
        "location_large":  "서울 성동구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-17",
        "name":  "샨샨",
        "category":  "🍜중식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1231701730",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-17",
        "name":  "사루카메 더현대서울",
        "category":  "🍣일식",
        "location_small":  "여의도동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/249194338",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "라멘"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-17",
        "name":  "서래함박 더현대서울",
        "category":  "🍣일식",
        "location_small":  "여의도동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/891364647",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "함박스테이크"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-16",
        "name":  "버거킹 신촌1점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/8375653",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-16",
        "name":  "효자오리바베큐",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/527000679",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오리"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-15",
        "name":  "마포광안리",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/364627237",
        "location_large":  "서울 마포구",
        "menu":  [
                     "육회비빔밥",
                     "회"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-22",
        "name":  "호요 홍대점",
        "category":  "🍺술집",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1145849878",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오꼬노미야끼"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-22",
        "name":  "락희돈",
        "category":  "🍺술집",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/814587106",
        "location_large":  "서울 마포구",
        "menu":  [
                     "꼬치",
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-14",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-14",
        "name":  "달떡볶이 공덕점",
        "category":  "🍙분식",
        "location_small":  "공덕동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1034150132",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-13",
        "name":  "밀플랜비 서강대점",
        "category":  "🌮세계요리, 🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/960971083",
        "location_large":  "서울 마포구",
        "menu":  [
                     "브리또"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-13",
        "name":  "덮덮밥 서울공덕점",
        "category":  "🍚한식",
        "location_small":  "도화동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/900914553",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-12",
        "name":  "일월일일",
        "category":  "☕카페",
        "location_small":  "명륜동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1877004477",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-12",
        "name":  "뇌산마을 대학로점",
        "category":  "🍚한식",
        "location_small":  "동숭동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/950481567",
        "location_large":  "서울 종로구",
        "menu":  [
                     "뼈구이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-10",
        "name":  "신전떡볶이 신촌점",
        "category":  "🍙분식",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/545166130",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-10",
        "name":  "두찜 마포신수점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1021203220",
        "location_large":  "서울 마포구",
        "menu":  [
                     "찜닭"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-10-09",
        "name":  "KFC 발산역점",
        "category":  "🍔패스트푸드",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1725139526",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-09",
        "name":  "파치마마 베이커리",
        "category":  "☕카페",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/370995699",
        "location_large":  "서울 용산구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-09",
        "name":  "부여식품 을지로점",
        "category":  "🥩고기",
        "location_small":  "인현동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/9802643",
        "location_large":  "서울 중구",
        "menu":  [
                     "막창",
                     "삼겹살"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-08",
        "name":  "신용산 닭한마리",
        "category":  "🍚한식",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/401374367",
        "location_large":  "서울 용산구",
        "menu":  [
                     "닭한마리"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-10-08",
        "name":  "할리스 용산아이파크몰점",
        "category":  "☕카페",
        "location_small":  "한강로",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1414818029",
        "location_large":  "서울 용산구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-20",
        "name":  "스시이안앤 신촌점",
        "category":  "🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/512210695",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "회전초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-19",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-19",
        "name":  "넨네",
        "category":  "🍺술집",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1188302034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "이자카야"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-18",
        "name":  "떰즈업",
        "category":  "🍔패스트푸드",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/447354571",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-18",
        "name":  "롤앤롤 김밥",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1581143656",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-17",
        "name":  "샐러디 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/205546197",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샐러드"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-17",
        "name":  "금문중화요리",
        "category":  "🍜중식",
        "location_small":  "합정동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/174870783",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-16",
        "name":  "BHC치킨 신촌점",
        "category":  "🍗치킨",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "about:blank",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-12",
        "name":  "롯데리아 서울역사점",
        "category":  "🍔패스트푸드",
        "location_small":  "봉래동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/7857647",
        "location_large":  "서울 중구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-12",
        "name":  "후지라멘",
        "category":  "🍣일식",
        "location_small":  "중앙동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27535990",
        "location_large":  "부산 중구",
        "menu":  [
                     "라멘"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-12",
        "name":  "명품상회",
        "category":  "🍚한식",
        "location_small":  "남포동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1243887880",
        "location_large":  "부산 중구",
        "menu":  [
                     "회"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-12",
        "name":  "깡돼후야시장",
        "category":  "🍗치킨",
        "location_small":  "부평동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/213124109",
        "location_large":  "부산 중구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-12",
        "name":  "이가네떡볶이 본점",
        "category":  "🍙분식",
        "location_small":  "부평동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/20204736",
        "location_large":  "부산 중구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-13",
        "name":  "젤라송",
        "category":  "☕카페",
        "location_small":  "암남동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/840073582",
        "location_large":  "부산 서구",
        "menu":  [
                     "젤라또"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-13",
        "name":  "부산꼼장어",
        "category":  "🍚한식",
        "location_small":  "남포동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/9809468",
        "location_large":  "부산 중구",
        "menu":  [
                     "꼼장어"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-14",
        "name":  "환공어묵",
        "category":  "🍙분식",
        "location_small":  "초량동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1063886095",
        "location_large":  "부산 동구",
        "menu":  [
                     "어묵"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-11",
        "name":  "개성손만두 마포점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-13",
        "name":  "왕중왕만두",
        "category":  "🍙분식, 🍜중식",
        "location_small":  "부평동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1563786166",
        "location_large":  "부산 중구",
        "menu":  [
                     "만두"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-14",
        "name":  "버거킹 마곡원그로브몰점",
        "category":  "🍔패스트푸드",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/546841062",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-11",
        "name":  "굽네치킨 이대역점",
        "category":  "🍗치킨",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/164159610",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-10",
        "name":  "샌디 빌리지",
        "category":  "🥗샐러드",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/326057387",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치",
                     "샐러드"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-09",
        "name":  "뚜레쥬르 제일제당센터점",
        "category":  "☕카페",
        "location_small":  "쌍림동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/15686257",
        "location_large":  "서울 중구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-09",
        "name":  "7.8 을지로",
        "category":  "🍺술집",
        "location_small":  "주교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1425843424",
        "location_large":  "서울 중구",
        "menu":  [
                     "막걸리"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-08",
        "name":  "일일미미",
        "category":  "🍜중식",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/923480400",
        "location_large":  "서울 강서구",
        "menu":  [
                     "짜장면"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-07",
        "name":  "서강주막",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1166611413",
        "location_large":  "서울 마포구",
        "menu":  [
                     "보쌈"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-07",
        "name":  "뺑스톡 공덕점",
        "category":  "☕카페",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/822254572",
        "location_large":  "서울 마포구",
        "menu":  [
                     "빵"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-06",
        "name":  "쿠츠",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/14544642",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-06",
        "name":  "교촌치킨 신촌점",
        "category":  "🍗치킨",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/26602826",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-05",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-05",
        "name":  "고택",
        "category":  "🍺술집",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2059984663",
        "location_large":  "서울 용산구",
        "menu":  [
                     "갈비찜"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-04",
        "name":  "멘토미",
        "category":  "🍣일식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1938091586",
        "location_large":  "서울 마포구",
        "menu":  [
                     "가츠동",
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-04",
        "name":  "파파이스 홍대점",
        "category":  "🍔패스트푸드",
        "location_small":  "서교동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/960562796",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-03",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-03",
        "name":  "싸다김밥 신촌점",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/78558656",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-02",
        "name":  "크레뮤클럽",
        "category":  "☕카페",
        "location_small":  "송파동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/81791583",
        "location_large":  "서울 송파구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-02",
        "name":  "도래집 잠실방이점",
        "category":  "🥩고기",
        "location_small":  "방이동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/185071604",
        "location_large":  "서울 송파구",
        "menu":  [
                     "도래창"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-01",
        "name":  "오구피자 명덕점",
        "category":  "🍕피자",
        "location_small":  "내발산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/12520232",
        "location_large":  "서울 강서구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-13",
        "name":  "복호두 마곡역점",
        "category":  "☕카페",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/450606222",
        "location_large":  "서울 강서구",
        "menu":  [
                     "호두과자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-12",
        "name":  "맘스터치 마포대흥역점",
        "category":  "🍔패스트푸드",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1679593996",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-11",
        "name":  "유자유김치떡볶이 신촌점",
        "category":  "🍙분식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/104532017",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-11",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-10",
        "name":  "우얼소곱창 마포직영점",
        "category":  "🥩고기",
        "location_small":  "도화동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/826560438",
        "location_large":  "서울 마포구",
        "menu":  [
                     "곱창"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-08",
        "name":  "한솥도시락 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1584071787",
        "location_large":  "서울 마포구",
        "menu":  [
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-09",
        "name":  "거구장",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/77380285",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돼지고기",
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-07",
        "name":  "몽상",
        "category":  "☕카페",
        "location_small":  "문래동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/843025334",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-07",
        "name":  "그뭄족발 본점",
        "category":  "🍚한식, 🥩고기",
        "location_small":  "문래동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1210497999",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "족발"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-05",
        "name":  "버그네차돌불고기",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/18539594",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김치찌개",
                     "불고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-05",
        "name":  "KFC 발산역점",
        "category":  "🍔패스트푸드",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1725139526",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-04",
        "name":  "프랭크버거 서강대점",
        "category":  "🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/834184731",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-04",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-03",
        "name":  "투다리 신촌1호점",
        "category":  "🍺술집",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/106595995",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-02",
        "name":  "거북이의 주방",
        "category":  "🍣일식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1401663204",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카레"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-01",
        "name":  "밀플랜비 서강대점",
        "category":  "🌮세계요리, 🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/960971083",
        "location_large":  "서울 마포구",
        "menu":  [
                     "브리또"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-09",
        "name":  "노모어피자",
        "category":  "🍕피자",
        "location_small":  "서교동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/133054294",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-30",
        "name":  "상록수",
        "category":  "🥩고기",
        "location_small":  "청파동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/572302487",
        "location_large":  "서울 용산구",
        "menu":  [
                     "삼겹살"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-29",
        "name":  "파툼",
        "category":  "☕카페",
        "location_small":  "삼청동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/8113742",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-29",
        "name":  "미트볼라운지",
        "category":  "🍝양식",
        "location_small":  "팔판동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/240698532",
        "location_large":  "서울 종로구",
        "menu":  [
                     "파스타"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-29",
        "name":  "FOWS(파우스)",
        "category":  "☕카페",
        "location_small":  "삼청동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1265107117",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-28",
        "name":  "개성손만두 마포점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-27",
        "name":  "신전떡볶이 신촌점",
        "category":  "🍙분식",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/545166130",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-05",
        "name":  "톨",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-26",
        "name":  "현이네회시장",
        "category":  "🍚한식",
        "location_small":  "망원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1878597817",
        "location_large":  "서울 마포구",
        "menu":  [
                     "회"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-25",
        "name":  "다람쥐곳간 마곡점",
        "category":  "☕카페",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/102871137",
        "location_large":  "서울 강서구",
        "menu":  [
                     "호두과자"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-25",
        "name":  "버거킹 신촌1점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/8375653",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-24",
        "name":  "지지고 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/368211608",
        "location_large":  "서울 마포구",
        "menu":  [
                     "컵밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-23",
        "name":  "방이동쭈꾸미",
        "category":  "🍚한식",
        "location_small":  "방이동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/13290448",
        "location_large":  "서울 송파구",
        "menu":  [
                     "쭈꾸미"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-23",
        "name":  "밀빛",
        "category":  "☕카페",
        "location_small":  "송파동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1346816522",
        "location_large":  "서울 송파구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-21",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-21",
        "name":  "스아게K",
        "category":  "🍣일식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/138967530",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카레"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-27",
        "name":  "레뽀드라라 강남점",
        "category":  "☕카페",
        "location_small":  "역삼동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1586942536",
        "location_large":  "서울 강남구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-27",
        "name":  "감탄계숯불치킨 강남점",
        "category":  "🍗치킨",
        "location_small":  "역삼동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/413386069",
        "location_large":  "서울 강남구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-26",
        "name":  "해주찹쌀순대",
        "category":  "🍚한식",
        "location_small":  "잠실동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/17811923",
        "location_large":  "서울 송파구",
        "menu":  [
                     "국밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-26",
        "name":  "맥도날드 연세대점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/18606733",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-24",
        "name":  "또보겠지떡볶이집 깐따비아점",
        "category":  "🍙분식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/895272833",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-23",
        "name":  "왔쏘 홍대점",
        "category":  "🥩고기",
        "location_small":  "서교동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/295479292",
        "location_large":  "서울 마포구",
        "menu":  [
                     "소고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-23",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-22",
        "name":  "KFC 신촌역점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/692703127",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-22",
        "name":  "유부선생 서강대점",
        "category":  "🍙분식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1799052538",
        "location_large":  "서울 마포구",
        "menu":  [
                     "유부초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-21",
        "name":  "콘서트",
        "category":  "☕카페",
        "location_small":  "송파동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://map.naver.com/p/entry/place/1650418825",
        "location_large":  "서울 송파구",
        "menu":  [
                     "카페"
                 ],
        "closed":  true
    },
    {
        "date":  "2025-12-20",
        "name":  "밀플랜비 서강대점",
        "category":  "🌮세계요리, 🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/960971083",
        "location_large":  "서울 마포구",
        "menu":  [
                     "브리또"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-19",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-19",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-18",
        "name":  "역전할머니맥주 서울방이점",
        "category":  "🍺술집",
        "location_small":  "방이동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1970587460",
        "location_large":  "서울 송파구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-18",
        "name":  "고드니",
        "category":  "☕카페",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/700615587",
        "location_large":  "서울 강서구",
        "menu":  [
                     "카페",
                     "휘낭시에"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-17",
        "name":  "스시로 명동성당점",
        "category":  "🍣일식",
        "location_small":  "명동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1353238103",
        "location_large":  "서울 중구",
        "menu":  [
                     "회전초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-17",
        "name":  "팥고당 명동본점",
        "category":  "☕카페",
        "location_small":  "명동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/414539288",
        "location_large":  "서울 중구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-16",
        "name":  "히노키공방",
        "category":  "🍣일식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/12273254",
        "location_large":  "서울 마포구",
        "menu":  [
                     "백반"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-15",
        "name":  "한강서초순대국",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/12044566",
        "location_large":  "서울 마포구",
        "menu":  [
                     "국밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-16",
        "name":  "끼로끼로부엉이",
        "category":  "🥩고기",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27383419",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돼지고기",
                     "소고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-14",
        "name":  "BHC치킨 신촌점",
        "category":  "🍗치킨",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "about:blank",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-13",
        "name":  "마포쌈밥식당",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1919542306",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌈밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-12",
        "name":  "개성손만두 마포점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-14",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-13",
        "name":  "롯데리아 대흥역점",
        "category":  "🍔패스트푸드",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/20012019",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-12",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-11",
        "name":  "에디션엠",
        "category":  "☕카페",
        "location_small":  "명륜동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1761099960",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-11",
        "name":  "04판 대학로점",
        "category":  "🍗치킨, 🍚한식",
        "location_small":  "명륜동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1520170130",
        "location_large":  "서울 종로구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-10",
        "name":  "하루",
        "category":  "🍚한식, 🍺술집",
        "location_small":  "화곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/122968001",
        "location_large":  "서울 강서구",
        "menu":  [
                     "회"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-08",
        "name":  "신촌버거",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/283933287",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-08",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-07",
        "name":  "경호네",
        "category":  "🍺술집",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/365481447",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "closed":  true
    },
    {
        "date":  "2026-01-07",
        "name":  "꼬꼬로치킨 홍대점",
        "category":  "🍗치킨, 🍺술집",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/242944327",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-06",
        "name":  "이태리부대찌개 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1609712037",
        "location_large":  "서울 마포구",
        "menu":  [
                     "부대찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-11-26",
        "name":  "톨",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-04",
        "name":  "피아이씨",
        "category":  "☕카페",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1952568266",
        "location_large":  "경기 남양주",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-04",
        "name":  "쿠슈울트라라멘 평내호평점",
        "category":  "🍣일식",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/992018359",
        "location_large":  "경기 남양주",
        "menu":  [
                     "라멘"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-03",
        "name":  "오리촌",
        "category":  "🍚한식, 🥩고기",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/9317412",
        "location_large":  "경기 남양주",
        "menu":  [
                     "오리"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-02",
        "name":  "홍원",
        "category":  "🍜중식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/13083730",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-31",
        "name":  "유닭스토리 닭한마리 신촌점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/20012019",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭한마리"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-31",
        "name":  "연가닭강정 대흥점",
        "category":  "🍗치킨, 🍙분식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1024205713",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭강정"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-30",
        "name":  "미가",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16443006",
        "location_large":  "서울 마포구",
        "menu":  [
                     "제육볶음",
                     "파전"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-29",
        "name":  "지미존스 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/937173939",
        "location_large":  "서울 마포구",
        "menu":  [
                     "브리또"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-28",
        "name":  "오드커피하우스",
        "category":  "☕카페",
        "location_small":  "자양동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1353991558",
        "location_large":  "서울 광진구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2025-12-28",
        "name":  "미식일가",
        "category":  "🍺술집",
        "location_small":  "군자동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27229361",
        "location_large":  "서울 광진구",
        "menu":  [
                     "조개구이"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-30",
        "name":  "광주똑순이아구찜",
        "category":  "🍚한식",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27501934",
        "location_large":  "서울 강서구",
        "menu":  [
                     "아구찜"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-30",
        "name":  "설빙 발산점",
        "category":  "☕카페",
        "location_small":  "등촌동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/26644158",
        "location_large":  "서울 강서구",
        "menu":  [
                     "빙수"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-29",
        "name":  "버거킹 신촌1점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/8375653",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-29",
        "name":  "이자카야 우규 신촌점",
        "category":  "🍺술집",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/770326605",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "이자카야"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-29",
        "name":  "혼신꼬치 신촌점",
        "category":  "🍺술집",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/357150027",
        "location_large":  "서울 마포구",
        "menu":  [
                     "꼬치",
                     "이자카야"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-27",
        "name":  "리정원 대흥점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1448096292",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼겹살",
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-28",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-28",
        "name":  "중화객잔수",
        "category":  "🍜중식",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/211096332",
        "location_large":  "서울 용산구",
        "menu":  [
                     "짜장면",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-26",
        "name":  "오므파탈",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1539064922",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "오므라이스"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-25",
        "name":  "루앨드파리 서초본점",
        "category":  "☕카페",
        "location_small":  "서초동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/26455895",
        "location_large":  "서울 서초구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-25",
        "name":  "송계옥 교대점",
        "category":  "🥩고기",
        "location_small":  "서초동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1621224124",
        "location_large":  "서울 서초구",
        "menu":  [
                     "닭고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-24",
        "name":  "버거킹 마곡원그로브몰점",
        "category":  "🍔패스트푸드",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/546841062",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-23",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-23",
        "name":  "뺑스톡 공덕점",
        "category":  "☕카페",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/822254572",
        "location_large":  "서울 마포구",
        "menu":  [
                     "빵"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-26",
        "name":  "에뚜왈 신촌점",
        "category":  "☕카페",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/81542663",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-23",
        "name":  "수저가",
        "category":  "🍜중식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/651155763",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-22",
        "name":  "신촌수제비",
        "category":  "🍚한식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/12502450",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "수제비"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-21",
        "name":  "고기마니밥마니",
        "category":  "🍚한식, 🥩고기",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27290474",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼겹살"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-21",
        "name":  "피자스쿨 이대점",
        "category":  "🍕피자",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1235214382",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-20",
        "name":  "거북이의 주방",
        "category":  "🍣일식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1401663204",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카레"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-19",
        "name":  "KFC 신촌역점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/692703127",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-18",
        "name":  "베이커리 아궁",
        "category":  "☕카페",
        "location_small":  "관철동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/265446905",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-18",
        "name":  "장군굴보쌈",
        "category":  "🍚한식, 🥩고기",
        "location_small":  "관수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/10731091",
        "location_large":  "서울 종로구",
        "menu":  [
                     "보쌈"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-17",
        "name":  "오토김밥 마곡점",
        "category":  "🍚한식",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1184366929",
        "location_large":  "서울 강서구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-16",
        "name":  "동래정 대흥점",
        "category":  "🍚한식, 🥩고기",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/200708589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "국밥",
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-16",
        "name":  "또보겠지떡볶이집 깐따비아점",
        "category":  "🍙분식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/895272833",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-15",
        "name":  "아이오밀",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1999464409",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오차즈케"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-01-15",
        "name":  "일호단팥",
        "category":  "☕카페",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/59940969",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-13",
        "name":  "마포쌈밥식당",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1919542306",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌈밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-14",
        "name":  "뜯고기 신용산본점",
        "category":  "🍚한식, 🥩고기",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/34618391",
        "location_large":  "서울 용산구",
        "menu":  [
                     "등갈비"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-14",
        "name":  "스탠다드번",
        "category":  "☕카페",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1322951657",
        "location_large":  "서울 용산구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-12",
        "name":  "롯데리아 신촌역점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/623338539",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-11",
        "name":  "BHC치킨 신촌점",
        "category":  "🍗치킨",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "about:blank",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-10",
        "name":  "홍콩반점0410 대흥역점",
        "category":  "🍜중식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/336646124",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-10",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-09",
        "name":  "기요한",
        "category":  "🍣일식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/736634882",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카이센동"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-08",
        "name":  "송고집왕족발 본점",
        "category":  "🍚한식, 🥩고기",
        "location_small":  "내발산동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/21324937",
        "location_large":  "서울 강서구",
        "menu":  [
                     "족발"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-06",
        "name":  "롤앤롤 김밥",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1581143656",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-05",
        "name":  "동대문엽기떡볶이 신촌점",
        "category":  "🍙분식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/17764441",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-04",
        "name":  "동식탁",
        "category":  "🍺술집",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1797119835",
        "location_large":  "서울 용산구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-04",
        "name":  "파친코",
        "category":  "🍺술집",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1142997501",
        "location_large":  "서울 용산구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-04",
        "name":  "프랭크버거 서강대점",
        "category":  "🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/834184731",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-03",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-03",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-02",
        "name":  "소바연구소",
        "category":  "🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2114260452",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "메밀소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-01",
        "name":  "오우뉴",
        "category":  "☕카페",
        "location_small":  "신당동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/104846297",
        "location_large":  "서울 중구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-01",
        "name":  "짚뿔닭발",
        "category":  "🍺술집, 🥩고기",
        "location_small":  "흥인동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/267213453",
        "location_large":  "서울 중구",
        "menu":  [
                     "닭발"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-10",
        "name":  "정월",
        "category":  "🍜중식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/131878421",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-09",
        "name":  "마포닭곰탕 본점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/17361050",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭곰탕",
                     "부대찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-09",
        "name":  "한솥도시락 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1584071787",
        "location_large":  "서울 마포구",
        "menu":  [
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-08",
        "name":  "정과자점",
        "category":  "☕카페",
        "location_small":  "연남동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/103046351",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-08",
        "name":  "평화남영 문래점",
        "category":  "🍺술집",
        "location_small":  "문래동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2098181745",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "이자카야"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-07",
        "name":  "버거킹 마곡원그로브몰점",
        "category":  "🍔패스트푸드",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/546841062",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-06",
        "name":  "청석골감자탕순대국",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/15455029",
        "location_large":  "서울 마포구",
        "menu":  [
                     "감자탕"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-05",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-04",
        "name":  "고미카츠",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-13",
        "name":  "동학",
        "category":  "🍚한식, 🍺술집",
        "location_small":  "공릉동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16329163",
        "location_large":  "서울 노원구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-13",
        "name":  "맥도날드 연세대점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/18606733",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-18",
        "name":  "TOL",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-17",
        "name":  "한강서초순대국",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/12044566",
        "location_large":  "서울 마포구",
        "menu":  [
                     "국밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-18",
        "name":  "한솥도시락 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1584071787",
        "location_large":  "서울 마포구",
        "menu":  [
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-17",
        "name":  "써브웨이 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/223880589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-16",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-15",
        "name":  "9램",
        "category":  "☕카페",
        "location_small":  "망원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/173906030",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-15",
        "name":  "조개우물보쌈",
        "category":  "🍚한식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1002637700",
        "location_large":  "서울 마포구",
        "menu":  [
                     "보쌈"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-14",
        "name":  "동대문엽기떡볶이 남양주호평점",
        "category":  "🍙분식",
        "location_small":  "호평동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1284557301",
        "location_large":  "경기 남양주",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-14",
        "name":  "탄탄면공방 더 블랙 원그로브점",
        "category":  "🍜중식",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1825701689",
        "location_large":  "서울 강서구",
        "menu":  [
                     "탄탄면"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-12",
        "name":  "킹콩부대찌개 마포대흥오남매행복점",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1744462722",
        "location_large":  "서울 마포구",
        "menu":  [
                     "부대찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-11",
        "name":  "옛날돈까스",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/674504424",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-03",
        "name":  "미가",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16443006",
        "location_large":  "서울 마포구",
        "menu":  [
                     "제육볶음",
                     "파전"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-03",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-02",
        "name":  "엄용백돼지국밥 종각점",
        "category":  "🍚한식",
        "location_small":  "인사동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/416934208",
        "location_large":  "서울 종로구",
        "menu":  [
                     "국밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-02",
        "name":  "소하염전 익선점",
        "category":  "☕카페",
        "location_small":  "익선동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1130146507",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-01",
        "name":  "뼈탄집",
        "category":  "🥩고기",
        "location_small":  "내자동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1993931194",
        "location_large":  "서울 종로구",
        "menu":  [
                     "삼겹살"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-28",
        "name":  "맘스터치 마곡역홈앤쇼핑점",
        "category":  "🍔패스트푸드",
        "location_small":  "마곡동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1407853054",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-27",
        "name":  "수저가",
        "category":  "🍜중식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/651155763",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-27",
        "name":  "연가닭강정 대흥점",
        "category":  "🍗치킨, 🍙분식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1024205713",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭강정"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-20",
        "name":  "찐쭈",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1808390476",
        "location_large":  "서울 마포구",
        "menu":  [
                     "불고기",
                     "쭈꾸미불고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-19",
        "name":  "계순내닭강정",
        "category":  "🍗치킨",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1475248000",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭강정"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-18",
        "name":  "코이크",
        "category":  "☕카페",
        "location_small":  "연남동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/727239043",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-02-18",
        "name":  "마포곱창타운",
        "category":  "🥩고기",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/10341266",
        "location_large":  "서울 마포구",
        "menu":  [
                     "곱창"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-05",
        "name":  "보어드앤헝그리",
        "category":  "🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/108492868",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-01",
        "name":  "럼버잭",
        "category":  "☕카페",
        "location_small":  "부암동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/20941365",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-30",
        "name":  "숲길돈가스",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/145404038",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-29",
        "name":  "퀸즈베리도넛하우스",
        "category":  "☕카페",
        "location_small":  "신당동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1557643957",
        "location_large":  "서울 중구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-29",
        "name":  "김가네 한옥마을점",
        "category":  "🍚한식",
        "location_small":  "필동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/8191243",
        "location_large":  "서울 중구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-29",
        "name":  "다모토리히읗",
        "category":  "🍺술집",
        "location_small":  "용산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/11794306",
        "location_large":  "서울 용산구",
        "menu":  [
                     "술집",
                     "파전"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-27",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-27",
        "name":  "피자스쿨 대흥역점",
        "category":  "🍕피자",
        "location_small":  "대흥동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/25781457",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-26",
        "name":  "왁버거 홍대입구역점",
        "category":  "🍔패스트푸드",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/280575941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-26",
        "name":  "한솥도시락 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1584071787",
        "location_large":  "서울 마포구",
        "menu":  [
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-25",
        "name":  "밀플랜비 서강대점",
        "category":  "🌮세계요리, 🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/960971083",
        "location_large":  "서울 마포구",
        "menu":  [
                     "브리또"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-24",
        "name":  "버그네차돌불고기",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/18539594",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김치찌개",
                     "불고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-23",
        "name":  "수저가",
        "category":  "🍜중식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/651155763",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-22",
        "name":  "피롤츠 커피하우스",
        "category":  "☕카페",
        "location_small":  "태평로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/115474774",
        "location_large":  "서울 중구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-22",
        "name":  "단막 종각점",
        "category":  "🥩고기",
        "location_small":  "관철동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/944030617",
        "location_large":  "서울 종로구",
        "menu":  [
                     "막창"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-20",
        "name":  "계순내닭강정",
        "category":  "🍗치킨",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1475248000",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭강정"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-24",
        "name":  "계순내닭강정",
        "category":  "🍗치킨",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1475248000",
        "location_large":  "서울 마포구",
        "menu":  [
                     "닭강정"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-20",
        "name":  "KFC 신촌역점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/692703127",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-20",
        "name":  "롯데리아 대흥역점",
        "category":  "🍔패스트푸드",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/20012019",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-19",
        "name":  "버그네차돌불고기",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/18539594",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김치찌개",
                     "불고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-03-19",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-17",
        "name":  "불턱버거 2021",
        "category":  "🍔패스트푸드",
        "location_small":  "대포동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27850475",
        "location_large":  "제주 서귀포",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-17",
        "name":  "제라헌 본점",
        "category":  "☕카페",
        "location_small":  "동문시장",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/899155913",
        "location_large":  "제주 제주",
        "menu":  [
                     "떡"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-16",
        "name":  "두리둠비 제주중문본점",
        "category":  "🍚한식",
        "location_small":  "색달동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/221479836",
        "location_large":  "제주 서귀포",
        "menu":  [
                     "순두부"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-16",
        "name":  "제주오성 순살갈치조림",
        "category":  "🍚한식",
        "location_small":  "색달동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/10627937",
        "location_large":  "제주 서귀포",
        "menu":  [
                     "갈치조림"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-16",
        "name":  "마농치킨 본점",
        "category":  "🍗치킨",
        "location_small":  "중앙동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/11291724",
        "location_large":  "제주 서귀포",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-15",
        "name":  "먹돌고기국수 제주본점",
        "category":  "🍚한식",
        "location_small":  "제주공항",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1588732308",
        "location_large":  "제주 제주",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-15",
        "name":  "아베베베이커리 제주",
        "category":  "☕카페",
        "location_small":  "동문시장",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/587249375",
        "location_large":  "제주 제주",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-15",
        "name":  "풍로 중문직영점",
        "category":  "🥩고기",
        "location_small":  "색달동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/106372237",
        "location_large":  "제주 서귀포",
        "menu":  [
                     "삼겹살"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-15",
        "name":  "BHC치킨 중문점",
        "category":  "🍗치킨, 🍺술집",
        "location_small":  "색달동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1887034298",
        "location_large":  "제주 서귀포",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-14",
        "name":  "또보겠지떡볶이집 깐따비아점",
        "category":  "🍙분식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/895272833",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-13",
        "name":  "마포쌈밥식당",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1919542306",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌈밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-11",
        "name":  "뽁식당 신촌점",
        "category":  "🍝양식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/298384195",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "파스타"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-13",
        "name":  "샐러디 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/205546197",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샐러드"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-11",
        "name":  "더파이홀",
        "category":  "☕카페",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1011256721",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-10",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-10",
        "name":  "동대문엽기떡볶이 마포공덕점",
        "category":  "🍙분식",
        "location_small":  "염리동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/18657538",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-10",
        "name":  "교촌치킨 신수점",
        "category":  "🍗치킨",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/19392082",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-09",
        "name":  "홍원",
        "category":  "🍜중식",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/13083730",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-09",
        "name":  "돈까스브로스 마포공덕점",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1764886627",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-08",
        "name":  "아비꼬 신촌점",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/17735995",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "카레"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-07",
        "name":  "롯데리아 대흥역점",
        "category":  "🍔패스트푸드",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/20012019",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-06",
        "name":  "TOL",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-05",
        "name":  "코우이",
        "category":  "☕카페",
        "location_small":  "삼선동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1869705473",
        "location_large":  "서울 성북구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-05",
        "name":  "천막집",
        "category":  "🥩고기",
        "location_small":  "동선동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1925267112",
        "location_large":  "서울 성북구",
        "menu":  [
                     "삼겹살"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-16",
        "name":  "포케올데이 마곡점",
        "category":  "🥗샐러드",
        "location_small":  "마곡동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/2042213205",
        "location_large":  "서울 강서구",
        "menu":  [
                     "포케"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-15",
        "name":  "피자몰 신촌점",
        "category":  "🍕피자",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/27048302",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-15",
        "name":  "명량핫도그 연희점",
        "category":  "🍙분식",
        "location_small":  "연희동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/886981259",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "핫도그"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-13",
        "name":  "TOL",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-14",
        "name":  "KFC 신촌역점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/692703127",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-12",
        "name":  "마포쌈밥식당",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1919542306",
        "location_large":  "서울 마포구",
        "menu":  [
                     "쌈밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-12",
        "name":  "카라멘야",
        "category":  "🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1025832828",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "라멘"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-11",
        "name":  "정월",
        "category":  "🍜중식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/131878421",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-11",
        "name":  "이삭토스트 마포용강점",
        "category":  "🍔패스트푸드",
        "location_small":  "용강동",
        "rate":  "🥄🥄",
        "map_url":  "http://place.map.kakao.com/1095063794",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-10",
        "name":  "스타벅스 파미에파크R점",
        "category":  "☕카페",
        "location_small":  "반포동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/25502514",
        "location_large":  "서울 서초구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-10",
        "name":  "오몬자",
        "category":  "🍣일식, 🍺술집",
        "location_small":  "역삼동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/465871230",
        "location_large":  "서울 강남구",
        "menu":  [
                     "몬자야끼",
                     "오꼬노미야끼"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-09",
        "name":  "키친 205",
        "category":  "☕카페",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1337140142",
        "location_large":  "서울 마포구",
        "menu":  [
                     "케이크"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-09",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-08",
        "name":  "떰즈업",
        "category":  "🍔패스트푸드",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/447354571",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-08",
        "name":  "두찜 마포신수점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1021203220",
        "location_large":  "서울 마포구",
        "menu":  [
                     "찜닭"
                 ],
        "closed":  true
    },
    {
        "date":  "2026-05-07",
        "name":  "가마로강정 잠실새내역점",
        "category":  "🍗치킨",
        "location_small":  "잠실동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1396396658",
        "location_large":  "서울 송파구",
        "menu":  [
                     "닭강정"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-06",
        "name":  "고블린피자",
        "category":  "🍕피자",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2036434781",
        "location_large":  "서울 마포구",
        "menu":  [
                     "파스타",
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-06",
        "name":  "카페252",
        "category":  "☕카페",
        "location_small":  "상봉동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/131735695",
        "location_large":  "서울 중랑구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-06",
        "name":  "동대문엽기떡볶이 신촌점",
        "category":  "🍙분식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/17764441",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-05",
        "name":  "우동가조쿠 신촌점",
        "category":  "🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1160906124",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "우동"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-05",
        "name":  "KFC 신촌역점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/692703127",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-02",
        "name":  "갓잇 용산점",
        "category":  "🌮세계요리",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2027527525",
        "location_large":  "서울 용산구",
        "menu":  [
                     "타코"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-01",
        "name":  "오레타치카레",
        "category":  "🍣일식",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/925178825",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카레"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-01",
        "name":  "박포식육식당",
        "category":  "🥩고기",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/661769676",
        "location_large":  "경기 남양주",
        "menu":  [
                     "삼겹살"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-04",
        "name":  "효자오리바베큐",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/527000679",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오리"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-09",
        "name":  "맛찬들왕소금구이 발산점",
        "category":  "🥩고기",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/21360116",
        "location_large":  "서울 강서구",
        "menu":  [
                     "삼겹살"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-30",
        "name":  "카츠하나비",
        "category":  "🍣일식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1552499190",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-30",
        "name":  "밀크빌리지",
        "category":  "☕카페",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1111660019",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-06",
        "name":  "썸이프",
        "category":  "☕카페",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1770013018",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-30",
        "name":  "스시히바리",
        "category":  "🍣일식",
        "location_small":  "아현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/80394697",
        "location_large":  "서울 마포구",
        "menu":  [
                     "초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-29",
        "name":  "개성손만두 마포점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/167873776",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-28",
        "name":  "버그네차돌불고기",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/18539594",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김치찌개",
                     "불고기"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-27",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-27",
        "name":  "노브랜드버거 신촌점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1324490254",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-26",
        "name":  "미크",
        "category":  "☕카페",
        "location_small":  "송파동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1068012698",
        "location_large":  "서울 송파구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-26",
        "name":  "야끼토리잔잔 방이직역점",
        "category":  "🍣일식, 🍺술집",
        "location_small":  "방이동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/488762146",
        "location_large":  "서울 송파구",
        "menu":  [
                     "이자카야"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-25",
        "name":  "맘스터치 마포대흥역점",
        "category":  "🍔패스트푸드",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1679593996",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-24",
        "name":  "동래정 대흥점",
        "category":  "🍚한식, 🥩고기",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/200708589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "국밥",
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-24",
        "name":  "노모어피자",
        "category":  "🍕피자",
        "location_small":  "서교동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/133054294",
        "location_large":  "서울 마포구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-23",
        "name":  "세끼김밥",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/742902254",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-22",
        "name":  "프랭크버거 서강대점",
        "category":  "🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/834184731",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-22",
        "name":  "엄마애밥상",
        "category":  "🍚한식",
        "location_small":  "성산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/980558746",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥",
                     "도시락"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-21",
        "name":  "웰빙봉평메일마을",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/662370482",
        "location_large":  "서울 마포구",
        "menu":  [
                     "막국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-21",
        "name":  "써브웨이 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/223880589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-20",
        "name":  "돈까스브로스 마포공덕점",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1764886627",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-03",
        "name":  "잼베이커리",
        "category":  "☕카페, 🥗샐러드",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/578311224",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-02",
        "name":  "리정원 대흥점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1448096292",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼겹살",
                     "찌개"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-02",
        "name":  "배떡 신길점",
        "category":  "🍙분식",
        "location_small":  "신길동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1172377224",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-04",
        "name":  "맥도날드 우장산DT점",
        "category":  "🍔패스트푸드",
        "location_small":  "화곡동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/27176968",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-18",
        "name":  "오토김밥 마곡점",
        "category":  "🍚한식",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1184366929",
        "location_large":  "서울 강서구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-19",
        "name":  "인사동마늘보쌈",
        "category":  "🍚한식, 🥩고기",
        "location_small":  "관훈동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/890992896",
        "location_large":  "서울 종로구",
        "menu":  [
                     "보쌈"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-19",
        "name":  "파리크라상 원그로브점",
        "category":  "☕카페",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/847184931",
        "location_large":  "서울 강서구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-17",
        "name":  "거부기밥",
        "category":  "🍙분식",
        "location_small":  "가경동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1773834978",
        "location_large":  "충북 청주",
        "menu":  [
                     "주먹밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-04-28",
        "name":  "스시히바리",
        "category":  "🍣일식",
        "location_small":  "아현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/80394697",
        "location_large":  "서울 마포구",
        "menu":  [
                     "초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-30",
        "name":  "육회바른연어 대흥역점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/93909311",
        "location_large":  "서울 마포구",
        "menu":  [
                     "육회비빔밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-30",
        "name":  "잼베이커리",
        "category":  "☕카페, 🥗샐러드",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/578311224",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-29",
        "name":  "옥정",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1048556062",
        "location_large":  "서울 마포구",
        "menu":  [
                     "만둣국"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-28",
        "name":  "자담치킨 홍대점",
        "category":  "🍗치킨",
        "location_small":  "창전동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1892965420",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-28",
        "name":  "샨샨",
        "category":  "🍜중식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1231701730",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-27",
        "name":  "맘스터치 마포대흥역점",
        "category":  "🍔패스트푸드",
        "location_small":  "염리동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1679593996",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-27",
        "name":  "옥수동돼치집 돼지와김치의완벽한비율을찾다 마포점",
        "category":  "🍚한식",
        "location_small":  "공덕동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1692800582",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돼지김치구이"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-26",
        "name":  "미가",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/16443006",
        "location_large":  "서울 마포구",
        "menu":  [
                     "제육볶음",
                     "파전"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-26",
        "name":  "써브웨이 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/223880589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-24",
        "name":  "잇츠피자 호평",
        "category":  "🍕피자",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1338334638",
        "location_large":  "경기 남양주",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-24",
        "name":  "초원닭갈비막국수",
        "category":  "🍚한식",
        "location_small":  "가평읍",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/17082781",
        "location_large":  "경기 가평",
        "menu":  [
                     "닭갈비"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-24",
        "name":  "남이섬 티하우스 차담",
        "category":  "☕카페",
        "location_small":  "남산면",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1708311659",
        "location_large":  "강원 춘천",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-23",
        "name":  "르봉뺑",
        "category":  "☕카페",
        "location_small":  "가평읍",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1695937616",
        "location_large":  "경기 가평",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-22",
        "name":  "금복식당",
        "category":  "🍣일식",
        "location_small":  "상수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1722785841",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고등어구이",
                     "카레"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-22",
        "name":  "스시히바리",
        "category":  "🍣일식",
        "location_small":  "아현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/80394697",
        "location_large":  "서울 마포구",
        "menu":  [
                     "초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-21",
        "name":  "맥도날드 연세대점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/18606733",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-20",
        "name":  "식물원김밥 공덕점",
        "category":  "🍙분식",
        "location_small":  "도화동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1935690765",
        "location_large":  "서울 마포구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-19",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-19",
        "name":  "써브웨이 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/223880589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-18",
        "name":  "한강서초순대국",
        "category":  "🍚한식",
        "location_small":  "염리동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/12044566",
        "location_large":  "서울 마포구",
        "menu":  [
                     "국밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-18",
        "name":  "대한냉면 마포점",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1085817955",
        "location_large":  "서울 마포구",
        "menu":  [
                     "냉면"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-17",
        "name":  "바다돌섬포차 이태원점",
        "category":  "🍺술집",
        "location_small":  "이태원동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/740460227",
        "location_large":  "서울 용산구",
        "menu":  [
                     "술집",
                     "회"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-25",
        "name":  "맥도날드 연세대점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/18606733",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-25",
        "name":  "덮덮밥 홍대점",
        "category":  "🍚한식",
        "location_small":  "서교동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1790756430",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-24",
        "name":  "애슐리퀸즈 현대유플렉스신촌점",
        "category":  "🍽️뷔페",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/317024934",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "뷔페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-24",
        "name":  "봉구스밥버거 서강대점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/169029905",
        "location_large":  "서울 마포구",
        "menu":  [
                     "밥버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-23",
        "name":  "쿠츠",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/14544642",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-23",
        "name":  "옥수동돼치집 돼지와김치의완벽한비율을찾다 마포점",
        "category":  "🍚한식",
        "location_small":  "공덕동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1692800582",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돼지김치구이"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-22",
        "name":  "정월",
        "category":  "🍜중식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/131878421",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짜장면",
                     "짬뽕",
                     "탕수육"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-22",
        "name":  "헤비스테이크 더연남",
        "category":  "🍝양식",
        "location_small":  "동교동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/671788697",
        "location_large":  "서울 마포구",
        "menu":  [
                     "스테이크"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-21",
        "name":  "크림라벨",
        "category":  "☕카페",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/402240184#photoview",
        "location_large":  "서울 성동구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-21",
        "name":  "석암생소금구이 성수점",
        "category":  "🥩고기",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1892245869",
        "location_large":  "서울 성동구",
        "menu":  [
                     "삼겹살"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-20",
        "name":  "에스칼라디움웨딩홀",
        "category":  "🍽️뷔페",
        "location_small":  "삼산동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1663084466",
        "location_large":  "인천 부평구",
        "menu":  [
                     "뷔페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-19",
        "name":  "스시이안앤 신촌점",
        "category":  "🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/512210695",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "회전초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-18",
        "name":  "지금식당 마포직영점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1193512345",
        "location_large":  "서울 마포구",
        "menu":  [
                     "솥밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-18",
        "name":  "써브웨이 서강대점",
        "category":  "🥗샐러드",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/223880589",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샌드위치"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-17",
        "name":  "TOL",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/18515034",
        "location_large":  "서울 마포구",
        "menu":  [
                     "마제소바"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-17",
        "name":  "덮덮밥 홍대점",
        "category":  "🍚한식",
        "location_small":  "서교동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1790756430",
        "location_large":  "서울 마포구",
        "menu":  [
                     "덮밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-15",
        "name":  "거북이의 주방",
        "category":  "🍣일식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1401663204",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카레"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-16",
        "name":  "대한카츠 마포점",
        "category":  "🍚한식",
        "location_small":  "노고산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1042643162",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-15",
        "name":  "신센라멘 홍대점",
        "category":  "🍣일식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1366939286",
        "location_large":  "서울 마포구",
        "menu":  [
                     "라멘"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-14",
        "name":  "야바이",
        "category":  "🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/11634686",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "오꼬노미야끼"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-14",
        "name":  "소곤면옥",
        "category":  "🍚한식",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1685201182",
        "location_large":  "서울 강서구",
        "menu":  [
                     "불고기",
                     "평양냉면"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-13",
        "name":  "유선장어",
        "category":  "🍚한식",
        "location_small":  "양촌읍",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1601188060",
        "location_large":  "경기 김포",
        "menu":  [
                     "장어구이"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-11",
        "name":  "고미카츠",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/545566786",
        "location_large":  "서울 마포구",
        "menu":  [
                     "돈까스"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-08",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-12",
        "name":  "철인7호치킨 홍대점",
        "category":  "🍗치킨",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/26871883",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-11",
        "name":  "본죽\u0026비빔밥cafe 대흥역점",
        "category":  "🍚한식",
        "location_small":  "대흥동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1594238704",
        "location_large":  "서울 마포구",
        "menu":  [
                     "비빔밥",
                     "죽"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-09",
        "name":  "스시히바리",
        "category":  "🍣일식",
        "location_small":  "아현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/80394697",
        "location_large":  "서울 마포구",
        "menu":  [
                     "초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-10",
        "name":  "쉑쉑버거 홍대점",
        "category":  "🍔패스트푸드",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/136268965",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-08",
        "name":  "포케올데이 홍대점",
        "category":  "🥗샐러드",
        "location_small":  "성산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1279060792",
        "location_large":  "서울 마포구",
        "menu":  [
                     "포케"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-07",
        "name":  "효자막창 용산점",
        "category":  "🥩고기",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/551918507",
        "location_large":  "서울 용산구",
        "menu":  [
                     "곱창"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-04",
        "name":  "BHC치킨 발산점",
        "category":  "🍗치킨",
        "location_small":  "내발산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/11794591",
        "location_large":  "서울 강서구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-05",
        "name":  "밀플랜비 서강대점",
        "category":  "🌮세계요리, 🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/960971083",
        "location_large":  "서울 마포구",
        "menu":  [
                     "브리또"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-04",
        "name":  "김판석초밥",
        "category":  "🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/397566370",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "초밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-05",
        "name":  "청년다방 신촌점",
        "category":  "🍙분식",
        "location_small":  "대현동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1569852736",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-03",
        "name":  "가미우동",
        "category":  "🍣일식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/13337463",
        "location_large":  "서울 마포구",
        "menu":  [
                     "우동"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-02",
        "name":  "수저가",
        "category":  "🍜중식",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/651155763",
        "location_large":  "서울 마포구",
        "menu":  [
                     "짬뽕"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-02",
        "name":  "리얼짜글이 서대문점",
        "category":  "🍚한식",
        "location_small":  "남가좌동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1869215772",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "짜글이"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-01",
        "name":  "김숙성",
        "category":  "🍚한식, 🥩고기",
        "location_small":  "신수동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/227760533",
        "location_large":  "서울 마포구",
        "menu":  [
                     "삼겹살",
                     "제육볶음"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-01",
        "name":  "보어드앤헝그리",
        "category":  "🍔패스트푸드",
        "location_small":  "신수동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/108492868",
        "location_large":  "서울 마포구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-31",
        "name":  "록갈비 합정",
        "category":  "🥩고기",
        "location_small":  "합정동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1993303139",
        "location_large":  "서울 마포구",
        "menu":  [
                     "등갈비"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-05-31",
        "name":  "더파티움 여의도",
        "category":  "🍽️뷔페",
        "location_small":  "여의도동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1485166493",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "뷔페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-12",
        "name":  "생활맥주 홍대동교동점",
        "category":  "🍗치킨, 🍺술집",
        "location_small":  "동교동",
        "rate":  "🥄🥄",
        "map_url":  "",
        "location_large":  "서울 마포구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-10",
        "name":  "돈불1971 신촌직영점",
        "category":  "🥩고기",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/26874707",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "삼겹살"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-09",
        "name":  "텐쿠라",
        "category":  "🍣일식",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1633172516",
        "location_large":  "서울 용산구",
        "menu":  [
                     "텐동"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-09",
        "name":  "파이브가이즈 용산",
        "category":  "🍔패스트푸드",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/183570751",
        "location_large":  "서울 용산구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-12",
        "name":  "버거킹 마곡원그로브몰점",
        "category":  "🍔패스트푸드",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/546841062",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-05",
        "name":  "뺑스톡 공덕점",
        "category":  "☕카페",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/822254572",
        "location_large":  "서울 마포구",
        "menu":  [
                     "빵"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-05",
        "name":  "아리계곡 이수역점",
        "category":  "🍺술집",
        "location_small":  "사당동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/932891056",
        "location_large":  "서울 동작구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-04",
        "name":  "함박연",
        "category":  "🍣일식",
        "location_small":  "호평동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1484816380",
        "location_large":  "경기 남양주",
        "menu":  [
                     "함박스테이크"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-03",
        "name":  "신촌버거",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/283933287",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-02",
        "name":  "오레타치카레",
        "category":  "🍣일식",
        "location_small":  "공덕동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/925178825",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카레"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-30",
        "name":  "한창희천하일면",
        "category":  "🍚한식, 🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/670226941",
        "location_large":  "서울 마포구",
        "menu":  [
                     "고기국수"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-29",
        "name":  "롯데리아 신촌역점",
        "category":  "🍔패스트푸드",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/623338539",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-29",
        "name":  "두찜 마포신수점",
        "category":  "🍚한식",
        "location_small":  "신수동",
        "rate":  "🥄",
        "map_url":  "https://place.map.kakao.com/1021203220",
        "location_large":  "서울 마포구",
        "menu":  [
                     "찜닭"
                 ],
        "closed":  true
    },
    {
        "date":  "2026-06-26",
        "name":  "아이오밀",
        "category":  "🍣일식",
        "location_small":  "대흥동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1999464409",
        "location_large":  "서울 마포구",
        "menu":  [
                     "오차즈케"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-26",
        "name":  "냐냐쿤",
        "category":  "🍺술집",
        "location_small":  "동교동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1747474239",
        "location_large":  "서울 마포구",
        "menu":  [
                     "술집"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-26",
        "name":  "마포곱창타운",
        "category":  "🥩고기",
        "location_small":  "동교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/10341266",
        "location_large":  "서울 마포구",
        "menu":  [
                     "곱창"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-27",
        "name":  "피자브루클린 이태원",
        "category":  "🍕피자",
        "location_small":  "이태원동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1313366442",
        "location_large":  "서울 용산구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-27",
        "name":  "빵어니스타 이태원점",
        "category":  "☕카페",
        "location_small":  "이태원동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2099464862",
        "location_large":  "서울 용산구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-27",
        "name":  "그릭베리 이대신촌점",
        "category":  "☕카페",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1159681174",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "요거트"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-28",
        "name":  "룸프",
        "category":  "☕카페",
        "location_small":  "송파동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/131631493",
        "location_large":  "서울 송파구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-06-28",
        "name":  "동대문엽기떡볶이 홍대점",
        "category":  "🍙분식",
        "location_small":  "서교동",
        "rate":  "🥄🥄",
        "map_url":  "",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-30",
        "name":  "용호야채곱창",
        "category":  "🥩고기",
        "location_small":  "용문동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/861655692",
        "location_large":  "서울 용산구",
        "menu":  [
                     "곱창"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-28",
        "name":  "청담추어정",
        "category":  "🍚한식",
        "location_small":  "내발산동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1895066587",
        "location_large":  "서울 강서구",
        "menu":  [
                     "추어탕"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-27",
        "name":  "또보겠지떡볶이 해피토스점",
        "category":  "🍙분식",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/644614560",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-31",
        "name":  "BHC치킨 우장산역점",
        "category":  "🍗치킨",
        "location_small":  "내발산동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/24910396",
        "location_large":  "서울 강서구",
        "menu":  [
                     "치킨"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-25",
        "name":  "담채 본점",
        "category":  "🍚한식",
        "location_small":  "내발산동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/11679502",
        "location_large":  "서울 강서구",
        "menu":  [
                     "샤브샤브",
                     "쭈꾸미"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-25",
        "name":  "오토김밥 마곡점",
        "category":  "🍚한식",
        "location_small":  "마곡동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1184366929",
        "location_large":  "서울 강서구",
        "menu":  [
                     "김밥"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-24",
        "name":  "딜라이트버거",
        "category":  "🍔패스트푸드",
        "location_small":  "망우동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/172588437",
        "location_large":  "서울 중랑구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-24",
        "name":  "KFC 발산역점",
        "category":  "🍔패스트푸드",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1725139526",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-23",
        "name":  "우정",
        "category":  "🍚한식, 🥩고기",
        "location_small":  "신당동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/27388900",
        "location_large":  "서울 중구",
        "menu":  [
                     "닭발"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-23",
        "name":  "해일로",
        "category":  "☕카페",
        "location_small":  "창신동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/974518328",
        "location_large":  "서울 종로구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-20",
        "name":  "스타벅스 용산역써밋R점",
        "category":  "☕카페",
        "location_small":  "한강로",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/255305228",
        "location_large":  "서울 용산구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-20",
        "name":  "엉클피자",
        "category":  "🍕피자",
        "location_small":  "한강로",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1480004855",
        "location_large":  "서울 용산구",
        "menu":  [
                     "피자"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-18",
        "name":  "버거킹 마곡원그로브몰점",
        "category":  "🍔패스트푸드",
        "location_small":  "마곡동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/546841062",
        "location_large":  "서울 강서구",
        "menu":  [
                     "햄버거"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-10",
        "name":  "오늘도빙수앤커피",
        "category":  "☕카페",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/301037533",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "빙수"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-14",
        "name":  "코시",
        "category":  "🍣일식",
        "location_small":  "도곡동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1003513439",
        "location_large":  "서울 강남구",
        "menu":  [
                     "우동"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-14",
        "name":  "선이랑 Sun s Donut",
        "category":  "☕카페",
        "location_small":  "도곡동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1877857019",
        "location_large":  "서울 강남구",
        "menu":  [
                     "카페"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-14",
        "name":  "박만배 아리랑보쌈 선릉점",
        "category":  "🍚한식",
        "location_small":  "대치동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/632206337",
        "location_large":  "서울 강남구",
        "menu":  [
                     "보쌈"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-16",
        "name":  "마루가메우동 잠실롯데월드몰점",
        "category":  "🍣일식",
        "location_small":  "신천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/498055551",
        "location_large":  "서울 송파구",
        "menu":  [
                     "우동"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-19",
        "name":  "옛고을",
        "category":  "🍚한식",
        "location_small":  "방화동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/2103771928",
        "location_large":  "서울 강서구",
        "menu":  [
                     "삼계탕",
                     "오리"
                 ],
        "closed":  false
    },
    {
        "date":  "2026-07-06",
        "name":  "카라멘야",
        "category":  "🍣일식",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1025832828",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "라멘"
                 ],
        "closed":  false
    }
];