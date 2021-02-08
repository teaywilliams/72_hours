import React, {useEffect} from "react";

const Location = ({location, setLocation}) => {
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
            <h4>Using geolocation JavaScript API in React</h4>
        </div>
    )
}


export default Location;