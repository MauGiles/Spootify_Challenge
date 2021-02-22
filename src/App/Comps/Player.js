import React from 'react';
import './player.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

function Player({ spotify }) {
    return (
        <div className="player">
            <Sidebar />
            <div className="player-body">
                <Header />
            </div>
            <Footer />
        </div>
    );
}

export default Player;