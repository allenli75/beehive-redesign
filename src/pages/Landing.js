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

            <div className="about">
              What is Beehive?
              <p className="subheading2">
                Beehive is a year-round, student-run platform for undergraduate
                research at Berkeley aimed to fill the gaps left behind by
                existing programs like URAP and SURF. Beehive is especially
                valuable for faculty and graduate student researchers who wish
                to recruit undergraduates for

                <span className="highlight"> summer </span>,
                <span className="highlight">informal </span>,
                <span className="highlight">short-term </span>, or
                <span className="highlight">otherwise off-cycle projects</span>
                (e.g. after URAP deadline).
              </p>
            </div>
        </div>
    );
};

export { Landing };
