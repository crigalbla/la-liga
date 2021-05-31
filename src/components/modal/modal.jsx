import React, { useState } from 'react';
import { Button, Modal as BoostrapModal } from 'react-bootstrap';

import './modal.scss';

const Modal = (props) => {
    const {
        show, title, text, goBack, setFather,
    } = props;
    const [showLocal, setShowLocal] = useState(show);

    const handleClose = () => {
        setShowLocal(false);
        if (goBack) window.history.back();
        if (setFather) setTimeout(() => setFather({ show: false, title: '', text: '' }), 500);
    };

    return (
        <BoostrapModal show={showLocal} onHide={handleClose}>
            <BoostrapModal.Header>
                <BoostrapModal.Title>{title}</BoostrapModal.Title>
            </BoostrapModal.Header>
            <BoostrapModal.Body>{text}</BoostrapModal.Body>
            <BoostrapModal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </BoostrapModal.Footer>
        </BoostrapModal>
    );
};

export default Modal;
