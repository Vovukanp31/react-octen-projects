import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    toDoList: []
}

const toDoListSlice = createSlice({
    name: 'toDoList',
    initialState,
    reducers: {
        addListItem: (state, action) => {
            const toDoListItem = action.payload.listItem;
            state.toDoList.push(toDoListItem);
        },
        deleteListItem: (state, action) => {
            const deleteListId = action.payload.id;
            state.toDoList.filter(list => list.id !== deleteListId);
        }
    }
})

export const toDoListReducer = toDoListSlice.reducer;

export const {addListItem, deleteListItem} = toDoListSlice.actions;