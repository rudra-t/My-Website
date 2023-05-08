import React from "react";
import first from "./im/first.jpg";
function Card() {
  return (
    <>
      <section id="Services">
        <div className="container">
          <div className="row">
            <h1>
              What <span>I Do</span>
            </h1>
            <div className="col-sm-6 col-lg-4 p-3">
              <div className="card">
                <i className="fas fa-code"></i>
                <div className="card-body">
                  <h2 classsName="card-title">Web Dovelopment</h2>
                  <p classsName="card-sub-title">
                    Want a website for personal or for your business i can help
                    you as your requirment
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 p-3">
              <div className="card">
                <i className="fas fa-code"></i>
                <div className="card-body">
                  <h2 classsName="card-title">Sales Executive</h2>
                  <p classsName="card-sub-title">
                    I can help you to buy laptop from lenovo .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 p-3">
              <div className="card">
                <i className="fas fa-code"></i>
                <div className="card-body">
                  <h2 classsName="card-title">Accountency</h2>
                  <p classsName="card-sub-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati, ut?
                  </p>
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
