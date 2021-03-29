import React from "react";
import "./Home.css";
import AppPreview from "../../assets/images/home.svg";
import AppStore from "../../assets/images/appstore.svg";
import GooglePlayStore from "../../assets/images/googleplay.svg";

export default function Home() {
  return (
    <div className="home-container">
      <div className="image-container" data-aos="fade-right">
        <img className="app-image" src={AppPreview} alt="AppBox " />
      </div>
      <div className="app-detail-container" data-aos="fade-left">
        <div>Tech News Simplified !</div>
        <div>
          We understand when it comes to tech news , there shouldn’t be any
          clutter. So we made a tech only news platform under 10 lines just for
          you !!
        </div>
        <div>Short news for smart people</div>
        <div>Download and save time on reading !!</div>
        <div className="download-links" data-aos="flip-up">
          <a
            href="https://apps.apple.com/us/app/id1525140074"
            target="_blank"
            rel="noreferrer"
          >
            <img src={AppStore} alt="AppStore " />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.brewhackers.android.pondr"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GooglePlayStore} alt="GooglePlayStore " />
          </a>
        </div>
      </div>
    </div>
  );
}
