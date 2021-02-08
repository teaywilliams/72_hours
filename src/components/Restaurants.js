import React, { useState , useEffect} from 'react';
import RestDis from "./RestaurantDisplay";
// import './Restaurants.css'
// import axios from 'axios';
// Function name matches file name
const Restaurants =  ({location}) => {
    const key = "e6f396e0ab6bc80f5f9bc483871ad02a"
    const [restaurants, setRestaurants] = useState([]);

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
            <h2>Local Restaurants:</h2>
            {restaurants.map(
                rest => <RestDis
                    name={rest.restaurant.name}
                    id={rest.restaurant.id} />)}
        </div>
    )
}

export default Restaurants;