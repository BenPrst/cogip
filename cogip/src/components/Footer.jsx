import React from "react";

const Footer = () => {
  return (
    <div>
      <hr className="line" />
      <div className="footer">
        <h1>COGIP</h1>
        <div className="footer-contact">
          <span>Localisation</span>
          <span>Telephone</span>
          <span>Fax</span>
          <span>Social Media</span>
        </div>
      </div>
      <hr className="line-1" />
      <div className="footer-bot">
        <span>nav</span>
        <span>copyright</span>
      </div>
    </div>
  );
};

export default Footer;
