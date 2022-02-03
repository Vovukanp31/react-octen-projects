import React from 'react';
import {useSelector} from "react-redux";
import Car from "../car/Car";

const Cars = () => {
    const obj = useSelector(state => state['carReducer']) // селектор, який приймає колбек функцію, здебільшого аргумент називають state. І стейт у цій колбек функції це і є сам store з store.conf, у якого є reducer з сarReducer, який нам і потрібен. Що означає, що ми працюватимемо саме з car.slice. Тобто нашим obj буде наш об*єкт з initialState
    const {cars} = obj; // це я деструктуризував саме cars з initialState з car.slice
    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export default Cars;