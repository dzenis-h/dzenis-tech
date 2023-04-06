import React, { useContext } from "react";
import { LangContext } from "../../../assets/locales/LangContext";
import { obj } from "../../../assets/locales/words";

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
        {note}
      </p>
    </>
  );
};

export default HighlightedHeader;
