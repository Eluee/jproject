import axios from 'axios';


var serverUrl = 'http://localhost:8080';

// /api/users
async function register(email, name) {
    const userData = {name : name, email: email};

    try {
        const response = await axios.post(serverUrl + '/api/users', userData);
        console.log("User added" + response.data);
    } catch (error){
        console.log(error.message);
    }
}

export default register;