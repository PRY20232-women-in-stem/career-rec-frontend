import axiosInstance from '../config/AxiosAuthConfig';

export async function createStudent(studentData) {
    try {
        const response = await axiosInstance.post('/students', studentData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function getStudentById(studentId) {
    try {
        const response = await axiosInstance.get(`/students/${studentId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function updateStudentPassword(email, updatePasswordData) {
    try {
        const response = await axiosInstance.put(`/students/password/${email}`, updatePasswordData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function updateStudentVocationalTest(studentId) {
    try {
        const response = await axiosInstance.patch(`/students/${studentId}/vocational-test`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
