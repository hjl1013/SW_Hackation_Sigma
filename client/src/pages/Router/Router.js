import React from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Community from '../Community/Community'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'

function AppRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile/:profileContent' element={<Profile />} />
                <Route path='/community' element={<Community communityContent='select'/>} />
            </Routes>
        </HashRouter>
    )
}

export default AppRouter