import React from 'react';
import pizzas from '../pizza-data.js';
import {Container, Row, Col} from 'react-bootstrap';
import PizzaCompo from '../components/PizzaCompo';

function Pizza(){
    return (
        <div>
            <Container>
                <Row>
                    {/* iterate pizza data here */}
                    { pizzas.map(pizza=>(
                        <Col md={4}>
                            <PizzaCompo pizza={pizza} />
                        </Col>
                    ))} 
                </Row>
            </Container>
        </div>
    )
}

export default Pizza;