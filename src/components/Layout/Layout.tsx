import React from "react";
import { mc } from "@footium/utility/functions";
import Header from "./Header";
import Nav from "./Nav";
import classes from "./Layout.module.css";

const Layout: React.FC = ({ children }) => (
  <div className={mc("vw-100 d-flex", classes.container)}>
    <div className={mc("position-absolute w-100 h-100", classes.background)}>
      <div className={classes.stripe1} />
      <div className={classes.stripe2} />
    </div>
    <div className={mc("position-relative verflow-auto h-100", classes.left)}>
      <Nav />
    </div>
    <div
      className={mc(
        "w-100 h-100 position-relative d-flex flex-column",
        classes.right
      )}
    >
      <div className={mc(classes.header)}>
        <Header />
      </div>
      <div className={mc("h-100", classes.content)}>{children}</div>
    </div>
  </div>
);

export default Layout;
