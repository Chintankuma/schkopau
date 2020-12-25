import React from 'react'
import './Ortsteile.css'
import Ort from './Ort'
import {Link} from 'react-router-dom';

function Ortsteile() {
    return (
        <div class="container">
            <div className="ortsteile__info">
                <h1 class="mt-4">Ortsteile</h1>
            </div>
            <hr className="hr"></hr>
            <Link to="/burgliebenau">
            <Ort img="https://www.architektur-blicklicht.de/bilder/schloesser-herrenhaeuser/burgliebenau-schloss-schkopau-halle-800x533.jpg" description="Der beschauliche Ort Burgliebenau liegt mit seinen 416 Einwohnern (Stand: 22.03.2018) an einer Brücke, welche ein wichtiges Nadelöhr zur Querung der Weißen Elster darstellt.
Bereits vor einigen hundert Jahren gab es hier schon eine Brücke, über die die ..." title="Burgliebenau"></Ort>
            </Link>
            
            <Ort img="https://ermlitz-rittergut.de/wp-content/uploads/2020/04/Herrenhaus-1.jpeg" description="Ermlitz liegt östlich des Hauptortes Schkopau an der Landstraße 170. Südlich des Ortes verläuft die Weiße Elster, an die sich die Saale- Elster- Luppe- Aue anschließt und zu Wander- und Radtouren einlädt. Entlang des Flusses verläuft der Elster-Radweg..." title="Ermlitz"></Ort>
            <Ort img="https://www.architektur-blicklicht.de/bilder/schloesser-herrenhaeuser/doellnitz-schkopau-saalekreis-800x533.jpg" description="Zum Ortsbild von Döllnitz gehören von je her die Störche. In jedem Jahr werden die Ankömmlinge von vielen Einwohnern erwartet und beobachtet. Döllnitz wurde erstmals in einer Urkunde von 1091 als Bauerndorf Tholenici im Burgwardbezirk Schkeuditz erwähnt..." title="Döllnitz"></Ort>
            <Ort img="https://www.mz-web.de/image/26701614/2x1/940/470/56616ed1ca81568ca33f3a933e767298/ge/b-flut-saalekreis-120417.jpg" description="Die Ortschaft Hohenweiden umfasst fünf Siedlungsbereiche: Neukirchen, Röpzig, Rockendorf, Rattmannsdorf und Hohenweiden sowie ein Naturschutzgebiet in der Nähe von Röpzig, welches die Abtei genannt wird..." title="Hohenweiden"></Ort>
            <Ort img="https://vcdn.bergfex.at/images/resized/6b/a023f8c7346a286b_d880c9044c6ddc5e@2x.jpg" description="Siedlungen im Bereich der heutigen Ortschaft Lochau hat es nach Funden, die im Landesmuseum für Vorgeschichte aufbewahrt werden schon 4000 Jahre vor unserer Zeitrechnung gegeben..." title="Lochau"></Ort>
            <Ort img="https://live.staticflickr.com/3771/33173937232_7b37a14032_z.jpg" description="Raßnitz, erstmals 1015 erwähnt, bestand bis 1950 aus drei Ortsteilen: Weßmar im Osten, Raßnitz in der Mitte und Pritschöna im Westen. Weßmar war einst Pfarrdorf (Kirche St. Michaelis) und gehörte von 1091 bis Ende des 16. Jhs. den Mönchen des Merseburger Peterskloster..." title="Raßnitz"></Ort>
        </div>
    )
}

export default Ortsteile
