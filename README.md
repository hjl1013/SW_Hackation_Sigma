# SW_Hackation_Sigma

## 핵심 기능

- 사용자의 위치 및 목적지 정보를 활용한 게시물 관리 및 열람 기능 
- 자율주행이 도입되며 생겨나는 넓은 차량 내부 공간 및 디스플레이를 활용한 메타채팅 시뮬레이션

## 기능

사용 툴: `ReactJS`, `axios`, `NestJS`, `Prisma`, `PostgreSQL`

### Frontend

- 네이버 지도 검색 기능을 통한 사용자의 목적지 설정
- 사용자 프로필 (사용자 이름, 아바타/차바타, 내가 작성한 게시물) 열람 기능 구현
- 커뮤니티 정보 생성, 열람(스크롤 + 지도) 기능, 게시물 생성 기능, Unity를 이용한 메타채팅 시뮬레이션 기능 구현

### Backend

- `Community`: 커뮤니티 이름, 소개, 해시태그, 가입된 사람 수를 저장하는 모델 하나의 커뮤니티에 여러 개의 테마가 대응됨

- `CommuTheme`: 각 커뮤니티의 테마들을 나타내는 모델. 아이콘 정보를 저장하고 있음. 하나의 테마당 하나의 커뮤니티가 대응됨

- `Post`: 게시물 제목, 이미지, 본문 내용을 저장하고 있는 모델. 하나의 게시물당 하나의 테마, 하나의 유저가 대응됨

- `User`: 유저의 위치 정보를 포함하고 있음

- `UserAuth`, `UserProfile`: 유저의 개인정보 ex 암호화 된 비밀번호, 유저 이름

- `UserAvatar`: 유저의 아바타, 인간형 아바타, 자동차형 아바타 정보를 포함

### Meta Chatting - Keypoint Detection

mediapipe 라이브러리를 사용해 사용자의 pose를 인식하고, pynput 라이브러리를 사용해 파이썬 프로그램 상에서 직접 키를 입력하도록 함. 정해진 동작을 했을 때 캐릭터가 이동할 수 있도록 프로그램을 작성함

### Meta Chatting - Unity

- 커뮤니티 구성원들끼리 자유롭게 소통할 수 있는 소통의 장을 만듦. 자유롭게 모임, 약속을 잡을 수 있는 공간
- 메타버스 공간 내에서 물리적 거리가 가까워지면 대화가 가능하게 함.
- 여러 개의 방을 회의실, 모임 장소 등 용도를 나누어 사용할 수 있음
