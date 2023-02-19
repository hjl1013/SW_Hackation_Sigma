import React from 'react'
import './Avatar.css'

function Avatar({ src, title }) {
    return (
        <div className='avatar'>
            <img src={src} alt='' />
            <h4>{title}</h4>
        </div>
    )
}

export default Avatar