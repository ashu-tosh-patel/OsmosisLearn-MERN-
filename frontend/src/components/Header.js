import React from "react"
import { Link, useMatch } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
import './Header.css'

import logo from '../assets/logo.png';
const Header = () => {



    const exploreMatch = useMatch("/explore");
    const createMatch = useMatch("/create");
    const eventsMatch = useMatch("/events");
    const loginMatch = useMatch("/login");
    const signupMatch = useMatch("/signup");

    return (
        <nav className="navbar">
            <ul>
                {/* <li className="title">Osmosis learn</li> */}
                <li className="title"><img src={logo} alt="logo"></img></li>
                <>
                    <li ><FaSistrix/></li>
                    <li ><Link to="/explore" className={exploreMatch ? "active" : ""}>Explore</Link></li>
                    <li ><Link to="/create" className={createMatch ? "active" : ""}>Create</Link></li>
                    <li ><Link to="/events" className={eventsMatch ? "active" : ""}>Events</Link></li>
                    <li ><Link to="/login" className={loginMatch ? "active" : ""}>Log In</Link></li>
                    <li ><Link to="/signup" className={signupMatch ? "active" : ""}>Sign Up</Link></li>
                </>
            </ul>
        </nav>
    )
};

export default Header;
