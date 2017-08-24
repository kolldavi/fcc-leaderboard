import React, { Component } from 'react';
import logo from './freecodecamp_logo.svg';
import User from './User';
import './App.css';
import SortBy from 'sort-by';
import * as UsersAPI from './UsersAPI';
class App extends Component {
  state = {
    results: [],
    sortByTerm: 'recent'
  };

  componentDidMount() {
    UsersAPI.getLeaderBoardRecent().then(results => {
      this.setState({ results });
    });
  }

  setAllTime = () => {
    UsersAPI.getLeaderBoardAllTime().then(results => {
      this.setState({ results: results });
      this.setState({ sortByTerm: 'alltime' });
    });
  };

  setRecentTime = () => {
    UsersAPI.getLeaderBoardRecent().then(results => {
      this.setState({ results: results });
      this.setState({ sortByTerm: 'recent' });
    });
  };

  render() {
    const results = this.state.results;
    results.sort(SortBy(this.state.sortByTerm));
    results.reverse();
    let cnt = 0;
    return (
      <div className="App">
        <div className="header">
          <a href="https://www.freecodecamp.org/">
            <img src={logo} alt="freecodecamp link" className="logo" />
          </a>
        </div>
        <div>
          <div className="header leaderboard-header">
            <h2>Leaders</h2>
            <table className="mainTable">
              <tbody>
                <tr>
                  <th>#</th>
                  <th>Camper Name</th>
                  <th>
                    <button onClick={this.setRecentTime}>
                      Points In Past 30 Days
                    </button>
                  </th>
                  <th>
                    <button onClick={this.setAllTime}>All Time Points</button>
                  </th>
                </tr>
              </tbody>
              {results.map(user =>
                <tbody key={user.username}>
                  <User user={user} userCnt={++cnt} />
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
