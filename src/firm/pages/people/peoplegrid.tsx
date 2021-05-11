import React, { useEffect, useState } 
from "react";
import { Modal, Form, Tabs, Tab} from "react-bootstrap";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import Grid from "../../../components/dataTable";
import PeopleService from '../../../services/peopleService';
//import GridLoader from "react-spinners/GridLoader";

const PeopleGrid = ({parentCallback} : any) => {    
  const [columns, setColumns] = useState([] as any[]);
  const [rows, setRows] = useState([] as any[]);
  const [isPersonDetailModal, setIsPersonDetailModal] = useState(false);
  const [activePersonInfoKey, setActivePersonInfoKey] = useState("detail");
  const [isPeopleSettings, setIsPeopleSettings]: any = useState(false);
  const [loading, setLoading]: any = useState(true);
  const [selectedRow, setSelectedRow] = useState([] as string[]);
  //let [filterdata, setFilterdata] : any = useState({FirmCompanyId : '', EmployeeId : ''});

  useEffect(() => {   
    let loginuser: any = localStorage.getItem("user");
    let user = JSON.parse(loginuser); 
  if(user.FirmId > 0 && user.EmployeeId > 0)
    {  
      console.log("logged in firmid = "+user.FirmId);
      console.log("logged in employeeid = "+ user.EmployeeId);
      getPeople(user);      
    }
  else
    {
      console.log("no filter found");
    }
  }, []);
//for headers
function onSelectRowsHandler(row:any) {
  setSelectedRow(
    row.selectedRows.map((item: any) => {
        return item.DocumentId;
    })
  )
  console.log("selected user= "+selectedRow);
  console.log("selected users are here");
}

  function onPersonInfoChange(key: any) {
    setActivePersonInfoKey(key);
  }
  function personDetailModal() {
    return (
      <SlidingPane
        closeIcon={
          <div>
            <i className="mdi mdi-close"></i>
          </div>
        }
        isOpen={isPersonDetailModal}
        title="Profile Info"
        from="right"
        width="600px"
        onRequestClose={() => setIsPersonDetailModal(false)}
      >
        <Tabs
          onSelect={(e) => onPersonInfoChange(e)}
          defaultActiveKey="detail"
          id="uncontrolled-tab-example"
          activeKey={activePersonInfoKey}
        >
          <Tab eventKey="detail" title="Detial">
            Detial
          </Tab>
          <Tab eventKey="activity" title="Activity">
            Activity
          </Tab>
          <Tab eventKey="realted" title="Related">
            Related
          </Tab>
        </Tabs>
      </SlidingPane>
    );
  }
 
  const getPeople= async(filter_data : any)=> {     
    let service = new PeopleService();   
    console.log("filter_data = ",filter_data); 
    var starttime = performance.now(); 
    await service.GetCustomFilter().then((filterdata) => {
 console.log("filterdaata = ",filterdata);
  if(filterdata != null)
  {
      service.GetAllPeople(filter_data).then((data) => { 
        console.log("get people Response", data); 
        var endtime = performance.now();
        var timetaken_request = endtime - starttime;
        console.log("time taken in request = "+timetaken_request);
        var columnarr : any=[]; 
        if(filterdata.Columns !== null && filterdata.Columns !== "" && filterdata.Columns !== "undefined")
        {
          columnarr = filterdata.Columns.split(",");
          console.log("columnarray are "+columnarr);
          var colarr : any = [];
          colarr.push({
              name: "",
              selector: "settings",
              sortable: true,
              width: 50,
              cell: (row: any) => <a href="javascript:void(0)" onClick={() => setIsPeopleSettings(true)}>
              <i className="mdi mdi-settings"></i>
            </a>,
            });

          columnarr.forEach(function(column : any, index : number){
           if(column === "Name")
           {
            colarr.push({name : column, selector : column , sortable : true, cell : (row: any) => <a
              href="javascript:void(0)"
              onClick={() => setIsPersonDetailModal(true)}>{row.PersonName} </a>,});
           }
           else if(column === "Company") 
           {
            colarr.push({name : column, selector : column , sortable : true , cell : (row: any) => <div>{row.CompanyName}</div>,});         
           }   
           else if(column === "TaxID") 
           {
            colarr.push({name : column, selector : column , sortable : true , cell : (row: any) => <div>{row.TaxId}</div>,}); 
           }
           else if(column === "Phone") 
           {
            colarr.push({name : column, selector : column , sortable : true , cell : (row: any) =><div>{row.PhoneNumber}</div>,}); 
           }
           else if(column === "Portal Status") 
           {
            colarr.push({name : column, selector : column , sortable : true , cell : (row: any) => <div>{row.PortalStatus}</div>,}); 
           }
           else if(column === "Spouse Name") 
           {
            colarr.push({name : column, selector : column , sortable : true , cell : (row: any) => <div>{row.SpouseName}</div>,}); 
           }
           else if(column === "Contact Type") 
           {
            colarr.push({name : column, selector : column , sortable : true , cell : (row: any) => <div>{row.ContactType}</div>,}); 
           }
           else if(column === "Labels") 
           {
            colarr.push({name : column, selector : column , sortable : true , cell : (row: any) => <div>{row.SelectedLabelname}</div>,}); 
           }
           else if(column === "Created") 
           {
            colarr.push({name : column, selector : column , sortable : true , cell : (row: any) =><div> {row.AddedOnFormatted}</div>,}); 
           } 
           else if(column === "Modified") 
           {
            colarr.push({name : column, selector : column , sortable : true , cell : (row: any) =><div> {row.LastModifiedOnFormatted}</div>,}); 
           }
           else if(column === "Referred By") 
           {
            colarr.push({name : column, selector : column , sortable : true , cell : (row: any) => <div>{row.ReferredSource}</div>,}); 
           }
           else
           {
            colarr.push({name : column, selector : column , sortable : true});      
           }
          });
          setColumns(colarr);
        }      
        console.log("final columns" ,columns);
      if( data.List !== null &&  data.List !== undefined &&  data.List.length > 0)
      {             
          console.log("list is =",rows);
          setRows(data.List); 
        }
        else{
          console.log("not able to get records");
        }
      });
    }
    });
      setLoading(false);
    }  

  return (
    <> <div className="col-md-12 datatbale-row">
    <Grid columns={columns} rows={rows} progresspending={loading} onSelectedRowsChange={(row : any) => onSelectRowsHandler(row)}/>
  </div>
      {isPeopleSettings ? renderSettingModal() : null}
      {isPersonDetailModal ? personDetailModal() : null}
    </>
  );
 
  function renderSettingModal() {
    return (
      <Modal
        backdrop="static"
        show={isPeopleSettings}
        onHide={() => setIsPeopleSettings(false)}
        className="modal right fade fadeInRight"
      >
        <Modal.Header closeButton>
          <Modal.Title>Invite Clients To Use The Portal</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <Form
            className="form form-validate ng-pristine ng-valid ng-valid-required"
            name="mainForm"
          >
            <div className="form-group">
              <select
                className="form-control ng-pristine ng-untouched ng-valid ng-valid-required"
                name="portal_access"
              >
                <option value="Enable">Enable</option>
                <option value="Disable">Disable</option>
              </select>
              <label className="pt-2">Portal Access*</label>
            </div>
            <div className="form-group">
              <select
                className="form-control"
                name="mail_address"
                id="mail_address"
              >
                <option
                  ng-repeat="item in personemails"
                  className=""
                  value="renurajput100@gmail.com"
                >
                  renurajput100@gmail.com
                </option>
              </select>
              <label className="pt-2">
                Email Address for Username and Invite
              </label>
            </div>

            <button className="btn ink-reaction btn-primary" type="button">
              Update Email Address
            </button>

            <div className="clearfix"></div>
            <h5 className="pt-2 pb-2">Client Can't Log In ?</h5>
            <div className="form-group no-margin ng-scope">
              <a className="btn btn-warning" href="javascript:void(0);">
                Reset Client Access
              </a>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
  
};
export default PeopleGrid;
