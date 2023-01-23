import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment : (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        desiredIncrement: (state , action) => {
            state.value = state.value + action.payload 
        }
    }
})

export const { increment, decrement , desiredIncrement } = counterSlice.actions;

export const store = configureStore({
  reducer: {
      counter : counterSlice.reducer
  },
})