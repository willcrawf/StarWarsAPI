import React from 'react';


function StarshipPage(props){
    const starship = props.location.starshipState.starship
    return (
    <div>
        <h2>NAME: {starship.name}</h2>
        <h2>MODEL: {starship.model}</h2>
        <a href = "/">Go back</a>
    </div>

      )}
export default StarshipPage