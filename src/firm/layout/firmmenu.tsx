import React from "react";
import { Redirect, Route, Switch,Link } from "react-router-dom";

const FirmMenu = () => {
  return (
    <React.Fragment>
 <nav
      className="border-right-lg border-secondary sidebar sidebar-offcanvas"
      id="sidebar"
      style={{
        marginTop: 0,
        marginLeft: 0,
        border: "unset",
      }}
    >
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <i className="mdi mdi-home menu-icon"></i>
            <span className="menu-title">Dashboard</span>
            
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/people">
            <i className="mdi mdi-account-multiple menu-icon"></i>
            <span className="menu-title">People</span>
            
          </Link>
        </li>
      </ul>
    </nav>
    </React.Fragment>
  );
};
export default FirmMenu;
