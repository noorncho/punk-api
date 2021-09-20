import React from 'react';

const FilterItem = (props) => {
    const {label, property, filterBeer} = props;
    return (
        <>
            <section>
                <label>{label}</label>
                <input type="checkbox" name={`filter-${property}`} id={`filter-${property}`} className={`filter-${property}`} onClick={filterBeer} />
            </section>
        </>
    )
}

export default FilterItem;
