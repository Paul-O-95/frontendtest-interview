import React from "react";
import team from "../images/team.svg";
import person1 from "../images/pexels-photo-846741-removebg-preview.svg";
import person2 from "../images/pexels-photo-1036623-removebg-preview.svg";
import person3 from "../images/pexels-photo-1036627-removebg-preview.svg";
import dot from "../images/Group.svg";
import "../styles/team.scss";

function Team() {
  return (
    <div className='wrapper'>
      <div className='headings'>
        <h4>Meet The Team</h4>
        <h2>great outcome always relay on the great foundations</h2>
      </div>
      <div className='bg-images'>
        <img src={team} alt='' className='team' />
        <img src={dot} alt='' className='dot' />
      </div>
      <section className='images'>
        <div className='wrap'>
          <div className='person1'>
            <img src={person1} alt='' />
          </div>
          <div className='info'>
            <h3>jom potrick</h3>
            <p>Standard screen generation and design for all</p>
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
        </div>

        <div className='wrap'>
          <div className='person2'>
            <img src={person2} alt='' />
          </div>
          <div className='info'>
            <h3>ema jonas</h3>
            <p>Standard screen generation and design for all</p>
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
        </div>

        <div className='wrap'>
          <div className='person3'>
            <img src={person3} alt='' />
          </div>
          <div className='info'>
            <h3>mike pens</h3>
            <p>Standard screen generation and design for all</p>
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
        </div>
      </section>
      <button className='btn'>LET'S CATCH ALL</button>

      {/* CONTACT */}
      <section className='contact'>
        <h4>contact</h4>
        <h2>Have an awesome idea in mind? We would like to hear</h2>
        <div className='msg'>
          <input type='email' name='contact' placeholder='enter your email' />
          <button>Start</button>
        </div>
      </section>
    </div>
  );
}

export default Team;
