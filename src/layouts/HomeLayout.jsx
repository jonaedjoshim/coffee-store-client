import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/Header';
import Footer from '../component/Footer';

const HomeLayOut = () => {
    return (
        <div>
            <Header />
            <div className='max-w-7xl mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default HomeLayOut;