import React from 'react'
import './CommunityIcon.css'

function CommunityIcon() {
    return (
        <div className='communityIcon'>
            <div className='communityIcon__image'>
                <img src='https://www.visakorea.com/content/dam/VCOM/regional/ap/southkorea/travelwithvisa/marquee-travel-with-visa-1920x720.jpg' alt='' />
            </div>
            <div className='communityIcon__info'>
                <h2>Trip</h2>
                <p>Lets go on a trip!!</p>
            </div>
        </div>
    )
}

export default CommunityIcon