export const About = (props) => {
  return (
    <div id="about" className="modern-about">
      <div className="container">
        
        {/* 1. Header moved OUTSIDE the grid to fix mobile ordering & align image with text */}
        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <div className="about-grid">
          
          {/* Left Side: The Letter */}
          <div className="about-image-wrapper">
            <img src="img/about.jpg" className="img-responsive" alt="About Us" />
          </div>
          
          {/* Right Side: Typography & Logos */}
          <div className="about-text-content">
            
            {/* Top Half: Text content */}
            <div className="text-wrapper">
              <p>
                {props.data ? props.data.paragraph : "loading..."}
              </p>
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
            </div>

            {/* Bottom Half: Logos pushed to the floor */}
            <div className="certification-logos">
               {/* Note: Update these src paths if your logo names are different */}
              <img src="img/KSEB_Logo_2022 (1) (1).png" alt="KSEB Certified" />
              <img src="img/MNRE_Logo_2022.png" alt="MNRE Certified" />
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};