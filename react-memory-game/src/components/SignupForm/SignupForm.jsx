import React from 'react';

class SignupForm extends React.Component {
    render () {
        return (
            <form>
                <fieldset>
                    <legend>Personal Details</legend>
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text"/>

                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email"/>

                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" ype="password"/>

                    <label htmlFor="passwordConf">Confirm Password</label>
                    <input id="passwordConf" name="passwordConf" type="password"/>

                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        );
    }
}

export default SignupForm;