import axiosInstance from '../config/AxiosAuthConfig';

export async function loginUser(loginData) {
    try {
        const response = await axiosInstance.post(`/auth/login`, loginData);
        return response.data;
    } catch (error) {
        throw error;
    }
}