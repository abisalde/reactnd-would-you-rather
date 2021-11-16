import { saveQuestion, saveQuestionAnswer } from '../../utils/API';
import { handleQuestionToUser } from './users';
import { showLoading, hideLoading } from 'react-redux-loading';

// import all actionTypes
import {
    ADD_QUESTION,
    RECEIVE_QUESTIONS,
    SET_QUESTION_ANSWER,
} from './actionTypes';

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
};

export const handleAnswerToQuestion = (authedUser, qid, answer) => {
    return {
        type: SET_QUESTION_ANSWER,
        authedUser,
        qid,
        answer,
    };
};

export const handleAddQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question,
    };
};

export const handleSaveQuestion = (optionOneText, optionTwoText, author) => {
    return (dispatch) => {
        dispatch(showLoading());
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author,
        })
            .then((question) => {
                dispatch(handleAddQuestion(question));
                dispatch(handleQuestionToUser(question));
            })
            .then(() => dispatch(hideLoading()));
    };
};

export const handleSaveQuestionAnswer = (authedUser, qid, answer) => {
    return (dispatch) => {
        dispatch(showLoading());
        return saveQuestionAnswer({
            authedUser,
            qid,
            answer,
        })
            .then(() => {
                dispatch(handleAnswerToQuestion(authedUser, qid, answer));
            })
            .catch((e) =>
                console.warn('Error in handleSaveQuestionAnswer: ', e)
            )
            .then(() => dispatch(hideLoading()));
    };
};
