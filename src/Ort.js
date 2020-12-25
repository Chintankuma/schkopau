import React from 'react'
import './Ort.css'

function Ort({img, description, title}) {
    return (
        <div className="ort">
            <img src={img}></img>
            <div className="ort__info">
                <div className="ort__infoTop">
                    <h3 style={{"color":"black"}}>{title}</h3>
                    <p>________________</p>
                    <p>{description}</p>
                </div>
                <div className="ort__infoBottom">
                    <p>mehr</p>
                </div>
            </div>
        </div>
    )
}

export default Ort
