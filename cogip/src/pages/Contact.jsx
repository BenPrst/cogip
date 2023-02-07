import React from "react";
import Contact_content from "../components/Contact_content.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/Header.scss";
import "../styles/Header_bot.scss";
import "../styles/Contact.scss";
import "../styles/Footer.scss";

const Contact = () => {
  return (
    <div>
      <Header />
      <Contact_content />
      <br />
      <Footer />
    </div>
  );
};

export default Contact;
