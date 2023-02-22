import React from 'react'
import './Avatar.css'

function Avatar({ src, title }) {
    return (
        <div className='avatar'>
            <div className='avatar__image'>
                <img src={src} alt='' />
            </div>
            <div className='avatar__title'>
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default Avatar