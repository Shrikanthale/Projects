import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          grocery: [] //posts:[]
        }
      }
      componentDidMount() {
        this.getPosts();
      }
    
      getPosts() {
        //("/posts")
        axios.get("http://localhost:1010/grocery").then(res => { //backend request use
          if (res.data.success) {
            this.setState({
              grocery: res.data.grocery,
            });
            // console.log("grocery: ", this.state.grocery);
          }
        });
      }

      filterContent(grocery, searchTerm){
        const result=grocery.filter((grocery)=>grocery.itemName.includes(searchTerm));
        this.setState({grocery:result});
      }

      handleTextSearch=(event)=>{
        //  console.log(event.currentTarget.value);
        const searchTerm= event.currentTarget.value;
        axios.get("http://localhost:1010/grocery").then(res => { 
          if (res.data.success) {
            this.filterContent(res.data.grocery, searchTerm)
          }
        });
      }

      onDelete=(id)=>{
        // console.log(id);
        axios.delete(`http://localhost:1010/grocery/deleteGroceryItem/${id}`).then((res)=>{
          alert(res.data.itemName + " Item Deleted successfully");
          this.getPosts();
        });
      }

      render() {
        return (
          <div className="container">
          
          <div className="row">
	          <div className ="col-lg-9 mt-2 mb-2">
		          <h4>All Posts</h4>
	          </div>
	          <div className ="col-lg-3 mt-2 mb-2">
		          <input className ="form-control" type="search"
			          placeholder="Search item here" name="searchTerm"
                onChange={this.handleTextSearch} />
          	</div>
          </div>
	
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Is Purchase?</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.grocery.map((post,index)=>(
                <tr>
                  <th scope="row">{index}</th>
                  <td>{post.itemName}</td>
                  {/* <td><a href={`/grocery/${post._id}`}>{post.itemName}</a></td> */}
                  <td>{post.isPurchased}</td>
                  <td>
                    <a className="btn btn-light" href={`/update/${post._id}`}> 
                    {/* react App.js path */}
                      <i className="fas fa-edit"></i>
                    </a>
                    <a className="btn btn-light ml-1" href="#" onClick={()=>this.onDelete(post._id)}>
                    <i className="fas fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
            
            <button className="btn btn-dark"><a href="/add">Add New Grocery</a></button>
          </div>
        )
      }
}

export default Home;


