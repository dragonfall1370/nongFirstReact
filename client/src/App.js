import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { checktoken, checktoken2, signout } from './actions/userAction';
import { AdminScreen } from './screens/adminScreen';
import HomeScreen from './screens/homeScreen';
import RetailerScreen from './screens/retailerScreen';
import SigninScreen from './screens/signinScreen';
import Axios from 'axios';



function App() {
  const dispatch = useDispatch(); 
  const signoutHandler = () => {
    dispatch(signout());
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">Home</Link>
            <div className='dropdown'>
              <Link to="/retailer">
                Retailer Data
                <i className='fa fa-caret-down'>
                </i>
              </Link>
              <ul className='dropdown-content'>
                <Link to='/retailer/rossmann'>
                  Rossmann
                </Link>
              </ul>
            </div>
            <div className='dropdown'>
              <Link to="/odoo">
                Odoo Data
                <i className='fa fa-caret-down'>
                </i>
              </Link>
              <ul className='dropdown-content'>
                <Link to='/odoo/stock'>
                  Stock
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <div className='dropdown'>
              <Link to="/signin">Signin</Link>
            </div>
            <div className='dropdown'>
              <Link to="#signout" onClick={signoutHandler}>Signout</Link>
            </div>
            <div className='dropdown'>
              <Link to="/adminpage">Admin</Link>
            </div>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/retailer" element={<RetailerScreen />} exact></Route>
            <Route path="/signin" element={<SigninScreen />} exact></Route>
            <Route path="/adminpage" element={<AdminScreen />} exact></Route>
            <Route path="/" element={<HomeScreen />} exact></Route>
          </Routes>
        </main>
        <footer className="row center">
          All right reserved
        </footer>
      </div>
    </BrowserRouter>
    );
}

export default App;
