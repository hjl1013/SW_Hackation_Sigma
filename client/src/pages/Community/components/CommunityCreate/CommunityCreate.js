import React, { useState } from 'react'
import './CommunityCreate.css'

import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CommunityAPIImpl } from '../../../../lib/infrastructure/CommunityAPIImpl';

function CommunityCreate() {
    const [ communityImage, setCommunityImage ] = useState('');
    const [ communityName, setCommunityName ] = useState('');
    const [ communityIntroduction, setCommunityIntroduction ] = useState('');
    const [ communityHashTag, setCommunityHashTag ] = useState('');
    const [ communityThemes, setCommunityThemes ] = useState([]);
    const [ themeName, setThemeName ] = useState('');
    const [ themeIcon, setThemeIcon ] = useState('');

    const navigate = useNavigate();

    const onCommunityImageFileChange = (event) => {
        const {target : {files}} = event;
        const theFile = files[0];
        const reader = new FileReader();
        if (theFile && theFile.type.match('image.*')) {
            reader.readAsDataURL(theFile);
        }
        reader.onloadend = (finishedEvent) => {
            const {currentTarget: {result}} = finishedEvent;
            setCommunityImage(result);
        }
        console.log(communityImage);
    }
    const onThemeIconFileChange = (event) => {
        const {target : {files}} = event;
        const theFile = files[0];
        const reader = new FileReader();
        if (theFile && theFile.type.match('image.*')) {
            reader.readAsDataURL(theFile);
        }
        reader.onloadend = (finishedEvent) => {
            const {currentTarget: {result}} = finishedEvent;
            setThemeIcon(result);
        }
        console.log(communityImage);
    }
    const onSubmitTheme = (event) => {
        event.preventDefault();
        setCommunityThemes((themes) => [
            ...themes,
            {
                themeIcon,
                themeName
            }
        ]);
        setThemeIcon('');
        setThemeName('');
    }
    const onClickSubmit = async () => {
        try {
            let communityId;
            await CommunityAPIImpl.createCommunity({
                commuProfileImgUrl: communityImage,
                commuName: communityName,
                commuIntro: communityIntroduction,
                commuHT: [ communityHashTag ],
                commuMemberNumber: "10M"
            }).then(response => {
                communityId = response.data.id
                console.log(communityId);
            })

            await communityThemes.forEach(theme => {
                console.log(communityId);
                CommunityAPIImpl.createTheme(communityId, {
                    commuThemeName: theme.themeName,
                    commuThemeIconUrl: theme.themeIcon
                })
            })

            navigate('/community/select')
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div className='communityCreate'>
            <div className='communityCreate__title'>
                <h1>Create Community</h1>
            </div>

            <div className='communityCreate__communityInfo'>
                <div className='communityCreate__communityImage'>
                    <label htmlFor='communityCreate__imageInput'>
                        { communityImage ? <img src={communityImage} alt='' /> : <AddIcon /> }
                    </label>
                    <input id='communityCreate__imageInput' type='file' accept='image/*' onChange={onCommunityImageFileChange}/>
                </div>
                <div className='communityCreate__textInputs'>
                    <div className='communityCreate__textInput'>
                        <h2>Community Name</h2>
                        <div className='communityCreate__textInputBox'>
                            <input type='text' placeholder='Community Name' value={communityName} onChange={(e) => setCommunityName(e.target.value)}/>
                        </div>
                    </div>
                    <div className='communityCreate__textInput'>
                        <h2>Community Introduction</h2>
                        <div className='communityCreate__textInputBox'>
                            <input type='text' placeholder='Community Introduction' value={communityIntroduction} onChange={(e) => setCommunityIntroduction(e.target.value)} />
                        </div>
                    </div>
                    <div className='communityCreate__textInput'>
                        <h2>Hash Tag</h2>
                        <div className='communityCreate__textInputBox'>
                            <input type='text' placeholder='Hash Tag' value={communityHashTag} onChange={(e) => setCommunityHashTag(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='communityCreate__sectionTitle'>
                <h2>Add Themes</h2>
            </div>

            <div className='communityCreate__themeInfo'>
                <div className='communityCreate__themes'>
                    {communityThemes.map(theme => {
                        return (
                            <div className='communityCreate__theme'>
                                <img src={theme.themeIcon} alt='' />
                                <h4>{theme.themeName}</h4>
                            </div>
                        );
                    })}
                    <div className='communityCreate__createTheme'>
                        <form onSubmit={onSubmitTheme}>
                            <div className='communityCreate__createThemeIcon'>
                                <label htmlFor='communityCreate__themeIcon'>
                                    { themeIcon ? <img src={themeIcon} alt='' /> : <AddIcon /> }
                                </label>
                                <input id='communityCreate__themeIcon' type='file' accept='image/*' onChange={onThemeIconFileChange} />
                            </div>
                            <input type='text' placeholder='Theme Name' value={themeName} onChange={(e) => setThemeName(e.target.value)} />
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='communityCreate__createButton'>
                <Button onClick={onClickSubmit}>Create Community</Button>
            </div>
        </div>
    )
}

export default CommunityCreate