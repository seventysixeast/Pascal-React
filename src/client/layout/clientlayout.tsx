import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import ClientHeader from "./clientheader";
import ClientMenu from "./clientmenu"
import Dashboard from '../pages/dashboard';
import Login from '../../shared/login';
const ClientLayout = () => {
    return (
        <React.Fragment>
            <Switch>
            </Switch>
            <ClientHeader /> 
            <div className="page-body-wrapper firm_layout">
                <ClientMenu />
                <div className="main-panel" >
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
export default ClientLayout;