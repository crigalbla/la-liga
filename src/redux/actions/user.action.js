export const START_GET_USER = 'START_GET_USER';
export const SUCCESS_GET_USER = 'SUCCESS_GET_USER';
export const ERROR_GET_USER = 'ERROR_GET_USER';

export const START_DELETE_USER = 'START_DELETE_USER';
export const SUCCESS_DELETE_USER = 'SUCCESS_DELETE_USER';
export const ERROR_DELETE_USER = 'ERROR_DELETE_USER';

export const START_EDIT_USER = 'START_EDIT_USER';
export const SUCCESS_EDIT_USER = 'SUCCESS_EDIT_USER';
export const ERROR_EDIT_USER = 'ERROR_EDIT_USER';

export const startGetUser = (payload) => ({
    type: START_GET_USER,
    ...payload,
});
export const successGetUser = (payload) => ({
    type: SUCCESS_GET_USER,
    ...payload,
});

export const startDeleteUser = (payload) => ({
    type: START_DELETE_USER,
    ...payload,
});
export const successDeleteUser = (payload) => ({
    type: SUCCESS_DELETE_USER,
    ...payload,
});

export const startEditUser = (payload) => ({
    type: START_EDIT_USER,
    ...payload,
});
export const successEditUser = (payload) => ({
    type: SUCCESS_EDIT_USER,
    ...payload,
});
