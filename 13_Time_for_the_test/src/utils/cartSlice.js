import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer; // reducern not reducers

/* what cartSlice has?
 cartSlice = {
    actions: {
        addItem, 
        removeItem,
         clearCart
    }
reducer:{
    bunch of reducers
}
 } */

/*
 * Create Store
 * -configureStore()  -  RTK
 *  - <Provider store = {store} -> - import from react-redux
 *
 *  Slice
 * RTK - createSlice({
 *              name: "",
 *              initialState :
 *              reducer:{
 *                addItems: (state,action)=> { state = action,payload}
 *                       }
 *                    })
 * export const { addItem, removeItem, clearCart } = cartSlice.actions;
 * export default cartSlice.reducer
 *
 * Put that Slice into store
 *    -{
 *       render:{
 *              cart: cartSlice,
 *              user: useSlice
 *              }
 *      }
 */
