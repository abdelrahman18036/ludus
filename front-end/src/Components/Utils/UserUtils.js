

import axios from 'axios';
import { baseURL } from '../Auth/API';

/**
 * Fetches user data from the server using the user's ID and token stored in localStorage.
 * @returns {Object} - An object containing the user's username and profile picture.
 */
export const fetchUserData = async () => {
    const userId = localStorage.getItem('id');
    const userToken = localStorage.getItem('userToken');

    if (!userId || !userToken) return { username: '', profilePicture: '' };

    try {
        const response = await axios.get(`${baseURL}/api/users/${userId}`, {
            headers: { 'x-access-token': userToken },
        });

        return {
            username: response.data.username || '',
            profilePicture: response.data.profilePicture || '',
        };
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        return { username: '', profilePicture: '' };
    }
};
