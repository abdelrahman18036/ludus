import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation
import '../../assets/styles/style.css';
import { baseURL } from '../../Components/Auth/API';

import Loading from '../Loading/Loading';
import Tsparticles2 from '../Particles/Tsparticles2';

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

function SignUp() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });
  const [loading, setLoading] = useState(false); // Initialize loading state
  const [isRePassword, setIsRePassword] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuthentication = async () => {
      const isAuthenticated = await checkAuthStatus();
      if (isAuthenticated) {
        navigate('/market'); // Redirect if already logged in
      }
    };

    verifyAuthentication();
  }, [navigate]);

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
        setIsRePassword(true);
      return;
    }

    try {
      setLoading(true); 
      await axios.post(`${baseURL}/api/users/register`, {
        email: userData.email,
        password: userData.password,
        fullname: userData.name,
        username: userData.username
      });
      setLoading(false); // Reset loading state after the API request completes
      navigate('/login');
    } catch (error) {
      setLoading(false); // Reset loading state in case of an error
      let errorMessage = 'Failed to register. Please try again.';
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      console.error(errorMessage);
      // You can handle error feedback here
    }
  };

  return (
    <>
    <Tsparticles2 />
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
                  <form id="commentform" className="comment-form" onSubmit={handleSubmit}>
                    <fieldset className="name">
                      <label>Name *</label>
                      <input type="text" placeholder="Your name*" name="name" required onChange={handleInputChange} />
                    </fieldset>
                    <fieldset className="email">
                      <label>Email *</label>
                      <input type="email" placeholder="mail@website.com" name="email" required onChange={handleInputChange} />
                    </fieldset>
                    <fieldset className="user">
                      <label>Username *</label>
                      <input type="text" placeholder="orange123" name="username" required onChange={handleInputChange} />
                    </fieldset>
                    <fieldset className="password">
                      <label>Password *</label>
                      <input type="password" className="password-input" placeholder="Min. 8 characters" name="password" required onChange={handleInputChange} />
                    </fieldset>
                    <fieldset className="password">
                      <label>Confirm Password *</label>
                      <input type="password" className="password-input" placeholder="Confirm password" name="confirmPassword" required onChange={handleInputChange} />
                    </fieldset>
                      <div  style={{ fontSize: '20px', fontWeight:'bold' }} className="text-danger fontBig my-4 text-center">{isRePassword && 'Password does not match'}</div>
                    <div className="btn-submit mb-30">
                      {loading ? ( // Show loading indicator when loading is true
                         <div className='flex justify-center'> <Loading />  </div> 
                      ) : (
                        <button className="tf-button style-1 h50 w-100" type="submit">Sign up<i className="icon-arrow-up-right2"></i></button>
                      )}
                    </div>
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

export default SignUp;
