import React,{ useEffect, useState }  from "react";
import logoUrl from "../../assets/images/logo.png";
import { Modal, Tabs, Tab, Button } from "react-bootstrap";
import '../../assets/css/frimstyle.css';
const FirmHeader = () => {
  const [isModal, setIsModal] : any = useState(false);
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  return (
    <nav className="border-bottom border-secondary navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand brand-logo" href="index.html">
          <img src={logoUrl} alt="logo" />
        </a>
        <a className="navbar-brand brand-logo-mini" href="index.html">
          <img src={logoUrl} alt="logo" />
        </a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span className="mdi mdi-menu"></span>
        </button>

        <div className="navbar-nav navbar-nav-right">
          <a className="btn btn-secondary" href="/app/settings/setupprogress">
            SetUp and Learn <b className="ng-binding">(5)</b>{" "}
          </a>
          <ul className="header-nav header-nav-options">
            <li>
              <div className="btn-group dropdown hidden-xs ng-scope" id="bell">
                <ul className="dropdown-menu animation-expand">
                  <li className="tile-text">
                    <div className="form-group">
                      <button
                        type="button"
                        className="btn ink-reaction btn-primary ng-hide"
                      >
                        View More{" "}
                      </button>
                      <button
                        type="button"
                        className="btn ink-reaction btn-primary ng-hide"
                      >
                        Mark as read
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                id="announcments"
                className="btn btn-icon-toggle btn-default beamer_beamerSelector beamerTrigger"
              >
                <i className="mdi mdi-bell"></i>
              </a>
            </li>
            <li>
              <a
                id="announcments"
                className="btn btn-icon-toggle btn-default beamer_beamerSelector beamerTrigger"
              >
                <i className="mdi mdi-bullhorn"></i>
                <div className="beamer_icon active">1</div>
              </a>
            </li>
            <li className="dropdown hidden-xs">
              <a className="btn btn-icon-toggle btn-default" href="/app/">
                <i className="mdi mdi-home"></i>
              </a>
            </li>

            <li>
              <div
                className="btn-group dropdown custom-nav-item"
                data-original-title=""
                title=""
                data-placement="right"
              >
                <a
                  href="javascript:void(0)"
                  onClick={()=>setIsModal(true)}
                  className="btn btn-primary btn-raised"
                  data-toggle="offcanvas"
                  aria-expanded="true"
                >
                  <i className="mdi mdi-plus" aria-hidden="true"></i> new
                </a>
              </div>
            </li>
          </ul>

          <ul className="header-nav header-nav-profile">
            <li className="dropdown">
              <a
                href="javascript:void(0);"
                className="dropdown-toggle ink-reaction"
                data-toggle="dropdown"
              >
                <img
                  id="_profileimg"
                  src={logoUrl}
                  className="borderImgGreen"
                  title="Imap Connected."
                />
                <span className="profile-info">
                  Dinesh Sharma<small>Administrator</small>
                </span>
              </a>
              <ul className="dropdown-menu">
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
                  <a href="/app/projects?user=me">My Projects</a>
                </li>

                <li className="divider"></li>

                <li>
                  <a href="/" onClick={()=>logout()}>
                    <i className="mdi mdi-fw mdi-power-off text-danger"></i> Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
      {isModal?renderModal():null}
    </nav>
  );

function renderModal(){
  return(
      <Modal
        backdrop="static"
        show={isModal}
        onHide={() => setIsModal(false)}
        className="modal right fade fadeInRight"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
            <ul className="list">
                <li className="tile listpadding"><a href="" >Person</a></li>
                <li className="tile listpadding"><a href="">Company</a></li>
                <hr/>
                <li className="tile listpadding"><a href="javascript:void(0);">Proposal &nbsp;&nbsp;<sup className="style-warning badge ng-hide">Premium</sup></a></li>
                <li className="tile listpadding"><a href="javascript:void(0);">Project</a></li>
                <li className="tile listpadding"><a href="javascript:void(0);">Request &nbsp;&nbsp;<sup className="style-warning badge ng-hide">Premium</sup></a> </li>
                <li className="tile listpadding"><a href="javascript:void(0);">Organizer </a></li>
                <hr/>
                <li className="tile listpadding"><a href="javascript:void(0);">Document </a></li>
                <li className="tile listpadding"><a href="javascript:void(0);">E-signed Return &nbsp;&nbsp;<sup className="style-warning badge ng-hide">Premium</sup></a></li>
            </ul>
        </Modal.Body>
      </Modal>
  )
}

};
export default FirmHeader;
