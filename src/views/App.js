import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingBar } from 'react-redux-loading';
import { handleInitialData } from '../redux/actions/shared';

// Import all components here
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
    const dispatch = useDispatch();
    const authUser = useSelector(({ authUser }) => authUser);

    console.log('Authed User: ', authUser);

    useEffect(() => {
        dispatch(handleInitialData());
    }, [dispatch]);

    return (
        <Router>
            <div className='App'>
                <LoadingBar />
                {authUser === null ? (
                    <Routes>
                        <Route path='/' element={<Login />} />
                    </Routes>
                ) : (
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                    </Routes>
                )}
            </div>
        </Router>
    );
};

export default App;
