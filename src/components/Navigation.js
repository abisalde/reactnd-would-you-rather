import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, Container, Button } from 'react-bootstrap';
import styles from '../assets/css/styles.module.css';
import Avatar from './Avatar';
import userImage from '../assets/img/tylerG.png';
import { handleSetAuthUser } from '../redux/actions/authUser';

const Navigation = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(handleSetAuthUser());
    };

    return (
        <>
            <Navbar>
                <Container>
                    <Nav className='justify-content-between w-100 mt-3 px-6'>
                        <div className={styles.navRight}>
                            <NavItem>
                                <Nav.Link name='home' as={NavLink} to='/'>
                                    Home
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link
                                    name='new poll question'
                                    as={NavLink}
                                    to='add'
                                >
                                    New Question
                                </Nav.Link>
                            </NavItem>
                            <NavItem>
                                <Nav.Link
                                    name='leader board'
                                    as={NavLink}
                                    to='leaderboard'
                                >
                                    Leader Board
                                </Nav.Link>
                            </NavItem>
                        </div>
                        <div className={styles.navLeft}>
                            <NavItem>
                                <Navbar.Text>Hello, </Navbar.Text>
                                <Navbar.Text>My Name</Navbar.Text>
                                <Avatar
                                    width={40}
                                    height={40}
                                    avatarURL={userImage}
                                    name='Test User'
                                />
                            </NavItem>
                            <NavItem>
                                <Nav.Link>
                                    <Button
                                        onClick={handleLogout}
                                        variant='light'
                                    >
                                        Logout
                                    </Button>
                                </Nav.Link>
                            </NavItem>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;
