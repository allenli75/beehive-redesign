import React from 'react';
import './Listing.css'

const Listing = () => {
  return (
      <div className="listing">

       <div className="header">
          <div className="img"></div>
          <div className="description">
            <div className="info" style={{fontWeight:'bolder', fontSize: '22px'}}> Research Analyst in Climate Prediction</div>
            <div className="info"> Earth and Planetary Sciences </div>
            <div className="info"> $ Paid </div>
            <div className="info"> Last Updated: 2 days ago </div>
          </div>
       </div>
       <div className="header">
        <a href="/browse" className="save-button"> Save </a>
        <a href="/browse" className="apply-button"> Apply Now! </a>
       </div>

       <div style={{fontWeight: 'bolder', fontSize:'15px', margin:'10px 0px 10px 10px', textAlign:'left'}}> Description: </div>
       <div className="role-description">
       We are seeking a student intern interested in climate science to analyze large data sets containing observations of rainfall. The project will investigate the factors that influence rainfall in autumn over multiple densely-populated regions of the tropics by performing statistical analyses on geospatial data, with the aim of developing a seasonal forecasting scheme for this rainfall. The candidate should have experience working in Python, R, or MATLAB, and some background in data science, statistics, or a related field. Experience with xarray or similar packages for processing netCDF files is preferred but not essential. The work will be done in collaboration with Prof. William Boos and Dr. Nandini Ramesh, with work done remotely for the foreseeable future. The position will require approximately 5-10 hours per week of work at a salary of $16.07 per hour. Candidates should send a CV/resume and a brief statement of interest to both Prof. William Boos (william DOT boos AT berkeley DOT edu) and Dr. Nandini Ramesh (nandiniramesh AT berkeley DOT edu). Applications received by October 23, 2020, will receive full consideration.</div>



      </div>
 );
}

export { Listing }
