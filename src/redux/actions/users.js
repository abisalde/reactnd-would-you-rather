import { saveQuestionAnswer } from '../../utils/API';
import { handleAnswerToQuestion } from './questions';

import {
    RECEIVE_USERS,
    SET_ANSWER_TO_USER,
    SET_USER_TO_QUESTION,
} from './actionTypes';

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users,
    };
};

const handleAnswerToUser = (authUser, qid, answer) => {
    return {
        type: SET_ANSWER_TO_USER,
        authUser,
        qid,
        answer,
    };
};

export const handleSaveQuestionAnswer = (authUser, qid, answer) => {
    return (dispatch) => {
        dispatch(handleAnswerToUser(authUser, qid, answer));
        dispatch(handleAnswerToQuestion(authUser, qid, answer));

        return saveQuestionAnswer(authUser, qid, answer).catch((e) => {
            console.warn('Error in handleSaveQuestionAnswer: ', e);
            dispatch(handleAnswerToUser(authUser, qid, null));
            dispatch(handleAnswerToQuestion(authUser, qid, null));
        });
    };
};

export const handleQuestionToUser = ({ author, id }) => {
    return {
        type: SET_USER_TO_QUESTION,
        id,
        author,
    };
};
