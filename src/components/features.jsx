import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="modern-features">
      {/* This class triggers the new massive heading and padding */}
      <div className="container">
        
        <div className="section-title">
          <h2>Features</h2>
          <p>Check out what we offer.</p>
        </div>
        
        <div className="features-grid">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="feature-block">
                  
                  {/* This wrapper locks the icon and text side-by-side */}
                  <div className="feature-header">
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                  </div>
                  
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
        
      </div>
    </div>
  );
};