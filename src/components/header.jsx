export const Header = (props) => {
  return (
    <header id="header" className="modern-header">
      <div className="hero-grid">
        
        {/* Left Side: Content */}
        <div className="hero-content">
          <h1>Quality Solar <br/><span>For a Brighter Future</span></h1>
          <p>Kerala's Solar Experts, from Design to Installation.</p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn-solid">Get a Free Quote</a>
            <a href="#services" className="btn-outline">Our Services</a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <strong>50+</strong>
              <span>Projects</span>
            </div>
            <div className="stat-item">
              <strong>Tier 1</strong>
              <span>Equipment</span>
            </div>
            <div className="stat-item">
              <strong>100%</strong>
              <span>Green</span>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="hero-image">
          <img src="img/intro-bg.jpg" alt="Solar panels installed in Kerala" />
        </div>

      </div>
    </header>
  );
};