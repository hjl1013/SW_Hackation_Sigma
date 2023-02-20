import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { Container as MapDiv, NaverMap, useNavermaps } from 'react-naver-maps';
// import axios from 'axios';


function MapTest() {
  const { naver } = window;
  

  return (
    <div>
      <MapDiv
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <NaverMap
          defaultCenter={new naver.maps.LatLng(37.5657259, 126.97547)}
          defaultZoom={17}
        />
      </MapDiv>
    </div>
  );
};


// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// // import { Container as MapDiv, NaverMap, useListener, useMap, useNavermaps } from 'react-naver-maps';

// // import { useState, useRef, useEffect } from 'react';
// import { Container as MapDiv, NaverMap, useNavermaps, InfoWindow, useListener, Marker, useMap } from 'react-naver-maps';

// function MyMap() {
//   const navermaps = useNavermaps()

//   // useRef 대신 useState를 통해 ref를 가져옵니다.
//   const [map, setMap] = useState(null)
//   const [infowindow, setInfoWindow] = useState(null)

//   function onSuccessGeolocation(position) {
//     if (!map || !infowindow) return

//     const location = new navermaps.LatLng(
//       position.coords.latitude,
//       position.coords.longitude,
//     )
//     map.setCenter(location)
//     map.setZoom(17)
//     infowindow.setContent(
//       '<div style="padding:20px;">' +
//         'geolocation.getCurrentPosition() 위치' +
//         '</div>',
//     )
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

//   // useListener(map, 'keydown', function(e) {
//   //   alert(e.which);
//   // })

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
//       defaultZoom={17}
//       defaultMapTypeId={navermaps.MapTypeId.NORMAL}
//       ref={setMap}
//     >
//       <InfoWindow ref={setInfoWindow} />
//     </NaverMap>
//   )
// }




// function MapTest() {
//   return (
//     <MapDiv
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//       }}
//     >
//       <MyMap />
//       {/* <GeocodeTest /> */}
//     </MapDiv>
//   );
// };


export default MapTest;
