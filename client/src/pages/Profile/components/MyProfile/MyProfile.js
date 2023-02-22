import React, { useEffect, useState } from 'react'
import Avatar from './components/Avatar/Avatar'
import Post from '../../../../common/Post/Post'
import './MyProfile.css'
import { ProfileAPIImpl } from '../../../../lib/infrastructure/ProfileAPIImpl'

function MyProfile() {
    const [ user, setUser ] = useState({})
    const [ avatarHumanImage, setAvatarHumanImage ] = useState('')
    const [ avatarCarImage, setAvatarCarImage ] = useState('')
    const [ profileName, setProfileName ] = useState('')
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        ProfileAPIImpl.getUserInfo()
        .then(response => {
            const userInfo = response.data

            setAvatarHumanImage(userInfo.profile.avatar.characterImgUrl)
            setAvatarCarImage(userInfo.profile.avatar.carImgUrl)
            setProfileName(userInfo.profile.name)
            setPosts(userInfo.posts)
            setUser({
                ...userInfo,
                posts: []
            })
        })
    }, [])

    return (
        <div className='myProfile'>
            <div className='myProfile__header'>
                <div className='myProfile__profileImage'>
                    <img src={avatarHumanImage} alt='' />
                </div>
                <h2>{profileName}</h2>
            </div>

            <div className='myProfile__sectionTitle'>
                <h2>Avatars</h2>
            </div>

            <div className='myProfile__avatars'>
                <div className='myProfile__avatar myProfile__avatar--human'>
                    <Avatar src={avatarHumanImage} title='Human Avatar' />                    
                </div>
                <div className='myProfile__avatar myProfile__avatar--car'>
                    <Avatar src={avatarCarImage} title='Car Avatar' />
                </div>
            </div>

            <div className='myProfile__sectionTitle'>
                <h2>Posts</h2>
            </div>

            <div className='myProfile__posts'>
                {
                    posts.map(post => {
                        return (
                            <div key={post.id} className='myProfile__post'>
                                <Post
                                    communityName={post.commuTheme.community.commuName}
                                    themeName={post.commuTheme.commuThemeName}
                                    postInfo={post}
                                    userInfo={user}
                                />
                            </div>
                        )
                    })
                }

                {/* <div className='myProfile__post'>
                    <Post />
                </div>
                <div className='myProfile__post'>
                    <Post />
                </div>
                <div className='myProfile__post'>
                    <Post />
                </div>
                <div className='myProfile__post'>
                    <Post />
                </div> */}
            </div>
        </div>
    )
}

export default MyProfile