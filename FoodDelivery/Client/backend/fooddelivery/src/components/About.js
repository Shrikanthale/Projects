import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

function About(){
    return (
        <div>
            <Container style={{marginTop:'50px'}}>
                <h1>Who we are?</h1>
                <p>Looking to quickly add Bootstrap to your project? Use jsDelivr, a free open source CDN. Using a package manager or need to download the source files? Head to the downloads page.</p>
                <h1>Who we are?</h1>
                <Row>
                    <Col md={6}>
                        <p>Many of our components require the use of JavaScript to function. Specifically, they require our own JavaScript plugins and Popper. Place one of the following near the end of your pages, right before the closingtag, to enable them.</p>
                    </Col>
                    <Col md={6}>
                        <p>Include every Bootstrap JavaScript plugin and dependency with one of our two bundles. Both bootstrap.bundle.js and bootstrap.bundle.min.js include Popper for our tooltips and popovers. For more information about what’s included in Bootstrap, please see our contents section.</p>
                    </Col>
                </Row>

                <Row>
                    <h1>Our Chef</h1>
                    <Col md={6}>
                        <p>If you decide to go with the separate scripts solution, Popper must come first (if you’re using tooltips or popovers), and then our JavaScript plugins.</p>
                    </Col>
                    <Col md={6}>
                        <p>Curious which components explicitly require our JavaScript and Popper? Click the show components link below. If you’re at all unsure about the general page structure, keep reading for an example page template.</p>
                    </Col>
                    <Col md={6}>
                        <p>Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About