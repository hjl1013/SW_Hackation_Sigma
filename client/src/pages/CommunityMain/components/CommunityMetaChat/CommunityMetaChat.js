import React from 'react'
import './CommunityMetaChat.css'
import { Unity, useUnityContext } from 'react-unity-webgl';
import { Button } from '@mui/material';

function CommunityMetaChat() {
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
                    <img src='https://www.visakorea.com/content/dam/VCOM/regional/ap/southkorea/travelwithvisa/marquee-travel-with-visa-1920x720.jpg' alt='' />
                </div>
                <div className='communityMetaChat__communityProfileInfo'>
                    <h1>Trip</h1>
                    <p>Lets go on a trip!!!</p>
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