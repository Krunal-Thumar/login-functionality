import React from 'react';
import './Login.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = () => {
    return (
        <div className='wrapper'>
            <div className="form-box login">
                <form action="">
                    <h1>Login to EvalExpert</h1>
                    <div className="input-box">
                        <input type="text" 
                        placeholder='RIT Username' required />
                        <FaUser className="icon"/>
                    </div>
                    <div className='input-box'>
                        <input type="password"
                        placeholder='Password' required />
                        <FaLock className="icon"/>
                    </div>

                    <div className="forgot">
                        <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="need-assistance">
                        <p>Need assistance? Please contact the RIT Service Center at </p>
                        <p><a href="tel:585-475-5000">585-475-5000</a> or visit <a href="https://help.rit.edu" 
                        target="_blank">help.rit.edu</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;