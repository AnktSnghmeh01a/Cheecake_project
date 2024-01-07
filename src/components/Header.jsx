import React from 'react';
import Logo from '../asserts/LOGO OF CHEESECAKE.png';
import { HashLink } from 'react-router-hash-link';
const Header = () => {
  return <nav>
   <div className="imageDiv">
    <img src={Logo} alt="logo" />
   </div>
   

    <main>
     
     <HashLink to={'/#home'} >Home</HashLink>
     <HashLink to={'/#about'}>About Us</HashLink>
     <HashLink to={'/#menu'} >Menu</HashLink>
     <HashLink to={'/#contact'}>Contact</HashLink>

    </main>

   <button>Sign up</button>

  </nav> 
    
}

export default Header