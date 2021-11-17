import React, { Fragment, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Card, Form, Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import styles from '../assets/css/styles.module.css';
import { handleSaveQuestion } from '../redux/actions/questions';

const AddQuestion = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        optionOne: '',
        optionTwo: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [validated, setValidated] = useState(false);
    const authUser = useSelector(({ authUser }) => authUser);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };
    const disabled = !values.optionOne || !values.optionTwo;

    const handleSubmit = (e) => {
        e.preventDefault();
        const { optionOne, optionTwo } = values;

        new Promise((resolve, reject) => {
            setIsLoading(true);
            dispatch(handleSaveQuestion(optionOne, optionTwo, authUser));
            setTimeout(() => resolve('DONE'), 1000);
        }).then(() => {
            setValues({
                optionOne: '',
                optionTwo: '',
            });
            setValidated(true);
        });
    };

    if (validated === true) {
        return <Navigate to='/home' />;
    }

    return (
        <Fragment>
            <Layout>
                <Card.Header>
                    <Card.Title className='mb-0 text-center'>
                        Create New Question
                    </Card.Title>
                </Card.Header>

                <Card.Body>
                    <Card.Text>Complete the question:</Card.Text>
                    <Form onSubmit={handleSubmit}>
                        <Card.Title style={{ fontSize: '16px' }}>
                            Would your rather ...
                        </Card.Title>
                        <Form.Group>
                            <Form.Control
                                type='text'
                                name='optionOne'
                                value={setValues.optionOne}
                                placeholder='Enter option one'
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Card.Text className={styles.divider}>or</Card.Text>
                        <Form.Group>
                            <Form.Control
                                type='text'
                                name='optionTwo'
                                value={setValues.optionTwo}
                                placeholder='Enter option Two'
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button
                            type='submit'
                            onClick={handleSubmit}
                            disabled={disabled}
                            className='my-3 w-100'
                            style={{
                                fontSize: '1.12rem',
                                textTransform: 'none',
                                fontWeight: 500,
                                border: 'none',
                            }}
                        >
                            {isLoading ? (
                                <Fragment>
                                    <Spinner
                                        animation='border'
                                        size='sm'
                                        role='status'
                                        aria-hidden='true'
                                        variant='success'
                                    />
                                    <span className='ml-2'>....Loading</span>
                                </Fragment>
                            ) : (
                                'Submit'
                            )}
                        </Button>
                    </Form>
                </Card.Body>
            </Layout>
        </Fragment>
    );
};

export default AddQuestion;
