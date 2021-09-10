import React from 'react'
import {Container, Row, Col } from "react-bootstrap";

function Policy() {
    return (
        <div>
            <Container style={{marginTop:'50px'}}>
                <h1>Terms And Conditions</h1>
                <Row>
                    <Col md={10}>
                        <h6>Conveying meaning to assistive technologies</h6>
                        <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .visually-hidden class.</p>
                        <h6>Conveying meaning to assistive technologies</h6>
                        <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .visually-hidden class.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Policy
