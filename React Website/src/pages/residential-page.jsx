import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Amenities from '../residental-components/amenities/Amenities'
import Header from '../residental-components/header/Header'
import Ratings from '../residental-components/ratings/Ratings'
import UserRatings from '../residental-components/userRatings/UserRatings'
import {useParams} from 'react-router-dom'

export default function ResidentPage() {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    let { id } = useParams();
    console.log("id: " + id);

    useEffect(() => {
        Axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/residential.php', {
            id: id
        })
        .then(function (response) {
            const residentialData = JSON.parse(response.data.substring(3, response.data.length-2))
            setTitle(residentialData.residence)
            setLocation(residentialData.location)
            console.log(residentialData)
        })
    }, []);

    return (
        <div className="container">
            <Header title={title} location={location}/>
            <hr />
            <Amenities />
            <hr />
            <Ratings />
            <hr />
            <UserRatings />
        </div>
    )
}