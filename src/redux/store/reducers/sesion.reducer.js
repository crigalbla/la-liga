import StorageService from '../../../services/storage.service';
import * as actionType from '../../actions/sesion.action';

const Sesion = (state = {}, action) => {
    switch (action.type) {
    case actionType.SUCCESS_LOG_IN:
        StorageService.save('token', action.value.token);

        return {
            ...state,
            logged: true,
        };
    case actionType.SUCCESS_LOG_OUT:
        StorageService.delete('token');

        return {
            ...state,
            logged: false,
        };
    case actionType.ERROR_LOG_IN:
        return {
            ...state,
            error: action.value,
        };
    case actionType.DELETE_ERROR:
        return {
            ...state,
            error: false,
        };
    default:
        return state;
    }
};

export default Sesion;
