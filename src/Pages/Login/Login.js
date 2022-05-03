
import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SocialLogin from '../SocialLogin/SocialLogin';
import auth from './../../firebase.init';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password)

    }
    const navigateRegistered = () => {
        navigate('/registered');
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');

        }
        else {
            toast('enter your email address');
        }
    }


    let errorElement;

    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error?.message} {error.message}</p>

            </div>

    }

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>New to travel? <Link to='/registered' onClick={navigateRegistered} className='text-danger text-decoration-none'>Please Registered</Link></p>

                <p>Forget Password?<button onClick={handleResetPassword} className='btn btn-link text-primary text-decoration-none'>Reset Password</button></p>
            </Form>
            {errorElement}

            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>

        </div>

    );
};

export default Login;