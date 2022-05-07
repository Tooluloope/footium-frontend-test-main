import { ReactComponent as ArrowHead } from "../../../assets/svgs/arrow-head.svg";
import { mc } from "../../../utility/functions";
import classes from "./Menu.module.css";
import React from "react";

const Menu: React.FC = () => (
  <ul className={mc("my-0 d-flex", classes.menu)}>
    <li className={classes.active}>Overview</li>
    <li>Player</li>
    <li>
      Set Pieces <ArrowHead />
    </li>
    <li>Captains</li>
    <li>Match Plans</li>
    <li>Opposition Instructions</li>
    <li>
      Analysis
      <ArrowHead />
    </li>
  </ul>
);

export default Menu;
