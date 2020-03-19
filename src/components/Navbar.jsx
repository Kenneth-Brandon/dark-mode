import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, toggleDarkMode] = useDarkMode(false);
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <nav className="navlinks">
        <Link to="/">Home</Link>
        <Link to="/data">Data</Link>
      </nav>
      <div className="dark-mode__toggle" onClick={toggleDarkMode}>
        <div className={darkMode ? "toggle toggled" : "toggle"} />
      </div>
    </nav>
  );
};

export default Navbar;
