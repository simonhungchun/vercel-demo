/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 1,
  },
  reducers: {
    increase(state) {
      state.value += 1;
    },
    decrease(state) {
      state.value -= 1;
    },
    // {type: '', payload: ''}
    increaseByValue(state, { payload }) {
      // eslint-disable-next-line no-console
      console.log(payload);
      state.value += payload;
    },
  },
});

export const { increase, decrease, increaseByValue } = counterSlice.actions;

export default counterSlice;
