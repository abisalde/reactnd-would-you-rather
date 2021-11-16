import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import Avatar from './Avatar';
import Layout from './Layout';

const ScoreCard = () => {
    return (
        <Fragment>
            <Layout>
                <Card className='mt-3 d-flex flex-row p-2'>
                    <Avatar />
                    <Card.Body>
                        <Card.Title>Sarah Edo</Card.Title>
                        <div className='text'>
                            <Card.Text>
                                <span>Answered questions</span>
                                <span></span>
                            </Card.Text>
                            <Card.Text>
                                <span>Created questions</span>
                                <span></span>
                            </Card.Text>
                        </div>
                    </Card.Body>
                    <Card>
                        <Card.Header>
                            <Card.Title>Score</Card.Title>
                            <div className='rounded-border'>
                                <span>5</span>
                            </div>
                        </Card.Header>
                    </Card>
                </Card>
            </Layout>
        </Fragment>
    );
};

export default ScoreCard;
