import React, { Component } from 'react';
import './App.css';
import Display from './components/display/display'
import Dashboard from './components/dashboard/dashboard'

class App extends Component {
  state = {
    strikes: 0,
    balls: 0,
    fouls: 0,
  };

  strike = () => {
    if(this.state.strikes === 3){
      this.setState({
        strikes: 0,
        balls: 0
      })
    }else{
      this.setState({
        strikes: this.state.strikes + 1
      })
    }
  }

  ball = () => {
    if(this.state.balls === 4){
      this.setState({
        strikes: 0,
        balls: 0
      })
    }else{
      this.setState({
        balls: this.state.balls + 1
      })
    }
  }

  hit = () => {
    this.setState({
      strikes: 0,
      balls: 0
    })
  }

  foul = () => {
    if(this.state.strikes === 2){
      console.log("Strikes are maxed out")
    }else{
      this.setState({
        strikes: this.state.strikes + 1
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Display display={this.state}/>
        <Dashboard strike={this.strike} hit={this.hit} ball={this.ball} foul={this.foul}/>
      </div>
    );
  }
}

export default App;
