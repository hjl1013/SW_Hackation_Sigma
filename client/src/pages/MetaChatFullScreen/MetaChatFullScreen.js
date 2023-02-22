import { Button } from '@mui/material';
import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl';
import { useNavigate, useParams } from 'react-router-dom';
import './MetaChatFullScreen.css'

import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

function MetaChatFullScreen() {
    const { communityId } = useParams();
    const navigate = useNavigate();

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
        <div className='metaChatFullScreen'>
            <div className='metaChatFullScreen__unity'>
                <Unity unityProvider={unityProvider} />
            </div>

            <div className='metaChatFullScreen__buttons'>
                <div className='metaChatFullScreen__button metaChatFullScreen__unload'>
                    <Button onClick={onClickUnload}>Unload</Button>
                </div>
                <div className='metaChatFullScreen__button metaChatFullScreen__exitFullScreen'>
                    <Button onClick={() => navigate(`/community/${communityId}/metaChat`)}>
                        <FullscreenExitIcon />
                        <p>Exit Full Screen</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MetaChatFullScreen