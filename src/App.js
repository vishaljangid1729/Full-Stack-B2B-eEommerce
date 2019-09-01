import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { Signup } from './components/signup';

import { First_comp } from './components/first_comp';
import { Second_comp } from './components/second_comp';
import { Third_comp } from './components/third_comp';
import { Profile } from './components/profile';
import ResponsiveDrawer from './components/dash';
import { Home } from './components/home';





function App() {
  
  return (
    <Router>
      <Switch>
        <Route path = "/" exact component = {Home} ></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path = "/company_detail_first" exact component = {First_comp} ></Route>
        <Route path = "/company_detail_second" excet component = {Second_comp} ></Route>
        <Route path = "/company_detail_third" exact component = {Third_comp} ></Route>
        <Route path = "/profile" exact component = { Profile } ></Route>
        <Route path = "/dash" exact component = { ResponsiveDrawer } ></Route>
       
        
      </Switch>
    </Router>
   
  );
}


export default App;
