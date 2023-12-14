import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userID: -1,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserID: (state, action) => {
            state.userID = action.payload;
        },
    },
});

export const { updateUserID } = userSlice.actions;

export default userSlice.reducer;
