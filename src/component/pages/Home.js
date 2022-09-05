import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../Athentication/Register';
import Login from '../Authentication/Login';
import About from './about';
import CheckOut from './CheackOut';

const Home = () => {
    return (
        <div>
           <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
           </Routes>
        </div>
    );
};

export default Home;