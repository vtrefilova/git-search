import { configureStore } from '@reduxjs/toolkit';
import commitsSlice from './slices/commitsSlice';
import reposSlice from './slices/reposSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    repos: reposSlice,
    commits: commitsSlice,
  },
})
