import React, { useContext } from "react";
import "./About.css";
import { motion } from "framer-motion";
import Hire from "../Hire/hire";
import AboutVisual from "../../images/about-visual.png";
import Interface from "../Interface/Interface";
import Winners from "../../images/about-winners.jpg";
import Philosophy from "../../images/about-philosophy.jpg";
import { handleDragContext } from "../../App";

function About({ navState }) {
  const handleDrag = useContext(handleDragContext);

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDrag={handleDrag}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className={navState ? "about section nav" : "about section"}
      data-index="2"
    >
      <Hire />
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
    </motion.div>
  );
}

export default About;
