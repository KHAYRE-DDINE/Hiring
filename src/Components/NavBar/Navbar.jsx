import React, { createContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const createIndexContext = createContext(null);
export const createAnimationContext = createContext(null);

function Navbar({ navState, index, section, setIndex }) {
  return (
    <div className={navState ? "navbar section nav" : "navbar section"}>
      <createIndexContext.Provider value={index}>
        <div className="inner">
          {section.map((sec, idx) => (
            <NavLink
              data-name={sec}
              index={(isActive) => (isActive ? setIndex(idx) : "")}
              onClick={() => setIndex(idx)}
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
