import React from "react";
import blob from "./im/blob.svg";
function About() {
  return (
    <section id="About">
      <div className="container my-5 my-md-0">
        <div className="row">
          <div className="col-md-6">
            <img src={blob} alt="#"></img>
          </div>
          <div className="about-text col-md-6">
            <h2>About Me</h2>
            <h1 className="my-3">Turning Vision Into Reality </h1>
            <h2>Web doveloper from India</h2>
            <p>
              As a web developer with one year of experience and a background in
              sales, I bring a unique combination of skills to the table. My
              experience in sales has honed my communication and interpersonal
              skills, allowing me to work effectively with clients and
              understand their needs. I am highly focused on customer
              satisfaction and strive to build long-lasting relationships with
              clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
