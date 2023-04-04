import React, { useEffect, useContext } from "react";

import { LangContext } from "../assets/locales/LangContext";
import { obj } from "../assets/locales/words";

// import CV from "../assets/documents/Performance Profile.pdf";

import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const Home = (props) => {
  setTimeout(() => {
    (() => {
      // Cloning divs where particles go in order not to put 300 of them in the markup :)
      const node = document.querySelector(".parts");
      [...Array(300)].forEach((_) =>
        node.parentNode.insertBefore(node.cloneNode(true), node)
      );
    })();
  }, 200);

  useEffect(() => {
    document.title = "Home"; // making the document title dynamic
  }, []);

  const { lang, changeLang } = useContext(LangContext);
  const { position } = obj[lang];

  return (
    <>
      <main id="home">
        <Select value={lang} onChange={changeLang} className="lang">
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="bosnian">Bosnian</MenuItem>
        </Select>
        <IconButton color="inherit" style={{ cursor: "none" }}>
          {lang === "english" ? (
            <span role="img" aria-label="Language">
              🇺🇸
            </span>
          ) : (
            <span role="img" aria-label="Language">
              🇧🇦
            </span>
          )}
        </IconButton>

        <div className="particles">
          <div className="parts"></div>
        </div>
        <div className="wrapper animate__animated bounceInLeft">
          <h1 className="dzenis specialFont text textShadow">
            <span className="specialFont" style={{ color: "whitesmoke" }}>
              Dzenis
            </span>
            <i className="text-secondary">
              {" "}
              <b>H.</b>
            </i>
          </h1>
        </div>
        <h2 className="text textShadow">
          <i style={{ color: "white" }}>{position}</i>
        </h2>
        <div className="icons">
          <a
            href="https://github.com/dzenis-h"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub account"
          >
            <i className="fab fa-github fa-2x" />
          </a>
          <a
            href="https://stackoverflow.com/users/8146571/bigga-hd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="StackOverflow account"
          >
            <i className="fab fa-stack-overflow fa-2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/dzenis-h/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn account"
          >
            <i className="fab fa-linkedin-in fa-2x" />
          </a>
          {/* <a href={CV} download="Dzenis-H" className="cv">
            <i className="fas fa-cloud-download-alt fa-2x" />
            <span className="dox">{profile} </span>
          </a> */}
        </div>
      </main>
    </>
  );
};

export default Home;
