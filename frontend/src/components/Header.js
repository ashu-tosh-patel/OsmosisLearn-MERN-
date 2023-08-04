import React,{useState} from "react";
import { Link, useMatch } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
import './Header.css';

import LoginPopup from "./LoginPopup";
import logo from '../assets/logo.png';

const Header = () => {
    const exploreMatch = useMatch("/explore");
    const createMatch = useMatch("/create");
    const eventsMatch = useMatch("/events");
    const loginMatch = useMatch("/login");
    const signupMatch = useMatch("/signup");

  // State to handle the visibility of the login popup
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <nav className="navbar">
      <ul>
        <li className="title"><img src={logo} alt="logo"></img></li>
        <>
          <li><FaSistrix /></li>
          <li><Link to="/explore" className={exploreMatch ? "active" : ""}>Explore</Link></li>
          <li><Link to="/create" className={createMatch ? "active" : ""}>Create</Link></li>
          <li><Link to="/events" className={eventsMatch ? "active" : ""}>Events</Link></li>
          <li><button className="login-link" onClick={openPopup}>Log In</button></li>
          <li><Link to="/signup" className={signupMatch ? "active" : ""}>Sign Up</Link></li>
        </>
      </ul>
      {showPopup && <LoginPopup onClose={closePopup} />}
    </nav>
  );
};

export default Header;
