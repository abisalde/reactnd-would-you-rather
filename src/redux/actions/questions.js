import { saveQuestion } from '../../utils/API';
import { handleQuestionToUser } from './users';
import { showLoading, hideLoading } from 'react-redux-loading';

// import all actionTypes
import {
    ADD_QUESTION,
    RECEIVE_QUESTIONS,
    SET_ANSWER_TO_QUESTION,
} from './actionTypes';

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
};

export const handleAnswerToQuestion = (answer, qid, authUser) => {
    return {
        type: SET_ANSWER_TO_QUESTION,
        answer,
        qid,
        authUser,
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
