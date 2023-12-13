import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userID: null,
    username: null,
    userLastName: null,
    userEmail: null,
    userSurname: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;
