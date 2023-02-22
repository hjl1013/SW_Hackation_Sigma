import { useEffect, useState } from 'react';
import './App.css';
import { AuthAPIImpl } from './lib/infrastructure/AuthAPIImpl';
import { actionTypes } from './lib/react-context-api/reducer';
import { useStateValue } from './lib/react-context-api/StateProvider';
import Auth from './pages/Auth/Auth';
import AppRouter from './pages/Router/Router';

function App() {
  const [ state, dispatch ] = useStateValue();

  const onReload = async () => {
    try {
      await AuthAPIImpl.getUserInfo()
      .then(response => {
        dispatch({
          type: actionTypes.SET_USER,
          user: response.data
        })
      })
    } catch (e) {
      await dispatch({
        type: actionTypes.SET_USER,
        isLoggedIn: null
      })
    }
  }

  useEffect(() => {
    onReload();
    console.log(state)
  }, [])

  return (
    <div className="app">
      { state.user? <AppRouter /> : <Auth /> }
    </div>
  );
}

export default App;
