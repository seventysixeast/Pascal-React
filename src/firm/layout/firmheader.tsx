import React from 'react';
import '../firmassets/css/layout.css';
import logourl from "../firmassets/images/logo.png";

const FirmHeader = () => {
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
  return (
    <nav className="border-bottom border-secondary navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row firm_header">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand brand-logo" href="index.html"><img src={logourl} alt="logo" /></a>

        <a className="nav-link" onClick={() => logout()} href="">
              Logout
            </a>
        </div>   
    </nav>
  )
}
export default FirmHeader;