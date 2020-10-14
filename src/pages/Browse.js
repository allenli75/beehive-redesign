import React from 'react';
import './Browse.css';
import { Navbar } from './Navbar.js';
import { Listing } from './Listing.js';
import { CardScroller } from './CardScroller.js';


const positions = [
            {
              title: 'Research Data Analyst in Climate Prediction',
              department: 'Earth and Planetary Sciences',
              description: 'We are seeking a student intern interested in climate science to analyze large data sets containing observations of rainfall. The project will investigate the factors that influence rainfall in autumn over multiple densely-populated regions of the tropics by performing statistical analyses on geospatial data, with the aim of developing a seasonal forecasting scheme for this rainfall. The candidate should have experience working in Python, R, or MATLAB, and some background in data science, statistics, or a related field. Experience with xarray or similar packages for processing netCDF files is preferred but not essential. The work will be done in collaboration with Prof. William Boos and Dr. Nandini Ramesh, with work done remotely for the foreseeable future. The position will require approximately 5-10 hours per week of work at a salary of $16.07 per hour. Candidates should send a CV/resume and a brief statement of interest to both Prof. William Boos (william DOT boos AT berkeley DOT edu) and Dr. Nandini Ramesh (nandiniramesh AT berkeley DOT edu). Applications received by October 23, 2020, will receive full consideration.',
              paid: true,
              last_updated: '2 days ago'
            },
            {
              title: 'Research Data Analyst in Climate Prediction',
              deparment: 'Earth and Planetary Sciences',
              description: 'We are seeking a student intern interested in climate science to analyze large data sets containing observations of rainfall. The project will investigate the factors that influence rainfall in autumn over multiple densely-populated regions of the tropics by performing statistical analyses on geospatial data, with the aim of developing a seasonal forecasting scheme for this rainfall. The candidate should have experience working in Python, R, or MATLAB, and some background in data science, statistics, or a related field. Experience with xarray or similar packages for processing netCDF files is preferred but not essential. The work will be done in collaboration with Prof. William Boos and Dr. Nandini Ramesh, with work done remotely for the foreseeable future. The position will require approximately 5-10 hours per week of work at a salary of $16.07 per hour. Candidates should send a CV/resume and a brief statement of interest to both Prof. William Boos (william DOT boos AT berkeley DOT edu) and Dr. Nandini Ramesh (nandiniramesh AT berkeley DOT edu). Applications received by October 23, 2020, will receive full consideration.',
              paid: true,
              last_updated: '2 days ago'
            },
            {
              title: 'Research Data Analyst in Climate Prediction',
              deparment: 'Earth and Planetary Sciences',
              description: 'We are seeking a student intern interested in climate science to analyze large data sets containing observations of rainfall. The project will investigate the factors that influence rainfall in autumn over multiple densely-populated regions of the tropics by performing statistical analyses on geospatial data, with the aim of developing a seasonal forecasting scheme for this rainfall. The candidate should have experience working in Python, R, or MATLAB, and some background in data science, statistics, or a related field. Experience with xarray or similar packages for processing netCDF files is preferred but not essential. The work will be done in collaboration with Prof. William Boos and Dr. Nandini Ramesh, with work done remotely for the foreseeable future. The position will require approximately 5-10 hours per week of work at a salary of $16.07 per hour. Candidates should send a CV/resume and a brief statement of interest to both Prof. William Boos (william DOT boos AT berkeley DOT edu) and Dr. Nandini Ramesh (nandiniramesh AT berkeley DOT edu). Applications received by October 23, 2020, will receive full consideration.',
              paid: true,
              last_updated: '2 days ago'
            },
            {
              title: 'Research Data Analyst in Climate Prediction',
              deparment: 'Earth and Planetary Sciences',
              description: 'We are seeking a student intern interested in climate science to analyze large data sets containing observations of rainfall. The project will investigate the factors that influence rainfall in autumn over multiple densely-populated regions of the tropics by performing statistical analyses on geospatial data, with the aim of developing a seasonal forecasting scheme for this rainfall. The candidate should have experience working in Python, R, or MATLAB, and some background in data science, statistics, or a related field. Experience with xarray or similar packages for processing netCDF files is preferred but not essential. The work will be done in collaboration with Prof. William Boos and Dr. Nandini Ramesh, with work done remotely for the foreseeable future. The position will require approximately 5-10 hours per week of work at a salary of $16.07 per hour. Candidates should send a CV/resume and a brief statement of interest to both Prof. William Boos (william DOT boos AT berkeley DOT edu) and Dr. Nandini Ramesh (nandiniramesh AT berkeley DOT edu). Applications received by October 23, 2020, will receive full consideration.',
              paid: true,
              last_updated: '2 days ago'
            },
            {
              title: 'Research Data Analyst in Climate Prediction',
              deparment: 'Earth and Planetary Sciences',
              description: 'We are seeking a student intern interested in climate science to analyze large data sets containing observations of rainfall. The project will investigate the factors that influence rainfall in autumn over multiple densely-populated regions of the tropics by performing statistical analyses on geospatial data, with the aim of developing a seasonal forecasting scheme for this rainfall. The candidate should have experience working in Python, R, or MATLAB, and some background in data science, statistics, or a related field. Experience with xarray or similar packages for processing netCDF files is preferred but not essential. The work will be done in collaboration with Prof. William Boos and Dr. Nandini Ramesh, with work done remotely for the foreseeable future. The position will require approximately 5-10 hours per week of work at a salary of $16.07 per hour. Candidates should send a CV/resume and a brief statement of interest to both Prof. William Boos (william DOT boos AT berkeley DOT edu) and Dr. Nandini Ramesh (nandiniramesh AT berkeley DOT edu). Applications received by October 23, 2020, will receive full consideration.',
              paid: true,
              last_updated: '2 days ago'
            },
            {
              title: 'Research Data Analyst in Climate Prediction',
              deparment: 'Earth and Planetary Sciences',
              description: 'We are seeking a student intern interested in climate science to analyze large data sets containing observations of rainfall. The project will investigate the factors that influence rainfall in autumn over multiple densely-populated regions of the tropics by performing statistical analyses on geospatial data, with the aim of developing a seasonal forecasting scheme for this rainfall. The candidate should have experience working in Python, R, or MATLAB, and some background in data science, statistics, or a related field. Experience with xarray or similar packages for processing netCDF files is preferred but not essential. The work will be done in collaboration with Prof. William Boos and Dr. Nandini Ramesh, with work done remotely for the foreseeable future. The position will require approximately 5-10 hours per week of work at a salary of $16.07 per hour. Candidates should send a CV/resume and a brief statement of interest to both Prof. William Boos (william DOT boos AT berkeley DOT edu) and Dr. Nandini Ramesh (nandiniramesh AT berkeley DOT edu). Applications received by October 23, 2020, will receive full consideration.',
              paid: true,
              last_updated: '2 days ago'
            },
            {
              title: 'Research Data Analyst in Climate Prediction',
              deparment: 'Earth and Planetary Sciences',
              description: 'We are seeking a student intern interested in climate science to analyze large data sets containing observations of rainfall. The project will investigate the factors that influence rainfall in autumn over multiple densely-populated regions of the tropics by performing statistical analyses on geospatial data, with the aim of developing a seasonal forecasting scheme for this rainfall. The candidate should have experience working in Python, R, or MATLAB, and some background in data science, statistics, or a related field. Experience with xarray or similar packages for processing netCDF files is preferred but not essential. The work will be done in collaboration with Prof. William Boos and Dr. Nandini Ramesh, with work done remotely for the foreseeable future. The position will require approximately 5-10 hours per week of work at a salary of $16.07 per hour. Candidates should send a CV/resume and a brief statement of interest to both Prof. William Boos (william DOT boos AT berkeley DOT edu) and Dr. Nandini Ramesh (nandiniramesh AT berkeley DOT edu). Applications received by October 23, 2020, will receive full consideration.',
              paid: true,
              last_updated: '2 days ago'
            },
            {
              title: 'Research Data Analyst in Climate Prediction',
              deparment: 'Earth and Planetary Sciences',
              description: 'We are seeking a student intern interested in climate science to analyze large data sets containing observations of rainfall. The project will investigate the factors that influence rainfall in autumn over multiple densely-populated regions of the tropics by performing statistical analyses on geospatial data, with the aim of developing a seasonal forecasting scheme for this rainfall. The candidate should have experience working in Python, R, or MATLAB, and some background in data science, statistics, or a related field. Experience with xarray or similar packages for processing netCDF files is preferred but not essential. The work will be done in collaboration with Prof. William Boos and Dr. Nandini Ramesh, with work done remotely for the foreseeable future. The position will require approximately 5-10 hours per week of work at a salary of $16.07 per hour. Candidates should send a CV/resume and a brief statement of interest to both Prof. William Boos (william DOT boos AT berkeley DOT edu) and Dr. Nandini Ramesh (nandiniramesh AT berkeley DOT edu). Applications received by October 23, 2020, will receive full consideration.',
              paid: true,
              last_updated: '2 days ago'
            },
            {
              title: 'Research Data Analyst in Climate Prediction',
              deparment: 'Earth and Planetary Sciences',
              description: 'We are seeking a student intern interested in climate science to analyze large data sets containing observations of rainfall. The project will investigate the factors that influence rainfall in autumn over multiple densely-populated regions of the tropics by performing statistical analyses on geospatial data, with the aim of developing a seasonal forecasting scheme for this rainfall. The candidate should have experience working in Python, R, or MATLAB, and some background in data science, statistics, or a related field. Experience with xarray or similar packages for processing netCDF files is preferred but not essential. The work will be done in collaboration with Prof. William Boos and Dr. Nandini Ramesh, with work done remotely for the foreseeable future. The position will require approximately 5-10 hours per week of work at a salary of $16.07 per hour. Candidates should send a CV/resume and a brief statement of interest to both Prof. William Boos (william DOT boos AT berkeley DOT edu) and Dr. Nandini Ramesh (nandiniramesh AT berkeley DOT edu). Applications received by October 23, 2020, will receive full consideration.',
              paid: true,
              last_updated: '2 days ago'
            },
            {
              title: 'Research Data Analyst in Climate Prediction',
              deparment: 'Earth and Planetary Sciences',
              description: 'We are seeking a student intern interested in climate science to analyze large data sets containing observations of rainfall. The project will investigate the factors that influence rainfall in autumn over multiple densely-populated regions of the tropics by performing statistical analyses on geospatial data, with the aim of developing a seasonal forecasting scheme for this rainfall. The candidate should have experience working in Python, R, or MATLAB, and some background in data science, statistics, or a related field. Experience with xarray or similar packages for processing netCDF files is preferred but not essential. The work will be done in collaboration with Prof. William Boos and Dr. Nandini Ramesh, with work done remotely for the foreseeable future. The position will require approximately 5-10 hours per week of work at a salary of $16.07 per hour. Candidates should send a CV/resume and a brief statement of interest to both Prof. William Boos (william DOT boos AT berkeley DOT edu) and Dr. Nandini Ramesh (nandiniramesh AT berkeley DOT edu). Applications received by October 23, 2020, will receive full consideration.',
              paid: true,
              last_updated: '2 days ago'
            },
            {
              title: 'Research Data Analyst in Climate Prediction',
              deparment: 'Earth and Planetary Sciences',
              description: 'We are seeking a student intern interested in climate science to analyze large data sets containing observations of rainfall. The project will investigate the factors that influence rainfall in autumn over multiple densely-populated regions of the tropics by performing statistical analyses on geospatial data, with the aim of developing a seasonal forecasting scheme for this rainfall. The candidate should have experience working in Python, R, or MATLAB, and some background in data science, statistics, or a related field. Experience with xarray or similar packages for processing netCDF files is preferred but not essential. The work will be done in collaboration with Prof. William Boos and Dr. Nandini Ramesh, with work done remotely for the foreseeable future. The position will require approximately 5-10 hours per week of work at a salary of $16.07 per hour. Candidates should send a CV/resume and a brief statement of interest to both Prof. William Boos (william DOT boos AT berkeley DOT edu) and Dr. Nandini Ramesh (nandiniramesh AT berkeley DOT edu). Applications received by October 23, 2020, will receive full consideration.',
              paid: true,
              last_updated: '2 days ago'
            },
            {
              title: 'Research Data Analyst in Climate Prediction',
              deparment: 'Earth and Planetary Sciences',
              description: 'We are seeking a student intern interested in climate science to analyze large data sets containing observations of rainfall. The project will investigate the factors that influence rainfall in autumn over multiple densely-populated regions of the tropics by performing statistical analyses on geospatial data, with the aim of developing a seasonal forecasting scheme for this rainfall. The candidate should have experience working in Python, R, or MATLAB, and some background in data science, statistics, or a related field. Experience with xarray or similar packages for processing netCDF files is preferred but not essential. The work will be done in collaboration with Prof. William Boos and Dr. Nandini Ramesh, with work done remotely for the foreseeable future. The position will require approximately 5-10 hours per week of work at a salary of $16.07 per hour. Candidates should send a CV/resume and a brief statement of interest to both Prof. William Boos (william DOT boos AT berkeley DOT edu) and Dr. Nandini Ramesh (nandiniramesh AT berkeley DOT edu). Applications received by October 23, 2020, will receive full consideration.',
              paid: true,
              last_updated: '2 days ago'
            }
]

const Browse = () => {
    return (
        <div className="browse">
          <Navbar/>
          <div className="main-container">
            <CardScroller cards={positions}/>
            <Listing listing={positions[0]}/>
          </div>

        </div>
    );
};

export { Browse };
