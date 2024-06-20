import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const root = () => {
    return (
        <div>
            <Outlet>

            </Outlet>
            <Footer />
        </div>
    );
};

export default root;