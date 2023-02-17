import React from 'react'
import './CommunitySelect.css'

import SearchIcon from '@mui/icons-material/Search';
import CommunityIcon from './components/CommunityIcon/CommunityIcon';

function CommunitySelect() {
  return (
    <div className='communitySelect'>
        <div className='communitySelect__search'>
            <div className='communitySelect__searchInput'>
                <form>
                    <SearchIcon />
                    <input type='text' placeholder='Search for Community'/>
                    <button type='submit'>Hidden Submit</button>
                </form>
            </div>
        </div>

        <div className='communitySelect__communityIcons'>
            <div className='communitySelect__communityIcon'>
                <CommunityIcon />
            </div>
            <div className='communitySelect__communityIcon'>
                <CommunityIcon />
            </div>
            <div className='communitySelect__communityIcon'>
                <CommunityIcon />
            </div>
            <div className='communitySelect__communityIcon'>
                <CommunityIcon />
            </div>
            <div className='communitySelect__communityIcon'>
                <CommunityIcon />
            </div>
            <div className='communitySelect__communityIcon'>
                <CommunityIcon />
            </div>
            <div className='communitySelect__communityIcon'>
                <CommunityIcon />
            </div>
            <div className='communitySelect__communityIcon'>
                <CommunityIcon />
            </div>
        </div>
    </div>
  )
}

export default CommunitySelect