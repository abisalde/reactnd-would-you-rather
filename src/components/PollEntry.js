import React, { Fragment, useState } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const PollEntry = ({ question, unanswered }) => {
    const { optionOne, id } = question;

    const [viewPoll, setViewPoll] = useState(false);

    const handleViewPoll = (e) => {
        e.preventDefault();
        setViewPoll(true);
    };

    const buttonText = unanswered ? 'View Poll' : 'Results';

    if (viewPoll === true) {
        return <Navigate to={`/questions/${id}`} />;
    }

    return (
        <Fragment>
            <Card.Title className='mb-auto'>Would you Rather</Card.Title>
            <Card.Body className='text-center card-body px-0 pb-0'>
                <Card.Text>...{optionOne.text.slice(0, 25)}...?</Card.Text>
                <Button
                    onClick={handleViewPoll}
                    className='align-self-end w-100'
                    style={{
                        borderColor: unanswered ? '#10b467' : '#06a158',
                        color: unanswered ? '#06a158' : '#ffffff',
                        backgroundColor: unanswered ? '#ffffff' : '#10b467',
                    }}
                >
                    {buttonText}
                </Button>
            </Card.Body>
        </Fragment>
    );
};

PollEntry.propTypes = {
    question: PropTypes.object.isRequired,
    unanswered: PropTypes.bool.isRequired,
};

export default PollEntry;
