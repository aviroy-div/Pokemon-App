import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{ padding: "1rem", backgroundColor: "#282c34", color: "white" }}
    >
      <Link
        to="/"
        style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}
      >
        Home
      </Link>
      <Link
        to="/favorites"
        style={{ margin: "0 1rem", color: "white", textDecoration: "none" }}
      >
        Favorites
      </Link>
    </nav>
  );
};

export default Navbar;
