import { combineReducers } from 'redux';

import User from './user.reducer';
import Data from './data.reducer';
import Sesion from './sesion.reducer';

const reducers = combineReducers({
    User,
    Data,
    Sesion,
});

export default reducers;
