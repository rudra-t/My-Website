import React from "react";
import first from "./im/first.jpg";
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
                  <img src={first} />
                </div>
                <div className="card-body">
                  <a className="btn">Go Somewhere</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div className="card">
                <div className="card-img">
                  <img src={first} />
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
