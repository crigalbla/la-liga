import React from 'react';
import { Dropdown } from 'react-bootstrap';

import laLigaLogo from '../../images/la-liga-header.png';
import logoutIcon from '../../images/logout.png';
import StorageService from '../../services/storage.service';

import './Header.scss';

const Header = () => {
    const logout = () => {
        StorageService.delete('token');
        window.location.pathname = '/login';
    };

    return (
        <div className="header-div__main">
            <img className="header-img__laliga" src={laLigaLogo} alt="Logo LaLiga" />
            <span className="header-span__welcome">Bienvenido a La Liga</span>
            <Dropdown className="header-dropdown__main">
                <Dropdown.Toggle>
                    <img className="header-img__logout" src={logoutIcon} alt="icono logout" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-userInfo-container">
                    <Dropdown.Item onClick={logout}>
                        Cerrar Sesión
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default Header;
