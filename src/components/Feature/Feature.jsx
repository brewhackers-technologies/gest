import React from "react";
import "./Feature.css";
export default function Feature({ appImage, title, content }) {
  return (
    <div className="feature-container">
      <div className="app-detail-container">
        <div>{title}</div>
        <div>{content}</div>
      </div>
      <div className="image-container">
        <img className="app-image" src={appImage} alt="AppBox " />
      </div>
    </div>
  );
}
