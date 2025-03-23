import { createSlice } from '@reduxjs/toolkit'
const initialState = [{
    id:1,
    name:"product1",
    category: "T-shirt",
    price:100,
    image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date:"08-12-2025"
    

},{
    id:2,
    name:"product1",
    category: "T-shirt",
    price:100,
    image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date:"08-12-2025"
    
}]
const productSlice = createSlice({
    name:'products',
    initialState: initialState,
    reducers:{
        addProduct:(state,action)  => {
            state.push({
                id:state.length>0?state[state.length-1].id:1,
                ...action.payload
            })

        }
    }
})

export const {addProduct} = productSlice.actions;
export default productSlice.reducer 