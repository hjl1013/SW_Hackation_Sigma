import { NavermapsProvider } from 'react-naver-maps';
import './App.css';
import AppRouter from './pages/Router/Router';

function App() {
  return (
    // <NavermapsProvider
    //   ncpClientId='zbboljby1v'
    // >
      <div className="app">
        <AppRouter />
      </div>
    // </NavermapsProvider>
  );
}

export default App;
