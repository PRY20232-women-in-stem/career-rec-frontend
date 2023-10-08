import axiosInstance from '../config/AxiosAuthConfig';

export async function createVocationalTestPrediction(studentId, vocationalTestData) {
    try {
        const response = await axiosInstance.post(`/vocational-test/predict/student/${studentId}`, vocationalTestData);
        return response.data;
    } catch (error) {
        throw error;
    }
}