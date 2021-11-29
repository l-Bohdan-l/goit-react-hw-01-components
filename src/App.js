import './App.scss';
import { Profile } from './components/Profile/Profile';
import userData from './components/Profile/user.json';
import { Statistics } from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <Profile user={userData} />
        </>
        <Statistics title="Upload stats" stats={data} />
      </header>
    </div>
  );
}

export default App;
