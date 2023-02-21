<<<<<<< HEAD
=======
import { useEffect, useState } from 'react';
>>>>>>> 84ae6e8d3b49e8ba08e4524c1701462e3b24e80c
import './App.css';
import { AuthAPIImpl } from './lib/infrastructure/AuthAPIImpl';
import { actionTypes } from './lib/react-context-api/reducer';
import { useStateValue } from './lib/react-context-api/StateProvider';
import Auth from './pages/Auth/Auth';
import AppRouter from './pages/Router/Router';

function App() {
  const [ state, dispatch ] = useStateValue();

  useEffect(() => {
    try {
      AuthAPIImpl.isLoggedIn()
        .then(response => {
          dispatch({
            type: actionTypes.SET_LOGGED_IN_STATE,
            isLoggedIn: response.data
          })
        })
    } catch (e) {
      dispatch({
        type: actionTypes.SET_LOGGED_IN_STATE,
        isLoggedIn: false
      })
    }
  }, [])

  return (
    <div className="app">
      { state.isLoggedIn? <AppRouter /> : <Auth /> }
    </div>
  );
}

export default App;
