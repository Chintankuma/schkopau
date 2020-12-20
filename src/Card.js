import React from 'react'
import './Card.css'

function Card({src, title, description}) {
    return (
        <div className="card">
            <img src={src}></img>
        </div>
    )
}

export default Card
