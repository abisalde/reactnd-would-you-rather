import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Card, Button, Form } from 'react-bootstrap';
import { handleSaveQuestionAnswer } from '../redux/actions/users';

const PollQuestion = ({ authUser, question }) => {
    const dispatch = useDispatch();

    const [selectedOption, setSelectedOption] = useState('');
    console.log('POLL-QUESTION:', question);
    console.log('POLL-QUESTION-AUTHUSER:', authUser);
    console.log(
        'POLL-QUESTION-AUTHUSER-ANSWER:',
        dispatch(handleSaveQuestionAnswer(authUser, question.id, 'optionOne'))
    );
    const { optionOne, optionTwo } = question;

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('POLL-QUESTION-AUTHUSER-CLICKED -----1212');
        //     dispatch(
        //         handleSaveQuestionAnswer(authUser, id, selectedOption)
        //     );
    };

    return (
        <Fragment>
            <Card.Title className='mb-auto'>Would you Rather ...</Card.Title>
            <Card.Body className='px-0 pb-0 pt-2'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Check
                            className='mb-2'
                            custom
                            value='optionOne'
                            id='optionOne'
                            name='answer'
                            type='radio'
                            checked={selectedOption === 'optionOne'}
                            label={optionOne.text}
                            onChange={handleChange}
                        ></Form.Check>
                        <Form.Check
                            className='mb-2'
                            custom
                            value='optionTwo'
                            id='optionTwo'
                            name='answer'
                            type='radio'
                            checked={selectedOption === 'optionTwo'}
                            label={optionTwo.text}
                            onChange={handleChange}
                        ></Form.Check>
                    </Form.Group>
                    <Form.Group>
                        <Button
                            onClick={handleSubmit}
                            className='align-self-end w-100 mt-1'
                            style={{
                                borderColor: '#10b467',
                            }}
                        >
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Fragment>
    );
};

PollQuestion.propTypes = {
    question: PropTypes.object.isRequired,
    authUser: PropTypes.string.isRequired,
};

export default PollQuestion;
