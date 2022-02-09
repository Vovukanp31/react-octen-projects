import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addListItem} from "../../store";

const Form = () => {
    const {register, handleSubmit, reset} = useForm();

    const dispatch = useDispatch()

    const submit = (data) => {
        const listItem = {
            id: new Date().getTime(),
            title: data.toDoList
        }

        dispatch(addListItem({listItem}))

        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'write your ToDo'} {...register('toDoList')}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;