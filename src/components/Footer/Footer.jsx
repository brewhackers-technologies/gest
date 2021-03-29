import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div class="copyright ">
          <a
            className="empty-url-style no-link-style"
            href="https://brewhackers.com"
          >
            2021 © Brewhackers Technologies
          </a>
        </div>
        <div className="contact-us">
          <div>Contact Us</div>
          <a className="empty-url-style" href="mailto:hello@gist.website.com">
            hello@gist.website.com
          </a>
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
              <Link to="/editorial-policy" className="no-link-style">
                Editorial Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
