import React from "react";
import "./Download.css";
import AppStore from "../../assets/images/appstore.svg";
import GooglePlayStore from "../../assets/images/googleplay.svg";

export default function Download() {
  return (
    <div className="download-container">
      <div>DOWNLOAD AND GIVE US A TRY !!</div>
      <div className="download-links">
        <img src={AppStore} alt="AppStore " />
        <img src={GooglePlayStore} alt="GooglePlayStore " />
      </div>
    </div>
  );
}
