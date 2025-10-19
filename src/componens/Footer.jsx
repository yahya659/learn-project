import React from "react";
import { FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="continer">
        <div className="footer-row">
          <div className="col">
            <h2>Get In Touch</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="social">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagramSquare />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="col">
            <h2>Company Info</h2>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>Features</h2>
            <ul>
              <li>
                <a href="#">Business Markating</a>
              </li>
              <li>
                <a href="#">User Analytic</a>
              </li>
              <li>
                <a href="#">Live Chat</a>
              </li>
              <li>
                <a href="#">Unlimited Support</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>Reources</h2>
            <ul>
              <li>
                <a href="#">IOS & Android</a>
              </li>
              <li>
                <a href="#">Watch & Demo</a>
              </li>
              <li>
                <a href="#">Customers </a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>
            &copy; 2025 | ALL right reserved made by{" "}
            <a
              href="https://www.linkedin.com/in/yahya-alhaifi-81b886374/"
              target="_blank"
            >
              <strong className="text-primary">Yahya Alhaifi</strong>
            </a>
          </p>
          {/* <HiOutlineMail style={{ marginTop: "30px" }} /> */}
          
          <div>
            <h1>
              <marquee direction="right">
                <p style={{ paddingTop: "40px" }}>
                  {" "}
                  Designed by: Yahya Ahmed Abdul Karim Al-Haifi... Contact:
                  +967771940086 Email: yahayaalhaifi@gmail.com
                </p>
              </marquee>
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
