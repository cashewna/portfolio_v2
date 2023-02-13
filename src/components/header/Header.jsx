import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.webp";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Krishna Khong</h1>
        <h5 className="text-light">Junior Software Developer | Student</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} style={{ borderRadius: "12rem 12rem 0 0" }} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
