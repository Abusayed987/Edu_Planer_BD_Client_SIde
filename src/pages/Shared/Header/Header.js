import React, { useContext, useState } from 'react';
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';



const Header = () => {
    const { user } = useContext(AuthContext)

    let [theme, setTheme] = useState(true);

    const handleThemeChange = () => {
        return setTheme(!theme);
    }
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
                        <div onClick={() => handleThemeChange()}>
                            {theme
                                ?
                                <>
                                    <Button variant="light"
                                        className='ms-5 border '>Dark <FaToggleOff className='fs-3'></FaToggleOff> </Button>

                                </>
                                :
                                <Button variant="dark"
                                    className='ms-5 border '>Light <FaToggleOn className='fs-3'></FaToggleOn></Button>
                            }
                        </div>
                        <Nav className="me-auto">
                            <Link className='text-decoration-none btn btn-light ms-3'
                                to='/courses'>
                                Courses
                            </Link>
                            <Link className='text-decoration-none btn btn-light ms-3'
                                to='/blog' >Blog</Link>

                            <Link className='text-decoration-none btn btn-light ms-3'
                                to='/faq' >FAQ</Link>

                        </Nav>
                        <Nav>
                            {/* <Link>{user.disPlayName}</Link> */}
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