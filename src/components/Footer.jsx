import React from 'react';
import {AiOutlineLinkedin,AiFillTwitterCircle,AiFillHeart} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer'>

     <div className="upper_footer">

      <h1>Connect with me</h1>
      <div className="media-section">
       <a href="/" target='_blank'><AiOutlineLinkedin className='linkdin-icon'/></a> 
       <a href="/" target='_blank'><AiFillTwitterCircle className='x-icon'/></a> 
      </div>
     </div>

     <div className="lower_footer">
      <p>Made with <AiFillHeart className='heart-icon'/> by Ankit</p>
     </div>
      
    </div>
  )
}

export default Footer