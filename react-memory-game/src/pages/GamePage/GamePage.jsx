import React from 'react';
import GameBoard from '../.././components/Gameboard/GameBoard';
import GameTimer from '../../components/GameTimer/GameTimer';
import NewGameButton from '../../components/NewGameButton/NewGameButton';
import MatchSum from '../../components/MatchSum/MatchSum';

import styles from './GamePage.module.css';

const GamePage = (props) => {
    return (
        <main className={styles.main}>
            <GameBoard 
                cards={props.cards}
            />
            <div>
                <MatchSum />
                <GameTimer
                    elapsedTime={props.elapsedTime}
                    isTiming={props.isTiming}
                    handleTimerUpdate={props.handleTimerUpdate}
                />
                <NewGameButton handleNewGameClick={props.handleNewGameClick} />
            </div>
        </main>
    )
}

export default GamePage;