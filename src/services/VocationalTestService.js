import axiosInstance from '../config/AxiosAuthConfig';

export async function createVocationalTestPrediction(vocationalTestData) {
    try {
        const response = await axiosInstance.post('/vocational-test/predict', vocationalTestData);
        return response.data;
    } catch (error) {
        throw error;
    }
}