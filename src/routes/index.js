import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import AddQuestion from '../views/AddQuestion';
import LeaderBoard from '../views/Leaderboard';
import NotFound from '../views/NotFound';
import Navigation from '../components/Navigation';
import PollSwitch from '../components/PollSwitch';

const AppRoutes = () => {
    return (
        <Fragment>
            <Navigation />
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='add' element={<AddQuestion />} />
                <Route path='questions/:question_id' element={<PollSwitch />} />
                <Route path='leaderboard' element={<LeaderBoard />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Fragment>
    );
};

export default AppRoutes;
