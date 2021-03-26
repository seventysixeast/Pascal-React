import React, { useEffect, useState } from "react";
import { Modal, Tabs, Tab, Button } from "react-bootstrap";
import Grid from "../../components/dataTable";

const People = () => {
  const [isSettingModal, setIsSettingModal]: any = useState(false);
  const [isFilterModal, setIsFilterModal]: any = useState(false);
  const [columns, setColumns] = useState([
  {
    name: "Name",
    selector: "PersonName",
    sortable: true
  },
  {
    name: "Company",
    selector: "CompanyName",
    sortable: true
  },
  {
    name: "TexID",
    selector: "TaxId",
    sortable: true
  },
  {
    name: "Spouse Name",
    selector: "SpouseName",
    sortable: true
  },
  {
    name: "TexID",
    selector: "TexID",
    sortable: true
  },
  {
    name: "Email",
    selector: "EmailAddress",
    sortable: true
  },
  {
    name: "Phone",
    selector: "PhoneNumber",
    sortable: true
  },
  {
    name: "Contact Type",
    selector: "ContactType",
    sortable: true
  },
   {
    name: "Portal Status",
    selector: "PortalStatus",
    sortable: true
  },
  {
    name: "Created",
    selector: "AddedOnFormatted",
    sortable: true
  },
  {
    name: "Modified",
    selector: "ContactType",
    sortable: true
  },
  {
    name: "City",
    selector: "City",
    sortable: true
  },
  {
    name: "State",
    selector: "State",
    sortable: true
  },
  {
    name: "Country",
    selector: "Country",
    sortable: true
  },
  {
    name: "Zipcode",
    selector: "Zip",
    sortable: true
  },
  {
    name: "Referred By",
    selector: "ReferredBy",
    sortable: true
  },
  {
    name: "Country",
    selector: "Country",
    sortable: true
  },
  {
    name: "Zipcode",
    selector: "Zip",
    sortable: true
  },
  {
    name: "Referred By",
    selector: "ReferredBy",
    sortable: true
  },
  {
    name: "First",
    selector: "CustomValue1",
    sortable: true
  },
  {
    name: "Second",
    selector: "CustomValue2",
    sortable: true
  },
  {
    name: "Third",
    selector: "CustomValue3",
    sortable: true
  },
  {
    name: "Fourth",
    selector: "CustomValue4",
    sortable: true
  }
] as any[]);

const [rows, setRows] = useState([{"PeopleId":15291,
"Initials":"YH",
"Color":"#7DA61D",
"CompanyName":null,
"PersonName":"yg huh",
"FirstName":"yg","LastName":"huh",
"CompaniesArr":null,
"EmailArr":null,
"PhoneArr":null,
"EmailAddress":null,
"PhoneNumber":null,
"ContactType":"Client",
"Title":null,"ImageUrl":"",
"FacebookUrl":null,
"TwitterUrl":null,
"KloutUrl":null,
"LinkedInUrl":null,
"GooglePlusUrl":null,
"GravatarUrl":null,
"Gravatarphoto":null,
"FacebookPhoto":null,
"TwitterPhoto":null,
"Googleplusphoto":null,
"Linkedinphoto":null,
"Kloutphoto":null,
"Description":null,
"City":"CHANDIGARH",
"Street":null,
"State":"Chandigarh",
"Zipcode":"160047",
"Country":null,
"ContactTypeId":null,
"ReferredBy":null,
"PersonReferred":null,
"ReferredSource":"",
"ReferredSourceCount":1,
"DOB":"",
"DateOfBirth":null,
"SpouseName":"ghghj hgjhgj",
"SpouseFirstName":"ghghj",
"SpouseLastName":"hgjhgj",
"SpouseEmail":null,
"AddedOn":"\/Date(1590764409000)\/",
"LastModifiedBy":"Renu Thakur  rajpooooooooooot",
"LastModifiedOn":"\/Date(1616521904000)\/",
"CreatedBy":"testeast74@gmail.com",
"PortalAccess":"Enable",
"IsRegistered":false,
"RegisteredOnFormatted":null,
"TaxId":null,
"VerificationCode":null,
"LastModifiedOnFormatted":"2021/03/23",
"AddedOnFormatted":"2020/05/29",
"Isfollowing":false,
"followingEmployees":"0",
"SpouseDOB":null,
"SpouseTaxId":null,
"InviteCount":null,
"PortalStatus":"No Email Address",
"ProfileId":null,
"CompanyId":null,
"OtherEmails":null,
"OtherCompanies":null,
"SelectedLabelname":null,
"selectedlabel":null,
"SelectedLabelsList":null,
"CSVPeopleId":null,
"IntuitCustomerId":null,
"CustomValue1":null,
"CustomValue2":null,
"CustomValue3":null,
"CustomValue4":null,
"CustomValue5":null,
"CustomValue6":null,
"CustomValue7":null,
"CustomValue8":null,
"CustomValue9":null,
"CustomValue10":null,
"OtherEmailArr":null
}] as any[]);


  return (
    <>
      <div className="row align-items-center page-bar" id="proBanner">
        <div className="col-md-6">
          <div className="tools pull-left">
            <div className="btn-group reddot">
              <button
                type="button"
                className="dropdown-toggle btn ink-reaction btn-floating-action btn-danger"
                data-toggle="dropdown" aria-expanded="false"
              >
                <i className="mdi mdi-plus"></i>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-left animation-expand"
                role="menu"
              >
                <li>
                  <a href="">Add Person</a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="">Label Selected</a>
                </li>
                <li>
                  <a href="">Merge Selected</a>
                </li>
                <li>
                  <a href="">Export CSV</a>
                </li>
                <li className="divider"></li>
                <li>
                  <a
                    href=""
                    data-toggle="modal"
                    data-target="#deleteConfirmModal"
                  >
                    <i className="mdi mdi-delete text-danger"></i> Delete
                    Selected
                  </a>
                </li>
              </ul>
            </div>

            <div className="btn-group dropdown" id="filter-btn">
              <button
                data-toggle="dropdown"
                className="btn ink-reaction btn-primary"
                type="button"
                aria-expanded="false"
              >
                All People (){" "}
                <i className="mdi mdi-caret-down text-default-light"></i>
              </button>
              <ul className="dropdown-menu animation-expand">
                <li className="nested-list">
                  <p>System Filters</p>
                </li>
                <li className="divider"></li>

                <li className="divider"></li>
                <li className="nested-list">
                  <p>Your Custom Filters</p>
                </li>
                <li className="divider"></li>
                <li className="divider"></li>
                <li>
                  <a href="#">Create Custom Filter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {/*<form className="navbar-search ng-pristine" role="search" id="search">
                        <input type="text" className="form-control" name="contactSearch" />
                        <input id="search_submit" value="Rechercher" type="submit" />
                    </form>*/}
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
        {isSettingModal ? renderSettingModal() : null}
        {isFilterModal ? renderFilterModal() : null}
      </div>
        <div className="col-md-12 datatbale-row">
          <Grid
            columns={columns}
            rows={rows}
            title="People"
          />
        </div>
    </>
  );

  function renderSettingModal() {
    return (
      <Modal
        backdrop="static"
        show={isSettingModal}
        onHide={() => setIsSettingModal(false)}
        className="modal right fade fadeInRight"
      >
        <Modal.Header closeButton>
          <Modal.Title>Customize Columns</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <button className="btn ink-reaction btn-primary" type="button">
            Set as default
          </button>
        </Modal.Body>
      </Modal>
    );
  }
  function renderFilterModal() {
    return (
      <Modal
        backdrop="static"
        show={isFilterModal}
        onHide={() => setIsFilterModal(false)}
        className="modal right fade fadeInRight"
      >
        <Modal.Header closeButton>
          <Modal.Title>Filter List</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-white">
          <button className="btn ink-reaction btn-primary" type="button">
            filter
          </button>
        </Modal.Body>
      </Modal>
    );
  }
};
export default People;
