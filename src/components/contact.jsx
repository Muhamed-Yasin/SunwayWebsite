import React from "react";

export const Contact = (props) => {
  return (
    <div id="contact" className="modern-contact">
      <div className="container">
        <div className="contact-grid">
          
          {/* Left Side: Primary Focus - Contact Form */}
          <div className="contact-form-section">
            <div className="section-title">
              <h2>Get In Touch</h2>
            </div>
            <p>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
            
            <form name="sentMessage" id="contactForm">
              <div className="form-row">
                <div className="form-group">
                  <input type="text" id="name" className="modern-input" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input type="email" id="email" className="modern-input" placeholder="Email" required />
                </div>
              </div>
              <div className="form-group">
                <textarea name="message" id="message" className="modern-input modern-textarea" rows="7" placeholder="Message" required></textarea>
              </div>
              <button type="submit" className="btn-solid">Send Message</button>
            </form>
          </div>

          {/* Right Side: Head Office, WhatsApp & Branch Contacts */}
          <div className="contact-info">
            <div className="section-title">
              <h2>Contact Us</h2>
            </div>
            
            <div className="whatsapp-container">
              <a href="https://wa.me/919037388544" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <i className="fa fa-whatsapp"></i> Chat on WhatsApp
              </a>
            </div>

            {/* Head Office / Main Address Box */}
            <div className="head-office-card">
              <div className="info-item-head">
                <i className="fa fa-map-marker"></i>
                <div>
                  <strong>Head Office</strong>
                  <span>Valiyara Chambers, Edavanakkad, Ernakulam, Kerala, India Pin: 682502</span>
                </div>
              </div>
            </div>

            <p className="branch-title-text">
              Our Regional Representatives:
            </p>

            {/* Compact Branch Cards Grid */}
            <div className="branch-contacts-grid">
              <div className="branch-card">
                <strong>Aluva</strong>
                <span>Yousuf: <a href="tel:8304822396">83048 22396</a></span>
              </div>
              <div className="branch-card">
                <strong>Edavanakkad</strong>
                <span>Siddick Valiyara: <a href="tel:9447299795">94472 99795</a></span>
              </div>
              <div className="branch-card">
                <strong>Kothamangalam</strong>
                <span>Ali: <a href="tel:9496663623">94966 63623</a></span>
              </div>
              <div className="branch-card">
                <strong>Perumbavoor</strong>
                <span>Naseer: <a href="tel:9037388544">90373 88544</a></span>
              </div>
              <div className="branch-card full-width-card">
                <strong>Kakkanad</strong>
                <span>Abdul Kalam: <a href="tel:7907723901">79077 23901</a></span>
              </div>
            </div>

            <div className="email-item">
              <i className="fa fa-envelope-o"></i>
              <span>energysolutionssunway@gmail.com</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};