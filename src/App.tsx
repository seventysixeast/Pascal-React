import React , { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch,useRouteMatch } from 'react-router-dom';
import Login from './shared/login';

const App =() =>{
  const [token, setToken] = useState();
 
  return (    
      <Switch> 
         <Login/>
      </Switch>    
  );
}
export default App;
