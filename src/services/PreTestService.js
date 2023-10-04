import axiosInstance from '../config/AxiosAuthConfig';

export async function createPreTest(preTestData) {
    try {
        const response = await axiosInstance.post('/pre-test', preTestData);
        return response.data;
    } catch (error) {
        throw error;
    }
}