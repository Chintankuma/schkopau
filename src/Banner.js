import React from 'react';
import './Banner.css';
import {Link} from 'react-router-dom';

function Banner() {
    return (
        // <div className="banner">
        //    <div className="banner__info">
        //        <h1>Kultur + Tourismus</h1>
        //        <h5>Hier finden Sie Informationen zum Elster-Radwanderweg.</h5>
        //    </div>
        // </div>
        <div className="banner">
            <img className="banner__image" src="https://www.mz-web.de/image/31365070/8x3/2000/750/37b6381c0eef116ed6ac9c8030ac908/sT/b-luftbild-von-schkopau-280918.jpg"></img>
            <div className="bottom-left">
                <Link to="kultur">
                    <a>
                    <h1 style={{"color": "green"}}>Kultur + Tourismus</h1>
                    </a>
                </Link>
                <h4>Hier finden Sie Informationen zum Elster-Radwanderweg.</h4>
            </div>
        </div>
    )
}

export default Banner
