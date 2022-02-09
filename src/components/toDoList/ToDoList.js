import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import store from "../../store/store";
import {deleteListItem} from "../../store";

const ToDoList = () => {
   const {toDoList} = useSelector(store => store.toDoList);

   const dispatch = useDispatch()

    return (
        <div>
            {
                toDoList.map(({id, title}) => {
                    return <div key={id}>
                        <input type="checkbox"/>
                        <h3>{title}</h3>
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