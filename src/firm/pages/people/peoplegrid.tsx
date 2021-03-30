import React, { useEffect, useState } from "react";
import { Modal, Form, Tabs, Tab, Button } from "react-bootstrap";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import Grid from "../../../components/dataTable";

const PeopleGrid = () => {
  const [columns, setColumns] = useState([
    {
      name: "",
      selector: "settings",
      sortable: true,
      width: 50,
    },
    {
      name: "Name",
      selector: "PersonName",
      sortable: true,
    },
    {
      name: "Company",
      selector: "CompanyName",
      sortable: true,
    },
    {
      name: "TexID",
      selector: "TaxId",
      sortable: true,
    },
    {
      name: "Spouse Name",
      selector: "SpouseName",
      sortable: true,
    },
    {
      name: "TexID",
      selector: "TexID",
      sortable: true,
    },
    {
      name: "Email",
      selector: "EmailAddress",
      sortable: true,
    },
    {
      name: "Phone",
      selector: "PhoneNumber",
      sortable: true,
    },
    {
      name: "Contact Type",
      selector: "ContactType",
      sortable: true,
    },
    {
      name: "Portal Status",
      selector: "PortalStatus",
      sortable: true,
    },
    {
      name: "Created",
      selector: "AddedOnFormatted",
      sortable: true,
    },
    {
      name: "Modified",
      selector: "ContactType",
      sortable: true,
    },
    {
      name: "City",
      selector: "City",
      sortable: true,
    },
    {
      name: "State",
      selector: "State",
      sortable: true,
    },
    {
      name: "Country",
      selector: "Country",
      sortable: true,
    },
    {
      name: "Zipcode",
      selector: "Zip",
      sortable: true,
    },
    {
      name: "Referred By",
      selector: "ReferredBy",
      sortable: true,
    },
    {
      name: "Country",
      selector: "Country",
      sortable: true,
    },
    {
      name: "Zipcode",
      selector: "Zip",
      sortable: true,
    },
    {
      name: "Referred By",
      selector: "ReferredBy",
      sortable: true,
    },
    {
      name: "First",
      selector: "CustomValue1",
      sortable: true,
    },
    {
      name: "Second",
      selector: "CustomValue2",
      sortable: true,
    },
    {
      name: "Third",
      selector: "CustomValue3",
      sortable: true,
    },
    {
      name: "Fourth",
      selector: "CustomValue4",
      sortable: true,
    },
  ] as any);

  const [rows, setRows] = useState([] as any[]);
  const [isPersonDetailModal, setIsPersonDetailModal] = useState(false);
  const [activePersonInfoKey, setActivePersonInfoKey] = useState("detail");
  const [isPeopleSettings, setIsPeopleSettings]: any = useState(false);
  useEffect(() => {
    getPeople();
  }, []);

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

  function getPeople() {
    const peoples: any = [
      {
        PeopleId: 15291,
        Initials: "YH",
        Color: "#7DA61D",
        CompanyName: null,
        PersonName: "yg huh",
        FirstName: "yg",
        LastName: "huh",
        CompaniesArr: null,
        EmailArr: null,
        PhoneArr: null,
        EmailAddress: null,
        PhoneNumber: null,
        ContactType: "Client",
        Title: null,
        ImageUrl: "",
        FacebookUrl: null,
        TwitterUrl: null,
        KloutUrl: null,
        LinkedInUrl: null,
        GooglePlusUrl: null,
        GravatarUrl: null,
        Gravatarphoto: null,
        FacebookPhoto: null,
        TwitterPhoto: null,
        Googleplusphoto: null,
        Linkedinphoto: null,
        Kloutphoto: null,
        Description: null,
        City: "CHANDIGARH",
        Street: null,
        State: "Chandigarh",
        Zipcode: "160047",
        Country: null,
        ContactTypeId: null,
        ReferredBy: null,
        PersonReferred: null,
        ReferredSource: "",
        ReferredSourceCount: 1,
        DOB: "",
        DateOfBirth: null,
        SpouseName: "ghghj hgjhgj",
        SpouseFirstName: "ghghj",
        SpouseLastName: "hgjhgj",
        SpouseEmail: null,
        AddedOn: "/Date(1590764409000)/",
        LastModifiedBy: "Renu Thakur  rajpooooooooooot",
        LastModifiedOn: "/Date(1616521904000)/",
        CreatedBy: "testeast74@gmail.com",
        PortalAccess: "Enable",
        IsRegistered: false,
        RegisteredOnFormatted: null,
        TaxId: null,
        VerificationCode: null,
        LastModifiedOnFormatted: "2021/03/23",
        AddedOnFormatted: "2020/05/29",
        Isfollowing: false,
        followingEmployees: "0",
        SpouseDOB: null,
        SpouseTaxId: null,
        InviteCount: null,
        PortalStatus: "No Email Address",
        ProfileId: null,
        CompanyId: null,
        OtherEmails: null,
        OtherCompanies: null,
        SelectedLabelname: null,
        selectedlabel: null,
        SelectedLabelsList: null,
        CSVPeopleId: null,
        IntuitCustomerId: null,
        CustomValue1: null,
        CustomValue2: null,
        CustomValue3: null,
        CustomValue4: null,
        CustomValue5: null,
        CustomValue6: null,
        CustomValue7: null,
        CustomValue8: null,
        CustomValue9: null,
        CustomValue10: null,
        OtherEmailArr: null,
      },
    ];
    peoples.forEach(function (row: any, index: number) {
      row["PersonName"] = (
        <a
          href="javascript:vaoid(0)"
          onClick={() => setIsPersonDetailModal(true)}
        >
          {row.PersonName}
        </a>
      );
      row["settings"] = (
        <a href="javascript:void(0)" onClick={() => setIsPeopleSettings(true)}>
          <i className="mdi mdi-settings"></i>
        </a>
      );
    });
    setRows(peoples);
  }
  return (
    <>
      <div className="col-md-12 datatbale-row">
        <Grid columns={columns} rows={rows} title="People" />
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
