import { configureStore } from '@reduxjs/toolkit';

import cartSlice from '../features/cart.slice';
import productsSlice from '../features/products.slice';
import usersSlice from '../features/users.slice';

const store = configureStore({
    reducer: {
        users: usersSlice,
        product: productsSlice,
        cart: cartSlice,
    },
});

export default store;
