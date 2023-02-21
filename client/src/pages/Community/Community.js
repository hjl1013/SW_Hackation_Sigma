import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MenuBar from '../../common/MenuBar/MenuBar'
import './Community.css'
import CommunityCreate from './components/CommunityCreate/CommunityCreate'
import CommunitySelect from './components/CommunitySelect/CommunitySelect'

function Community() {
    const { option } = useParams();

    return (
        <div className='community'>
            <div className='community__menuBar'>
                <MenuBar page='community'/>
            </div>

            <div className='community__body'>
                { option === 'select' && <CommunitySelect /> }
                { option === 'create' && <CommunityCreate /> }
            </div>
        </div>
    )
}

export default Community