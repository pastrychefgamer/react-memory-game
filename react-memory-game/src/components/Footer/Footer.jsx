import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) => {
    return (
        <nav className={styles.footer}>
            <h1>MEMORY GAME</h1>
            <ul>
                <li>Login</li>
                <li>Signup</li>
            </ul>
        </nav>
    )
}

export default Footer;