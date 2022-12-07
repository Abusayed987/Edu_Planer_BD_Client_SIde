import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <Header></Header>
            <Outlet></Outlet>
            <br />
            <br />
            <div style={{ position: 'absolute', bottom: '0', width: '100%', height: '2.5rem', }}>
                <Footer ></Footer>
            </div>
        </div>
    );
};

export default Main;