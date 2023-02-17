import React from 'react'
import './MenuBar.css'

import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import TvIcon from '@mui/icons-material/Tv';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

function MenuBar({ page }) {
    return (
        <div className='menuBar'>
            <Link to='/'>
                <div className={`menuBar__item ${ page === 'home' && 'menuBar__item--active' }`}>
                    <HomeIcon />
                    <h4>Home</h4>
                </div>
            </Link>

            <Link to="/profile">
                <div className={`menuBar__item ${ page === 'profile' && 'menuBar__item--active' }`}>
                        <AccountCircleIcon />
                        <h4>Profile</h4>
                </div>
            </Link>

            <Link to='/'>
                <div className={`menuBar__item ${ page === 'community' && 'menuBar__item--active' }`}>
                        <PeopleIcon />
                        <h4>Community</h4>
                </div>
            </Link>

            <Link to='/'>
                <div className={`menuBar__item ${ page === 'entertainment' && 'menuBar__item--active' }`}>
                        <TvIcon />
                        <h4>Entertainment</h4>
                </div>
            </Link>

            <Link to='/'>
                <div className={`menuBar__item ${ page === 'controls' && 'menuBar__item--active' }`}>
                        <DirectionsCarIcon />
                        <h4>Controls</h4>
                </div>
            </Link>

            <Link to='/'>
                <div className={`menuBar__item ${ page === 'settings' && 'menuBar__item--active' }`}>
                        <SettingsIcon />
                        <h4>Settings</h4>
                </div>
            </Link>
        </div>
    )
}

export default MenuBar