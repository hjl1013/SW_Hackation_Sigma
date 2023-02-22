// // function MyMap() {
// //     const navermaps = useNavermaps();
// //     // const map = useMap();
// //     const [map, setMap] = useState(null);
// //     const [bounds, setBounds] = useState(null);
// //     const [category, setCategory] = useState('');
// //     // const [marker, setMarker] = useState(null);
// //     // const [markerList, setMarkerList] = useState([]);
// //     const markers = [],
// //     infoWindows = [];

// //     console.log({map});

// //     useEffect(() => {
// //         if (map) {
// //             setBounds(map.bounds);
// //             addMarkers(map, MARKER_SPRITE_POSITION);
// //             console.log(map);
// //         }
// //     }, [map])

// //     function clearMarkers(markers) {
// //         markers.forEach(marker => marker.setMap(null));
// //         markers = [];
// //     }

// //     function addMarkers(map, MARKER_SPRITE_POSITION) {
// //         const { bounds } = map;

// //         if(bounds !== null && !markers.length) {
// //             const southWest = bounds._sw,
// //                 northEast = bounds._ne,
// //                 lngSpan = northEast.lng() - southWest.lng(),
// //                 latSpan = northEast.lat() - southWest.lat();

// //             for (const key in MARKER_SPRITE_POSITION) {

// //                 const position = new navermaps.LatLng(
// //                     southWest.lat() + latSpan * Math.random(),
// //                     southWest.lng() + lngSpan * Math.random());
            
// //                 const marker = new navermaps.Marker({
// //                     map: map,
// //                     position: position,
// //                     title: key,
// //                     icon: {
// //                         url: 'https://conservetorch.org/wp-content/uploads/2021/02/icon_fish.png',
// //                         scaledSize: new navermaps.Size(50, 50),
// //                         anchor: new navermaps.Point(25, 25),
// //                         // origin: new navermaps.Point(MARKER_SPRITE_POSITION[key][0], MARKER_SPRITE_POSITION[key][1])
// //                     },
// //                     zIndex: 100
// //                 });

// //                 // {title, username, message, image, likes}
// //                 const componentString = ReactDOMServer.renderToString(
// //                     <Popup
// //                         title='현대모비스 해커톤 준비!!'
// //                         username='SamSam'
// //                         // message='동아리 대표로 나온 이번 해커톤에서 동아리 이름도 빛내고 학교 이름도 빛내보자! 아자아자~~'
// //                         message='hi'
// //                         image={'https://www.hyundai.co.kr/image/upload/asset_library/MDA00000000000015710/4754f2b0f8dd4e8db46ee6e39288f987.jpg'}
// //                         likes={99}
// //                     />
// //                 );
            
// //                 const infoWindow = new navermaps.InfoWindow({
// //                     // content: '<div style="width:150px;text-align:center;padding:10px;">The Letter is <b>"'+ key +'"</b>.</div>'
// //                     content: componentString
// //                 });
                
// //                 markers.push(marker);
// //                 infoWindows.push(infoWindow);
// //             };
// //         }


// //         if(map){
// //             navermaps.Event.addListener(map, 'idle', function() {
// //                 updateMarkers(map, markers);
// //             });
// //         }

// //         function updateMarkers(map, markers) {

// //             const mapBounds = bounds;
// //             let marker, position;

// //             for (let i = 0; i < markers.length; i++) {

// //                 marker = markers[i]
// //                 position = marker.getPosition();

// //                 if (mapBounds.hasLatLng(position)) {
// //                     showMarker(map, marker);
// //                 } else {
// //                     hideMarker(map, marker);
// //                 }
// //             }
// //         }

// //         function showMarker(map, marker) {

// //             if (marker.setMap()) return;
// //             marker.setMap(map);
// //         }

// //         function hideMarker(map, marker) {

// //             if (!marker.setMap()) return;
// //             marker.setMap(null);
// //         }

// //         // 해당 마커의 인덱스를 seq라는 클로저 변수로 저장하는 이벤트 핸들러를 반환합니다.
// //         function getClickHandler(seq) {
// //             return function(e) {
// //                 const marker = markers[seq],
// //                     infoWindow = infoWindows[seq];

// //                 if (infoWindow.getMap()) {
// //                     infoWindow.close();
// //                 } else {
// //                     infoWindow.open(map, marker);
// //                 }

// //             }
// //         }

// //         for (var i=0, ii=markers.length; i<ii; i++) {
// //             navermaps.Event.addListener(markers[i], 'click', getClickHandler(i));
// //         }
// //     }

// //     return(
// //         <NaverMap
// //           ref={setMap}
// //           defaultCenter={new navermaps.LatLng(37.5657259, 126.97547)}
// //           defaultZoom={17}
// //           disableKineticPan={false}
// //         >
// //             {/* <Overlay element={marker2} /> */}
// //         </NaverMap>
// //     );
// // }

// import React, { useEffect, useLayoutEffect, useState } from 'react'
// import { Container as MapDiv, Marker, NaverMap, Overlay, useMap, useNavermaps } from 'react-naver-maps';
// import ReactDOMServer from 'react-dom/server'
// import Popup from '../Popup/Popup'
// import './CommunityMap.css'
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
// import { maxWidth, width } from '@mui/system';

// const MARKER_SPRITE_X_OFFSET = 29,
// MARKER_SPRITE_Y_OFFSET = 50;

// const filterByCategory = (data, category) => {
//     const filteredData = {};

//     // console.log(Object.keys(data));

//     for (let key of Object.keys(data)) {
//         // if (data[key][1] === category) filteredData[key] = data[key][0];
//         // console.log(data[key][1]);
//         if (data[key].category === category){
//             filteredData[key] = data[key];
//             console.log(filteredData);
//         }
//     }

//     return filteredData;
// }


// const MARKER_SPRITE_POSITION = {
//     "A0": {value: [0, 0], category: 'hi'},
//     "B0": {value: [MARKER_SPRITE_X_OFFSET, 0],  category: 'hi'},
//     "C0": {value: [MARKER_SPRITE_X_OFFSET*2, 0],  category: 'hi'},
//     "D0": {value: [MARKER_SPRITE_X_OFFSET*3, 0],  category: 'hi'},
//     "E0": {value: [MARKER_SPRITE_X_OFFSET*4, 0],  category: 'hi'},
//     "F0": {value: [MARKER_SPRITE_X_OFFSET*5, 0],  category: 'hi'},
//     "G0": {value: [MARKER_SPRITE_X_OFFSET*6, 0],  category: 'hi'},
//     "H0": {value: [MARKER_SPRITE_X_OFFSET*7, 0],  category: 'hi'},
//     "I0": {value: [MARKER_SPRITE_X_OFFSET*8, 0],  category: 'hi'},

//     "A1": {value: [0, MARKER_SPRITE_Y_OFFSET],  category: 'hello'},
//     "B1": {value: [MARKER_SPRITE_X_OFFSET, MARKER_SPRITE_Y_OFFSET],  category: 'hello'},
//     "C1": {value: [MARKER_SPRITE_X_OFFSET*2, MARKER_SPRITE_Y_OFFSET],  category: 'hello'},
//     "D1": {value: [MARKER_SPRITE_X_OFFSET*3, MARKER_SPRITE_Y_OFFSET],  category: 'hello'},
//     "E1": {value: [MARKER_SPRITE_X_OFFSET*4, MARKER_SPRITE_Y_OFFSET],  category: 'hello'},
//     "F1": {value: [MARKER_SPRITE_X_OFFSET*5, MARKER_SPRITE_Y_OFFSET],  category: 'hello'},
//     "G1": {value: [MARKER_SPRITE_X_OFFSET*6, MARKER_SPRITE_Y_OFFSET],  category: 'hello'},
//     "H1": {value: [MARKER_SPRITE_X_OFFSET*7, MARKER_SPRITE_Y_OFFSET],  category: 'hello'},
//     "I1": {value: [MARKER_SPRITE_X_OFFSET*8, MARKER_SPRITE_Y_OFFSET],  category: 'hello'},

//     "A2": {value: [0, MARKER_SPRITE_Y_OFFSET*2],  category: 'fuck'},
//     "B2": {value: [MARKER_SPRITE_X_OFFSET, MARKER_SPRITE_Y_OFFSET*2],  category: 'fuck'},
//     "C2": {value: [MARKER_SPRITE_X_OFFSET*2, MARKER_SPRITE_Y_OFFSET*2],  category: 'fuck'},
//     "D2": {value: [MARKER_SPRITE_X_OFFSET*3, MARKER_SPRITE_Y_OFFSET*2],  category: 'fuck'},
//     "E2": {value: [MARKER_SPRITE_X_OFFSET*4, MARKER_SPRITE_Y_OFFSET*2],  category: 'fuck'},
//     "F2": {value: [MARKER_SPRITE_X_OFFSET*5, MARKER_SPRITE_Y_OFFSET*2],  category: 'fuck'},
//     "G2": {value: [MARKER_SPRITE_X_OFFSET*6, MARKER_SPRITE_Y_OFFSET*2],  category: 'fuck'},
//     "H2": {value: [MARKER_SPRITE_X_OFFSET*7, MARKER_SPRITE_Y_OFFSET*2],  category: 'fuck'},
//     "I2": {value: [MARKER_SPRITE_X_OFFSET*8, MARKER_SPRITE_Y_OFFSET*2],  category: 'fuck'}
// };


// function CommunityMap() {
//     const [showTheme, setShowTheme] = useState(false);

//     ////////////// From MyMap /////////////////
//     const navermaps = useNavermaps();
//     // const map = useMap();
//     const [map, setMap] = useState(null);
//     const [bounds, setBounds] = useState(null);
//     const [category, setCategory] = useState('');
//     // const [marker, setMarker] = useState(null);
//     const [markerList, setMarkerList] = useState([]);

//     let markers = [];
//     let infoWindows = [];
    

//     // console.log({map})

//     // console.log(filterByCategory(MARKER_SPRITE_POSITION, 'hi'));

//     useEffect(() => {
//         if (map) {
//             // setBounds(map.bounds);
//             addMarkers(map, MARKER_SPRITE_POSITION);
//             console.log(map);
//         }
//     }, [map])

//     function clearMarkers(markers) {
//         markers.forEach((marker) => marker.setMap(null));
//         markers = [];

//         if(map){
//             navermaps.Event.addListener(map, 'idle', function() {
//                 updateMarkers(map, markers);
//             });
//         }

//     }

//     function addMarkers(map, MARKER_SPRITE_POSITION) {
//         const { bounds } = map;

//         if(bounds !== null && !markers.length) {
//             const southWest = bounds._sw,
//                 northEast = bounds._ne,
//                 lngSpan = northEast.lng() - southWest.lng(),
//                 latSpan = northEast.lat() - southWest.lat();

//             for (const key in MARKER_SPRITE_POSITION) {

//                 const position = new navermaps.LatLng(
//                     southWest.lat() + latSpan * Math.random(),
//                     southWest.lng() + lngSpan * Math.random());
            
//                 const marker = new navermaps.Marker({
//                     map: map,
//                     position: position,
//                     title: key,
//                     icon: {
//                         url: 'https://conservetorch.org/wp-content/uploads/2021/02/icon_fish.png',
//                         scaledSize: new navermaps.Size(50, 50),
//                         anchor: new navermaps.Point(25, 25),
//                         // origin: new navermaps.Point(MARKER_SPRITE_POSITION[key][0], MARKER_SPRITE_POSITION[key][1])
//                     },
//                     zIndex: 100
//                 });

//                 // {title, username, message, image, likes}
//                 const componentString = ReactDOMServer.renderToString(
//                     <Popup
//                         title='현대모비스 해커톤 준비!!'
//                         username='SamSam'
//                         // message='동아리 대표로 나온 이번 해커톤에서 동아리 이름도 빛내고 학교 이름도 빛내보자! 아자아자~~'
//                         message={MARKER_SPRITE_POSITION[key].category}
//                         image={'https://www.hyundai.co.kr/image/upload/asset_library/MDA00000000000015710/4754f2b0f8dd4e8db46ee6e39288f987.jpg'}
//                         likes={99}
//                     />
//                 );
            
//                 const infoWindow = new navermaps.InfoWindow({
//                     // content: '<div style="width:150px;text-align:center;padding:10px;">The Letter is <b>"'+ key +'"</b>.</div>'
//                     content: componentString
//                 });
                
//                 markers.push(marker);
//                 // setMarkers((markers) => [...markers, marker]);
//                 infoWindows.push(infoWindow);
//             };
//         }

//         if(map){
//             navermaps.Event.addListener(map, 'idle', function() {
//                 updateMarkers(map, markers);
//             });

//             for (var i=0, ii=markers.length; i<ii; i++) {
//                 navermaps.Event.addListener(markers[i], 'click', getClickHandler(i));
//             }
//         }

//         // function showMarker(map, marker) {

//         //     if (marker.setMap()) return;
//         //     marker.setMap(map);
//         // }

//         // function hideMarker(map, marker) {

//         //     if (!marker.setMap()) return;
//         //     marker.setMap(null);
//         // }

//         // 해당 마커의 인덱스를 seq라는 클로저 변수로 저장하는 이벤트 핸들러를 반환합니다.
//         function getClickHandler(seq) {
//             return function(e) {
//                 const marker = markers[seq],
//                     infoWindow = infoWindows[seq];

//                 if (infoWindow.getMap()) {
//                     infoWindow.close();
//                 } else {
//                     infoWindow.open(map, marker);
//                 }
//             }
//         }

        
//     }

//     function updateMarkers(map, markers) {

//         const mapBounds = bounds;
//         let marker, position;

//         for (let i = 0; i < markers.length; i++) {

//             marker = markers[i]
//             position = marker.getPosition();

//             if (mapBounds.hasLatLng(position)) {
//                 if (marker.setMap()) return;
//                 marker.setMap(map);
//             } else {
//                 if (!marker.setMap()) return;
//                 marker.setMap(null);
//             }
//         }
//     }

//     return(
//         <NaverMap
//           ref={setMap}
//           defaultCenter={new navermaps.LatLng(37.5657259, 126.97547)}
//           defaultZoom={17}
//           disableKineticPan={false}
//         >
//             {/* <Overlay element={marker2} /> */}
//         </NaverMap>
//     );
// }

// import React, { useEffect, useLayoutEffect, useState } from 'react'
// import { Container as MapDiv, Marker, NaverMap, Overlay, useMap, useNavermaps } from 'react-naver-maps';
// import ReactDOMServer from 'react-dom/server'
// import Popup from '../Popup/Popup'
// import './CommunityMap.css'
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
// import { maxWidth, width } from '@mui/system';

// const MARKER_SPRITE_X_OFFSET = 29,
// MARKER_SPRITE_Y_OFFSET = 50;

// const filterByCategory = (data, category) => {
//     const filteredData = {};

//     // console.log(Object.keys(data));

//     for (let key of Object.keys(data)) {
//         // if (data[key][1] === category) filteredData[key] = data[key][0];
//         // console.log(data[key][1]);
//         if (data[key].category === category){
//             filteredData[key] = data[key];
//             // console.log(filteredData);
//         }
//     }

//     return filteredData;
// }


// const MARKER_SPRITE_POSITION = {
//     "A0": {value: [0, 0], category: 'hi'},
//     "B0": {value: [MARKER_SPRITE_X_OFFSET, 0],  category: 'hi'},
//     "C0": {value: [MARKER_SPRITE_X_OFFSET*2, 0],  category: 'hi'},
//     "D0": {value: [MARKER_SPRITE_X_OFFSET*3, 0],  category: 'hi'},
//     "E0": {value: [MARKER_SPRITE_X_OFFSET*4, 0],  category: 'hi'},
//     "F0": {value: [MARKER_SPRITE_X_OFFSET*5, 0],  category: 'hi'},
//     "G0": {value: [MARKER_SPRITE_X_OFFSET*6, 0],  category: 'hi'},
//     "H0": {value: [MARKER_SPRITE_X_OFFSET*7, 0],  category: 'hi'},
//     "I0": {value: [MARKER_SPRITE_X_OFFSET*8, 0],  category: 'hi'},

//     "A1": {value: [0, MARKER_SPRITE_Y_OFFSET],  category: 'hello'},
//     "B1": {value: [MARKER_SPRITE_X_OFFSET, MARKER_SPRITE_Y_OFFSET],  category: 'hello'},
//     "C1": {value: [MARKER_SPRITE_X_OFFSET*2, MARKER_SPRITE_Y_OFFSET],  category: 'hello'},
//     "D1": {value: [MARKER_SPRITE_X_OFFSET*3, MARKER_SPRITE_Y_OFFSET],  category: 'hello'},
//     "E1": {value: [MARKER_SPRITE_X_OFFSET*4, MARKER_SPRITE_Y_OFFSET],  category: 'hello'},
//     "F1": {value: [MARKER_SPRITE_X_OFFSET*5, MARKER_SPRITE_Y_OFFSET],  category: 'hello'},
//     "G1": {value: [MARKER_SPRITE_X_OFFSET*6, MARKER_SPRITE_Y_OFFSET],  category: 'hello'},
//     "H1": {value: [MARKER_SPRITE_X_OFFSET*7, MARKER_SPRITE_Y_OFFSET],  category: 'hello'},
//     "I1": {value: [MARKER_SPRITE_X_OFFSET*8, MARKER_SPRITE_Y_OFFSET],  category: 'hello'},

//     "A2": {value: [0, MARKER_SPRITE_Y_OFFSET*2],  category: 'fuck'},
//     "B2": {value: [MARKER_SPRITE_X_OFFSET, MARKER_SPRITE_Y_OFFSET*2],  category: 'fuck'},
//     "C2": {value: [MARKER_SPRITE_X_OFFSET*2, MARKER_SPRITE_Y_OFFSET*2],  category: 'fuck'},
//     "D2": {value: [MARKER_SPRITE_X_OFFSET*3, MARKER_SPRITE_Y_OFFSET*2],  category: 'fuck'},
//     "E2": {value: [MARKER_SPRITE_X_OFFSET*4, MARKER_SPRITE_Y_OFFSET*2],  category: 'fuck'},
//     "F2": {value: [MARKER_SPRITE_X_OFFSET*5, MARKER_SPRITE_Y_OFFSET*2],  category: 'fuck'},
//     "G2": {value: [MARKER_SPRITE_X_OFFSET*6, MARKER_SPRITE_Y_OFFSET*2],  category: 'fuck'},
//     "H2": {value: [MARKER_SPRITE_X_OFFSET*7, MARKER_SPRITE_Y_OFFSET*2],  category: 'fuck'},
//     "I2": {value: [MARKER_SPRITE_X_OFFSET*8, MARKER_SPRITE_Y_OFFSET*2],  category: 'fuck'}
// };


// function CommunityMap() {
//     const [showTheme, setShowTheme] = useState(false);

//     ////////////// From MyMap /////////////////
//     const navermaps = useNavermaps();
//     // const map = useMap();
//     const [map, setMap] = useState(null);
//     const [bounds, setBounds] = useState(null);
//     const [category, setCategory] = useState('');
//     // const [marker, setMarker] = useState(null);
//     const [markerList, setMarkerList] = useState([]);

//     let markers = [];
//     let infoWindows = [];
    
//     ///////////////////////////////////////////

//     // console.log({map})

//     // console.log(filterByCategory(MARKER_SPRITE_POSITION, 'hi'));

//     useEffect(() => {
//         console.log('useEffect!');
//         if (map) {
//             // setBounds(map.bounds);
//             addMarkers(map, MARKER_SPRITE_POSITION);
//             console.log(map);
//             navermaps.Event.addListener(map, 'idle', function() {
//                 updateMarkers(map, markers);
//             });
//         }
//         for (var i=0, ii=markers.length; i<ii; i++) {
//             navermaps.Event.addListener(markers[i], 'click', getClickHandler(i));
//         }
//     })

//     function clearMarkers(markers) {
//         markers.forEach((marker) => marker.setMap(null));
//         updateMarkers(map, markers);
//         // markers = [];

//         // if(map){
//         //     navermaps.Event.addListener(map, 'idle', function() {
//         //         updateMarkers(map, markers);
//         //     });
//         // }

//     }

//     // if(map){
//     //     navermaps.Event.addListener(map, 'idle', function() {
//     //         updateMarkers(map, markers);
//     //     });
//     // }


//     function addMarkers(map, MARKER_SPRITE_POSITION) {
//         const { bounds } = map;

//         if(bounds !== null && !markers.length) {
//             const southWest = bounds._sw,
//                 northEast = bounds._ne,
//                 lngSpan = northEast.lng() - southWest.lng(),
//                 latSpan = northEast.lat() - southWest.lat();

//             for (const key in MARKER_SPRITE_POSITION) {

//                 const position = new navermaps.LatLng(
//                     southWest.lat() + latSpan * Math.random(),
//                     southWest.lng() + lngSpan * Math.random());
            
//                 const marker = new navermaps.Marker({
//                     map: map,
//                     position: position,
//                     title: key,
//                     icon: {
//                         url: 'https://conservetorch.org/wp-content/uploads/2021/02/icon_fish.png',
//                         scaledSize: new navermaps.Size(50, 50),
//                         anchor: new navermaps.Point(25, 25),
//                         // origin: new navermaps.Point(MARKER_SPRITE_POSITION[key][0], MARKER_SPRITE_POSITION[key][1])
//                     },
//                     zIndex: 100
//                 });

//                 // {title, username, message, image, likes}
//                 const componentString = ReactDOMServer.renderToString(
//                     <Popup
//                         title='현대모비스 해커톤 준비!!'
//                         username='SamSam'
//                         // message='동아리 대표로 나온 이번 해커톤에서 동아리 이름도 빛내고 학교 이름도 빛내보자! 아자아자~~'
//                         message={MARKER_SPRITE_POSITION[key].category}
//                         image={'https://www.hyundai.co.kr/image/upload/asset_library/MDA00000000000015710/4754f2b0f8dd4e8db46ee6e39288f987.jpg'}
//                         likes={99}
//                     />
//                 );
            
//                 const infoWindow = new navermaps.InfoWindow({
//                     // content: '<div style="width:150px;text-align:center;padding:10px;">The Letter is <b>"'+ key +'"</b>.</div>'
//                     content: componentString
//                 });
                
//                 markers.push(marker);
//                 // setMarkers((markers) => [...markers, marker]);
//                 infoWindows.push(infoWindow);
//             };
//         }

//         // function showMarker(map, marker) {

//         //     if (marker.setMap()) return;
//         //     marker.setMap(map);
//         // }

//         // function hideMarker(map, marker) {

//         //     if (!marker.setMap()) return;
//         //     marker.setMap(null);
//         // }

//         // 해당 마커의 인덱스를 seq라는 클로저 변수로 저장하는 이벤트 핸들러를 반환합니다.
//     }

//     function getClickHandler(seq) {
//         return function(e) {
//             const marker = markers[seq],
//                 infoWindow = infoWindows[seq];

//             if (infoWindow.getMap()) {
//                 infoWindow.close();
//             } else {
//                 infoWindow.open(map, marker);
//             }
//         }
//     }

//     function updateMarkers(map, markers) {
//         const { bounds } = map;
//         const mapBounds = bounds;
//         let marker, position;

//         for (let i = 0; i < markers.length; i++) {

//             marker = markers[i]
//             position = marker.getPosition();

//             if (mapBounds.hasLatLng(position)) {
//                 if (marker.setMap()) return;
//                 marker.setMap(map);
//             } else {
//                 if (!marker.setMap()) return;
//                 marker.setMap(null);
//             }
//         }
//     }

//     ///////////////////////////////////////////

//     const handleThemeOpen = () => {
//         setShowTheme(showTheme => !showTheme);
//     }

//     const handleButtonClick = (e) => {
//         // setCategory(e.target.innerText);

//         clearMarkers(markers);

//         if (map) {
//             console.log('hi');
//             // setBounds(map.bounds);
//             addMarkers(map, filterByCategory(MARKER_SPRITE_POSITION, e.target.innerText));
//             updateMarkers(map, markers);
            
//             navermaps.Event.addListener(map, 'mousemove', function() {
//                 console.log('idle');
//                 updateMarkers(map, markers);
//             });
//         }
//         for (var i=0, ii=markers.length; i<ii; i++) {
//             navermaps.Event.addListener(markers[i], 'click', getClickHandler(i));
//         }
//         // setMarkerList(markers);
//     }

//     const themeList = ['hi', 'hello', 'fuck'];

//   return (
//     <div className='communityMap'>
//         <MapDiv
//             className={'communityMap__mapDiv'} // position: relative
//             style={{
//               width: "100vw",
//               height: "100vh",
//             }}
//         >
//             <NaverMap
//                 ref={setMap}
//                 defaultCenter={new navermaps.LatLng(37.5657259, 126.97547)}
//                 defaultZoom={17}
//                 disableKineticPan={false}
//             >
//                 {마커 필터링해서 출력}
//             </NaverMap>

//             {/* 필터 버튼 UI position: absolute */}
//             <div className='communityMap__filterArea'>
//                 <div className='communityMap__filterIcon' onClick={handleThemeOpen}>
//                     <FilterAltIcon />
//                     {/* <h5>테마</h5> */}
//                     <p>테마</p>
//                 </div>
//                 {showTheme && (
//                     <div className='communityMap__filterBox'>
//                         {(() => {
//                             const buttons = [];

//                             for (let i = 0; i < themeList.length; i++) {
//                                 buttons.push(<button key={themeList[i]} className='communityMap__filter' onClick={handleButtonClick}>{themeList[i]}</button>);
//                             }
//                             return buttons;
//                         })()}
//                         {/* <button className='communityMap__filter' onClick={handleButtonClick}>hi</button>
//                         <button className='communityMap__filter' onClick={handleButtonClick}>hello</button>
//                         <button className='communityMap__filter' onClick={handleButtonClick}>fuck</button> */}
//                     </div>
//                 )}
//             </div>
//         </MapDiv>
//     </div>
//   )
// }

// export default CommunityMap;




// import React, { useState } from "react";

// // define your image groups as an array of arrays, where each inner array represents a group of 3 images
// const images = [
//     {id: 1, src: 'https://randomwordgenerator.com/img/picture-generator/5ee0d7434f55b10ff3d8992cc12c30771037dbf852547848702a7fd19545_640.jpg', group: 'mountain'},
//     {id: 2, src: 'https://randomwordgenerator.com/img/picture-generator/53e3dc464251aa14f1dc8460962e33791c3ad6e04e507440702e7bd59f4fc3_640.jpg', group: 'mountain'},
//     {id: 3, src: 'https://randomwordgenerator.com/img/picture-generator/bruce-warrington-PUyJaeKU990-unsplash.jpg', group: 'mountain'},
//     {id: 4, src: 'https://randomwordgenerator.com/img/picture-generator/g299ae5d83ec4efdbdca98a4bda15e28e07c155a83d6af94769e03fa43341d10f028a1db9aaf9e1347089ab9b2e3e4423_640.jpg', group: 'sea'},
//     {id: 5, src: 'https://randomwordgenerator.com/img/picture-generator/53e2d6434952aa14f1dc8460962e33791c3ad6e04e507440742f7cd79249c7_640.jpg', group: 'sea'},
//     {id: 6, src: 'https://randomwordgenerator.com/img/picture-generator/piranhas-123287_640.jpg', group: 'sea'},
//     {id: 7, src: 'https://randomwordgenerator.com/img/picture-generator/54e9d4434855a514f1dc8460962e33791c3ad6e04e5074417d2d73d29f45c5_640.jpg', group: 'themepark'},
//     {id: 8, src: 'https://randomwordgenerator.com/img/picture-generator/57e1d14a4a50af14f1dc8460962e33791c3ad6e04e507440742a7ad19249c0_640.jpg', group: 'themepark'},
//     {id: 9, src: 'https://randomwordgenerator.com/img/picture-generator/57e0dc4b4a54ac14f1dc8460962e33791c3ad6e04e507440722d72d5914cc3_640.jpg', group: 'themepark'},
//     {id: 10, src: 'https://randomwordgenerator.com/img/picture-generator/5ee3dc4a4a4faa0df7c5d57bc32f3e7b1d3ac3e456597641702c7cd291_640.jpg', group: 'local'},
//     {id: 11, src: 'https://randomwordgenerator.com/img/picture-generator/52e9d44a4f52ad14f1dc8460962e33791c3ad6e04e507441722a72dd914fc7_640.jpg', group: 'local'},
//     {id: 12, src: 'https://randomwordgenerator.com/img/picture-generator/52e6d14b4a50a414f1dc8460962e33791c3ad6e04e50744074267bd29f4ec3_640.jpg', group: 'local'},
//   ];
  

// function CommunityMap() {
//     const [group, setGroup] = useState(null);
//     const [showAll, setShowAll] = useState(false);
  
//     const handleGroupClick = (groupName) => {
//       setGroup(groupName);
//       setShowAll(false);
//     }
  
//     const handleShowAllClick = () => {
//       setShowAll(true);
//       setGroup(null);
//     }
  
//     const filteredImages = showAll ? images : images.filter((image) => image.group === group);
  
//     return (
//       <div>
//         <h1>My Travel Photos</h1>
//         <div>
//           <button onClick={handleShowAllClick}>Show All</button>
//           <button onClick={() => handleGroupClick('mountain')}>Mountain</button>
//           <button onClick={() => handleGroupClick('sea')}>Sea</button>
//           <button onClick={() => handleGroupClick('themepark')}>Theme Park</button>
//           <button onClick={() => handleGroupClick('local')}>Local Landmark</button>
//         </div>
//         <div>
//           {filteredImages.map((image) => (
//             <img key={image.id} src={image.src} alt={image.group} />
//           ))}
//         </div>
//       </div>
//     );
// }

// export default CommunityMap;



//////////////////////////////// 찐막 ㅋㅋㅋㅋㅋㅋ ////////////////////////////////
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Container as MapDiv, InfoWindow, Marker, NaverMap, Overlay, useMap, useNavermaps } from 'react-naver-maps';
import ReactDOMServer from 'react-dom/server'
import Popup from '../Popup/Popup'
import './CommunityMap.css'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { maxWidth, width } from '@mui/system';
import { CommunityAPIImpl } from '../../../../lib/infrastructure/CommunityAPIImpl';
import Auth from '../../../Auth/Auth';
import { AuthAPIImpl } from '../../../../lib/infrastructure/AuthAPIImpl';

function CommunityMap({ communityId }) {
    const navermaps = useNavermaps();
    // const map = useMap();
    const [map, setMap] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const [showTheme, setShowTheme] = useState(false);
    const [ themeInfos, setThemeInfos ] = useState([]);
    const [ selectedTheme, setSelectedTheme ] = useState('');
    const [ postsInfoByTheme, setPostsInfoByTheme ] = useState([]);
    const [marker, setMarker] = useState(null);
    const [infoWindow, setInfoWindow] = useState(null);

    useEffect(() => {
        
        CommunityAPIImpl.getPosts(communityId)
        .then(response => {
            const communityInfo = response.data;
            
            let themeInfosTemp = []
            let postsInfoByThemeTemp = []
            communityInfo.commuThemes.forEach(theme => {
                themeInfosTemp = [...themeInfosTemp, {
                    themeName: theme.commuThemeName,
                    themeId: theme.id,
                }]

                let postsTemp = []
                theme.posts.forEach(post => {
                    postsTemp = [...postsTemp, post];
                })

                postsInfoByThemeTemp = [...postsInfoByThemeTemp, {
                    themeName: theme.commuThemeName,
                    themeIconUrl: theme.commuThemeIconUrl,
                    posts: postsTemp
                }]
            })

            setThemeInfos(themeInfosTemp)
            setPostsInfoByTheme(postsInfoByThemeTemp)
            // setInfoWindow(infowindow);
        })
    }, [])



    const handleThemeOpen = () => {
        setShowTheme(showTheme => !showTheme);
    }

    const handleButtonClick = (e) => {
        if (selectedTheme === e.target.innerText) {
            setSelectedTheme('');
        }
        else {
            setSelectedTheme(e.target.innerText);
        }
    }


    const toggleInfoWindow = (e, title, username, message, image, likes) => {
        // alert('hi!');
        setIsOpen(!isOpen);
        const componentString = ReactDOMServer.renderToString(
            <Popup
                // title='현대모비스 해커톤 준비!!'
                // username='SamSam'
                // // message='동아리 대표로 나온 이번 해커톤에서 동아리 이름도 빛내고 학교 이름도 빛내보자! 아자아자~~'
                // message={'hi'}
                // image={'https://www.hyundai.co.kr/image/upload/asset_library/MDA00000000000015710/4754f2b0f8dd4e8db46ee6e39288f987.jpg'}
                // likes={99}

                title={title}
                username={username}
                message={message}
                image={image}
                likes={likes}
            />
        );


        if(map){
            const infoWindow = new navermaps.InfoWindow({
                content: componentString
            });

            navermaps.Event.addListener(e.overlay, 'click', getClickHandler(map, e.overlay, infoWindow));


            // if (infoWindow.getMap()) {
            //     infoWindow.close();
            // } else {
            //     infoWindow.open(map, marker);
            // }
        }
    };

        const getClickHandler = (map, marker, infoWindow) => {
            
            return function() {
                if (infoWindow.getMap()) {
                    infoWindow.close();
                } else {
                    infoWindow.open(map, marker);
                }

            }
        }

    return (
        <div className='communityMap'>
            <MapDiv
                className={'communityMap__mapDiv'} // position: relative
                style={{
                width: "100vw",
                height: "100vh",
                }}
            >
                <NaverMap
                    ref={setMap}
                    defaultCenter={new navermaps.LatLng(37.5657259, 127.97547)}
                    defaultZoom={8}
                    disableKineticPan={false}
                >
                    {
                        postsInfoByTheme.map(postsInfo => {
                            if (!selectedTheme || selectedTheme === postsInfo.themeName) {
                                return postsInfo.posts.map(post => {
                                    return (
                                        <div key={post.id}>
                                            <Marker
                                                ref={setMarker}
                                                position={new navermaps.LatLng(post.locationLatitude, post.locationLongitude)}
                                                icon = {{
                                                    url: postsInfo.themeIconUrl,
                                                    scaledSize: new navermaps.Size(50, 50),
                                                    // origin: new navermaps.Point(0, 0),
                                                    anchor: new navermaps.Point(25, 25),
                                                }}
                                                // title, username, message, image, likes
                                                onClick={(e) => toggleInfoWindow(e, post.title, post.user.profile.name, post.text, post.ImgUrl,
                                                                                    post.numberOfHearts, postsInfo.commuProfileImgUrl)}
                                            />

                                        {/* {isOpen && (
                                            <InfoWindow
                                                position={new navermaps.LatLng(post.locationLatitude, post.locationLongitude)}
                                                onCloseClick={() => toggleInfoWindow()}
                                                content = "hi"
                                            />
                                        )} */}
                                        </div>
                                    )
                                })
                            }
                        })
                    }
                </NaverMap>

                <div className='communityMap__filterArea'>
                    <div className='communityMap__filterIcon' onClick={handleThemeOpen}>
                        <FilterAltIcon />
                        <p>테마</p>
                    </div>
                    {showTheme && (
                        <div className='communityMap__filterBox'>
                            {
                                themeInfos.map((themeInfo) => {
                                    return (
                                        <button key={themeInfo.themeName} className='communityMap__filter' onClick={handleButtonClick}>{themeInfo.themeName}</button>
                                    )
                                })
                            }
                        </div>
                    )}
                </div>
            </MapDiv>
        </div>
    );
}

export default CommunityMap;


