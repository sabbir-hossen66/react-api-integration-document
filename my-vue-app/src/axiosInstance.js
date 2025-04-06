// import { baseUrl } from './api';
// import { logout } from './auth';
// import { getGameToken } from './token';


import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// const token2 = localStorage.getItem('token1')
const token2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdmOTc5ZmY5LTY0YmUtNGVjMy1hOGRkLWViMGI1MTM0YmE2MSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzQzODc2NTY4LCJleHAiOjE3NzU0MTI1Njh9.pCPA8Pt1phVVGKJjvraO1b1C69RqdwKbsFA81mX9C6U"
const logout = () => {
  localStorage.removeItem('token1');
  localStorage.removeItem('user');
  window.location.href = '/login'; // Redirect to login page
}

// Request interceptor to add the token to headers
axiosInstance.interceptors.request.use((config) => {
  const token = token2 || localStorage.getItem('token1');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

// Response interceptor to handle token expiration
axiosInstance.interceptors.response.use(
  function (response) {
    const responseObject = {
      data: response?.data?.data,
      meta: response?.data?.meta,
      message: response?.data?.message,
      success: response?.data?.success,
    };

    return responseObject;
  },

  (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
     logout(); 

    }

    const responseObject = {
      statusCode: error?.response?.status || 500,
      message: error?.response?.data?.message || 'Something went wrong',
      errorMessages: error?.response?.data?.errorMessages,
      success: error?.response?.data?.success,
    };
    console.log(responseObject, 'responseObject');

    return Promise.reject(responseObject);
  }
);

export default axiosInstance;
