import axiosInstance from '../config/AxiosAuthConfig';

export async function createPostTest(studentId, postTestData) {
    try {
        const response = await axiosInstance.post(`/post-test/student/${studentId}`, postTestData);
        return response.data;
    } catch (error) {
        throw error;
    }
}