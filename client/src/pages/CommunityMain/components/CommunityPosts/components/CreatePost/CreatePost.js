import React, { useState } from 'react'
import './CreatePost.css'

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';
import { CommunityAPIImpl } from '../../../../../../lib/infrastructure/CommunityAPIImpl';

function CreatePost({ communityId, communityName, themeId, themeName }) {
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
    }

    return (
        <div className='createPost'>
            <div className='createPost__header'>
                <div className='createPost__profile'>
                    <img src='https://scontent-gmp1-1.xx.fbcdn.net/v/t39.30808-1/317079557_2760216930776308_2789281660701330884_n.jpg?stp=dst-jpg_p480x480&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=O-3tvu7InQIAX94JcOf&_nc_ht=scontent-gmp1-1.xx&oh=00_AfDyy505M8-fbagdf5VRNOz0PsY9AgtWr6V-d6jHe-J_Gw&oe=63F42190' alt='' />
                    <h4>Hyunjun Lee</h4>
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