import * as actionType from '../../actions/user.action';

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
            updatedAt: false,
            error: false,
        };
    case actionType.SUCCESS_EDIT_USER:
        return {
            ...state,
            updatedAt: action.value.updatedAt,
            deletedUser: false,
            error: false,
        };
    case actionType.ERROR_USER:
        return {
            ...state,
            updatedAt: false,
            deletedUser: false,
            error: action.value,
        };
    case actionType.EMPTY_VALUES:
        return {
            ...state,
            updatedAt: false,
            deletedUser: false,
            error: false,
        };
    default:
        return state;
    }
};

export default User;
