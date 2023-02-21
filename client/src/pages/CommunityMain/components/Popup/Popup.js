import { Avatar } from '@mui/material'
import React from 'react'
import './Popup.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';

function Popup({title, username, message, image, likes}) {
  return (
    <div className='popup'>
      <div className='popup__title'>
        {title}
      </div>
      <div className='popup__top'>
        <Avatar />
        <div className='popup__topInfo'>
            <h3>{username}</h3>
            {/* <p>Timestamp...</p> */}
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
        {/* <div className='popup__option'>
            <ChatBubbleOutlineIcon />
            <p>Comment</p>
        </div>
        <div className='popup__option'>
            <NearMeIcon />
            <p>Share</p>
        </div> */}
        {/* <div className='popup__option'>
            <AccountCircleIcon />
            <ExpandMoreIcon />
        </div> */}
      </div>
    </div>
  )
}

export default Popup

