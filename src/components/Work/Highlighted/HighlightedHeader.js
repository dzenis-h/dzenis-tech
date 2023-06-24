import React, { useContext } from "react";
import { LangContext } from "../../../assets/locales/LangContext";
import { obj } from "../../../assets/locales/words";
import "../../../style/SirenStyle.css";

const HighlightedHeader = () => {
  const darkMode = localStorage.getItem("dark");
  const { lang } = useContext(LangContext);
  const { headline, note } = obj[lang];

  // specialFont bold textShadow
  return (
    <>
      <div className="text-secondary otherApps">
        <hr />
        <h3
          className={
            darkMode === "true"
              ? "work-subtitle white specialFont bold textShadow"
              : "work-subtitle black specialFont bold textShadow"
          }
          style={{ fontSize: "1.1rem" }}
        >
          {headline}
        </h3>
        <hr />
      </div>

      <p className="header-note">
        <span className="custom-text" aria-label="dash">
          <b className={darkMode === "true" ? "note__reverse" : "note"}></b>
        </span>
        <div id="lightbar">
          <div class="side">
            <div class="light_two red"></div>
            <div class="yellow_two"></div>
          </div>{" "}
          <div id="middle" style={{ padding: ".15rem", marginBottom: ".5rem" }}>
            {note}
          </div>
          <div class="side">
            <div class="light_two blue"></div>
            <div class="yellow_two"></div>
          </div>
        </div>
      </p>
    </>
  );
};

export default HighlightedHeader;
