import Menu from "./Menu";
import classes from "./Tactics.module.css";
import React from "react";
import { mc } from "utility/functions";

const Tactics: React.FC = () => (
  <div
    className={mc(
      "position-relative d-flex flex-column h-100",
      classes.container
    )}
  >
    <div className={classes.menu}>
      <Menu />
    </div>
    {/* YOUR COMPONENT HERE */}
  </div>
);

export default Tactics;
