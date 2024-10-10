import axios from 'axios';
import { SERVERURL } from './constants';

// /api/users
async function register(email, name) {
    const userData = {name : name, email: email};

    try {
        const response = await axios.post(SERVERURL + '/api/users', userData);
        alert("회원가입 완료!")
    } catch (error){
        console.log(error.response.status);
    }
}

export default register;