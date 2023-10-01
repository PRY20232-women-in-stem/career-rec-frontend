import axios from 'axios';

export async function createStudent(studentData) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_URL}/students`, studentData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function getStudentById(studentId) {
    try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/students/${studentId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function getStudentByEmail(email) {
    try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/students/email/${email}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function updateStudentPassword(email, updatePasswordData) {
    try {
        const response = await axios.put(`${process.env.REACT_APP_URL}/students/password/${email}`, updatePasswordData);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function updateStudentPreTest(studentId) {
    try {
        const response = await axios.patch(`${process.env.REACT_APP_URL}/students/${studentId}/pre-test`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function updateStudentPostTest(studentId) {
    try {
        const response = await axios.patch(`${process.env.REACT_APP_URL}/students/${studentId}/pre-test`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
