import { mc } from "../../../utility/functions";
import classes from "./Header.module.css";
import PageInfo from "./PageInfo";
import ProfileInfo from "./ProfileInfo";
import React from "react";

const Header: React.FC = () => (
  <div className="h-100 d-flex">
    <div className={classes.pageInfo}>
      <PageInfo />
    </div>
    <div className={mc(classes.profileInfo)}>
      <ProfileInfo />
    </div>
  </div>
);

export default Header;
