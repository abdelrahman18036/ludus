import React from 'react';
import { Route, Routes } from "react-router-dom";
import SignUp from '../Components/SignUp/SignUp';
import LandingPage from '../Components/LandingPage/LandingPage';
import ContactUs from '../Components/ContactUs/ContactUs';
import ProtectedRoute from './ProtectedRoute';
import Market from '../Components/Market/Market';
import MainLayOut from '../Components/Layout/MainLayOut';
import Loading from '../Components/Loading/Loading';
import Err404 from '../Components/404/Err404';
import Maintenance from '../Components/Maintaince/Maintenance';
import Product from '../Components/Market/Components/Product/NFTDetails';
import Login from '../Components/Login/Login';
function RoutingHandler() {
    return (
        <Routes>
            <Route path="/" element={<MainLayOut />}>
            </Route>
            <Route path="Loading" element={<Loading />} />
            <Route path="login" element={<Login />} />
            <Route path="404" element={<Err404 />} />
            <Route path="maintenance" element={<Maintenance />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="nft/:id" element={
                                            <ProtectedRoute>
                                                <Product />
                                            </ProtectedRoute>
                                        } />
            <Route
                path="market"
                element={
                    <ProtectedRoute>
                        <Market />
                    </ProtectedRoute>
                }
            />
            {/* <Route path="about" element={<About />} /> */}
            {/* <Route path="sign-up" element={<SignUp />} /> */}
            {/* <Route path="landing" element={<Landing />} /> */}
        </Routes>
    );
}

export default RoutingHandler;
