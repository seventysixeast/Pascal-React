import React,{ useEffect, useState }  from "react";
import logoUrl from "../../assets/images/logo.png";
import { Modal, Tabs, Tab, Button } from "react-bootstrap";
import '../../assets/css/firmstyle.css';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);
const FirmHeader = () => {
  let user: any = localStorage.getItem("user");
   user = JSON.parse(user);
  const [isModal, setIsModal] : any = useState(false);
	  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
            <li className="firm-header-icons">
              <a
                id="announcments"
                className="btn btn-icon-toggle btn-default beamer_beamerSelector beamerTrigger"
              >
                <i className="mdi mdi-bell"></i>
              </a>
            </li>
            <li className="firm-header-icons">
              <a
                id="announcments"
                className="btn btn-icon-toggle btn-default beamer_beamerSelector beamerTrigger"
              >
                <i className="mdi mdi-bullhorn"></i>
                <div className="beamer_icon active">1</div>
              </a>
            </li>
            <li className="dropdown hidden-xs firm-header-icons">
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
                  className="btn btn-primary btn-raised header-plus-btn"
                  data-toggle="offcanvas"
                  aria-expanded="true"
                >
                  <i className="mdi mdi-plus" aria-hidden="true"></i> NEW
                </a>
              </div>
            </li>
          </ul>

          <ul className="header-nav header-nav-profile">
            <li className="dropdown">
              <div
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <img
                  id="_profileimg"
                  src={process.env.REACT_APP_API_URL+user.ImageUrl}
                  className="borderImgGreen"
                  title="Imap Connected."
									style={{width:"38px"}}
                />
                
              </div>
							<Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                keepMounted
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
								transformOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={open}
                onClose={handleClose}
							>
              <MenuItem onClick={handleClose} style={{width:"251px"}}>
								<a href="/app/settings/profile" className="dropdown">
									<span className="profile-info">
										<Typography variant="h6" component="h6">
											{user.UserFirstName} {" "} {user.UserLastName}
										</Typography>
										(<small className="font-13" style={{color: "rgb(99, 115, 129)"}}>{user.UserRole}</small>)
									</span>
								</a>
							</MenuItem>
								 <Divider />
								 <MenuItem onClick={handleClose} style={{width:"251px"}}><a href="/app/settings/profile" className="dropdown">My profile</a></MenuItem>
								<MenuItem onClick={handleClose}><a href="/app/settings/sociallogins">Social Login</a></MenuItem> 
								<MenuItem onClick={handleClose}><a href="/app/settings/imapsettings">Imap Settings</a></MenuItem>
                <MenuItem onClick={handleClose}><a href="/app/settings/notificationsettings">
                    Email Settings
                  </a></MenuItem> 
								<MenuItem onClick={handleClose}><a href="/app/projects?user=me">My Projects</a></MenuItem>
								<Divider />
                <MenuItem onClick={handleClose}>
									<a href="/" onClick={()=>logout()}>
											<Button variant="outline-success"><i className="mdi mdi-fw mdi-power-off text-danger "></i> Logout</Button>
									</a>
								</MenuItem>
								
              </Menu>
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
      <SlidingPane
        closeIcon={<div><i className="mdi mdi-close"></i></div>}
        isOpen={isModal}
        title="Add New"
        from="right"
        width="300px"
        onRequestClose={() => setIsModal(false)}
      >
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
      </SlidingPane>
  )
}

};
export default FirmHeader;
