import {Link, useNavigate} from 'react-router-dom'
import BackGround from '../pictures/background.jpg'
import '../styles/homepage.css'
import * as React from 'react';
import ResidentPage from './residential-page';
//import {useParams} from 'react-router-dom'
//let { id } = useParams(props.id);


export default function Homepage() {
    const navigate = useNavigate();

    const handleSubmission = (residence) => {
        console.log(residence);
        navigate(`/CSE442-542/2023-Spring/cse-442h/resident-page/${residence}`)
      }

    return (
        <div className='home'  style={{backgroundImage: `url(${BackGround})`}}>
            <div className='headerContainer' >
                <h1>HOUSE FINDER</h1>
                <p> Easily Figure Out Where To Live</p>
                <Link to ="https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/resident-page"><button>Click Here</button></Link>
            </div>
            <button onClick={() => handleSubmission(4)}>Porter Dorm</button>
            <button onClick={() => handleSubmission(5)}>Wilkenson</button>
            <button onClick={() => handleSubmission(9)}>Governors</button>
        </div>
    )
}