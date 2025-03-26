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
        },
        // increase quantity
      increaseQuatity : (state,action)=>{
            const product = state.find((product)=>product.id === action.payload);
            if(product ){
                product.quantity = product.quantity+1
            }

        },
        // decrease quantity
        decreseQuantity : (state,action) =>{
            const product = state.find((product)=>product.id===action.payload);
            if(product && product.quantity>1){
                product.quantity--
            }

        },
        // removeFromCart
        removeFromCart:(state,action)=>{
            return state.filter((product)=>product.id!==action.payload)

        }
    }
})



export const {addToCart,increaseQuatity,decreseQuantity,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer 
