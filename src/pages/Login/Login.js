import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const Login = () => {
    const {
        logInWithEmailAndPass,
        setLoading,
        setUser,
        googleLogin,
        githubLogin
    } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmitLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;



        logInWithEmailAndPass(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset()
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    toast.error('Your Email is not verified, Please verified your email address.')
                }
            })
            .catch((e) => {
                toast.error(e.message)
                console.error('e: ', e)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    const handleGithubLogin = () => {
        githubLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='w-50 mx-auto mt-4'>
            <Form onSubmit={handleSubmitLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                    <Link style={{ textDecoration: 'none', fontSize: '13px' }} >Forget Password?</Link>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>

                <Form.Text className="text-danger">
                    {/*error */}
                </Form.Text>
            </Form>
            <div>
                <small>
                    New to this website ? <Link style={{ textDecoration: 'none' }} to='/register'>Please Register</Link>
                </small>
            </div> <br />
            <div className='text-center '>
                <Button variant='outline-warning'
                    onClick={handleGoogleLogin}
                    className='m-3'>
                    Login with <br />
                    <img width={'30px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGjwH1vlzVXAR6VFKNiKyf37qHlN_gLk0w9g&usqp=CAU" alt="" />
                </Button>
                <Button variant='outline-secondary'
                    onClick={handleGithubLogin}
                    className='m-3'>
                    Login with <br />
                    <img width={'30px'} src="https://banner2.cleanpng.com/20180326/eye/kisspng-github-computer-icons-logo-github-5ab8a338143da0.8375508315220498480829.jpg" alt="" />
                </Button>
            </div>
            <br /><br /><br />
            <br /><br /><br />
        </div>
    );
};

export default Login;