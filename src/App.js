import logo from './logo.svg';
import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import RootPage from './Pages/RootPage';
import AdminLogin from './Pages/Admin/AdminLogin'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import UserCart from './Pages/User/UserCart'
import UserDashboard from './Pages/User/UserDashboard'
import UserLogin from './Pages/User/UserLogin'
import PaymentPage from './Pages/PaymentPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<RootPage/>}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route path='/adminlogin' element={<AdminLogin />}></Route>
          <Route path='/userlogin' element={<UserLogin />}></Route>
          <Route path='/userdashboard' element={<UserDashboard />}></Route>
          <Route path='/usercart' element={<UserCart />}></Route>
          <Route path='/payment' element={<PaymentPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
