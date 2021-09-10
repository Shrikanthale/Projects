import React, { Component } from 'react';
import axios from 'axios';
import {setError} from "../Error/Error";
class Edit extends Component {
  constructor(props){
    super(props);
    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeIsPurchased = this.onChangeIsPurchased.bind(this);
    
    this.state={
        itemName: "",
        isPurchased: "",
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:8008/grocery/details/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          itemName:res.data.grocery.itemName, //retrieve data from grocery db
          isPurchased:res.data.grocery.isPurchased
        });
      }
    });
  }

  onChangeItemName(e) {
    this.setState({
      itemName: e.target.value,
    });
  }
  
  onChangeIsPurchased(e) {
    this.setState({
      isPurchased: e.target.value,
    });
  }

  handleInputChange=(e)=>{
    const {name, value}=e.target;
    this.setState({
      ...this.state,
      [name]:value,
    });
  }

  validate=(itemName,isPurchased)=>{
    const errors=setError(itemName,isPurchased);
    this.setState({errors:errors});
    return Object.values(errors).every((err)=>err==="");
  }

  onSubmit=(e)=>{
    e.preventDefault();
    const id = this.props.match.params.id;
    const {itemName, isPurchased}=this.state;
    if(this.validate(itemName,isPurchased)){
      const data={
        itemName:itemName,
        isPurchased:isPurchased
      }
      // console.log(data);
      axios.put(`http://localhost:8008/grocery/update/${id}`,data).then((res)=>{
        if(res.data.success){
          alert("data updated successfully");
          // this.setState({itemName:"", isPurchased:""});
        }
      });
    }
  }

  render() {
    return  (
      <div className="mt-5">
          <h1 className="h3 mb-3 font-weight-normal">Edit Grocery Item</h1>
        <form>
          
          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Item Name</label>
            <div className="col-sm-5">
              <input type="text" className="form-control" id="itemName" 
              value={this.state.itemName}
              onChange={this.onChangeItemName}  
              placeholder="Enter Item Name" />
            </div>
          </div>

          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Is Purchased?</label>
            <div className="col-sm-5">
              <input type="text" className="form-control" id="isPurchased" 
              value={this.state.isPurchased}
              onChange={this.onChangeIsPurchased}  
              placeholder="only write true or false " />
            </div>
          </div>

          <div className="col-sm-10">
            <button type="submit" className="btn btn-success" onClick={this.onSubmit}><i class="fas fa-check-square mr-2"></i>Update</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Edit;
