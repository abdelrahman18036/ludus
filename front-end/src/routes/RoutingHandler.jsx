import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from '../Components/Login/login';
import SignUp from '../Components/SignUp/SignUp';
import LandingPage from '../Components/LandingPage/LandingPage';
import ContactUs from '../Components/ContactUs/ContactUs';
import ProtectedRoute from './ProtectedRoute';
import Market from '../Components/Market/Market';
function RoutingHandler() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />}>
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="contact" element={<ContactUs />} />
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
