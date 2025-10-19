import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Main from "./main";
import Footer from "./footer";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header id="header">
        <nav className="navbar">
          <img src="./me.jpg" alt="icon" />
          <a href="#" className="logo">
            EduBridge
          </a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#rivews">Product</a>
            </li>
            <li>
              <a href="#coursee">Pricing</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
          <div className="accuont">
            <Link to="/login">
              <a>Login</a>
            </Link>

            <a href="#" className="btn-join">
              JOIN US
              <FaArrowRight />
            </a>
          </div>
        </nav>
      </header>
      <Main />
      <Footer />
    </div>
  );
}
