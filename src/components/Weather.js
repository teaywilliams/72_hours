import React from 'react'
const Weather = ({location}) => {
    
    return (
        <div>
            Weather comp: {location?.longitude}
        </div>
    )
}

export default Weather;