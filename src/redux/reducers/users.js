import {
    RECEIVE_USERS,
    SET_ANSWER_TO_USER,
    SET_USER_TO_QUESTION,
} from '../actions/actionTypes';

const users = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            };
        case SET_ANSWER_TO_USER:
            const { authUser, questionId, answer } = action;
            return {
                ...state,
                [authUser]: {
                    ...state[authUser],
                    answers: {
                        ...state[authUser].answers,
                        [questionId]: answer,
                    },
                },
            };
        case SET_USER_TO_QUESTION:
            const { id, author } = action;
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat(id),
                },
            };
        default:
            return state;
    }
};

export default users;
