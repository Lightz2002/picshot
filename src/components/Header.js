import React from "react";
import logo from "../images/logo.png";

function Header() {
  return (
    <header className="app__header">
      <img src={logo} className="app__header-logo" alt="logo" />
    </header>
  );
}

export default Header;
