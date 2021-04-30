import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import FirmHeader from "./firmheader";
import FirmMenu from "./firmmenu"
import Dashboard from '../pages/dashboard';
import People from '../pages/people/people';
import Document from '../pages/document/document';
const FirmLayout = () => {
    return (
        <React.Fragment>
            <FirmHeader />
            <div className="page-body-wrapper firm_layout">
                <FirmMenu />
                <div className="main-panel" >
                    <div className="bg-gradient-light">
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/dashboard" />
                            </Route>
                            <Route path="/dashboard" component={Dashboard} /> 
                            <Route path="/people" component={People} />  
                            <Route path="/document" component={Document} />   
                        </Switch>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default FirmLayout;