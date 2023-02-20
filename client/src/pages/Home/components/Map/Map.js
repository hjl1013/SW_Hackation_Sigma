import React, { useEffect, useRef, useState } from 'react'
import ReactDomServer from 'react-dom/server'
import './Map.css'
import { Container as MapDiv, NaverMap, Marker, useNavermaps, useMap, useListener, Listener, Overlay, NavermapsProvider, InfoWindow } from 'react-naver-maps'
import { makeMarkerClustering } from './makeMarkerClustering'
import accidentDeath from './accidentDeath'
// import Popup from './Popup'
import $ from 'jquery';
import FlagIcon from '@mui/icons-material/Flag';


// function MyMarkers() {
//   const navermaps = useNavermaps()
//   const { naver } = window;
//   const naverMap = useMap();

  // const componentString = ReactDomServer.renderToString(<Popup />)


//   // 마커를 한번만 생성하기 위해 useState lazy initialize 사용
//   const [marker1] = useState(
//     () =>
//       new navermaps.Marker({
//         position: { lat: 37.5666103, lng: 126.9783882 },
//         icon: {
//           url: 'https://conservetorch.org/wp-content/uploads/2021/02/icon_fish.png',
//           scaledSize: new navermaps.Size(50, 50),
//           // origin: new navermaps.Point(0, 0),
//           anchor: new navermaps.Point(25, 25)
//         },
//         // animation: navermaps.Animation.BOUNCE
//       }), 
//   )

//   const [marker2] = useState(
//     () =>
//       new navermaps.Marker({
//         position: { lat: 37.5657259, lng: 126.97547 },
//         icon: {
//           url: 'https://conservetorch.org/wp-content/uploads/2021/02/icon_fish.png',
//           scaledSize: new navermaps.Size(50, 50),
//           // origin: new navermaps.Point(0, 0)
//           anchor: new navermaps.Point(25, 25)
//         },
//         // animation: navermaps.Animation.BOUNCE
//       }),
//   )

//   var infowindow = new naver.maps.InfoWindow({
//     content: componentString
//   });

//   // // 마커를 한번만 생성하기 위해 useRef 사용
//   // const marker2Ref = useRef(null)
//   // if (!marker2Ref.current) {
//   //   marker2Ref.current = new navermaps.Marker({
//   //     position: { lat: 37.5657259, lng: 126.97547 },
//   //   })
//   // }
//   // const marker2 = marker2Ref.current

//   // hook 으로 이벤트 리스너 등록
//   // useListener(marker1, 'click', () => window.alert('서울시청 click'))
//   useListener(marker1, 'click', function() {
//     if (infowindow.getMap()) {
//         infowindow.close();
//     } else {
//         infowindow.open(naverMap, marker1);
//     }
//   });
//   useListener(marker2, 'click', function() {
//     if (marker2.getAnimation() !== null) {
//       marker2.setAnimation(null);
//     } else {
//       marker2.setAnimation(naver.maps.Animation.BOUNCE);
//     }
//   });

//   useListener(naverMap, 'click', function(e) {
//     new naver.maps.Marker({  // point에 마커를 표시함
//         map: naverMap,
//         position: e.latlng,
//         icon: {
//           url: 'https://conservetorch.org/wp-content/uploads/2021/02/icon_fish.png',
//           scaledSize: new navermaps.Size(50, 50),
//           // origin: new navermaps.Point(0, 0)
//           anchor: new navermaps.Point(25, 25)
//         }
//     });
//   });
  
//   return (
//     <>
//       <Overlay element={marker1} />
//       <Overlay element={marker2} />
//     </>
//   )
// }


// function MyMarkers() {
//   const { naver } = window;
//   const map = useMap();
  
//   var MARKER_SPRITE_X_OFFSET = 29,
//       MARKER_SPRITE_Y_OFFSET = 50,
//       MARKER_SPRITE_POSITION = {
//           "A0": [0, 0],
//           "B0": [MARKER_SPRITE_X_OFFSET, 0],
//           "C0": [MARKER_SPRITE_X_OFFSET*2, 0],
//           "D0": [MARKER_SPRITE_X_OFFSET*3, 0],
//           "E0": [MARKER_SPRITE_X_OFFSET*4, 0],
//           "F0": [MARKER_SPRITE_X_OFFSET*5, 0],
//           "G0": [MARKER_SPRITE_X_OFFSET*6, 0],
//           "H0": [MARKER_SPRITE_X_OFFSET*7, 0],
//           "I0": [MARKER_SPRITE_X_OFFSET*8, 0],

//           "A1": [0, MARKER_SPRITE_Y_OFFSET],
//           "B1": [MARKER_SPRITE_X_OFFSET, MARKER_SPRITE_Y_OFFSET],
//           "C1": [MARKER_SPRITE_X_OFFSET*2, MARKER_SPRITE_Y_OFFSET],
//           "D1": [MARKER_SPRITE_X_OFFSET*3, MARKER_SPRITE_Y_OFFSET],
//           "E1": [MARKER_SPRITE_X_OFFSET*4, MARKER_SPRITE_Y_OFFSET],
//           "F1": [MARKER_SPRITE_X_OFFSET*5, MARKER_SPRITE_Y_OFFSET],
//           "G1": [MARKER_SPRITE_X_OFFSET*6, MARKER_SPRITE_Y_OFFSET],
//           "H1": [MARKER_SPRITE_X_OFFSET*7, MARKER_SPRITE_Y_OFFSET],
//           "I1": [MARKER_SPRITE_X_OFFSET*8, MARKER_SPRITE_Y_OFFSET],

//           "A2": [0, MARKER_SPRITE_Y_OFFSET*2],
//           "B2": [MARKER_SPRITE_X_OFFSET, MARKER_SPRITE_Y_OFFSET*2],
//           "C2": [MARKER_SPRITE_X_OFFSET*2, MARKER_SPRITE_Y_OFFSET*2],
//           "D2": [MARKER_SPRITE_X_OFFSET*3, MARKER_SPRITE_Y_OFFSET*2],
//           "E2": [MARKER_SPRITE_X_OFFSET*4, MARKER_SPRITE_Y_OFFSET*2],
//           "F2": [MARKER_SPRITE_X_OFFSET*5, MARKER_SPRITE_Y_OFFSET*2],
//           "G2": [MARKER_SPRITE_X_OFFSET*6, MARKER_SPRITE_Y_OFFSET*2],
//           "H2": [MARKER_SPRITE_X_OFFSET*7, MARKER_SPRITE_Y_OFFSET*2],
//           "I2": [MARKER_SPRITE_X_OFFSET*8, MARKER_SPRITE_Y_OFFSET*2]
//       };

//   // var map = new naver.maps.Map('map', {
//   //     center: new naver.maps.LatLng(37.3595704, 127.105399),
//   //     zoom: 10
//   // });

//   var bounds = map.getBounds(),
//       southWest = bounds.getSW(),
//       northEast = bounds.getNE(),
//       lngSpan = northEast.lng() - southWest.lng(),
//       latSpan = northEast.lat() - southWest.lat();

//   var markers = [],
//       infoWindows = [];

//   for (var key in MARKER_SPRITE_POSITION) {

//       var position = new naver.maps.LatLng(
//           southWest.lat() + latSpan * Math.random(),
//           southWest.lng() + lngSpan * Math.random());

//       var marker = new naver.maps.Marker({
//           map: map,
//           position: position,
//           title: key,
//           icon: {
//               url: 'https://conservetorch.org/wp-content/uploads/2021/02/icon_fish.png',
//               scaledSize: new naver.maps.Size(50, 50),
//               // anchor: new naver.maps.Point(12, 37),
//               // origin: new naver.maps.Point(MARKER_SPRITE_POSITION[key][0], MARKER_SPRITE_POSITION[key][1])
//           },
//           zIndex: 100
//       });

//       var infoWindow = new naver.maps.InfoWindow({
//           content: '<div style="width:150px;text-align:center;padding:10px;">The Letter is <b>"'+ key.substr(0, 1) +'"</b>.</div>'
//       });

//       markers.push(marker);
//       infoWindows.push(infoWindow);
//   };

//   naver.maps.Event.addListener(map, 'idle', function() {
//       updateMarkers(map, markers);
//   });

//   function updateMarkers(map, markers) {

//       var mapBounds = map.getBounds();
//       var marker, position;

//       for (var i = 0; i < markers.length; i++) {

//           marker = markers[i]
//           position = marker.getPosition();

//           if (mapBounds.hasLatLng(position)) {
//               showMarker(map, marker);
//           } else {
//               hideMarker(map, marker);
//           }
//       }
//   }

//   function showMarker(map, marker) {

//       if (marker.setMap()) return;
//       marker.setMap(map);
//   }

//   function hideMarker(map, marker) {

//       if (!marker.setMap()) return;
//       marker.setMap(null);
//   }

//   // 해당 마커의 인덱스를 seq라는 클로저 변수로 저장하는 이벤트 핸들러를 반환합니다.
//   function getClickHandler(seq) {
//       return function(e) {
//           var marker = markers[seq],
//               infoWindow = infoWindows[seq];

//           if (infoWindow.getMap()) {
//               infoWindow.close();
//           } else {
//               infoWindow.open(map, marker);
//           }
//       }
//   }

//   for (var i=0, ii=markers.length; i<ii; i++) {
//       naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i));
//   }

//   return (
//     null
//   );
// }

function MyMarkers() {
  const map = useMap();
  const { naver } = window;
  const $ = window.$;

  // var map = new naver.maps.Map("map", {
  //     center: new naver.maps.LatLng(37.3595316, 127.1052133),
  //     zoom: 15,
  //     mapTypeControl: true
  // });

  var infoWindow = new naver.maps.InfoWindow({
    //   anchorSkew: true
  });

  map.setCursor('pointer');

  function searchCoordinateToAddress(latlng) {

      infoWindow.close();

      naver.maps.Service.reverseGeocode({
          coords: latlng,
          orders: [
              naver.maps.Service.OrderType.ADDR,
              naver.maps.Service.OrderType.ROAD_ADDR
          ].join(',')
      }, function(status, response) {
          if (status === naver.maps.Service.Status.ERROR) {
              return alert('Something Wrong!');
          }


          var items = response.v2.results,
              address = '',
              htmlAddresses = [];

          for (var i=0, ii=items.length, item, addrType; i<ii; i++) {
              item = items[i];
              console.log(item);
              address = makeAddress(item) || '';
              addrType = item.name === 'roadaddr' ? '[도로명 주소]' : '[지번 주소]';

              htmlAddresses.push((i+1) +'. '+ addrType +' '+ address);
          }

          infoWindow.setContent([
              '<div style="padding:10px;min-width:200px;line-height:150%;">',
              '<h4 style="margin-top:5px;">검색 좌표</h4><br />',
              htmlAddresses.join('<br />'),
              '</div>'
          ].join('\n'));

          infoWindow.open(map, latlng);
      });
  }

  function searchAddressToCoordinate(address) {
      naver.maps.Service.geocode({
          query: address
      }, function(status, response) {
          if (status === naver.maps.Service.Status.ERROR) {
              return alert('Something Wrong!');
          }

          if (response.v2.meta.totalCount === 0) {
            //   return alert('totalCount' + response.v2.meta.totalCount);
            return alert('주소를 입력해주세요!');
          }

          var htmlAddresses = [],
              item = response.v2.addresses[0],
              point = new naver.maps.Point(item.x, item.y);
          
          console.log(point);

          if (item.roadAddress) {
              htmlAddresses.push('[도로명 주소] ' + item.roadAddress);
          }

          if (item.jibunAddress) {
              htmlAddresses.push('[지번 주소] ' + item.jibunAddress);
          }

          if (item.englishAddress) {
              htmlAddresses.push('[영문명 주소] ' + item.englishAddress);
          }

          infoWindow.setContent([
              '<div style="padding:10px;min-width:200px;line-height:150%;">',
              '<h4 style="margin-top:5px;">검색 주소 : '+ address +'</h4><br />',
              htmlAddresses.join('<br />'),
              '</div>'
          ].join('\n'));

          map.setCenter(point);
          map.setZoom(17);
          infoWindow.open(map, point);
        //     marker = new naver.maps.Marker({
        //     map: map,
        //     position: point,
        //     // icon: {
        //     //     url: 'https://conservetorch.org/wp-content/uploads/2021/02/icon_fish.png',
        //     //     scaledSize: new naver.maps.Size(50, 50),
        //     //     // anchor: new naver.maps.Point(12, 37),
        //     //     // origin: new naver.maps.Point(MARKER_SPRITE_POSITION[key][0], MARKER_SPRITE_POSITION[key][1])
        //     // },
        //     zIndex: 100
        // });
      });
  }

  function initGeocoder() {
      map.addListener('click', function(e) {
        //   searchCoordinateToAddress(e.coord);
        infoWindow.close();
      });

      $('#address').on('keydown', function(e) {
          var keyCode = e.which;

          if (keyCode === 13) { // Enter Key
              searchAddressToCoordinate($('#address').val());
          }
      });

      $('#submit').on('click', function(e) {
          e.preventDefault();

          searchAddressToCoordinate($('#address').val());
      });
  }

  function makeAddress(item) {
      if (!item) {
          return;
      }

      var name = item.name,
          region = item.region,
          land = item.land,
          isRoadAddress = name === 'roadaddr';

      var sido = '', sigugun = '', dongmyun = '', ri = '', rest = '';

      if (hasArea(region.area1)) {
          sido = region.area1.name;
      }

      if (hasArea(region.area2)) {
          sigugun = region.area2.name;
      }

      if (hasArea(region.area3)) {
          dongmyun = region.area3.name;
      }

      if (hasArea(region.area4)) {
          ri = region.area4.name;
      }

      if (land) {
          if (hasData(land.number1)) {
              if (hasData(land.type) && land.type === '2') {
                  rest += '산';
              }

              rest += land.number1;

              if (hasData(land.number2)) {
                  rest += ('-' + land.number2);
              }
          }

          if (isRoadAddress === true) {
              if (checkLastString(dongmyun, '면')) {
                  ri = land.name;
              } else {
                  dongmyun = land.name;
                  ri = '';
              }

              if (hasAddition(land.addition0)) {
                  rest += ' ' + land.addition0.value;
              }
          }
      }
      return [sido, sigugun, dongmyun, ri, rest].join(' ');
  }

  function hasArea(area) {
      return !!(area && area.name && area.name !== '');
  }

  function hasData(data) {
      return !!(data && data !== '');
  }

  function checkLastString (word, lastString) {
      return new RegExp(lastString + '$').test(word);
  }

  function hasAddition (addition) {
      return !!(addition && addition.value);
  }

  naver.maps.onJSContentLoaded = initGeocoder;

  return(
    <div className='mymarker'>
        {/* <div className='mymarker__top'>
            <FlagIcon />
            <button>목적지 선택하기</button>
        </div> */}
        <div className='mymarker__bottom'>
            <input className='mymarker__button' id="address" type="text" placeholder="목적지를 입력하세요"></input>
            <input className='mymarker__button' id='submit' type='button' value='검색'/>
        </div>
    </div>
  );
}


function MyMap() {
  const navermaps = useNavermaps();
  const { naver } = window;


  return(
      <NaverMap
        defaultCenter={new navermaps.LatLng(37.5657259, 126.97547)}
        defaultZoom={17}
        disableKineticPan={false}
      >
        <MyMarkers />
          {/* <Marker
            style={{
              padding: "10px"
            }}
            position={new navermaps.LatLng(37.3595704, 127.105399)}
            icon={{
              url: 'https://conservetorch.org/wp-content/uploads/2021/02/icon_fish.png',
              scaledSize: new naver.maps.Size(50, 50),
              origin: new naver.maps.Point(0, 0)
            }}
          /> */}
      </NaverMap>
  )
}

// function MyMap() {
  
//   const navermaps = useNavermaps()

//   // useRef 대신 useState를 통해 ref를 가져옵니다.
//   const [map, setMap] = useState(null)
//   const [infowindow, setInfoWindow] = useState(null)

//   var contentString = [
//       '<div class="iw_inner">',
//       '   <h3>서울특별시청</h3>',
//       '   <p>서울특별시 중구 태평로1가 31 | 서울특별시 중구 세종대로 110 서울특별시청<br />',
//       '       <img src="https://conservetorch.org/wp-content/uploads/2021/02/icon_fish.png" width="55" height="55" alt="서울시청" class="thumb" /><br />',
//       '       02-120 | 공공,사회기관 &gt; 특별,광역시청<br />',
//       '       <a href="http://www.seoul.go.kr" target="_blank">www.seoul.go.kr/</a>',
//       '   </p>',
//       '</div>'
//   ].join('');

//   function onSuccessGeolocation(position) {
//     if (!map || !infowindow) return

//     const location = new navermaps.LatLng(
//       position.coords.latitude,
//       position.coords.longitude,
//     )
//     map.setCenter(location)
//     map.setZoom(10)
//     infowindow.setContent(contentString)
//     infowindow.open(map, location)
//     console.log('Coordinates: ' + location.toString())
//   }

//   function onErrorGeolocation() {
//     if (!map || !infowindow) return

//     const center = map.getCenter()
//     infowindow.setContent(
//       '<div style="padding:20px;">' +
//         '<h5 style="margin-bottom:5px;color:#f00;">Geolocation failed!</h5>' +
//         'latitude: ' +
//         center.lat() +
//         '<br />longitude: ' +
//         center.lng() +
//         '</div>',
//     )
//     infowindow.open(map, center)

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         onSuccessGeolocation,
//         onErrorGeolocation,
//       )
//     } else {
//       const center = map.getCenter()
//       infowindow.setContent(
//         '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>',
//       )
//       infowindow.open(map, center)
//     }
//   }

//   useEffect(() => {
//     if (!map || !infowindow) {
//       return
//     }

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         onSuccessGeolocation,
//         onErrorGeolocation,
//       )
//     } else {
//       var center = map.getCenter()
//       infowindow.setContent(
//         '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>',
//       )
//       infowindow.open(map, center)
//     }
//   }, [map, infowindow])

//   return (
//     <NaverMap
//       // uncontrolled
//       defaultCenter={new navermaps.LatLng(37.5666805, 126.9784147)}
//       defaultZoom={10}
//       defaultMapTypeId={navermaps.MapTypeId.NORMAL}
//       ref={setMap}
//     >
//       <InfoWindow ref={setInfoWindow} />
//     </NaverMap>
//   )
// }


function Map() {
  return (
    <div>
      <MapDiv
        className={'map'}
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <MyMap />
      </MapDiv>
    </div>
  )
}

export default Map
