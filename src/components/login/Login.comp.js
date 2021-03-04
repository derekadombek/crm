import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './login.style.css'

export const LoginForm = ({ formToggle, handleOnSubmit, handleOnChange, email, password }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>CRM Login</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control 
                            type="email"
                            name="email"
                            value={email || ''}
                            onChange={handleOnChange}
                            placeholder="Enter Email"
                            required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password:</Form.Label>
                            <Form.Control 
                            type="password"
                            name="password"
                            value={password || ''}
                            onChange={handleOnChange}
                            placeholder="Enter Password"
                            required
                            />
                        </Form.Group>

                        <Button className="loginButton" type="submit">Login</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a onClick={() => formToggle('reset')} className="forgotPassword" href="#!">Forgot Password</a><br />
                    <a className="signUp" href="#!">Sign up</a>
                </Col>
            </Row>
        </Container>
    )
};

LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired, 
    handleOnSubmit: PropTypes.func.isRequired,
    formToggle: PropTypes.func.isRequired,
    email: PropTypes.string, 
    password: PropTypes.string,
};