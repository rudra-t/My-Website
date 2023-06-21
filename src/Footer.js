import React from "react";
function Footer() {
  return (
    <>
      <footer id="Contact">
        <div>
          <div className="social-links">
            <i className="fa-brands fa-twitter">
              <a href="" target="_blank"></a>
            </i>
            <i className="fa-brands fa-facebook">
              <a href="" target="_blank"></a>
            </i>
            <i className="fa-brands fa-instagram">
              <a href="" target="_blank"></a>
            </i>
            <i className="fa-brands fa-linkedin">
              <a href="" target="_blank"></a>
            </i>
            <i className="fa-brands fa-github">
              <a href="" target="_blank"></a>
            </i>
          </div>
          <div className="credit">
            <p>Designed and Doveloped by Rudra tiwari</p>
            <p>Copyright Rudra Tiwari : All rights reserved</p>
          </div>
        </div>
      </footer>
      <div className="qute">
        <div className="py-4">
          <h1 className="">Do you have any projects</h1>
          <a href="mailto:rtiwari@gmail.com" className="qutebtn">
            I m interested
          </a>
        </div>
      </div>
    </>
  );
}
export default Footer;
