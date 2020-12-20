import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
function Header() {
    return (
        <div className="header">
            <img className="header__icon" src="https://www.gemeinde-schkopau.de/media/bilder/artikelbilder/startseite/news/tn91x108_schkopau_logo_schriftzug_homepage.gif"></img>
            <div className="header__center">
                <p>Bürgerservice</p>
                <p>Ansprechpartner</p>
                <p>Veranstaltungen</p>
                <p>Kultur + Tourismus</p>
                <p>Einrichtungen</p>
                <p>Gewerbe</p>
            </div>
            <div className="header__right">
                <input type="text"></input>
                <SearchIcon></SearchIcon>
            </div>
        </div>
    )
}

export default Header
