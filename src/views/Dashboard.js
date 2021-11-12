import React, { Fragment } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import Layout from '../components/Layout';
import QuestionCard from '../components/QuestionCard';

const Dashboard = () => {
    return (
        <Fragment>
            <Navigation />
            <Layout>
                <Tabs className='justify-content-between flex-nowrap'>
                    <Tab.Pane
                        eventKey='unanswered'
                        title='Unanswered Questions'
                    >
                        <QuestionCard />
                    </Tab.Pane>
                    <Tab.Pane eventKey='profile' title='Answered Questions'>
                        <QuestionCard />
                    </Tab.Pane>
                </Tabs>
            </Layout>
        </Fragment>
    );
};

export default Dashboard;
