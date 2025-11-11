import React from "react";
import logo from "../../../assets/logo.svg";
import "./Header.css";
import { Search } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto gap-3">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </NavLink>
              <ul className="dropdown-menu">
                <li className="dropdown-link">
                  <Link className="dropdown-item" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="dropdown-link">
                  <Link className="dropdown-item" to="/how-it-works">
                    How it works
                  </Link>
                </li>
                <li className="dropdown-link">
                  <Link className="dropdown-item" to="/career">
                    Career
                  </Link>
                </li>
                <li className="dropdown-link">
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link "
                to='/services'
                role="button"
               
              >
                Services
              </NavLink>
           </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/price">
                Price
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="module-contact">
            <div className="module-search">
              <Search />
              <span className="me-3">Search</span>
            </div>
            <button className="btn btn-primary">Request an Estimate</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
