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

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path='/build' element={<Homepage />} />
            <Route path='/build/login' element={<Login />} />
            <Route path='/build/register' element={<Box />} />
            <Route path='/build/resident-page' element={<ResidentPage/>} />
            <Route path='/build/contact-us' element={<ContactUs/>} />
            
          </Routes>
          <Footer />
      </Router>
    </>
  );
}

export default App;
