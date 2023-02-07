import React from "react";
import contactpic from "../assets/contactpic.svg";
import rectangle from "../assets/rectangle.svg";

const Contact_content = () => {
  return (
    <div className="contact">
      <div className="contact-info">
        <h1 className="name">
          Bertram Gilfoyle
          <img className="rectangle" src={rectangle} alt="" />
        </h1>

        <ul>
          <li>
            <b>Contact:</b>Bertram Gilfoyle
          </li>
          <li>
            <b>Phone:</b>555-5434
          </li>
          <li>
            <b>Mail:</b>gilfoy@piedpiper.com
          </li>
          <li>
            <b>Company:</b>Pied Pipper
          </li>
        </ul>
      </div>
      <div className="contact-picture-div">
        <img className="contact-picture" src={contactpic} alt="" />
      </div>
    </div>
  );
};

export default Contact_content;
