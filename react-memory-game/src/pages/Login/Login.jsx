import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
// import styles from '../../pages/Login/Login.module.css';

const Login = (props) => {
    return (
        <main>
        <h1>Login</h1>
        <LoginForm {...props} />
        </main>
    );
}

export default Login;