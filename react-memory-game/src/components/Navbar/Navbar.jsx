import React from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import styles from './Navbar.module.css';
import marvelLogo from '../../images/marvel.png';


const Navbar = (props) => {
    const conditionalUI = userService.getUser()
    ?   <>
        <li>
            <Link to="" onClick={props.handleLogout}>Logout</Link>
        </li>
        <li>
            <Link to="/game">Play</Link>
        </li>
        </>
        :
        <>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/signup">Signup</Link>
        </li>
        </>
    return (
        <nav className={styles.navbar}>
            <img src={marvelLogo} />
            <Link to="/">
            <h1>MEMORY GAME</h1>
            </Link>
            <ul>
                { conditionalUI }
            </ul>
        </nav>
    )
}

export default Navbar;