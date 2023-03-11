import React from "react";
import { Link } from "react-router-dom";

type Props = {
  icon: any;
  path: string;
  name: string;
};

const NavItem = ({ icon, path, name }: Props) => {
  const UserIcon = icon;

  return (
    <Link to={path} className="navItem">
      <UserIcon /> {name}
    </Link>
  );
};

export default NavItem;
