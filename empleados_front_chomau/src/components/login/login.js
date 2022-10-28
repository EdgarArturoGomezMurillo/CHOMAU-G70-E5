import React from "react";
import { Container, Button, Form, Row } from "react-bootstrap";


export default class login extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {};
    render() {
        return (
            <Container id="login-container" style={{ marginTop: 200 }}>
                <Row>

                    <Col>
                        <Row>                        
                            <h2>
                                Iniciar Sesion
                            </h2>

                            <Form>
                                <Form.Group>
                                    <Form.Label style={{ float: "left" }}>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />

                                </Form.Group>

                                <Form.Group>
                                    <Form.Label style={{ float: 'left' }}>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>


                                <Button variant="primary"

                                    style={{ marginTop: 20, width: "100 %" }}
                                >
                                    Iniciar Sesion
                                </Button>
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
