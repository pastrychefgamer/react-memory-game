import React from 'react';
import Card from '../Card/Card';
import styles from './GameBoard.module.css';

const GameBoard = (props) => (
    <main className={styles.main}>
        <h1>Game Board</h1>
        {
            props.cards.map((card, idx) => {
                return <Card key={idx} card={card} />
            })
        }

    </main>
);

export default GameBoard;