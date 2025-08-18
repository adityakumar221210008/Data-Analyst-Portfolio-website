// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  // State to manage the text of the copy button
  const [copyButtonText, setCopyButtonText] = useState('Copy Email');

  const emailAddress = 'aditya752907@gmail.com';

  // Function to handle the copy action
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress).then(() => {
      // On success, give the user feedback
      setCopyButtonText('Copied! ✔');
      // After 2 seconds, reset the button text
      setTimeout(() => {
        setCopyButtonText('Copy Email');
      }, 2000);
    }, (err) => {
      // Optional: handle errors if the copy fails
      console.error('Could not copy text: ', err);
      setCopyButtonText('Error');
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container reveal">
          <p className="contact-description">
            I'm currently seeking new opportunities where I can contribute to data-driven decision-making. My inbox is always open, so feel free to reach out. The best way to contact me is by copying my email address below.
          </p>

          {/* --- Email Display and Copy Button --- */}
          <div className="email-display-wrapper">
            <p className="email-address">{emailAddress}</p>
            <button className="btn btn-primary btn-small copy-btn" onClick={handleCopyEmail}>
              {copyButtonText}
            </button>
          </div>

          <div className="social-icons" style={{ justifyContent: 'center', marginTop: '40px' }}>
            <a href="https://www.linkedin.com/in/aditya-kumar-a7162723a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/adityakumar221210008" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
            {/* The mailto icon has been removed */}
          </div>

          {/* The "Say Hello" button has been removed */}
        </div>
      </div>
    </section>
  );
};

export default Contact;