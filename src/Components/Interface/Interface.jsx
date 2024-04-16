import React from "react";
import "./Interface.css";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

function Interface({ title, srcImg, btn }) {
  return (
    <div className="interface">
      <div className="container">
        <div className="content">
          <div className="title">
            <h1>{title}</h1>
            <a href="Hiring">
              {btn} <i className="bi bi-arrow-right"></i>
            </a>
          </div>
          <div className="image">
            <img src={srcImg} alt="Photos" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interface;
