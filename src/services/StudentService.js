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

export async function getStudentByEmail(email) {
    try {
        const response = await axiosInstance.get(`/students/email/${email}`);
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

export async function updateStudentPreTest(studentId) {
    try {
        const response = await axiosInstance.patch(`/students/${studentId}/pre-test`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function updateStudentPostTest(studentId) {
    try {
        const response = await axiosInstance.patch(`/students/${studentId}/post-test`);
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

export async function updateStudentRecArea(studentId, recArea) {
    try {
        const response = await axiosInstance.patch(`/students/${studentId}/recommend-area/${recArea}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}