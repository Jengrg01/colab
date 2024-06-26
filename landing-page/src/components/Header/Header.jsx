import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../ImagesFol/logo.png"; 
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div>
      <div className="navBar">
        <Navbar expand="lg" id="mainnav">
          <div className="container">
            <div className="logoDiv">
              <img src={logo} alt="Logo Image" className="logo" />
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <ul className="navigation">
                  <li className="navbar-links" onClick={() => handleNavigation('/')}>
                    <span>Home</span>
                  </li>
                  <li className="navbar-links" onClick={() => handleNavigation('/about')}>
                    <span>About</span>
                  </li>
                  <li className="navbar-links" onClick={() => handleNavigation('/vehicles')}>
                    <span>Vehicles</span>
                  </li>
                  <li className="navbar-links" onClick={() => handleNavigation('/hire')}>
                    <span>Hire</span>
                  </li>
                  <li className="navbar-links">
                    <NavDropdown title="Contact Us" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.4">
                        Phone no
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.2">
                        Contact Form
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Email
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.1">
                        FAQs
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                </ul>
              </Nav>
              <Nav className="Sign">
                <button id="btn" onClick={() => handleNavigation('/register')}>
                  <h2 className="signup">Register</h2>
                </button>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
