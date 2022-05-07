import NavItem from "./NavItem";
import { NavItemProps } from "./types";
import React from "react";

const NavItemContainer: React.FC<NavItemProps> = (props) => {
  return <NavItem {...props} />;
};

export default NavItemContainer;
