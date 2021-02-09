import React, {useEffect} from "react";
import styled from 'styled-components'

const Location = ({location, setLocation}) => {
    const Header = styled.h2`
        font-size: 50px;
        `;
    useEffect(()=> {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            let my_location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
            console.log(my_location)
            setLocation(my_location)
            })
    },[])
    return (
        <div>
            <Header>Using Geolocation JavaScript API in React</Header>
            <br />
        </div>
    )
}


export default Location;