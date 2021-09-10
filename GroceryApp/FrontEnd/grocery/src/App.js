import React, { Component } from 'react';
// import axios from 'axios';
import { NavLink } from 'react-router-dom';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import Details from './component/Details';
import Create from './component/Create';
import Edit from './component/Edit';
class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div className="container">
          <Header/>
          <Route path="/" exact component={Home}/>        
          <Route path="/grocery/details/:id" component={Details}/>        
          <Route path="/add" component={Create}/>        
          <Route path="/update/:id" component={Edit}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;