import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name:'cart',
    initialState: {
        items:[]
    },
    reducers: {
        addItem: (state, action) => {

            //vanilla redux => Don't mutate the state
            //create new state and modify that
            // const newState = [...state];
            // newState.items.push(action.payload);
            
            //Redux Toolkit - says Mutate the state
            //mutating the state here
            state.items.push(action.payload); 
        },
        removeItem: (state,action) => {
            state.items.pop();
        },
        clearCart: (state) => {//can avoid writing action when not needed,
            state.items.length = 0;            
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
 
export default cartSlice.reducer;