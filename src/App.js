import React from 'react'
import Login from './Component/Login'
import "./App.css";
import { useSelector } from 'react-redux';
import { changepass, selectUser } from './Features/userSlice';
import Logout from './Component/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import Task from './Component/Task';

import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ChangePass from './Component/ChangePass';
import Pass from './Component/Pass';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const user = useSelector(selectUser);
  return<div> <Router><div>
    {user ? <Navbar/> : <Login/>}
    
 
    
    
   </div>
   
   <Switch>
     <Route exact path="/home" component={Home}/>
     <Route exact path="/task" component={Task}/>
    
    
     <Route exact path="/changepass" component={ChangePass}/>
   </Switch>
   </Router>
   </div>
   
  ;
};
export default App;
