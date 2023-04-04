import React, { Fragment } from "react";

const HighlightedHeader = () => {
  const darkMode = localStorage.getItem("dark");
  // specialFont bold textShadow
  return (
    <Fragment>
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
          I develop software every day. Below is a shortened and adapted list of
          my projects/prototypes:{" "}
        </h3>
        <hr />
      </div>

      <p className="header-note">
        <span className="custom-text" aria-label="dash">
          <b className={darkMode === "true" ? "note__reverse" : "note"}>
            <i>Note</i>➖{" "}
          </b>
        </span>
        Some apps may take longer to load simply because they were deployed
        using a{" "}
        <b className={darkMode === "true" ? "diff-text" : "dark"}>
          {" "}
          "FREE TIER"
        </b>{" "}
        account. <br className="header-break" />
        Thank you for understanding.{" "}
        <b className={darkMode === "true" ? "diff-text" : "dark"}>
          I'm in the process of finalizing multiple projects, so more apps will
          be added soon.
        </b>
      </p>
    </Fragment>
  );
};

export default HighlightedHeader;
