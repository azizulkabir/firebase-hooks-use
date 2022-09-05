import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='p-1 mx-auto w-50'>
            <Link className='btn btn-secondary mx-1' to='/'>Home</Link>
            <Link className='btn btn-secondary mx-1' to='/About'>About</Link>
            <Link className='btn btn-secondary mx-1' to='/checkout'>Checkout</Link>
            <Link className='btn btn-secondary mx-1' to='/login'>Login</Link>
            <Link className='btn btn-secondary mx-1' to='/register'>Register</Link>
        </div>
    );
};

export default Header;