import { Button } from '@mui/material'
import React, { useState } from 'react'
import Post from '../../../../common/Post/Post'
import './CommunityPosts.css'
import CreatePost from './components/CreatePost/CreatePost'

import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function CommunityPosts() {
    const [ isCreating, setIsCreating ] = useState(false);

    const onClickCreateButton = () => {
        setIsCreating(state => !state);
    }

    return (
        <div className='communityPosts'>
            <div className='communityPosts__communityProfile'>
                <div className='communityPosts__communityProfileImage'>
                    <img src='https://www.visakorea.com/content/dam/VCOM/regional/ap/southkorea/travelwithvisa/marquee-travel-with-visa-1920x720.jpg' alt='' />
                </div>
                <div className='communityPosts__communityProfileInfo'>
                    <h1>Trip</h1>
                    <p>Lets go on a trip!!!</p>
                </div>
            </div>

            <div className='communityPosts__communityContent'>
                <h1>Posts</h1>
            </div>

            <div className='communityPosts__themes'>
                <div className='communityPosts__theme'>
                    <Button>Fishing</Button>
                </div>
                <div className='communityPosts__theme'>
                    <Button>Hiking</Button>
                </div>
                <div className='communityPosts__theme'>
                    <Button>Biking</Button>
                </div>
            </div>

            <div className='communityPosts__posts'>
                <div className='communityPosts__createPost'>
                    <div className='communityPosts__createPostButton'>
                        <Button onClick={onClickCreateButton}>
                            { isCreating ? <ExpandLessIcon /> : <AddCircleIcon /> }
                            <h4>Create Post</h4>
                        </Button>
                    </div>
                    { isCreating && <CreatePost /> }
                </div>
                {/* <div className='communityPosts__post'>
                    <Post />
                </div>
                <div className='communityPosts__post'>
                    <Post />
                </div>
                <div className='communityPosts__post'>
                    <Post />
                </div>
                <div className='communityPosts__post'>
                    <Post />
                </div> */}
            </div>
        </div>
    )
}

export default CommunityPosts