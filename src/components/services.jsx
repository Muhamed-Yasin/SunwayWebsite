export const Services = (props) => {
  return (
    <div id="services" className="modern-services">
      <div className="container">
        
        <div className="section-title text-center">
          <h2>Our Services</h2>
          <p>Comprehensive solar solutions tailored for residential and commercial needs.</p>
        </div>
        
        <div className="services-grid">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="service-card">
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        
      </div>
    </div>
  );
};