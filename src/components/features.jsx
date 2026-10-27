export const Features = (props) => {
  return (
    <div id="features" className="modern-features">
      <div className="container">
        
        <div className="section-title">
          <h2>Features</h2>
        </div>
        
        <div className="features-grid">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="feature-block">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>

      </div>
    </div>
  );
};