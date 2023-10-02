import axios from 'axios';

export async function loginUser(loginData) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_URL}/auth/login`, loginData);
        return response.data;
    } catch (error) {
        throw error;
    }
}