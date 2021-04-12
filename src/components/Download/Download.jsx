import React from "react";
import "./Download.css";
import AppStore from "../../assets/images/appstore.svg";
import GooglePlayStore from "../../assets/images/googleplay.svg";

export default function Download() {
  return (
    <div className="download-container">
      <div>DOWNLOAD AND GIVE US A TRY</div>
      <div className="download-links">
        <a
          href="https://apps.apple.com/in/app/gist-tech-news-in-100-words/id1559849614"
          target="_blank"
          rel="noreferrer"
        >
          <img src={AppStore} alt="AppStore " />
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.brewhackers.instawire"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GooglePlayStore} alt="GooglePlayStore " />
        </a>
      </div>
    </div>
  );
}
