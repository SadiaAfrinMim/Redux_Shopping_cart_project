import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            
            const existingProduct = state.find((product)=>product.id===action.payload)
        }
    }
})



export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer 
