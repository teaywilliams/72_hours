import React from 'react'
const Restaurant = ({location}) => {
    
    return (
        <div>
            Restaurant comp: {location?.longitude}
        </div>
    )
}

export default Restaurant;