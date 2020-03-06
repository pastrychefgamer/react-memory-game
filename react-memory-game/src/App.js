import React, { Component, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import './App.css';
import userService from './utils/userService';
import GamePage from './pages/GamePage/GamePage';
import HighScoresPage from './pages/HighScoresPage/HighScoresPage';
import scoresService from './utils/scoresService';
import marvelApiService from './services/marvel-api';

class App extends Component {
  state = {
    user: userService.getUser(),
    elapsedTime: 0,
    isTiming: true,
    scores: [],
    cards: []
  }

  handleTimerUpdate = () => {
    this.setState((curState) => ({elapsedTime: ++curState.elapsedTime}));
  }

  handleNewGameClick = () => {
    this.setState(this.state());
  }

  // handleUpdateScores = () => {
  //   this.setState({ scores });
  // }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
    this.handleGenerateCards();
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null, cards: [] });
  }

  /*--- Game Logic---*/
  handleGenerateCards = async () => {
    const { data } = await marvelApiService.getChars()
    const formatedList = marvelApiService.getCharFormattedArray(data.results);
    const shuffledCards = marvelApiService.shuffle(formatedList);
    this.setState({ cards: shuffledCards });
  }

  handleSetCardIsFlipped = (cardID, isFlipped) => {
    const setCards = useState(handleGenerateCards());
    setCards(prev => prev.map(c => {
      if (c.id !== cardID)
      return c;
      return {...c, isFlipped};
    }));
  }

  handleSetCardCanFlip = (cardID, canFlip) => {
    const setCards = useState(handleGenerateCards());
    setCards(prev => prev.map(c => {
      if (c.id !== cardID)
      return c;
      return {...c, canFlip};
    }));
  }

  async componentDidMount() {
      //const scores = await scoresService.index();
      //this.setState({ scores });
      if(userService.getUser()) {
        this.handleGenerateCards();
      }
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
              handleGenerateCards={this.handleGenerateCards}
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
              userService.getUser() ?
              <HighScoresPage
              scores={this.state.scores}
              handleUpdateScores={this.handleUpdateScores}
              />
                :
              <Redirect to='/login' />
            )}/>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
