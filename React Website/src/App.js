import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import LoginNavbar from './components/loginNavbar'
import Login from './pages/loginbar';
import Homepage from './pages/homepage';
import Box from './pages/RegistrationPage';
import Footer from './components/footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import ResidentPage from './pages/residential-page';
import ContactUs from './pages/contact';
import ProfilePage from './pages/profilePage';
import Residential from './pages/residential';
import Axios from "axios";

function App() {  
  // const [isLoggedin, setIsLoggedin] = useState();

  // useEffect(() => {
  //   Axios.get('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/profile.php', {

  // })
  // .then(function (response) {
  // })

  // }, [])

  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/CSE442-542/2023-Spring/cse-442h/' element={<Homepage />} />
            <Route path='/CSE442-542/2023-Spring/cse-442h/login' element={<Login />} />
            <Route path='/CSE442-542/2023-Spring/cse-442h/register' element={<Box />} />
            <Route path='/CSE442-542/2023-Spring/cse-442h/:id' element={<ResidentPage/>} />
            <Route path='/CSE442-542/2023-Spring/cse-442h/residential' element={<Residential/>} />
            <Route path='/CSE442-542/2023-Spring/cse-442h/contact-us' element={<ContactUs/>} />
            <Route path='/CSE442-542/2023-Spring/cse-442h/profile' element={<ProfilePage/>} />
          </Routes>
          <Footer />
      </Router>
    </>
  );
}

export default App;
