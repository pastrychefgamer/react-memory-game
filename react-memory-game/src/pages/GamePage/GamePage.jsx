import React from 'react';
import GameBoard from '../.././components/Gameboard/GameBoard';
import styles from './GamePage.module.css';

const GamePage = (props) => {
    return (
        <main className={styles.main}>
            <div>image will go here</div>
            <GameBoard />
            <div>image will go here</div>
        </main>
    )
}

export default GamePage;