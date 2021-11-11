import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, Container, Button } from 'react-bootstrap';
import Avatar from './Avatar';
import styles from '../assets/css/styles.module.css';
import userImage from '../assets/img/bt1.png';
import NavButton from './NavButton';

const Navigation = () => {
    return (
        <>
            <Navbar>
                <Container>
                    <Nav className='justify-content-between w-100'>
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
                            <div className={styles.user}>
                                <Navbar.Text>My Name</Navbar.Text>
                                <Avatar
                                    width={40}
                                    height={40}
                                    avatarURL={userImage}
                                    name='Test User'
                                />
                            </div>
                            <Button>
                                <span className='glyphicon glyphicon-log-out'></span>
                                Logout
                            </Button>
                        </div>
                    </Nav>
                </Container>
            </Navbar>

            <NavButton />
        </>
    );
};

export default Navigation;
