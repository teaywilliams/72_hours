import React, { useEffect, useState } from 'react';

const baseURL = 'https://api.nasa.gov/planetary/earth/assets';
const key = 'pFFCDrM0PmIYvbh3w9sNhXiWfXpmSsw6jjae18bh';
// const lon = -85.88;
// const lat = 38.95;
const date = "2020-05-06";

const Nasa = () => {
    // const [ lon, setLon ] = useState('');
    // const [ lat, setLat ] = useState('');
    const [ results, setResults ] = useState({}); 

    useEffect (() => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
        // const url= 'https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=pFFCDrM0PmIYvbh3w9sNhXiWfXpmSsw6jjae18bh'
            const url = `${baseURL}?lon=${long}&lat=${lat}&date=${date}&dim=0.15&api_key=${key}`;
        
            fetch(url)
            .then(res => res.json())
            .then(json => 
                setResults(json)  
            )
            .catch(err => console.log(err));
    })}, []);

    console.log("RESULTS",results);
    
// fetchResults()

    return (
        <div className="main">
            <div className="mainDiv">
                <h4>Your neighborhood from Space:</h4>
                <img src={results.url} style={{width: "400px"}}/>
                
            </div>
        </div>

        
    )};


export default Nasa;