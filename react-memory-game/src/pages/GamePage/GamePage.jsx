import React from 'react';
import GameBoard from '../.././components/Gameboard/GameBoard';
import GameTimer from '../../components/GameTimer/GameTimer';
import NewGameButton from '../../components/NewGameButton/NewGameButton';
import MatchSum from '../../components/MatchSum/MatchSum';


import styles from './GamePage.module.css';

const GamePage = (props) => {
    return (
        <main className={styles.main}>
            <GameBoard />
            <div>
                <MatchSum />
                <GameTimer
                    elapsedTime={props.elapsedTime}
                    handleTimerUpdate={props.handleTimerUpdate}
                    isTiming={props.isTiming}
                />
                <NewGameButton />
            </div>
        </main>
    )
}

export default GamePage;