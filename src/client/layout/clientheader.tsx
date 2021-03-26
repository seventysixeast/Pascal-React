import React from "react";
import logoUrl from "../../assets/images/logo.png";
const ClientHeader = () => {
  let user: any = localStorage.getItem("user");
  user = JSON.parse(user);
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
          <ul className="header-nav header-nav-options">
            <li className="dropdown hidden-xs">
              <a className="btn btn-icon-toggle btn-default" href="/">
                <i className="mdi mdi-home"></i>
              </a>
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
                  src={process.env.REACT_APP_API_URL+user.ImageUrl}
                  className="borderImgGreen"
                  title="Imap Connected."
                />
                <span className="profile-info">
                  {user.UserFirstName} {" "} {user.UserLastName}<small>{user.UserRole}</small>
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
    </nav>
  );
};
export default ClientHeader;