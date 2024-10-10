import axios from 'axios';
import { SERVERURL } from './constants';

// /api/users
async function register(email, name) {
    const userData = {name : name, email: email};

    try {
        const response = await axios.post(SERVERURL + '/api/users', userData);
        alert("회원가입 완료!")
    } catch (error){
        alert("회원가입 실패!")
    }
};
const getUserByEmail = async (email) => {
    try {
        const response = await axios.get(SERVERURL+`api/users/email/${email}`);
        console.log("User data:", response.data);
        console.log(typeof(response.data));
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.error("User not found.");
        } else {
            console.error("An error occurred:", error.message);
        }
    }
};

export default register;