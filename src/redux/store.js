import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './reducers/basketSlice';
import wishlistReducer from './reducers/wishlistSlice';
import productReducer from './reducers/productsSlice';
import userReducer from './reducers/usersSlice'

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        wishlist: wishlistReducer,
        products:productReducer,
        users:userReducer
    }
})