import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    toDoList: []
}

const toDoListSlice = createSlice({
    name: 'toDoList',
    initialState,
    reducers: {
        addListItem: ((state, action) => {
            const toDoListItem = action.payload.listItem;
            state.toDoList.push(toDoListItem);
        }),

        isDoneChange: ((state, action) => {
            const toDo = state.toDoList.find(toDo => toDo.id === action.payload.id);
            toDo.isDone = !toDo.isDone;
        }),

        deleteListItem: ((state, action) => {
            const toDeleteList = state.toDoList.findIndex(toDo => toDo.id === action.payload.id)
            state.toDoList.splice(toDeleteList, 1);
        })
    }
})

export const toDoListReducer = toDoListSlice.reducer;

export const {addListItem, deleteListItem, isDoneChange} = toDoListSlice.actions;