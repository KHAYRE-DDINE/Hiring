import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";

// eslint-disable-next-line
import Home from "../Home/Home";
// eslint-disable-next-line
import Works from "../Works/Works";
import About from "../About/About";
// eslint-disable-next-line
import Contact from "../Contact/Contact";
// eslint-disable-next-line
import Hiring from "../Hiring/Hiring";
import { navStateContext } from "../../App";

function AllPages({ handleDrag }) {
  const navState = useContext(navStateContext);

  return (
    <motion.div className="carousel">
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDrag={handleDrag}
        className="inner-carousel"
      >
        <Routes>
          <Route path="/" element={<Home navState={navState} />} />
          <Route>
            <Route path="Works" element={<Works navState={navState} />} />
          </Route>
          <Route path="About" element={<About navState={navState} />} />
          <Route path="Contact" element={<Contact navState={navState} />} />
          <Route path="Hiring" element={<Hiring navState={navState} />} />
        </Routes>
      </motion.div>
    </motion.div>
  );
}

export default AllPages;
