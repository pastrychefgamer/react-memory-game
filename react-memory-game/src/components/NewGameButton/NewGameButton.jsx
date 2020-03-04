import React from 'react';
import styles from '../NewGameButton/NewGameButton.module.css';

const NewGameButton = (props) => (
    <button 
        className={styles.button}
        onClick={props.handleNewGameClick}
    >
        New Game
    </button>
);

export default NewGameButton;