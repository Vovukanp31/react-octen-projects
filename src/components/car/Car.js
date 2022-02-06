import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCar} from "../../store";

const Car = ({car:{id, model, price, year}}) => {
    const dispatch = useDispatch();


    return (
        <div>
            <div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            </div>
            <button onClick={() =>dispatch(deleteCar({id}))}>Delete</button>  {/* тут ми використовуємо редьюсер з car.slice, в який ми передаємо об*єкт з ключем id i значенням id*/}
        </div>
    );
};

export default Car;