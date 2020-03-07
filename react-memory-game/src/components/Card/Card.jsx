import React from 'react';
import Image from 'react-image';
import styles from './Card.module.css';

const Card = (props) => {
    return (
        <main className={styles.main}>
            <Image src={props.card.thumbnail}></Image>
        </main>
    )
}

export default Card;