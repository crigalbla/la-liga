import * as actionType from '../../actions/user.action';

const stateError = (state, action) => ({
    ...state, updatedAt: false, editedUser: false, error: action.value,
});

const User = (state = {}, action) => {
    switch (action.type) {
    case actionType.SUCCESS_GET_USER:
        return {
            ...state,
            ...action.value,
            error: false,
        };
    case actionType.SUCCESS_DELETE_USER:
        return {
            ...state,
            ...action.value,
            editedUser: false,
            error: false,
        };
    case actionType.SUCCESS_EDIT_USER:
        return {
            ...state,
            ...action.value,
            updatedAt: false,
            error: false,
        };
    case actionType.ERROR_GET_USER:
        return stateError(state, action);
    case actionType.ERROR_DELETE_USER:
        return stateError(state, action);
    case actionType.ERROR_EDIT_USER:
        return stateError(state, action);
    default:
        return state;
    }
};

export default User;
