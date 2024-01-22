// authService.js
import axios from 'axios';

const API_BASE_URL = 'your-api-base-url';

const authenticate = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
    const { token } = response.data;
    localStorage.setItem('token', token);
    return true;
  } catch (error) {
    console.error('Authentication failed', error);
    return false;
  }
};

const logout = () => {
  localStorage.removeItem('token');
};

const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

export { authenticate, logout, isAuthenticated };
