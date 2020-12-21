import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';
function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img className="header__icon" src="https://www.gemeinde-schkopau.de/media/bilder/artikelbilder/startseite/news/tn91x108_schkopau_logo_schriftzug_homepage.gif"></img>
            </Link>
            
            <div className="header__center">
                <Link to="/buergerservice">
                    <a>
                    <h5>Bürgerservice</h5>
                    </a>
                </Link> 
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
