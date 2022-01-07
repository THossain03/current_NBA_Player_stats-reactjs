import React, {Component} from 'react';
import axios from "axios";
import './App.css';
import './index.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      playerName: null,
      playerStats: {}
    }
  }

  getPlayerId=()=>{
    axios.get("https://www.balldontlie.io/api/v1/players?search=lebron")
    .then(async res=>{
      console.log(res.data.data)
    }).catch(err=> {
      console.log(err)
    })
  }

  getPlayerStats = () => {
    axios.get("https://www.balldontlie.io/api/v1/season_average?season=2019%player_ids[]=237")
    .then(async res => {
      console.log(res.data.data)
    }).catch(err => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.getPlayerId()
  }

  render() {
    return ( 
      <div className="App">      
        
      </div>
    );
  }
}

export default App;
