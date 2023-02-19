import React from 'react'
import Avatar from './components/Avatar/Avatar'
import Post from './components/Post/Post'
import './MyProfile.css'

function MyProfile() {
    return (
        <div className='myProfile'>
            <div className='myProfile__header'>
                <div className='myProfile__profileImage'>
                    <img src='https://scontent-gmp1-1.xx.fbcdn.net/v/t39.30808-1/317079557_2760216930776308_2789281660701330884_n.jpg?stp=dst-jpg_p480x480&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=O-3tvu7InQIAX94JcOf&_nc_ht=scontent-gmp1-1.xx&oh=00_AfDyy505M8-fbagdf5VRNOz0PsY9AgtWr6V-d6jHe-J_Gw&oe=63F42190' alt='' />
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
                <div className='myProfile__post'>
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
                </div>
            </div>
        </div>
    )
}

export default MyProfile