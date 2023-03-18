import React from 'react'
import '../styles/profile.css'
import pfp from '../pictures/pfp.png'

//This is the User Profile Page
export default function profilePage () {
    return (
        <div className='profile'>
            <h1 className="profile-header">Profile Page</h1>
            <img className="profile-pfp" src={pfp} alt="pfp" />
            <div className="profile-container-1">
                <div className="profile-container-2">
                    <div className="profile-container-3">
                        <h4 className="profile-titles">First Name:</h4>
                        <span className="profile-text">Mathew</span>
                    </div>
                    <div className="profile-container-3">
                        <h4 className="profile-titles">Last Name:</h4>
                        <span className="profile-text">Yeung</span>
                    </div>
                    <div className="profile-container-3">
                        <h4 className="profile-titles">Email:</h4>
                        <span className="profile-text">test123@gmail.com</span>
                    </div>
                    <div className="profile-container-3">
                        <h4 className="profile-titles">Housing:</h4>
                        <span className="profile-text">Southlake Village</span>
                    </div>
                </div>
            </div>
        </div>
    );
}