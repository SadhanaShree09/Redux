import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from '../features/counterSlice';

const store = configureStore({
    reducer:{
        todoo : counterSlice.reducer,
    },
});

export default store;