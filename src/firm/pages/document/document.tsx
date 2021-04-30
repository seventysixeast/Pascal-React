import React, { useState, useEffect, useRef }  from "react";
import { Modal, Tabs, Tab, Button } from "react-bootstrap";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import DocumentGrid from "./documentgrid";
import "../../../assets/css/firmstyle.css";


const Document = () => {

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
                <i className="mdi mdi-plus font-15"></i>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-left animation-expand"
                role="menu"
              >
                <li>
                <a
              className="btn btn-icon-toggle btn-default"
              href="javascript:void(0)"              
            >Add Document</a>
                </li>
                <li className="divider"></li>
                <li>
                  <a className="btn btn-icon-toggle btn-default"
              href="javascript:void(0)">Label Selected</a>
                </li>
                <li>
                  <a className="btn btn-icon-toggle btn-default"
              href="javascript:void(0)">Merge Selected</a>
                </li>
                <li>
                  <a href="">Export CSV</a>
                </li>
                <li className="divider"></li>
                <li>
                  <a
                    className="btn btn-icon-toggle btn-default"
                    href="javascript:void(0)">  
                    <i className="mdi mdi-delete text-danger"></i> Delete
                    Selected
                  </a>
                </li>
              </ul>
            </div>

            <div className="btn-group dropdown" id="filter-btn">
              <button
                data-toggle="dropdown"
                className="btn ink-reaction btn-primary all-people-btn"
                type="button"
                aria-expanded="false"
              >
                All Documents ()
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
            >
              <i className="mdi mdi-settings"></i>
            </a>

            <a
              className="btn btn-icon-toggle btn-default"             
              href="#"
            >
              <i className="mdi mdi-filter"></i>
            </a>
          </div>
        </div>       
      </div>
      <DocumentGrid/>
    </>
  );
}

export default Document;