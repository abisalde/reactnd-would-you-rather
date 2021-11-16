import { SET_AUTHED_USER, RESET_AUTHED_USER } from './actionTypes';

export const setAuthUser = (id) => {
    return {
        type: SET_AUTHED_USER,
        id,
    };
};

export const handleSetAuthUser = () => {
    return {
        type: RESET_AUTHED_USER,
    };
};
