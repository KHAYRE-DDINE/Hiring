import React, { useState, useContext } from "react";
import "./Works.css";
import { motion } from "framer-motion";
import Hire from "../Hire/hire";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import WorkMetiew from "../../images/work-metiew-smith.jpg";
import WorkAlex from "../../images/work-alex-nowak.jpg";
import WorkVictory from "../../images/work-victory.jpg";
import { handleDragContext } from "../../App";

const Works = () => {
  const [works, setWorks] = useState([
    {
      image: WorkMetiew,
      name: "Lorem ipsum dolor sit amet!",
      description: " aknlcl jcsahuc ak ",
    },
    {
      image: WorkAlex,
      name: "Lorem ipsum dolor sit amet!",
      description: " aknlcl jcsahuc ak ",
    },
    {
      image: WorkVictory,
      name: "Lorem ipsum dolor sit amet!",
      description: " aknlcl jcsahuc ak ",
    },
  ]);
  const [id, setId] = useState(1);

  const handleDrag = useContext(handleDragContext);
  const increment = () => {
    return id === 2 ? setId(0) : setId((prev) => prev + 1);
  };
  const decrement = () => {
    return id === 0 ? setId(2) : setId((prev) => prev - 1);
  };
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
        <div className="arrow-left" onClick={decrement}>
          <IoIosArrowBack />
        </div>
        <div className="works">
          {works.map((work, idx) => (
            <div key={idx} className={id === idx ? "work selected" : "work"}>
              <div className="image">
                <img src={work.image} alt={work.image} />
              </div>
              <h2 className="name">{work.name}</h2>
              <p className="description">{work.description}</p>
            </div>
          ))}
        </div>
        <div className="arrow-right" onClick={increment}>
          <IoIosArrowForward />
        </div>
      </div>
    </motion.div>
  );
};

export default Works;
