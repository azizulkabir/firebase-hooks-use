import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='p-1 mx-auto w-50'>
            <Link className='mx-1 text-success' to='/'>Home</Link>
            <Link className='mx-1 text-success' to='/About'>About</Link>
            <Link className='mx-1 text-success' to='/checkout'>Checkout</Link>
            <Link className='mx-1 text-success' to='/login'>Login</Link>
            <Link className='mx-1 text-success' to='/register'>Register</Link>
        </div>
    );
};

export default Header;