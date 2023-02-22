import React, { useEffect, useState } from 'react'
import './CommunityMetaChat.css'
import { Unity, useUnityContext } from 'react-unity-webgl';
import { Button } from '@mui/material';
import { CommunityAPIImpl } from '../../../../lib/infrastructure/CommunityAPIImpl';

function CommunityMetaChat({ communityId }) {
    const [ communityName, setCommunityName ] = useState('')
    const [ communityIntroduction, setCommunityIntroduction ] = useState('')
    const [ communityProfileUrl, setCommunityProfileUrl ] = useState('')

    useEffect(() => {
        CommunityAPIImpl.getPosts(communityId)
        .then(response => {
            const communityInfo =  response.data

            setCommunityName(communityInfo.commuName)
            setCommunityIntroduction(communityInfo.commuIntro)
            setCommunityProfileUrl(communityInfo.commuProfileImgUrl)
        })
    }, [])

    const { unityProvider, unload } = useUnityContext({
        loaderUrl: "Unity/web.loader.js",
        dataUrl: "Unity/web.data",
        frameworkUrl: "Unity/web.framework.js",
        codeUrl: "Unity/web.wasm",
    });

    const onClickUnload = async () => {
        await unload();
    }

    return (
        <div className='communityMetaChat'>
            <div className='communityMetaChat__communityProfile'>
                <div className='communityMetaChat__communityProfileImage'>
                    <img src={communityProfileUrl} alt='' />
                </div>
                <div className='communityMetaChat__communityProfileInfo'>
                    <h1>{communityName}</h1>
                    <p>{communityIntroduction}</p>
                </div>
            </div>

            <div className='communityMetaChat__communityContent'>
                <h1>Meta Chatting</h1>
            </div>

            <div className='communityMetaChat__unityEmbedding'>
                <Unity unityProvider={unityProvider} />
                <Button onClick={onClickUnload}>Unload</Button>
            </div>
        </div>
    )
}

export default CommunityMetaChat