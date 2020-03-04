import React from 'react';
import GameBoard from '../.././components/Gameboard/GameBoard';
import styles from './GamePage.module.css';

const GamePage = (props) => {
    return (
        <main className={styles.main}>
            <GameBoard />
        </main>
    )
}

export default GamePage;