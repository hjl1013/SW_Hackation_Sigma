import React from 'react'
import './CommunityMain.css'
import MenuBar from '../../common/MenuBar/MenuBar'
import CommunityBar from './components/CommunityBar/CommunityBar'
import { useParams } from 'react-router-dom'
import CommunityHome from './components/CommunityHome/CommunityHome'

function CommunityMain() {
    const { communityId, communityContent } = useParams()

    return (
        <div className='communityMain'>
            <div className='communityMain__menuBar'>
                <MenuBar page='community' />
            </div>

            <div className='communityMain__body'>
                { communityContent === 'home' && <CommunityHome /> }
            </div>

            <div className='communityMain__communityBar'>
                <CommunityBar communityId={communityId} communityContent={communityContent}/>
            </div>
        </div>
    )
}

export default CommunityMain