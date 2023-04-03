import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Navigate } from 'react-router-dom';

export default function Residential() {
    const [residence, setResi] = useState();
    const [location, setLocation] = useState();
    useEffect(() =>{
        getInfo();
    });

    function getInfo(){
        Axios.get('/CSE442-542/2023-Spring/cse-442h/backend/resi.php')
        .then(function(response){
            const resi = JSON.parse(response.data.substring(3, response.data.length-2))
            setResi(resi.residence)
            setLocation(resi.location)
        })
    }
    return(
        <div>
            <p>Residence : {residence}</p>
            <p>Address : {location}</p>
        </div>
    )
}
