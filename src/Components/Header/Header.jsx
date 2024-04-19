import React from "react";
import "./Header.css";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Header({ handleNavbar, navState }) {
  const doThat = () => {
    handleNavbar();
  };
  return (
    <div className={navState ? "header section nav" : "header section"}>
      <Link to="Home">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <h2>khayreddine</h2>
        </div>
      </Link>
      <div onClick={() => doThat()} className="hamburger">
        <span></span>
      </div>
    </div>
  );
}
export default Header;
