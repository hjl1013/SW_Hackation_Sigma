import { Avatar } from '@mui/material'
import React from 'react'
import './Popup.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';

function Popup() {
  return (
    <div className='popup'>
      <div className='popup__top'>
        <Avatar />
        <div className='popup__topInfo'>
            <h3>username</h3>
            <p>Timestamp...</p>
        </div>
      </div>

      <div className='popup__bottom'>
        <p>message</p>
      </div>

      <div className='popup__image'>
        <img
          src='https://randompicturegenerator.com/img/people-generator/g48bbb088770f42532887c08f55575381936e2f3a1094b7a12bcc9dcbdef67a0308675bbdf6a6716de31bdfe711188b72_640.jpg'
          alt=""
          />
      </div>

      <div className='popup__options'>
        <div className='popup__option'>
            <ThumbUpIcon />
            <p>Like</p>
        </div>
        <div className='popup__option'>
            <ChatBubbleOutlineIcon />
            <p>Comment</p>
        </div>
        <div className='popup__option'>
            <NearMeIcon />
            <p>Share</p>
        </div>
        {/* <div className='popup__option'>
            <AccountCircleIcon />
            <ExpandMoreIcon />
        </div> */}
      </div>
    </div>
  )
}

export default Popup

