import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Nasapic from './assets/nasapic.jpg';

const baseURL = 'https://api.nasa.gov/planetary/earth/assets';
const key = 'pFFCDrM0PmIYvbh3w9sNhXiWfXpmSsw6jjae18bh';
const date = "2020-05-06";
const Image = styled.img`
    width: 420px;
    height: 420px;
    border-radius: 50%;
    border: 5px solid #3c3592;
    position: relative;
    right: 320px;
    bottom: 670px;

    `;
const Magnify = styled.img`
    width: 100%; 
   
    `;

const Nasa = () => {

    const [ results, setResults ] = useState({}); 

    useEffect (() => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
       
            const url = `${baseURL}?lon=${long}&lat=${lat}&date=${date}&dim=0.15&api_key=${key}`;
        
            fetch(url)
            .then(res => res.json())
            .then(json => 
                setResults(json)  
            )
            .catch(err => console.log(err));
    })}, []);

    console.log("RESULTS",results);
    
    return (
        <div className="main">
            <div className="mainDiv">
                <h4>Astronaut View Cam:</h4>
               <Magnify src={Nasapic} />
               <Image src={results.url} style={{width: "400px"}} />
               
                
                         
                
            </div>
        </div>

        
    )};


export default Nasa;