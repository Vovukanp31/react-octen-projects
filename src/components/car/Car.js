import React from 'react';
import {useDispatch} from "react-redux";

const Car = ({car:{id, model, price, year}}) => {
    const dispatch = useDispatch();


    return (
        <div>
            <div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            </div>
            <button onClick={() =>dispatch(deleteCar)}>Delete</button>
        </div>
    );
};

export default Car;