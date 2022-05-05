import React from "react";
import { NavItemProps } from "./types";
import NavItem from "./NavItem";

const NavItemContainer: React.FC<NavItemProps> = (props) => {
  return <NavItem {...props} />;
};

export default NavItemContainer;
