import React from "react";
import about from "./im/about.svg";
import PDF from "./im/RPT.pdf";
function About() {
  return (
    <section id="About">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-6 about-image">
            <img src={about} alt="#"></img>
          </div>
          <div className="about-text col-md-6">
            <h2>About Me</h2>
            <h1>Turning Vision Into Reality </h1>
            <h2>Web doveloper from India</h2>
            <p>
              I have done my Bachelor's degree in the field of Commerce with
              experience of 1-2 years as a computer operator, sales executive,
              insurance agent, and office administrator having skills in Excel
              and Word with good comminucation.
            </p>
            <a className="btn" target="_blank" href={PDF}>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
