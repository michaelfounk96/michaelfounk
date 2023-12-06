import React, { useRef } from 'react';
import './contast.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8kfv4pa', 'template_s88k9e8', form.current, 'i9I3O1WztIVEons6J')
      .then((result) => {
        console.log(result.text);
        alert('Message Sent');
        e.target.reset();
      }, (error) => {
        alert('Error sending your message');
        console.log(error.text);
      });
  };


  return (
    <div className='contact'>
        <h1 className='contactTitle'>Contact Me</h1>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='from_name' required/>
            <input type='email' className='email' placeholder='Your Email' name='from_email' required/>
            <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value="Send" className='submitBtn'>Submit</button>
        </form>
    </div>
  )
}

export default Contact