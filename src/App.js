import './App.scss';
import { Profile } from './components/Profile/Profile';
import userData from './components/Profile/user.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <Profile user={userData} />
        </>
      </header>
    </div>
  );
}

export default App;
