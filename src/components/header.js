import { Link, Outlet } from "react-router-dom";
import React from 'react';
export default function Header() {
  return (
    <>
    <header id="header">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg col-md-12 padding-small flex-container">
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#slide-navbar-collapse"
              aria-controls="slide-navbar-collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="icon icon-navicon"></i>
              </span>
            </button>
            <div className="navbar-collapse collapse" id="slide-navbar-collapse">
              <ul className="navbar-nav list-inline light text-uppercase align-items-baseline">
                <Link to="/" className="nav-item active">
                  Home
                </Link>
                <Link to="/" className="nav-item">
                  About
                </Link>
                <li className="nav-item">
                  <a href="#portfolios">Portfolios</a>
                </li>
                <li className="nav-item nav-brand">
                  <a href="index.html">
                    <img src="images/logo.png"></img>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#blog">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="#gallery">Gallery</a>
                </li>
                <li className="nav-item">
                  <a href="#contact">Contact us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <Outlet/>
      </>
  );
}
