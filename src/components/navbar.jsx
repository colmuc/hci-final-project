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
        <form class="form-inline my-3 my-lg-0 align-right">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
