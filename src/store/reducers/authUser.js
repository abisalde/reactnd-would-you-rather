import { RESET_AUTHED_USER, SET_AUTHED_USER } from '../actions/actionTypes';

const authedUser = (state = null, action) => {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.id;
        case RESET_AUTHED_USER:
            return null;
        default:
            return state;
    }
};

export default authedUser;
