import classes from "./ProfileInfo.module.css";
import { ReactComponent as ArrowHead } from "assets/svgs/arrow-head.svg";
import { ReactComponent as GlobeSvg } from "assets/svgs/globe.svg";
import { ReactComponent as QuestionMarkSvg } from "assets/svgs/question-mark.svg";
import React from "react";
import { mc } from "utility/functions";

const ProfileInfo: React.FC = () => (
  <div className="d-flex align-items-center w-100 h-100">
    <div className="h-100 d-flex align-tems-center pe-3">
      <button className={classes.globe}>
        <GlobeSvg />
      </button>
      <button className={mc(classes.questionMark, "mx-2")}>
        <QuestionMarkSvg />
      </button>
      <button className={classes.footiumLogo}>
        <img src="assets/images/footium-logo.jpg" alt="footium logo" />
      </button>
    </div>
    <div className={mc("h-75 min-w-100 d-flex", classes.right)}>
      <div className={classes.filler} />
      <div className={classes.dateAndTime}>
        <div className={classes.dateAndTimeBackground} />
        <div className={mc(classes.dateTimeText)}>
          <div className={classes.date}>26 AUG 2019</div>
          <div className={classes.time}>Mon 9:00</div>
        </div>
      </div>
      <button className={mc(classes.continueButton)}>
        continue
        <div>
          <ArrowHead />
        </div>
      </button>
    </div>
  </div>
);

export default ProfileInfo;
