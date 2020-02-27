import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import styles from '../../components/SignupForm/SignupForm.module.css';

const Signup = (props) => {
    return (
        <main>
            <h1>Signup</h1>
            <SignupForm />
        </main>
    );
}

export default Signup;