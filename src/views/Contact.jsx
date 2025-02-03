import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <textarea id="message" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p><strong>Phone:</strong> +9779862394390</p>
        <p><strong>Email:</strong> saroj.basnet1237@gmail.com</p>
        <p><strong>Address:</strong> Kathmandu, Nepal</p>
      </div>
    </div>
  );
};

export default Contact;
