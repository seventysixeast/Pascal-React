import React from 'react';
import '../firmassets/css/layout.css';
import logoUrl from "../../assets/images/logo.png";
const FirmHeader = () => {
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }


  return (
    <header id="header">
      <div className="headerbar">
         {/*Brand and toggle get grouped for better mobile display*/}
        <div className="headerbar-left">
          <ul className="header-nav header-nav-options">
            <li className="header-nav-brand">
              <div className="brand-holder">
                <a href="/app/">
                  <img
                    src={logoUrl}
                    id="_logoUrl"
                    style={{ borderRadius: "inherit" }}
                  />
                </a>
              </div>
            </li>
            <li>
              <a
                className="navbar-toggler navbar-toggler-right btn btn-icon-toggle btn-default menubar-toggle"
                id="threelines"
                data-toggle="offcanvas"
                href="javascript:void(0);"
              >
                <i className="fa fa-bars"></i>
              </a>
            </li>
            <li>
              <a className="btn btn-default" href="/app/settings/setupprogress">
                SetUp and Learn{" "}
                <b
                  style={{
                    color: "red",
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                ></b>
              </a>
            </li>
          </ul>
        </div>
        {/*Collect the nav links, forms, and other content for toggling*/}
        <div className="headerbar-right">
          <ul className="header-nav header-nav-options">
            <li>
              <div className="btn-group dropdown hidden-xs" id="bell">
                <a
                  className="btn btn-icon-toggle btn-default"
                  href="javascript:void(0);"
                >
                  <i className="fa fa-bell"></i>
                  <sup className="badge style-danger">8</sup>
                </a>
                <ul className="dropdown-menu animation-expand">
                  <li className="dropdown-header">No Notifications</li>
                  <li className="dropdown-header">Today's messages</li>
                  <li className="tile">
                    <div className="alert alert-callout alert-warning">
                      <table style={{ width: "435px" }}>
                        <tr>
                          <td width="10%">
                            <div
                              className="checkbox checkbox-styled tile-text"
                              style={{ marginBottom: "-8px" }}
                            >
                              <label>
                                <input type="checkbox" />
                                <span></span>
                              </label>
                            </div>
                          </td>
                          <td width="73%">
                            <a
                              className=""
                              style={{
                                textDecoration: "none",
                                display: "block",
                              }}
                              href="javascript:void(0);"
                            >
                              <small></small>
                            </a>
                          </td>
                          <td>
                            <small></small>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </li>
                  <li className="dropdown-header">This week's messages</li>
                  <li className="tile">
                    <div className="alert alert-callout alert-warning">
                      <table style={{ width: "435px" }}>
                        <tr>
                          <td style={{ width: "10%" }}>
                            <div
                              className="checkbox checkbox-styled tile-text"
                              style={{ marginBottom: "-8px" }}
                            >
                              <label>
                                <input type="checkbox" />
                              </label>
                            </div>
                          </td>
                          <td style={{ width: "73%" }}>
                            <a
                              className=""
                              style={{
                                textDecoration: "none",
                                display: "block",
                              }}
                              href="javascript:void(0)"
                            >
                              <small></small>
                            </a>
                          </td>
                          <td>
                            <small></small>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </li>
                  <li className="dropdown-header">Last week's messages</li>
                  <li className="tile">
                    <div className="alert alert-callout alert-warning">
                      <table style={{ width: "435px" }}>
                        <tr>
                          <td width="10%">
                            <div
                              className="checkbox checkbox-styled tile-text"
                              style={{ marginBottom: "-8px" }}
                            >
                              <label>
                                <input type="checkbox" />
                              </label>
                            </div>
                          </td>
                          <td width="73%">
                            <a
                              className=""
                              style={{
                                textDecoration: "none",
                                display: "block",
                              }}
                              href="javascript:void(0);"
                            >
                              <small></small>
                            </a>
                          </td>
                          <td>
                            <small></small>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </li>
                  <li className="dropdown-header">this month's messages</li>
                  <li>
                    <a
                      className="alert alert-callout alert-warning"
                      href="javascript:void(0);"
                    >
                      <table style={{ width: "435px" }}>
                        <tr>
                          <td style={{ width: "10%" }}>
                            <div
                              className="checkbox checkbox-styled tile-text"
                              style={{ marginBottom: "-8px" }}
                            >
                              <label>
                                <input type="checkbox" />
                              </label>
                            </div>
                          </td>
                          <td style={{ width: "73%" }}>
                            <small ng-bind-html="item.RecordName"></small>
                          </td>
                          <td>
                            <small></small>
                          </td>
                        </tr>
                      </table>
                    </a>
                  </li>
                  <li className="dropdown-header">last month's messages</li>
                  <li>
                    <a
                      className="alert alert-callout alert-warning"
                      href="javascript:void(0);"
                    >
                      <table style={{ width: "435px" }}>
                        <tr>
                          <td width="10%">
                            <div
                              className="checkbox checkbox-styled tile-text"
                              style={{ marginBottom: "-8px" }}
                            >
                              <label>
                                <input type="checkbox" />
                              </label>
                            </div>
                          </td>
                          <td style={{ width: "73%" }}>
                            <small></small>
                          </td>
                          <td>
                            <small></small>
                          </td>
                        </tr>
                      </table>
                    </a>
                  </li>
                  <li className="tile-text" style={{ padding: "0px 10px" }}>
                    <div className="form-group">
                      <button
                        type="button"
                        className="btn ink-reaction btn-primary"
                        style={{ float: "left" }}
                      >
                        View More{" "}
                        <img
                          ng-show="shownotificationloader"
                          src="/Content/assets/img/loading.gif"
                          width="20"
                          height="20"
                        />
                      </button>
                      <button
                        type="button"
                        className="btn ink-reaction btn-primary"
                        style={{ float: "right" }}
                      >
                        Mark as read
                      </button>
                    </div>
                  </li>
                  //
                  <li>
                    <a href="../../../html/pages/login.html">
                      Mark as read{" "}
                      <span className="pull-right">
                        <i className="fa fa-arrow-right"></i>
                      </span>
                    </a>
                  </li>
                </ul>
                {/*end .dropdown-menu*/}
              </div>
            </li>
            {/*end .dropdown*/}
            <li>
              <a
                id="announcments"
                className="btn btn-icon-toggle btn-default"
                href="javascript:void(0);"
              >
                <i className="fa fa-bullhorn"></i>
              </a>
            </li>
            <li className="dropdown hidden-xs">
              <a className="btn btn-icon-toggle btn-default" href="/app/">
                <i className="fa fa-home"></i>
              </a>
            </li>
            <li className="dropdown hidden-xs">
              <div className="btn-group dropdown hidden-xs" id="heart">
                <a
                  className="btn btn-icon-toggle btn-default"
                  href="javascript:void(0);"
                >
                  <i className="fa fa-heart"></i>
                  <sup className="badge style-danger">2</sup>
                </a>
              </div>
            </li>
            <li>
              <div
                className="btn-group dropdown custom-nav-item"
                title=""
                data-placement="right"
              >
                <a
                  href=""
                  className="btn btn-primary btn-raised"
                  aria-expanded="true"
                >
                  <i className="fa fa-plus" aria-hidden="true"></i> new
                </a>
              </div>
            </li>
          </ul>
          {/*end .header-nav-options*/}
          <ul className="header-nav header-nav-profile">
            <li className="dropdown">
              <a
                href="javascript:void(0);"
                className="dropdown-toggle ink-reaction"
                data-toggle="dropdown"
              >
                <img id="_profileimg" src={logoUrl} />
                <span className="profile-info">
                  Dinesh sharma
                  <small>Admin</small>
                </span>
              </a>
              <ul className="dropdown-menu animation-dock">
                <li>
                  <a href="/app/settings/profile">My profile</a>
                </li>
                <li>
                  <a href="/app/settings/sociallogins">Social Login</a>
                </li>
                <li>
                  <a href="/app/settings/imapsettings">Imap Settings</a>
                </li>
                <li>
                  <a href="/app/settings/notificationsettings">
                    Email Settings
                  </a>
                </li>
                <li className="divider"></li>

                <li>
                  <a
                    href="javascript:void(0);"
                    data-toggle="modal"
                    data-target="#modal_featurecomingsoon"
                  >
                    Pending appointments
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    data-toggle="modal"
                    data-target="#modal_featurecomingsoon"
                  >
                    My appointments
                  </a>
                </li>
                <li>
                  <a href="/app/projects?user=me">My Projects</a>
                </li>
                <li>
                  <a href="/app/tasks?user=me">My Tasks</a>
                </li>
                <li className="divider"></li>
                <li>
                  <a
                    href="javascript:void(0);"
                    data-toggle="modal"
                    data-target="#modal_register-cell"
                  >
                    Register Cell Phone
                  </a>
                </li>

                <li>
                  <a href="/app/switchaccount">
                    <i className="fa fa-fw fa-users text-default-light"></i>{" "}
                    Switch Account
                  </a>
                </li>

                <li>
                  <a href="/app/logout">
                    <i className="fa fa-fw fa-power-off text-danger"></i> Logout
                  </a>
                </li>
              </ul>
              {/*end .dropdown-menu*/}
            </li>
            {/*end .dropdown*/}
          </ul>
          {/*end .header-nav-profile*/}
        </div>{" "}
        {/*end #header-navbar-collapse*/}
      </div>
    </header>
  );
}
export default FirmHeader;