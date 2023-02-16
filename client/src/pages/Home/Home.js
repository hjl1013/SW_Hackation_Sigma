import React from 'react'
import './Home.css'

import MenuBar from '../../common/components/MenuBar'
import Map from './components/Map'

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
                {/* Favorites */}
                {/* Chatting */}
            </div>

        </div>
    )
}

export default Home