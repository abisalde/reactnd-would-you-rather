import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import styles from '../assets/css/styles.module.css';
import LoginImage from '../assets/img/sd1.png';
import { setAuthUser } from '../store/actions/authUser';

const Login = () => {
    const dispatch = useDispatch();
    const users = useSelector(({ users }) => users);

    const [userSelected, setUserSelected] = useState({ name: 'Select User' });
    const [errorMessage, setErrorMessage] = useState('');

    const handleSelect = (e) => {
        setUserSelected({ id: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userID = userSelected.id;

        if (userID !== '') {
            localStorage.setItem('user', JSON.stringify(users[userID]));
            dispatch(setAuthUser(userID));
        } else {
            alert(setErrorMessage('Please Select a User'));
        }
    };

    return (
        <Fragment>
            <Container>
                <Row className='align-items-center justify-content-center min-vh-100'>
                    <Col xs={12} md={6}>
                        <Card className={styles.cardContainer}>
                            <Card.Header className='text-center h-auto'>
                                <Card.Title>
                                    Welcome to Would You Rather App!
                                </Card.Title>
                                <Card.Subtitle>
                                    Please sign in to continue
                                </Card.Subtitle>
                            </Card.Header>
                            <Card.Body className='px-2'>
                                <Card.Img src={LoginImage} alt='@Author' />
                                <Card.Text
                                    className='py-2 text-center'
                                    style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 600,
                                        color: ' #10b467',
                                        marginBottom: '0',
                                    }}
                                >
                                    Sign In
                                </Card.Text>
                                <Form
                                    onSubmit={handleSubmit}
                                    className='px-2 d-flex align-items-center flex-column '
                                >
                                    {errorMessage ? (
                                        <div className='text-danger'>
                                            <small>{errorMessage}</small>
                                        </div>
                                    ) : null}
                                    <Form.Select
                                        aria-label='select username'
                                        onChange={handleSelect}
                                    >
                                        <option value=''>
                                            {userSelected.name}
                                        </option>
                                        {users
                                            ? Object.values(users).map(
                                                  (user) => {
                                                      return (
                                                          <option
                                                              key={user.id}
                                                              onClick={() =>
                                                                  setUserSelected(
                                                                      user.id
                                                                  )
                                                              }
                                                              value={user.id}
                                                          >
                                                              {user.name}
                                                          </option>
                                                      );
                                                  }
                                              )
                                            : null}
                                    </Form.Select>
                                    <Button
                                        onClick={handleSubmit}
                                        disabled={!userSelected.id}
                                        className='my-2 w-100'
                                        style={{
                                            fontSize: '1.12rem',
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            backgroundColor: '#10b467',
                                            border: 'none',
                                        }}
                                    >
                                        Sign In
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Login;
