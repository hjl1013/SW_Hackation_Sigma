import { Button } from '@mui/material';
import React, { useState } from 'react'
import { AuthAPIImpl } from '../../lib/infrastructure/AuthAPIImpl';
import { actionTypes } from '../../lib/react-context-api/reducer';
import { useStateValue } from '../../lib/react-context-api/StateProvider';
import './Auth.css'

function Auth() {
    const [ { user }, dispatch ] = useStateValue();
    const [ isSignIn, setIsSignIn ] = useState(true);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ name, setName ] = useState('');

    const onClickSubmit = async () => {
        if (!isSignIn) {
            await AuthAPIImpl.signUpOrUpdatePassword(email, password, name);
        }
        await AuthAPIImpl.login(email, password)
        .then(response => {
            dispatch({
                type: actionTypes.SET_USER,
                user: response.data
            })
            console.log(response.data)
        })
    }

    return (
        <div className='auth'>
            <div className='auth__title'>
                <h1>
                    { isSignIn ? 'Sign In' : 'Sign Up' }
                </h1>
            </div>

            <div className='auth__inputs'>
                { !isSignIn && <div className='auth__name auth__input'>
                    <input type='text' placeholder='name' value={name} onChange={e => setName(e.target.value)}/>
                </div> }
                <div className='auth__email auth__input'>
                    <input type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className='auth__password auth__input'>
                    <input type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
            </div>

            <div className='auth__switchState'>
                <p onClick={() => setIsSignIn(signIn => !signIn)}>
                    { isSignIn? 'Switch to Sign Up' : 'Switch to Sign In' }
                </p>
            </div>

            <div className='auth__submitButton'>
                <Button onClick={onClickSubmit}>
                    { isSignIn? 'Sign In' : 'Sign Up' }
                </Button>
            </div>
        </div>
    )
}

export default Auth