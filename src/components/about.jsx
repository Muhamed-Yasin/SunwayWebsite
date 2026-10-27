export const About = (props) => {
  return (
    <div id="about" className="modern-about">
      <div className="container">
        <div className="about-grid">
          
          {/* Left Side: Document Image */}
          <div className="about-image-wrapper">
            <img src="img/about.jpg" className="img-responsive" alt="Appreciation Letter from C. Narasimhan" />
          </div>
          
          {/* Right Side: Text Content */}
          <div className="about-text-content">
            <div className="section-title">
              <h2>About Us</h2>
            </div>
            <p>{props.data ? props.data.paragraph : "loading..."}</p>
            
            <h3>Why Choose Us?</h3>
            <div className="modern-list">
              <ul>
                {props.data
                  ? props.data.Why.map((d, i) => (
                      <li key={`${d}-${i}`}>{d}</li>
                    ))
                  : "loading"}
              </ul>
            </div>
              <div className="certification-logos">
              {/* Replace src with your actual logo paths */}
              <img src="img/KSEB_Logo_2022 (1) (1).png" alt="KSEB Logo" />
              <img src="img/MNRE_Logo_2022.png" alt="MNRE Logo" />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};