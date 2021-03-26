import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div>
          <div>2021 © Brewhackers Technologies</div>
        </div>
        <div className="contact-us">
          <div>Contact Us</div>
          <a href="mailto:team@getpondr.com">team@getpondr.com</a>
        </div>
        <div>
          <div className="policies">
            <div className="policy-link">
              <Link to="/privacy-policy" className="no-link-style">
                Privacy Policy
              </Link>
            </div>
            <div className="policy-link">
              <Link to="/terms-of-service" className="no-link-style">
                Terms of Service
              </Link>
            </div>

            <div className="policy-link">
              <Link to="/support" className="no-link-style">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
