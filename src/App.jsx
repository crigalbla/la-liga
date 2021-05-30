import React from 'react';
import {
    BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import { Header } from './components';
import { Home, UserDetails, Login } from './views';
import StorageService from './services/storage.service';

const App = () => {
    const token = StorageService.get('token');

    return token
        ? (
            <div className="d-flex align-items-center flex-column overflow-hidden">
                <Header />
                <div className="d-flex align-items-center flex-column w-100">
                    <BrowserRouter>
                        <Switch>
                            <Route path="/user/:id" component={UserDetails} />
                            <Route path="/home" component={Home} />
                            <Redirect from="*" to="/home" />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        )
        : <Login />;
};

export default App;
