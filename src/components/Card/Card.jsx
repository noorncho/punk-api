import React from 'react';
import "./Card.scss";

const Card = (props) => {
    const {beer} = props;
    return (
        <div className="beer">
            <img className="beer__image" src={beer.image_url} alt={beer.name} />
            <h3 className="beer__title">{beer.name}</h3>
            <p>First Brewed: {beer.first_brewed}</p>
            <p>Alcohol: {beer.abv}</p>
            <p>Acidity: {beer.ph}</p>
            <p className="beer__description">{beer.description}</p>
        </div>
    )
}

export default Card;
