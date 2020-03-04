import React from 'react';
import { getChars } from '../../services/marvel-api';
import Card from '../Card/Card';

import styles from './GameBoard.module.css';
let chars = getChars();
console.log(chars);

const GameBoard = (props) => (
    <main className={styles.main}>
        <h1>Game Board</h1>
        <Card />
    </main>
);

export default GameBoard;