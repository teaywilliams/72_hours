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
    top: 200px;

    `;
const Astronaut = styled.div`
background-image: url(${Nasapic});
height: 1000px;
width: 100vw;
background-repeat: no-repeat;
background-size: cover;
   
    `;
    const Header = styled.h2`
        font-size: 40px;
        padding-top: 30px;
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
            <Astronaut className="mainDiv">
                <Header>Astronaut View Cam:</Header>
               {/* <Magnify src={Nasapic} /> */}
               <Image src={results.url} style={{width: "400px"}} />              
                         
                
            </Astronaut>
        </div>

        
    )};


export default Nasa;