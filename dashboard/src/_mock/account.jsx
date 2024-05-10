import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from 'src/components/Auth/API';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function Account() {
  const [userData, setUserData] = useState({
    displayName: 'Abdorange',
    email: 'demo@minimals.cc',
    photoURL: '/assets/images/avatars/avatar_25.jpg',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('id');
      const userToken = localStorage.getItem('userToken');
      try {
        const response = await axios.get(`${baseURL}/api/users/${userId}`, {
          headers: { 'x-access-token': userToken },
        });
        if (response.data) {
          setUserData({
            displayName: response.data.username || userData.displayName, // Fallback to existing display name if not present
            email: response.data.email || userData.email, // Fallback to existing email if not present
            photoURL: response.data.profilePicture || userData.photoURL, // Fallback to existing photoURL if not present
          });
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Box
      sx={{
        my: 3,
        mx: 2.5,
        py: 2,
        px: 2.5,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
      }}
    >
      <Avatar src={userData.profilePicture} alt="photoURL" />

      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2">{userData.displayName}</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {userData.role}
        </Typography>
      </Box>
    </Box>
  );
};

