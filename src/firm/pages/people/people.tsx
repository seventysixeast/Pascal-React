import React, { useEffect, useState } from "react";
import { Modal, Form, Tabs, Tab, Button } from "react-bootstrap";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import Grid from "./peoplegrid";

const People = () => {
  const [isSettingModal, setIsSettingModal]: any = useState(false);
  const [isFilterModal, setIsFilterModal]: any = useState(false);
  return (
    <>
      <div className="row align-items-center page-bar" id="proBanner">
        <div className="col-md-6">
          <div className="tools pull-left">
            <div className="btn-group reddot">
              <button
                type="button"
                className="dropdown-toggle btn ink-reaction btn-floating-action btn-danger"
                data-toggle="dropdown"
                aria-expanded="false"
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
      </div>
      <Grid />
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
        width="400px"
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
        closeIcon={
          <div>
            <i className="mdi mdi-close"></i>
          </div>
        }
        isOpen={isFilterModal}
        title="Filter List"
        from="right"
        width="400px"
        onRequestClose={() => setIsFilterModal(false)}
      >
        <button className="btn ink-reaction btn-primary" type="button">
          filter
        </button>
      </SlidingPane>
    );
  }
};
export default People;
