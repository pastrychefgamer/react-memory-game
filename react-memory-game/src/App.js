import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import underscore from 'underscore';
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

handleShuffCards = () => {
  const newShuffle = underscore.shuffle( this.state.cards);
  this.setState({ cards: newShuffle });
}

  // getSglChar () {
  //   let getCards = [];
  //   let cards = getChars();
  //   return (
  //     cards.then(result => {
  //       result.data.results.map(charSgl => {
  //           let charObj = {
  //               id: charSgl.id,
  //               name: charSgl.name,
  //               thumbnail: `${charSgl.thumbnail.path}/standard_medium.${charSgl.thumbnail.extension}`
  //           }
  //           getCards.push(charObj);
  //           getCards.push(charObj);
  //       })
  //     })
  //   )
  // }

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

  handleGenerateCards = async () => {
    const { data } = await marvelApiService.getChars()
    const formmatedList = marvelApiService.getCharFormattedArray(data.results);
    const shuffledCards = marvelApiService.shuffle(formmatedList);
    this.setState({ cards: shuffledCards });
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
              handleShuffCards={this.handleShuffCards}
              {...this.state.cards.map(({ cards }, idx) => (
                <h1 key={idx}>{cards}</h1> 
              ))}
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
