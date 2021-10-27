import MainPage from './Components/MainPage';
import Navbar from './Components/Navbar';

import './Styles/Main.scss';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <MainPage />
      </header>
    </div>
  );
}

export default App;
