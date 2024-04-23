import React, { useContext } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import Hire from "../Hire/hire";
import { handleDragContext } from "../../App";

function Contact({ navState }) {
  const handleDrag = useContext(handleDragContext);

  return (
    <div
      className={navState ? "contact section nav" : "contact section"}
      data-index="3"
    >
      <Hire />
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDrag={handleDrag}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="info"
      >
        <address>akñvm avkkmv</address>
        <a href="mailto:ahrarkhirdin@gmail.com">jfhybfv@gmail.com</a>
        <a href="tel:+21237625661">7683679202</a>
        <a type="button" href="#+21237625661">
          behance
        </a>
        <a type="button" href="+21237625661">
          dribble
        </a>
        <a type="button" href="+21237625661">
          contact us
        </a>
      </motion.div>
    </div>
  );
}

export default Contact;
