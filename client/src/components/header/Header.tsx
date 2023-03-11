import "./header.scss";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
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
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState("");
  const { currentUser } = useContext(AuthContext);

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
            <img src={`/${currentUser.icon}`} alt="Profile Picture" />
            <span>{currentUser.name}</span>
          </Link>
        </section>
      </section>
    </header>
  );
};

export default Header;
