import React from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import './login.css';

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      usuario: '',
      pass: '',
    };

  }

iniciarSesion(){
  alert(`usuario: ${this.state.usuario} - password: ${this.state.pass}`);


}
 render() {
    return (
      <Container id="login-container">
        <Row>
          <Col>
            <Row>
              <h2 className="h2">Iniciar Sesion</h2>
            </Row>
            <Row>
              <Col
                sm="12"
                xs="12"
                md={{ span: 4, offset: 4 }}
                lg={{ span: 4, offset: 4 }}
                xk={{ span: 4, offset: 4 }}
              >
                <Form>
                  <Form.Group>
                    <Form.Label className="Form-Label">Usuario</Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        this.setState({ usuario: e.target.value })}/>                                        
                    {/* {this.state.usuario} */}
                  </Form.Group>


                  <Form.Group>
                    <Form.Label className="Form-Label">Contraseña</Form.Label>
                    <Form.Control type="password"
                    onChange={(e) => 
                      this.setState({ pass: e.target.value })}/>
                     {/* {this.state.pass} */}
                  </Form.Group>

                  <Button id ="boton"
                    variant="primary"
                    onClick={( )=>{
                      this.iniciarSesion();

                    }}
                  >
                    Iniciar Sesion
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

// class  extends Component {
//     constructor(props) {
//         super(props);
//     }
//     state = {  }
//     render() {
//         return (  );
//     }
// }

// export default ;
