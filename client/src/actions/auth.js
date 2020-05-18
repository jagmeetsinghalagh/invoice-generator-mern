import axios from 'axios';

import { 
    SIGNUP_SUCCESS, 
    LOGIN_SUCCESS, 
} from './types';

export const signupUser = (data, history) => async dispatch => {
    try {
        const body = JSON.stringify(data);
        const config = {
            'headers': {
                'Content-Type': 'Application/json'
            }
        };
        const response = await axios.post('http://localhost:8000/signup',body,config);
        dispatch({
            type: SIGNUP_SUCCESS
        });
        history.push('/login');
    } catch(err) {
        console.log(err);
    }
}

// exports const loadUser = () => async dispatch => {
//     const token = localStorage.getItem(token);

//     dispatch({
//         type: LOAD_USER
//     })
// }

export const loginUser = (data,history) => async dispatch => {
    try {
        const body = JSON.stringify(data);
        const config = {
            headers: {
                'Content-Type': 'Application/json'
            }
        };
        const response = await axios.post('http://localhost:8000/login', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        });
        history.push('/dashboard');
    } catch(err){

    }
}