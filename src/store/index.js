import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counter';
import user from './slices/user';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user,
  },
});

export default store;
