import React, {useState} from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import "../styles/login.css";
import Axios from 'axios';
import Homepage from "./homepage"

export default function Login (props) {
    //Captures the email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    //When user logins, handleSubmission will be called
    const handleSubmission = (event) => {
        event.preventDefault();

        Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/login.php', {

            email: email,
            password: password,
        })
            .then((response) => {
                if (response.status === 200) {
                    setError(false)
                    setSuccess(true);
                    navigate("/CSE442-542/2023-Spring/cse-442h/");
                }
                else {
                    setError(`Error: ${response.status} - ${response.data.message}`);
                    setSuccess(false);
                }
        })
            .catch((error) => {
          setError(true);
          setSuccess(false);
            });
    }  

    return (
        <>
            <div className="login" >
                <div className="login-form">
                    <form className="login-inputs" onSubmit={handleSubmission} action={Homepage} method="post">
                        <label for="email">Email</label>
                        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email" name="email" />
                        <label for="password">Password</label>
                        <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" name="password" required/>
                        <button>Login</button>
                        {error !== false && <div>{error} Login Failed</div>}
                        {success && navigate("/CSE442-542/2023-Spring/cse-442h/") && <div>Login Success! </div>}
                        <br></br>
                    </form>
                    <button className="register-button" ><Link to="/CSE442-542/2023-Spring/cse-442h/register">Don't Have An Account? Click Here</Link></button>
                </div>
            </div>
        </>
    );
}


/* */