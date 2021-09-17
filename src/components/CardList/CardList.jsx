import React from 'react';
import "./CardList.scss";
import Card from '../Card/Card';

const CardList = (props) => {
    const{beerArr} = props;

    const cardListJSX = beerArr.map((beer) => (
        <Card beer={beer} />
    ));

    return (
        <div className="beers__list">
            {cardListJSX}
        </div>
    )
}

export default CardList;
