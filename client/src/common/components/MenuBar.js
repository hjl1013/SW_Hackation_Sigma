import React from 'react'
import './MenuBar.css'

import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import TvIcon from '@mui/icons-material/Tv';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

function MenuBar() {
    return (
        <div className='menuBar'>
            <div className='menuBar__item'>
                <Link to='/'>
                    <HomeIcon />
                    <h4>Home</h4>
                </Link>
            </div>
            <div className='menuBar__item'>
                <Link to="/profile">
                    <AccountCircleIcon />
                    <h4>Profile</h4>
                </Link>
            </div>
            <div className='menuBar__item'>
                <Link to='/'>
                    <PeopleIcon />
                    <h4>Community</h4>
                </Link>
            </div>
            <div className='menuBar__item'>
                <Link to='/'>
                    <TvIcon />
                    <h4>Entertainment</h4>
                </Link>
            </div>
            <div className='menuBar__item'>
                <Link to='/'>
                    <DirectionsCarIcon />
                    <h4>Controls</h4>
                </Link>
            </div>
            <div className='menuBar__item'>
                <Link to='/'>
                    <SettingsIcon />
                    <h4>Settings</h4>
                </Link>
            </div>
        </div>
    )
}

export default MenuBar