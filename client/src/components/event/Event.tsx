import React from "react";
import "./event.scss";
import { Link } from "react-router-dom";
import NearMeIcon from "@mui/icons-material/NearMe";

type EventProps = {
  date: string;
  name: string;
  location: string;
};

const Event = ({ date, name, location }: EventProps) => {
  const dateObj = new Date(date);

  return (
    <Link to="/">
      <div className="event">
        <time dateTime={date} className="icon">
          <div>{dateObj.toLocaleString("default", { month: "long" })}</div>
          <span>{dateObj.toLocaleString("default", { day: "numeric" })}</span>
        </time>
        <div className="details">
          <div className="name">{name}</div>
          <div className="location">
            <NearMeIcon /> {location}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Event;
