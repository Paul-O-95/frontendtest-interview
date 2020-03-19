import React from "react";
import Header0 from "../images/creative.svg";
import Header1 from "../images/creativeagency.svg";
import Header2 from "../images/Play_Button.svg";
import Header3 from "../images/Image 1.svg";
import dot from "../images/Group.svg";
import "../styles/Header.scss";

function Header() {
  return (
    <div className='images'>
      <section className='image1'>
        <img src={Header0} alt='' />
      </section>
      <section className='image2'>
        <img src={Header1} alt='' />
      </section>
      <section className='image3'>
        <img src={Header2} alt='' />
      </section>
      <section className='image4'>
        <img src={Header3} alt='' />
      </section>
      <section className='image5'>
        <img src={dot} alt='' className='dot' />
      </section>
    </div>
  );
}

export default Header;
