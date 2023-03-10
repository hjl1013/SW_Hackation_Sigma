import React, { useState } from 'react'
import './Favorites.css'
import StarIcon from '@mui/icons-material/Star';

function Favorites() {
    const [showSideBar, setShowSideBar] = useState(false);

    const handleSidebarOpen = () => {
        setShowSideBar(showSideBar => !showSideBar);
        console.log(showSideBar);
    }

    return (
        <div className='favorites'>
            <div className='favorites__icon'>
                <StarIcon onClick={handleSidebarOpen}/>
            </div>

            {showSideBar && (
            <div className='favorites__popup'>
                {/* FavoritesPopup */}
                <h1>Favorites contents</h1>
            </div>

            )}
        
        </div>
    )
}

export default Favorites
