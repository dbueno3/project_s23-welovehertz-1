import { Link, useNavigate } from 'react-router-dom'
import BackGround from '../pictures/background.jpg'
import '../styles/homepage.css'
import * as React from 'react';
import ResidentPage from './residential-page';

/* Images */
import porter from '../pictures/Porter.jpg';
import wilkenson from '../pictures/wilkeson.jpg';
import gov from '../pictures/governors.jpg';
import fargo from '../pictures/fargo.jpg';
import richmond from '../pictures/richmond.jpg';
import redjacket from '../pictures/redjacket3.jpg';
import southlake from '../pictures/southlake.jpg';
import hadley from '../pictures/hadley.jpg'
import spaulding from '../pictures/spaulding.jpg'
import creekside from '../pictures/creekside.jpg'



const listings = [
    
    { id: 1, name: 'Fargo', image: fargo },
    { id: 2, name: 'Richmond', image: richmond },
    { id: 3, name: 'Red Jacket', image: redjacket },
    { id: 4, name: 'Porter Dorm', image: porter },
    { id: 5, name: 'Wilkenson', image: wilkenson },
    { id: 6, name: 'South Lake', image: southlake },
    { id: 7, name: 'Hadley', image: hadley },
    { id: 8, name: 'Spaulding', image: spaulding },
    { id: 9, name: 'Governors', image: gov },
    { id: 10, name: 'Creekside East', image: creekside },
    { id: 11, name: 'Creekside West', image: creekside }
];

export default function Homepage() {
    const navigate = useNavigate();

    const handleListingClick = (id) => {
        if (0 < id < 12){
            navigate(`/CSE442-542/2023-Spring/cse-442h/${id}`)
        }else{
            navigate(`/CSE442-542/2023-Spring/cse-442h/`)
        }
    }

    return (
        <>
            <div className='home' style={{ backgroundImage: `url(${BackGround})` }}>
                <div className='headerContainer' >
                    <h1>HOUSE FINDER</h1>
                    <p> Easily Figure Out Where To Live</p>
                </div>

            </div>
            <div className='listings'>
                {listings.map(listing => (
                    <div key={listing.id} className='listing-card' onClick={() => handleListingClick(listing.id)}>
                        <img src={listing.image} alt={listing.name} />
                        <h2>{listing.name}</h2>
                    </div>
                ))}
            </div>
        </>
    )
}
