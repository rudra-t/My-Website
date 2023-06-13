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
                <div className="card-body">
                  <i class="fa-solid fa-code"></i>
                  <h4> Lenovo Sales Executive</h4>
                  <p>
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
              <div className="card">
                <div className="card-body">
                  <i class="fa-solid fa-code"></i>
                  <h4>Web Desinger or Doveloper</h4>
                  <p>
                    Want online presence through website i can help you to
                    visible online with my services.
                  </p>
                  <a
                    href="https://store.lenovo.com/in/en/marketplace/seller/profile/shop/1658478463"
                    className="btn"
                  >
                    Website
                  </a>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <i class="fa-solid fa-code"></i>
                  <h4>Financial Adviser</h4>
                  <p>
                    If you want any type of help regarding insurance, stock
                    market and accounting i can help you.
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
          </div>
        </div>
      </section>
    </>
  );
}
export default Card;
