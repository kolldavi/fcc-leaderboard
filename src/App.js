import React, { Component } from 'react';
import logo from './freecodecamp_logo.svg';
import User from './User'
import './App.css';

class App extends Component {

  state = {
    results:[]
  }

  getLeaderBoardRecent = () =>
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent',
      {'Accept': 'application/json'})
      .then(response => response.json())
      .then(data => data)

  getLeaderBoardAllTime = () =>
  fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime',
    {'Accept': 'application/json'})
    .then(response => response.json())
    .then(data => data)


componentDidMount(){
  this.getLeaderBoardRecent().then(results =>{
    this.setState({results})
  })
}

  render() {
    const results = this.state.results
    return (
      <div className="App">
        <div className="header">
          <a href='https://www.freecodecamp.org/'><img src={logo} alt='freecodecamp link' className='logo'/></a>
        </div>
        <div>
          <div className='header leaderboard-header'>
            <h2>Leaders</h2>
          <ol>
          {results.map(user =>(
            <li key={user.username}>
            <User user={user}/>
            </li>
          ))}
        </ol>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
