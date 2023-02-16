import React from 'react'
import './Home.css'
import StarIcon from '@mui/icons-material/Star';

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
                <div className='home__favorites'>
                    <StarIcon />
                </div>
                {/* Favorites */}
                {/* Chatting */}
            </div>

        </div>
    )
}

export default Home