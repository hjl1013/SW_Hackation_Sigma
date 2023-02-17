import { width } from '@mui/system';
import React, { useEffect, useRef } from 'react'

const {naver} = window;

function Map({ zoom }) {
    const mapElement = useRef(null);


  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    const location = new naver.maps.LatLng(37.5656, 126.9769);
    const mapOptions = {
      center: location,
      zoom: 17,
      // zoom: { zoom },
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, [zoom]);


  return <div ref={mapElement} style={{ height: "100vh", width: "100vw" }} />;
}

export default Map
