import React from 'react'
import './ProfileBar.css'

function ProfileBar({ profileContent }) {
    return (
        <div className='profileBar'>
            <div className={`profileBar__item ${ profileContent === 'myProfile' && 'profileBar__item--active' }`}>
                <h4>My Profile</h4>
            </div>
            <div className={`profileBar__item ${ profileContent === 'myPosts' && 'profileBar__item--active' }`}>
                <h4>My Posts</h4>
            </div>
            <div className={`profileBar__item ${ profileContent === 'customizeAvatar' && 'profileBar__item--active' }`}>
                <h4>Customize Avatar</h4>
            </div>
            <div className={`profileBar__item ${ profileContent === 'NFTShop' && 'profileBar__item--active' }`}>
                <h4>NFT Shop</h4>
            </div>
            <div className={`profileBar__item ${ profileContent === 'friends' && 'profileBar__item--active' }`}>
                <h4>Friends</h4>
            </div>
        </div>
    )
}

export default ProfileBar