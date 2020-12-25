import React from 'react'
import Card from './Card'
import {Link} from 'react-router-dom';

function KulturList() {
    return (
        <div class="container mt-4">
            <h1 className="h1">Kultur + Tourismus</h1>
            <hr></hr>
            <div className="home__section">
                <Link to="rad">
                    <a style={{"color":"black"}}>
                    <Card src="https://image.jimcdn.com/app/cms/image/transf/dimension=666x10000:format=jpg/path/s9ea60afa5d329861/image/i77983bfc3a619b06/version/1541590681/vorbereitung-f%C3%BCr-den-ausdauer-radsport-ist-entscheidend.jpg" title="Rad & Wanderwege"></Card>
                    </a>
                </Link>
                    <Card src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Schlosshotel_Schkopau_%283309103015%29.jpg/1200px-Schlosshotel_Schkopau_%283309103015%29.jpg" title="Schloss Schkopau"></Card>
                    <Card src="https://www.smb.museum/uploads/tx_smb/exhibitions/exhibition_17496/Canova_Raum_5_1920_xl.jpg" title="Museen"></Card>
                    <Card src="https://www.sportmember.de/assets/frontpage/player_slider-96612d88b74afe3330c3886c0d3c95c8.png" title="Vereine"></Card>
                    <Card src="https://koenig-albert-theater.de/fileadmin/_processed_/9/f/csm_Head_Theaterbus_5a4aa64345.jpg" title="Theaterbus" ></Card>
                    <Card src="https://www.olfen.de/typo3temp/assets/_processed_/1/0/csm_T_Gastronomie_b2e5c34364.jpg" title="Gastronomie"></Card>
                </div>
        </div>
    )
}

export default KulturList
