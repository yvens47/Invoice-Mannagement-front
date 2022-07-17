
import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify';

const endpoint = 'https://Invoice-Mannagement.jeanpierre34.repl.co/invoices/';

export const companyDetail = createAsyncThunk('company/get', async (data, thunkAPI) => {
    try {
        const response = await axios.post(endpoint, data, config);
        return { response, percentage };
    } catch (error) {
        console.log("line", error)
    }

})

const initialState = {
    detail: {},
    loading: 'idle', //'idle' | 'pending' | 'succeeded' | 'failed',
    error: null,
    uploadPercent: 0
}

export const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {



    }
})

// Action creators are generated for each case reducer function
//export const { isLogin } = authSlice.actions

export default companySlice.reducer