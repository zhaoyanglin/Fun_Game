import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import '../App/App.css';

import Home from '../Home/Home';
import Nav from '../Nav/Nav';
import GameRoom from '../GameRoom/GameRoom';
import StartGame from '../StartGame/StartGame'
import Players from '../Players/Players'

class App extends Component {

  render() {

    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Route exact path="/" component={Home}/>
            <Route exact path="/GameRoom" component={GameRoom}/>
            <Route exact path="/StartGame" component={StartGame}/>
            <Route exact path="/Players" component={Players}/>
          </div>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = reduxState => ({
  reduxState,
});
export default connect(mapStateToProps)(App);
