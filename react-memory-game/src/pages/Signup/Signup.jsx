import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import styles from '../../pages/Signup/Signup.module.css';

const Signup = (props) => {
    return (
        <main className={styles.main}>
            <div>image will go here</div>
            <SignupForm 
            {...props} 
            handleSignUpOrLogin={props.handleSignupOrLogin}
            />
            <div>image will go here</div>
        </main>
    );
}

export default Signup;