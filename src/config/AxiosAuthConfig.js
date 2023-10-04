import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_URL,
});

const getAccessToken = () => {
    const token = localStorage.getItem('access_token');
    if (token) {
        return `Bearer ${token}`;
    }
    return null;
};

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = getAccessToken();
        if (accessToken) {
            config.headers.Authorization = accessToken;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            // Token inválido o caducado, eliminarlo del localStorage
            localStorage.removeItem('access_token');
            localStorage.removeItem('current_user');

            if (error.config.url !== '/auth/login') {
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
