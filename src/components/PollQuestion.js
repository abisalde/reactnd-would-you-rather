import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Form } from 'react-bootstrap';
import NotFound from '../views/NotFound';
import { handleSaveQuestionAnswer } from '../redux/actions/questions';

const PollQuestion = ({ id, question }) => {
    const dispatch = useDispatch();

    const [values, setValues] = useState('');
    const [validated, setValidated] = useState(false);
    const authUser = useSelector(({ authedUser }) => authedUser);
    const { optionOne, optionTwo } = question;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const { answer } = values;
        if (answer === undefined) {
            setValidated(true);
        } else {
            dispatch(handleSaveQuestionAnswer(authUser, id, answer));
        }
    };

    if (question === null) {
        return <NotFound />;
    }

    const disabled = !values;
    return (
        <Fragment>
            <Card.Title className='mb-auto' style={{ fontWeight: 600 }}>
                Would you Rather ...
            </Card.Title>
            <Card.Body className='px-0 pb-0 pt-2'>
                {validated ? (
                    <Card.Text>Please select an option</Card.Text>
                ) : null}
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
};

export default PollQuestion;
