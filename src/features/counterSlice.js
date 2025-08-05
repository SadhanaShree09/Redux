import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    todoo : [],
};

export const counterSlice = createSlice({
    name: "todoo",
    initialState,
    reducers:{
        addTodo:(state,action) => {
            state.todoo.push({
                id : Date.now(),
                text : action.payload,
                completed : false,
            });
        },
        deleteTodo :(state,action) => {
            state.todoo = state.todoo.filter((t) => t.id !== action.payload)
        },
        toggleTodo : (state,action) => {
            const todo = state.todoo.find((t) => t.id === action.payload)
            if(todo){
                todo.completed = !todo.completed;
            }
        },
    },
});

export const {addTodo , deleteTodo , toggleTodo} = counterSlice.actions;

export default counterSlice.reducer;