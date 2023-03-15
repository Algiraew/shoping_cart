import axios from 'axios';

export const API_URL = 'https://shopping-cart-api-ez2n.onrender.com/';

const instance = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

export default instance;
