import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <React.Fragment>
            
            <div className="container-fluid page-body-wrapper">
                
                <div className="main-panel " >
                    <div className="content-wrapper bg-gradient-light">
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/dashboard" />
                            </Route>
                          
                        </Switch>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
//export default AdminLayout;