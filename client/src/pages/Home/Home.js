import React, { useState } from 'react'
import './Home.css'

import MenuBar from '../../common/components/MenuBar'
import Map from './components/Map'
import Favorites from './components/Favorites';
import Chatting from './components/Chatting';
import ZoomButton from './components/ZoomButton';

function Home() {

    return (
        <div className='home'>
            <div className='home__menuBar'>
                <MenuBar />
            </div>

            <div className='home__map'>
                <Map zoom={zoom}/>
            </div>

            <div className='home__floating'>
                <Favorites />
                <Chatting />
                {/* Favorites */}
                {/* Chatting */}
            </div>

            <div className='home__zoom'>
                <ZoomButton zoom/>
                {/* ZoomButton */}
            </div>
        </div>
    )
}

export default Home