import React from "react";

import LI from "./linkedin.png";
import GH from "./github.png";
import SO from "./stack-overflow.png";
import mail from "./email.png";
import twitter from "./twitter.png";
import Skype from "./skype.png";
import phone from "./phone.png";
import CV from "./CV.png";

const Demo = () => {
  return (
    <>
      <main id="contact">
        <h2 className="sm-heading">
          This is how you can reach me:
          <br />
        </h2>
        <main className="center-screen">
          <div className="part-one">
            <a href="skype:dzenis.hankusic?call">
              <img src={Skype} alt="Skype" />
            </a>

            <a
              href="https://www.linkedin.com/in/dzenis-h"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LI} alt="LinkedIn" />
            </a>

            <a
              href="tel:00387644543006"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={phone} alt="Phone" />
            </a>

            <a
              href="mailto:dzenis.hankusic@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mail} alt="Email" />
            </a>
          </div>

          <div className="part-two">
            <a
              href="https://github.com/dzenis-h"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GH} alt="GitHub" />
            </a>

            <a
              href="https://stackoverflow.com/users/8146571/dzenis-h"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={SO} alt="Stack Overflow" />
            </a>

            <a
              href="https://twitter.com/BiggaHd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" />
            </a>

            <a
              href="img/assets/Dzenis-H.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={CV} alt="Draft CV" />
            </a>
          </div>
        </main>
      </main>
    </>
  );
};

export default Demo;
