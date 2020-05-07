import React from "react";
import { Link } from "react-router-dom";

function Banner({ title, subTitle, button, link, text }) {
  return (
    <div className="banner">
      <h1>
        {title} {text}
      </h1>
      <div />
      <p> {subTitle}</p>
      <Link to={link}>
        <button className="btn-primary">{button}</button>
      </Link>
    </div>
  );
}

export default Banner;
