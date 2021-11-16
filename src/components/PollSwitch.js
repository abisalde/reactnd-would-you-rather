import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import Avatar from './Avatar';
import styles from '../assets/css/styles.module.css';
import PollQuestion from './PollQuestion';
import PollResult from './PollResult';
import Layout from './Layout';

const PollSwitch = () => {
    const authUser = useSelector(({ authedUser }) => authedUser);
    const questions = useSelector(({ questions }) => questions);
    const users = useSelector(({ users }) => users);

    let params = useParams();

    const { question_id } = params;
    const question = questions[question_id];
    const author = users[question.author];
    const authUserAnswers = users[authUser].answers;
    const answeredPoll = authUserAnswers.hasOwnProperty(question_id)
        ? true
        : false;

    return (
        <Fragment>
            <Layout>
                <Card className='mt-3'>
                    <Card.Header>
                        <Card.Title className='mb-0'>
                            {answeredPoll ? (
                                <Fragment>
                                    <span></span>Asked by{' '}
                                    <span>{author.name}</span>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <span></span>
                                    {author.name} <span>asks:</span>
                                </Fragment>
                            )}
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col
                                sm={4}
                                className='text-center d-flex justify-content-center align-items-center'
                            >
                                <Avatar
                                    avatarURL={
                                        author.avatarURL
                                            ? author.avatarURL
                                            : 'https://picsum.photos/200/300'
                                    }
                                    name={author?.name}
                                    className={styles.avatar}
                                />
                            </Col>
                            <Col sm={8}>
                                {answeredPoll ? (
                                    <PollResult
                                        id={question_id}
                                        question={question}
                                    />
                                ) : (
                                    <PollQuestion
                                        id={question_id}
                                        author={author}
                                        question={question}
                                    />
                                )}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Layout>
        </Fragment>
    );
};

PollSwitch.propTypes = {
    props: PropTypes.shape({
        question_id: PropTypes.string.isRequired,
        unanswered: PropTypes.bool.isRequired,
    }),
};

export default PollSwitch;
