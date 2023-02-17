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
                <Route path='/profile' element={<Profile profileContent='myProfile'/>}>
                    <Route path='/profile/myProfile' element={<Profile profileContent='myProfile'/>} />
                </Route>
                <Route path='/community' element={<Community />} />
            </Routes>
        </HashRouter>
    )
}

export default AppRouter