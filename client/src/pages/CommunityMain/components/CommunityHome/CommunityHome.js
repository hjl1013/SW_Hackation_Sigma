import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Post from '../../../../common/Post/Post'
import { CommunityAPIImpl } from '../../../../lib/infrastructure/CommunityAPIImpl';
import './CommunityHome.css'

function CommunityHome({ communityId }) {
    const [ communityInfo, setCommunityInfo ] = useState({});
    const [ recentPosts, setRecentPosts ] = useState([]);
    const [ hotPosts, setHotPosts ] = useState([]);

    useEffect(() => {
        try {
            CommunityAPIImpl.getPosts(communityId)
                .then(response => {
                    setCommunityInfo(response.data)
                    
                    communityInfo.commuThemes.forEach(theme => {
                        theme.posts.forEach(post => {
                            if (recentPosts.length < 3) {
                                setRecentPosts(p => [...p, post])
                            }
                            else if (hotPosts.length < 3) {
                                setHotPosts(p => [...p, post])
                            }
                        })
                    });
                })
        } catch (e) {
            console.log(e);
        }
    }, [])

    return (
        <div className='communityHome'>
            <div className='communityHome__communityProfile'>
                <div className='communityHome__communityProfileImage'>
                    <img src={communityInfo.commuProfileImgUrl} alt=''/>
                </div>
                <div className='communityHome__communityProfileInfo'>
                    <h1>{communityInfo.commuName}</h1>
                    <p>{communityInfo.commuIntro}</p>
                    <Button>Join</Button>
                </div>
            </div>

            <div className='communityHome__body'>
                <div className='communityHome__sectionTitle'>
                    <h2>Recent Posts</h2>
                </div>

                { recentPosts.map(post => {
                    return (
                        <div className='communityHome__post'>
                            {/* <Post post={post} /> */}
                        </div>
                    )
                }) }
                <div className='communityHome__post'>
                    <Post />
                </div>
                <div className='communityHome__post'>
                    <Post />
                </div>
                <div className='communityHome__post'>
                    <Post />
                </div>

                <div className='communityHome__sectionTitle'>
                    <h2>Hot Posts</h2>
                </div>
                <div className='communityHome__post'>
                    <Post />
                </div>
                <div className='communityHome__post'>
                    <Post />
                </div>
                <div className='communityHome__post'>
                    <Post />
                </div>
            </div>
        </div>
    )
}

export default CommunityHome