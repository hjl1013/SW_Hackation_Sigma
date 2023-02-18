import React from 'react'
import './CommunitySelect.css'

import SearchIcon from '@mui/icons-material/Search';
import CommunityIcon from './components/CommunityIcon/CommunityIcon';
import { Link } from 'react-router-dom';

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
            <Link to='/community/1/home'>
                <div className='communitySelect__communityIcon'>
                    <CommunityIcon />
                </div>
            </Link>

            <Link to='/community/1/home'>
                <div className='communitySelect__communityIcon'>
                    <CommunityIcon />
                </div>
            </Link>

            <Link to='/community/1/home'>
                <div className='communitySelect__communityIcon'>
                    <CommunityIcon />
                </div>
            </Link>
            
            <Link to='/community/1/home'>
                <div className='communitySelect__communityIcon'>
                    <CommunityIcon />
                </div>
            </Link>

            <Link to='/community/1/home'>
                <div className='communitySelect__communityIcon'>
                    <CommunityIcon />
                </div>
            </Link>

            <Link to='/community/1/home'>
                <div className='communitySelect__communityIcon'>
                    <CommunityIcon />
                </div>
            </Link>

            <Link to='/community/1/home'>
                <div className='communitySelect__communityIcon'>
                    <CommunityIcon />
                </div>
            </Link>
            
            <Link to='/community/1/home'>
                <div className='communitySelect__communityIcon'>
                    <CommunityIcon />
                </div>
            </Link>
        </div>
    </div>
  )
}

export default CommunitySelect