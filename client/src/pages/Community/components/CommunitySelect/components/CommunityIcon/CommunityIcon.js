import React from 'react'
import './CommunityIcon.css'

function CommunityIcon({ profileImg, intro, name }) {
    return (
        <div className='communityIcon'>
            <div className='communityIcon__image'>
                <img src={profileImg} alt='' />
            </div>
            <div className='communityIcon__info'>
                <h2>{name}</h2>
                <p>{intro}</p>
            </div>
        </div>
    )
}

export default CommunityIcon