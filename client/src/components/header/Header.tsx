import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext, ThemeContextType } from "../../context/darkModeContext";
import { AuthContext, AuthContextType } from "../../context/authContext";
import LogoImg from "../../assets/images/logo.png";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import MoonIcon from "@mui/icons-material/DarkModeOutlined";
import SunIcon from "@mui/icons-material/WbSunnyOutlined";
import GridIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import PersonIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";

const Header = () => {
  const { theme, toggleTheme } = useContext<ThemeContextType>(ThemeContext);
  const { currentUser } = useContext<AuthContextType>(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header data-testid="header">
      <section className="left">
        <Link to="/">
          <div className="logo">
            <img src={LogoImg} />
          </div>
        </Link>
        <Link to="/">
          <HomeIcon />
        </Link>
        {theme === "dark" ? (
          <SunIcon onClick={toggleTheme} className="headerIcon" />
        ) : (
          <MoonIcon onClick={toggleTheme} className="headerIcon" />
        )}
        <Link to="/">
          <GridIcon />
        </Link>
        <div className="search">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          ></input>
        </div>
      </section>
      <section className="right">
        <PersonIcon />
        <EmailIcon />
        <NotificationsIcon />
        <section className="user">
          <Link to={`/profile/${currentUser.user_id}`}>
            <img src={`/${currentUser.profile_img}`} alt="Profile Picture" />
            <span>{`${currentUser.firstname} ${currentUser.lastname}`}</span>
          </Link>
        </section>
      </section>
    </header>
  );
};

export default Header;
