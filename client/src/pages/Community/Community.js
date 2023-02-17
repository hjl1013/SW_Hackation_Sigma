import React from 'react'
import MenuBar from '../../common/components/MenuBar'
import './Community.css'
import CommunitySelect from './components/CommunitySelect/CommunitySelect'

function Community({ communityContent }) {
    return (
        <div className='community'>
            <div className='community__menuBar'>
                <MenuBar page='community'/>
            </div>

            <div className='community__body'>
                { communityContent === 'select' && <CommunitySelect /> }
            </div>
        </div>
    )
}

export default Community