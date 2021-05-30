import { combineReducers } from 'redux';

import User from './user.reducer';
import Data from './data.reducer';

const reducers = combineReducers({
    User,
    Data,
});

export default reducers;
