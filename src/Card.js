import React from 'react'
import './Card.css'

function Card({src, title, description}) {
    return (
        <div className="cardHome">
            <img src={src}></img>
            <div className="card__info">
                <h2>{title}</h2>
                <hr></hr>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card
