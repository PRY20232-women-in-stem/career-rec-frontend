import axiosInstance from '../config/AxiosAuthConfig';

export async function createPreTest(studentId, preTestData) {
    try {
        const response = await axiosInstance.post(`/pre-test/student/${studentId}`, preTestData);
        return response.data;
    } catch (error) {
        throw error;
    }
}