import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Post from '../../../../common/Post/Post'
import { CommunityAPIImpl } from '../../../../lib/infrastructure/CommunityAPIImpl';
import './CommunityHome.css'

function CommunityHome({ communityId }) {
    const [ communityName, setCommunityName ] = useState('');
    const [ communityProfileUrl, setCommunityProfileUrl ] = useState('');
    const [ communityIntroduction, setCommunityIntroduction ] = useState('');
    const [ recentPostInfos, setRecentPosts ] = useState([]);
    const [ hotPostInfos, setHotPostInfos ] = useState([]);

    useEffect(() => {
        try {
            CommunityAPIImpl.getPosts(communityId)
            .then(response => {
                const communityInfo = response.data;

                let rPostInfos = []
                let hPostInfos = []
                if (communityInfo.commuThemes) {
                    communityInfo.commuThemes.forEach(theme => {
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

                setCommunityName(communityInfo.commuName);
                setCommunityProfileUrl(communityInfo.commuProfileImgUrl);
                setCommunityIntroduction(communityInfo.commuIntro);
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
                    <img src={communityProfileUrl} alt=''/>
                </div>
                <div className='communityHome__communityProfileInfo'>
                    <h1>{communityName}</h1>
                    <p>{communityIntroduction}</p>
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
                            <div key={postInfo.post.id} className='communityHome__post'>
                                <Post
                                    communityName={communityName}
                                    themeName={postInfo.themeName}
                                    postInfo={postInfo.post}
                                    userInfo={postInfo.post.user}
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
                            <div key={postInfo.post.id} className='communityHome__post'>
                                <Post
                                    communityName={communityName}
                                    themeName={postInfo.themeName}
                                    postInfo={postInfo.post}
                                    userInfo={postInfo.post.user}
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