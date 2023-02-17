import React from 'react'
import { Link } from 'react-router-dom'
import './ProfileBar.css'

function ProfileBar({ profileContent }) {
    return (
        <div className='profileBar'>
            <Link to='/profile/myProfile'>
                <div className={`profileBar__item ${ profileContent === 'myProfile' && 'profileBar__item--active' }`}>
                    <h4>My Profile</h4>
                </div>
            </Link>

            <Link to='/profile/myProfile'>
                <div className={`profileBar__item ${ profileContent === 'customizeAvatar' && 'profileBar__item--active' }`}>
                    <h4>Customize Avatar</h4>
                </div>
            </Link>

            <Link to='/profile/myProfile'>
                <div className={`profileBar__item ${ profileContent === 'NFTShop' && 'profileBar__item--active' }`}>
                    <h4>NFT Shop</h4>
                </div>
            </Link>
            
            <Link to='/profile/myProfile'>
                <div className={`profileBar__item ${ profileContent === 'friends' && 'profileBar__item--active' }`}>
                    <h4>Friends</h4>
                </div>
            </Link>
        </div>
    )
}

export default ProfileBar