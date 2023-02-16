import React from 'react'
import './Home.css'

import MenuBar from '../../common/components/MenuBar'
import Map from './components/Map'
import Favorites from './components/Favorites';

function Home() {
    return (
        <div className='home'>
            <div className='home__menuBar'>
                <MenuBar />
            </div>

            <div className='home__map'>
                <Map />
            </div>

            <div className='home__floating'>
                <Favorites />
                {/* Favorites */}
                {/* Chatting */}
            </div>

        </div>
    )
}

export default Home