import '../styles/RegistrationPage.css';
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Axios from 'axios';
//Registration Page

export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const data = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
    }
    const nameRegex = /^[a-zA-Z]+$/;
    const handleSubmission = (event) => {
        //This prevents the page from reloading and losing our current state
        event.preventDefault();

        const newErrors = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        if (password.length < 8) {
            newErrors.password = 'Password should be at least 8 characters long';
        }

        if (!nameRegex.test(first_name.trim())) {
            newErrors.first_name = 'First name can only contain letters';
        }

        if (!nameRegex.test(last_name.trim())) {
            newErrors.last_name = 'Last name can only contain letters';
        }

        if (confirmPassword!=password) {
            newErrors.confirmPassword = 'confirm password must match password';
        }

        if (Object.values(newErrors).some(error => error !== '')) {
            setErrors(newErrors);
            setSuccess(false);
            return;
        }

        console.log(data)
        Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/reg.php', data)
            .then(response => {
                setSuccess(true);
                setErrors({
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
            })
            .catch(error => {
                setErrors({ ...errors, email: error.message });
                setSuccess(false);
            });
    }

    return (
        <>
            <div className='register'>
                <div className="register-form">
                    <form className="reg-inputs" onSubmit={handleSubmission}>
                        <label htmlFor="first_name">First Name</label>{errors.first_name && <div className="error-message">{errors.first_name}</div>}
                        <input value={first_name} onChange={(event) => setFirstName(event.target.value)} type="name" placeholder='First Name' name='first_name' required />
                        <label htmlFor="last_name">Last Name</label>
                        <input value={last_name} onChange={(event) => setLastName(event.target.value)} type="name" placeholder='Last Name' name='last_name' required />
                        {errors.last_name && <div className="error-message">{errors.last_name}</div>}
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email" name="email" required />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                        <label htmlFor="password">Password</label>
                        <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" name="password" required />
                        {errors.password && <div className="error-message">{errors.password}</div>}
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} type="password" placeholder="Confirm Password" name="confirmPassword" required />
                        {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
                        <button>Register</button>
                        {errors.email && <div className="error-message">{errors.email}</div>}
                        {success && <div>Account Creation Success!</div>}
                    </form>
                    <button className="create-account-button" ><Link to="https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/login">Have An Account? Click Here</Link></button>
                </div>
            </div>
        </>
    );
}
