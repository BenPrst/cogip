import React from "react";
import Header_bot from "./Header_bot.jsx";
import Navigation from "./Navigation.jsx";
import Signup from "./Signup.jsx";

const Header = () => {
  return (
    <div className="header">
      <h1>COGIP</h1>
      <Navigation />
      <Signup />
      <Header_bot />
    </div>
  );
};

export default Header;
