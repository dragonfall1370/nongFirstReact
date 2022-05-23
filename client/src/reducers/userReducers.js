import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNOUT, USER_SIGNIN_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_CHECK_TOKEN_REQUEST, USER_CHECK_TOKEN_FALSE, USER_CHECK_TOKEN_SUCCESS } from "../constants/userConstants";

export const userSigninReducer = (state={}, action) => {
    switch(action.type) {
        case USER_SIGNIN_REQUEST:
            return {loading:true};
        case USER_SIGNIN_SUCCESS:
            return  {loading: false, userInfo: action.payload };
        case USER_SIGNIN_FAIL:
            return {loading: false, error: action.payload };
        case USER_SIGNOUT:
            return {};
        default:
            return state;
    }
};

export const userRegisterReducer = (state={}, action) => {
    switch(action.type) {
        case USER_REGISTER_REQUEST:
            return {loading:true};
        case USER_REGISTER_SUCCESS:
            return  {loading: false, userInfo: action.payload };
        case USER_REGISTER_FAIL:
            return {loading: false, error: action.payload };
        default:
            return state;
    }
};


export const userChecktoken = (state={}, action) => {
    switch(action.type){
        case USER_CHECK_TOKEN_REQUEST:
            return {loading:true};
        case USER_CHECK_TOKEN_SUCCESS:
            return {loading:false, checkTokenInfo: action.payload};
        case USER_CHECK_TOKEN_FALSE:
            return {loading:false, error: action.payload};
        default:
            return state;
    }
};