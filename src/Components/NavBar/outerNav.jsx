/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./outerNav.css";
import { navStateContext } from "../../App";
import { createIndexContext } from "./Navbar";
function outerNav({ toPage }) {
  // eslint-disable-next-line
  const [lists, setLists] = useState([
    "home",
    "works",
    "about",
    "contact",
    "hiring",
  ]);
  const doIt = (e, idx) => {
    toPage();
  };
  const index = useContext(createIndexContext);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navState = useContext(navStateContext);
  return (
    <div className={navState ? "navBar nav" : "navBar"}>
      <ul className="list">
        {lists.map((l, idx) => (
          <li key={idx} onClick={(e) => doIt(e, idx)} className="where">
            <NavLink
              to={l === "home" ? "/" : l}
              className={index === idx ? "active" : ""}
            >
              {l}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default outerNav;
