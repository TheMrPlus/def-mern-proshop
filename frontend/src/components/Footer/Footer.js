import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links-container">
          <div className="footer-links-wrapper">
            <div className="footer-links-items">
              <h2 className="footer-link-title">Contact Us.</h2>
              <Link to="/" className="footer-link">
                Contact
              </Link>
              <Link to="/" className="footer-link">
                Support
              </Link>
              <Link to="/" className="footer-link">
                Destinations
              </Link>
              <Link to="/" className="footer-link">
                Sponsorships
              </Link>
            </div>
          </div>
          <div className="footer-links-wrapper">
            <div className="footer-links-items">
              <h2 className="footer-link-title">Contact Us.</h2>
              <Link to="/" className="footer-link">
                Contact
              </Link>
              <Link to="/" className="footer-link">
                Support
              </Link>
              <Link to="/" className="footer-link">
                Destinations
              </Link>
              <Link to="/" className="footer-link">
                Sponsorships
              </Link>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <Link className="social-logo">PROSHOP</Link>
            <small className="website-rights">PROSHOP © 2020</small>
            <div className="social-icons">
              <a
                className="social-icon-link"
                href="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                className="social-icon-link"
                href="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                className="social-icon-link"
                href="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i class="fab fa-youtube"></i>
              </a>
              <a
                className="social-icon-link"
                href="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                className="social-icon-link"
                href="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
