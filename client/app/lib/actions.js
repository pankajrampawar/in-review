// action for login of the user
import axios from 'axios';

export async function userSignup (info) {
    try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/register', info)
        console.log(response.data);
    } catch (error) {
        return false
    }
    
};

//export  function userLogin () {

//}