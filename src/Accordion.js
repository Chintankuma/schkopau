
import React from 'react'
import './Accordion.css';
import Leistungen from './Leistungen';

function Accordion() {
    return (
        <div class="mt-5">
            <div className="title">
                <h1 style={{"color":"gray"}}>Bürgerservice</h1>
                <hr className="hr"></hr>
            </div>
           <Leistungen></Leistungen>
        </div>
    )
}

export default Accordion
