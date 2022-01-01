import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';
import './index.js';

function App() {
  const [data,setData] = useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then(function(response) {
      console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      setData(myJson)
    });
  }
  
  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">
      <div className='standings_out'>
        {
          data && data.length>0 && data.map((item)=><p>{item.about}</p>)
        }
      </div>
      
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
