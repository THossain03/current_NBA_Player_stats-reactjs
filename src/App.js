import React, {Component} from 'react';
import axios from "axios";
import './App.css';
import './index.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      playerName: null,
      standings: {},
      playerStats: {}
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getPlayerId()
    console.log(this.state.playerName)
  }

  handleChange = (event) => {
    const replace = event.target.value.split(" ").join("_");
    if (replace.length>=0) {
      this.setState({playerName: replace}) 
    }
  }

  getStandings=()=>{
    axios.get("http://data.nba.net/10s/prod/v1/current/standings_conference.json")
    .then(async res=> {
      console.log(res.league.standard.conference.east.data)
      this.setState({standings: res.data.league.standard.conference.east[0]})
    }).catch(err=> {
      console.log(err)
    })
  }

  getPlayerId=()=>{
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
    .then(async res=>{
      console.log(res.data.data)
      if(res.data.data[0] === undefined){
        alert("This player's data is unavailable.")
      } else if(res.data.data.length > 1) {
        alert("Please specify the name more!")
      } else {
        await this.getPlayerStats(res.data.data[0].id)
      }
    }).catch(err=> {
      console.log(err)
    })
  }

  getPlayerStats = (playerId) => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?&player_ids[]=${playerId}`)
    .then(async res => {
      console.log(res.data.data)
      this.setState({playerStats: res.data.data[0]})
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return ( 
      <div className="App">      
        <form onSubmit={this.handleSubmit}>
         <label>
          Name 
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Enter Player Name'/> 
        </label> 
        <input type="submit" value="Submit"/>
        </form>
        Player: {this.state.playerName}
        <br/>
        Games Played: {this.state.playerStats["games_played"]}
        <br/>
        Points: {this.state.playerStats["pts"]}
        <br/>
        Rebounds: {this.state.playerStats["reb"]}
        <br/>
        Assists: {this.state.playerStats["ast"]}
        <br/>
      </div>
    );
  }
}

export default App;
