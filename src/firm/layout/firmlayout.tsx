import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import FirmHeader from "./firmheader";
import Dashboard from '../pages/dashboard';

const FirmLayout = () => {
    return (
        <React.Fragment>
            <FirmHeader />
            <div className="container-fluid page-body-wrapper firm_layout">
                {/* <Menu></Menu> */}
                <div className="main-panel " >
                    <div className="content-wrapper bg-gradient-light">
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/dashboard" />
                            </Route>
                            <Route path="/dashboard" component={Dashboard} />                            
                        </Switch>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default FirmLayout;