import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
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

function AllPages() {
  const navState = useContext(navStateContext);
  return (
    <Routes>
      <Route path="/" element={<Home navState={navState} />} />
      <Route>
        {/* <Route path="Works" element={<Works navState={navState}/>} /> */}
      </Route>
      <Route path="About" element={<About navState={navState} />} />
      <Route path="Contact" element={<Contact navState={navState} />} />
      <Route path="Hiring" element={<Hiring navState={navState} />} />
    </Routes>
  );
}

export default AllPages;
