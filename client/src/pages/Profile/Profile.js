import React from 'react'
import './Profile.css'
import MenuBar from '../../common/components/MenuBar'
import ProfileBar from './components/ProfileBar/ProfileBar'
import MyProfile from './components/MyProfile/MyProfile'

function Profile({ profileContent }) {

    return (
        <div className='profile'>
            <div className='profile__left'>
                <MenuBar page='profile'/>
            </div>

            <div className='profile__body'>
                { profileContent === 'myProfile' && <MyProfile /> }
            </div>

            <div className='profile__right'>
                <ProfileBar profileContent={profileContent}/>
            </div>
        </div>
    )
}

export default Profile