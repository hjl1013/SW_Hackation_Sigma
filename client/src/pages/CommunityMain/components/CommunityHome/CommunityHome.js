import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Post from '../../../../common/Post/Post'
import { CommunityAPIImpl } from '../../../../lib/infrastructure/CommunityAPIImpl';
import './CommunityHome.css'

function CommunityHome({ communityId }) {
    const [ communityInfo, setCommunityInfo ] = useState({});
    const [ recentPostInfos, setRecentPosts ] = useState([]);
    const [ hotPostInfos, setHotPostInfos ] = useState([]);

    useEffect(() => {
        try {
            CommunityAPIImpl.getPosts(communityId)
                .then(response => {
                    const communityInfoTemp = response.data;

                    let rPostInfos = []
                    let hPostInfos = []
                    if (communityInfoTemp.commuThemes) {
                        communityInfoTemp.commuThemes.forEach(theme => {
                            if (theme.posts) {
                                theme.posts.forEach(post => {
                                    if (rPostInfos.length < 3) {
                                        rPostInfos = [...rPostInfos, {
                                            post,
                                            themeName: theme.commuThemeName
                                        }]
                                    } else if (hPostInfos.length < 3) {
                                        hPostInfos = [...hPostInfos, {
                                            post,
                                            themeName: theme.commuThemeName
                                        }]
                                    }
                                })
                            }
                        });
                    }

                    setCommunityInfo(communityInfoTemp);
                    setRecentPosts(rPostInfos);
                    setHotPostInfos(hPostInfos);
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
                    <h2>Recent Post</h2>
                </div>

                {   
                    recentPostInfos.map(postInfo => {
                        return (
                            <div className='communityHome__post'>
                                <Post
                                    communityName={communityInfo.commuName}
                                    themeName={postInfo.themeName}
                                    postInfo={postInfo.post}
                                />
                            </div>
                        );
                    })
                }

                <div className='communityHome__sectionTitle'>
                    <h2>Hot Posts</h2>
                </div>

                {   
                    hotPostInfos.map(postInfo => {
                        return (
                            <div className='communityHome__post'>
                                <Post
                                    communityName={communityInfo.commuName}
                                    themeName={postInfo.themeName}
                                    postInfo={postInfo.post}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default CommunityHome