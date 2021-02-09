import React from 'react'
const RestDis = ({ name, id }) => {
    return (
        <div key={id}>
            <p>{name}</p>
        </div>
    )
}

export default RestDis;