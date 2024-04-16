import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ handleSpan }) {
  // eslint-disable-next-line
  const [section, setSection] = useState([
    "home",
    "works",
    "about",
    "contact",
    "hiring",
  ]);

  return (
    <div className="navbar">
      <div className="inner">
        {section.map((sec, idx) => (
          <span
            className={idx === 0 ? "active" : ""}
            onClick={(e) => handleSpan(e, idx)}
            data-name={sec}
            data-index={idx}
            key={idx}
            href={sec}
          >
            {"0" + (idx + 1)}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
