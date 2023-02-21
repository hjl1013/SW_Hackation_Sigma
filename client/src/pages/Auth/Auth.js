import React, { useState } from 'react'
import './Auth.css'
import SignIn from './components/SignIn/SignIn';

function Auth() {
    const [ isSignIn, setIsSignIn ] = useState(true);

    return (
        <div className='auth'>
            { isSignIn? <SignIn /> : <SignU /> }
        </div>
    )
}

export default Auth