import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {},
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      addUser: (state, action) => {
      state.value = action.payload;
      },
  
      deleteUser: (state) => {
        state.value = {};
      }
    },
  })
  
  export const { addUser, daleteUser } = userSlice.actions;
  
  export default userSlice.reducer;
  