import React from "react";
import personal from "./im/personal.svg";
function Card() {
  return (
    <>
      <section id="Portfolio">
        <div className="container">
          <div className="row">
            <div class="col-lg-4 col-md-6">
              <div className="card-head">
                <p className="subtitle">My Resent Projects.</p>
                <h1 className="title">My Work</h1>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-img">
                  <img src={personal} />
                </div>
                <div className="card-body">
                  <a
                    className="btn"
                    href="https://clownfish-app-bvsr3.ondigitalocean.app/"
                  >
                    Go Somewhere
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-img">
                  <img src={personal} />
                </div>
                <div className="card-body">
                  <a className="btn">Next Might Be Yours</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Card;
