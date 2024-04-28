import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Loading from '../Loading/Loading';
import '../../assets/styles/style.css';
import { baseURL } from '../Auth/API';

const checkAuthStatus = async () => {
    try {
        const response = await axios.get(`${baseURL}/api/users/verify`, {
            headers: {
                'x-access-token': localStorage.getItem('userToken')
            }
        });
        return response.data.message;
    } catch (error) {
        console.error('Error checking auth status:', error.response.data);
        return false;
    }
};

function LoginForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    useEffect(() => {
        const verifyAuthentication = async () => {
            const isAuthenticated = await checkAuthStatus();
            if (isAuthenticated) {
                navigate('/market');
            }
        };

        verifyAuthentication();
    }, [navigate]);

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().min(8, 'Must be 8 characters or more').required('Required'),
    })
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            const newValues = {
                email: values.email,
                password: values.password
            }
            setLoading(true);
            try {
                const response = await axios.post(`${baseURL}/api/users/login`, newValues)
                localStorage.setItem('userToken', response.data.accessToken);
                localStorage.setItem('id', response.data.id);
                navigate('/market');
            } catch (error) {
                console.log('Error logging in:', error.response ? error.response.data : error);
                setError(error.response ? error.response.data : error);
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <>
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
                                        <form id="commentform" className="comment-form" onSubmit={formik.handleSubmit}>
                                            <fieldset className="email">
                                                <label>Email *</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.email}
                                                    required
                                                />
                                                {formik.touched.email && formik.errors.email ? (
                                                    <div className="error mt-3 font-weight-bold text-danger">{formik.errors.email}</div>
                                                ) : null}
                                            </fieldset>
                                            <fieldset className="password">
                                                <label>Password *</label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.password}
                                                    required
                                                />
                                                {formik.touched.password && formik.errors.password ? (
                                                    <div className="error error mt-3 font-weight-bold  text-danger ">{formik.errors.password}</div>
                                                ) : null}
                                            </fieldset>
                                            <div className="btn-submit mb-30">
                                                {loading ? (
                                                    <div className='flex justify-center'><Loading /></div>
                                                ) : (
                                                    <button className="tf-button style-1 h50 w-100" type="submit">Login<i className="icon-arrow-up-right2"></i></button>
                                                )}
                                            </div>
                                            {
                                                error && <div className="error text-danger capitalize font-weight-bold">{error.message}</div>
                                            }
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
