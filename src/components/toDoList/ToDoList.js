import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {deleteListItem, isDoneChange} from "../../store";
import css from './toDoList.module.css';

const ToDoList = () => {
   const {toDoList} = useSelector(store => store.toDoList);

   const dispatch = useDispatch()

    return (
        <div className={css.listsContainer}>
            {
                toDoList.map(({id, title, isDone}) => {
                    return <div className={css.listItem} key={id}>
                        <input type="checkbox" value={isDone} onChange={() => dispatch(isDoneChange({id}))}/>
                        <h2 className={isDone? css.isDone : ''}>{title}</h2>
                        <button onClick={() => {
                            dispatch(deleteListItem({id}))
                        }
                        }>Delete</button>
                    </div>
                })
            }

        </div>
    );
};

export default ToDoList;