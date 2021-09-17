import './App.css';

import Navbar from './components/NavBar/Navbar';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <div className="sidenav">
        <Navbar />
      </div>
      <Main />
    </div>
  );
}

export default App;
