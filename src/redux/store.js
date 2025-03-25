import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/features/product/productSlice'
import cartReducer from '../redux/features/cart/cartSlice'

const store = configureStore({
    reducer:{
        products: productReducer,
        carts: cartReducer
    }
})

export default store