import React, { useState } from 'react';

import { Jumbotron } from 'react-bootstrap'

import { LoginForm } from '../../components/login/Login.comp'
import { PasswordReset } from '../../components/password-reset/PasswordReset.comp'

import './entry.style.css';

export const Entry = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [formLoad, setFormLoad] = useState("login")

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        switch(name) {
            case 'email' :
                setEmail(value)
                break;
            case 'password' :
                setPassword(value)
                break;
            default:
                break;
        }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (!email || !password) {
            return alert('Fill Entire Form')
        }
        console.log(email, password);
    }

    const handleOnResetSubmit = (e) => {
        e.preventDefault()

        if (!email) {
            return alert('Enter Email to Reset')
        }
        console.log(email);
    }

    const formToggle = (formType) => {
        setFormLoad(formType)
    }

    return (
        <div className="entry-page">
            <Jumbotron className="form-box">
                {formLoad === 'login' && (
                    <LoginForm 
                    handleOnSubmit={handleOnSubmit}
                    handleOnChange={handleOnChange}
                    formToggle={formToggle}
                    email={email}
                    password={password}
                    />
                )}
                {formLoad === 'reset' && (
                    <PasswordReset 
                    handleOnResetSubmit={handleOnResetSubmit}
                    handleOnChange={handleOnChange}
                    formToggle={formToggle}
                    email={email}
                    />
                )}
            </Jumbotron>
        </div>
    )
}
