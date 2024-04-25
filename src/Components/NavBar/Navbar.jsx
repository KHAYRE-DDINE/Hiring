import React, { createContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export const createIndexContext = createContext(null);
export const createAnimationContext = createContext(null);

function Navbar({ navState, direction }) {
  // eslint-disable-next-line
  const [section, setSection] = useState([
    "home",
    "works",
    "about",
    "contact",
    "hiring",
  ]);
  let [index, setIndex] = useState(1);
  const [testValue, setTestValue] = useState(null);

  let store = [];

  let test = (idx) => {
    store.push(idx);
    store[store.length - 1] > store[store.length - 2]
      ? setTestValue("top")
      : setTestValue("bottom");
  };

  let navigate = useNavigate();
  useEffect(() => {
    if (direction === "downwards") {
      setIndex((id) => id + 1);
    } else {
      setIndex((id) => id - 1);
    }
    navigate(section[index] !== "home" ? section[index] : "");
  }, [direction]);

  return (
    <div className={navState ? "navbar section nav" : "navbar section"}>
      <createIndexContext.Provider value={index}>
        {/* <createAnimationContext.Provider value={testValue}> */}
        <div className="inner">
          {section.map((sec, idx) => (
            <NavLink
              data-name={sec}
              index={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? setIndex(idx) : ""
              }
              onClick={() => setIndex(idx)}
              key={idx}
              to={sec === "home" ? "/" : sec}
            >
              {"0" + (idx + 1)}
            </NavLink>
          ))}
        </div>
        {/* </createAnimationContext.Provider> */}
      </createIndexContext.Provider>
    </div>
  );
}

export default Navbar;
