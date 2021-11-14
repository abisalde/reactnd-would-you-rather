import { saveQuestionAnswer } from '../../utils/API';
import {
    RECEIVE_USERS,
    SET_ANSWER_TO_USER,
    SET_USER_TO_QUESTION,
} from './actionTypes';
import { handleAnswerToQuestion } from './questions';

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users,
    };
};

const handleAnswerToUser = (authUser, questionId, answer) => {
    return {
        type: SET_ANSWER_TO_USER,
        authUser,
        questionId,
        answer,
    };
};

export const handleSaveQuestionAnswer = (authUser, questionId, answer) => {
    return (dispatch) => {
        dispatch(handleAnswerToUser(authUser, questionId, answer));
        dispatch(handleAnswerToQuestion(authUser, questionId, answer));

        return saveQuestionAnswer(authUser, questionId, answer).catch((e) => {
            console.warn('Error in handleSaveQuestionAnswer: ', e);
            dispatch(handleAnswerToUser(authUser, questionId, null));
            dispatch(handleAnswerToQuestion(authUser, questionId, null));
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
