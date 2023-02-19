import React, { useEffect, useRef, useState } from 'react'
import ReactDomServer from 'react-dom/server'
import './Map.css'
import { Container as MapDiv, NaverMap, Marker, useNavermaps, useMap, useListener, Listener, Overlay, NavermapsProvider, InfoWindow } from 'react-naver-maps'
import { makeMarkerClustering } from './makeMarkerClustering'
import accidentDeath from './accidentDeath'
import Popup from '../Popup/Popup'


function MyMarkers() {
  const navermaps = useNavermaps()
  const { naver } = window;
  const naverMap = useMap();

  const componentString = ReactDomServer.renderToString(<Popup />)


  // 마커를 한번만 생성하기 위해 useState lazy initialize 사용
  const [marker1] = useState(
    () =>
      new navermaps.Marker({
        position: { lat: 37.5666103, lng: 126.9783882 },
        icon: {
          url: 'https://conservetorch.org/wp-content/uploads/2021/02/icon_fish.png',
          scaledSize: new navermaps.Size(50, 50),
          // origin: new navermaps.Point(0, 0),
          anchor: new navermaps.Point(25, 25)
        },
        // animation: navermaps.Animation.BOUNCE
      }), 
  )

  const [marker2] = useState(
    () =>
      new navermaps.Marker({
        position: { lat: 37.5657259, lng: 126.97547 },
        icon: {
          url: 'https://conservetorch.org/wp-content/uploads/2021/02/icon_fish.png',
          scaledSize: new navermaps.Size(50, 50),
          // origin: new navermaps.Point(0, 0)
          anchor: new navermaps.Point(25, 25)
        },
        // animation: navermaps.Animation.BOUNCE
      }),
  )

  var infowindow = new naver.maps.InfoWindow({
    content: componentString
  });

  // // 마커를 한번만 생성하기 위해 useRef 사용
  // const marker2Ref = useRef(null)
  // if (!marker2Ref.current) {
  //   marker2Ref.current = new navermaps.Marker({
  //     position: { lat: 37.5657259, lng: 126.97547 },
  //   })
  // }
  // const marker2 = marker2Ref.current

  // hook 으로 이벤트 리스너 등록
  // useListener(marker1, 'click', () => window.alert('서울시청 click'))
  useListener(marker1, 'click', function() {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(naverMap, marker1);
    }
  });
  useListener(marker2, 'click', function() {
    if (marker2.getAnimation() !== null) {
      marker2.setAnimation(null);
    } else {
      marker2.setAnimation(naver.maps.Animation.BOUNCE);
    }
  });

  useListener(naverMap, 'click', function(e) {
    new naver.maps.Marker({  // point에 마커를 표시함
        map: naverMap,
        position: e.latlng,
        icon: {
          url: 'https://conservetorch.org/wp-content/uploads/2021/02/icon_fish.png',
          scaledSize: new navermaps.Size(50, 50),
          // origin: new navermaps.Point(0, 0)
          anchor: new navermaps.Point(25, 25)
        }
    });
  });
  
  return (
    <>
      <Overlay element={marker1} />
      <Overlay element={marker2} />
    </>
  )
}


function MyMap() {
  const navermaps = useNavermaps();
  const { naver } = window;


  return(
      <NaverMap
        defaultCenter={new navermaps.LatLng(37.5657259, 126.97547)}
        defaultZoom={17}
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
