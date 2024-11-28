import React from "react";
import Scrollspy from "react-scrollspy";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="../img/logo.png" alt="Logo" style={{ height: '40px' }} />
            Sunway Energy Solutions
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <Scrollspy
            items={["features","about", "services", "portfolio", "contact"]}
            currentClassName="active"
            className="nav navbar-nav navbar-right"
          >
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </Scrollspy>
        </div>
      </div>
    </nav>
  );
};