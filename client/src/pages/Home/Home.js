import React, { useState } from 'react'
import MenuBar from '../../common/components/MenuBar';
import Favorites from './components/Favorites/Favorites';
import Map from './components/Map/Map';
import Chatting from './components/Chatting/Chatting'
import ZoomButton from './components/ZoomButton/ZoomButton'
import './Home.css'


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