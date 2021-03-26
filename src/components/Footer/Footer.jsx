import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div>
          <div>2021 © Brewhackers Technologies</div>
        </div>
        <div>
          <div className="policies">
            <div className="policy-link">Privacy Policy</div>
            <div className="policy-link">Terms of Service</div>
            <div class="policy-link">Support</div>
          </div>
        </div>
      </footer>
    </>
  );
}
