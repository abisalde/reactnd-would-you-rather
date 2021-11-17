import React, { Fragment, useState } from 'react';
import {
    Card,
    Col,
    Container,
    Form,
    Row,
    Button,
    Spinner,
} from 'react-bootstrap';
import Avatar from '../components/Avatar';
import styles from '../assets/css/styles.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleRegisterUser } from '../redux/actions/users';

const Register = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [userImage, setUserImage] = useState('');
    const [Error, setError] = useState(false);
    const [nameLength, setNameLength] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [values, setValues] = useState({ fName: '', lName: '' });

    const imagePicker = (e) => {
        const { files } = e.target;
        if (files && files[0]) {
            setUserImage(URL.createObjectURL(files[0]));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { fName, lName } = values;
        if (!fName || !lName) {
            setError(true);
        }
        if (fName.trim().length < 3 || lName.trim().length < 3) {
            setNameLength(true);
        }

        if (fName.trim().length >= 3 && lName.trim().length >= 3) {
            setIsLoading(true);
            setError(false);
            setNameLength(false);
            dispatch(handleRegisterUser(userImage, fName, lName))
                .then(() => {
                    setValues({ fName: '', lName: '' });
                    setIsLoading(false);
                })
                .then(() => navigate('/', { replace: true }));
        }
    };

    return (
        <Fragment>
            <Container>
                <Row className='align-items-center justify-content-center min-vh-100'>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Header className='text-center h-auto'>
                                <Card.Title
                                    style={{
                                        fontWeight: 700,
                                        fontSize: '25px',
                                    }}
                                >
                                    Add Your Details
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Form.Group as={Col} xs='4'>
                                            <Form.Label
                                                htmlFor='avatarURL'
                                                className='text-center d-flex flex-column align-items-center justify-content-center pt-3'
                                            >
                                                <Avatar
                                                    avatarURL={
                                                        userImage
                                                            ? userImage
                                                            : 'https://picsum.photos/200/300'
                                                    }
                                                    className={
                                                        styles.scoreCardDetails
                                                    }
                                                />
                                                <input
                                                    type='file'
                                                    name='avatarURL'
                                                    id='avatarURL'
                                                    className='d-none'
                                                    onChange={imagePicker}
                                                />
                                            </Form.Label>
                                        </Form.Group>
                                        <Form.Group
                                            as={Col}
                                            xs='8'
                                            style={{
                                                borderLeft: '1px solid #ccc',
                                            }}
                                        >
                                            <Form.Group className='mb-3'>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='Enter First Name'
                                                    required
                                                    onChange={handleChange}
                                                    value={setValues.fName}
                                                    name='fName'
                                                />
                                                <Card.Text
                                                    className='text-danger d-flex flex-column'
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    {Error && (
                                                        <small>
                                                            Please enter a First
                                                            Name
                                                        </small>
                                                    )}
                                                    <br />
                                                    {nameLength && (
                                                        <small>
                                                            First Name must be
                                                            at least 3
                                                            characters
                                                        </small>
                                                    )}
                                                </Card.Text>
                                            </Form.Group>
                                            <Form.Group className='mb-3'>
                                                <Form.Control
                                                    type='text'
                                                    placeholder='Enter Last Name'
                                                    required
                                                    onChange={handleChange}
                                                    value={setValues.lName}
                                                    name='lName'
                                                />
                                                <Card.Text
                                                    className='text-danger d-flex flex-column'
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    {Error && (
                                                        <small>
                                                            Please enter a Last
                                                            Name
                                                        </small>
                                                    )}
                                                    <br />
                                                    {nameLength && (
                                                        <small>
                                                            Last Name must be at
                                                            least 3 characters
                                                        </small>
                                                    )}
                                                </Card.Text>
                                            </Form.Group>

                                            <Button
                                                type='submit'
                                                onClick={handleSubmit}
                                                className='my-1 w-100'
                                                style={{
                                                    fontSize: '1.12rem',
                                                    textTransform: 'none',
                                                    fontWeight: 600,
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
                                                        <span className='ml-2'>
                                                            ....Loading
                                                        </span>
                                                    </Fragment>
                                                ) : (
                                                    'Register'
                                                )}
                                            </Button>
                                        </Form.Group>
                                    </Row>
                                </Form>
                                <div
                                    className='text-muted mt-2'
                                    style={{ float: 'right' }}
                                >
                                    <small>
                                        Already a user?{' '}
                                        <Link to='/' className='px-1'>
                                            Sign in
                                        </Link>
                                    </small>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Register;
