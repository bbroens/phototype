import React from "react";
import { useContext } from "react";
import "./header.scss";
import MoonIcon from "@mui/icons-material/DarkModeOutlined";
import SunIcon from "@mui/icons-material/WbSunnyOutlined";
import { ThemeContext } from "../../context/darkModeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header data-testid="header">
      {theme === "dark" ? (
        <SunIcon onClick={toggleTheme} className="headerIcon" />
      ) : (
        <MoonIcon onClick={toggleTheme} className="headerIcon" />
      )}
    </header>
  );
};

export default Header;
