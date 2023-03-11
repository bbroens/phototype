import React from "react";
import "./workshop.scss";
import { Link } from "react-router-dom";
export interface IWorkshop {
  workshop_id: number;
  icon: string;
  name: string;
}

type Props = {
  path: string;
  icon: string;
  name: string;
};

const Workshop = ({ path, icon, name }: Props) => {
  return (
    <Link to={path} className="workshop">
      <img src={`/${icon}`} alt="Workshop" />
      <span>{name}</span>
    </Link>
  );
};

export default Workshop;
