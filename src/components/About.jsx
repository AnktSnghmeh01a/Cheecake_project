import React from 'react';
import { HashLink } from 'react-router-hash-link';
import AboutImg from '../asserts/About Us Image.png';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="left-img-part">
        <img src={AboutImg} alt="about-img" />
      </div>
      
      <div className="right-part">
          
          <div className="first-txt">
           <h1>We Love Cheesecake</h1>
           <p>Discover our Cheesecake Story</p>
          </div>
       
           <div className="second-para">

           <p>At Cheesecake Love, quality is our cornerstone. Each  </p>
           <p>cheesecake is crafted with the finest ingredients,</p>
           <p>meticulous attention to detail, and a dash of creativity.</p>

           </div>

          <div className="third-para">
            <p>We beleive in delivering not just desserts but moments of sheer indulgence</p>
          </div>


          <HashLink href="/about">
            <button>Read More</button>
          </HashLink>

      </div>
      


      </div>






  )
}

export default About