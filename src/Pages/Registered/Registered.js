import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Registered = () => {
    const [agree, setAgree] = useState(false);

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleLogin = () => {
        navigate('/')
    }

    const handleRegistered = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name);

        createUserWithEmailAndPassword(email, password);
        navigate('/');


    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Registered</h2>
            <Form onSubmit={handleRegistered}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" name='name' />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Agree terms and condition" className={!agree ? 'ps-2 text-danger' : 'ps-2 text-primary'} />
                </Form.Group>

                <Button disabled={!agree} variant="primary" type="submit">
                    Registered
                </Button>
                <p>Already Registered? <Link to='/login' onClick={handleLogin} className='text-primary text-decoration-none'>Please Login</Link></p>
            </Form>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Registered;