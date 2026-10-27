import React from "react";

export const Header = (props) => {
  return (
    <header 
      id="header" 
      className="modern-header" 
      // Update "img/intro-bg.jpg" to your actual background image path
      style={{ backgroundImage: `url(img/intro-bg.jpg)` }} 
    >
      {/* This div triggers the CSS gradient fade */}
      <div className="hero-overlay"></div>
      
      <div className="container">
        <div className="hero-content">
          <h1>
            {props.data ? props.data.title : "Powering a Brighter Future"}
          </h1>
          <p>
            {props.data ? props.data.paragraph : "We're creating an all-in-one home and commercial energy solution that transforms how we live, connect, and interact with the world around us."}
          </p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn-solid">Get a Free Quote</a>
            <a href="#services" className="btn-outline">Our Services</a>
          </div>
        </div>
      </div>
    </header>
  );
};