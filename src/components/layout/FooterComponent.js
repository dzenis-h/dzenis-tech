import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <article id="wrap" className="text-center">
          <div className="footer-text">
            <p className="textShadow">Dzenis H. </p>
            <p className="textShadow">Portfolio </p>
            <p className="textShadow">
              {" "}
              Copyright © {new Date().getFullYear()}
            </p>
          </div>

          <article id="lightings">
            <section id="one">
              <section id="two">
                <section id="three">
                  <section id="four">
                    <section id="five" />
                  </section>
                </section>
              </section>
            </section>
          </article>
        </article>
      </footer>
    </>
  );
};

export default Footer;
