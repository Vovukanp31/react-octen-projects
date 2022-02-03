import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./car.slice";

const store = configureStore({
    reducer: {
        carReducer  //перенесли сюди редьюсер з carSlice, в об*єкті reducer може бути багато різних редьюсерів з інших слайсів
    }
})

export default store