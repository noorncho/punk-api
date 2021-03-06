import React from 'react';
import FilterItem from '../FilterItem/FilterItem';
import "./FilterList.scss";

const FiletersList = (props) => {
    const {filterAcidity, filterAlcohol, filterClassic} = props;

    return (
        <div className="filters">
            <h3>Filters</h3>
            <h4 className="filter-header">
                <FilterItem label={"High Alcohol (ABV > 6)"} property={"alcohol"} filterBeer={filterAlcohol} />
                <FilterItem label={"Classic Range"} property={"classic"} filterBeer={filterClassic} />
                <FilterItem label={"High Acidity (pH < 4)"} property={"acidity"} filterBeer={filterAcidity} />
            </h4>
        </div>
    )
}

export default FiletersList;
