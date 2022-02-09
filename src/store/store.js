import {configureStore} from "@reduxjs/toolkit";
import {toDoListReducer} from "./toDoList.slice";

const store = configureStore({
    reducer: {
        toDoList: toDoListReducer
    }
})

export default store;