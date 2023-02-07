import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducer: {},
    extraReducers: {},
});

export default productSlice.reducer;
