import React, { useState, useContext } from "react";
import "./Hiring.css";
import { motion } from "framer-motion";
import { handleDragContext } from "../../App";

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
  const handleDrag = useContext(handleDragContext);

  const changeBackground = (e) => {
    e.target.classList.toggle("clicked");
  };
  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDrag={handleDrag}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className={navState ? "hiring section nav" : "hiring section"}
      data-index="4"
    >
      <h1>You want us to do</h1>
      <div className="services">
        {services.map((service, idx) => (
          <div
            key={idx}
            onClick={(e) => changeBackground(e)}
            className="service"
          >
            <i className="bi bi-check2"></i>
            <span>{service}</span>
          </div>
        ))}
      </div>
      <form action="" className="form">
        <input type="text" name="Name" placeholder="Name" />
        <input type="email" name="Email" placeholder="Email" />
        <input type="submit" value="send request" />
      </form>
    </motion.div>
  );
}

export default Hiring;
