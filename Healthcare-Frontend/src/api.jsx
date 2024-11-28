import axios from 'axios';

const API_URL = "http://localhost:5000/api";

const apiRequest = async (url, method = 'GET', data = null, token = null) => {
    try {
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const response = await axios({
            url: `${API_URL}${url}`,
            method: method,
            headers: { ...headers, 'Content-Type': 'application/json' },
            data: data,
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || 'Error');
        } else {
            throw new Error('Network error');
        }
    }
};

export const registerUser = (username, email, password) => {
    return apiRequest('/auth/register', 'POST', { username, email, password });
};

export const loginUser = (email, password) => {
    return apiRequest('/auth/login', 'POST', { email, password });
};

export const getDashboard = (token) => {
    return apiRequest('/healthcare/dashboard', 'GET', null, token);
};
