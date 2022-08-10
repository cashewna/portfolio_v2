import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Krishna Khong</h1>
        <h5 className="text-light">Student | Aspiring Software Developer</h5>
      </div>
    </header>
  );
};

export default Header;
