import React from "react";
import "./hire.css";
import { Link } from "react-router-dom";

function hire() {
  return (
    <Link className="hire" to="/hiring">
      hire us
    </Link>
  );
}

export default hire;
