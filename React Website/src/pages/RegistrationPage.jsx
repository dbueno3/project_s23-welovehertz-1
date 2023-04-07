import '../styles/RegistrationPage.css';
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Axios from 'axios';

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
        confirmPassword: '',
        submit: ''
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
        event.preventDefault();

        const newErrors = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirmPassword: '',
            submit: ''
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

        if (confirmPassword !== password) {
            newErrors.confirmPassword = 'Confirm password must match password';
        }

        if (Object.values(newErrors).some(error => error !== '')) {
            setErrors(newErrors);
            setSuccess(false);
            return;
        }

        Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/reg.php', data)
            .then(response => {
                console.log(response.data);
                const response_json = JSON.parse(response.data.substring(1));
                console.log(response_json);
                console.log(response_json.status);
                if (response_json.status === 0) {
                    const error = response_json.errors;
<<<<<<< Updated upstream
                    for (const field in error) {
                        if (field === 'email') {
                            setErrors({ ...errors, email: response_json.errors.email });
                        } else if(field === 'first_name'){
                            setErrors({ ...errors, first_name: response_json.errors.first_name });
                        } else if(field === 'last_name'){
                            setErrors({ ...errors, last_name: response_json.errors.last_name });
                        } else if(field === 'password'){
                            setErrors({ ...errors, password: response_json.errors.password });
                        } else if(field === 'confirm_Password'){
                            setErrors({ ...errors, confirmPassword: response_json.errors.confirmPassword });
                        }
=======
                    let allErrors = {};
                    for (const field in error) {
                        allErrors[field] = error[field];
>>>>>>> Stashed changes
                    }
                    setErrors({ ...allErrors, submit: 'Unable to create account, please check all fields' });
                    setSuccess(false);
                } else {
                    setSuccess(true);
                    setErrors({
                        first_name: '',
                        last_name: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                        submit: ''
                    });
                }
            })
            .catch(error => {
                console.log(error);
                // Handle the error here by displaying an error message to the user or logging the error
                setSuccess(false);
                setErrors({ ...errors, submit: 'An error occurred. Please try again later.' });
            });
    }


    return (
        <>
            <div className='register'>
                <div className="register-form">
                    <form className="reg-inputs" onSubmit={handleSubmission}>
                        <label htmlFor="first_name">First Name</label>{errors.first_name && <div className="error-message">{errors.first_name}</div>}
                        <input value={first_name} onChange={(event) => setFirstName(event.target.value)} type="name" placeholder='First Name' name='first_name' required />
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
                        <label htmlFor="last_name">Last Name</label>{errors.last_name && <div className="error-message">{errors.last_name}</div>}
                        <input value={last_name} onChange={(event) => setLastName(event.target.value)} type="name" placeholder='Last Name' name='last_name' required />

                        <label htmlFor="email">Email</label>{errors.email && <div className="error-message">{errors.email}</div>}
                        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email" name="email" required />

                        <label htmlFor="password">Password</label>{errors.password && <div className="error-message">{errors.password}</div>}
                        <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" name="password" required />

<<<<<<< Updated upstream
                        <label htmlFor="confirmPassword">Confirm Password</label>{errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
                        <input value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} type="password" placeholder="Confirm Password" name="confirmPassword" required />

                        <button>Register</button>
=======
                        <label htmlFor="confirm_password">Confirm Password</label>{errors.confirm_password && <div className="error-message">{errors.confirm_password}</div>}
                        <input value={confirm_password} onChange={(event) => setConfirmPassword(event.target.value)} type="password" placeholder="Confirm Password" name="confirmPassword" required />

                        <button >Register</button>
>>>>>>> Stashed changes
                        {errors.submit && !success && <div className="error-message">{errors.submit}</div>}
                        {success && <div>Account Creation Success!</div>}
                    </form>
                    <button className="create-account-button" ><Link to="https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/login">Have An Account? Click Here</Link></button>
                </div>
            </div>
        </>
    );
}
