import { 
    SIGNUP_SUCCESS,
    LOGIN_SUCCESS
} from '../actions/types';


const initialState = {
    token: localStorage.getItem('token'),
    userId: null,
    isAuthenticated: false,
    isLoading: false
};

export default (state = initialState, action) => {
    const { payload,type } = action;
    switch(type){
        case SIGNUP_SUCCESS:
            return state;
        case LOGIN_SUCCESS:
            console.log("login success");
            localStorage.setItem('token',payload.token);
            return {
                ...state,
                token: payload.token,
                userId: payload.userId,
                isAuthenticated: true,
                isLoading: false
            }
        default: 
            return state;
    }
}