import React from "react";
import Feature from "../Feature/Feature";
import AppFeature from "../../assets/images/profile.svg";
export default function Features() {
  return (
    <>
      <Feature
        appImage={AppFeature}
        title={"Guilt Free Browsing !"}
        content={
          "Our team curates the best content online just to fuel your tech needs and keep you updated on the on-goings around the tech world"
        }
        key={"1"}
      />
      <Feature
        appImage={AppFeature}
        title={"Trending Topics !"}
        content={
          "Trending topics tailor made just for you to consume, you can share your opinions with us so we can customize the app for you !"
        }
        key={"2"}
      />
      <Feature
        appImage={AppFeature}
        title={"Top Sources"}
        content={
          "We pick up articles from top sources and shortify them into 80 word articles. Read full articles of whatever you are interested in"
        }
        key={"3"}
      />
    </>
  );
}
