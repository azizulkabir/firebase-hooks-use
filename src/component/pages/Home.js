import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../Authentication/Register';
import Login from '../Authentication/Login';
import About from '../Authentication/Login';

import CheckOut from './CheackOut';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
           <Routes>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
           </Routes>
        </div>
    );
};

export default Home;