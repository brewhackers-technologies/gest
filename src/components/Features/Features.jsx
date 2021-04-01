import React from "react";
import Feature from "../Feature/Feature";

export default function Features() {
  return (
    <>
      <Feature
        title={"Curated from over 100 trustworthy sources"}
        content={
          "We do the hard work of curation so you don't have to. Our editorial team pick the most important and relevant updates from the best media sites out there. "
        }
        key={1}
        sequence={1}
      />

      <Feature
        title={"Summarized by domain experts"}
        content={
          "Our domain experts summarize the news while retaining the essence, so you don't miss on anything important. It takes just 45 seconds to read an article."
        }
        key={2}
        sequence={2}
      />

      <Feature
        title={"In an clutter-free and simple UX"}
        content={"All the news are just a swipe away. Zero clutter."}
        key={3}
        sequence={3}
      />
    </>
  );
}
