import React from "react";
import "./menu.scss";
import NavItem from "../navitem/NavItem";
import Workshop, { IWorkshop } from "../workshop/Workshop";
import GridIcon from "@mui/icons-material/GridViewOutlined";
import PeopleIcon from "@mui/icons-material/PeopleOutline";
import GroupsIcon from "@mui/icons-material/Workspaces";
import ContestsIcon from "@mui/icons-material/EmojiEvents";
import CalendarIcon from "@mui/icons-material/CalendarMonth";
import SchoolIcon from "@mui/icons-material/School";
import { dummyWorkshops } from "../../dummydata";

//? DUMMY DATA
let workshopArray: IWorkshop[] = [];
if (import.meta.env.VITE_USE_DUMMY_DATA === "true") {
  workshopArray = dummyWorkshops;
}

const Menu = () => {
  return (
    <nav data-testid="navigation">
      <div className="navcontainer">
        <section>
          <NavItem icon={GridIcon} path="/" name="Photo feed" />
          <NavItem icon={PeopleIcon} path="/" name="Friends" />
          <NavItem icon={GroupsIcon} path="/" name="Groups" />
          <NavItem icon={ContestsIcon} path="/" name="Contests" />
          <NavItem icon={CalendarIcon} path="/" name="Calendar" />
          <NavItem icon={SchoolIcon} path="/" name="Tutorials" />
        </section>
        <hr />
        <section>
          <span className="menuTitle">WORKSHOPS</span>
          {workshopArray.map((workshop, index) => (
            <Workshop
              key={index}
              path="/"
              icon={workshop.icon}
              name={workshop.name}
            />
          ))}
        </section>
      </div>
    </nav>
  );
};

export default Menu;
