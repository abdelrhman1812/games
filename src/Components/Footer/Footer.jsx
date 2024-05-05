import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row g-3">
          {/* Logo */}
          <div className="col-md-6 col-lg-3">
            <figure>
              <img
                src={require("../../Assets/Images/Logo/logo.png")}
                alt="logo"
              />
            </figure>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              tempore quos atque magni, nobis earum omnis inventore ut.
            </p>
          </div>

          {/* Categories */}
          <div className="col-md-6 col-lg-3">
            <h3>Categories</h3>
            <p>
              <i class="fa-solid fa-caret-right"></i>Mmorpg
            </p>
            <p>
              <i class="fa-solid fa-caret-right"></i> Shooter
            </p>
            <p>
              <i class="fa-solid fa-caret-right"></i>Sailing
            </p>
            <p>
              <i class="fa-solid fa-caret-right"></i>Pixel
            </p>
            <p>
              <i class="fa-solid fa-caret-right"></i>Permadeath
            </p>
            <p>
              <i class="fa-solid fa-caret-right"></i>Superhero
            </p>
          </div>

          {/* Pages */}
          <div className="col-md-6 col-lg-3">
            <h3>Page</h3>
            <p>
              <i class="fa-solid fa-caret-right"></i>Home
            </p>
            <p>
              <i class="fa-solid fa-caret-right"></i> Games
            </p>
            <p>
              <i class="fa-solid fa-caret-right"></i> Category
            </p>
            <p>
              <i class="fa-solid fa-caret-right"></i>Stores
            </p>
            <p>
              <i class="fa-solid fa-caret-right"></i>Creators
            </p>
          </div>
          {/* Links */}
          <div className="col-md-6 col-lg-3">
            <h3>Links</h3>
            <p>
              <i class="fa-solid fa-caret-right"></i>
              <Link>GitHub</Link>
            </p>
            <p>
              <i class="fa-solid fa-caret-right"></i>
              <Link>Linkedin</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="copy-right">
        <p>
          All Copyright@ Reserved <Link>Abdelrhman Ali</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
