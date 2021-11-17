import { hideLoading, showLoading } from 'react-redux-loading';
import { registerUser } from '../../utils/API';
import {
    RECEIVE_USERS,
    REGISTER_USER,
    SET_USER_TO_QUESTION,
} from './actionTypes';

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users,
    };
};

export const handleQuestionToUser = ({ author, id }) => {
    return {
        type: SET_USER_TO_QUESTION,
        id,
        author,
    };
};

const addUser = (user) => {
    return {
        type: REGISTER_USER,
        user,
    };
};

export const handleRegisterUser = (avatarURL, fName, lName) => {
    return (dispatch) => {
        dispatch(showLoading());
        return registerUser({ avatarURL, fName, lName })
            .then((user) => {
                dispatch(addUser(user));
            })
            .catch((error) => {
                console.warn('Error registering user: ', error.name);
            })
            .then(() => {
                dispatch(hideLoading());
            });
    };
};
