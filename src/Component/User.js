import   React from 'react'
import {Form , Col,Row,Container, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom';


const User = () => {
    return (
        <div className="container">
            <div className="py-4">
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Usename</Form.Label>
    
    <Col xs lg="2">
    <Form.Control type="email" placeholder="Enter email" />
    </Col>
   
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Col xs lg="2">
    <Form.Control type="password" placeholder="Password" />
    </Col>
   
  </Form.Group>
  <br></br><br></br>
  <Container>
  <Row xs={2} md={4} lg={6}>
    <Col><Link class="btn btn-dark mr-4" to="/changepass">Change pass</Link></Col>
   
  </Row>
  </Container>
 
  </Form>
  
            </div>
        </div>
    );
};
 
export default User;