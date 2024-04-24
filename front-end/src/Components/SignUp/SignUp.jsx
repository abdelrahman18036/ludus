import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation
import '../../assets/styles/style.css';
import { baseURL } from '../../Components/Auth/API';
import Swal from 'sweetalert2';

function SignUp() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      Swal.fire({
        title: 'Error!',
        text: 'Passwords do not match!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }

    try {
      await axios.post(`${baseURL}/api/users/register`, {
        email: userData.email,
        password: userData.password,
        fullname: userData.name,
        username: userData.username

      });
      Swal.fire({
        title: 'Registration successful!',
        text: 'You will be redirected in 3 seconds.',
        icon: 'success',
        timer: 3000,
        timerProgressBar: true,
        willClose: () => {
          navigate('/market');
        }
      });
    } catch (error) {
      let errorMessage = 'Failed to register. Please try again.';
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      console.error(error);
      Swal.fire({
        title: 'Failed to register!',
        text: errorMessage,
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
                    <div className="btn-submit mb-30">
                      <button className="tf-button style-1 h50 w-100" type="submit">Sign up<i className="icon-arrow-up-right2"></i></button>
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
  );
}

export default SignUp;
