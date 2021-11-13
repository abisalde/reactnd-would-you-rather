import { saveQuestionAnswer } from '../../utils/API';

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

export const handleAnswerToQuestion = (answer, questionId, authUser) => {
    return {
        type: SET_ANSWER_TO_QUESTION,
        answer,
        questionId,
        authUser,
    };
};

export const handleAddQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question,
    };
};

export const handleSaveQuestion = (optionOneText, optionTwoText, authUser) => {
    return (dispatch) => {
        return saveQuestionAnswer({
            optionOneText,
            optionTwoText,
            authUser,
        }).then((question) => dispatch(handleAddQuestion(question)));
    };
};
