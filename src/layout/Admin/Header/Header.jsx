import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar" style={{ "background-color": "#e3f2fd" }}>
      <div class="container-fluid">
        <Link to="/admin" class="navbar-brand">
          Products
        </Link>
        <Link to="/admin" class="navbar-brand">
          Blogs
        </Link>
        <Link to="/admin" class="navbar-brand">
          Images
        </Link>
        <Link to="/admin" class="navbar-brand">
          Blog images
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
