import classes from "./NavItem.module.css";
import { NavItemProps } from "./types";
import React from "react";
import { mc } from "utility/functions";

const NavItem: React.FC<NavItemProps> = ({
  Svg,
  title,
  line,
  active,
  notifCount,
}) => (
  <div
    className={mc(
      classes.container,
      [!!line, classes.line],
      [!!active, classes.active]
    )}
  >
    {!!notifCount && <div className={classes.notif}>{notifCount}</div>}
    <Svg />
    {title}
  </div>
);

export default NavItem;
