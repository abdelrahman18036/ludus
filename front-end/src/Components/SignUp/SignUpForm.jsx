import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Loading from '../Loading/Loading';
import Tsparticles2 from '../Particles/Tsparticles2';
import '../../assets/styles/style.css';
import { baseURL } from '../../Components/Auth/API';
import { Bounce, Flip, ToastContainer, toast } from "react-toastify";


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

function SignUpForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
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

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      username: Yup.string().required('Username is required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required')
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await axios.post(`${baseURL}/api/users/register`, {
          email: values.email,
          password: values.password,
          fullname: values.name,
          username: values.username
        });
        toast('🎉 Account Made Successfully  ', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        })
        setLoading(false);
        setTimeout  (() => {
          navigate('/login');
        },2500);
      } catch (error) {
        console.error('Failed to register:', error.response ? error.response.data : error);
        setError(error.response ? error.response.data : error);
        setLoading(false);
      }
    },
  });
  // useEffect(() => {  toast('🎉 Account Made Successfully  ', {
  //   position: "top-right",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "dark",
  //   transition: Flip,
  //   })},[]);

  return (
    <>
    <ToastContainer />
      <div id="wrapper">
        <div id="page" className="pt-40">
          <div className="tf-section-2 pt-60 widget-box-icon">
            <div className="themesflat-container w920">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading-section-1">
                    <h2 className="tf-title pb-16">Create your account</h2>
                    <p className="pb-40">Let’s get started with your NFTs</p>
                  </div>
                </div>
                <div className="col-12">
                  <div className="widget-login">
                    <form className="comment-form" onSubmit={formik.handleSubmit}>
                      <fieldset className="name">
                        <label>Name *</label>
                        <input type="text" name="name" required {...formik.getFieldProps('name')} />
                        {formik.touched.name && formik.errors.name ? (
                          <div className="error mt-4 capitalize font-weight-bold  text-danger text-danger">{formik.errors.name}</div>
                        ) : null}
                      </fieldset>
                      <fieldset className="email">
                        <label>Email *</label>
                        <input type="email" name="email" required {...formik.getFieldProps('email')} />
                        {formik.touched.email && formik.errors.email ? (
                          <div className="error mt-4 capitalize font-weight-bold  text-danger text-danger">{formik.errors.email}</div>
                        ) : null}
                      </fieldset>
                      <fieldset className="user">
                        <label>Username *</label>
                        <input type="text" name="username" required {...formik.getFieldProps('username')} />
                        {formik.touched.username && formik.errors.username ? (
                          <div className="error mt-4 capitalize font-weight-bold  text-danger text-danger">{formik.errors.username}</div>
                        ) : null}
                      </fieldset>
                      <fieldset className="password">
                        <label>Password *</label>
                        <input type="password" className="password-input" name="password" required {...formik.getFieldProps('password')} />
                        {formik.touched.password && formik.errors.password ? (
                          <div className="error mt-4   capitalize font-weight-bold text-danger text-danger">{formik.errors.password}</div>
                        ) : null}
                      </fieldset>
                      <fieldset className="password">
                        <label>Confirm Password *</label>
                        <input type="password" className="password-input" name="confirmPassword" required {...formik.getFieldProps('confirmPassword')} />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                          <div className="error mt-4  capitalize font-weight-bold  text-danger text-danger">{formik.errors.confirmPassword}</div>
                        ) : null}
                      </fieldset>
                      <div className="btn-submit mb-30">
                        {loading ? (
                          <div className='flex justify-center'><Loading /></div>
                        ) : (
                          <button className="tf-button style-1 h50 w-100" type="submit">Sign up<i className="icon-arrow-up-right2"></i></button>
                        )}
                      </div>
                      {
                        error && <div className="error text-danger capitalize font-weight-bold">{error.message}</div>
                      }
                    </form>
                    <div className="no-account">Already have an account? <a href="/login" className="tf-color">Log in</a></div>
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

export default SignUpForm;
