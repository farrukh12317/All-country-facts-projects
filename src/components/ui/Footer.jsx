import React from "react";

export const Footer = () => {
  return (
    <>
      {" "}
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <div class="logo">
              <div class="logo-icon">GL</div>
              <span>GlobalLink</span>
            </div>
            <p>
              We provide world-class services and solutions for businesses and
              individuals across the globe.
            </p>
          </div>

          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Country</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Contact Us</h3>
            <div class="contact-info">
              <i>📍</i>
              <p>
                123 Business Ave, Suite 500 New York, NY 10001
              </p>
            </div>
            <div class="contact-info">
              <i>📞</i>
              <p>+1 (555) 123-4567</p>
            </div>
            <div class="contact-info">
              <i>✉️</i>
              <p>info@globallink.example</p>
            </div>
          </div>

          <div class="footer-section">
            <h3>Connect With Us</h3>
            <div class="socials">
              <a href="#">FB</a>
              <a href="#">TW</a>
              <a href="#">IG</a>
              <a href="#">LI</a>
            </div>
            <p>Subscribe to our newsletter for updates</p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2023 GlobalLink. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};
