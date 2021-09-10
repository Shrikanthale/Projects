import React, { Component } from 'react';
import axios from 'axios';
import {setError} from "../Error/Error";
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
class Create extends Component {
  constructor(props){
    super(props);
    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeIsPurchased = this.onChangeIsPurchased.bind(this);
    
    this.state={
        itemName: "",
        isPurchased: "",
    }
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
    const {itemName, isPurchased}=this.state;
    if(this.validate(itemName,isPurchased)){
      const data={
        itemName:itemName,
        isPurchased:isPurchased
      }
      // console.log(data);
      axios.post("/grocery/add",data).then((res)=>{
        if(res.data.success){
          alert("data added successfully");
          this.setState({itemName:"", isPurchased:""});
        }
      });
    }
  }

  render() {
    return  (
      <div className="mt-5">

        <form>
          
          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Item Name</label>
            <div className="col-sm-5">
              <input type="text" className="form-control" id="itemName" 
              value={this.state.itemName}
              onChange={this.onChangeItemName} 
              // onChange={this.handleInputChange} 
              placeholder="Enter Item Name" />
            </div>
            {/* {this.state.errors.itemName && <div className="text-danger">{this.state.errors.itemName}</div>} */}
          </div>


          {/* <CKEditor
              editor={ ClassicEditor }
              data="<p>Hello from CKEditor 5!</p>"
              onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
              } }
              onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
              } }
                onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
              } }
              onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
              } }
          /> */}


          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Is Purchased?</label>
            <div className="col-sm-5">
              <input type="text" className="form-control" id="isPurchased" 
              value={this.state.isPurchased}
              onChange={this.onChangeIsPurchased} 
              // onChange={this.handleInputChange} 
              placeholder="only write true or false " />
            </div>
            {/* {this.state.errors.isPurchased && <div className="text-danger">{this.state.errors.isPurchased}</div>} */}
          </div>

          {/* <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Is Purchased?</label>
            <div className="col-sm-5">
              <select class="form-control"
              value={this.state.isPurchased}
              onChange={this.onChangeIsPurchased} >
                <option >True</option>
                <option>False</option>
              </select>
            </div>
          </div> */}
          

          {/* <fieldset className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">Is Purchased?</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input className="form-check-input" type="radio" 
                  name="Ispurchased" id="true" 
                  onChange={this.onChangeIsPurchased} 
                  // onChange={this.handleInputChange} 
                  value={this.state.isPurchased} />
                  <label className="form-check-label" for="true">
                    True
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" 
                  name="Ispurchased" id="false"
                  onChange={this.onChangeIsPurchased} 
                  // onChange={this.handleInputChange} 
                  value={this.state.isPurchased} />
                  <label className="form-check-label" for="false">
                    False
                  </label>
                </div>
              </div>
            </div>
          </fieldset> */}

          <div className="col-sm-10">
            <button type="submit" className="btn btn-success" onClick={this.onSubmit}><i class="fas fa-check-square mr-2"></i>Add</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Create;

// npm install --save @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic