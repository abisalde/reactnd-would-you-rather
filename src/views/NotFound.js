import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import Layout from '../components/Layout';

const NotFound = () => {
    return (
        <Fragment>
            <Layout>
                <Card.Header
                    className='text-center d-flex align-items-center justify-content-center flex-column'
                    style={{ height: '350px' }}
                >
                    <Card.Title style={{ fontSize: '50px', fontWeight: 600 }}>
                        404
                    </Card.Title>
                    <Card.Subtitle className='pt-3'>
                        There's no POLL Question here, Go back Home.
                    </Card.Subtitle>
                </Card.Header>
            </Layout>
        </Fragment>
    );
};

export default NotFound;
