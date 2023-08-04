import React from "react";
import logo from '../assets/logo.png';
import './login.css';
import ggl from '../assets/google.png';    
const login = () => {
    return (
        <div>
            <h3>Login</h3>
            <hr></hr>
            <p>Not member yet? click <a href="null">here</a></p>
            <div className="frm">
            <span><img src={logo} alt="logo"></img></span>
                <form>
                    <label>
                    <input className="inpt1" type="email" placeholder="Email" />
                    </label>
                    <label >
                    <input className="inpt2" type="password" placeholder="Password" />
                    </label>
                    <div className="cptdiv">
                    <div className="wcpt1">SAISW</div>
                    <label>
                    <div className="wcpt2">
                    <input className="cpt" type="text" placeholder="Enter captcha" />
                    </div>
                    </label>
                    </div>
                    <div>
                    <label>
                    <input className="form-submit-button" type = "submit" value="Submit" />
                    </label>
                    </div>
                </form>
                <p>OR</p>
                <p>Login with <span className="google"><img src={ggl} alt="google" className="ggle"></img></span></p>
            </div>
        </div>
    )
};

export default login;