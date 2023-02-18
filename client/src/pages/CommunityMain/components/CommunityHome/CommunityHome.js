import React from 'react'
import Post from '../../../../common/Post/Post'
import './CommunityHome.css'

function CommunityHome() {
    return (
        <div className='communityHome'>
            <div className='communityHome__communityProfile'>
                <div className='communityHome__communityProfileImage'>
                    <img src='https://www.visakorea.com/content/dam/VCOM/regional/ap/southkorea/travelwithvisa/marquee-travel-with-visa-1920x720.jpg' alt=''/>
                </div>
                <div className='communityHome__communityProfileInfo'>
                    <h1>Trip</h1>
                    <p>Lets go on a trip!!</p>
                </div>
            </div>

            <div className='communityHome__body'>
                <div className='communityHome__sectionTitle'>
                    <h2>Recent Posts</h2>
                </div>
                <div className='communityHome__post'>
                    <Post />
                </div>
                <div className='communityHome__post'>
                    <Post />
                </div>
                <div className='communityHome__post'>
                    <Post />
                </div>
                
                <div className='communityHome__sectionTitle'>
                    <h2>Hot Posts</h2>
                </div>
                <div className='communityHome__post'>
                    <Post />
                </div>
                <div className='communityHome__post'>
                    <Post />
                </div>
                <div className='communityHome__post'>
                    <Post />
                </div>
            </div>
        </div>
    )
}

export default CommunityHome