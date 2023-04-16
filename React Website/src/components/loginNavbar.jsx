import React, {useState} from "react";
import {Link} from 'react-router-dom';
import "../styles/loginNavbar.css";
import HomeLogo from '../pictures/home_logo.jpg'
//import HomeIcon from '@mui/icons-material/Home';
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchBar from "./searchbar";
import HousingData from "../Data.json"
import { Button } from "@mui/material";
import profileIcon from "../pictures/profile-icon.png"

export default function Navbar(){

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    };


    return(
        <>
            <div className="navbar">
                <div className="leftSide" id={openLinks ? "open" : "close"}>
                    <img src={HomeLogo} alt="" />
                    <div className="hiddenLinks">
                        <Link to="/CSE442-542/2023-Spring/cse-442h/">Home</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/contact-us">Contact Us</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/profile">
                            <img className="profile-image" src={profileIcon} />
                        </Link>
                    </div>
                    <SearchBar placeholder="Enter Housing Option" data ={HousingData}/> 
                </div>
                <div className="rightSide">
                        <Link to="/CSE442-542/2023-Spring/cse-442h/">Home</Link>
                        <span className="logout">Logout</span>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/contact-us">Contact Us</Link>
                        <Link to="/CSE442-542/2023-Spring/cse-442h/profile">
                            <img className="profile-image" src={profileIcon} />
                        </Link>
                    <Button onClick={toggleNavbar}><ReorderIcon/></Button>
                </div>
            </div>
        </>
    );
}
