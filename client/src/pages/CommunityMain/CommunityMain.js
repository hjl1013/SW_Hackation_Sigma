import React from 'react'
import './CommunityMain.css'
import MenuBar from '../../common/MenuBar/MenuBar'
import CommunityBar from './components/CommunityBar/CommunityBar'
import { useParams } from 'react-router-dom'
import CommunityHome from './components/CommunityHome/CommunityHome'
import CommunityPosts from './components/CommunityPosts/CommunityPosts'
import CommunityMetaChat from './components/CommunityMetaChat/CommunityMetaChat'

function CommunityMain() {
    const { communityId, communityContent } = useParams()

    return (
        <div className='communityMain'>
            <div className='communityMain__menuBar'>
                <MenuBar page='community' />
            </div>

            <div className='communityMain__body'>
                { communityContent === 'home' && <CommunityHome /> }
                { communityContent === 'posts' && <CommunityPosts /> }
                { communityContent === 'metaChat' && <CommunityMetaChat /> }
            </div>

            <div className='communityMain__communityBar'>
                <CommunityBar communityId={communityId} communityContent={communityContent}/>
            </div>
        </div>
    )
}

export default CommunityMain