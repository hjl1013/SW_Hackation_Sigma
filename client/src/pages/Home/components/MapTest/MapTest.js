import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { useNavermaps } from 'react-naver-maps';

function MapTest() {
  const navermaps = useNavermaps();

  const [mapList, setMapList] = useState([]);
  const [map, setMap] = useState(null);

  useEffect(() => {
    navermaps.Service.setClientId('ncpClientId');
    navermaps.Service.setSubModules('geocoder');

    const mapOptions = {
      center: new navermaps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    };
    const map = new navermaps.Map('map', mapOptions);
    setMap(map);
  }, []);

  function searchAddressToCoordinate(address) {
    navermaps.Service.geocode({
      query: address,
    }, function(status, response) {
      if (status === navermaps.Service.Status.ERROR) {
        return alert('Something Wrong!');
      }
      if (response.v2.meta.totalCount === 0) {
        return alert('올바른 주소를 입력해주세요.');
      }
      const item = response.v2.addresses[0];
      const point = new navermaps.Point(item.x, item.y);

      insertAddress(item.roadAddress, item.x, item.y);
    });
  }

  function handleKeyDown(e) {
    const keyCode = e.which;
    if (keyCode === 13) { // Enter Key
      searchAddressToCoordinate($('#address').val());
    }
  }

  function handleClick(e) {
    e.preventDefault();
    searchAddressToCoordinate($('#address').val());
  }

  function initGeocoder() {
    navermaps.Event.once(map, 'init_stylemap', searchAddressToCoordinate);
  }

  function insertAddress(address, latitude, longitude) {
    const newMapList = [...mapList, { address, latitude, longitude }];
    setMapList(newMapList);

    const map = new navermaps.Map('map', {
      center: new navermaps.LatLng(longitude, latitude),
      zoom: 14,
    });
    const marker = new navermaps.Marker({
      map: map,
      position: new navermaps.LatLng(longitude, latitude),
    });
    setMap(map);
  }

  return (
    <div>
        <h1>Hi guys</h1>
      <div className="search">
        <input id="address" type="text" placeholder="검색할 주소" onKeyDown={handleKeyDown} />
        <input id="submit" type="button" value="주소검색" onClick={handleClick} />
      </div>
      <div id="map" style={{ width: '1000px', height: '500px' }}></div>
      <div>
        <table>
          <thead>
            <tr>
              <th>주소</th>
              <th>위도</th>
              <th>경도</th>
            </tr>
          </thead>
          <tbody>
            {mapList.map(({ address, latitude, longitude }, i) => (
              <tr key={i}>
                <td>{address}</td>
                <td>{latitude}</td>
                <td>{longitude}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MapTest;
