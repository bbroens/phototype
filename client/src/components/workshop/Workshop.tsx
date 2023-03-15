import React from "react";
import "./workshop.scss";
import { Link } from "react-router-dom";

type WorkshopProps = {
  path: string;
  icon: string;
  name: string;
};

const Workshop = ({ path, icon, name }: WorkshopProps) => {
  return (
    <Link to={path} className="workshop">
      <img src={`/${icon}`} alt="Workshop" />
      <span>{name}</span>
    </Link>
  );
};

export default Workshop;
