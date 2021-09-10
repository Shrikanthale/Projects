import React from 'react';
import opt from '../home-data';
import {Container, Row, Col} from 'react-bootstrap';
import OptionCompo from '../components/OptionComp';

function Options(){
    return (
        <div>
            <Container>
                <Row>
                    { opt.map(opts=>(
                        <Col md={4}>
                            <OptionCompo opts={opts} />
                        </Col>
                    ))} 
                </Row>
            </Container>
        </div>
    )
}

export default Options;