import React from "react";
import "./menu.scss";
import NavItem from "../navitem/NavItem";
import GridIcon from "@mui/icons-material/GridViewOutlined";

const Menu = () => {
  return (
    <nav data-testid="navigation">
      <div className="navcontainer">
        <div>
          <NavItem icon={GridIcon} path="/" name="Photo feed" />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
