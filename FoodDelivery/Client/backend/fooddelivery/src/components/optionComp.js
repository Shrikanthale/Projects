import React from 'react';
import {Card, Button } from 'react-bootstrap';

function OptionCompo({opts}){
    return (
        <div>
           <Card style={{ width: '18rem', marginTop:"30px" }}>
            <Card.Img variant="top" src={opts.image} style={{height:"180px"}} />
            <Card.Body>
                <Card.Title>{opts.name}</Card.Title>
                <Button variant="success">Next</Button>
            </Card.Body>
            </Card> 
        </div>
    )
}

export default OptionCompo;