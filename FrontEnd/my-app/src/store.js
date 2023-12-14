import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './slices/cardSlice';
import userReducer from './slices/userSlice';

export default configureStore({
  reducer: {
    cardReducer: cardReducer ,
    userReducer: userReducer
    },
})
