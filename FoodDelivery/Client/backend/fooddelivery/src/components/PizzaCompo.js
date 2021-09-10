import React, {useState} from 'react';
import {Card, Button, Row, Col } from 'react-bootstrap';

function PizzaCompo({pizza}){
    const [quantity,setQuantity]=useState(1); //set value is 1
    return (
        <div>
           <Card style={{ width: '18rem', marginTop:"30px" }}>
            <Card.Img variant="top" src={pizza.image} style={{height:"180px"}} />
            <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>{pizza.description}</Card.Text>
                {/* <Row>
                    <Col>
                        <h6>Quantity</h6>
                        <select onChange={event=>setQuantity(event.target.value)} >
                            {[...Array(10).keys()].map((v,i)=>(
                                <option value={i+1}>{i+1}</option>
                            ))}
                        </select>
                    </Col>
                </Row> */}
                <Card.Text>{pizza.price}</Card.Text>
                <Button variant="danger">Order Now</Button>
            </Card.Body>
            </Card> 
        </div>
    )
}

export default PizzaCompo