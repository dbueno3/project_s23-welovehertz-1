import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import "../styles/navbar.css";
import Searchbar from "./searchbar";
import HomeLogo from '../pictures/home_logo.jpg'
//import HomeIcon from '@mui/icons-material/Home';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Button } from "@mui/material";


export default function Navbar(){

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    };

    useEffect(() => {
        console.log(getCookie('user'))
    }, [])

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

    return(
        <>
            <div className="navbar">
                <div className="leftSide" id={openLinks ? "open" : "close"}>
                    <img src={HomeLogo} alt="" />
                    <div className="hiddenLinks">
                        <Link to="/CSE442-542/2023-Spring/cse-442h/">Home</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/register">Register</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/login">Login</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/contact-us">Contact Us</Link>
                    </div>
                </div>
                <div className="rightSide">
                        <Link to="/CSE442-542/2023-Spring/cse-442h/">Home</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/register">Register</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/login">Login</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/contact-us">Contact Us</Link>
                    <Button onClick={toggleNavbar}><ReorderIcon/></Button>
                </div>
            </div>
        </>
    );
}
