import { Avatar } from '@mui/material'
import React from 'react'
import './Popup.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';

function Popup({title, username, message, image, likes, profilePic}) {
  return (
    <div className='popup'>
      <div className='popup__title'>
        <h3>{title}</h3>
      </div>
      <div className='popup__top'>
        <img src={profilePic} />
        <div className='popup__topInfo'>
            <h4>{username}</h4>
        </div>
      </div>

      <div className='popup__bottom'>
        <p>{message}</p>
      </div>

      <div className='popup__image'>
        <img
          src={image}
          alt=""
          />
      </div>

      <div className='popup__options'>
        <div className='popup__option'>
            <ThumbUpIcon />
            <p>{likes}</p>
            <p>Like</p>
        </div>
      </div>
    </div>
  )
}

export default Popup
