import '../styles/profile.css';
import pfp from '../pictures/pfp.png';
import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import Axios from 'axios';

//This is the User Profile Page
export default function ProfilePage () {
    const [firstName, setFirstName] = useState('ERROR');
    const [lastName, setLastName] = useState('ERROR');
    const [email, setEmail] = useState('ERROR');

    useEffect(() => {
        Axios.get('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/profile.php', {
        })
        .then(function (response) {
            const profileData = JSON.parse(response.data.substring(3, response.data.length-2))
            setFirstName(profileData.first_name)
            setLastName(profileData.last_name)
            setEmail(profileData.email)

        })
    });

    return (
        <div className='profile'>
            <h1 className="profile-header">Profile Page</h1>
            <img className="profile-pfp" src={pfp} alt="pfp" />
            <div className="profile-container-1">
                <div className="profile-container-2">
                    <div className="profile-container-3">
                        <h4 className="profile-titles">First Name:</h4>
                        <span className="profile-text">{firstName}</span>
                    </div>
                    <div className="profile-container-3">
                        <h4 className="profile-titles">Last Name:</h4>
                        <span className="profile-text">{lastName}</span>
                    </div>
                    <div className="profile-container-3">
                        <h4 className="profile-titles">Email:</h4>
                        <span className="profile-text">{email}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}