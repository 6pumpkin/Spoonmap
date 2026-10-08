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
        "closed":  false,
        "x":  "126.93483236759465",
        "y":  "37.55822165109402",
        "road_address":  "서울 서대문구 연세로7안길 34-1"
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
        "closed":  false,
        "x":  "126.81887005446268",
        "y":  "37.57859652300193",
        "road_address":  "서울 강서구 양천로27길 115"
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
        "closed":  false,
        "x":  "127.10425922862593",
        "y":  "37.51358057599435",
        "road_address":  "서울 송파구 올림픽로 300"
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
        "closed":  false,
        "x":  "127.05072345211711",
        "y":  "37.502406297359684",
        "road_address":  "서울 강남구 선릉로82길 8"
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
        "closed":  false,
        "x":  "127.0452762086181",
        "y":  "37.4825584210822",
        "road_address":  "서울 강남구 논현로26길 30-12"
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
        "closed":  false,
        "x":  "127.04472259199",
        "y":  "37.4851156941348",
        "road_address":  "서울 강남구 논현로38길 32-7"
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
        "closed":  false,
        "x":  "126.936079387196",
        "y":  "37.5584520870422",
        "road_address":  "서울 서대문구 연세로9길 13"
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
        "closed":  false,
        "x":  "126.82629506455251",
        "y":  "37.56069951764877",
        "road_address":  "서울 강서구 공항대로 165"
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
        "closed":  false,
        "x":  "126.96246421094969",
        "y":  "37.5252705952858",
        "road_address":  "서울 용산구 한강대로11길 21"
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
        "closed":  false,
        "x":  "126.96564776307117",
        "y":  "37.5274384741024",
        "road_address":  "서울 용산구 한강대로 69"
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
        "closed":  false,
        "x":  "127.01541726037536",
        "y":  "37.57024440450472",
        "road_address":  "서울 종로구 종로50라길 49"
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
        "closed":  false,
        "x":  "127.01490979074266",
        "y":  "37.56279593622181",
        "road_address":  "서울 중구 퇴계로76길 55"
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
        "closed":  false,
        "x":  "126.83777336883877",
        "y":  "37.55885619128075",
        "road_address":  "서울 강서구 공항대로 271"
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
        "closed":  false,
        "x":  "127.09455341303199",
        "y":  "37.59790406979609",
        "road_address":  "서울 중랑구 용마산로115길 109"
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
        "closed":  false,
        "x":  "126.82939652096377",
        "y":  "37.55808934952116",
        "road_address":  "서울 강서구 마곡중앙4로 22"
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
        "closed":  false,
        "x":  "126.826732615354",
        "y":  "37.5530777314224",
        "road_address":  "서울 강서구 수명로 68-35"
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
        "closed":  false,
        "x":  "126.83406693509943",
        "y":  "37.54857607146572",
        "road_address":  "서울 강서구 강서로45라길 18"
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
        "closed":  false,
        "x":  "126.92114885513332",
        "y":  "37.55210814681579",
        "road_address":  "서울 마포구 잔다리로6길 34-5"
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
        "closed":  false,
        "x":  "126.82683165424213",
        "y":  "37.55282649855657",
        "road_address":  "서울 강서구 수명로 68-35"
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
        "closed":  false,
        "x":  "126.961335083484",
        "y":  "37.538638385631",
        "road_address":  "서울 용산구 원효로71길 70"
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
        "closed":  false,
        "x":  "127.106929738068",
        "y":  "37.5080171915349",
        "road_address":  "서울 송파구 백제고분로41길 25"
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
        "closed":  false,
        "x":  "126.939760527169",
        "y":  "37.5563069461795",
        "road_address":  "서울 서대문구 신촌로 125"
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
        "closed":  false,
        "x":  "126.99414390385353",
        "y":  "37.53298989014499",
        "road_address":  "서울 용산구 보광로55길 3"
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
        "closed":  false,
        "x":  "126.994580722131",
        "y":  "37.5316059731702",
        "road_address":  "서울 용산구 녹사평대로26길 91-1"
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
        "closed":  false,
        "x":  "126.922522306247",
        "y":  "37.5590647560241",
        "road_address":  "서울 마포구 동교로27길 20"
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
        "closed":  false,
        "x":  "126.925019249347",
        "y":  "37.5588465248931",
        "road_address":  "서울 마포구 월드컵북로2길 97"
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
        "closed":  false,
        "x":  "126.94299009382173",
        "y":  "37.54648136290245",
        "road_address":  "서울 마포구 백범로16안길 15-1"
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
        "closed":  true,
        "x":  "126.93727838960186",
        "y":  "37.54711367133532",
        "road_address":  "서울 마포구 독막로28길 7"
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
        "closed":  false,
        "x":  "126.93906697378533",
        "y":  "37.55605250902828",
        "road_address":  "서울 서대문구 신촌로 119"
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
        "closed":  false,
        "x":  "126.9397769333819",
        "y":  "37.545763473723596",
        "road_address":  "서울 마포구 대흥로 57"
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
        "closed":  false,
        "x":  "126.946985567823",
        "y":  "37.5451632607609",
        "road_address":  "서울 마포구 백범로 152"
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
        "closed":  false,
        "x":  "126.934546101864",
        "y":  "37.5581377000104",
        "road_address":  "서울 서대문구 연세로7안길 39"
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
        "closed":  false,
        "x":  "127.241443093073",
        "y":  "37.6543687327123",
        "road_address":  "경기 남양주시 늘을1로16번안길 3-18"
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
        "closed":  false,
        "x":  "126.98065382500161",
        "y":  "37.486590317050904",
        "road_address":  "서울 동작구 동작대로27나길 21"
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
        "closed":  false,
        "x":  "126.94938355325522",
        "y":  "37.54490933024531",
        "road_address":  "서울 마포구 백범로31길 8"
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
        "closed":  false,
        "x":  "126.96413676530703",
        "y":  "37.52889764780825",
        "road_address":  "서울 용산구 한강대로23길 55"
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
        "closed":  false,
        "x":  "126.96387807954865",
        "y":  "37.52574406231723",
        "road_address":  "서울 용산구 한강대로15길 9"
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
        "closed":  false,
        "x":  "126.933651935508",
        "y":  "37.5569343697136",
        "road_address":  "서울 서대문구 연세로5다길 36"
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
        "closed":  false,
        "x":  "126.92278740200328",
        "y":  "37.52809398153121",
        "road_address":  "서울 영등포구 은행로 30"
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
        "closed":  false,
        "x":  "126.91897243272184",
        "y":  "37.54810804320685",
        "road_address":  "서울 마포구 독막로 51"
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
        "closed":  false,
        "x":  "126.939049522821",
        "y":  "37.5482976101185",
        "road_address":  "서울 마포구 광성로6길 36"
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
        "closed":  false,
        "x":  "126.938348313129",
        "y":  "37.549188333645",
        "road_address":  "서울 마포구 광성로6길 14"
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
        "closed":  true,
        "x":  "126.919548350676",
        "y":  "37.5755473825402",
        "road_address":  "서울 서대문구 남가좌동"
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
        "closed":  false,
        "x":  "126.93729575518155",
        "y":  "37.549348157115176",
        "road_address":  "서울 마포구 광성로4길 10"
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
        "closed":  false,
        "x":  "126.923857747432",
        "y":  "37.5546831743202",
        "road_address":  "서울 마포구 홍익로2길 23"
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
        "closed":  false,
        "x":  "126.94134690192831",
        "y":  "37.55673274534274",
        "road_address":  "서울 서대문구 신촌로 139"
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
        "closed":  false,
        "x":  "126.93461365398518",
        "y":  "37.55854318611872",
        "road_address":  "서울 서대문구 연세로9길 37"
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
        "closed":  false,
        "x":  "126.94306021061779",
        "y":  "37.55099990449737",
        "road_address":  "서울 마포구 백범로 35"
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
        "closed":  false,
        "x":  "126.84364010721514",
        "y":  "37.556895429306124",
        "road_address":  "서울 강서구 공항대로42길 23"
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
        "closed":  false,
        "x":  "126.972157955412",
        "y":  "37.5318226598919",
        "road_address":  "서울 용산구 한강대로52길 22"
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
        "closed":  false,
        "x":  "126.917039034174",
        "y":  "37.5598683236436",
        "road_address":  "서울 마포구 월드컵북로 64"
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
        "closed":  false,
        "x":  "126.92581812446181",
        "y":  "37.55787124976875",
        "road_address":  "서울 마포구 양화로 186"
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
        "closed":  false,
        "x":  "126.95139110569619",
        "y":  "37.55689164853028",
        "road_address":  "서울 마포구 신촌로 232"
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
        "closed":  false,
        "x":  "126.9411449219951",
        "y":  "37.54733009954163",
        "road_address":  "서울 마포구 대흥로 79"
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
        "closed":  false,
        "x":  "126.919799225218",
        "y":  "37.5485032450096",
        "road_address":  "서울 마포구 양화로6길 99-3"
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
        "closed":  false,
        "x":  "126.942689079573",
        "y":  "37.5479714691814",
        "road_address":  "서울 마포구 백범로 99-6"
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
        "closed":  false,
        "x":  "126.653263649039",
        "y":  "37.6646855126036",
        "road_address":  "경기 김포시 양촌읍 김포대로 1661"
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
        "closed":  false,
        "x":  "126.838020182033",
        "y":  "37.5713632449749",
        "road_address":  "서울 강서구 양천로47길 20"
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
        "closed":  false,
        "x":  "126.934606144916",
        "y":  "37.5580701585058",
        "road_address":  "서울 서대문구 연세로7안길 37"
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
        "closed":  true,
        "x":  "126.925300082438",
        "y":  "37.560963144299",
        "road_address":  "서울 마포구 동교로34길 17"
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
        "closed":  false,
        "x":  "126.936229039933",
        "y":  "37.5541652224802",
        "road_address":  "서울 마포구 백범로2길 12"
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
        "closed":  false,
        "x":  "126.9378429143",
        "y":  "37.5541048152563",
        "road_address":  "서울 마포구 백범로1길 8-7"
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
        "closed":  false,
        "x":  "126.916796250017",
        "y":  "37.5573354504624",
        "road_address":  "서울 마포구 월드컵북로5나길 18"
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
        "closed":  false,
        "x":  "126.94450616148207",
        "y":  "37.549903176987975",
        "road_address":  "서울 마포구 대흥로20안길 11"
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
        "closed":  false,
        "x":  "126.93753613675611",
        "y":  "37.55284866241828",
        "road_address":  "서울 마포구 백범로 21"
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
        "closed":  false,
        "x":  "126.943403941965",
        "y":  "37.5498936438386",
        "road_address":  "서울 마포구 대흥동"
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
        "closed":  false,
        "x":  "126.93800336762096",
        "y":  "37.555772646139665",
        "road_address":  "서울 서대문구 신촌로 109"
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
        "closed":  false,
        "x":  "126.732049147412",
        "y":  "37.5078977323874",
        "road_address":  "인천 부평구 길주로 623"
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
        "closed":  false,
        "x":  "127.05485104070549",
        "y":  "37.54524170983533",
        "road_address":  "서울 성동구 아차산로 97"
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
        "closed":  false,
        "x":  "127.042308226718",
        "y":  "37.5465533185726",
        "road_address":  "서울 성동구 서울숲2길 34"
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
        "closed":  false,
        "x":  "126.92446534159",
        "y":  "37.5604283222121",
        "road_address":  "서울 마포구 동교로 230"
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
        "closed":  false,
        "x":  "126.942652765272",
        "y":  "37.5466280623777",
        "road_address":  "서울 마포구 백범로16안길 9"
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
        "closed":  true,
        "x":  "126.960034513244",
        "y":  "37.5501743473819",
        "road_address":  "서울 마포구 공덕동"
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
        "closed":  false,
        "x":  "126.94204295163654",
        "y":  "37.546474594832844",
        "road_address":  "서울 마포구 백범로16길 25"
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
        "closed":  false,
        "x":  "126.939864465255",
        "y":  "37.5494918510058",
        "road_address":  "서울 마포구 서강대길 11"
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
        "closed":  false,
        "x":  "126.93655279867694",
        "y":  "37.55673053678411",
        "road_address":  "서울 서대문구 연세로 13"
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
        "closed":  false,
        "x":  "126.9367843937591",
        "y":  "37.55856058625979",
        "road_address":  "서울 서대문구 연세로 33"
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
        "closed":  false,
        "x":  "126.992057394426",
        "y":  "37.5350512583555",
        "road_address":  "서울 용산구 이태원로27가길 54-3"
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
        "closed":  false,
        "x":  "126.936229014597",
        "y":  "37.5541949553967",
        "road_address":  "서울 마포구 백범로2길 12"
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
        "closed":  false,
        "x":  "126.9455298975555",
        "y":  "37.54735202569307",
        "road_address":  "서울 마포구 숭문길 20"
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
        "closed":  false,
        "x":  "126.950254675753",
        "y":  "37.541788638482",
        "road_address":  "서울 마포구 도화길 43"
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
        "closed":  false,
        "x":  "126.92217908089042",
        "y":  "37.54737498522558",
        "road_address":  "서울 마포구 독막로14길 24"
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
        "closed":  false,
        "x":  "127.510038534127",
        "y":  "37.8328123249915",
        "road_address":  "경기 가평군 가평읍 석봉로 200"
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
        "closed":  false,
        "x":  "127.52612836200387",
        "y":  "37.79012486209945",
        "road_address":  "강원특별자치도 춘천시 남산면 남이섬길 1"
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
        "closed":  false,
        "x":  "127.51503469272065",
        "y":  "37.8138923080382",
        "road_address":  "경기 가평군 가평읍 호반로 2556"
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
        "closed":  false,
        "x":  "127.24639651934898",
        "y":  "37.654048553154",
        "road_address":  "경기 남양주시 호평로46번안길 4-34"
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
        "closed":  false,
        "x":  "126.945328714108",
        "y":  "37.5485682809407",
        "road_address":  "서울 마포구 숭문길 47"
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
        "closed":  false,
        "x":  "126.94441551528277",
        "y":  "37.547009126827106",
        "road_address":  "서울 마포구 백범로 117"
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
        "closed":  false,
        "x":  "126.945322016474",
        "y":  "37.5484421380354",
        "road_address":  "서울 마포구 숭문길 43"
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
        "closed":  false,
        "x":  "126.92923190483333",
        "y":  "37.55389814472635",
        "road_address":  "서울 마포구 와우산로 140"
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
        "closed":  false,
        "x":  "126.93644615026982",
        "y":  "37.55037754400841",
        "road_address":  "서울 마포구 신수로 106"
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
        "closed":  false,
        "x":  "126.941955131893",
        "y":  "37.547360233553",
        "road_address":  "서울 마포구 대흥로 84-6"
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
        "closed":  false,
        "x":  "126.94124890921849",
        "y":  "37.547484222106256",
        "road_address":  "서울 마포구 대흥로 79"
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
        "closed":  true,
        "x":  "126.527348499316",
        "y":  "33.5120293003785",
        "road_address":  "제주특별자치도 제주시 동문로4길 17"
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
        "closed":  false,
        "x":  "126.826029968039",
        "y":  "37.5608081478153",
        "road_address":  "서울 강서구 공항대로 165"
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
        "closed":  false,
        "x":  "126.98617132231583",
        "y":  "37.573952196078565",
        "road_address":  "서울 종로구 인사동8길 12-5"
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
        "closed":  false,
        "x":  "126.83747836513412",
        "y":  "37.545125488746436",
        "road_address":  "서울 강서구 강서로 216"
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
        "closed":  false,
        "x":  "126.920674905434",
        "y":  "37.5038195483082",
        "road_address":  "서울 영등포구 가마산로88길 1"
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
        "closed":  false,
        "x":  "126.939899505469",
        "y":  "37.548133163054",
        "road_address":  "서울 마포구 백범로10길 30"
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
        "closed":  false,
        "x":  "126.95381152556136",
        "y":  "37.54654465654829",
        "road_address":  "서울 마포구 마포대로8길 9"
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
        "closed":  false,
        "x":  "126.943403941965",
        "y":  "37.5498936438386",
        "road_address":  "서울 마포구 대흥동"
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
        "closed":  true,
        "x":  "127.238122620085",
        "y":  "37.648656956011",
        "road_address":  "경기 남양주시 경춘로 1292-31"
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
        "closed":  false,
        "x":  "126.93709176453773",
        "y":  "37.54969943799268",
        "road_address":  "서울 마포구 광성로 36-1"
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
        "closed":  false,
        "x":  "126.94227486358265",
        "y":  "37.548027129330656",
        "road_address":  "서울 마포구 대흥로 92"
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
        "closed":  false,
        "x":  "126.922984067934",
        "y":  "37.5524742622642",
        "road_address":  "서울 마포구 와우산로21길 20"
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
        "closed":  false,
        "x":  "126.942620688212",
        "y":  "37.5471398141349",
        "road_address":  "서울 마포구 백범로16길 5"
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
        "closed":  false,
        "x":  "127.123923689605",
        "y":  "37.5110126423949",
        "road_address":  "서울 송파구 방이동"
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
        "closed":  false,
        "x":  "127.10560000828978",
        "y":  "37.50745976495706",
        "road_address":  "서울 송파구 송파대로 458"
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
        "closed":  false,
        "x":  "126.93437341202453",
        "y":  "37.556309480790674",
        "road_address":  "서울 서대문구 신촌로 73"
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
        "closed":  false,
        "x":  "126.94530729018112",
        "y":  "37.54691403737399",
        "road_address":  "서울 마포구 숭문길 7-1"
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
        "closed":  false,
        "x":  "126.94038788164275",
        "y":  "37.5459000147778",
        "road_address":  "서울 마포구 대흥로 64"
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
        "closed":  false,
        "x":  "126.9422385261",
        "y":  "37.5467233663599",
        "road_address":  "서울 마포구 백범로16안길 3"
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
        "closed":  false,
        "x":  "126.94620737250624",
        "y":  "37.54627834561356",
        "road_address":  "서울 마포구 백범로25길 1"
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
        "closed":  false,
        "x":  "126.9462141433",
        "y":  "37.5463044776671",
        "road_address":  "서울 마포구 백범로25길 1"
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
        "closed":  false,
        "x":  "126.837850907199",
        "y":  "37.559112180705",
        "road_address":  "서울 강서구 강서로 375-7"
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
        "closed":  false,
        "x":  "126.936238068308",
        "y":  "37.5541949602862",
        "road_address":  "서울 마포구 백범로2길 12"
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
        "closed":  false,
        "x":  "127.240455866803",
        "y":  "37.6543121854315",
        "road_address":  "경기 남양주시 늘을1로16번안길 3-38"
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
        "closed":  false,
        "x":  "126.97028471105",
        "y":  "37.5310284212831",
        "road_address":  "서울 용산구 한강대로44길 6"
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
        "closed":  false,
        "x":  "126.935200991338",
        "y":  "37.5559945887965",
        "road_address":  "서울 서대문구 신촌로 79"
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
        "closed":  false,
        "x":  "126.9347902474",
        "y":  "37.5572035010621",
        "road_address":  "서울 서대문구 연세로5나길 30-6"
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
        "closed":  false,
        "x":  "126.9359739097304",
        "y":  "37.5573888532887",
        "road_address":  "서울 서대문구 연세로5가길 14"
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
        "closed":  false,
        "x":  "127.080698852733",
        "y":  "37.5948140452393",
        "road_address":  "서울 중랑구 망우로 252"
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
        "closed":  false,
        "x":  "126.94232600368703",
        "y":  "37.54627651365987",
        "road_address":  "서울 마포구 독막로 257-1"
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
        "closed":  false,
        "x":  "127.085627482992",
        "y":  "37.510387076875",
        "road_address":  "서울 송파구 석촌호수로 66"
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
        "closed":  true,
        "x":  "126.946045719154",
        "y":  "37.5476198591366",
        "road_address":  "서울 마포구 숭문4길 12"
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
        "closed":  false,
        "x":  "126.92485511577952",
        "y":  "37.55323591002512",
        "road_address":  "서울 마포구 와우산로 101"
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
        "closed":  false,
        "x":  "127.026164532628",
        "y":  "37.5035792900517",
        "road_address":  "서울 강남구 봉은사로2길 19"
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
        "closed":  false,
        "x":  "127.004455913484",
        "y":  "37.5030694314321",
        "road_address":  "서울 서초구 사평대로 205"
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
        "closed":  false,
        "x":  "126.944489404098",
        "y":  "37.5419797839965",
        "road_address":  "서울 마포구 큰우물로 52"
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
        "closed":  false,
        "x":  "126.937325644061",
        "y":  "37.5514943508726",
        "road_address":  "서울 마포구 백범로 36"
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
        "closed":  false,
        "x":  "126.931110104925",
        "y":  "37.5691251961664",
        "road_address":  "서울 서대문구 증가로 13-9"
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
        "closed":  false,
        "x":  "126.93598037537",
        "y":  "37.5551228483949",
        "road_address":  "서울 마포구 신촌로 94"
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
        "closed":  false,
        "x":  "126.837242051246",
        "y":  "37.5596113957998",
        "road_address":  "서울 강서구 공항대로 269-15"
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
        "closed":  false,
        "x":  "127.019098673584",
        "y":  "37.5890989662369",
        "road_address":  "서울 성북구 보문로30길 31"
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
        "closed":  false,
        "x":  "127.011870434249",
        "y":  "37.5890954095095",
        "road_address":  "서울 성북구 동소문로10길 33"
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
        "closed":  false,
        "x":  "126.94128739182",
        "y":  "37.5474743302672",
        "road_address":  "서울 마포구 대흥로 79"
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
        "closed":  false,
        "x":  "126.93952888386346",
        "y":  "37.558656628483135",
        "road_address":  "서울 서대문구 명물길 58-8"
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
        "closed":  false,
        "x":  "126.937929219272",
        "y":  "37.5523848557717",
        "road_address":  "서울 마포구 백범로 23"
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
        "closed":  false,
        "x":  "126.93655718642354",
        "y":  "37.54754936944806",
        "road_address":  "서울 마포구 독막로 209"
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
        "closed":  false,
        "x":  "126.9449905741285",
        "y":  "37.546732789483535",
        "road_address":  "서울 마포구 백범로 123"
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
        "closed":  false,
        "x":  "126.93506654602719",
        "y":  "37.55703156286427",
        "road_address":  "서울 서대문구 연세로5나길 20"
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
        "closed":  true,
        "x":  "126.937869920548",
        "y":  "37.5556545453264",
        "road_address":  "서울 서대문구 신촌로 107"
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
        "closed":  false,
        "x":  "126.934851486346",
        "y":  "37.5570611773048",
        "road_address":  "서울 서대문구 연세로5나길 24"
    },
    {
        "category":  "🍙분식",
        "name":  "또보겠지떡볶이집 깐따비아점",
        "date":  "2026-04-14",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1147510123",
        "location_large":  "서울 마포구",
        "menu":  [
                     "떡볶이"
                 ],
        "visit_count":  7,
        "closed":  false,
        "x":  "126.914613374473",
        "y":  "37.5550949138083",
        "road_address":  "서울 마포구 서교동"
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
        "closed":  false,
        "x":  "126.41144188992243",
        "y":  "33.24982819964817",
        "road_address":  "제주특별자치도 서귀포시 중문관광로72번길 29-9"
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
        "closed":  false,
        "x":  "126.414753590904",
        "y":  "33.256073130785",
        "road_address":  "제주특별자치도 서귀포시 중문관광로 23"
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
        "closed":  false,
        "x":  "126.5287905775174",
        "y":  "33.512655088399306",
        "road_address":  "제주특별자치도 제주시 동문로6길 4"
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
        "closed":  false,
        "x":  "126.49795513998404",
        "y":  "33.50358027483462",
        "road_address":  "제주특별자치도 제주시 공항로1길 14"
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
        "closed":  false,
        "x":  "126.563275283204",
        "y":  "33.2491295705844",
        "road_address":  "제주특별자치도 서귀포시 중앙로48번길 14-1"
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
        "closed":  false,
        "x":  "126.41466812102858",
        "y":  "33.25569404767754",
        "road_address":  "제주특별자치도 서귀포시 중문관광로 27"
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
        "closed":  false,
        "x":  "126.4146924417227",
        "y":  "33.25671389547917",
        "road_address":  "제주특별자치도 서귀포시 중문관광로 16"
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
        "closed":  false,
        "x":  "126.52705451295418",
        "y":  "33.512453729110916",
        "road_address":  "제주특별자치도 제주시 동문로 6-6"
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
        "closed":  false,
        "x":  "126.44809330121294",
        "y":  "33.25311496825394",
        "road_address":  "제주특별자치도 서귀포시 일주서로570번길 1"
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
        "closed":  false,
        "x":  "126.935226865858",
        "y":  "37.5470206619261",
        "road_address":  "서울 마포구 신수동"
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
        "closed":  false,
        "x":  "126.984301060183",
        "y":  "37.5693965306768",
        "road_address":  "서울 종로구 종로10길 14"
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
        "closed":  false,
        "x":  "126.977619760848",
        "y":  "37.5637092678523",
        "road_address":  "서울 중구 세종대로18길 10"
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
        "closed":  false,
        "x":  "126.94294693071929",
        "y":  "37.551148514519404",
        "road_address":  "서울 마포구 백범로 35"
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
        "closed":  false,
        "x":  "126.926739017703",
        "y":  "37.5570906602344",
        "road_address":  "서울 마포구 양화로18안길 40"
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
        "closed":  false,
        "x":  "126.940820609051",
        "y":  "37.5481804802196",
        "road_address":  "서울 마포구 백범로 86"
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
        "closed":  false,
        "x":  "126.98696489602588",
        "y":  "37.54128212400909",
        "road_address":  "서울 용산구 신흥로 31"
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
        "closed":  false,
        "x":  "126.9931253599232",
        "y":  "37.5607838509542",
        "road_address":  "서울 중구 퇴계로 192"
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
        "closed":  false,
        "x":  "127.010229998754",
        "y":  "37.557340898029",
        "road_address":  "서울 중구 다산로19길 29"
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
        "closed":  false,
        "x":  "126.93960328720397",
        "y":  "37.54780234540541",
        "road_address":  "서울 마포구 독막로31길 18"
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
        "closed":  false,
        "x":  "126.963598622684",
        "y":  "37.593271897929",
        "road_address":  "서울 종로구 창의문로 151"
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
        "closed":  false,
        "x":  "126.923895322758",
        "y":  "37.5622479691671",
        "road_address":  "서울 마포구 동교로39길 8"
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
        "closed":  false,
        "x":  "126.937251031437",
        "y":  "37.5514015084391",
        "road_address":  "서울 마포구 서강로16길 69"
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
        "closed":  false,
        "x":  "126.94282509694241",
        "y":  "37.54767961154256",
        "road_address":  "서울 마포구 백범로 101-1"
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
        "closed":  false,
        "x":  "126.82346329182965",
        "y":  "37.55925192211187",
        "road_address":  "서울 강서구 공항대로 140"
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
        "closed":  false,
        "x":  "126.97166476633511",
        "y":  "37.57641833067719",
        "road_address":  "서울 종로구 자하문로1길 13"
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
        "closed":  false,
        "x":  "126.989698790693",
        "y":  "37.5731236413013",
        "road_address":  "서울 종로구 수표로28길 21-5"
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
        "closed":  false,
        "x":  "126.985782300881",
        "y":  "37.571894277369",
        "road_address":  "서울 종로구 인사동3길 20"
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
        "closed":  false,
        "x":  "126.943637286917",
        "y":  "37.5495946239821",
        "road_address":  "서울 마포구 대흥로 114"
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
        "closed":  false,
        "x":  "126.945717612932",
        "y":  "37.545973583843",
        "road_address":  "서울 마포구 백범로 134"
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
        "closed":  false,
        "x":  "126.82647341166819",
        "y":  "37.560906107934365",
        "road_address":  "서울 강서구 공항대로 165"
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
        "closed":  false,
        "x":  "127.24226372694",
        "y":  "37.6554689492224",
        "road_address":  "경기 남양주시 늘을1로16번안길 17-1"
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
        "closed":  false,
        "x":  "126.917355987448",
        "y":  "37.549575550333",
        "road_address":  "서울 마포구 독막로3길 30"
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
        "closed":  false,
        "x":  "126.904633333051",
        "y":  "37.5563477699722",
        "road_address":  "서울 마포구 포은로 105"
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
        "closed":  false,
        "x":  "127.07652957773378",
        "y":  "37.6290390796039",
        "road_address":  "서울 노원구 공릉로51길 6"
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
        "closed":  false,
        "x":  "126.93745082826166",
        "y":  "37.55336488903387",
        "road_address":  "서울 마포구 백범로 13"
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
        "closed":  false,
        "x":  "126.89457056786486",
        "y":  "37.51323535389495",
        "road_address":  "서울 영등포구 도림로125가길 5-1"
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
        "closed":  false,
        "x":  "126.925346742196",
        "y":  "37.5618416454336",
        "road_address":  "서울 마포구 동교로38길 22"
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
        "closed":  false,
        "x":  "126.940040112382",
        "y":  "37.5449509065005",
        "road_address":  "서울 마포구 토정로25길 43"
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
        "closed":  false,
        "x":  "127.016924074791",
        "y":  "37.5660329442391",
        "road_address":  "서울 중구 퇴계로 409-9"
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
        "closed":  false,
        "x":  "127.02180853952213",
        "y":  "37.56332825336558",
        "road_address":  "서울 중구 퇴계로90길 45"
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
        "closed":  false,
        "x":  "126.939454093697",
        "y":  "37.5587710167753",
        "road_address":  "서울 서대문구 명물길 50-9"
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
        "closed":  false,
        "x":  "126.97118782679544",
        "y":  "37.53028261589351",
        "road_address":  "서울 용산구 한강대로40길 33"
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
        "closed":  true,
        "x":  "128.630724328868",
        "y":  "35.8766655550207",
        "road_address":  "대구 동구 동부로32길 1"
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
        "closed":  false,
        "x":  "126.939841389401",
        "y":  "37.5486349896847",
        "road_address":  "서울 마포구 백범로 74"
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
        "closed":  false,
        "x":  "126.826769138164",
        "y":  "37.5529444374633",
        "road_address":  "서울 강서구 수명로 68-35"
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
        "closed":  false,
        "x":  "126.912400864",
        "y":  "37.5541130077847",
        "road_address":  "서울 마포구 동교로12길 3"
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
        "closed":  false,
        "x":  "126.94109970579268",
        "y":  "37.54726880907327",
        "road_address":  "서울 마포구 백범로 82"
    },
    {
        "category":  "🍗치킨",
        "name":  "BHC치킨 신촌점",
        "date":  "2026-02-11",
        "location_small":  "창천동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/608437809",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "치킨"
                 ],
        "visit_count":  5,
        "closed":  false,
        "x":  "126.93812776194278",
        "y":  "37.555889841058914",
        "road_address":  "서울 서대문구 신촌로 109"
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
        "closed":  false,
        "x":  "126.963093420856",
        "y":  "37.5248247974708",
        "road_address":  "서울 용산구 한강대로 37"
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
        "closed":  false,
        "x":  "126.961927939712",
        "y":  "37.5253605238527",
        "road_address":  "서울 용산구 한강대로7길 30-16"
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
        "closed":  false,
        "x":  "126.942668135678",
        "y":  "37.5472443530413",
        "road_address":  "서울 마포구 백범로16길 1"
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
        "closed":  false,
        "x":  "126.99071799191582",
        "y":  "37.56989816306911",
        "road_address":  "서울 종로구 수표로20길 22"
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
        "closed":  false,
        "x":  "126.98320193877",
        "y":  "37.5694107953304",
        "road_address":  "서울 종로구 우정국로 6"
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
        "closed":  false,
        "x":  "126.944895794721",
        "y":  "37.558655651274",
        "road_address":  "서울 서대문구 이화여대7길 15"
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
        "closed":  false,
        "x":  "126.939127088375",
        "y":  "37.5489328541207",
        "road_address":  "서울 마포구 백범로 68"
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
        "closed":  false,
        "x":  "126.93637129136783",
        "y":  "37.555901521536555",
        "road_address":  "서울 서대문구 신촌로 87-8"
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
        "closed":  false,
        "x":  "126.936571601669",
        "y":  "37.5559106392877",
        "road_address":  "서울 서대문구 연세로 3-3"
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
        "closed":  false,
        "x":  "127.012040426836",
        "y":  "37.491554038382",
        "road_address":  "서울 서초구 서초대로48길 33"
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
        "closed":  false,
        "x":  "127.01953478052",
        "y":  "37.4900861966502",
        "road_address":  "서울 서초구 서초동"
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
        "closed":  false,
        "x":  "126.935072339036",
        "y":  "37.5581812384324",
        "road_address":  "서울 서대문구 연세로7안길 32"
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
        "closed":  false,
        "x":  "126.971833349327",
        "y":  "37.5315594905601",
        "road_address":  "서울 용산구 한강대로48길 17-6"
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
        "closed":  false,
        "x":  "126.936185208115",
        "y":  "37.5577890104252",
        "road_address":  "서울 서대문구 연세로7안길 1"
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
        "closed":  false,
        "x":  "126.936194059438",
        "y":  "37.5580268784495",
        "road_address":  "서울 서대문구 연세로7안길 7"
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
        "closed":  false,
        "x":  "126.93927062155718",
        "y":  "37.556133703722296",
        "road_address":  "서울 서대문구 신촌로 121"
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
        "closed":  false,
        "x":  "126.838914032042",
        "y":  "37.5594632224616",
        "road_address":  "서울 강서구 강서로 380"
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
        "closed":  false,
        "x":  "126.837845825537",
        "y":  "37.5593680566266",
        "road_address":  "서울 강서구 강서로 375-8"
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
        "closed":  false,
        "x":  "127.072967105433",
        "y":  "37.5481943891077",
        "road_address":  "서울 광진구 광나루로19길 9"
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
        "closed":  false,
        "x":  "127.07831364056923",
        "y":  "37.537006858743084",
        "road_address":  "서울 광진구 아차산로40길 16"
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
        "closed":  false,
        "x":  "126.93697434513",
        "y":  "37.5520644956517",
        "road_address":  "서울 마포구 백범로 28"
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
        "closed":  false,
        "x":  "127.247918109028",
        "y":  "37.6648544170494",
        "road_address":  "경기 남양주시 천마산로16번길 16"
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
        "closed":  false,
        "x":  "127.248669169781",
        "y":  "37.6548880029093",
        "road_address":  "경기 남양주시 호평동"
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
        "closed":  false,
        "x":  "127.240634393294",
        "y":  "37.6545010272981",
        "road_address":  "경기 남양주시 늘을1로16번안길 9-31"
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
        "closed":  false,
        "x":  "126.93732790288075",
        "y":  "37.551499758060245",
        "road_address":  "서울 마포구 백범로 36"
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
        "closed":  true,
        "x":  "126.914613374473",
        "y":  "37.5550949138083",
        "road_address":  "서울 마포구 서교동"
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
        "closed":  true,
        "x":  "126.67490303074",
        "y":  "37.4897846845719",
        "road_address":  "인천 서해구 가정로58번길 31"
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
        "closed":  false,
        "x":  "126.851506655954",
        "y":  "37.5519014474",
        "road_address":  "서울 강서구 까치산로27길 21"
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
        "closed":  false,
        "x":  "126.997468304522",
        "y":  "37.5891076921368",
        "road_address":  "서울 종로구 명륜1가"
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
        "closed":  false,
        "x":  "127.000863821",
        "y":  "37.5821457430079",
        "road_address":  "서울 종로구 대학로11길 17-2"
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
        "closed":  false,
        "x":  "126.93459976175461",
        "y":  "37.55501397204212",
        "road_address":  "서울 마포구 신촌로16길 16"
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
        "closed":  true,
        "x":  "128.888534674313",
        "y":  "37.7546827353051",
        "road_address":  "강원특별자치도 강릉시 골말길 43"
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
        "closed":  false,
        "x":  "126.985922982493",
        "y":  "37.5642015928457",
        "road_address":  "서울 중구 명동길 65"
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
        "closed":  false,
        "x":  "126.985600488268",
        "y":  "37.5637465508049",
        "road_address":  "서울 중구 명동길 58"
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
        "closed":  false,
        "x":  "126.827453357092",
        "y":  "37.5678659302083",
        "road_address":  "서울 강서구 마곡중앙로 161-1"
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
        "closed":  false,
        "x":  "127.10928894142769",
        "y":  "37.5149320396259",
        "road_address":  "서울 송파구 올림픽로32길 13"
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
        "closed":  true,
        "x":  "127.100567750768",
        "y":  "37.506317177468",
        "road_address":  "서울 송파구 송파대로49길 37"
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
        "closed":  false,
        "x":  "126.937386513497",
        "y":  "37.5531351004965",
        "road_address":  "서울 마포구 백범로 17"
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
        "closed":  false,
        "x":  "126.919160804394",
        "y":  "37.5486721973745",
        "road_address":  "서울 마포구 독막로7길 20"
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
        "closed":  false,
        "x":  "127.08323502304",
        "y":  "37.5091129647623",
        "road_address":  "서울 송파구 올림픽로12길 28"
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
        "closed":  true,
        "x":  "127.081716462827",
        "y":  "37.5094960509377",
        "road_address":  "서울 송파구 백제고분로9길 24"
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
        "closed":  false,
        "x":  "127.03062845349135",
        "y":  "37.50095899328744",
        "road_address":  "서울 강남구 테헤란로7길 22"
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
        "closed":  false,
        "x":  "126.92623520478044",
        "y":  "37.55497750773826",
        "road_address":  "서울 마포구 와우산로29마길 27"
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
        "closed":  false,
        "x":  "127.108058106145",
        "y":  "37.5101028907187",
        "road_address":  "서울 송파구 오금로16길 18"
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
        "closed":  false,
        "x":  "127.108669398904",
        "y":  "37.515147050052",
        "road_address":  "서울 송파구 오금로11길 11-8"
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
        "closed":  false,
        "x":  "126.94323563726365",
        "y":  "37.55097566200399",
        "road_address":  "서울 마포구 백범로 35"
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
        "closed":  true,
        "x":  "126.830205192607",
        "y":  "37.5747859514343",
        "road_address":  "서울 강서구 마곡동"
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
        "closed":  false,
        "x":  "126.90621425176386",
        "y":  "37.560064747557675",
        "road_address":  "서울 마포구 월드컵로 137"
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
        "closed":  false,
        "x":  "126.94432635888434",
        "y":  "37.55733542332081",
        "road_address":  "서울 서대문구 이화여대1길 28"
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
        "closed":  false,
        "x":  "126.98206668511908",
        "y":  "37.58320935821786",
        "road_address":  "서울 종로구 삼청로 86-3"
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
        "closed":  false,
        "x":  "126.981681720862",
        "y":  "37.5833399431508",
        "road_address":  "서울 종로구 삼청로 89"
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
        "closed":  false,
        "x":  "126.982175371656",
        "y":  "37.583210275679",
        "road_address":  "서울 종로구 삼청로 86-5"
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
        "closed":  false,
        "x":  "126.969990298768",
        "y":  "37.5457876314379",
        "road_address":  "서울 용산구 청파로51길 4"
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
        "closed":  false,
        "x":  "126.935682197735",
        "y":  "37.557059830754",
        "road_address":  "서울 서대문구 연세로5나길 10"
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
        "closed":  false,
        "x":  "126.899485634762",
        "y":  "37.5171112504905",
        "road_address":  "서울 영등포구 문래동"
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
        "closed":  false,
        "x":  "126.894219996134",
        "y":  "37.5131872872597",
        "road_address":  "서울 영등포구 도림로133길 13"
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
        "closed":  false,
        "x":  "126.93770609702968",
        "y":  "37.55260097777254",
        "road_address":  "서울 마포구 백범로 23"
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
        "closed":  false,
        "x":  "126.949878054097",
        "y":  "37.5415244863241",
        "road_address":  "서울 마포구 도화동"
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
        "closed":  false,
        "x":  "126.935632972832",
        "y":  "37.5590257796027",
        "road_address":  "서울 서대문구 연세로11길 22"
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
        "closed":  false,
        "x":  "126.82849013769761",
        "y":  "37.5590043494275",
        "road_address":  "서울 강서구 공항대로 190"
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
        "closed":  false,
        "x":  "126.834451613784",
        "y":  "37.5527031795237",
        "road_address":  "서울 강서구 강서로47길 29"
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
        "closed":  false,
        "x":  "127.109195503542",
        "y":  "37.5152375661868",
        "road_address":  "서울 송파구 올림픽로32길 9"
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
        "closed":  false,
        "x":  "127.109152577432",
        "y":  "37.5098396922142",
        "road_address":  "서울 송파구 백제고분로45길 21"
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
        "closed":  false,
        "x":  "126.940107924145",
        "y":  "37.55636839073678",
        "road_address":  "서울 서대문구 신촌로 127"
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
        "closed":  false,
        "x":  "126.92113311107899",
        "y":  "37.55523549930134",
        "road_address":  "서울 마포구 양화로 133"
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
        "closed":  false,
        "x":  "126.945685547957",
        "y":  "37.546497950487",
        "road_address":  "서울 마포구 백범로 127-16"
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
        "closed":  false,
        "x":  "126.967897022924",
        "y":  "37.5401342099166",
        "road_address":  "서울 용산구 원효로83길 12"
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
        "closed":  false,
        "x":  "126.93774460346162",
        "y":  "37.55800788425997",
        "road_address":  "서울 서대문구 명물길 21"
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
        "closed":  false,
        "x":  "126.93735988230577",
        "y":  "37.55115018774657",
        "road_address":  "서울 마포구 서강로16길 72"
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
        "closed":  false,
        "x":  "126.833037543012",
        "y":  "37.5600686368922",
        "road_address":  "서울 강서구 마곡동로 55"
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
        "closed":  false,
        "x":  "126.989539897203",
        "y":  "37.5760788899813",
        "road_address":  "서울 종로구 율곡로6길 27-5"
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
        "closed":  false,
        "x":  "127.004210503561",
        "y":  "37.5635266097207",
        "road_address":  "서울 중구 쌍림동"
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
        "closed":  false,
        "x":  "126.922678316558",
        "y":  "37.5471861034663",
        "road_address":  "서울 마포구 와우산로7길 6"
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
        "closed":  false,
        "x":  "126.947346397262",
        "y":  "37.5566286248458",
        "road_address":  "서울 마포구 신촌로 196"
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
        "closed":  false,
        "x":  "129.025960515909",
        "y":  "35.1012814676825",
        "road_address":  "부산 중구 부평1길 40"
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
        "closed":  false,
        "x":  "129.0412763252246",
        "y":  "35.11505391417989",
        "road_address":  "부산 동구 중앙대로 206"
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
        "closed":  false,
        "x":  "129.033542661971",
        "y":  "35.0982157491646",
        "road_address":  "부산 중구 구덕로22번길 8"
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
        "closed":  false,
        "x":  "129.02405324419854",
        "y":  "35.076558879410285",
        "road_address":  "부산 서구 등대로 9"
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
        "closed":  false,
        "x":  "129.02595233473696",
        "y":  "35.1014825667343",
        "road_address":  "부산 중구 부평1길 48"
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
        "closed":  false,
        "x":  "129.02577496381926",
        "y":  "35.102069493716535",
        "road_address":  "부산 중구 부평1길 57"
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
        "closed":  false,
        "x":  "129.031119567546",
        "y":  "35.0967207788464",
        "road_address":  "부산 중구 자갈치해안로 52"
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
        "closed":  false,
        "x":  "129.03490129313033",
        "y":  "35.10527527332874",
        "road_address":  "부산 중구 동광길 58"
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
        "closed":  false,
        "x":  "126.97057199663817",
        "y":  "37.55426527218926",
        "road_address":  "서울 중구 한강대로 405"
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
        "closed":  false,
        "x":  "126.91210783279563",
        "y":  "37.550188043280095",
        "road_address":  "서울 마포구 월드컵로1길 14"
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
        "closed":  false,
        "x":  "126.919842434216",
        "y":  "37.5504233017944",
        "road_address":  "서울 마포구 잔다리로3안길 27"
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
        "closed":  false,
        "x":  "126.964453572506",
        "y":  "37.5288256634599",
        "road_address":  "서울 용산구 한강대로23길 55"
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
        "closed":  false,
        "x":  "126.970267952669",
        "y":  "37.5304941232411",
        "road_address":  "서울 용산구 한강대로42길 12"
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
        "closed":  false,
        "x":  "126.99507632992307",
        "y":  "37.565006018056266",
        "road_address":  "서울 중구 을지로20길 32-5"
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
        "closed":  false,
        "x":  "126.969228070947",
        "y":  "37.5281422426636",
        "road_address":  "서울 용산구 한강로동"
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
        "closed":  false,
        "x":  "127.002560900377",
        "y":  "37.5822943823194",
        "road_address":  "서울 종로구 대학로8가길 30"
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
        "closed":  false,
        "x":  "126.998034595765",
        "y":  "37.5826529891593",
        "road_address":  "서울 종로구 창경궁로 231"
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
        "closed":  false,
        "x":  "126.947813644339",
        "y":  "37.5422588077443",
        "road_address":  "서울 마포구 마포대로 63-8"
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
        "closed":  false,
        "x":  "126.952795541595",
        "y":  "37.5444458278995",
        "road_address":  "서울 마포구 만리재로 15"
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
        "closed":  true,
        "x":  "126.922261659865",
        "y":  "37.5572085308328",
        "road_address":  "서울 마포구 동교동"
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
        "closed":  false,
        "x":  "126.922690619283",
        "y":  "37.5528047367104",
        "road_address":  "서울 마포구 와우산로21길 20-11"
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
        "closed":  false,
        "x":  "126.944318223259",
        "y":  "37.5500166143075",
        "road_address":  "서울 마포구 대흥로20안길 7"
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
        "closed":  false,
        "x":  "126.9281883749191",
        "y":  "37.525680001157376",
        "road_address":  "서울 영등포구 여의대로 108"
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
        "closed":  false,
        "x":  "126.92910856147604",
        "y":  "37.52520122398314",
        "road_address":  "서울 영등포구 여의대로 108"
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
        "closed":  false,
        "x":  "127.05470632437883",
        "y":  "37.54541386780092",
        "road_address":  "서울 성동구 성수일로8길 40-1"
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
        "closed":  false,
        "x":  "127.04929664067309",
        "y":  "37.544316130118645",
        "road_address":  "서울 성동구 성수일로 39"
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
        "closed":  false,
        "x":  "127.06159358931882",
        "y":  "37.540469395334675",
        "road_address":  "서울 성동구 연무장길 114"
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
        "closed":  false,
        "x":  "126.94442685140389",
        "y":  "37.546982102197966",
        "road_address":  "서울 마포구 백범로 117"
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
        "closed":  false,
        "x":  "126.923083654402",
        "y":  "37.5513751096445",
        "road_address":  "서울 마포구 와우산로 77"
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
        "closed":  false,
        "x":  "126.93626042768416",
        "y":  "37.55584650089678",
        "road_address":  "서울 서대문구 신촌로 87-8"
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
        "closed":  false,
        "x":  "126.947679108936",
        "y":  "37.5420911622906",
        "road_address":  "서울 마포구 마포대로 63-8"
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
        "closed":  false,
        "x":  "126.865919598147",
        "y":  "37.5488111522088",
        "road_address":  "서울 양천구 목동중앙북로7가길 25"
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
        "closed":  false,
        "x":  "126.49303121145189",
        "y":  "37.74118871739712",
        "road_address":  "인천 강화군 강화읍 중앙로 17-9"
    },
    {
        "category":  "🍚한식, 🍽️뷔페",
        "name":  "로운 신촌본점",
        "date":  "2025-10-28",
        "location_small":  "동교동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/26874633",
        "location_large":  "서울 마포구",
        "menu":  [
                     "샤브샤브"
                 ],
        "visit_count":  2,
        "closed":  false,
        "x":  "126.922261659865",
        "y":  "37.5572085308328",
        "road_address":  "서울 마포구 동교동"
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
        "closed":  true,
        "x":  "126.924776753718",
        "y":  "37.5456269289382",
        "road_address":  "서울 마포구 상수동"
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
        "closed":  false,
        "x":  "126.701806586721",
        "y":  "37.4462648950513",
        "road_address":  "인천 남동구 성말로13번길 15"
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
        "closed":  false,
        "x":  "126.94014932685397",
        "y":  "37.54705209148703",
        "road_address":  "서울 마포구 독막로 239"
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
        "closed":  false,
        "x":  "126.90810234071007",
        "y":  "37.55526031421258",
        "road_address":  "서울 마포구 월드컵로15길 40"
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
        "closed":  false,
        "x":  "127.05640781369328",
        "y":  "37.50881166846632",
        "road_address":  "서울 강남구 삼성로96길 7"
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
        "closed":  false,
        "x":  "127.055057923832",
        "y":  "37.5188107457147",
        "road_address":  "서울 강남구 삼성로122길 35"
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
        "closed":  true,
        "x":  "126.934193637741",
        "y":  "37.5586862112855",
        "road_address":  "서울 서대문구 창천동"
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
        "closed":  false,
        "x":  "126.9366888686437",
        "y":  "37.5577613506593",
        "road_address":  "서울 서대문구 연세로 23"
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
        "closed":  false,
        "x":  "127.077119755532",
        "y":  "37.558780275343",
        "road_address":  "서울 광진구 면목로 53"
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
        "closed":  true,
        "x":  "127.073018338792",
        "y":  "37.5311077958687",
        "road_address":  "서울 광진구 자양동"
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
        "closed":  true,
        "x":  "126.949878054097",
        "y":  "37.5415244863241",
        "road_address":  "서울 마포구 도화동"
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
        "closed":  false,
        "x":  "126.937231383478",
        "y":  "37.5518898389526",
        "road_address":  "서울 마포구 백범로 30"
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
        "closed":  false,
        "x":  "127.038482017226",
        "y":  "37.4909537197216",
        "road_address":  "서울 강남구 도곡동"
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
        "closed":  false,
        "x":  "127.023086583323",
        "y":  "37.5088661289441",
        "road_address":  "서울 강남구 강남대로124길 5"
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
        "closed":  false,
        "x":  "126.94566566204271",
        "y":  "37.555186267404935",
        "road_address":  "서울 마포구 대흥로 183"
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
        "closed":  true,
        "x":  "126.92977041133",
        "y":  "37.549273643204",
        "road_address":  "서울 마포구 창전동"
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
        "closed":  true,
        "x":  "126.935226865858",
        "y":  "37.5470206619261",
        "road_address":  "서울 마포구 신수동"
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
        "closed":  false,
        "x":  "126.93844128678607",
        "y":  "37.548970340512334",
        "road_address":  "서울 마포구 광성로6안길 4"
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
        "closed":  false,
        "x":  "126.91757523710363",
        "y":  "37.564223214764375",
        "road_address":  "서울 마포구 성미산로17길 62"
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
        "closed":  false,
        "x":  "127.017626498393",
        "y":  "37.2796253788949",
        "road_address":  "경기 수원시 팔달구 정조로800번길 15"
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
        "closed":  false,
        "x":  "127.0133099148048",
        "y":  "37.2850844394094",
        "road_address":  "경기 수원시 팔달구 화서문로48번길 6"
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
        "closed":  false,
        "x":  "127.01354102059703",
        "y":  "37.28471048201219",
        "road_address":  "경기 수원시 팔달구 신풍로45번길 13"
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
        "closed":  false,
        "x":  "126.3031049239171",
        "y":  "36.75164727550525",
        "road_address":  "충남 태안군 태안읍 중앙로 133-8"
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
        "closed":  false,
        "x":  "126.8365153956752",
        "y":  "37.55911304201471",
        "road_address":  "서울 강서구 공항대로 261"
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
        "closed":  false,
        "x":  "126.8338275445054",
        "y":  "37.56006704843297",
        "road_address":  "서울 강서구 마곡동로 56"
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
        "closed":  false,
        "x":  "128.59760500801406",
        "y":  "35.86206522622537",
        "road_address":  "대구 중구 봉산문화길 49"
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
        "closed":  false,
        "x":  "128.58913247604065",
        "y":  "35.857054606214064",
        "road_address":  "대구 중구 명덕로 173"
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
        "closed":  false,
        "x":  "128.5520037074249",
        "y":  "35.85444459855806",
        "road_address":  "대구 달서구 달구벌대로344길 52"
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
        "closed":  false,
        "x":  "128.55286960939725",
        "y":  "35.85519668305165",
        "road_address":  "대구 달서구 달구벌대로344길 26"
    },
    {
        "category":  "☕카페",
        "name":  "베이크백",
        "date":  "2025-08-29",
        "location_small":  "초량동",
        "rate":  "🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/247580637",
        "location_large":  "부산 동구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false,
        "x":  "129.03808840053208",
        "y":  "35.116781954197705",
        "road_address":  "부산 동구 초량중로 53"
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
        "closed":  false,
        "x":  "129.058173407004",
        "y":  "35.1514284028797",
        "road_address":  "부산 부산진구 서면로 10"
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
        "closed":  false,
        "x":  "129.1172775837413",
        "y":  "35.15302382513681",
        "road_address":  "부산 수영구 광남로130번길 9"
    },
    {
        "category":  "🍕피자",
        "name":  "이재모피자 서면점",
        "date":  "2025-08-28",
        "location_small":  "전포동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/190939248",
        "location_large":  "부산 부산진구",
        "menu":  [
                     "피자"
                 ],
        "visit_count":  1,
        "closed":  false,
        "x":  "129.064931554482",
        "y":  "35.1553073181522",
        "road_address":  "부산 부산진구 전포대로 207"
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
        "closed":  false,
        "x":  "129.06201291759663",
        "y":  "35.15696291698332",
        "road_address":  "부산 부산진구 동천로 91-4"
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
        "closed":  false,
        "x":  "129.0406268093405",
        "y":  "35.11728624151904",
        "road_address":  "부산 동구 중앙대로 225"
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
        "closed":  false,
        "x":  "126.940563220517",
        "y":  "37.5587977092409",
        "road_address":  "서울 서대문구 명물길 76-5"
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
        "closed":  false,
        "x":  "126.94780411973149",
        "y":  "37.539690053212894",
        "road_address":  "서울 마포구 삼개로 7"
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
        "closed":  false,
        "x":  "127.036007479757",
        "y":  "37.5653628302471",
        "road_address":  "서울 성동구 마장로26길 16"
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
        "closed":  false,
        "x":  "127.040111980463",
        "y":  "37.5616836399625",
        "road_address":  "서울 성동구 마조로11길 11-1"
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
        "closed":  false,
        "x":  "126.934437891046",
        "y":  "37.5589278143653",
        "road_address":  "서울 서대문구 신촌로11길 62"
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
        "closed":  true,
        "x":  "126.914613374473",
        "y":  "37.5550949138083",
        "road_address":  "서울 마포구 서교동"
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
        "closed":  false,
        "x":  "126.97267431265891",
        "y":  "37.53369145675591",
        "road_address":  "서울 용산구 한강대로 168-2"
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
        "closed":  false,
        "x":  "126.9037159932",
        "y":  "37.5172337071695",
        "road_address":  "서울 영등포구 영중로 15"
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
        "closed":  false,
        "x":  "126.84020218942791",
        "y":  "37.55938045949591",
        "road_address":  "서울 강서구 강서로56길 24"
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
        "closed":  false,
        "x":  "126.988832996898",
        "y":  "37.5794521476112",
        "road_address":  "서울 종로구 창덕궁1길 8"
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
        "closed":  true,
        "x":  "126.989947741298",
        "y":  "37.5737903989717",
        "road_address":  "서울 종로구 돈화문로11다길 40"
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
        "closed":  false,
        "x":  "126.90626310437702",
        "y":  "37.55630312423827",
        "road_address":  "서울 마포구 망원로8길 27"
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
        "closed":  false,
        "x":  "126.909429477212",
        "y":  "37.5574471589323",
        "road_address":  "서울 마포구 월드컵로20길 6"
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
        "closed":  false,
        "x":  "126.93986674591306",
        "y":  "37.549470228205024",
        "road_address":  "서울 마포구 서강대길 11"
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
        "closed":  false,
        "x":  "126.93851595027311",
        "y":  "37.54900011237012",
        "road_address":  "서울 마포구 광성로6길 16"
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
        "closed":  false,
        "x":  "126.94763211747",
        "y":  "37.5429470910032",
        "road_address":  "서울 마포구 독막로 320"
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
        "closed":  true,
        "x":  "127.043351028535",
        "y":  "37.5417253860375",
        "road_address":  "서울 성동구 성수동1가"
    },
    {
        "category":  "☕카페",
        "name":  "쎈느",
        "date":  "2025-08-10",
        "location_small":  "성수동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/1594748709",
        "location_large":  "서울 성동구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false,
        "x":  "127.053444239349",
        "y":  "37.5448936682654",
        "road_address":  "서울 성동구 연무장5길 20"
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
        "closed":  false,
        "x":  "126.98977918811244",
        "y":  "37.56465428978922",
        "road_address":  "서울 중구 마른내로 18"
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
        "closed":  false,
        "x":  "126.99219906601763",
        "y":  "37.56528967678614",
        "road_address":  "서울 중구 을지로14길 21"
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
        "closed":  false,
        "x":  "126.94598788690062",
        "y":  "37.54464923911307",
        "road_address":  "서울 마포구 독막로 295"
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
        "closed":  false,
        "x":  "126.830205192607",
        "y":  "37.5747859514343",
        "road_address":  "서울 강서구 마곡동"
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
        "closed":  false,
        "x":  "126.83152606056949",
        "y":  "37.55979979498884",
        "road_address":  "서울 강서구 공항대로 213"
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
        "closed":  false,
        "x":  "126.937358235632",
        "y":  "37.5585257532228",
        "road_address":  "서울 서대문구 명물1길 24"
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
        "closed":  true,
        "x":  "126.934193637741",
        "y":  "37.5586862112855",
        "road_address":  "서울 서대문구 창천동"
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
        "closed":  false,
        "x":  "126.945528667601",
        "y":  "37.5474871749408",
        "road_address":  "서울 마포구 숭문길 24"
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
        "closed":  false,
        "x":  "126.925528616015",
        "y":  "37.5610569923218",
        "road_address":  "서울 마포구 동교로38길 42-6"
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
        "closed":  false,
        "x":  "126.82489578568428",
        "y":  "37.55843504991486",
        "road_address":  "서울 강서구 마곡중앙1로 20"
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
        "closed":  false,
        "x":  "127.10907297350087",
        "y":  "37.51265270017182",
        "road_address":  "서울 송파구 오금로15길 7-8"
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
        "closed":  false,
        "x":  "126.93931253735",
        "y":  "37.5463128453271",
        "road_address":  "서울 마포구 독막로34길 22"
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
        "closed":  true,
        "x":  "126.935226865858",
        "y":  "37.5470206619261",
        "road_address":  "서울 마포구 신수동"
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
        "closed":  false,
        "x":  "126.952640400463",
        "y":  "37.5428410858998",
        "road_address":  "서울 마포구 백범로 202"
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
        "closed":  false,
        "x":  "127.2644993424988",
        "y":  "37.654240003482165",
        "road_address":  "경기 남양주시 마치로 118"
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
        "closed":  false,
        "x":  "127.24108120727",
        "y":  "37.6549506052117",
        "road_address":  "경기 남양주시 늘을1로16번길 9-21"
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
        "closed":  false,
        "x":  "127.151542638307",
        "y":  "37.6130533533373",
        "road_address":  "경기 남양주시 다산순환로 20"
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
        "closed":  false,
        "x":  "126.93950760951351",
        "y":  "37.54297023850897",
        "road_address":  "서울 마포구 토정로 263"
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
        "closed":  false,
        "x":  "126.97096315701549",
        "y":  "37.555330348330536",
        "road_address":  "서울 중구 한강대로 405"
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
        "closed":  false,
        "x":  "127.246831243028",
        "y":  "37.6556288647512",
        "road_address":  "경기 남양주시 호평로60번길 3-1"
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
        "closed":  false,
        "x":  "127.25176727990113",
        "y":  "37.669940395227115",
        "road_address":  "경기 남양주시 천마산로 110"
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
        "closed":  false,
        "x":  "126.92217397074651",
        "y":  "37.5522899275144",
        "road_address":  "서울 마포구 와우산로21길 31"
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
        "closed":  false,
        "x":  "126.993578151155",
        "y":  "37.533638581477",
        "road_address":  "서울 용산구 이태원로26길 19"
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
        "closed":  false,
        "x":  "127.000259102856",
        "y":  "37.5369192994567",
        "road_address":  "서울 용산구 이태원로 247"
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
        "closed":  false,
        "x":  "126.9379315565369",
        "y":  "37.55775390149564",
        "road_address":  "서울 서대문구 명물길 20"
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
        "closed":  false,
        "x":  "126.943949371176",
        "y":  "37.54992814194643",
        "road_address":  "서울 마포구 대흥로 118"
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
        "closed":  false,
        "x":  "126.937139892034",
        "y":  "37.5570714277802",
        "road_address":  "서울 서대문구 연세로4길 1"
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
        "closed":  false,
        "x":  "126.935312613987",
        "y":  "37.5577894365756",
        "road_address":  "서울 서대문구 연세로7길 26"
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
        "closed":  false,
        "x":  "126.71797535352215",
        "y":  "37.8300509094126",
        "road_address":  "경기 파주시 탄현면 자유로 3902-10"
    },
    {
        "category":  "🍔패스트푸드",
        "name":  "롯데리아 인천공항제2여객터미널점",
        "date":  "2025-07-16",
        "location_small":  "운서동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1572570780",
        "location_large":  "인천 중구",
        "menu":  [
                     "햄버거"
                 ],
        "visit_count":  1,
        "closed":  false,
        "x":  "126.43381270164998",
        "y":  "37.467752274568376",
        "road_address":  "인천 영종구 운서동 2868"
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
        "closed":  true,
        "x":  "128.59425526259523",
        "y":  "38.190315799660304",
        "road_address":  "강원특별자치도 속초시 동해대로 4024"
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
        "closed":  false,
        "x":  "126.94021725919359",
        "y":  "37.54700707595931",
        "road_address":  "서울 마포구 독막로 239"
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
        "closed":  true,
        "x":  "126.916233840882",
        "y":  "37.6057697551009",
        "road_address":  "서울 은평구 역말로 52"
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
        "closed":  false,
        "x":  "126.9456257629914",
        "y":  "37.547794640459514",
        "road_address":  "서울 마포구 숭문4길 5"
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
        "closed":  false,
        "x":  "126.934009946062",
        "y":  "37.553941456682",
        "road_address":  "서울 마포구 서강로 121"
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
        "closed":  false,
        "x":  "127.10911317847267",
        "y":  "37.51463036596342",
        "road_address":  "서울 송파구 오금로11길 16"
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
        "closed":  true,
        "x":  "126.947212193537",
        "y":  "37.560768646354",
        "road_address":  "서울 서대문구 대현동"
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
        "closed":  false,
        "x":  "126.93020769179596",
        "y":  "37.55605391166005",
        "road_address":  "서울 마포구 와우산로37길 11"
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
        "closed":  false,
        "x":  "126.964741616619",
        "y":  "37.5297718014857",
        "road_address":  "서울 용산구 한강대로23길 55"
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
        "closed":  false,
        "x":  "126.932231599525",
        "y":  "37.5531655913122",
        "road_address":  "서울 마포구 서강로9길 17"
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
        "closed":  false,
        "x":  "127.01493579619",
        "y":  "37.5626607834625",
        "road_address":  "서울 중구 다산로 217-1"
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
        "closed":  false,
        "x":  "127.018873248637",
        "y":  "37.5662425808079",
        "road_address":  "서울 중구 퇴계로83길 10-7"
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
        "closed":  true,
        "x":  "126.922023205508",
        "y":  "37.5644776141885",
        "road_address":  "서울 마포구 연남동"
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
        "closed":  true,
        "x":  "126.943403941965",
        "y":  "37.5498936438386",
        "road_address":  "서울 마포구 대흥동"
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
        "closed":  false,
        "x":  "126.93502763937772",
        "y":  "37.556219742880444",
        "road_address":  "서울 서대문구 연세로5다길 5"
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
        "closed":  false,
        "x":  "126.935072339036",
        "y":  "37.5581812384324",
        "road_address":  "서울 서대문구 연세로7안길 32"
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
        "closed":  false,
        "x":  "126.907718732254",
        "y":  "37.5552212721406",
        "road_address":  "서울 마포구 월드컵로17길 48"
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
        "closed":  false,
        "x":  "126.91813406893507",
        "y":  "37.637882274142655",
        "road_address":  "서울 은평구 통일로 1050"
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
        "closed":  false,
        "x":  "126.918412662551",
        "y":  "37.6203745045582",
        "road_address":  "서울 은평구 통일로83길 17-26"
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
        "closed":  true,
        "x":  "126.914367182376",
        "y":  "37.6198652831792",
        "road_address":  "서울 은평구 갈현동"
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
        "closed":  false,
        "x":  "126.93793263638513",
        "y":  "37.64097031230355",
        "road_address":  "서울 은평구 연서로 534"
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
        "closed":  true,
        "x":  "126.934193637741",
        "y":  "37.5586862112855",
        "road_address":  "서울 서대문구 창천동"
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
        "closed":  false,
        "x":  "126.93520364044934",
        "y":  "37.55816329061556",
        "road_address":  "서울 서대문구 연세로7안길 30"
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
        "closed":  false,
        "x":  "127.043039797974",
        "y":  "37.5475243309654",
        "road_address":  "서울 성동구 서울숲6길 14"
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
        "closed":  true,
        "x":  "127.043000678235",
        "y":  "37.5464017006102",
        "road_address":  "서울 성동구 서울숲2길 40"
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
        "closed":  false,
        "x":  "127.09330197306778",
        "y":  "37.59505162703207",
        "road_address":  "서울 중랑구 상봉로 102"
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
        "closed":  false,
        "x":  "126.90717425962256",
        "y":  "37.517886098900334",
        "road_address":  "서울 영등포구 영중로6길 12"
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
        "closed":  true,
        "x":  "126.95674253894663",
        "y":  "37.5599526156342",
        "road_address":  "서울 서대문구 북아현로 28"
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
        "closed":  false,
        "x":  "126.9458988561371",
        "y":  "37.5457123773081",
        "road_address":  "서울 마포구 백범로26길 4-5"
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
        "closed":  false,
        "x":  "127.2447411096732",
        "y":  "37.65411957274314",
        "road_address":  "경기 남양주시 늘을2로14번길 5"
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
        "closed":  false,
        "x":  "128.833885521646",
        "y":  "37.8943584186524",
        "road_address":  "강원특별자치도 강릉시 주문진읍 해안로 1822"
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
        "closed":  false,
        "x":  "128.822040327852",
        "y":  "37.9029724098392",
        "road_address":  "강원특별자치도 강릉시 주문진읍 연주로 571"
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
        "closed":  false,
        "x":  "128.89938319424553",
        "y":  "37.753994860582054",
        "road_address":  "강원특별자치도 강릉시 금성로13번길 7-2"
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
        "closed":  false,
        "x":  "128.8991505538337",
        "y":  "37.75421481297129",
        "road_address":  "강원특별자치도 강릉시 금성로13번길 3-1"
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
        "closed":  false,
        "x":  "128.913958467231",
        "y":  "37.7867512763543",
        "road_address":  "강원특별자치도 강릉시 초당원길 63"
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
        "closed":  false,
        "x":  "128.917083727592",
        "y":  "37.7922549981104",
        "road_address":  "강원특별자치도 강릉시 초당순두부길 110"
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
        "closed":  false,
        "x":  "128.91745174368145",
        "y":  "37.792614746049956",
        "road_address":  "강원특별자치도 강릉시 초당순두부길 116"
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
        "closed":  false,
        "x":  "127.11083904137595",
        "y":  "37.51524594638392",
        "road_address":  "서울 송파구 오금로11길 34"
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
        "closed":  false,
        "x":  "126.96575428397841",
        "y":  "37.52952432403887",
        "road_address":  "서울 용산구 한강대로23길 55"
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
        "closed":  false,
        "x":  "126.97146707023337",
        "y":  "37.53080976952272",
        "road_address":  "서울 용산구 한강대로40가길 15"
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
        "closed":  true,
        "x":  "126.963859769762",
        "y":  "37.5097593560264",
        "road_address":  "서울 동작구 현충로 75"
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
        "closed":  true,
        "x":  "126.914613374473",
        "y":  "37.5550949138083",
        "road_address":  "서울 마포구 서교동"
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
        "closed":  false,
        "x":  "126.9332360541",
        "y":  "37.5549879808756",
        "road_address":  "서울 마포구 신촌로12다길 11"
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
        "closed":  false,
        "x":  "126.937761943492",
        "y":  "37.5575709097844",
        "road_address":  "서울 서대문구 명물길 16"
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
        "closed":  false,
        "x":  "126.99051504569299",
        "y":  "37.572474993314",
        "road_address":  "서울 종로구 돈화문로11길 17"
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
        "closed":  false,
        "x":  "126.999357080154",
        "y":  "37.5665233963507",
        "road_address":  "서울 중구 을지로 192"
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
        "closed":  false,
        "x":  "126.924481549594",
        "y":  "37.5533401874318",
        "road_address":  "서울 마포구 와우산로23길 9"
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
        "closed":  false,
        "x":  "126.94606641992172",
        "y":  "37.55815253443614",
        "road_address":  "서울 서대문구 이화여대2가길 17"
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
        "closed":  false,
        "x":  "126.82987721011136",
        "y":  "37.56071644647294",
        "road_address":  "서울 강서구 마곡중앙6로 21"
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
        "closed":  false,
        "x":  "127.24820286187962",
        "y":  "37.65608548662848",
        "road_address":  "경기 남양주시 호평로 76-4"
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
        "closed":  true,
        "x":  "126.884298623229",
        "y":  "37.4732210421194",
        "road_address":  "서울 금천구 가산디지털1로 83"
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
        "closed":  false,
        "x":  "129.21364442351",
        "y":  "35.8408398161359",
        "road_address":  "경북 경주시 태종로 783"
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
        "closed":  false,
        "x":  "129.209738797101",
        "y":  "35.8364785860142",
        "road_address":  "경북 경주시 포석로 1070"
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
        "closed":  false,
        "x":  "129.21081394804963",
        "y":  "35.83642366218696",
        "road_address":  "경북 경주시 손효자길 1"
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
        "closed":  false,
        "x":  "129.28367743254475",
        "y":  "35.84313285674398",
        "road_address":  "경북 경주시 한국관광1번로 34"
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
        "closed":  false,
        "x":  "129.232125346168",
        "y":  "35.8405825021536",
        "road_address":  "경북 경주시 분황로 91"
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
        "closed":  false,
        "x":  "129.209761926714",
        "y":  "35.836753880592",
        "road_address":  "경북 경주시 포석로 1074"
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
        "closed":  false,
        "x":  "129.209766058829",
        "y":  "35.8365438608965",
        "road_address":  "경북 경주시 포석로 1072"
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
        "closed":  false,
        "x":  "129.210309213717",
        "y":  "35.8356607543963",
        "road_address":  "경북 경주시 포석로 1058-7"
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
        "closed":  false,
        "x":  "129.21090737271513",
        "y":  "35.834487397456726",
        "road_address":  "경북 경주시 포석로1050번길 16"
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
        "closed":  false,
        "x":  "126.96469827517497",
        "y":  "37.53051511474561",
        "road_address":  "서울 용산구 한강대로23길 55"
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
        "closed":  false,
        "x":  "127.735340877281",
        "y":  "34.7402685441867",
        "road_address":  "전남광주통합특별시 여수시 중앙로 69-1"
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
        "closed":  false,
        "x":  "127.7351921868823",
        "y":  "34.74024780833005",
        "road_address":  "전남광주통합특별시 여수시 중앙로 69"
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
        "closed":  false,
        "x":  "127.730862600958",
        "y":  "34.7391363043933",
        "road_address":  "전남광주통합특별시 여수시 교동시장2길 13-7"
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
        "closed":  false,
        "x":  "127.746271316273",
        "y":  "34.7380729646194",
        "road_address":  "전남광주통합특별시 여수시 하멜로 64-1"
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
        "closed":  false,
        "x":  "127.735080177801",
        "y":  "34.7404233551947",
        "road_address":  "전남광주통합특별시 여수시 통제영4길 6-2"
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
        "closed":  false,
        "x":  "127.734654911772",
        "y":  "34.7407378040821",
        "road_address":  "전남광주통합특별시 여수시 통제영3길 10-13"
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
        "closed":  false,
        "x":  "126.830205192607",
        "y":  "37.5747859514343",
        "road_address":  "서울 강서구 마곡동"
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
        "closed":  false,
        "x":  "126.985818098555",
        "y":  "37.5741395610903",
        "road_address":  "서울 종로구 인사동8길 17"
    },
    {
        "category":  "☕카페",
        "name":  "제도",
        "date":  "2025-05-03",
        "location_small":  "부암동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/663617575",
        "location_large":  "서울 종로구",
        "menu":  [
                     "커피",
                     "푸딩"
                 ],
        "visit_count":  1,
        "closed":  false,
        "x":  "126.96390114146",
        "y":  "37.5952163308473",
        "road_address":  "서울 종로구 자하문로 236"
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
        "closed":  false,
        "x":  "126.91776714824687",
        "y":  "37.54923526002909",
        "road_address":  "서울 마포구 양화로6길 57-13"
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
        "closed":  false,
        "x":  "126.980783925",
        "y":  "37.4774865447807",
        "road_address":  "서울 동작구 사당로30길 163"
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
        "closed":  false,
        "x":  "127.05874045738226",
        "y":  "37.28510485250587",
        "road_address":  "경기 수원시 영통구 하동 1017-1"
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
        "closed":  false,
        "x":  "127.02849232423635",
        "y":  "37.2656255930321",
        "road_address":  "경기 수원시 팔달구 경수대로446번길 35"
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
        "closed":  false,
        "x":  "127.03233672046132",
        "y":  "37.265681371077825",
        "road_address":  "경기 수원시 팔달구 인계로138번길 27"
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
        "closed":  false,
        "x":  "127.05895007854548",
        "y":  "37.28494346234628",
        "road_address":  "경기 수원시 영통구 하동 1017-1"
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
        "closed":  false,
        "x":  "127.028470912462",
        "y":  "37.2656481242304",
        "road_address":  "경기 수원시 팔달구 경수대로446번길 35"
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
        "closed":  false,
        "x":  "127.030791961921",
        "y":  "37.2650816889973",
        "road_address":  "경기 수원시 팔달구 권광로187번길 38"
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
        "closed":  true,
        "x":  "127.0256380269",
        "y":  "37.269640385835",
        "road_address":  "경기 수원시 팔달구 인계동"
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
        "closed":  true,
        "x":  "126.71334625264315",
        "y":  "37.76841694570493",
        "road_address":  "경기 파주시 탄현면 장릉로51번길 48-21"
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
        "closed":  false,
        "x":  "126.93771215289712",
        "y":  "37.552123452044775",
        "road_address":  "서울 마포구 백범로 29"
    },
    {
        "category":  "☕카페",
        "name":  "런커피",
        "date":  "2025-04-16",
        "location_small":  "서교동",
        "rate":  "🥄🥄🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/473779689",
        "location_large":  "서울 마포구",
        "menu":  [
                     "카페"
                 ],
        "visit_count":  1,
        "closed":  false,
        "x":  "126.92939414278351",
        "y":  "37.55586962449436",
        "road_address":  "서울 마포구 와우산로35길 19"
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
        "closed":  true,
        "x":  "126.943403941965",
        "y":  "37.5498936438386",
        "road_address":  "서울 마포구 대흥동"
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
        "closed":  false,
        "x":  "127.24231808756844",
        "y":  "37.65476066703795",
        "road_address":  "경기 남양주시 늘을1로16번안길 11"
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
        "closed":  true,
        "x":  "127.248669169781",
        "y":  "37.6548880029093",
        "road_address":  "경기 남양주시 호평동"
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
        "closed":  false,
        "x":  "126.932003063646",
        "y":  "37.546862976734",
        "road_address":  "서울 마포구 창전로 45"
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
        "closed":  false,
        "x":  "126.91003486709137",
        "y":  "37.549060234249595",
        "road_address":  "서울 마포구 월드컵로1길 54"
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
        "closed":  false,
        "x":  "126.98879497308859",
        "y":  "37.538541469787916",
        "road_address":  "서울 용산구 회나무로6길 7"
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
        "closed":  true,
        "x":  "128.159114232086",
        "y":  "35.5687354736091",
        "road_address":  "경남 합천군 합천읍 옥산로 35-1"
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
        "closed":  true,
        "x":  "126.920446871396",
        "y":  "37.5481694126732",
        "road_address":  "서울 마포구 어울마당로 34"
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
        "closed":  false,
        "x":  "126.941355399246",
        "y":  "37.5458886060624",
        "road_address":  "서울 마포구 독막로38길 10"
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
        "closed":  true,
        "x":  "126.97961447609",
        "y":  "37.5747729531135",
        "road_address":  "서울 종로구"
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
        "closed":  false,
        "x":  "126.970848460404",
        "y":  "37.5795716114975",
        "road_address":  "서울 종로구 자하문로9길 6"
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
        "closed":  true,
        "x":  "126.928745224037",
        "y":  "37.3693156715678",
        "road_address":  "경기 군포시 산본로432번길 22"
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
        "closed":  false,
        "x":  "126.923933343474",
        "y":  "37.5627020958367",
        "road_address":  "서울 마포구 동교로39길 4-13"
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
        "closed":  false,
        "x":  "126.925734061649",
        "y":  "37.5604660679303",
        "road_address":  "서울 마포구 연희로1길 36"
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
        "closed":  false,
        "x":  "126.93618357158444",
        "y":  "37.557053795820565",
        "road_address":  "서울 서대문구 연세로5가길 1"
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
        "closed":  false,
        "x":  "126.937698395789",
        "y":  "37.5496168677679",
        "road_address":  "서울 마포구 광성로 42-1"
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
        "closed":  false,
        "x":  "126.8332500634493",
        "y":  "37.56069242639583",
        "road_address":  "서울 강서구 마곡동로 61"
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
        "closed":  false,
        "x":  "126.875179418788",
        "y":  "37.593096184191",
        "road_address":  "경기 고양시 덕양구 대덕로 52-31"
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
        "closed":  false,
        "x":  "126.848666519681",
        "y":  "37.5651451909398",
        "road_address":  "서울 강서구 양천로 401"
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
        "closed":  false,
        "x":  "126.907456823971",
        "y":  "37.5199018641922",
        "road_address":  "서울 영등포구 영중로14길 20-2"
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
        "closed":  false,
        "x":  "126.894144100905",
        "y":  "37.5132665075937",
        "road_address":  "서울 영등포구 도림로133길 14"
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
        "closed":  false,
        "x":  "126.91422299910181",
        "y":  "37.547133412121255",
        "road_address":  "서울 마포구 독막로2길 34"
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
        "closed":  false,
        "x":  "126.931753429649",
        "y":  "37.5538158362975",
        "road_address":  "서울 마포구 서강로9길 32"
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
        "closed":  false,
        "x":  "126.920301399217",
        "y":  "37.5487558645913",
        "road_address":  "서울 마포구 어울마당로 39"
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
        "closed":  false,
        "x":  "126.92848703789602",
        "y":  "37.525675677366685",
        "road_address":  "서울 영등포구 여의대로 108"
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
        "closed":  false,
        "x":  "127.10945644239983",
        "y":  "37.50957541679069",
        "road_address":  "서울 송파구 백제고분로45길 17-3"
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
        "closed":  false,
        "x":  "127.109028132482",
        "y":  "37.5137069158743",
        "road_address":  "서울 송파구 올림픽로32길 22-11"
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
        "closed":  false,
        "x":  "126.90767534775247",
        "y":  "37.516982785480984",
        "road_address":  "서울 영등포구 경인로 855"
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
        "closed":  false,
        "x":  "126.90845554476209",
        "y":  "37.5172266636234",
        "road_address":  "서울 영등포구 경인로 861-2"
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
        "closed":  false,
        "x":  "126.93463326967681",
        "y":  "37.558113421386196",
        "road_address":  "서울 서대문구 연세로7안길 37"
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
        "closed":  false,
        "x":  "126.93729575518155",
        "y":  "37.549348157115176",
        "road_address":  "서울 마포구 광성로4길 10"
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
        "closed":  false,
        "x":  "126.97095630857912",
        "y":  "37.555479912251364",
        "road_address":  "서울 중구 한강대로 405"
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
        "closed":  false,
        "x":  "126.935906296478",
        "y":  "37.5570473386552",
        "road_address":  "서울 서대문구 연세로5나길 6"
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
        "closed":  true,
        "x":  "126.935226865858",
        "y":  "37.5470206619261",
        "road_address":  "서울 마포구 신수동"
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
        "closed":  false,
        "x":  "126.935172949121",
        "y":  "37.5570108983962",
        "road_address":  "서울 서대문구 연세로5나길 18"
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
        "closed":  false,
        "x":  "126.912954031233",
        "y":  "37.55431974532",
        "road_address":  "서울 마포구 동교로 98"
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
        "closed":  false,
        "x":  "127.05431637398702",
        "y":  "37.54602762815355",
        "road_address":  "서울 성동구 아차산로7길 7"
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
        "closed":  false,
        "x":  "126.928861539562",
        "y":  "37.5256263484241",
        "road_address":  "서울 영등포구 여의대로 108"
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
        "closed":  false,
        "x":  "126.929113095956",
        "y":  "37.5251913156818",
        "road_address":  "서울 영등포구 여의대로 108"
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
        "closed":  false,
        "x":  "126.92882867674454",
        "y":  "37.525684893756576",
        "road_address":  "서울 영등포구 여의대로 108"
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
        "closed":  false,
        "x":  "126.95674253894663",
        "y":  "37.5599526156342",
        "road_address":  "서울 서대문구 북아현로 28"
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
        "closed":  false,
        "x":  "126.91185478667992",
        "y":  "37.550771701433334",
        "road_address":  "서울 마포구 월드컵로3길 14"
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
        "closed":  false,
        "x":  "126.911480410191",
        "y":  "37.5496424706689",
        "road_address":  "서울 마포구 양화로3길 15"
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
        "closed":  false,
        "x":  "126.92101155861117",
        "y":  "37.55888535760264",
        "road_address":  "서울 마포구 월드컵북로6길 46"
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
        "closed":  false,
        "x":  "126.92361172844988",
        "y":  "37.56065302218286",
        "road_address":  "서울 마포구 동교로 227-7"
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
        "closed":  true,
        "x":  "126.915520308531",
        "y":  "37.5587328917542",
        "road_address":  "서울 마포구 월드컵북로9길 34"
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
        "closed":  false,
        "x":  "126.93780962439024",
        "y":  "37.55739433945822",
        "road_address":  "서울 서대문구 연세로4길 19"
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
        "closed":  false,
        "x":  "126.830205192607",
        "y":  "37.5747859514343",
        "road_address":  "서울 강서구 마곡동"
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
        "closed":  false,
        "x":  "126.92917080290557",
        "y":  "37.55508291994997",
        "road_address":  "서울 마포구 와우산로29길 14-8"
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
        "closed":  false,
        "x":  "126.9455699952728",
        "y":  "37.54667629506072",
        "road_address":  "서울 마포구 백범로 127-24"
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
        "closed":  false,
        "x":  "126.936460908195",
        "y":  "37.558320747405",
        "road_address":  "서울 서대문구 연세로7안길 10-4"
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
        "closed":  false,
        "x":  "126.9474808857773",
        "y":  "37.54399668812217",
        "road_address":  "서울 마포구 독막로 311"
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
        "closed":  false,
        "x":  "126.92580905927265",
        "y":  "37.5613067449312",
        "road_address":  "서울 마포구 동교로38길 35"
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
        "closed":  false,
        "x":  "126.84469207753487",
        "y":  "35.214408884485934",
        "road_address":  "전남광주통합특별시 광산구 임방울대로800번길 72"
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
        "closed":  false,
        "x":  "126.848546028811",
        "y":  "35.2149978419255",
        "road_address":  "전남광주통합특별시 광산구 임방울대로826번길 60-2"
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
        "closed":  false,
        "x":  "126.850510199581",
        "y":  "35.215384258313",
        "road_address":  "전남광주통합특별시 광산구 월계로 223-20"
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
        "closed":  false,
        "x":  "126.93776017114652",
        "y":  "37.55425884227607",
        "road_address":  "서울 마포구 백범로1길 10"
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
        "closed":  false,
        "x":  "126.93797581300639",
        "y":  "37.54941879416359",
        "road_address":  "서울 마포구 광성로4길 11-10"
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
        "closed":  true,
        "x":  "126.943403941965",
        "y":  "37.5498936438386",
        "road_address":  "서울 마포구 대흥동"
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
        "closed":  true,
        "x":  "126.955397364431",
        "y":  "37.5457577930924",
        "road_address":  "서울 마포구 만리재옛길 20"
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
        "closed":  false,
        "x":  "126.94704503079411",
        "y":  "37.557081691724484",
        "road_address":  "서울 서대문구 신촌로 189"
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
        "closed":  false,
        "x":  "126.952858041119",
        "y":  "37.5601980016751",
        "road_address":  "서울 서대문구 북아현로1길 50"
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
        "closed":  false,
        "x":  "126.960034513244",
        "y":  "37.5501743473819",
        "road_address":  "서울 마포구 공덕동"
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
        "closed":  false,
        "x":  "126.954197508739",
        "y":  "37.5463682111099",
        "road_address":  "서울 마포구 마포대로8길 19"
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
        "closed":  false,
        "x":  "126.938253189363",
        "y":  "37.5492684728036",
        "road_address":  "서울 마포구 광성로6길 12"
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
        "closed":  false,
        "x":  "126.90766565590785",
        "y":  "37.51566821405505",
        "road_address":  "서울 영등포구 경인로 846"
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
        "closed":  false,
        "x":  "126.9031053467816",
        "y":  "37.5170962553236",
        "road_address":  "서울 영등포구 영중로 15"
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
        "closed":  false,
        "x":  "126.937805568533",
        "y":  "37.5541038945929",
        "road_address":  "서울 마포구 백범로1길 8-7"
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
        "closed":  true,
        "x":  "126.94565571696",
        "y":  "37.5470619620453",
        "road_address":  "서울 마포구 염리동"
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
        "closed":  false,
        "x":  "126.939163299213",
        "y":  "37.54893467477978",
        "road_address":  "서울 마포구 백범로 68"
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
        "closed":  false,
        "x":  "126.935096277257",
        "y":  "37.5566792892749",
        "road_address":  "서울 서대문구 연세로5길 26-9"
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
        "closed":  true,
        "x":  "126.934193637741",
        "y":  "37.5586862112855",
        "road_address":  "서울 서대문구 창천동"
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
        "closed":  false,
        "x":  "126.81575560825779",
        "y":  "37.57725372854616",
        "road_address":  "서울 강서구 금낭화로24나길 21"
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
        "closed":  false,
        "x":  "126.934728159431",
        "y":  "37.5583189012137",
        "road_address":  "서울 서대문구 연세로7안길 38"
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
        "closed":  true,
        "x":  "127.028715898311",
        "y":  "37.2635846787741",
        "road_address":  "경기 수원시"
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
        "closed":  false,
        "x":  "126.926127690218",
        "y":  "37.5618565525967",
        "road_address":  "서울 마포구 동교로38길 33-15"
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
        "closed":  false,
        "x":  "126.908947012046",
        "y":  "37.5577215919444",
        "road_address":  "서울 마포구 월드컵로 102"
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
        "closed":  false,
        "x":  "126.938856234595",
        "y":  "37.5591103845392",
        "road_address":  "서울 서대문구 연세로12길 33"
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
        "closed":  false,
        "x":  "126.904819804068",
        "y":  "37.5565578527785",
        "road_address":  "서울 마포구 포은로 106-1"
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
        "closed":  false,
        "x":  "126.904629945852",
        "y":  "37.556341460256",
        "road_address":  "서울 마포구 포은로 105"
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
        "closed":  false,
        "x":  "126.90711751929341",
        "y":  "37.55816976438649",
        "road_address":  "서울 마포구 망원로11길 7"
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
        "closed":  false,
        "x":  "126.90384593976802",
        "y":  "37.55699314630824",
        "road_address":  "서울 마포구 망원로 62-1"
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
        "closed":  false,
        "x":  "126.959078962168",
        "y":  "37.507480957569",
        "road_address":  "서울 동작구 흑석로13마길 65-3"
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
        "closed":  false,
        "x":  "126.966590753167",
        "y":  "37.5057750153538",
        "road_address":  "서울 동작구 흑석동"
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
        "closed":  false,
        "x":  "127.023165100946",
        "y":  "37.521386462287",
        "road_address":  "서울 강남구 논현로159길 65"
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
        "closed":  false,
        "x":  "127.023786472727",
        "y":  "37.5188707383286",
        "road_address":  "서울 강남구 도산대로15길 9"
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
        "closed":  false,
        "x":  "127.02136623689645",
        "y":  "37.520593918852164",
        "road_address":  "서울 강남구 강남대로162길 36"
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
        "closed":  true,
        "x":  "126.935226865858",
        "y":  "37.5470206619261",
        "road_address":  "서울 마포구 신수동"
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
        "closed":  false,
        "x":  "126.935144301465",
        "y":  "37.5574190344067",
        "road_address":  "서울 서대문구 연세로5가길 28"
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
        "closed":  true,
        "x":  "126.947212193537",
        "y":  "37.560768646354",
        "road_address":  "서울 서대문구 대현동"
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
        "closed":  true,
        "x":  "126.934193637741",
        "y":  "37.5586862112855",
        "road_address":  "서울 서대문구 창천동"
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
        "closed":  false,
        "x":  "126.946389315311",
        "y":  "37.5466190059557",
        "road_address":  "서울 마포구 백범로25길 9"
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
        "closed":  false,
        "x":  "126.909240521333",
        "y":  "37.5564739369448",
        "road_address":  "서울 마포구 월드컵로 87"
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
        "closed":  false,
        "x":  "126.90793357772125",
        "y":  "37.55812985867215",
        "road_address":  "서울 마포구 월드컵로 111"
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
        "closed":  false,
        "x":  "126.924508470287",
        "y":  "37.5603094182332",
        "road_address":  "서울 마포구 양화로23길 48"
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
        "closed":  false,
        "x":  "126.93769433918392",
        "y":  "37.51505086164332",
        "road_address":  "서울 동작구 노들로 674"
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
        "closed":  false,
        "x":  "126.94313260642294",
        "y":  "37.55104048429918",
        "road_address":  "서울 마포구 백범로 35"
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
        "closed":  false,
        "x":  "126.934827623124",
        "y":  "37.558471224652",
        "road_address":  "서울 서대문구 연세로7안길 34-7"
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
        "closed":  false,
        "x":  "126.90436241120919",
        "y":  "37.52036521750652",
        "road_address":  "서울 영등포구 영중로 43"
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
        "closed":  false,
        "x":  "126.907397073375",
        "y":  "37.518822415937",
        "road_address":  "서울 영등포구 영중로10길 20"
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
        "closed":  false,
        "x":  "126.837694740876",
        "y":  "37.5601463096162",
        "road_address":  "서울 강서구 마곡중앙6로 93"
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
        "closed":  false,
        "x":  "127.66758625010598",
        "y":  "37.625770711587116",
        "road_address":  "강원특별자치도 홍천군 서면 한치골길 48"
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
        "closed":  false,
        "x":  "126.958963206106",
        "y":  "37.5061330138949",
        "road_address":  "서울 동작구 흑석로 84"
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
        "closed":  false,
        "x":  "127.667396346952",
        "y":  "37.6207479685813",
        "road_address":  "강원특별자치도 홍천군 서면 한서로 2077"
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
        "closed":  false,
        "x":  "127.667054363669",
        "y":  "37.6205048379897",
        "road_address":  "강원특별자치도 홍천군 서면 한서로 2080"
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
        "closed":  true,
        "x":  "126.922023205508",
        "y":  "37.5644776141885",
        "road_address":  "서울 마포구 연남동"
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
        "closed":  false,
        "x":  "126.97138208999372",
        "y":  "37.554827693911555",
        "road_address":  "서울 중구 한강대로 405"
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
        "closed":  false,
        "x":  "126.919770362634",
        "y":  "37.5500925865034",
        "road_address":  "서울 마포구 독막로7길 51"
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
        "closed":  false,
        "x":  "126.92250850462",
        "y":  "37.554905743909",
        "road_address":  "서울 마포구 홍익로6길 8"
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
        "closed":  false,
        "x":  "126.929171955098",
        "y":  "37.5550612967006",
        "road_address":  "서울 마포구 와우산로29길 14-8"
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
        "closed":  false,
        "x":  "126.937132512577",
        "y":  "37.557772399681",
        "road_address":  "서울 서대문구 연세로 24"
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
        "closed":  false,
        "x":  "126.943716453256",
        "y":  "37.549659533637",
        "road_address":  "서울 마포구 대흥로 114-1"
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
        "closed":  false,
        "x":  "126.93735959025",
        "y":  "37.556907563045",
        "road_address":  "서울 서대문구 연세로4길 6"
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
        "closed":  false,
        "x":  "126.93766671300212",
        "y":  "37.55233065760533",
        "road_address":  "서울 마포구 백범로 23"
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
        "closed":  false,
        "x":  "129.04202640486332",
        "y":  "35.116895885741",
        "road_address":  "부산 동구 중앙대로226번길 7-2"
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
        "closed":  false,
        "x":  "129.039209316426",
        "y":  "35.1151112474007",
        "road_address":  "부산 동구 중앙대로 197"
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
        "closed":  true,
        "x":  "129.061033343231",
        "y":  "35.157149010173",
        "road_address":  "부산 부산진구 동천로95번길 21"
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
        "closed":  false,
        "x":  "129.029055711385",
        "y":  "35.0987451449116",
        "road_address":  "부산 중구 남포동5가 105-2"
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
        "closed":  false,
        "x":  "129.025751469647",
        "y":  "35.1013417362569",
        "road_address":  "부산 중구 부평1길 39"
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
        "closed":  false,
        "x":  "129.17090754329152",
        "y":  "35.16182200235073",
        "road_address":  "부산 해운대구 좌동순환로 455"
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
        "closed":  false,
        "x":  "129.16287693095907",
        "y":  "35.162016169133",
        "road_address":  "부산 해운대구 구남로41번길 40-1"
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
        "closed":  false,
        "x":  "129.123819137636",
        "y":  "35.1555523599608",
        "road_address":  "부산 수영구 민락수변로 1"
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
        "closed":  false,
        "x":  "129.1706949122984",
        "y":  "35.160345241226146",
        "road_address":  "부산 해운대구 달맞이길62번길 12-2"
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
        "closed":  false,
        "x":  "129.17285400053336",
        "y":  "35.15756615336712",
        "road_address":  "부산 해운대구 달맞이길62번길 53"
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
        "closed":  false,
        "x":  "129.16047587515158",
        "y":  "35.16549688629881",
        "road_address":  "부산 해운대구 우동1로20번길 74"
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
        "closed":  true,
        "x":  "126.92977041133",
        "y":  "37.549273643204",
        "road_address":  "서울 마포구 창전동"
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
        "closed":  false,
        "x":  "126.90388097844955",
        "y":  "37.56495798363224",
        "road_address":  "서울 마포구 월드컵로34길 14"
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
        "closed":  false,
        "x":  "126.9434151696065",
        "y":  "37.55899192384859",
        "road_address":  "서울 서대문구 이화여대길 89"
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
        "closed":  false,
        "x":  "126.935170013524",
        "y":  "37.5577866553711",
        "road_address":  "서울 서대문구 연세로7길 30"
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
        "closed":  false,
        "x":  "126.955533979739",
        "y":  "37.5557985695504",
        "road_address":  "서울 마포구 굴레방로 19"
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
        "closed":  false,
        "x":  "126.93710508818396",
        "y":  "37.55135097488961",
        "road_address":  "서울 마포구 서강로16길 67"
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
        "closed":  false,
        "x":  "126.936439089891",
        "y":  "37.5586910454423",
        "road_address":  "서울 서대문구 연세로9길 10-4"
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
        "closed":  false,
        "x":  "126.9709378771114",
        "y":  "37.530078027320805",
        "road_address":  "서울 용산구 한강대로40길 30"
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
        "closed":  false,
        "x":  "126.946069813945",
        "y":  "37.558154337987",
        "road_address":  "서울 서대문구 이화여대2가길 17"
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
        "closed":  false,
        "x":  "126.9540755559805",
        "y":  "37.54410034892666",
        "road_address":  "서울 마포구 백범로 205"
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
        "closed":  false,
        "x":  "126.928607243423",
        "y":  "37.5538536197938",
        "road_address":  "서울 마포구 와우산로 137"
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
        "closed":  false,
        "x":  "126.99428855905",
        "y":  "37.5351306754053",
        "road_address":  "서울 용산구 이태원로27가길 18"
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
        "closed":  false,
        "x":  "126.935510749155",
        "y":  "37.5590149009438",
        "road_address":  "서울 서대문구 연세로11길 24"
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
        "closed":  false,
        "x":  "126.939786573075",
        "y":  "37.5450336694064",
        "road_address":  "서울 마포구 대흥로 54"
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
        "closed":  false,
        "x":  "127.42724536162811",
        "y":  "36.32774375491543",
        "road_address":  "대전 중구 대종로480번길 15"
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
        "closed":  false,
        "x":  "126.937334864007",
        "y":  "37.5499437378146",
        "road_address":  "서울 마포구 광성로 37"
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
        "closed":  false,
        "x":  "126.938569621144",
        "y":  "37.5553044234086",
        "road_address":  "서울 마포구 신촌로 116"
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
        "closed":  false,
        "x":  "126.92827073434825",
        "y":  "37.55544277558506",
        "road_address":  "서울 마포구 와우산로29길 34"
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
        "closed":  true,
        "x":  "126.766029414656",
        "y":  "37.5035081573723",
        "road_address":  "경기 부천시"
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
        "closed":  false,
        "x":  "126.776409347825",
        "y":  "37.4985430042326",
        "road_address":  "경기 부천시 원미구 조마루로297번길 21"
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
        "closed":  true,
        "x":  "126.916854771787",
        "y":  "37.6024266204608",
        "road_address":  "서울 은평구 연서로4길 8-1"
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
        "closed":  true,
        "x":  "126.934193637741",
        "y":  "37.5586862112855",
        "road_address":  "서울 서대문구 창천동"
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
        "closed":  false,
        "x":  "126.94736989057856",
        "y":  "37.542532514662526",
        "road_address":  "서울 마포구 토정로37길 46"
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
        "closed":  true,
        "x":  "126.717741526776",
        "y":  "35.9648059712565",
        "road_address":  "전북특별자치도 군산시 수송동"
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
        "closed":  false,
        "x":  "126.716411324292",
        "y":  "35.9647739956928",
        "road_address":  "전북특별자치도 군산시 수송로 185"
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
        "closed":  true,
        "x":  "126.70897516729",
        "y":  "35.9864362735702",
        "road_address":  "전북특별자치도 군산시 월명동"
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
        "closed":  false,
        "x":  "126.72129979615192",
        "y":  "35.987922828858146",
        "road_address":  "전북특별자치도 군산시 해망로 146-24"
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
        "closed":  false,
        "x":  "126.96696841616365",
        "y":  "37.52906515904782",
        "road_address":  "서울 용산구 한강대로 95"
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
        "closed":  false,
        "x":  "126.80355647425601",
        "y":  "37.563044303493236",
        "road_address":  "서울 강서구 하늘길 38"
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
        "closed":  true,
        "x":  "126.811820803059",
        "y":  "37.5713090735148",
        "road_address":  "서울 강서구 방화동"
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
        "closed":  false,
        "x":  "126.9213218475811",
        "y":  "37.54794925427472",
        "road_address":  "서울 마포구 독막로 71"
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
        "closed":  false,
        "x":  "126.936731657072",
        "y":  "37.5540042142868",
        "road_address":  "서울 마포구 백범로 8"
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
        "closed":  false,
        "x":  "126.914613374473",
        "y":  "37.5550949138083",
        "road_address":  "서울 마포구 서교동"
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
        "closed":  false,
        "x":  "126.94122406396983",
        "y":  "37.54742023883101",
        "road_address":  "서울 마포구 백범로 82"
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
        "closed":  false,
        "x":  "126.957523768034",
        "y":  "37.5474848910897",
        "road_address":  "서울 마포구 마포대로14길 34"
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
        "closed":  false,
        "x":  "126.939381928701",
        "y":  "37.5472607317486",
        "road_address":  "서울 마포구 독막로 229"
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
        "closed":  false,
        "x":  "126.93335930160713",
        "y":  "37.551299365346225",
        "road_address":  "서울 마포구 광성로 17"
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
        "closed":  false,
        "x":  "126.875682587338",
        "y":  "37.549254313642",
        "road_address":  "서울 강서구 양천로 720"
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
        "closed":  false,
        "x":  "127.36903492282936",
        "y":  "38.02384953981934",
        "road_address":  "경기 포천시 이동면 화동로 1970"
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
        "closed":  false,
        "x":  "126.99269377142524",
        "y":  "37.56454458459052",
        "road_address":  "서울 중구 마른내로 43"
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
        "closed":  true,
        "x":  "127.07931844759437",
        "y":  "37.795889400051955",
        "road_address":  "경기 양주시 고읍남로 6-14"
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
        "closed":  true,
        "x":  "126.930167091136",
        "y":  "37.526784915083",
        "road_address":  "서울 영등포구 여의도동"
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
        "closed":  true,
        "x":  "126.82596900403425",
        "y":  "37.568040346399634",
        "road_address":  "서울 강서구 마곡중앙로 161-17"
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
        "closed":  false,
        "x":  "126.82706370583097",
        "y":  "37.56847263046167",
        "road_address":  "서울 강서구 마곡중앙로 161-8"
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
        "closed":  false,
        "x":  "126.96453050643",
        "y":  "37.5288184785772",
        "road_address":  "서울 용산구 한강대로23길 55"
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
        "closed":  false,
        "x":  "126.80341478604342",
        "y":  "37.56398470648027",
        "road_address":  "서울 강서구 하늘길 38"
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
        "closed":  false,
        "x":  "126.94198211667022",
        "y":  "37.5475845955023",
        "road_address":  "서울 마포구 대흥로 86-1"
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
        "closed":  false,
        "x":  "126.866890380946",
        "y":  "37.5482635427263",
        "road_address":  "서울 양천구 목동중앙북로 29"
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
        "closed":  false,
        "x":  "126.82677356482726",
        "y":  "37.55298769181159",
        "road_address":  "서울 강서구 수명로 68-35"
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
        "closed":  false,
        "x":  "126.961636848044",
        "y":  "37.5083729097915",
        "road_address":  "서울 동작구 흑석로 112"
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
        "closed":  false,
        "x":  "126.98943264084404",
        "y":  "37.53396624763907",
        "road_address":  "서울 용산구 이태원로 140-1"
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
        "closed":  false,
        "x":  "126.93946523185",
        "y":  "37.5561950714819",
        "road_address":  "서울 서대문구 신촌로 121"
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
        "closed":  true,
        "x":  "126.890774252602",
        "y":  "37.5995492262283",
        "road_address":  "경기 고양시 덕양구 꽃마을로 19"
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
        "closed":  false,
        "x":  "126.940084008125",
        "y":  "37.546659222871",
        "road_address":  "서울 마포구 독막로 240"
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
        "closed":  true,
        "x":  "126.923168343363",
        "y":  "37.5471467793844",
        "road_address":  "서울 마포구 와우산로 30"
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
        "closed":  true,
        "x":  "126.89992374371",
        "y":  "37.5346316027254",
        "road_address":  "서울 영등포구 양평로 59"
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
        "closed":  true,
        "x":  "126.838020182033",
        "y":  "37.5713632449749",
        "road_address":  "서울 강서구 양천로47길 20"
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
        "closed":  false,
        "x":  "126.93574514212",
        "y":  "37.5575653244619",
        "road_address":  "서울 서대문구 연세로7길 17"
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
        "closed":  false,
        "x":  "126.96026766459647",
        "y":  "37.537323471928524",
        "road_address":  "서울 용산구 새창로 112"
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
        "closed":  false,
        "x":  "126.97030781291777",
        "y":  "37.54409923916463",
        "road_address":  "서울 용산구 청파로45길 3"
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
        "closed":  false,
        "x":  "127.38338720776873",
        "y":  "36.37496804459294",
        "road_address":  "대전 유성구 엑스포로 1"
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
        "closed":  true,
        "x":  "126.92580905927265",
        "y":  "37.5613067449312",
        "road_address":  "서울 마포구 동교로38길 35"
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
        "closed":  false,
        "x":  "126.967263079048",
        "y":  "37.5304735064933",
        "road_address":  "서울 용산구 새창로 213"
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
        "closed":  true,
        "x":  "128.9695476873637",
        "y":  "35.10577557521128",
        "road_address":  "부산 사하구 낙동대로 456-2"
    },
    {
        "category":  "🥡아시안",
        "name":  "포가레 신촌점",
        "date":  "2024-07-04",
        "location_small":  "창천동",
        "rate":  "🥄🥄🥄",
        "map_url":  "https://place.map.kakao.com/774505934",
        "location_large":  "서울 서대문구",
        "menu":  [
                     "쌀국수"
                 ],
        "visit_count":  1,
        "closed":  false,
        "x":  "126.93821439136235",
        "y":  "37.5578837934237",
        "road_address":  "서울 서대문구 명물길 26"
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
        "closed":  true,
        "x":  "126.969577330756",
        "y":  "37.5372820882126",
        "road_address":  "서울 용산구 백범로90길 74"
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
        "closed":  false,
        "x":  "126.90371599435775",
        "y":  "37.5172328061604",
        "road_address":  "서울 영등포구 영중로 15"
    },
    {
        "category":  "🍚한식",
        "name":  "속초코다리냉면 타임스퀘어점",
        "date":  "2024-06-28",
        "location_small":  "영등포동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1491524826",
        "location_large":  "서울 영등포구",
        "menu":  [
                     "냉면"
                 ],
        "visit_count":  1,
        "closed":  false,
        "x":  "126.905610736294",
        "y":  "37.5171883843554",
        "road_address":  "서울 영등포구 영중로 9"
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
        "closed":  false,
        "x":  "126.991266352481",
        "y":  "37.5656527129109",
        "road_address":  "서울 중구 을지로12길 11"
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
        "closed":  true,
        "x":  "126.914613374473",
        "y":  "37.5550949138083",
        "road_address":  "서울 마포구 서교동"
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
        "closed":  false,
        "x":  "126.937110741239",
        "y":  "37.5513572848939",
        "road_address":  "서울 마포구 서강로16길 67"
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
        "closed":  false,
        "x":  "126.953717313208",
        "y":  "37.5470131390909",
        "road_address":  "서울 마포구 마포대로 144"
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
        "closed":  false,
        "x":  "127.22522107764448",
        "y":  "37.54548746229524",
        "road_address":  "경기 하남시 미사대로 750"
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
        "closed":  false,
        "x":  "127.343909247131",
        "y":  "37.6161696839829",
        "road_address":  "경기 남양주시 화도읍 북한강로 1146"
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
        "closed":  false,
        "x":  "126.93258739465594",
        "y":  "37.553931643084006",
        "road_address":  "서울 마포구 서강로13길 24"
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
        "closed":  false,
        "x":  "126.97549698076399",
        "y":  "37.55846234223722",
        "road_address":  "서울 중구 소월로 10"
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
        "closed":  true,
        "x":  "126.934193637741",
        "y":  "37.5586862112855",
        "road_address":  "서울 서대문구 창천동"
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
        "closed":  true,
        "x":  "126.904067576071",
        "y":  "37.5544912571703",
        "road_address":  "서울 마포구 망원로6길 57"
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
        "closed":  true,
        "x":  "126.943403941965",
        "y":  "37.5498936438386",
        "road_address":  "서울 마포구 대흥동"
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
        "closed":  false,
        "x":  "126.93984254782306",
        "y":  "37.5486016533217",
        "road_address":  "서울 마포구 백범로 74"
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
        "closed":  true,
        "x":  "128.064244597465",
        "y":  "35.1782313060433",
        "road_address":  "경남 진주시 진양호로 278"
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
        "closed":  true,
        "x":  "126.94565571696",
        "y":  "37.5470619620453",
        "road_address":  "서울 마포구 염리동"
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
        "closed":  false,
        "x":  "127.05952393138438",
        "y":  "37.511827603118256",
        "road_address":  "서울 강남구 영동대로 513"
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
        "closed":  true,
        "x":  "127.062831022499",
        "y":  "37.5143225723289",
        "road_address":  "서울 강남구 삼성동"
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
        "closed":  false,
        "x":  "127.060868056159",
        "y":  "37.5095446740937",
        "road_address":  "서울 강남구 테헤란로 521"
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
        "closed":  false,
        "x":  "127.055413122618",
        "y":  "37.5096428655296",
        "road_address":  "서울 강남구 삼성로 534"
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
        "closed":  false,
        "x":  "127.05979124539992",
        "y":  "37.509468638676324",
        "road_address":  "서울 강남구 테헤란로87길 22"
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
        "closed":  true,
        "x":  "126.937909479778",
        "y":  "37.5543526246387",
        "road_address":  "서울 마포구 노고산동"
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
        "closed":  false,
        "x":  "126.94147754322553",
        "y":  "37.54163234591573",
        "road_address":  "서울 마포구 토정로31길 23"
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
        "closed":  true,
        "x":  "126.949878054097",
        "y":  "37.5415244863241",
        "road_address":  "서울 마포구 도화동"
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
        "closed":  false,
        "x":  "126.9465383055793",
        "y":  "37.55032127679049",
        "road_address":  "서울 마포구 숭문길 98"
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
        "closed":  false,
        "x":  "126.937552116694",
        "y":  "37.5499726848594",
        "road_address":  "서울 마포구 광성로 41-1"
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
        "closed":  false,
        "x":  "126.96742717189628",
        "y":  "37.530367233696026",
        "road_address":  "서울 용산구 새창로 213"
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
        "closed":  false,
        "x":  "126.997360385755",
        "y":  "37.567112619915",
        "road_address":  "서울 중구 창경궁로5길 11"
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
        "closed":  false,
        "x":  "126.9448298229971",
        "y":  "37.5468192103778",
        "road_address":  "서울 마포구 백범로 123"
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
        "closed":  false,
        "x":  "126.944130271355",
        "y":  "37.5471153100767",
        "road_address":  "서울 마포구 백범로 115"
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
        "closed":  false,
        "x":  "126.945564790101",
        "y":  "37.5476097274285",
        "road_address":  "서울 마포구 숭문길 28"
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
        "closed":  true,
        "x":  "126.922023205508",
        "y":  "37.5644776141885",
        "road_address":  "서울 마포구 연남동"
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
        "closed":  false,
        "x":  "126.969962735173",
        "y":  "37.5806273542272",
        "road_address":  "서울 종로구 자하문로15길 17"
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
        "closed":  true,
        "x":  "126.914613374473",
        "y":  "37.5550949138083",
        "road_address":  "서울 마포구 서교동"
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
        "closed":  false,
        "x":  "126.90805351863",
        "y":  "37.5148404944208",
        "road_address":  "서울 영등포구 영신로20길 2"
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
        "closed":  false,
        "x":  "126.936475514967",
        "y":  "37.5584459938551",
        "road_address":  "서울 서대문구 연세로9길 7"
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
        "closed":  false,
        "x":  "126.8292495129974",
        "y":  "37.5605155192863",
        "road_address":  "서울 강서구 마곡중앙6로 16"
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
        "closed":  true,
        "x":  "126.830205192607",
        "y":  "37.5747859514343",
        "road_address":  "서울 강서구 마곡동"
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
        "closed":  true,
        "x":  "126.87678357132",
        "y":  "37.5238724958935",
        "road_address":  "서울 양천구 오목로 354"
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
        "closed":  false,
        "x":  "126.94373455281121",
        "y":  "37.54966855224712",
        "road_address":  "서울 마포구 대흥로 114-1"
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
        "closed":  false,
        "x":  "127.081241701885",
        "y":  "37.5107938246746",
        "road_address":  "서울 송파구 올림픽로10길 9"
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
        "closed":  true,
        "x":  "126.935226865858",
        "y":  "37.5470206619261",
        "road_address":  "서울 마포구 신수동"
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
        "closed":  false,
        "x":  "126.93659929018924",
        "y":  "37.549945147139056",
        "road_address":  "서울 마포구 광성로 31-1"
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
        "closed":  false,
        "x":  "127.055174361552",
        "y":  "37.5432845888473",
        "road_address":  "서울 성동구 연무장5가길 22-1"
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
        "closed":  false,
        "x":  "126.85582589573288",
        "y":  "37.4809546263984",
        "road_address":  "경기 광명시 오리로976번길 20"
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
        "closed":  false,
        "x":  "126.887723809752",
        "y":  "37.5096187214731",
        "road_address":  "서울 구로구 경인로 661"
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
        "closed":  false,
        "x":  "127.05265860726594",
        "y":  "37.544439016637995",
        "road_address":  "서울 성동구 연무장5길 9-16"
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
        "closed":  true,
        "x":  "127.074128958987",
        "y":  "37.2899942604673",
        "road_address":  "경기 수원시 영통구 하동"
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
        "closed":  false,
        "x":  "127.039373245523",
        "y":  "37.5451370621601",
        "road_address":  "서울 성동구 성수동1가 720"
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
        "closed":  true,
        "x":  "127.012040426836",
        "y":  "37.491554038382",
        "road_address":  "서울 서초구 서초대로48길 33"
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
        "closed":  false,
        "x":  "126.9373367965965",
        "y":  "37.554393767996565",
        "road_address":  "서울 마포구 백범로1길 3"
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
        "closed":  false,
        "x":  "126.94466441186266",
        "y":  "37.5501474218126",
        "road_address":  "서울 마포구 대흥로20길 10"
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
        "closed":  false,
        "x":  "126.937243826329",
        "y":  "37.5572949303901",
        "road_address":  "서울 서대문구 명물길 4"
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "map_url":  "https://place.map.kakao.com/1491524826",
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
        "map_url":  "https://place.map.kakao.com/774505934",
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "map_url":  "https://place.map.kakao.com/1147510123",
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "map_url":  "https://place.map.kakao.com/26874633",
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "map_url":  "https://place.map.kakao.com/473779689",
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "map_url":  "https://place.map.kakao.com/663617575",
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
    },
    {
        "date":  "2025-07-16",
        "name":  "롯데리아 인천공항제2여객터미널점",
        "category":  "🍔패스트푸드",
        "location_small":  "운서동",
        "rate":  "🥄🥄",
        "map_url":  "https://place.map.kakao.com/1572570780",
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
        "closed":  true
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
        "closed":  true
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
        "map_url":  "https://place.map.kakao.com/1147510123",
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "map_url":  "https://place.map.kakao.com/1147510123",
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
        "closed":  true
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
        "map_url":  "https://place.map.kakao.com/1594748709",
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
        "closed":  true
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
        "closed":  true
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
        "map_url":  "https://place.map.kakao.com/1147510123",
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
        "closed":  true
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
        "closed":  true
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
        "map_url":  "https://place.map.kakao.com/190939248",
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
        "map_url":  "https://place.map.kakao.com/247580637",
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "map_url":  "https://place.map.kakao.com/26874633",
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "map_url":  "https://place.map.kakao.com/608437809",
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
        "closed":  true
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
        "closed":  true
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
        "map_url":  "https://place.map.kakao.com/1147510123",
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
        "closed":  true
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
        "map_url":  "https://place.map.kakao.com/608437809",
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
        "closed":  true
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
        "map_url":  "https://place.map.kakao.com/1147510123",
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
        "map_url":  "https://place.map.kakao.com/608437809",
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
        "closed":  true
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
        "map_url":  "https://place.map.kakao.com/1147510123",
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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
        "closed":  true
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