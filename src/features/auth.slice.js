import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import instance from '../utils/axios/axios';

const initialState = {
    user: [],
    users: null,
    isAuth: false,
    loading: false,
    error: null,
};

export const registration = createAsyncThunk(
    'user/registration',
    async (data, thunkAPI) => {
        try {
            const { email, password } = data;
            const res = await instance.post('/registration', {
                email,
                password,
            });
            localStorage.setItem('token', res.data.accessToken);
            return thunkAPI.fulfillWithValue(res.data.user);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.res.data.message);
        }
    }
);

export const login = createAsyncThunk('user/login', async (data, thunkAPI) => {
    try {
        const { email, password } = data;
        const res = await instance.post('/login', { email, password });
        localStorage.setItem('token', res.data.accessToken);
        return thunkAPI.fulfillWithValue(res.data.user);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.res.data.message);
    }
});

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        usersState(state, action) {
            state.users = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registration.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = true;
                state.user = action.payload;
            })
            .addCase(registration.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default usersSlice.reducer;
