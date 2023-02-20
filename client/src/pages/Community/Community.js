import React from 'react'
import { useParams } from 'react-router-dom'
import MenuBar from '../../common/MenuBar/MenuBar'
import './Community.css'
import CommunityCreate from './components/CommunityCreate/CommunityCreate'
import CommunitySelect from './components/CommunitySelect/CommunitySelect'
import { CommunityAPIImpl } from '../../lib/infrastructure/CommunityAPIImpl'

function Community() {
    const { option } = useParams();

    
    console.log(CommunityAPIImpl.getCommunities())

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