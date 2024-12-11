// src/components/Footer.js

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {/* Logo and About Section */}
          <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
            <a href="https://www.kltech-intl.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
              <h5 className="text-uppercase mb-3">KLTech International</h5>
            </a>

            <p className="small">
              Providing innovative technology solutions for businesses worldwide. Empowering growth through cutting-edge tech.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 text-center text-md-end">
            <h5 className="text-uppercase mb-3">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://www.facebook.com/kelvin.leonardi.3" className="text-white text-decoration-none">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com/ceokelvin12" className="text-white text-decoration-none">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/kelvin_leonardi" className="text-white text-decoration-none">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/kelvin-leonardi-23a5a4174" className="text-white text-decoration-none">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 border-light" />

        {/* Copyright Section */}
        <div className="row">
          <div className="col-12 text-center">
            <p className="small mb-0">
              &copy; {new Date().getFullYear()} KLTech International. All rights reserved. Powered by Kelvin Leonardi Kohsasih.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
