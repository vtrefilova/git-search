import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
}

export const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {
      addReposList: (state, action) => {
      state.value = action.payload;
      },
  
      deleteReposList: (state) => {
        state.value = [];
      }
    },
  })
  
  export const { addReposList, deleteReposList } = reposSlice.actions;
  
  export default reposSlice.reducer;