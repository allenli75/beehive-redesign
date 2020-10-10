import React from 'react';
import './Landing.css';
import { Navbar } from './Navbar.js';
import hex1 from './assets/hex1.svg';
import hex2 from './assets/hex2.svg';

const Landing = () => {
    var ReactRotatingText = require('react-rotating-text');
    return (
        <div className="landing">
            <Navbar/>
            <div className="main">
                <div className="bg">
                    <img src={hex1} className="hex1"></img>
                    <img src={hex2} className="hex2"></img>
                </div>
                <p>I am passionate about...</p>
                <ReactRotatingText items={['Artificial Intelligence!', 'Machine Learning!', 'Computer Vision!']} />
                <p className="subheading">Explore <span style={{ color: '#FFD250', fontWeight: 700 }}>17</span> exciting research projects and counting</p>
                <a href="/">Explore</a>
            </div>
        </div>
    );
};

export { Landing };