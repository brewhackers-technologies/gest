import React from "react";
import "./Home.css";
import AppPreview from "../../assets/images/home.svg";
import AppStore from "../../assets/images/appstore.svg";
import GooglePlayStore from "../../assets/images/googleplay.svg";

export default function Home() {
  return (
    <div className="home-container">
      <div className="image-container">
        <img className="app-image" src={AppPreview} alt="AppBox " />
      </div>
      <div className="app-detail-container">
        <div>Tech News Simplified !</div>
        <div>
          We understand when it comes to tech news , there shouldn’t be any
          clutter. So we made a tech only news platform under 10 lines just for
          you !!
        </div>
        <div>Short news for smart people</div>
        <div>Download and save time on reading !!</div>
        <div className="download-links">
          <img src={AppStore} alt="AppStore " />
          <img src={GooglePlayStore} alt="GooglePlayStore " />
        </div>
      </div>
    </div>
  );
}
