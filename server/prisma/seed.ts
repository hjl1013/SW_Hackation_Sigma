import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
    const hashedPassword = await bcrypt.hash('1234', 10)

    // create User(main_시그마_1)
    await prisma.user.create({
        data: {
            email: 'snu_sigma@snu.ac.kr',
            userAuth: {
                create: {
                    hashedPassword,
                },
            },
            profile: {
                create: {
                    name: '시그마',
                    avatar: {
                        create: {
                            characterImgUrl: 'https://media.istockphoto.com/id/1138879772/ko/%EB%B2%A1%ED%84%B0/%EC%8B%9C%EA%B7%B8%EB%A7%88-%EA%B7%B8%EB%A6%AC%EC%8A%A4%EC%96%B4-%EB%AC%B8%EC%9E%90-%EC%95%84%EC%9D%B4%EC%BD%98.jpg?s=612x612&w=0&k=20&c=YqLJqDQgd7u-bKc9vgKhYIIT1rPq-U4eYZTqIZyc5s8=',
                            carImgUrl: 'https://img.freepik.com/free-vector/rally-car-decal-graphic-wrap_210772-3473.jpg?size=626&ext=jpg',
                        },
                    },
                },
            },
            destinationName: "",
            destinationLatitude: 0,
            destinationLongitude: 0,
        },
    })

    // create User(sub1_김현대_2)
    await prisma.user.create({
        data: {
            email: 'hyundai_motor@snu.ac.kr',
            userAuth: {
                create: {
                    hashedPassword,
                },
            },
            profile: {
                create: {
                    name: '김현대',
                    avatar: {
                        create: {
                            characterImgUrl: 'https://tse3.mm.bing.net/th?id=OIP.dfnfSu-JLFoESsrj-ovK-wHaD9&pid=Api&P=0',
                            carImgUrl: '',
                        },
                    },
                },
            },
            destinationName: "",
            destinationLatitude: 0,
            destinationLongitude: 0,
        },
    })

    // create User(sub2_라이언_3)
    await prisma.user.create({
        data: {
            email: 'like_lion@snu.ac.kr',
            userAuth: {
                create: {
                    hashedPassword,
                },
            },
            profile: {
                create: {
                    name: '라이언',
                    avatar: {
                        create: {
                            characterImgUrl: 'https://i.pinimg.com/originals/a8/8b/0d/a88b0d372e9fa4f0936952d09fc92d85.png',
                            carImgUrl: '',
                        },
                    },
                },
            },
            destinationName: "",
            destinationLatitude: 0,
            destinationLongitude: 0,
        },
    })

    // create User(sub3_해커톤_4)
    await prisma.user.create({
        data: {
            email: 'sw_hackathon@snu.ac.kr',
            userAuth: {
                create: {
                    hashedPassword,
                },
            },
            profile: {
                create: {
                    name: '해커톤',
                    avatar: {
                        create: {
                            characterImgUrl: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https:%2F%2Fblog.kakaocdn.net%2Fdn%2FCMiJA%2Fbtq2BDv5tjW%2FBUPkwyuk0Ib082b8j8QAwK%2Fimg.png',
                            carImgUrl: '',
                        },
                    },
                },
            },
            destinationName: "",
            destinationLatitude: 0,
            destinationLongitude: 0,
        },
    })

    // create community(main_여행_1)
    await prisma.community.create({
        data: {
            commuProfileImgUrl: "https://www.divido.com/wp-content/uploads/2022/08/Trip-of-a-lifetime-illustration-Divido.png",
            commuName: "여행 가즈아",
            commuIntro: "전국 최대 규모 여행 커뮤",
            commuHT: "#여행",
            commuMemberNumber: "32m",
        },
    })

    // create community(sub_낚시_2)
    await prisma.community.create({
        data: {
            commuProfileImgUrl: "https://anchor.host/wp-content/uploads/2020/03/undraw_fishing_hoxa-1024x753.png",
            commuName: "몰래 낚시",
            commuIntro: "월척 같이 공유해요~^^",
            commuHT: "#낚시",
            commuMemberNumber: "44.2k",
        },
    })

    // create commuTheme(산_commuId:1_1)
    await prisma.commuTheme.create({
        data: {
            commuId: 1,
            commuThemeName: "산",
            commuThemeIconUrl: "https://cdn-icons-png.flaticon.com/512/1551/1551074.png",
        },
    })

    // create commuTheme(바다_commuId:1_2)
    await prisma.commuTheme.create({
        data: {
            commuId: 1,
            commuThemeName: "바다",
            commuThemeIconUrl: "https://cdn-icons-png.flaticon.com/512/4381/4381449.png",
        },
    })

    // create commuTheme(테마파크_commuId:1_3)
    await prisma.commuTheme.create({
        data: {
            commuId: 1,
            commuThemeName: "테마 파크",
            commuThemeIconUrl: "https://cdn-icons-png.flaticon.com/512/7758/7758774.png",
        },
    })

    // create commuTheme(랜드마크_commuId:1_4)
    await prisma.commuTheme.create({
        data: {
            commuId: 1,
            commuThemeName: "랜드마크",
            commuThemeIconUrl: "https://cdn-icons-png.flaticon.com/512/5269/5269032.png",
        },
    })

    // create commuTheme(민물 낚시_commuId:2_5)
    await prisma.commuTheme.create({
        data: {
            commuId: 2,
            commuThemeName: "민물 낚시",
            commuThemeIconUrl: "https://cdn-icons-png.flaticon.com/512/2317/2317035.png",
        },
    })

    // create commuTheme(바다 낚시_commuId:2_6)
    await prisma.commuTheme.create({
        data: {
            commuId: 2,
            commuThemeName: "바다 낚시",
            commuThemeIconUrl: "https://cdn-icons-png.flaticon.com/512/1411/1411394.png",
        },
    })

    // create commuTheme(낚시 장비_commuId:2_7)
    await prisma.commuTheme.create({
        data: {
            commuId: 2,
            commuThemeName: "낚시 장비",
            commuThemeIconUrl: "https://cdn-icons-png.flaticon.com/512/2265/2265049.png",
        },
    })

    // posting(user3_theme1(산)_1)
    await prisma.post.create({
        data: {
            userId: 3,
            commuThemeId: 1,
            ImgUrl: "https://t1.daumcdn.net/cfile/blog/9919B9415D80B2222C",
            title: "산골에서 느끼는 지리산의 자연",
            text: "지리산 산골에 머물며 시원한 공기와 자연 속에서 여유로운 시간을 보내세요. 새소리와 개울 소리가 귀에 쏙쏙 들어와 마음이 편안해집니다.",
            numberOfHearts: 31,
            locationName: "지리산로 528",
            locationLatitude: 35.3630134,
            locationLongitude: 127.5632079,
        },
    })

   // posting(user2_theme1(산)_2)
   await prisma.post.create({
        data: {
            userId: 2,
            commuThemeId: 1,
            ImgUrl: "https://cdn.san.chosun.com/news/photo/202110/15220_63846_5617.jpg",
            title: "한적한 설악산 자연휴양림에서 힐링",
            text: "설악산 자연휴양림에서 한적한 휴가를 보내보세요. 산책로를 따라 산책하며 새 소리를 듣고, 맑은 공기를 마시며 스트레스를 날려보세요.",
            numberOfHearts: 54,
            locationName: "설악산로 1042",
            locationLatitude: 38.173965,
            locationLongitude: 128.4887971,
        },
    })

    // posting(user4_theme1(산)_3)
    await prisma.post.create({
        data: {
            userId: 4,
            commuThemeId: 1,
            ImgUrl: "https://youimg1.c-ctrip.com/target/10081f000001gqifd7BFE_C_800_10000.jpg",
            title: "오대산 자연휴양림에서 가족과 함께하는 봄나들이",
            text: "오대산 자연휴양림에서 봄을 느껴보세요. 가족들과 함께 하이킹을 즐기며 꽃구경도 할 수 있습니다. 이국적인 풍경을 보면서 힐링을 느낄 수 있습니다.",
            numberOfHearts: 64,
            locationName: "오대산로 2",
            locationLatitude: 37.7026578,
            locationLongitude: 128.6021654,
        },
    })

    // posting(user4_theme2(바다)_4)
    await prisma.post.create({
        data: {
            userId: 4,
            commuThemeId: 2,
            ImgUrl: "https://t1.daumcdn.net/cfile/tistory/2147934D557540E929",
            title: "부산의 멋진 해안도로를 따라 여행하기",
            text: "부산의 멋진 해안도로를 따라 여행을 즐겨보세요. 바다와 산이 어우러진 멋진 풍경을 감상하면서 여행의 기억을 만들어보세요.",
            numberOfHearts: 139,
            locationName: "광복로 100",
            locationLatitude: 36.8274658,
            locationLongitude: 128.6293608,
        },
    })

    // posting(user2_theme2(바다)_5)
    await prisma.post.create({
        data: {
            userId: 2,
            commuThemeId: 2,
            ImgUrl: "https://tse4.mm.bing.net/th?id=OIP.PJKzPr8qFS0QGvGrpK68zAHaFj&pid=Api&P=0",
            title: "제주도 바닷가에서 여유로운 휴가",
            text: "제주도 바닷가에서 여유로운 휴가를 보내세요. 푸른 바다와 눈부신 햇살, 백사장을 즐기며 스트레스를 푸는 것은 어떨까요?",
            numberOfHearts: 120,
            locationName: "상우목길 36-3",
            locationLatitude: 33.5051164,
            locationLongitude: 126.9483644,
        },
    })

    // posting(user3_theme2(바다)_6)
    await prisma.post.create({
        data: {
            userId: 3,
            commuThemeId: 2,
            ImgUrl: "https://t1.daumcdn.net/cfile/tistory/99702E375CAF349830",
            title: "강릉 바다에서 달빛을 보며 산책하기",
            text: "강릉 바다에서 달빛을 보며 산책을 즐겨보세요. 밤에 바다가 보이는 곳에서 함께 걷다보면 로맨틱한 분위기가 물씬 풍기게 됩니다.",
            numberOfHearts: 171,
            locationName: "강릉대로 406",
            locationLatitude: 37.770227,
            locationLongitude: 128.9096376,
        },
    })

    // posting(user2_theme3(테마 파크)_7)
    await prisma.post.create({
        data: {
            userId: 2,
            commuThemeId: 3,
            ImgUrl: "https://photo.sentv.co.kr/photo/news/2019/04/02/1554166522.png",
            title: "에버랜드에서 재미있는 하루 보내기",
            text: "에버랜드에서 재미있는 하루를 보내보세요. 다양한 놀이기구와 아름다운 꽃과 신나는 뮤지컬, 그리고 맛있는 음식도 즐길 수 있습니다.",
            numberOfHearts: 95,
            locationName: "에버랜드로 199",
            locationLatitude: 37.2933272,
            locationLongitude: 127.2013221,
        },
    })

    // posting(user3_theme3(테마 파크)_8)
    await prisma.post.create({
        data: {
            userId: 3,
            commuThemeId: 3,
            ImgUrl: "https://img.insight.co.kr/static/2017/11/29/700/ees75df7w22fa620814s.jpg",
            title: "롯데월드에서 로맨틱한 데이트",
            text: "롯데월드에서 로맨틱한 데이트를 즐겨보세요. 낭만적인 분위기에서 스케이트를 타거나, 롤러코스터를 타면서 스릴을 느껴보세요.",
            numberOfHearts: 130,
            locationName: "올림픽로 240",
            locationLatitude: 37.5110794,
            locationLongitude: 127.0981638,
        },
    })

    // posting(user4_theme3(테마 파크)_9)
    await prisma.post.create({
        data: {
            userId: 4,
            commuThemeId: 3,
            ImgUrl: "https://static.wanted.co.kr/images/company/19027/1nfx3mofpllorbxe__1080_790.jpg",
            title: "어린이도, 어른도 즐길 수 있는 레고랜드",
            text: "레고랜드는 어린이뿐 아니라 어른도 즐길 수 있는 테마파크입니다. 레고로 만들어진 다양한 놀이기구와 놀이터에서 놀며 무한한 상상력을 만끽해보세요.",
            numberOfHearts: 94,
            locationName: "하중도길 128",
            locationLatitude: 37.8822425,
            locationLongitude: 127.6963924,
        },
    })

    // posting(user1_theme4(랜드마크)_10)
    await prisma.post.create({
        data: {
            userId: 1,
            commuThemeId: 4,
            ImgUrl: "https://tse2.mm.bing.net/th?id=OIP.5rbcYgrB7xbajtWluYU1OAHaHa&pid=Api&P=0",
            title: "한국의 대표적인 랜드마크, 남산서울타워",
            text: "남산서울타워는 한국에서 가장 높은 타워 중 하나입니다. 낮과 밤 모두 아름다운 경관을 감상할 수 있으며, 전망대에서 서울의 도시scape를 볼 수 있습니다.",
            numberOfHearts: 0,
            locationName: "남산공원길 105",
            locationLatitude: 37.5510548,
            locationLongitude: 126.9878822,
        },
    })

    // posting(user2_theme4(랜드마크)_11)
    await prisma.post.create({
        data: {
            userId: 2,
            commuThemeId: 4,
            ImgUrl: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_862,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/qwo9klmec2tcooqke60l/%EA%B2%BD%EB%B3%B5%EA%B6%81%EA%B0%80%EC%9D%B4%EB%93%9C%ED%88%AC%EC%96%B4.jpg",
            title: "경복궁에서 한국 역사 체험하기",
            text: "경복궁에서 한국 역사를 체험해보세요. 아름다운 건물과 정원을 구경하면서 한국의 역사와 문화를 배울 수 있습니다.",
            numberOfHearts: 180,
            locationName: "사직로 161",
            locationLatitude: 37.5788408,
            locationLongitude: 126.9770162,
        },
    })

    // posting(user3_theme4(랜드마크)_12)
    await prisma.post.create({
        data: {
            userId: 3,
            commuThemeId: 4,
            ImgUrl: "http://www.k-heritage.tv/jnrepo/mig/upload/itm/contents/12227/%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC.jpg",
            title: "불국사에서 고즈넉한 시간 보내기",
            text: "불국사에서 고즈넉한 시간을 보내보세요. 아름다운 사찰과 국보급 유물을 감상하며 마음을 정화해보세요.",
            numberOfHearts: 178,
            locationName: "경강로 2591",
            locationLatitude: 37.7733758,
            locationLongitude: 128.9427571,
        },
    })

    // posting(user4_theme4(랜드 마크)_13)
    await prisma.post.create({
        data: {
            userId: 4,
            commuThemeId: 4,
            ImgUrl: "https://t1.daumcdn.net/cfile/blog/2759743355756F2126",
            title: "경주 석굴암에서 힐링 여행",
            text: "경주 석굴암에서 힐링 여행을 즐겨보세요. 아름다운 자연과 역사를 함께 느끼며 마음을 편안하게 만들어보세요.",
            numberOfHearts: 33,
            locationName: "석굴암길 1-12",
            locationLatitude: 37.7004246,
            locationLongitude: 126.9717379,
        },
    })

    // posting(user1_theme6(바다 낚시)_14)
    await prisma.post.create({
        data: {
            userId: 1,
            commuThemeId: 6,
            ImgUrl: "https://i.ytimg.com/vi/b3BxSCvoaAc/maxresdefault.jpg",
            title: "삼척 청량리 해변, 시원한 바다에서 낚시하기",
            text: "삼척 청량리 해변은 시원한 바다에서 낚시를 즐길 수 있는 곳입니다. 바다에서 낚시를 즐긴 후, 해변에서 맛있는 해산물 요리를 맛보세요.",
            numberOfHearts: 72,
            locationName: "맹방해변로 228-201",
            locationLatitude: 37.3884628,
            locationLongitude: 129.2344943,
        },
    })

    // posting(user1_theme7(낚시 장비)_15)
    await prisma.post.create({
        data: {
            userId: 1,
            commuThemeId: 7,
            ImgUrl: "https://i1.wp.com/static.coupangcdn.com/image/vendor_inventory/cb1e/1b162058061a0f8ead6773366adc4b01bc90479e5ba0ed14b888aaa53f43.jpg?ssl=1",
            title: "춘천 남산면, 퀄리티 좋은 낚시용품 파는 곳",
            text: "춘천 남산면에는 다양한 종류의 낚시용품을 파는 매장들이 있습니다. 특히, 고급스러운 낚시용품을 구매하고 싶다면, 여기가 최적의 장소입니다. 추천하는 낚시용품 매장: 남산면에 위치한 '루시퍼 낚시용품'.",
            numberOfHearts: 109,
            locationName: "남산로 507-23",
            locationLatitude: 37.3456601,
            locationLongitude: 127.5394563,
        },
    })

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })