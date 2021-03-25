import React from "react";
import Feature from "../Feature/Feature";
import AppPreview from "../../assets/images/home.svg";
export default function Features() {
  return (
    <>
      <Feature
        appImage={AppPreview}
        title={"Guilt Free Browsing !"}
        content={
          "Our team curates the best content online just to fuel your tech needs and keep you updated on the on-goings around the tech world"
        }
      />
      <Feature
        appImage={AppPreview}
        title={"Trending Topics !"}
        content={
          "Trending topics tailor made just for you to consume, you can share your opinions with us so we can customize the app for you !"
        }
      />
      <Feature
        appImage={AppPreview}
        title={"Top Sources"}
        content={
          "We pick up articles from top sources and shortify them into 80 word articles. Read full articles of whatever you are interested in"
        }
      />
    </>
  );
}
