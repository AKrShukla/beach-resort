import React from 'react'
import {useContext} from 'react'
import {RoomContext} from "../Context"
import Title from "../components/Title"

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    let types = getUnique(rooms, 'type');
    types = ['all', ...types];
    types = types.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    })
    let people = getUnique(rooms, 'capacity');
    people = people.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* Selct Type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* End Selct Type */}
                {/* Guests */}
                <div className="form-group">
                    <label htmlFor="capacity">guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/* End Guests */}
                {/* Price */}
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" name="price" id="price" value={price}
                    min={minPrice} max={maxPrice} className="form-control" onChange={handleChange} />
                </div>
                {/* End Price */}
                {/* Size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                    <input type="number" name="minSize" id="size" value={minSize}
                    className="size-input" onChange={handleChange} />
                    <input type="number" name="maxSize" id="size" value={maxSize}
                    className="size-input" onChange={handleChange} />
                    </div>
                </div>
                {/* End Size */}
                {/* Extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                    <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* End Extras */}
            </form>
        </section>
    )
}
