import React from "react";

export const Footer = () => {
  return (
    <footer id="footer" className="modern-footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Sunway Energy Solutions. All Rights Reserved. Designed for Kerala's Solar Future.
        </p>
      </div>
    </footer>
  );
};