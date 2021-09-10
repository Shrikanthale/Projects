import React from 'react';
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from 'react-icons/fi'
import { FaMobileAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

function Contact() {
    return (
        <div>
            <Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col md={6}>
                        <h1>Pizza Shops</h1>
                        <p>Bootstrap provides an easy-to-use framework ofready-made styles, layout tools, and interactivecomponents, allowing developers to create websitesand applications that are visually appealing,functionally rich, and accessible out of the box.

                        Overview and limitations
                        The overall accessibility of any projectbuiltwith Bootstrap depends in large part ontheauthor’s markup, additional styling, andscriptingthey’ve included. However, providedthat thesehave been implemented correctly, itshould beperfectly possible to create websitesandapplications with Bootstrap that fulfillWCAG 2.1(A/AA/AAA), Section 508, and similaraccessibilitystandards and requirements.

                        Structural markup
                        Bootstrap’s styling and layout can be appliedto a wide range of markup structures. Thisdocumentation aims to provide developers withbest practice examples to demonstrate the useof Bootstrap itself and illustrate appropriatesemantic markup, including ways in whichpotential accessibility concerns can beaddressed.

                        contrast ratios. </p>
                        <Table striped bordered hover className=" text-center">
                            <thead>
                                <tr>
                                    <th className="bg-warning" colSpan={3}>--- Contact Details ---</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><FiPhoneCall /></td>
                                    <td>phone</td>
                                    <td>1800 120 1100</td>
                                </tr>
                                <tr>
                                    <td><FaMobileAlt /></td>
                                    <td>call</td>
                                    <td>9876543210</td>
                                </tr>
                                <tr>
                                    <td><AiOutlineMail /></td>
                                    <td>email</td>
                                    <td>customer-care@gmail.com</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={6}>
                        <Image src="images/farmhouse.jpg" style={{ width: '100%', height: '100%' }} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact
