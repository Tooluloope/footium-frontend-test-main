import React from "react";
import PageInfo from "./PageInfo";
import ProfileInfo from "./ProfileInfo";

import classes from "./Header.module.css";
import { mc } from "@footium/utility/functions";

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
