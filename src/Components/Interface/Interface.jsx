import React from "react";
import "./Interface.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Interface({ title, srcImg, btn }) {
  return (
    <div className="interface">
      <div className="container">
        <div className="content">
          <div className="title">
            <motion.h1
              initial={{ x: "-200px" }}
              whileInView={{ x: "0" }}
              transition={{
                ease: "linear",
                duration: 2,
                x: { duration: 1 },
              }}
            >
              {title}
            </motion.h1>
            <Link to="/hiring">
              {btn} <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <motion.div
            initial={{ x: "200px" }}
            whileInView={{ x: "0" }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="image"
          >
            <img src={srcImg} alt="Photos" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Interface;
