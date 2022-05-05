import React from "react";
import { ReactComponent as ArrowSvg } from "@footium/assets/svgs/arrow.svg";
import { ReactComponent as ArrowHeadSvg } from "@footium/assets/svgs/arrow-head.svg";
import { ReactComponent as MagnifyingGlassSvg } from "@footium/assets/svgs/magnifying-glass.svg";
import { mc } from "@footium/utility/functions";
import classes from "./PageInfo.module.css";

const PageInfo: React.FC = () => (
  <div className={mc("d-flex w-100 align-items-center h-100", classes.wrapper)}>
    <div
      className={mc("d-flex w-100 align-items-center h-100", classes.container)}
    >
      <div className={mc(classes.arrowButtons, "h-100")}>
        <button>
          <ArrowSvg />
        </button>
        <button>
          <ArrowSvg />
        </button>
      </div>
      <div className={classes.teaminfo}>
        <div className={classes.background}>
          <div className={classes.backgroundinner}>
            <div className={classes.stripes}>
              <div />
              <div />
            </div>
            <div className={classes.bigStripe} />
            <div className={mc(classes.smallStripes, "d-flex", "h-100")}>
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div className={classes.gap} />
          <div
            className={mc(
              classes.closeEdge,
              "d-flex flex-column justify-content-between"
            )}
          >
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className={classes.edge}>
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>

        <div
          className={mc(
            classes.pageContent,
            "position-relative d-flex align-items-center h-100"
          )}
        >
          <img
            src="assets/images/barcelona.png"
            alt="Team logo"
            className={classes.teamLogo}
          />
          <div
            className={mc(
              classes.controllers,
              "d-flex flex-column justify-content-around"
            )}
          >
            <button>
              <ArrowHeadSvg />
            </button>
            <button>
              <ArrowHeadSvg />
            </button>
          </div>

          <MagnifyingGlassSvg className={classes.magnifyingGlass} />

          <div className={classes.teamData}>
            <h1 className={mc(classes.teamName, "text-uppercase fw-bolder")}>
              Tactics
            </h1>
            <p className="font-tiny">
              5th in the Spanish League - Next Match: Athletico (A) (Tomorrow
              19:45)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PageInfo;
