import './App.css';
import { useStateValue } from './lib/react-context-api/StateProvider';
import AppRouter from './pages/Router/Router';

function App() {
  const [ state, dispatch ] = useStateValue();

  return (
    <div className="app">
      { state.user? <AppRouter /> : <Auth /> }
    </div>
  );
}

export default App;
