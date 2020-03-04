import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import './App.css';
import userService from './utils/userService';
import GamePage from './pages/GamePage/GamePage';
import HighScoresPage from './pages/HighScoresPage/HighScoresPage';

class App extends Component {
  state = {
    user: userService.getUser(),
    elapsedTime: 0,
    isTiming: true
  }

  handleTimerUpdate = () => {
    this.setState((curState) => ({elapsedTime: ++curState.elapsedTime}));
  }

  handleNewGameClick = () => {
    this.setState(this.state());
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  render() {
    return (
      <div className="App-outer-container">
        <Navbar handleLogout={this.handleLogout}/ >
        <div className="App-inner-container">
          <Switch>
            <Route exact path="/" render={props =>
              <Home />
            }/>
            <Route exact path="/game" render={props =>
              <GamePage 
              elapsedTime={this.state.elapsedTime}
              isTiming={this.state.isTiming}
              handleNewGameClick={this.handleNewGameClick}
              handleTimerUpdate={this.handleTimerUpdate}
              />
            }/>
            <Route exact path="/login" render={props =>
            <Login 
            {...props}
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
            }/>
            <Route exact path="/signup" render={props =>
            <Signup 
            {...props} 
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
            }/>
            <Route exact path='/high-scores' render={() => (
              <HighScoresPage />
            )}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
