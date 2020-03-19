import React from "react";
import logo from "../images/Group 1060.svg";
import "../styles/nav.scss";
function Nav() {
  return (
    <div>
      <nav>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
        <div className='links'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#about us'>about us</a>
          </li>
          <li>
            <a href='#contact'>contact</a>
          </li>
        </div>
        <button>My project</button>
      </nav>
    </div>
  );
}

export default Nav;
