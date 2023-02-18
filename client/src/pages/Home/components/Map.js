// import React, { useEffect, useRef } from 'react'

// const {naver} = window;

// function Map({ zoom }) {
//     const mapElement = useRef(null);


//   useEffect(() => {
//     const { naver } = window;
//     if (!mapElement.current || !naver) return;

//     const location = new naver.maps.LatLng(37.5656, 126.9769);
//     const mapOptions = {
//       center: location,
//       zoom: 17,
//       // zoom: { zoom },
//       zoomControl: true,
//       zoomControlOptions: {
//         position: naver.maps.Position.TOP_RIGHT,
//       },
//     };
//     const map = new naver.maps.Map(mapElement.current, mapOptions);
//     new naver.maps.Marker({
//       position: location,
//       map,

//     });
//   }, [zoom]);


//   return <div ref={mapElement} style={{ height: "100vh", width: "100vw" }} />;
// }

// export default Map



import React, { useRef, useState } from 'react'
import './Map.css'
import { Container as MapDiv, NaverMap, Marker, useNavermaps, useMap, useListener, Listener, Overlay, NavermapsProvider } from 'react-naver-maps'
import { makeMarkerClustering } from './makeMarkerClustering'
import accidentDeath from './accidentDeath'

function MyMarkers() {
  const navermaps = useNavermaps()
  const { naver } = window;

  var infowindows = [];

  infowindows.push(new naver.maps.InfoWindow({
      content: [
          '<div class="iw_inner">',
          '   <h3>주역이네 집</h3>',
          '</div>'
      ].join('')
  }));

  // 마커를 한번만 생성하기 위해 useState lazy initialize 사용
  const [marker1] = useState(
    () =>
      new navermaps.Marker({
        position: { lat: 37.5666103, lng: 126.9783882 },
        icon: {
          url: 'https://conservetorch.org/wp-content/uploads/2021/02/icon_fish.png',
          scaledSize: new navermaps.Size(50, 50),
          // origin: new navermaps.Point(0, 0),
          anchor: new navermaps.Point(50, 50)
        }
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
          anchor: new navermaps.Point(50, 50)
        }
      }),
  )

  // // 마커를 한번만 생성하기 위해 useRef 사용
  // const marker2Ref = useRef(null)
  // if (!marker2Ref.current) {
  //   marker2Ref.current = new navermaps.Marker({
  //     position: { lat: 37.5657259, lng: 126.97547 },
  //   })
  // }
  // const marker2 = marker2Ref.current

  // hook 으로 이벤트 리스너 등록
  useListener(marker1, 'click', () => window.alert('서울시청 click'))
  useListener(marker2, 'click', () => window.alert('덕수궁 click'))

  return (
    <>
      <Overlay element={marker1} />
      <Overlay element={marker2} />
    </>
  )
}


function MyMap() {
  // const navermaps = useNavermaps();
  const navermaps = useNavermaps();
  const { naver } = window;


  return(
      <NaverMap
        defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
        defaultZoom={15}
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

// function MarkerCluster() {
//   // https://github.com/navermaps/marker-tools.js/blob/master/marker-clustering/src/MarkerClustering.js
//   // 예제에서 제공된 코드를 그대로 사용하되 naver 객체를 주입 받도록 간단히 makeMarkerClustering로 Wrapping 합니다.

//   const navermaps = useNavermaps()
//   const map = useMap()

//   // https://github.com/zeakd/react-naver-maps/blob/main/website/src/samples/marker-cluster.js
//   const MarkerClustering = makeMarkerClustering(window.naver)

//   const htmlMarker1 = {
//     content:
//       '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-1.png);background-size:contain;"></div>',
//     size: navermaps.Size(40, 40),
//     anchor: navermaps.Point(20, 20),
//   }
//   const htmlMarker2 = {
//     content:
//       '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-2.png);background-size:contain;"></div>',
//     size: navermaps.Size(40, 40),
//     anchor: navermaps.Point(20, 20),
//   }
//   const htmlMarker3 = {
//     content:
//       '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-3.png);background-size:contain;"></div>',
//     size: navermaps.Size(40, 40),
//     anchor: navermaps.Point(20, 20),
//   }
//   const htmlMarker4 = {
//     content:
//       '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-4.png);background-size:contain;"></div>',
//     size: navermaps.Size(40, 40),
//     anchor: navermaps.Point(20, 20),
//   }
//   const htmlMarker5 = {
//     content:
//       '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(https://navermaps.github.io/maps.js.ncp/docs/img/cluster-marker-5.png);background-size:contain;"></div>',
//     size: navermaps.Size(40, 40),
//     anchor: navermaps.Point(20, 20),
//   }

//   // https://navermaps.github.io/maps.js.ncp/docs/data/accidentdeath.js
//   const data = accidentDeath.searchResult.accidentDeath

//   // Customize Overlay 참고
//   // https://zeakd.github.io/react-naver-maps/guides/customize-overlays/
//   const [cluster] = useState(() => {
//     const markers = []

//     for (var i = 0, ii = data.length; i < ii; i++) {
//       var spot = data[i],
//         latlng = new navermaps.LatLng(spot.grd_la, spot.grd_lo),
//         marker = new navermaps.Marker({
//           position: latlng,
//           draggable: true,
//         })

//       markers.push(marker)
//     }

//     const cluster = new MarkerClustering({
//       minClusterSize: 2,
//       maxZoom: 8,
//       map: map,
//       markers: markers,
//       disableClickZoom: false,
//       gridSize: 120,
//       icons: [
//         htmlMarker1,
//         htmlMarker2,
//         htmlMarker3,
//         htmlMarker4,
//         htmlMarker5,
//       ],
//       indexGenerator: [10, 100, 200, 500, 1000],
//       stylingFunction: function (clusterMarker, count) {
//         // without jquery $(clusterMarker.getElement()).find('div:first-child').text(count)
//         clusterMarker
//           .getElement()
//           .querySelector('div:first-child').innerText = count
//       },
//     })

//     return cluster
//   })

//   return <Overlay element={cluster} />
// }

// function MyMap() {
//   const navermaps = useNavermaps()

//   return (
//     <NaverMap
//       zoom={6}
//       center={new navermaps.LatLng(36.2253017, 127.6460516)}
//       zoomControl={true}
//       zoomControlOptions={{
//         position: navermaps.Position.TOP_LEFT,
//         style: navermaps.ZoomControlStyle.SMALL,
//       }}
//     >
//       <MarkerCluster />
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
