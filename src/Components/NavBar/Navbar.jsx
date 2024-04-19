import React, { createContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const createIndexContext = createContext(null);

function Navbar({ navState }) {
  // eslint-disable-next-line
  const [section, setSection] = useState([
    "home",
    "works",
    "about",
    "contact",
    "hiring",
  ]);
  const [index, setIndex] = useState(null);

  return (
    <div className={navState ? "navbar section nav" : "navbar section"}>
      <createIndexContext.Provider value={index}>
        <div className="inner">
          {section.map((sec, idx) => (
            <NavLink
              data-name={sec}
              data-index={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? setIndex(idx) : ""
              }
              key={idx}
              to={sec === "home" ? "/" : sec}
            >
              {"0" + (idx + 1)}
            </NavLink>
          ))}
        </div>
      </createIndexContext.Provider>
    </div>
  );
}

export default Navbar;
