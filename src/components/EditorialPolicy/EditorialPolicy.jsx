import React from "react";
import "./EditorialPolicy.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

export default function EditorialPolicy() {
  return (
    <>
      <div className="container" data-aos="fade-left">
        <Link to="/">
          <img className="logo-img" src={Logo} alt="Gest Logo" />
        </Link>
        <div className="title">Key Highlights of the Gist Editorial Policy</div>
        <p data-aos="fade-left">
          We take great pride in the quality of the content created by us and
          are very particular about the content displayed on our app and. To
          ensure consistently high quality of content, we have developed strict
          editorial guidelines, key features of which are highlighted below.
        </p>
        <ol>
          <li>
            <p data-aos="fade-left">Sourcing from multiple sources:</p>
            <ul>
              <li>
                We verify the facts stated in each gist from at least three
                sources thereby ensuring their accuracy
              </li>
              <li>
                Our creators read several articles on each gist, distil the
                common facts which emerge and then create original content for
                the gist.
              </li>
              <li>
                This practice of sourcing from multiple article helps ensure
                that our gists do not reflect the views from one news source and
                are unbiased and un-opinionated.
              </li>
            </ul>
          </li>
          <li data-aos="fade-left">
            <p data-aos="fade-left">Multiple layers of review:</p>
            <ul>
              <li>
                We make sure that every gist goes through multiple layers of
                review. The first is a self-review process whereby the creator
                of the gist reviews each gist based on a carefully designed
                internal checklist which ensures that the gist meets the
                language, grammar, plagiarism and content guidelines.
              </li>
              <li>
                At the second layer of review, a content editor again ensures
                that each of the guidelines is met.
              </li>
              <li>
                Along the way, we also use state-of-the-art anti-plagiarism
                software which introduces another layer of review to ensure that
                no improper content sneaks through.
              </li>
              <li>
                To constantly keep making our review process better, we, in May
                2016, introduced an additional layer of review called SGF
                (spelling, grammar and fact) check to ensure that all our gists
                are error free to the extent possible.
              </li>
            </ul>
          </li>
          <li data-aos="fade-left">
            <p data-aos="fade-left">We take plagiarism seriously:</p>
            <ul>
              <li>
                We believe in being creative instead of being copycats.
                Plagiarism is simply not acceptable and any violation is not
                tolerated.
              </li>
              <li>
                We strive to use only such content as is licenced to us by our
                many content partners and in solely the manner agreed upon in
                the terms of the licence granted by them.
              </li>
              <li>
                We apply high anti-plagiarism standards and flag use of even
                three consecutive words from the source as potential plagiarism.
                Of course, if these three consecutive words form part of a
                direct quote, then we do not consider it to be plagiarism.
              </li>
              <li>
                We also use state of the art anti-plagiarism software which
                applies similar high standards and flags any gist which does not
                meet this standard.
              </li>
              <li>
                The multiple layers of review ensure that plagiarism is checked
                at every stage.
              </li>
            </ul>
          </li>
          <li data-aos="fade-left">
            <p data-aos="fade-left">Respecting other’s IP: </p>
            <ul>
              <li>
                We value our intellectual property and similarly respect the
                intellectual property of others.
              </li>
              <li>
                Our creators ensure that images used for our gists are either
                based on open source material or used based on a specific
                license.
              </li>
              <li>
                The multi-layer review process and the internal checklist ensure
                that the source of each image on the gists is appropriately
                recorded.
              </li>
            </ul>
          </li>
          <li data-aos="fade-left">
            <p data-aos="fade-left">Consistency in language and style: </p>
            <ul>
              <li>
                In order to ensure consistency in language of our gists and the
                style in which they are written, we ensure that they all follow
                grammar styles which are provided to each creator in our
                detailed editorial policy.
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <Footer />
    </>
  );
}
