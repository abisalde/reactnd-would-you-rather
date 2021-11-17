import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import Avatar from '../components/Avatar';
import styles from '../assets/css/styles.module.css';
import PollQuestion from '../components/PollQuestion';
import PollResult from '../components/PollResult';
import Layout from '../components/Layout';
import NotFound from '../views/NotFound';

const PollSwitch = () => {
    const authUser = useSelector(({ authUser }) => authUser);
    const questions = useSelector(({ questions }) => questions);
    const users = useSelector(({ users }) => users);

    let params = useParams();

    const { question_id } = params;
    const question = questions[question_id];
    const author = users[question?.author];
    const authUserAnswers = users[authUser].answers;
    const answeredPoll = authUserAnswers.hasOwnProperty(question_id)
        ? true
        : false;

    if (question === undefined) {
        return <NotFound />;
    } else {
        return (
            <Fragment>
                <Layout>
                    <Card className='mt-3'>
                        <Card.Header>
                            <Card.Title className='mb-0'>
                                {answeredPoll ? (
                                    <Fragment>
                                        <span></span>Asked by{' '}
                                        <span>{author?.name}</span>
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        <span></span>
                                        {author?.name} <span>asks:</span>
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
                                            author?.avatarURL
                                                ? author.avatarURL
                                                : 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
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
    }
};

export default PollSwitch;
