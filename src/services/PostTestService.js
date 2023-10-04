import axiosInstance from '../config/AxiosAuthConfig';

export async function createPostTest(postTestData) {
    try {
        const response = await axiosInstance.post('/post-test', postTestData);
        return response.data;
    } catch (error) {
        throw error;
    }
}