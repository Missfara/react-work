import React from "react";
import logo from "./React-icon.svg.png"
let Header = () => {
  return (
    <header>
      <nav className="flex">
        <img src={logo} 
        alt="pic1" />
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
      </nav>
    </header>
  );
};
export default Header;
