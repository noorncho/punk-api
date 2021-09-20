import React from 'react';
import CardList from '../CardList/CardList';

const Main = (props) => {
    const {beerData} = props
    return (
        <div className="main">
            <CardList beerArr={beerData} />
        </div>
    )
}

export default Main;
