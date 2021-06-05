import { put, call, takeLatest } from 'redux-saga/effects';

import { START_LOG_IN, SUCCESS_LOG_IN, ERROR_LOG_IN } from '../actions/sesion.action';
import apiCall from '../api';

function* callLogIn(payload) {
    try {
        const results = yield call(apiCall, payload.method, `${process.env.REACT_APP_API}${payload.path}`, payload.data);

        if (results.token) {
            yield put({ type: SUCCESS_LOG_IN, value: results });
        } else {
            yield put({ type: ERROR_LOG_IN, value: 'Usuario y/o contraseña incorrectos' });
        }
    } catch (err) {
        yield put({ type: ERROR_LOG_IN, value: 'Usuario y/o contraseña incorrectos' });
    }
}

export default function* logIn() {
    yield takeLatest(START_LOG_IN, callLogIn);
}
