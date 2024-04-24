import React from 'react';
import { Route, Routes } from "react-router-dom";
import SignIn from '../Components/SignIn/SignIn';
import SignUp from '../Components/SignUp/SignUp';
import LandingPage from '../Components/LandingPage/LandingPage';
import ContactUs from '../Components/ContactUs/ContactUs';

function RoutingHandler() {
    return (  
        <Routes>
            <Route path="/" element={<LandingPage />}>
            </Route>
                <Route path="sign-in" element={<SignIn />} />
                <Route path="sign-up" element={<SignUp />} />
                <Route path="contact" element={<ContactUs />} />
                    {/* <Route path="about" element={<About />} /> */}
                    {/* <Route path="sign-up" element={<SignUp />} /> */}
                    {/* <Route path="landing" element={<Landing />} /> */}
        </Routes>
    );
}

export default RoutingHandler;
