import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //collect email and password
    const handleEmail =(event)=>{
        event.preventDefault();
        const email = event.target.value;
        setEmail(email);
    }
    const handlePassword =(event)=>{
        event.preventDefault();
        const password = event.target.value;
        setPassword(password);
    }
    //handle submit 
    const [createUserWithEmailAndPassword, user, loading, error]= useCreateUserWithEmailAndPassword(auth);
    const handleSubmit=(event)=>{
        event.preventDefault()
        createUserWithEmailAndPassword(email, password);
        console.log(email, password);
        if(loading){
            return <p>Loading....</p>
        }
        if(error){
            return(
                <div>{error.message}</div>
            )
        }
        if(user){
            return(
                <div>Name: {user.displayName}</div>
            )
        }
    }
    

    return (
        <div>
            <div className='mx-auto w-50'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;