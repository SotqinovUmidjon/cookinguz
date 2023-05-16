import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ChangeThemeContext";

function Navbar() {
  const { color } = useContext(ThemeContext);
  return (
    <div>
      <div className="nav" style={{ background: color }}>
        <div className="logo">
          <Link to="/">
            <img style={{width: "200px",height: "85px", color: "white", objectFit: "cover"}} src="./img/logo.png" alt="" />
          </Link>
        </div>
        <div className="btn">
          <NavLink to="/create">Yangi taom</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
