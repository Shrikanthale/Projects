import React,{Component} from 'react'
//import "bootstrap/dist/css/bootstrap.min.css"
import {NavLink} from 'react-router-dom'
import { BrowserRouter , Route} from 'react-router-dom'
import Header from './Component/Header'
import Details from './Component/Details'
import Home from './Component/Home'
import Create from './Component/Create'
import Edit from './Component/Edit'
class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="container">
        <Header/>
        <Route path="/" exact component = {Home}/>
        <Route path="/grocery/getAll/:id" component = {Details}/>
        <Route path="/add"  component = {Create}/>
        <Route path="/updatePurchaseStatus/:id" component = {Edit}/>
      </div>
      </BrowserRouter>
    )
  }
}

export default App