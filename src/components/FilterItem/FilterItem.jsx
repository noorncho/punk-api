import React from 'react';

const FilterItem = (props) => {
    const {items} = props;

    return items.map((item) => {
        return (
            <section>
                <label>{item[1]}</label>
                <input type="checkbox" name={`filter-${item[0]}`} id={`filter-${item[0]}`} className={`filter-${item[0]}`} />
            </section>
        )
    });
}

export default FilterItem;
