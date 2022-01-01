import logo from './logo.svg';
import './App.css';
import './index.js';

function App() {

  return (
    <div className="App">      
      <div> 
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-extra" href="https://www.nba.com/" target="_blank"> My favorite site </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Tameem and Tanisha
        </a>
      </header>
      </div>
    </div>
  );
}

export default App;
