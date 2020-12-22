import React from 'react'
import Accordion from './Accordion'
import './BuergerService.css'

function BuergerService() {
    return (
        <div class="container mt-5">
            <h1>Bürger + Verwaltung</h1>
            <hr></hr>
            <h5>Was erledige ich wo in der Gemeinde Schkopau?</h5>
            <div className="search">
                <div className="search__left">
                <label for="Dienstleitung">Dienstleitung: </label>
                <input type="text" name="Dienstleitung"></input>
                </div>
                <div className="search__right">
                <label for="Dienstleitung">Ort: </label>
                <input type="text" name="Dienstleitung"></input>
                </div>
                <button type="button" className="button__suchen" class="btn btn-outline-primary">Suchen</button>
                <button type="button" class="btn btn-outline-secondary">Zürucksetzen</button>
            </div>
            <Accordion></Accordion>
        </div>
    )
}

export default BuergerService
