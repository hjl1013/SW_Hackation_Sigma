import React from 'react'
import './Profile.css'
import MenuBar from '../../common/components/MenuBar'
import ProfileBar from './components/ProfileBar'

function Profile() {
    return (
        <div className='profile'>
            <div className='profile__left'>
                <MenuBar />
            </div>

            <div className='profile_right'>
                <ProfileBar />
            </div>
        </div>
    )
}

export default Profile