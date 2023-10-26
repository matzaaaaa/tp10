import { Link, Outlet } from "react-router-dom";
import react from "react";
export default function header() {
  return (
    <header id="header">
      <div class="container">
        <div class="row">
          <nav class="navbar navbar-expand-lg col-md-12 padding-small flex-container">
            <button
              class="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#slide-navbar-collapse"
              aria-controls="slide-navbar-collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon">
                <i class="icon icon-navicon"></i>
              </span>
            </button>
            <div class="navbar-collapse collapse" id="slide-navbar-collapse">
              <ul class="navbar-nav list-inline light text-uppercase align-items-baseline">
                <Link to="/" class="nav-item active">
                  Home
                </Link>
                <Link to="/" class="nav-item">
                  About us
                </Link>
                <li class="nav-item">
                  <a href="#portfolios">Portfolios</a>
                </li>
                <li class="nav-item nav-brand">
                  <a href="index.html">
                    <img src="images/logo.png"></img>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#blog">Blog</a>
                </li>
                <li class="nav-item">
                  <a href="#gallery">Gallery</a>
                </li>
                <li class="nav-item">
                  <a href="#contact">Contact us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
