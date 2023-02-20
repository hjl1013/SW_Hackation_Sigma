import React from 'react'
import { Link } from 'react-router-dom'
import './CommunityBar.css'

function CommunityBar({ communityId, communityContent }) {
    return (
        <div className='communityBar'>
            <Link to={`/community/${communityId}/home`}>
                <div className={`communityBar__item ${ communityContent === 'home' && 'communityBar__item--active' }`}>
                    <h4>Home</h4>
                </div>
            </Link>

            <Link to={`/community/${communityId}/posts`}>
                <div className={`communityBar__item ${ communityContent === 'posts' && 'communityBar__item--active' }`}>
                    <h4>Posts</h4>
                </div>
            </Link>

            <Link to={`/community/${communityId}/metaChat`}>
                <div className={`communityBar__item ${ communityContent === 'metaChat' && 'communityBar__item--active' }`}>
                    <h4>Meta Chatting</h4>
                </div>
            </Link>
            
            <Link to={`/community/${communityId}/members`}>
                <div className={`communityBar__item ${ communityContent === 'members' && 'communityBar__item--active' }`}>
                    <h4>Members</h4>
                </div>
            </Link>

            <Link to={`/community/${communityId}/map`}>
                <div className={`communityBar__item ${ communityContent === 'map' && 'communityBar__item--active' }`}>
                    <h4>Map</h4>
                </div>
            </Link>

            <Link to={`/community/${communityId}/groups`}>
                <div className={`communityBar__item ${ communityContent === 'groups' && 'communityBar__item--active' }`}>
                    <h4>Groups</h4>
                </div>
            </Link>
        </div>
    )
}

export default CommunityBar