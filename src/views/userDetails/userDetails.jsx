import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import { startDeleteUser, startEditUser, startGetUser } from '../../redux/actions/user.action';

import './userDetails.scss';
import { Modal } from '../../components';

const UserDetails = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.User);
    const [editMode, setEditMode] = useState(false);
    const [feedBack, setfeedBack] = useState({ show: false, title: '', text: '' });
    const [id, setId] = useState();

    const deleteUser = () => {
        dispatch(startDeleteUser({ method: 'put', path: `/users/${id}` }));
    };

    const saveChanges = (event) => {
        const inputs = Array.from(event.target.form.elements);
        let dataToEdit = {};

        inputs.forEach((x) => {
            if (x.type === 'text') dataToEdit = { ...dataToEdit, [x.name]: x.value };
        });

        dispatch(startEditUser({ method: 'delete', path: `/users/${id}` }));
    };

    useEffect(() => {
        const arrayPathname = window.location.pathname.split('/');
        const idFromURL = parseInt(arrayPathname[arrayPathname.length - 1], 10);

        if (idFromURL > 0) {
            setId(idFromURL);
            dispatch(startGetUser({ method: 'get', path: `/users/${idFromURL}` }));
        } else {
            window.location.pathname = '/home';
        }
    }, []);

    useEffect(() => {
        if (user.updatedAt) setfeedBack({ show: true, title: '¡Todo ha ido bien!', text: 'El usuario ha sido eliminado' });

        if (user.editedUser) {
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
                                        <Button variant="dark" type="button" onClick={() => window.history.back()}>
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
            {feedBack.show && <Modal show title={feedBack.title} text={feedBack.text} goBack={!!user.updatedAt} setFather={setfeedBack} />}
            {user.error && <Modal show title="Error" text={user.error} />}
        </div>
    );
};

export default UserDetails;
