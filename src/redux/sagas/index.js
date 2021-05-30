import { all } from 'redux-saga/effects';

import { getUser, deleteUser, editUser } from './user.saga';
import data from './data.saga';

export default function* rootSaga() {
    yield all([
        getUser(),
        deleteUser(),
        editUser(),
        data(),
    ]);
}
