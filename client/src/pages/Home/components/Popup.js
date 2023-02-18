import { Avatar } from '@mui/material'
import React from 'react'
import './Popup.css'

function Popup() {
  return (
    <div className='popup'>
      <div className='popup__top'>
        <Avatar />
        <h1>Username</h1>
      </div>

      <div className='popup__bottom'>
        <p>Post</p>
      </div>
    </div>
  )
}

export default Popup

