import React from 'react';
import styles from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav>
            <h1>MEMORY GAME</h1>
            <ul>
                <li>Login</li>
                <li>Signup</li>
            </ul>
        </nav>
    )
}

export default Navbar;