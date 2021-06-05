import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import { startLogIn, deleteError } from '../../redux/actions/sesion.action';
import laLigaLogo from '../../images/la-liga.png';

import './login.scss';

const Login = () => {
    const dispatch = useDispatch();
    const sesion = useSelector((state) => state.Sesion);

    const handleOnSubmit = (event) => {
        const { email, password } = event.target.form;
        const data = { email: email.value, password: password.value };
        dispatch(startLogIn({ method: 'post', path: '/login', data }));
    };

    const handleOnChange = () => {
        if (sesion && sesion.error) dispatch(deleteError());
    };

    return (
        <div className="login-div__main">
            <img className="login-img__laliga" src={laLigaLogo} alt="Logo LaLiga" />
            <Form className="login-form__main">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleOnChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={handleOnChange} />
                </Form.Group>
                {sesion && sesion.error && <div className="login-div__error">{sesion.error}</div>}
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
