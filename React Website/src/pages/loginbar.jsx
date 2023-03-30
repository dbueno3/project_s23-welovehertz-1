import React, {useState} from "react";
import {Link} from 'react-router-dom';
import "../styles/login.css";
import Axios from 'axios';

export default function Login (page) {
    //Captures the email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    //When user logins, handleSubmission will be called
    const handleSubmission = (event) => {
        //This prevents the page from reloading and losing our current state
        event.preventDefault();
        console.log(email)
        console.log(password)

        Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/login.php', {
          email: email,
          password: password,
        })
        .then(response => {
          setSuccess(true);
          setError(null);
        })
        .catch(error => {
          setError(error.message);
          setSuccess(false);
        });
    }   

    return (
        <>
            <div className="login" >
                <div className="login-form">
                    <form className="login-inputs" onSubmit={handleSubmission}>
                        <label for="email">Email</label>
                        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email" name="email" />
                        <label for="password">Password</label>
                        <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" name="password" required/>
                        <button>Login</button>
                        {error && <div>{error}</div>}
                        {success && <div>Login Success!</div>}
                    </form>
                    <button className="register-button" ><Link to="/register">Don't Have An Account? Click Here</Link></button>
                </div>
            </div>
        </>
    );
}