import React from 'react'
import './Post.css'

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';

function Post() {
    return (
        <div className='post'>
            <div className='post__header'>
                <div className='post__profile'>
                    <img src='https://scontent-gmp1-1.xx.fbcdn.net/v/t39.30808-1/317079557_2760216930776308_2789281660701330884_n.jpg?stp=dst-jpg_p480x480&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=O-3tvu7InQIAX94JcOf&_nc_ht=scontent-gmp1-1.xx&oh=00_AfDyy505M8-fbagdf5VRNOz0PsY9AgtWr6V-d6jHe-J_Gw&oe=63F42190' alt='' />
                    <h4>Hyunjun Lee</h4>
                </div>
            </div>

            <div className='post__body'>
                <div className='post__context'>
                    <p>
                        What a wonderful Morning!
                    </p>
                </div>

                <div className='post__communities'>
                    <div className='post__community'>
                        <h4>Fishing</h4>
                    </div>
                    <div className='post__community'>
                        <h4>Korea</h4>
                    </div>
                    <div className='post__community'>
                        <h4>Trip</h4>
                    </div>
                </div>
            </div>

            <div className='post__options'>
                <div className='post__option'>
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className='post__option'>
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className='post__option'>
                    <NearMeIcon />
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post