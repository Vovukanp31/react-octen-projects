import {createSlice} from "@reduxjs/toolkit";


const carSlice = createSlice({
    name: 'carSlice', //назва слайсу, по якій ми його відловлюватимемо
    initialState: { //першочергове значення стейту
        cars: [] // сам стейт
    },
    reducers: { //тут створюємо всі редьюсери, які будуть проводити конкретні дії над стейтом
        addCar: (state, action) => {
            state.cars.push({ // тут звертаємось до стейту, який буде пушити в масив, той що знаходиться в initialState.cars
                id: new Date().getTime(), // тут ми генеруємо id, завдяки об*єкту дейт, який вертає поточний час
                ...action.payload.data // ці данні ми отримуємо з Form, які передали сюди через  dispatch(addCar({data})). Отримуємо Об*єкт(payload), а через те що ми вфеф запхали у об*єкт - ми можемо тут його і дістати через крапку(payload.data)
            })
        },  //кожен редьюсер приймає два аргументи. 1)сам стейт 2) дія, яку ми над ним будемо проводити
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id) // тут ми описуємо, що буде робити при виклику цього редьюсера
            // В state.cars ми звертаємось до нашого initialState.cars, потім фільтруємо його за id з тим, яке ми отримуємо з кожного елемента, при нажатті кнопки delete
            // в Car.js
        }
    }
});

const carReducer = carSlice.reducer; // це редьюсер нашого слайсу

export const {addCar, deleteCar} = carSlice.actions; //Тут ми виводимо методи об*єкту reducers через деструктуризацю

export default carReducer; //експортуємо редьюсер слайсу