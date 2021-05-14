import React, { useState, useEffect, useRef }  from "react";
import { Modal, Tabs, Tab, Button } from "react-bootstrap";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import PeopleGrid from "./peoplegrid";
import "../../../assets/css/firmstyle.css";
import CreatePerson from "./createperson";
import FirmService from '../../../services/firmService';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
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

const People = () => {
  const [isSettingModal, setIsSettingModal]: any = useState(false);
  const [isFilterModal, setIsFilterModal]: any = useState(false);
  const [isCreateModal, setIsCreateModal]: any = useState(false);
  const [totalcount, setTotalCount] : any = useState(0); 
  const [dropdownList, setDropdownList] : any = useState(); 
  const contactTypes = [{"text": "abc"},{"text": "def"},{"text": "ghi"},{"text": "jkl"},{"text": "mno"}]; 
  const portals = [{"text": "portal1"},{"text": "portal2"},{"text": "portal3"},{"text": "portal4"},{"text": "portal5"}]; 
  const labels = [{"text": "label1"},{"text": "label2"},{"text": "label3"},{"text": "label4"},{"text": "label5"}]; 
  const followedByDtata = [{"text": "Follower1"},{"text": "Follower2"},{"text": "Follower3"},{"text": "Follower4"},{"text": "Follower5"}]; 
	
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
	const openFilter = Boolean(anchorEl2);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
  };  
	const handleMenuFilter = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
	const handleCloseFilter = () => {
    setAnchorEl2(null);
  };

 const callback = ({totalcount} : any) => {
  setTotalCount(totalcount);
}

useEffect(() => {   
  let loginuser: any = localStorage.getItem("user");
  let user = JSON.parse(loginuser); 
  console.log("dropdown list= ",dropdownList);
  if(user.FirmId > 0 && user.EmployeeId > 0 && (dropdownList == null || dropdownList == "undefined"))
    {  
      getdropdowns(user.FirmId);
    }
  });

const getdropdowns =(firmid : any)=>
{
  let firmservice = new FirmService();  
  firmservice.GetDropdownDataForPerson(firmid).then((data) => {
    console.log("getting drop down data");   
    if(data != null)
    {    
      setDropdownList({labelList: data.firmlabels, contacttypeList : data.allcontacttypes, companiesList: data.companies, firmcompanyId: firmid });
    }
  })
}
const handleInputChange = (name : any, value : any) => {

}

const deletePeople = () => {

}

  return (
    <>
      <div className="row align-items-center page-bar" id="proBanner">
        <div className="col-md-6">
          <div className="tools pull-left">
            <div className="btn-group reddot">
              <button
                type="button"
                className="dropdown-toggle btn ink-reaction btn-floating-action btn-danger"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
								aria-controls="grid-option"
              >
                <i className="mdi mdi-plus font-15"></i>
              </button>
							
							<Menu
                id="grid-option"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
							>
              <MenuItem onClick={handleClose} style={{width:"251px"}}><a
									className="btn btn-icon-toggle btn-default"
									href="javascript:void(0)"
									onClick={() => setIsCreateModal(true)}
								>Add Person</a>
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleClose}>
									<a className="btn btn-icon-toggle btn-default"
									href="javascript:void(0)">Label Selected</a>
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<a className="btn btn-icon-toggle btn-default"
									href="javascript:void(0)">Merge Selected
									</a>
								</MenuItem> 
								<MenuItem onClick={handleClose}>
									<a href="" className="btn btn-icon-toggle btn-default">Export CSV</a>
								</MenuItem> 
								<Divider />
								<MenuItem onClick={handleClose}>
									<a
                    className="btn btn-icon-toggle btn-default"
                    href="javascript:void(0)" onClick={() => deletePeople()}>  
                    <i className="mdi mdi-delete text-danger"></i> Delete
                    Selected
                  </a>
								</MenuItem>
							</Menu>

            </div>

            <div className="btn-group dropdown" id="filter-btn">
              <button
                className="btn ink-reaction btn-primary all-people-btn"
                type="button"
                aria-haspopup="true"
                onClick={handleMenuFilter}
                color="inherit"
								aria-controls="grid-filter"
              >
                All People ({totalcount})
                <i className="mdi mdi-caret-down text-default-light"></i>
              </button>
							<Menu
                id="grid-filters"
                anchorEl={anchorEl2}
								anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
								transformOrigin={{ vertical: "bottom", horizontal: "center" }}
                keepMounted
                open={openFilter}
                onClose={handleCloseFilter}
							>
								<MenuItem onClick={handleCloseFilter} >
								<p>System Filters</p>
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleCloseFilter} >
								<p>Your Custom Filters</p>
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleCloseFilter} >
								<p>Create Custom Filter</p>
								</MenuItem>
							</Menu>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="tools pull-right">
            <a
              className="btn btn-icon-toggle btn-default"
              href="javascript:void(0)"
              onClick={() => setIsSettingModal(true)}
            >
              <i className="mdi mdi-settings"></i>
            </a>

            <a
              className="btn btn-icon-toggle btn-default"
              onClick={() => setIsFilterModal(true)}
              href="#"
            >
              <i className="mdi mdi-filter"></i>
            </a>
          </div>
        </div>
        {isSettingModal ? renderSettingTopModal() : null}
        {isFilterModal ? renderFilterModal() : null}
        {isCreateModal ? renderCreateModal() : null}
      </div>
      <PeopleGrid parentCallback={() => callback}/>

    </>
  );

  function renderSettingTopModal() {
    return (
      <SlidingPane
        closeIcon={
          <div>
            <i className="mdi mdi-close"></i>
          </div>
        }
        isOpen={isSettingModal}
        title="Customize Columns"
        from="right"
        width="380px"
        onRequestClose={() => setIsSettingModal(false)}
      >
        <button className="btn ink-reaction btn-primary" type="button">
          Set as default
        </button>
      </SlidingPane>
    );
  }
  function renderFilterModal() {
    return (
      <SlidingPane
      overlayClassName="slider_padding side-filter-list"
        closeIcon={
          <div>
            <i className="mdi mdi-close"></i>
          </div>
        }
        isOpen={isFilterModal}
        title="Filter"
        from="right"
        width="380px"
        onRequestClose={() => setIsFilterModal(false)}        
      >
        <button className="btn ink-reaction btn-primary btn-primary-width" type="button">
          Filter List
        </button>       

        <div className="btn-group check-dropdown btn-primary-width" id="contacttype_filter">
          <button className="btn btn-toggle btn-default btn-block btn-filter-selectbutton" data-toggle="dropdown">Contact type  <i className="mdi mdi-menu-down float-right"></i>
          </button>
          {/* <ul role="menu" className="list dropdown-menu animation-dock" data-sortable="true">
            {
              contactTypes.map((item) => (
                <li className="tile">
                  <div className="checkbox checkbox-styled tile-text">
                    <label>
                      <input
                        type="checkbox"
                        value={item.text}
                      />
                      <span>{item.text}</span>
                    </label>
                  </div>
                </li>
              ))
            }
          </ul> */}
        </div> 
        <div className="btn-group check-dropdown btn-primary-width" id="portal_filter">
          <button className="btn btn-toggle btn-default btn-block btn-filter-selectbutton" data-toggle="dropdown">PORTAL STATUS <i className="mdi mdi-menu-down float-right"></i>
          </button>
          {/* <ul role="menu" className="list dropdown-menu animation-dock" data-sortable="true">
          {
            portals.map((item) => (
              <li className="tile">
                <div className="checkbox checkbox-styled tile-text">
                  <label>
                    <input
                      type="checkbox"
                      value={item.text}
                    />
                    <span>{item.text}</span>
                  </label>
                </div>
              </li>
            ))
          }
          </ul> */}
        </div> 
        <div className="btn-group check-dropdown btn-primary-width" id="labels_filter" >
          <button className="btn btn-toggle btn-default btn-block btn-filter-selectbutton" data-toggle="dropdown">LABELS 
            <i className="mdi mdi-menu-down float-right"></i>
          </button>
          <ul role="menu" className="list dropdown-menu animation-dock" data-sortable="true">
            {
              labels.map((item) => (
                <li className="tile">
                  <div className="checkbox checkbox-styled tile-text">
                    <label>
                      <input
                        type="checkbox"
                        value={item.text}
                      />
                      <span>{item.text}</span>
                    </label>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
        <form className="filter-list-form">                     
            <div className="row col-sm-12 create-person-container">
                <div className="form-group col-sm-12">
                     <label>Company</label>
                     <input type="company" className="form-control" onChange={(e)=> handleInputChange("email", e.target.value)}/>
                </div> 
                <div className="form-group col-sm-12">
                     <label>City</label>
                     <input type="city" className="form-control" onChange={(e)=> handleInputChange("email", e.target.value)}/>
                </div> 
                <div className="form-group col-sm-12">
                     <label>State</label>
                     <input type="state" className="form-control" onChange={(e)=> handleInputChange("email", e.target.value)}/>
                </div> 
                <div className="form-group col-sm-12">
                     <label>Country</label>
                     <input type="country" className="form-control" onChange={(e)=> handleInputChange("email", e.target.value)}/>
                </div> 
                <div className="form-group col-sm-12">
                     <label>Zip</label>
                     <input type="zip" className="form-control" onChange={(e)=> handleInputChange("email", e.target.value)}/>
                </div> 
                <div className="form-group col-sm-12">
                     <label>Referred By</label>
                     <input type="refered" className="form-control" onChange={(e)=> handleInputChange("email", e.target.value)}/>
                </div>       
            </div>
            <div className="btn-group check-dropdown btn-primary-width" id="followedBy_filter" >
              <button className="btn btn-toggle btn-default btn-block btn-filter-selectbutton" data-toggle="dropdown">FOLLOWED BY 
                <i className="mdi mdi-menu-down float-right"></i>
              </button>
              <ul role="menu" className="list dropdown-menu animation-dock" data-sortable="true">
                {
                  followedByDtata.map((item) => (
                    <li className="tile">
                      <div className="checkbox checkbox-styled tile-text">
                        <label>
                          <input
                            type="checkbox"
                            value={item.text}
                          />
                          <span>{item.text}</span>
                        </label>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>            
        </form>       
      </SlidingPane>
    );
  }
  function renderCreateModal(){
    return (
      <SlidingPane
      overlayClassName="slider_padding add-person-header"
        closeIcon={
          <div>
            <i className="mdi mdi-close"></i>
          </div>
        }
        isOpen={isCreateModal}
        title="Add a New Person"
        from="bottom"
        width="100%"
        onRequestClose={() => setIsCreateModal(false)}        
      >
        <CreatePerson data={dropdownList}></CreatePerson>

        </SlidingPane>
    )
  }
};
export default People;
