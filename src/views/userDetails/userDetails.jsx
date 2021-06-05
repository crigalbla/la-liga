import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import {
    emptyValues, startDeleteUser, startEditUser, startGetUser,
} from '../../redux/actions/user.action';
import { Modal } from '../../components';

import './userDetails.scss';

const UserDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.User);
    const [editMode, setEditMode] = useState(false);
    const [feedBack, setfeedBack] = useState({ show: false, title: '', text: '' });

    const deleteUser = () => {
        dispatch(startDeleteUser({ method: 'delete', path: `/users/${id}` }));
    };

    const saveChanges = (event) => {
        const inputs = Array.from(event.target.form.elements);
        let dataToEdit = {};

        inputs.forEach((x) => {
            if (x.type === 'text') dataToEdit = { ...dataToEdit, [x.name]: x.value };
        });

        dispatch(startEditUser({ method: 'put', path: `/users/${id}`, data: dataToEdit }));
    };

    useEffect(() => {
        if (id > 0) {
            dispatch(startGetUser({ method: 'get', path: `/users/${id}` }));
        } else {
            history.push('/home');
        }
    }, []);

    useEffect(() => {
        if (user.deletedUser) setfeedBack({ show: true, title: '¡Todo ha ido bien!', text: 'El usuario ha sido eliminado' });

        if (user.updatedAt) {
            setEditMode(false);
            setfeedBack({ show: true, title: '¡Todo ha ido bien!', text: 'El usuario ha sido editado' });
        }
    }, [user]);

    return (
        <div className="userDetails-div__main">
            {user && user.data
                ? (
                    <>
                        <img src={user.data.avatar} alt="error-img" />
                        {editMode
                            ? (
                                <form>
                                    <div className="userDetails-div__edit">
                                        <div>
                                            <span className="fw-bold">Nombre: </span>
                                            <input type="text" name="first_name" defaultValue={user.data.first_name} />
                                        </div>
                                        <div>
                                            <span className="fw-bold">Apellidos: </span>
                                            <input type="text" name="last_name" defaultValue={user.data.last_name} />
                                        </div>
                                        <div>
                                            <span className="fw-bold">Email: </span>
                                            <input type="text" name="email" defaultValue={user.data.email} />
                                        </div>
                                    </div>
                                    <div className="userDetails-div__buttons">
                                        <Button variant="danger" type="button" onClick={() => setEditMode(false)}>
                                            Cancelar
                                        </Button>
                                        <Button variant="success" type="button" onClick={(e) => saveChanges(e)}>
                                            Guardar
                                        </Button>
                                    </div>
                                </form>
                            )
                            : (
                                <>
                                    <div className="userDetails-div__details">
                                        <div>
                                            <span className="fw-bold">Nombre: </span>
                                            <span>{user.data.first_name}</span>
                                        </div>
                                        <div>
                                            <span className="fw-bold">Apellidos: </span>
                                            <span>{user.data.last_name}</span>
                                        </div>
                                        <div>
                                            <span className="fw-bold">Email: </span>
                                            <span>{user.data.email}</span>
                                        </div>
                                    </div>
                                    <div className="userDetails-div__buttons">
                                        <Button variant="dark" type="button" onClick={() => history.goBack()}>
                                            Volver
                                        </Button>
                                        <Button variant="dark" type="button" onClick={deleteUser}>
                                            Borrar usuario
                                        </Button>
                                        <Button variant="dark" type="button" onClick={() => setEditMode(true)}>
                                            Editar usuario
                                        </Button>
                                    </div>
                                </>
                            )}
                    </>
                )
                : (
                    <div className="userDetails-div__notUser">Usuario no encontrado o no existe</div>
                )}
            {feedBack.show
                && (
                    <Modal
                        show
                        title={feedBack.title}
                        text={feedBack.text}
                        goBack={!!user.deletedUser}
                        setFather={setfeedBack}
                        history={history}
                        dispatch={() => dispatch(emptyValues())}
                    />
                )}
            {user.error && <Modal show title="Error" text={user.error} />}
        </div>
    );
};

export default UserDetails;
