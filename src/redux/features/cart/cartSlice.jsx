import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            
            const existingProduct = state.find((product)=>product.productId===action.payload.id)
            if(existingProduct){
                alert("product already exists in cart")
            }
            else{
                state.push({
                 ...action.payload,
                 id: Date.now(),
                 quantity: 1,
                 productId: action.payload.id
                })
            }
        }
    }
})



export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer 
