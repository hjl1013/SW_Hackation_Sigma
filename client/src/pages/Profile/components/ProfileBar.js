import React from 'react'
import './ProfileBar.css'

function ProfileBar() {
    return (
        <div className='profileBar'>
            <div className='profileBar__item'>
                <h4>My Profile</h4>
            </div>
            <div className='profileBar__item'>
                <h4>My Posts</h4>
            </div>
            <div className='profileBar__item'>
                <h4>Customize Avatar</h4>
            </div>
            <div className='profileBar__item'>
                <h4>NFT Shop</h4>
            </div>
            <div className='profileBar__item'>
                <h4>Friends</h4>
            </div>
        </div>
    )
}

export default ProfileBar