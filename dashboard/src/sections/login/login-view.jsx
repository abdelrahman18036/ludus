import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import {
  Box, Card, Stack, Divider, TextField, Typography, IconButton,
  InputAdornment, useTheme
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha } from '@mui/material/styles';
import axios from 'axios';
import { baseURL } from 'src/components/Auth/API';
import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import { bgGradient } from 'src/theme/css';

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

export default function LoginView() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const verifyAuthentication = async () => {
      const isAuthenticated = await checkAuthStatus();
      if (isAuthenticated) {
        navigate('/');
      }
    };
    verifyAuthentication();
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8, 'Must be 8 characters or more').required('Required'),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(`${baseURL}/api/users/login`, {
          email: values.email,
          password: values.password
        });
        localStorage.setItem('userToken', response.data.accessToken);
        localStorage.setItem('id', response.data.id);
        navigate('/');
      } catch (error) {
        console.log('Error logging in:', error.response ? error.response.data : error);
        setError(error.response ? error.response.data : error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4" justifyContent="center" alignItems="center" style={{ textAlign: "center" }}>NFTMarket</Typography>
          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Login Now
            </Typography>
          </Divider>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
              <TextField
                name="email"
                label="Email address"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="primary"
                loading={loading}
              >
                Login
              </LoadingButton>
            </Stack>
          </form>
        </Card>
      </Stack>
    </Box>
  );
}
