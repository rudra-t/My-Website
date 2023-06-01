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
            <div className="service-box">
              <div className="card">
                <i class="fa-solid fa-code"></i>
                <div className="card-body">
                  <h2 classsName="card-title"> Lenovo Sales Executive</h2>
                  <p classsName="card-sub-title">
                    If you ever need any advice or recommendations on laptops,
                    feel free to ask. I'm here to assist you.".
                  </p>
                  <a
                    href="https://store.lenovo.com/in/en/marketplace/seller/profile/shop/1658478463"
                    className="btn"
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
            <div className="service-box">
              <div className="card">
                <i class="fa-solid fa-user"></i>
                <div className="card-body">
                  <h2 classsName="card-title">Web Doveloper</h2>
                  <p classsName="card-sub-title">
                    If you ever need assistance with website development or have
                    questions about optimizing your online presence, feel free
                    to ask. I'm here to help.
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
