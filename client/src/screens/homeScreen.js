import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';


export default function HomeScreen() {
    const navigate = useNavigate();
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const currentToken = (!userInfo) ?  null : (userInfo.token ? userInfo.token : null);
        
    const config ={ headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + currentToken
    }};

    console.log(config);

    const tokenCheck = (config1) => async () => {
            try {    
            const resp = await Axios.post(`/api/users/checktoken`, {config1});
            console.log(resp)
            return resp
            }catch(err){
            return err.code
            }    
    };
    tokenCheck();

    return (
        <div>
            <div className="row center">
                Welcome to homeScreen
            </div>
        </div>
    );
};
