import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    itemCount:[],
    res:{},
    price:0,
  },
  reducers: {
    addItem: (state, action) => {
     
      state.items.push(action.payload);
      
    },
    addRest:(state,action)=>{
      state.res=action.payload;
      console.log("res in cart",state.res)
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
    totalPrice:(state,action)=>{
      state.price+=action.payload;
    },
    totalPriceMinus:(state,action)=>{
      state.price-=action.payload;
    },
    handleItemCount:(state,action)=>{
      
    }
  },
});

export const{addItem,removeItem,clearCart,addRest,totalPrice,itemCount,handleItemCount,totalPriceMinus} =cartSlice.actions;
export  default cartSlice.reducer;
