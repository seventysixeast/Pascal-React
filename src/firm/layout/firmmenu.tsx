import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const FirmMenu = () => {
  return (
    <React.Fragment>
      <div className="container-fluid page-body-wrapper">
        <div
          id="menubar"
          className="menubar-inverse animate sidebar sidebar-offcanvas"
          style={{ width: "265px" }}
        >
          <div className="menubar-fixed-panel">

            <div className="expanded">
              <a href="/app/">
                <span className="text-lg text-bold text-primary ">
                  Pascal&nbsp;Workflow
                </span>
              </a>
            </div>
          </div>
          <div className="nano" style={{ height: "150px" }}>
            <div className="nano-content" >
              <div
                className="menubar-scroll-panel"
                style={{ paddingBottom: "55px" }}
              >
                <ul id="main-menu" className="gui-controls">
                  {/*ngRepeat: navLink in menudata.navLinks*/}
                  <li
                    className="MenuClose ng-scope"
                    id="Dashboard"
                    title="Dashboard"
                  >
                    <a href="/app/">
                      <span
                        className="gui-icon ng-scope"
                  
                      >
                        <i className="fa fa-home"></i>
                      </span>
                      <span
                        className="title  ng-binding"
                        style={{ paddingLeft: 6, opacity: "1" }}
                      >
                        Dashboard{" "}
                      </span>
                    </a>
                  </li>
                 

                  <li
                    className="MenuClose ng-scope"
                    id="Settings"
                    title="Settings"
                  >
                    <a className="ng-scope" href="/app/settings/firmpreference">
                      <span className="gui-icon ng-scope">
                        <i className="fa fa-cog"></i>
                      </span>
                      <span
                        className="title  ng-binding"
                        style={{ paddingLeft: 6, opacity: "1" }}
                      >
                        Settings{" "}
                      </span>
                    </a>
                  </li>
                </ul>
                {/* end main menu */}

                <div className="menubar-foot-panel">
                  <small className="no-linebreak hidden-folded">
                    <span className="opacity-75">copyright © 2021 </span>{" "}
                    <strong>Pascal Workflow</strong>
                  </small>
                </div>
              </div>
            </div>
            <div className="nano-pane" style={{ display: "block" }}>
              <div
                className="nano-slider"
                style={{ height: 31, transform: "translate(0px, 20.2726px)" }}
              ></div>
            </div>
          </div>
          {/* end .menubar-scroll-panel*/}
        </div>

        <div className="main-panel ">
          <div className="content-wrapper bg-gradient-light">
            <Switch>
              <Route exact path="/">
                <Redirect to="/dashboard" />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default FirmMenu;
