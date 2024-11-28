import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Take a look through some of our projects to see the quality of our work.
          </p>
        </div>
        <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="col-md-9">
            {props.data ? (
              <Carousel
                showThumbs={false}
                autoPlay
                interval={3000}
                infiniteLoop
                showStatus={false}
              >
                {props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`}>
                    <img
                      className="d-block w-100"
                      src={d.largeImage}
                      alt={d.title}
                    />
                    <div className="carousel-caption">
                      <h3>{d.title}</h3>
                    </div>
                  </div>
                ))}
              </Carousel>
            ) : (
              "Loading..."
            )}
          </div>
        </div>
      </div>
    </div>
  );
};