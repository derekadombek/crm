import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './password-reset.style.css'

export const PasswordReset = ({ formToggle, handleOnResetSubmit, handleOnChange, email }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Reset Password</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
                        <Form.Group>
                            <Form.Control 
                            type="email"
                            name="email"
                            value={email || ''}
                            onChange={handleOnChange}
                            placeholder="Enter Email"
                            required
                            />
                        </Form.Group>

                        <Button className="loginButton" type="submit">Reset</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a onClick={() => formToggle('login')} className="login" href="#!">Login</a><br />
                    <a className="signUp" href="#!">Sign up</a>
                </Col>
            </Row>
        </Container>
    )
};

PasswordReset.propTypes = {
    handleOnChange: PropTypes.func.isRequired, 
    handleOnResetSubmit: PropTypes.func.isRequired,
    formToggle: PropTypes.func.isRequired,
    email: PropTypes.string, 
};