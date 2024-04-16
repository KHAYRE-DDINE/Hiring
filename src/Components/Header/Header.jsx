import React from "react";
import "./Header.css";
import Logo from "../../images/logo.png";

function Header({ handleNavbar }) {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h2>khayreddine</h2>
      </div>
      <div onClick={() => handleNavbar()} className="hamburger">
        <span></span>
      </div>
    </div>
  );
}
export default Header;
