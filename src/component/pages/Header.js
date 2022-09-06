import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from "firebase/auth";

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
        console.log('clicked sign out')
    }
    return (
        <div className='p-1 mx-auto w-50'>
            <Link className='btn btn-secondary mx-1' to='/'>Home</Link>
            <Link className='btn btn-secondary mx-1' to='/about'>About</Link>
            <Link className='btn btn-secondary mx-1' to='/checkout'>Checkout</Link>

            {
                user ? <button className='btn btn-secondary mx-1' onClick={handleSignOut}> SignOut</button>
                    :
                    <Link className='btn btn-secondary mx-1' to='/login'> Login</Link>

            }

        </div>
    );
};

export default Header;