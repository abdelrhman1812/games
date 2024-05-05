import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navbar = useRef(null);

  function changeBG() {
    let scroll = window.scrollY;
    if (scroll < 150) {
      navbar.current.style.backgroundColor = "transparent";
    } else {
      navbar.current.style.backgroundColor = "#0e0b22";
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      changeBG();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav ref={navbar} className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src={require("../../Assets/Images/Logo/logo.png")}
              alt="logo"
            />
          </NavLink>
          <button
            className="navbar-toggler pointer"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon">
              <i className="fa-solid fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/games"
                >
                  Games
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/stores"
                >
                  Stores
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/category"
                >
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/creators"
                >
                  Creators
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
