import React, { Component } from 'react';
import axios from 'axios';

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grocery: {},
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:8008/grocery/details/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          grocery: res.data.grocery
        });
         console.log("grocery: ", this.state.grocery)
      }
    });
  }
  render() {
    const { itemName, isPurchased } = this.state.grocery;
    return (
      <div>
        <dl className="row">
          <dt className="col-sm-2">Item Name</dt>
          <dd className="col-sm-10">{itemName}</dd>

          <dt className="col-sm-2">Is Purchase?</dt>
          <dd className="col-sm-10">
            <p>{isPurchased}</p>
          </dd>
        </dl>
      </div>
    );
  }
}

export default Details;