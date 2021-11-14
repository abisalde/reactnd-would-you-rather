import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import Avatar from './Avatar';
import styles from '../assets/css/styles.module.css';
import PollQuestion from './PollQuestion';
import PollResult from './PollResult';
import PollEntry from './PollEntry';

const UserCard = (props) => {
    const { question_id, unanswered } = props;

    const authUser = useSelector(({ authUser }) => authUser);
    const questions = useSelector(({ questions }) => questions);
    const users = useSelector(({ users }) => users);

    const pollTypes = {
        POLL_ENTRY: 'POLL_ENTRY',
        POLL_RESULT: 'POLL_RESULT',
        POLL_QUESTION: 'POLL_QUESTION',
    };

    const PollContent = (props) => {
        const { pollType, question, unanswered } = props;

        switch (pollType) {
            case pollTypes.POLL_ENTRY:
                return (
                    <PollEntry question={question} unanswered={unanswered} />
                );
            case pollTypes.POLL_QUESTION:
                return (
                    <PollQuestion
                        question={question}
                        authUser={authUser}
                        params={params}
                        {...props}
                    />
                );
            case pollTypes.POLL_RESULT:
                return (
                    <PollResult
                        question={question}
                        params={params}
                        {...props}
                        user={users[authUser]}
                    />
                );
            default:
                return;
        }
    };

    let params = useParams();

    let question, author, pollType;
    // badURL = false;

    if (question_id !== undefined) {
        question = questions[question_id];
        author = users[question.author];
        pollType = pollTypes.POLL_ENTRY;
    } else {
        const { question_id } = params;
        console.log('params', params);
        question = questions[question_id];
        const user = users[authUser];
        if (question === undefined) {
            console.log('ASSS');
        } else {
            author = users[question.author];
            pollType = pollTypes.POLL_QUESTION;
            if (Object.keys(user.answers).includes(question_id)) {
                pollType = pollTypes.POLL_RESULT;
            }
        }
    }

    // if (badURL === true) {
    //     return <Navigate to='/questions/bad_id' />;
    // }

    return (
        <Fragment>
            <Card className='mt-3'>
                <Card.Header>
                    <Card.Title className='mb-0'>
                        <span></span>
                        {author.name} <span>asks:</span>
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
                            <PollContent
                                pollType={pollType}
                                question={question}
                                unanswered={unanswered}
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

UserCard.propTypes = {
    props: PropTypes.shape({
        question_id: PropTypes.string.isRequired,
        unanswered: PropTypes.bool.isRequired,
    }),
};

export default UserCard;
