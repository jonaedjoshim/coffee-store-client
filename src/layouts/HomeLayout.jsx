import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/Header';

const HomeLayOut = () => {
    return (
        <div>
            <Header />
            <div className='max-w-7xl mx-auto'>
                <Outlet />
            </div>
        </div>
    );
};

export default HomeLayOut;