import React, { useState } from 'react';
import axios from 'axios';
import '../../assets/styles/style.css';
import Swal from 'sweetalert2';
import { baseURL } from '../Auth/API';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${baseURL}/api/users/login`, { email, password });
            const { token } = response.data;
            localStorage.setItem('userToken', response.data.accessToken);
            localStorage.setItem('id', response.data.id);
            Swal.fire({
                title: 'Login successful!',
                text: 'You will be redirected in 3 seconds.',
                icon: 'success',
                timer: 3000,
                timerProgressBar: true,
                didClose: () => {
                    navigate('/market');
                }
            });
        } catch (error) {
            Swal.fire({
                title: 'Failed to login!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        }
    };

    return (
        <div id="wrapper">
            <div id="page" className="pt-40">
                <div className="tf-section-2 pt-60 widget-box-icon">
                    <div className="themesflat-container w920">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="heading-section-1">
                                    <h2 className="tf-title pb-16">Login</h2>
                                    <p className="pb-40">Get started today by entering just a few details</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="widget-login">
                                    <form id="commentform" className="comment-form" onSubmit={handleLogin}>
                                        <fieldset className="email">
                                            <label>Email *</label>
                                            <input type="email" id="email" placeholder="mail@website.com" name="email" tabIndex={2} required onChange={(e) => setEmail(e.target.value)} />
                                        </fieldset>
                                        <fieldset className="password">
                                            <label>Password *</label>
                                            <input type="password" className="password-input" id="password" placeholder="Min. 8 character" name="password" tabIndex={2} required onChange={(e) => setPassword(e.target.value)} />
                                        </fieldset>
                                        <div className="btn-submit mb-30">
                                            <button className="tf-button style-1 h50 w-100" type="submit">Login<i className="icon-arrow-up-right2"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
