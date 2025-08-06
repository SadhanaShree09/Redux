import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: "login",
    initialState: {
    username: "",
    password: "",
    },
    reducers:{
        login:(state,action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
        logout :(state) => {
            state.username = "";
            state.password = "";
        },
    },
});

export const {login , logout} = counterSlice.actions;

export default counterSlice.reducer;