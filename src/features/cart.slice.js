import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productId: [],
    product: null,
    loading: false,
    error: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: {},
});

export default cartSlice.reducer;
