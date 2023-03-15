import React from "react";
import { Link } from "react-router-dom";

type NavItemProps = {
  icon: any;
  path: string;
  name: string;
};

const NavItem = ({ icon, path, name }: NavItemProps) => {
  const UserIcon = icon;

  return (
    <Link to={path} className="navItem">
      <UserIcon /> {name}
    </Link>
  );
};

export default NavItem;
