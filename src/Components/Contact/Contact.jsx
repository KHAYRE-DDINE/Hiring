import React from "react";
import "./Contact.css";
import Hire from "../Hire/hire";

function Contact({ navState }) {
  return (
    <div
      className={navState ? "contact section nav" : "contact section"}
      data-index="3"
    >
      <Hire />
      <div className="info">
        <address>akñvm avkkmv</address>
        <a href="mailto:ahrarkhirdin@gmail.com">jfhybfv@gmail.com</a>
        <a href="tel:+21237625661">7683679202</a>
        <a type="button" href="#+21237625661">
          behance
        </a>
        <a type="button" href="+21237625661">
          dribble
        </a>
        <a type="button" href="+21237625661">
          contact us
        </a>
      </div>
    </div>
  );
}

export default Contact;
