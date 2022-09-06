import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle, } from 'react-firebase-hooks/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Login = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [signInWithGithub,] = useSignInWithGithub(auth);
    const [user] = useAuthState(auth);

    const handleSubmit=(event)=>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if (loading) {
        return (
            <div>
                <p>Loading.....</p>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        )
    }

    if (user) {
        return (
            <div>
                Name: {user.displayName}
            </div>
        )
    }
    const handleNavigate = ()=>{
        console.log('click to sign up')
    }

    return (
        <div className='text-center'>
            <div className='mx-auto w-50 my-3 text-start'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="info" type="submit">
                        Login 
                    </Button>
                </Form>
                <>  Have not Account?? <Link className='btn btn-info' to="/register">SignUp Here</Link></>
            </div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <button className='rounded-2 mx-1 bg-info' onClick={() => signInWithGoogle()}> Google SignIn</button>
            <button className='rounded-2 mx-1 bg-info' onClick={() => signInWithGithub()}> Github SignIn</button>

        </div>
    );
};

export default Login;