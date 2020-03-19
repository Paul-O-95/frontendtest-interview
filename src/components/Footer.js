import React from "react";
import "../styles/footer.scss";
import logo from "../images/Group 1060.svg";

function Footer() {
  return (
    <div className='wrapped'>
      <section>
        <div>
          <h1>
            <img src={logo} alt='' />
          </h1>
          <div>
            <p>
              A design agency shaping ideas into products. We help startups and
              enterprises invent, build and launch
            </p>
          </div>
        </div>
        <div>
          <h1>Services</h1>
          <div>
            <p>Web Designr</p>
            <p>App Design</p>
            <p>Photography</p>
            <p>Videography</p>
          </div>
        </div>

        <div>
          <h1>Support</h1>
          <div>
            <p>Get support</p>
            <p>Contact</p>
            <p>My blog</p>
            <p>Privacy Policy</p>
            <p>Pricing</p>
          </div>
        </div>

        <div className='ft-socials'>
          <h1>Socials</h1>
          <ul>
            <li>
              <i class='fab fa-facebook-f'></i>
            </li>
            <li>
              <i class='fab fa-twitter'></i>
            </li>
            <li>
              <i class='fab fa-dribbble'></i>
            </li>
            <li>
              <i class='fab fa-linkedin-in'></i>
            </li>
          </ul>
        </div>
      </section>
      <p className='ft-text'>&copy; frontendtest | All rights reserved 2020</p>
    </div>
  );
}

export default Footer;
