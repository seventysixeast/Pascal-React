import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import FirmHeader from "./firmheader";
import FirmMenu from "./firmmenu"
import Dashboard from '../pages/dashboard';
import People from '../pages/peoplegrid';
const FirmLayout = () => {
    return (
        <React.Fragment>
            <FirmHeader />
            <div className="container-fluid page-body-wrapper firm_layout">
                <FirmMenu /> 
                <div className="main-panel" >
                    <div className="content-wrapper bg-gradient-light page-content">
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/dashboard" />
                            </Route>
                            <Route path="/dashboard" component={Dashboard} /> 
                            <Route path="/people" component={People} />                             
                        </Switch>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default FirmLayout;