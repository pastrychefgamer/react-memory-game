import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from '../../pages/Login/Login.module.css';

const Login = (props) => {
    return (
        <main className={styles.main}>
        <div>image will go here</div>
        <LoginForm {...props} />
        <div>image will go here</div>
        </main>
    );
}

export default Login;