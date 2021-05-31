import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import StorageService from '../../services/storage.service';
import FetchService from '../../services/fetch.service';
import laLigaLogo from '../../images/la-liga.png';

import './login.scss';

const Login = () => {
    const [error, setError] = useState(false);

    const handleOnSubmit = (event) => {
        const { email, password } = event.target.form;
        const data = { email: email.value, password: password.value };
        FetchService('post', '/login', data).then((res) => {
            if (res && res.status === 200) {
                StorageService.save('token', res.results.token);
                window.location.pathname = '/home';
            } else {
                setError(true);
            }
        });
    };

    useEffect(() => {
        if (window.location.pathname !== '/login') window.history.pushState('', 'Login', '/login');
    }, []);

    return (
        <div className="login-div__main">
            <img className="login-img__laliga" src={laLigaLogo} alt="Logo LaLiga" />
            <Form className="login-form__main">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={() => setError(false)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={() => setError(false)} />
                </Form.Group>
                {error && <div className="login-div__error">Usuario y/o contraseña incorrectos</div>}
                <Button
                    variant="dark"
                    type="button"
                    onClick={(e) => handleOnSubmit(e)}>
                    Iniciar sesión
                </Button>
            </Form>
        </div>
    );
};

export default Login;
