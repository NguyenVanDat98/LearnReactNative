import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'product',
  initialState: {
    chesse: 1,
    meat: 1,
    bacon: 1,
    salad: 1,
  },
  reducers: {
    incremented: (state, actions) => {
      state[actions.payload] += 1;
    },
    decremented: (state, actions) => {
      state[actions.payload] -= 1;
    },
  },
});

export const {incremented, decremented} = counterSlice.actions;
