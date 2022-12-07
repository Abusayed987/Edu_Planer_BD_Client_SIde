import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

import { toast } from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';


const googleProvider = new GoogleAuthProvider()

const Register = () => {
    const {
        createUser,
        updateUserProfile,
        emailVerification,
        googleLogin,
    } = useContext(AuthContext)

    const [accepted, setAccepted] = useState(false)


    const handleSubmitRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirmPass.value;
        console.log(form, name, photoURL, email, password, confirmPass);
        if (password.length < 6) {
            return toast.error('Password Should be 6 characters')
        }
        if (password !== confirmPass) {
            return toast.error("Password didn't Match")
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset()
                handleUpdateUserProfile(name, photoURL)
                handleEmailVerification();
                toast.success('Please verify your email address,before login!')
            })
            .catch((e) => console.error('e: ', e))
    }

    const handleEmailVerification = () => {
        emailVerification()
            .then(() => { })
            .catch(e => console.error(e))
    }


    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch((e) => console.error(e))
    }
    const handleGoogleLogin = () => {
        googleLogin(googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleCheckbox = event => {
        setAccepted(event.target.checked);
    }



    return (
        <div className='w-50 mx-auto mt-5'>
            <Form onSubmit={handleSubmitRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Full Name <span className='text-danger'>*</span></Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Enter Photo URL (Link)" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address <span className='text-danger'>*</span></Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password </Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password </Form.Label>
                    <Form.Control name='confirmPass' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={handleCheckbox}
                        label={<> Accepted <Link>Terms and condition </Link></>} />
                </Form.Group>
                <Button variant="info" type="submit" disabled={!accepted}>
                    Register
                </Button>
                <Form.Text className="text-danger">
                </Form.Text>
            </Form>
            <p>Already have an Account? <Link style={{ textDecoration: 'none' }} to='/login'>Please Login</Link></p>
            <div className='text-center '>
                <Button variant='outline-warning'
                    onClick={handleGoogleLogin}
                    className='m-3'>
                    Login with <br />
                    <img width={'30px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGjwH1vlzVXAR6VFKNiKyf37qHlN_gLk0w9g&usqp=CAU" alt="" />
                </Button>
                <Button variant='outline-secondary'
                    className='m-3'>
                    Login with <br />
                    <img width={'30px'} src="https://banner2.cleanpng.com/20180326/eye/kisspng-github-computer-icons-logo-github-5ab8a338143da0.8375508315220498480829.jpg" alt="" />
                </Button>
            </div>
        </div>
    );
};

export default Register;