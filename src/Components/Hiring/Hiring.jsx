import React, { useState } from "react";
import "./Hiring.css";

function Hiring() {
  // eslint-disable-next-line
  const [services, setServices] = useState([
    "app design",
    "Graphic design",
    "motion design",
    "UX design",
    "webdesign",
    "marketing",
  ]);

  const changeBackground = (e) => {
    e.target.classList.toggle("clicked");
  };
  return (
    <div className="hiring section" data-index="4">
      <h1>You want us to do</h1>
      <div className="services">
        {services.map((service, idx) => (
          <div
            key={idx}
            onClick={(e) => changeBackground(e)}
            className="service"
          >
            <i className="bi bi-check2"></i>
            <span>{service}</span>
          </div>
        ))}
      </div>
      <form action="" className="form">
        <input type="text" name="Name" placeholder="Name" />
        <input type="email" name="Email" placeholder="Email" />
        <input type="submit" value="send request" />
      </form>
    </div>
  );
}

export default Hiring;
