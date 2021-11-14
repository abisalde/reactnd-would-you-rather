import {
    ADD_QUESTION,
    RECEIVE_QUESTIONS,
    SET_ANSWER_TO_QUESTION,
} from '../actions/actionTypes';

const questions = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            };
        case SET_ANSWER_TO_QUESTION:
            const { authUser, qid, answer } = action;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat(authUser),
                    },
                },
            };
        case ADD_QUESTION:
            const { question } = action;
            return {
                ...state,
                [question.id]: question,
            };
        default:
            return state;
    }
};

export default questions;
