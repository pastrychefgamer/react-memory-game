import React from 'react';
import { getChars } from '../../services/marvel-api';

import styles from './GameBoard.module.css';
let chars = getChars();
console.log(chars);

const GameBoard = (props) => (
    <main className={styles.main}>
        <h1>Game Board</h1>
    </main>
);

export default GameBoard;