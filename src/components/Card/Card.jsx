import React from 'react';
import "./Card.scss";

const Card = (props) => {
    const {beer} = props;
    return (
        <div className="beer">
            <img className="beer__image" src={beer.image_url} alt={beer.name} />
            <h2 className="beer__title">{beer.name}</h2>
            <h4 className="beer__tagline">{beer.tagline}</h4>
            <p className="beer__first-brewed">First Brewed: {beer.first_brewed.split("/")[1]}</p>
            <p className="beer__alcohol">Alcohol: {beer.abv}%</p>
            <p className="beer__acidity">Acidity: {beer.ph}</p>
            <p className="beer__description">{beer.description}</p>
        </div>
    )
}

export default Card;
