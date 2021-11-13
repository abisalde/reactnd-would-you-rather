import React, { Fragment } from 'react';
import { Row, Col, Card, ProgressBar } from 'react-bootstrap';

const PollResult = () => {
    return (
        <Fragment>
            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>
                                <span>Would you rather </span>
                                <span>JavaScript</span>
                            </Card.Title>
                            <div className='pt-3 pb-2'>
                                <ProgressBar now={50} label={`${50}%`} />
                            </div>
                            <Card.Title
                                style={{ fontSize: '14px' }}
                                className='text-center'
                            >
                                <span>1</span> out of <span>5</span> votes
                            </Card.Title>
                        </Card.Header>
                    </Card>
                    <Card className='mt-3'>
                        <Card.Header>
                            <Card.Title>
                                <span>Would you rather </span>
                                <span>Python</span>
                            </Card.Title>
                            <div className='pt-3 pb-2'>
                                <ProgressBar now={50} label={`${50}%`} />
                            </div>
                            <Card.Title
                                style={{ fontSize: '14px' }}
                                className='text-center'
                            >
                                <span>1</span> out of <span>5</span> votes
                            </Card.Title>
                        </Card.Header>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default PollResult;
