import React from "react";
import "./Feature.css";
export default function Feature({ sequence, title, content }) {
  const isEvenNumber = () => {
    if (sequence % 2 === 0) {
      return true;
    }
    return false;
  };

  return (
    <div className="feature-container">
      <div
        className={`app-detail-container ${
          isEvenNumber()
            ? "right-container feature-container-right"
            : "left-container "
        }`}
      >
        <div>{title}</div>
        <div>{content}</div>
      </div>
      <div className="image-container"></div>
    </div>
  );
}
