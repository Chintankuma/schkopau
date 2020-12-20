import React from 'react'
import './Sidebar.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PrintIcon from '@material-ui/icons/Print';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InfoIcon from '@material-ui/icons/Info';
import PhoneIcon from '@material-ui/icons/Phone';

function Sidebar() {
    return (
        <div className="sidebar">
            <hr></hr>
            <div className="first__row">
                <div className="vor">
                    <div className="vorlesen">
                        <h3>vorlesen</h3>
                        <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
                    </div>
                    <div className="vorlesen__icon">
                        <PrintIcon></PrintIcon>
                        <MailIcon></MailIcon>
                    </div>
                </div>
                <div className="firstrow__icons">
                    <TwitterIcon></TwitterIcon>
                    <FacebookIcon></FacebookIcon>
                    <WhatsAppIcon></WhatsAppIcon>
                    <InfoIcon></InfoIcon>
                </div>
                <h4>Datenschutzhinweis</h4>
            </div>
            <hr></hr>
            <div className="second__row">
                <h3>Bürgertelefon</h3>
                <div className="telefon">
                    <div className="phone">
                        <PhoneIcon></PhoneIcon>
                        <h4>0123 456 7</h4>
                    </div>
                    <h4>MON - FRE VON 7:30 bis 16:00</h4>
                </div>
            </div>
            <hr></hr>
            <div className="third__row">
                <h3>Stadtplan</h3>
                <img className="stadtplan" src="https://fink.hamburg/wp/wp-content/uploads/2017/07/Google-Maps.png"></img>
            </div>
            <hr></hr>
            <div className="fourth__row">
                <img className="sagt" src="https://teleport.de/wp-content/uploads/2015/08/20130812_logo_s-u-e_left.png"></img>
            </div>
            <hr></hr>
        </div>
    )
}

export default Sidebar
