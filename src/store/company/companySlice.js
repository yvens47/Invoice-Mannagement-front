
import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify';

const endpoint = 'https://Invoice-Mannagement.jeanpierre34.repl.co/companies/';

export const companyDetail = createAsyncThunk('company/get', async (param, thunkAPI) => {
    console.log(thunkAPI)
    try {
        const response = await axios.get(`https://Invoice-Mannagement.jeanpierre34.repl.co/companies/${param}`);


        return response;
    } catch (error) {
        console.log("line", error)
    }

})

export const addCompany = createAsyncThunk('company/add', (payload) => {
    try {

        const response = axios.post(endpoint + `add`, {});

        return response;

    } catch (error) {

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
        builder.addCase(companyDetail.fulfilled, (state, action) => {
            state.loading = 'succeeded'

            state.detail = action.payload.data.company[0]

            return state;



        }).addCase(companyDetail.pending, (state, action) => {

            state.loading = 'pending'
        }).addCase(companyDetail.rejected, (state, action) => {
            state.loading = "failed"
        })

        builder.addCase(addCompany.fulfilled, (state, action) => {
            state.loading = 'succeeded'

        }).addCase(addCompany.pending, (state, action) => {
            state.loading = 'pending'

        }).addCase(addCompany.rejected, (state, action) => {
            state.loading = 'failed'
        })



    }
})

// Action creators are generated for each case reducer function
export const { } = companySlice.actions

export default companySlice.reducer