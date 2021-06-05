import React from 'react';
import { useSelector } from 'react-redux';
import {
    BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import { Header } from './components';
import { Home, UserDetails, Login } from './views';
import StorageService from './services/storage.service';

const App = () => {
    // eslint-disable-next-line no-unused-vars
    const sesion = useSelector((state) => state.Sesion);

    const PrivateRoute = ({ children, ...rest }) => (
        <Route
            {...rest}
            render={() => (
                StorageService.get('token')
                    ? children
                    : <Redirect to="/login" />
            )}
        />
    );

    const ShowLogin = ({ children, ...rest }) => (
        <Route
            {...rest}
            render={() => (
                !StorageService.get('token')
                    ? children
                    : <Redirect to="/home" />
            )}
        />
    );

    const renderWithHeader = (children) => (
        <>
            <Header />
            {children}
        </>
    );

    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/user/:id">
                    {renderWithHeader(<UserDetails />)}
                </PrivateRoute>
                <PrivateRoute path="/home">
                    {renderWithHeader(<Home />)}
                </PrivateRoute>
                <ShowLogin path="/login">
                    <Login />
                </ShowLogin>
                <Redirect from="*" to="/home" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
