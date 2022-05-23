import { USER_CHECK_TOKEN_FALSE, USER_CHECK_TOKEN_REQUEST, USER_CHECK_TOKEN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants";
import Axios from 'axios';


export const signin = (email, password) => async (dispatch) => {
    dispatch({
        type: USER_SIGNIN_REQUEST,
        payload: { email, password }
    });

    try {
        const { data } = await Axios.post('/api/users/signin', {email, password});
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

export const register = (name, email, password) => async (dispatch) => {
    dispatch({
        type: USER_REGISTER_REQUEST,
        payload: { name, email, password }
    });

    try {
        const { data } = await Axios.post('/api/users/register', {name, email, password});
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        });
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        });
    }
};

export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({
        type:USER_SIGNOUT
    });
};


export const checktoken = (currentToken) => async (dispatch) => {
    dispatch({
        type: USER_CHECK_TOKEN_REQUEST,
        payload: { currentToken }
    });
    try {
        const config = {
            headers:{ 
                'Authorization': 'Bearer '+ currentToken,
                'Content-Type': 'application/json'
            }
        };
        const { checkTokenResult } = await Axios.post('/api/users/checktoken',config);
        dispatch({
            type: USER_CHECK_TOKEN_SUCCESS,
            payload: checkTokenResult
        });
        localStorage.setItem("userTokenMessage", JSON.stringify(checkTokenResult));
    } catch (error){
        dispatch({
            type: USER_CHECK_TOKEN_FALSE,
            payload:error.response
            // payload:error.response && error.response.checkTokenResult.message
            // ? error.response.checkTokenResult.message
            // : error.message
        });
    }
};


export const checktoken2 = (currentToken) => async() => {
    try {
        const headers = { 
            'Authorization': 'Bearer ' + currentToken,
            'Content-Type': 'application/json'
        };
        const { checkTokenResult } = await Axios.post('/api/users/checktoken', {headers});
        return checkTokenResult
    } catch (error){
        const message = error.response && error.response.checkTokenResult.message
        return message   
    }
};