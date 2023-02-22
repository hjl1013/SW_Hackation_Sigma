import React, { useState } from 'react'
import './CreatePost.css'

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';
import { CommunityAPIImpl } from '../../../../../../lib/infrastructure/CommunityAPIImpl';
import { useStateValue } from '../../../../../../lib/react-context-api/StateProvider';

function CreatePost({ communityId, communityName, themeId, themeName }) {
    const [ { user }, dispatch ] = useStateValue();

    const [ postImage, setPostImage ] = useState('');
    const [ postTile, setPostTitle ] = useState('');
    const [ postText, setPostText ] = useState('');

    const onPostImageFileChange = (event) => {
        const {target : {files}} = event;
        const theFile = files[0];
        const reader = new FileReader();
        if (theFile && theFile.type.match('image.*')) {
            reader.readAsDataURL(theFile);
        }
        reader.onloadend = (finishedEvent) => {
            const {currentTarget: {result}} = finishedEvent;
            setPostImage(result);
        }
        console.log(postImage);
    }

    const onClickCreate = () => {
        CommunityAPIImpl.createPost(communityId, {
            commuThemeId: Number(themeId),
            ImgUrl: postImage,
            title: postTile,
            text: postText
        })
        setPostImage('')
        setPostTitle('')
        setPostText('')
    }

    return (
        <div className='createPost'>
            <div className='createPost__header'>
                <div className='createPost__profile'>
                    <img src={user.profile.avatar.characterImgUrl} alt='' />
                    <h4>{user.profile.name}</h4>
                </div>
            </div>

            <div className='createPost__body'>
                <div className='createPost__inputs'>
                    <div className='createPost__imageInput'>
                        <label htmlFor='createPost__postImage'>
                            { postImage ? <img src={postImage} alt='' /> : <AddCircleIcon /> }
                        </label>
                        <input id='createPost__postImage' type='file' accept='image/*' onChange={onPostImageFileChange}/>
                    </div>
                    <div className='createPost__textInputs'>
                        <div className='createPost__postTitle'>
                            <h3>Title</h3>
                            <div className='createPost__textInput'>
                                <input type='text' placeholder='Title' value={postTile} onChange={e => setPostTitle(e.target.value)}/>
                            </div>
                        </div>
                        <div className='createPost__postText'>
                            <h3>Text</h3>
                            <div className='createPost__textInput'>
                                <input type='text' placeholder='Tell us your thoughts' value={postText} onChange={e => setPostText(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='createPost__bottom'>
                <div className='createPost__categories'>
                    <div className='createPost__category createPost__category--community'>
                        <h4>{communityName}</h4>
                    </div>
                    <div className='createPost__category createPost__category--theme'>
                        <h4>{themeName}</h4>
                    </div>
                </div>

                <div className='createPost__createButton'>
                    <Button onClick={onClickCreate}>Create</Button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost