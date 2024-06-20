import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const root = () => {
    return (
        <div>
            <Header />
            <Outlet>

            </Outlet>
            <Footer />
        </div>
    );
};

export default root;