import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { LangContext } from "../../assets/locales/LangContext";

const Navbar = () => {
  const { lang, changeLang } = useContext(LangContext);
  return (
    <>
      <Select value={lang} onChange={changeLang} className="lang">
        <MenuItem value="english">English</MenuItem>
        <MenuItem value="bosnian">Bosanski</MenuItem>
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
    </>
  );
};

export default Navbar;
