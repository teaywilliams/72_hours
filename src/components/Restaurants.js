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
    const Image = styled.img`
        width: 100%;
        position: relative;
        
        `;
    const Text = styled.div`
        position: relative;
        bottom: 850px;
        left: 350px;
        font-weight: bold;
        font-size: 30px;
        color: white;
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
        
        <div>
            <Image src={Restaurantpic} />
            <Text>
            <Header>Local Restaurants:</Header>
            <br />
            {restaurants.map(
                rest => <RestDis
                    name={rest.restaurant.name}
                    id={rest.restaurant.id} />)}
            </Text>            
        </div>
        
    )
}

export default Restaurants;