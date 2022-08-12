import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { BsChatLeftText } from "react-icons/bs";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <BiBook />
      </a>
      <a href="#portfolio">
        <FaLaptopCode />
      </a>
      <a href="#contact">
        <BsChatLeftText />
      </a>
    </nav>
  );
};

export default Nav;
