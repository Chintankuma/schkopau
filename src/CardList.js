import React from 'react'
import './CardList.css';
import Card from './Card';

function CardList() {
    return (
        <div className="cartList">
            <h1>Aktuelle Information</h1>
            <hr></hr>
            <div className="home__section">
                    <Card src="https://cdn.svlfg.de/fiona8-blobs/public/svlfgonpremiseproduction/c8ad2a9faa05fa6b/dc602cd4970a/corona-virus_16_9.jpg" title="Corona Situation" description="Corona - Regelungen der Bundesländer insbesondere zu Kontaktbeschränkungen für den Zeitraum 16.12.2020 bis 10.01.2021"></Card>
                    <Card src="https://www.berlin.de/converjon/?ts=1606808713&width=540&height=270&url=https%3A%2F%2Fwww.berlin.de%2Ffotolia%2Fgegenstaende%2Ffotolia_41029684_subscription_monthly_xxl.jpg%3Fts%3D1606808713.jpg" title="Terminvergabe" description="Hier gelangen Sie zur Online Terminvergabe für den Fachbereich Einwohnerwesen"></Card>
                    <Card src="https://stock-big.com/wp-content/uploads/2017/02/stock_big_karriere-1.jpg" title="Job & Karriere" description="finden Sie unter vielfältigen Stellen und Ausbildungsangeboten Ihre beruflixche zukunft. Jetzt bewerben!"></Card>
                    <Card src="https://1.bp.blogspot.com/-EnUzmK7llaw/V_kxNidtOEI/AAAAAAABIwQ/0bgtx60AUbkEd3nOp_ouzyO6X62lHbSEQCPcBGAYYCw/w1200-h630-p-k-no-nu/Info.jpg" title="News, Infos, Hintergründe" description="Ideen, Neuigkeiten, Visionen, Hintergründe - aktuelle Clips im Youtube- Channel der Stadt Schkopau"></Card>
                    <Card src="https://360grad.it/WP/wp-content/uploads/2020/03/oeffnungszeiten.jpg" title="öffnungzeiten" description="Die Stadtverwaltung ist vom 28. bis 25 Januar nur eingeschränkt erreichbat. Eine Übersicht der diesnthabenden Bereich"></Card>
                    <Card src="https://www.hattingen.de/stadt_hattingen/Rathaus/Amtsblatt/amtsblatt.jpg" title="Amtblatt" description="Amtliche Bekanntmachungen, Tagesordnung von Stadtrat & Ausschüssen + Kostenfreies Abonnement ses Amtblattes per E-Mail möglich"></Card>
                </div>
        </div>
    )
}

export default CardList
