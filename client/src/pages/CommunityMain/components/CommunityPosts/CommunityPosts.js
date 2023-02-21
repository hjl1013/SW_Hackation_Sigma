import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Post from '../../../../common/Post/Post'
import './CommunityPosts.css'
import CreatePost from './components/CreatePost/CreatePost'

import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { CommunityAPIImpl } from '../../../../lib/infrastructure/CommunityAPIImpl'

function CommunityPosts({ communityId }) {
    const [ isCreating, setIsCreating ] = useState(false);

    const [ themeInfos, setThemeInfos ] = useState([]);
    const [ selectedTheme, setSelectedTheme ] = useState({});
    const [ postsInfoByTheme, setPostsInfoByTheme ] = useState([]);
    const [ communityName, setCommunityName ] = useState('');
    const [ communityProfileUrl, setCommunityProfileUrl ] = useState('');
    const [ communityIntroduction, setCommunityIntroduction ] = useState('');


    useEffect(() => {
        CommunityAPIImpl.getPosts(communityId)
        .then(response => {
            const communityInfo = response.data;
            
            let themeInfosTemp = []
            let postsInfoByThemeTemp = []
            communityInfo.commuThemes.forEach(theme => {
                themeInfosTemp = [...themeInfosTemp, {
                    themeName: theme.commuThemeName,
                    themeId: theme.id
                }]

                let postsTemp = []
                theme.posts.forEach(post => {
                    postsTemp = [...postsTemp, post];
                })

                postsInfoByThemeTemp = [...postsInfoByThemeTemp, {
                    themeName: theme.commuThemeName,
                    posts: postsTemp
                }]
            })

            setThemeInfos(themeInfosTemp)
            setPostsInfoByTheme(postsInfoByThemeTemp)
            setCommunityName(communityInfo.commuName);
            setCommunityProfileUrl(communityInfo.commuProfileImgUrl);
            setCommunityIntroduction(communityInfo.commuIntro);
        })
    })

    const onClickCreateButton = () => {
        setIsCreating(state => !state);
    }
    const onClickTheme = (event) => {
        if (selectedTheme.themeName === event.target.value) {
            setSelectedTheme({});
        }
        else {
            setSelectedTheme({
                themeName: event.target.value,
                themeId: event.target.id
            });
        }
    }

    return (
        <div className='communityPosts'>
            <div className='communityPosts__communityProfile'>
                <div className='communityPosts__communityProfileImage'>
                    <img src={communityProfileUrl} alt='' />
                </div>
                <div className='communityPosts__communityProfileInfo'>
                    <h1>{communityName}</h1>
                    <p>{communityIntroduction}</p>
                </div>
            </div>

            <div className='communityPosts__communityContent'>
                <h1>Posts</h1>
            </div>

            <div className='communityPosts__themes'>
                {
                    themeInfos.map((themeInfo) => {
                        const { themeName, themeId } = themeInfo;
                        return (
                            <div className={`communityPosts__theme ${selectedTheme.themeName === themeName && 'communityPosts__theme--activate'}`}>
                                <Button id={themeId} onClick={onClickTheme} value={themeName}>{themeName}</Button>
                            </div>
                        )
                    })
                }
            </div>

            <div className='communityPosts__posts'>
                <div className='communityPosts__createPost'>
                    <div className='communityPosts__createPostButton'>
                        <Button onClick={onClickCreateButton}>
                            { isCreating ? <ExpandLessIcon /> : <AddCircleIcon /> }
                            <h4>Create Post</h4>
                        </Button>
                    </div>
                    { isCreating && <CreatePost communityId={communityId} communityName={communityName} themeId={selectedTheme.themeId} themeName={selectedTheme.themeName} /> }
                </div>
                {
                    postsInfoByTheme.map(postsInfo => {
                        if (!selectedTheme.themeName || selectedTheme.themeName === postsInfo.themeName) {
                            return postsInfo.posts.map(post => {
                                return (
                                    <div className='communityPosts__post'>
                                        <Post 
                                            communityName={communityName}
                                            themeName={postsInfo.themeName}
                                            postInfo={post}
                                        />
                                    </div>
                                )
                            })
                        }
                    })
                }
            </div>
        </div>
    )
}

export default CommunityPosts