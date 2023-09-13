import Header from './Header'
import Footer from './Footer'
import React, { useState } from 'react'

export const Signup = () => {
    const [state, setState] = useState('Log In')
    function loginState(e) {
        e.preventDefault();
        setState('Log In')
    }
    function signUpState(e) {
        e.preventDefault();
        setState('Sign Up')
    }
    return (
        <>
            <Header />
            <form className='signup-form'>
                <h1 className='display-title'>{state}</h1>
                <div className='form-button'>
                    <button id='SignUp' className={state==='Log In' ?'gray':'btn'} onClick={signUpState}>Signup</button>
                    <button id='Login' className={state==='Sign Up' ?'gray':'btn'} onClick={loginState}>Login</button>
                </div>
                {state === 'Sign Up' ? <div>
                    <label for='name' className='homepage'>Full Name:</label>
                    <input type='text' name='name'></input>
                </div> : <div></div>}

                <div>
                    <label for='email' className='homepage'>Email:</label>
                    <input type='email' name='email'></input>
                </div>
                <div>
                    <label for='password' className='homepage'>Password:</label>
                    <input type='password' name='password'></input>
                </div>
                {state === 'Sign Up' ?
                    <div>
                        <label for='confirm-password' className='homepage'>Confirm Password:</label>
                        <input type='password' name='confirm-password'></input>
                    </div> : <div></div>}
                {state === 'Log In' ? <div>
                    <p className='homepage'>Forgot Password?</p>
                </div> : <div></div>}
                <div>
                    <button type='submit' className='btn' id='signup-button'>Submit</button>
                </div>
            </form>
            <Footer />
        </>
    )
}
export default Signup;
