import axios from 'axios';
import { SERVERURL } from './constants';

// /api/users
async function register(email, name) {
    const userData = { name: name, email: email };

    try {
        const response = await axios.post(SERVERURL + '/api/users', userData);
        alert("회원가입 완료!");
    } catch (error) {
        alert("회원가입 실패!");
    }
}

const getUserByEmail = async (email) => {
    try {
        const response = await axios.get(SERVERURL + `/api/users/email/${email}`);
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

const updateUser = async (email, difflevel, correct_rate) => {
    try {
        const response = await fetch(`${SERVERURL}/api/users/${email}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                difflevel: difflevel,
                correct_rate: correct_rate,
            }),
        });

        if (!response.ok) {
            throw new Error('Error updating user');
        }

        const updatedUser = await response.json();
        console.log('Updated User:', updatedUser);
    } catch (error) {
        console.error(error);
    }
};



// 두 함수를 한 번에 export
 export { getUserByEmail, register, updateUser}
