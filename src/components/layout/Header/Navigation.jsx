import React from 'react'
import logo from "../../../assets/logo.svg"
import "./Header.css"
import { Search } from 'lucide-react';

export const Navigation = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="" />
    </a>
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
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item dropdown">
           <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Company
          </a>
        <ul className="dropdown-menu">
            <li className='dropdown-link'>
              <a className="dropdown-item" href="#">
                About Us
              </a>
            </li>
            <li className='dropdown-link'>
              <a className="dropdown-item" href="#">
                How it works
              </a>
            </li>
              <li className='dropdown-link'>
              <a className="dropdown-item" href="#">
                Carrer
              </a>
            </li>
            <li className='dropdown-link'>
              <hr className="dropdown-divider" />
            </li>
          
          </ul>

        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Services
          </a>
          <ul className="dropdown-menu">
            <li className='dropdown-link'>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li className='dropdown-link'>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li className='dropdown-link'>
              <hr className="dropdown-divider" />
            </li>
          
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
        <li className='nav-item'>
           <a className="nav-link" href="#">
            Blog
           </a>

        </li>
           <li className='nav-item'>
           <a className="nav-link" href="#">
            Contact
           </a>

        </li>

      </ul>
       <div className="module-contact">
          <div className='module-search'>
               <Search />
              <span className='me-3'>Search</span>
          </div>
          <button className="btn btn-primary">Request an Estimate</button>
       </div>
    </div>
  </div>
</nav>

    </div>
  )
}
