import React, { useContext } from "react";
import { LangContext } from "../../assets/locales/LangContext";
import { obj } from "../../assets/locales/words";

const WrokTemplate = ({ mainLink, github, name, description }) => {
  const darkMode = localStorage.getItem("dark");
  const { lang } = useContext(LangContext);
  const { live } = obj[lang];
  return (
    <>
      <a
        href={mainLink}
        target="_blank"
        rel="noopener noreferrer"
        className={
          darkMode === "true" ? "btn-light btn-light__reverse" : "btn-light"
        }
        aria-label="Link for the deployed app"
      >
        <i className="fas fa-eye" /> {live}
      </a>
      <a
        href={github}
        target="_blank"
        className={
          darkMode === "true" ? "btn-dark btn-dark__reverse" : "btn-dark"
        }
        rel="noopener noreferrer"
        aria-label="Open gitHub repo for this program"
      >
        <i className="fab fa-github" /> Github repo
      </a>
      <p
        role="img"
        aria-label="developers"
        style={{ textAlign: "center", letterSpacing: "4px" }}
      >
        <span className="custom-text">
          <b className={darkMode === "true" ? "custom-text" : ""}>{name}</b>
        </span>
        <br />
        {description}
      </p>
    </>
  );
};

export default WrokTemplate;
