import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="container">
        <NavLink to="/">Workout Mangement System</NavLink>
      </div>
    </header>
  );
}

export default Navbar;
