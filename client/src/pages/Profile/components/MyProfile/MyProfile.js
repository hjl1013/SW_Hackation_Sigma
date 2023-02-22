import React from 'react'
import Avatar from './components/Avatar/Avatar'
import Post from '../../../../common/Post/Post'
import './MyProfile.css'
import { useStateValue } from '../../../../lib/react-context-api/StateProvider'

function MyProfile() {
    const [ { user }, dispatch ] = useStateValue()

    return (
        <div className='myProfile'>
            <div className='myProfile__header'>
                <div className='myProfile__profileImage'>
                    <img src={user.profile.avatar.characterImgUrl} alt='' />
                </div>
                <h2>Hyunjun Lee</h2>
            </div>

            <div className='myProfile__sectionTitle'>
                <h2>Avatars</h2>
            </div>

            <div className='myProfile__avatars'>
                <div className='myProfile__avatar myProfile__avatar--human'>
                    <Avatar src='https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/440px-SpongeBob_SquarePants_character.svg.png' title='Human Avatar' />                    
                </div>
                <div className='myProfile__avatar myProfile__avatar--car'>
                    <Avatar src='https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/440px-SpongeBob_SquarePants_character.svg.png' title='Car Avatar' />
                </div>
            </div>

            <div className='myProfile__sectionTitle'>
                <h2>Posts</h2>
            </div>

            <div className='myProfile__posts'>
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