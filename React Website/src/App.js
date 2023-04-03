import React from 'react';
import Navbar from './components/navbar';
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

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/CSE442-542/2023-Spring/cse-442h/' element={<Homepage />} />
            <Route path='/CSE442-542/2023-Spring/cse-442h/login' element={<Login />} />
            <Route path='/CSE442-542/2023-Spring/cse-442h/register' element={<Box />} />
            <Route path='/CSE442-542/2023-Spring/cse-442h/resident-page/:id' element={<ResidentPage/>} />
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
