import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <>
      <div className="about-screen">
        <h1>About</h1>
        <Link to="/contact">
          <button>Contact Page</button>
        </Link>
      </div>
    </>
  );
}

export default About;
