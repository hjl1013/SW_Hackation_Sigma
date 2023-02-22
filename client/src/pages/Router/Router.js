import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Community from '../Community/Community'
import CommunityMain from '../CommunityMain/CommunityMain'
import MapTest from '../Home/components/MapTest/MapTest'
import Home from '../Home/Home'
import MetaChatFullScreen from '../MetaChatFullScreen/MetaChatFullScreen'
import Profile from '../Profile/Profile'

function AppRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile/:profileContent' element={<Profile />} />
                <Route path='/community/:option' element={<Community />} />
                <Route path='/community/:communityId/:communityContent' element={<CommunityMain />} />
                <Route path='/metaChatFullScreen/:communityId' element={<MetaChatFullScreen />} />
            </Routes>
        </HashRouter>
    )
}

export default AppRouter