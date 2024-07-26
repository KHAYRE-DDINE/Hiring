import React, { useState, useContext } from "react";
import "./Hiring.css";
import { animate, motion } from "framer-motion";

function Hiring({ navState }) {
  // eslint-disable-next-line
  const [services, setServices] = useState([
    "app design",
    "Graphic design",
    "motion design",
    "UX design",
    "webdesign",
    "marketing",
  ]);

  const changeBackground = (e) => {
    e.target.classList.toggle("clicked");
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const inputVariant = {
    duration: 1,
  };
  return (
    <div
      className={navState ? "hiring section nav" : "hiring section"}
      data-index="4"
    >
      <h1>You want us to do</h1>
      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate="show"
        className="services"
      >
        {services.map((service, idx) => (
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            key={idx}
            onClick={(e) => changeBackground(e)}
            className="service"
          >
            <i className="bi bi-check2"></i>
            <span>{service}</span>
          </motion.div>
        ))}
      </motion.div>
      <form action="" className="form">
        <motion.input
          initial={{
            x: "-200px",
          }}
          whileInView={{
            x: "0",
          }}
          transition={inputVariant}
          type="text"
          name="name"
          placeholder="Name"
        />
        <motion.input
          initial={{
            x: "200px",
          }}
          whileInView={{
            x: "0",
          }}
          transition={inputVariant}
          type="email"
          name="email"
          placeholder="Email"
        />
        <motion.input
          initial={{
            y: "100px",
          }}
          whileInView={{
            y: "0",
          }}
          transition={inputVariant}
          type="submit"
          value="send request"
        />
      </form>
    </div>
  );
}

export default Hiring;
