import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import styles from '../../pages/Signup/Signup.module.css';

const Signup = (props) => {
    return (
        <main>
            <h1>Signup</h1>
            <SignupForm 
            {...props} 
            handleSignUpOrLogin={props.handleSignupOrLogin}
            />
        </main>
    );
}

export default Signup;