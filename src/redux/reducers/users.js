import { RECEIVE_USERS } from '../actions/actionTypes';

const users = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            };
        default:
            return state;
    }
};

export default users;
