import React, { useState, useContext } from "react";
import "./Works.css";
import { motion } from "framer-motion";
import Hire from "../Hire/hire";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import WorkImage from "../../images/about-philosophy.jpg";
import { handleDragContext } from "../../App";

const Works = () => {
  const [works, setWorks] = useState([
    {
      image: WorkImage,
      name: "Lorem ipsum dolor sit amet!",
      description: " aknlcl jcsahuc ak ",
    },
    {
      image: WorkImage,
      name: "Lorem ipsum dolor sit amet!",
      description: " aknlcl jcsahuc ak ",
    },
    {
      image: WorkImage,
      name: "Lorem ipsum dolor sit amet!",
      description: " aknlcl jcsahuc ak ",
    },
  ]);

  const handleDrag = useContext(handleDragContext);

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDrag={handleDrag}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="works-section section"
    >
      <Hire />
      <h1 className="title d-flex justify-content-center align-item-center text-capitalize">
        selected work
      </h1>
      <div className="choose ">
        <div className="arrow-left">
          <IoIosArrowBack />
        </div>
        <div className="works">
          {works.map((work, id) => (
            <div key={id} className="work">
              <div className="image">
                <img src={work.image} alt={work.image} />
              </div>
              <h2 className="name">{work.name}</h2>
              <p className="description">{work.description}</p>
            </div>
          ))}
        </div>
        <div className="arrow-right">
          <IoIosArrowForward />
        </div>
      </div>
    </motion.div>
  );
};

export default Works;
