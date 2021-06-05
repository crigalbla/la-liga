export const START_LOG_IN = 'START_LOG_IN';
export const SUCCESS_LOG_IN = 'SUCCESS_LOG_IN';
export const SUCCESS_LOG_OUT = 'SUCCESS_LOG_OUT';
export const ERROR_LOG_IN = 'ERROR_LOG_IN';
export const DELETE_ERROR = 'DELETE_ERROR';

export const startLogIn = (payload) => ({
    type: START_LOG_IN,
    ...payload,
});

export const successLogIn = (payload) => ({
    type: SUCCESS_LOG_IN,
    ...payload,
});

export const successLogOut = (payload) => ({
    type: SUCCESS_LOG_OUT,
    ...payload,
});

export const deleteError = (payload) => ({
    type: DELETE_ERROR,
    ...payload,
});
