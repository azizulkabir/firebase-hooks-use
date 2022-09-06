import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle, } from 'react-firebase-hooks/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [signInWithGoogle,  loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub,] = useSignInWithGithub(auth);
    const [user] = useAuthState(auth);
    
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

    return (
        <div>

            
            <button onClick={() => signInWithGoogle()}> Google SignIn</button>
            <button onClick={() => signInWithGithub()}> Github SignIn</button>
        </div>
    );
};

export default Login;