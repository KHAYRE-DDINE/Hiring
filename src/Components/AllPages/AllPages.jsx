import React from "react";
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

function AllPages({navState}) {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route>{/* <Route path="Works" element={<Works />} /> */}</Route>
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Hiring" element={<Hiring />} />
    </Routes>
  );
}

export default AllPages;
