import { compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { userSigninReducer } from './reducers/userReducers';


const initialState = {
    userSignin:{
        userInfo:localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = configureStore({
    initialState,
    reducer:{
        userSignin: userSigninReducer,
    },
    composeEnhancer
  })
export default store;