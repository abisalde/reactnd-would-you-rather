import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import { Card, Button, Form } from 'react-bootstrap';
import NotFound from '../views/NotFound';
import { useSelector } from 'react-redux';
// import { handleSaveQuestionAnswer } from '../redux/actions/users';

const PollQuestion = ({ id, question, author }) => {
    // const dispatch = useDispatch();

    const [values, setValues] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [validated, setValidated] = useState(false);
    const authUser = useSelector(({ authUser }) => authUser);
    const { optionOne, optionTwo } = question;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { answer } = values;
        console.log('Anssss', answer);
        if (answer === undefined) {
            alert('NOT DONE');
        } else {
            alert('DONE');
        }

        //     dispatch(
        //         handleSaveQuestionAnswer(authUser, id, selectedOption)
        //     );
    };

    if (question === null) {
        return <NotFound />;
    }

    const disabled = setValues === '' ? true : false;

    return (
        <Fragment>
            <Card.Title className='mb-auto' style={{ fontWeight: 600 }}>
                Would you Rather ...
            </Card.Title>
            <Card.Body className='px-0 pb-0 pt-2'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId='answer'>
                        <Form.Check
                            className='mb-2'
                            type='radio'
                            id='optionOne'
                            label={optionOne.text}
                            value={optionOne.text}
                            name='answer'
                            onChange={handleChange}
                        ></Form.Check>
                        <Form.Check
                            className='mb-2'
                            type='radio'
                            id='optionOne'
                            label={optionTwo.text}
                            value={optionTwo.text}
                            name='answer'
                            onChange={handleChange}
                        ></Form.Check>
                    </Form.Group>
                    <Form.Group>
                        <Button
                            type='submit'
                            onClick={handleSubmit}
                            className='mt-1 w-100 align-items-end'
                            style={{
                                fontSize: '1.12rem',
                                textTransform: 'none',
                                fontWeight: 500,
                                border: 'none',
                            }}
                            disabled={disabled}
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
    id: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired,
};

export default PollQuestion;
