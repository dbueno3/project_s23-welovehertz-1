import React, { useEffect, useState } from 'react';
import Axios from 'axios';


export default function Res () {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        Axios.get('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442h/backend/resi.php')
        .then(function(response){
            //const resi = JSON.parse(response.data.substring(3, response.data.length-2))
            setInfo(JSON.parse(response.data.substring(1, response.data.length-1)))
            //console.log(response.data.substring(1, response.data.length-1))
        })
    }, []);

    return(
        <>
            {info.map((i, key) =>
            <div key={key}>
                <ul>{i.residence}</ul>
                <ul>{i.location}</ul>
                <ul>${i.singles}</ul>
            </div>
            )}
        </>
    );
}
