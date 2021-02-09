import React, { useState , useEffect} from 'react';
import RestDis from "./RestaurantDisplay";
import styled from 'styled-components'
import Restaurantpic from './assets/restaurantpic.jpg';
// import './Restaurants.css'
// import axios from 'axios';
// Function name matches file name
const Restaurants =  ({location}) => {
    const key = "e6f396e0ab6bc80f5f9bc483871ad02a"
    const [restaurants, setRestaurants] = useState([]);

    const Bkgrnd = styled.div`
    background-image: url(${Restaurantpic});
    width: 100vw;
    background-repeat: no-repeat;
    background-size: cover;
    `;
    
    const Text = styled.div`
        position: relative;
        text-align: right;
        // left: 20vw;
        font-weight: bold;
        font-size: 30px;
        color: white;
        padding-right:200px;
        padding-top: 150px;
        padding-bottom: 150px;
        
        `;
    const Header = styled.h2`
        font-size: 40px;
        `;

    useEffect(() => {
        // fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=39.779801&lon=-86.1394092&apikey=${key}`)
        if (location.latitude && location.longitude){
            fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${location.latitude}&lon=${location.longitude}&apikey=${key}`)
            .then(res => res.json())
            .then(json => {
                // console.log(json.nearby_restaurants[0].restaurant.name)
                console.log(json.nearby_restaurants)
                setRestaurants(json.nearby_restaurants)
                // console.log({json.nearby_restaurants[0].restaurant.name})
            })
        }  
    }, [location])
    
    return (
        
        <Bkgrnd>
           
            <Text>
            <Header>Local Restaurants:</Header>
            <br />
            {restaurants.map(
                rest => <RestDis
                    name={rest.restaurant.name}
                    id={rest.restaurant.id} />)}
            </Text>  
                       
        </Bkgrnd>
        
    )
}

export default Restaurants;