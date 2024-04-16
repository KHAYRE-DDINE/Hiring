import React from "react";
import "./About.css";
import AboutVisual from "../../images/about-visual.png";
import Interface from "../Interface/Interface";
import Winners from "../../images/about-winners.jpg";
import Philosophy from "../../images/about-philosophy.jpg";

function About() {
  return (
    <div className="about section" data-index="2">
      <Interface
        title="we believe in passionate people"
        srcImg={AboutVisual}
        btn="career"
      />
      <div className="container">
        <div className="boxes">
          <div className="box">
            <img src={Winners} alt="Winners" />
            <span>winners</span>
          </div>
          <div className="box">
            <img src={Philosophy} alt="philosophy" />
            <span>philosophy</span>
          </div>
          <div className="box">
            <img src={Winners} alt="Winners" />
            <span>historic</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
