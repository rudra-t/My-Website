import React from "react";
import coding from "./im/coding.svg";
import sales from "./im/sales.svg";
import finance from "./im/finance.svg";
function Card() {
  return (
    <>
      <section id="Services">
        <div className="container">
          <h1>
            What <span>I Am</span>
          </h1>
          <div className="service-box">
            <div className="service-card">
              <div className="card-body">
                <img src={sales} className="sales"></img>
              </div>
              <h3>Sales Executive</h3>
              <p>
                If you ever want to buy any type of laptop, feel free to ask.
                I'm here to assist you.".
              </p>
            </div>
            <div className="service-card">
              <div className="card-body">
                <img src={coding} className="coding"></img>
              </div>
              <h3>Front-end Doveloper</h3>
              <p>
                Want online presence through website i can help you to visible
                online with my services.
              </p>
            </div>
            <div className="service-card">
              <div className="card-body">
                <img src={finance} className="finance"></img>
              </div>
              <h3>LIC Agent</h3>
              <p>
                If you want any type of help regarding insurance, i can help
                you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Card;
