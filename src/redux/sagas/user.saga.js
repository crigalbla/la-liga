import { put, call, takeLatest } from 'redux-saga/effects';

import {
    START_GET_USER,
    SUCCESS_GET_USER,
    ERROR_GET_USER,
    START_DELETE_USER,
    SUCCESS_DELETE_USER,
    START_EDIT_USER,
    SUCCESS_EDIT_USER,
    ERROR_DELETE_USER,
    ERROR_EDIT_USER,
} from '../actions/user.action';
import apiCall from '../api';

function* get(payload) {
    try {
        const results = yield call(apiCall, payload.method, `${process.env.REACT_APP_API}${payload.path}`);
        yield put({ type: SUCCESS_GET_USER, value: results });
    } catch (err) {
        yield put({ type: ERROR_GET_USER, value: '¡Ha habido un error al encontrar al usuario!' });
    }
}

function* deleteU(payload) {
    try {
        const results = yield call(apiCall, payload.method, `${process.env.REACT_APP_API}${payload.path}`);
        yield put({ type: SUCCESS_DELETE_USER, value: results });
    } catch (err) {
        yield put({ type: ERROR_DELETE_USER, value: '¡Ha habido un error al borrar el usuario!' });
    }
}

function* edit(payload) {
    try {
        const results = yield call(apiCall, payload.method, `${process.env.REACT_APP_API}${payload.path}`);
        yield put({ type: SUCCESS_EDIT_USER, value: results });
    } catch (err) {
        yield put({ type: ERROR_EDIT_USER, value: '¡Ha habido un error al editar el usuario!' });
    }
}

export function* getUser() {
    yield takeLatest(START_GET_USER, get);
}

export function* deleteUser() {
    yield takeLatest(START_DELETE_USER, deleteU);
}

export function* editUser() {
    yield takeLatest(START_EDIT_USER, edit);
}
