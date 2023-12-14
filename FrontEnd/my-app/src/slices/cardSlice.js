import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
  name: 'Card',
  // Define initial state of the reducer/slice
  initialState: {
    current_card : {},    
    current_list : "market",
    card_list : [],
  },
  // Define the reducers 
  reducers: {
    update_selected_card: (state, action) => {
      state.current_card = action.payload
    },
    update_card_list: (state, action) => {
      state.card_list = action.payload
    },
    update_current_list: (state, action) => {
      state.current_list = action.payload
    },
}
})

// Action creators are generated for each case reducer function
export const { update_selected_card , update_card_list, update_current_list} = cardSlice.actions

export default cardSlice.reducer