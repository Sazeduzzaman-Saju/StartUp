import React from 'react';
import Header from '../page/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../page/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;