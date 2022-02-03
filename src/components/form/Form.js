import React from 'react';
import {useDispatch} from "react-redux"; // імпортуємо метод useDispatch з redux - y
import {useForm} from "react-hook-form"; // імпорт з бібліотеки useForm

import {addCar} from "../../store";

const Form = () => {
    const {handleSubmit, register, reset} = useForm(); // Використовуємо useForm та деструктуризовуємо кілька властвостей

    const dispatch = useDispatch(); // ця функція повертає нам діспатч, на який ми потім можемо посилатись

    const submit = (data) => {
        dispatch(addCar({data})) // викликаємо тут діспатч, а у ньому викликаємо action з car.slice як функцію і передаємо, як аргумент - об*єкт, який повернеться у СarSlice як action у функції addCar, що знаходиться у reducers
        reset() // цю властивість використовуємо для того, щоб
    }

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>  {/*handleSubmit для того, щоб отрмувати дані з сабміту і форми*/}
                <label><input type="text" {...register('model')}/></label> {/*register використовуємо для того, щоб кожен інпут приєднанати до useForm()*/}
                <label><input type="text" {...register('price')}/></label>
                <label><input type="text" {...register('year')}/></label>
                <button>Save</button>
            </form>

        </div>
    );
};

export default Form;