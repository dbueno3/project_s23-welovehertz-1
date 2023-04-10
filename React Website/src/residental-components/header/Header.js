import React from "react";
import ratingStarImg from "./images/header-rating-star.png";
import slideshowOne from "./images/header-slideshow-image1.png"
import slideshowTwo from "./images/header-slideshow-image2.png"
import slideshowThree from "./images/header-slideshow-image3.png"
import "./header.css"
import { Link } from "react-router-dom";

export default function Header( props ) {
    var prices = Object.entries(props.prices);
    const price = prices.map(([key,value]) =>
        <ul key={key}>{key} : ${value.slice(0,value.length-3)+ ","+ value.slice(value.length-3)}</ul>
    )
    // console.log(price)

    return (
        <div className="header">
            <h1 className="header-title">{props.title}</h1>
            <div className="header-description">
                <img className="header-rating-img" src={ratingStarImg} alt=""/>
                <span className="header-rating">4.9</span>
                <span>{props.location}</span>
            </div>
            <div>
                <img className="header-img header-img-one" src={slideshowOne} alt="slideshowImg1" />
                <img className="header-img" src={slideshowTwo} alt="slideshowImg2" />
                <img className="header-img" src={slideshowThree} alt="slideshowImg3" />
            </div>
            <div>
                <h2 className="header-price-title">Dorming Options</h2>
                <span className="header-price">{price}</span>
            </div>
        </div>
    )
}