import React from 'react';
import { Route, Routes } from "react-router-dom";
import SignIn from '../Components/SignIn/SignIn';
import SignUp from '../Components/SignUp/SignUp';
import LandingPage from '../Components/LayOut/LandingPage';

function RoutingHandler() {
    return (  
        <Routes>
            <Route path="/" element={<LandingPage />}>
                <Route index element={<LandingPage />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="sign-up" element={<SignUp />} />
                    {/* <Route path="about" element={<About />} /> */}
                    {/* <Route path="sign-up" element={<SignUp />} /> */}
                    {/* <Route path="landing" element={<Landing />} /> */}
            </Route>
        </Routes>
    );
}

export default RoutingHandler;
