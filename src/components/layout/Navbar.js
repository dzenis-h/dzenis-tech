import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { LangContext } from "../../assets/locales/LangContext";

const Navbar = () => {
  const { lang, changeLang } = useContext(LangContext);
  return (
    <div className="lang-scope">
      <Select value={lang} onChange={changeLang} className="lang">
        <MenuItem value="english">English</MenuItem>
        <MenuItem value="bosnian">Bosanski</MenuItem>
      </Select>
      <IconButton color="inherit" style={{ cursor: "none" }} id="flag">
        {lang === "english" ? (
          <span role="img" aria-label="Language" className="flag">
            🇺🇸
          </span>
        ) : (
          <span role="img" aria-label="Language" className="flag">
            🇧🇦
          </span>
        )}
      </IconButton>
    </div>
  );
};

export default Navbar;
