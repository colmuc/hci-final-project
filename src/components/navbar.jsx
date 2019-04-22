import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link className="nav-link" to="/headlines">
              Headlines <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/science">
              Science
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sports">
              Sports
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/business">
              Business
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
