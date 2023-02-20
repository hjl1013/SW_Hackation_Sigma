import React from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'
import MapTest from '../Home/components/MapTest/MapTest'
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
                <Route path='/settings' element={<MapTest />} />
            </Routes>
        </HashRouter>
    )
}

export default AppRouter