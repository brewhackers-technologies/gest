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
        <div>Technology news in under 100 words</div>
        <div>
          We understand you are busy, so we bring to you the best news of the
          tech world curated from trustworthy sources, summarized in under 100
          words. Stay informed in under 5 minutes.
        </div>
        <div className="download-links" data-aos="flip-up">
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
    </div>
  );
}
