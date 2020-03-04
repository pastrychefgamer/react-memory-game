import React from 'react';
import GameBoard from '../.././components/Gameboard/GameBoard';
import GameTimer from '../../components/GameTimer/GameTimer';
import NewGameButton from '../../components/NewGameButton/NewGameButton';


import styles from './GamePage.module.css';

const GamePage = (props) => {
    return (
        <main className={styles.main}>
            <GameBoard />
            <GameTimer
                elapsedTime={props.elapsedTime}
                handleTimerUpdate={props.handleTimerUpdate}
                isTiming={props.isTiming}
            />
            <NewGameButton />
        </main>
    )
}

export default GamePage;