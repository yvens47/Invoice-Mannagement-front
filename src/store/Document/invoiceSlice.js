
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify';

const endpoint = 'https://Invoice-Mannagement.jeanpierre34.repl.co/invoices/';


export const requestPayment = createAsyncThunk('payment/request', async (data) => {

  try {

    const response = await axios.put(`${endpoint}payment-request`, data);
    console.log(response.data.message);

    return response;
  } catch (error) {
    console.log("line 27", error.response.data)
    if (error.code === "ERR_BAD_REQUEST") {
      toast.error(error.response.data.message);
      return null;
    }
    toast.error(error.response.data.message);
    return null;
  }
})


const initialState = {
  invoices: [],
  loading: 'idle', //'idle' | 'pending' | 'succeeded' | 'failed',
  error: null
}

export const invoiceSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    isLogin: {
      reducer(state, action) {
        if (localStorage.getItem('user'))
          state.user = JSON.parse(localStorage.getItem('user'))
        else
          state.user = null
      },
      prepare(user) {
        return {
          payload: user
        }
      }

    },


    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(requestPayment.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading = 'succeeded';
      console.log(action.payload)
    }).addCase(requestPayment.pending, (state, action) => {
      // Add user to the state array     
      state.loading = 'pending';
    }).addCase(requestPayment.rejected, (state, action) => {
      // Add user to the state array     
      state.loading = 'failed';
    });

  }
})

// Action creators are generated for each case reducer function
//export const { isLogin } = authSlice.actions

export default invoiceSlice.reducer