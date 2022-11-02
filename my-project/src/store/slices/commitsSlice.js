import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
}

export const commitsSlice = createSlice({
    name: 'commits',
    initialState,
    reducers: {
      addCommitsList: (state, action) => {
      state.value = action.payload;
      },
  
      deleteCommitsList: (state) => {
        state.value = [];
      }
    },
  })
  
  export const { addCommitsList, deleteCommitsList } = commitsSlice.actions;
  
  export default commitsSlice.reducer;