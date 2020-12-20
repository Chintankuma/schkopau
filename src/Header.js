import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
function Header() {
    return (
        <div className="header">
            <img className="header__icon" src="https://www.gemeinde-schkopau.de/media/bilder/artikelbilder/startseite/news/tn91x108_schkopau_logo_schriftzug_homepage.gif"></img>
            <div className="header__center">
                <h5>Bürgerservice</h5>
                <h5>Ansprechpartner</h5>
                <h5>Veranstaltungen</h5>
                <h5>Kultur + Tourismus</h5>
                <h5>Einrichtungen</h5>
                <h5>Gewerbe</h5>
            </div>
            <div className="header__right">
                <input type="text"></input>
                <SearchIcon></SearchIcon>
            </div>
        </div>
    )
}

export default Header
