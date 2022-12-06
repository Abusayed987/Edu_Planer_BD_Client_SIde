import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Link className='text-decoration-none text-dark fs-5 mt-1' to='/'>
                        <img
                            style={{ height: '40px' }}
                            src="./eduPlaner.png" alt="logo" />
                        Edu Planer BD
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='text-decoration-none btn btn-light '
                                to='/courses'>
                                Courses
                            </Link>
                            <Link className='text-decoration-none btn btn-light '
                                to='/blog' >Blog</Link>

                            <Link className='text-decoration-none btn btn-light '
                                to='/faq' >FAQ</Link>
                        </Nav>
                        <Nav>
                            <Link className='text-decoration-none btn btn-light '
                                to='/login'>
                                Login
                            </Link>
                            <Link className='text-decoration-none btn btn-light '
                                to='/register'>
                                Register
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;