import { SET_AUTHED_USER, RESET_AUTHED_USER } from './actionTypes';

export function setAuthUser(id) {
    return {
        type: SET_AUTHED_USER,
        id,
    };
}

export function handleSetAuthUser() {
    return {
        type: RESET_AUTHED_USER,
    };
}
