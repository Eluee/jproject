import axios from 'axios';


var serverUrl = 'http://localhost:8080';

// /api/users
async function register(email, name) {
    const userData = {name : name, email: email};

    try {
        const response = await axios.post(serverUrl + '/api/users', userData);
        alert("회원가입 완료!")
    } catch (error){
        alert("회원가입 실패!")
    }
}

export default register;