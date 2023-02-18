import React, { useState } from 'react'
import './Home.css'
import { NavermapsProvider } from 'react-naver-maps'

import MenuBar from '../../common/components/MenuBar'
import Map from './components/Map'
import Favorites from './components/Favorites';
import Chatting from './components/Chatting';
import ZoomButton from './components/ZoomButton';

function Home() {
    const [zoom, setZoom] = useState(17);


    return (
        <div className='home'>
            <div className='home__menuBar'>
                <MenuBar page='home'/>
            </div>

            <div className='home__map'>
                <Map />
            </div>

            <div className='home__floating'>
                <Favorites />
                <Chatting />
                {/* Favorites */}
                {/* Chatting */}
            </div>

            <div className='home__zoom'>
                <ZoomButton zoom={zoom} onValueChange={setZoom}/>
                {/* ZoomButton */}
            </div>
        </div>
    )
}

export default Home