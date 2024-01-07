import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='contactUs'>
   
     <div className="container">

      <h1>Contact us</h1>
     
     <form action="submit_form" method='post'> 
     <input type="text" placeholder='name'  id='name' required/>
     <input type="email" placeholder='Email' id="E-mail" required/>
     <input type="text" placeholder='message' id="Message"  required/>
     </form>
     
      
      
      <a href="/"><button>Send Message</button></a>
     </div>

    </div>
  )
}

export default Contact;