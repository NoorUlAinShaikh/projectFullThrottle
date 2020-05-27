import React from "react";
import { LANDING_TITLE, LANDING_BODY } from "../helpers/constants";

const Landing = () => {
  return (
    <div
      style={{ textAlign: "center", color: "gainsboro", fontSize: "x-large" }}
    >
      <h1
        style={{ fontFamily: "unset", fontSize: "xxx-large", margin: "4rem 0" }}
      >
        {LANDING_TITLE}
        <label style={{ color: "red" }}>!</label>
      </h1>
      {LANDING_BODY}
    </div>
  );
};

export default Landing;
