import React from 'react';
import { Route, Routes } from "react-router-dom";
import SignIn from '../Components/SignIn/SignIn';
import SignUp from '../Components/SignUp/SignUp';

function RoutingHandler() {
    return (  
        <Routes>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            {/* <Route path="/" element={<Home />}> */}
                {/* <Route path="about" element={<About />} /> */}
                {/* <Route path="sign-up" element={<SignUp />} /> */}
                {/* <Route path="landing" element={<Landing />} /> */}
            {/* </Route> */}
        </Routes>
    );
}

export default RoutingHandler;
