import React, { useState } from "react";
import "./outerNav.css";
function outerNav({ navState, toPage, handleSpan, getTheIndex }) {
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
    handleSpan(e, idx);
  };

  return (
    <div className={navState ? "navBar nav" : "navBar"}>
      <ul className="list">
        {lists.map((l, idx) => (
          <li key={idx} onClick={(e) => doIt(e, idx)} className="where">
            <span className="">{l}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default outerNav;
