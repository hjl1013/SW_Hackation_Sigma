import React from 'react'
import './Post.css'

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';

function Post({ communityName, themeName, postInfo, userInfo }) {
    return (
        <div className='post'>
            <div className='post__header'>
                <div className='post__profile'>
                    <img src={userInfo.profile.avatar.characterImgUrl} alt='' />
                    <h4>{userInfo.profile.name}</h4>
                </div>
            </div>

            <div className='post__body'>
                <div className='post__context'>
                    <div className='post__contextText'>
                        <p>
                            {postInfo.text}
                        </p>
                    </div>
                    { 
                        postInfo.ImgUrl && 
                        <div className='post__contextImage'>
                            <img src={postInfo.ImgUrl} alt='' />
                        </div>
                    }
                    
                </div>

                <div className='post__categories'>
                    <div className='post__category post__category--community'>
                        <h4>{communityName}</h4>
                    </div>
                    <div className='post__category post__category--theme'>
                        <h4>{themeName}</h4>
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