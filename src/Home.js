import React from 'react';
import './Home.css';
import Banner from './Banner';
import Sidebar from './Sidebar';
import CardList from './CardList';

function Home() {
    return (
        <div className="home">
            <Banner></Banner>
            <div className="app__page">
                <CardList></CardList>
                <Sidebar></Sidebar>
            </div>
        </div>
    )
}

export default Home
