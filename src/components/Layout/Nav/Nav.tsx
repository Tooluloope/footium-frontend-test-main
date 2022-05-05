import React from "react";
import { navItems } from "./constants";
import NavItem from "./NavItem";
import classes from "./Nav.module.css";

const Nav: React.FC = () => (
  <div className={classes.container}>
    <div className={classes.background}>
      <div className={classes.bars}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
    {navItems.map((navItem) => (
      <React.Fragment key={navItem.title}>
        <NavItem {...navItem} />
      </React.Fragment>
    ))}
  </div>
);

export default Nav;
