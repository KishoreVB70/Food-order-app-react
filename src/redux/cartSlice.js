import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        items: [],
    },
    reducers: {
        // We should not return the state.items.push thing, we must only perform the action
        addCart: (state, action) => {state.items.push(action.payload)},
        deleteCart: state => {state.items.length = 0},
        removeCart: state => {state.items.pop()},
    }
})

export const {addCart, deleteCart, removeCart} = cartSlice.actions;

export default cartSlice.reducer;
