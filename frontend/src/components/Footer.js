import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="single-footer">
          <h2>ProShop</h2>
        </div>
        <div className="single-footer">
          <h2>Navigation</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
        <div className="single-footer">
          <h2>Get help</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
